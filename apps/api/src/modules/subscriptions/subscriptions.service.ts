import { Injectable, Logger, BadRequestException, NotFoundException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from '../../core/prisma/prisma.service'
import Stripe from 'stripe'

type StripeClient = InstanceType<typeof Stripe>

@Injectable()
export class SubscriptionsService {
  private readonly logger = new Logger(SubscriptionsService.name)
  private stripe: StripeClient | null = null

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {
    const stripeKey = this.configService.get('STRIPE_SECRET_KEY')
    if (stripeKey) {
      this.stripe = new Stripe(stripeKey, { apiVersion: '2026-03-25.dahlia' })
    }
  }

  async getUserSubscription(userId: string) {
    const subscription = await this.prisma.subscription.findUnique({
      where: { userId },
      include: { plan: true },
    })

    return subscription
  }

  async createCheckoutSession(userId: string, planId: string, couponCode?: string) {
    if (!this.stripe) {
      throw new BadRequestException('Stripe not configured')
    }

    const user = await this.prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      throw new NotFoundException('User not found')
    }

    const plan = await this.prisma.plan.findUnique({ where: { id: planId } })
    if (!plan || !plan.stripePriceId) {
      throw new NotFoundException('Plan not found or not available')
    }

    // Create or get Stripe customer
    let customerId: string | undefined
    const existingSub = await this.prisma.subscription.findUnique({
      where: { userId },
    })

    if (existingSub?.stripeCustomerId) {
      customerId = existingSub.stripeCustomerId
    } else {
      const customer = await this.stripe.customers.create({
        email: user.email,
        metadata: { userId },
      })
      customerId = customer.id
    }

    // Build checkout session params
    const params: any = {
      customer: customerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: plan.stripePriceId,
          quantity: 1,
        },
      ],
      success_url: `${this.configService.get('APP_URL')}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${this.configService.get('APP_URL')}/pricing`,
      metadata: { userId, planId },
    }

    // Apply coupon if provided
    if (couponCode) {
      const coupon = await this.prisma.coupon.findUnique({
        where: { code: couponCode.toUpperCase() },
      })

      if (coupon && coupon.isActive && (!coupon.expiresAt || coupon.expiresAt > new Date())) {
        if (!coupon.maxUses || coupon.usedCount < coupon.maxUses) {
          params.discounts = [{ coupon: coupon.code }]
        }
      }
    }

    const session = await this.stripe.checkout.sessions.create(params)

    return { url: session.url }
  }

  async cancelSubscription(userId: string) {
    if (!this.stripe) {
      throw new BadRequestException('Stripe not configured')
    }

    const subscription = await this.prisma.subscription.findUnique({
      where: { userId },
    })

    if (!subscription || !subscription.stripeSubId) {
      throw new NotFoundException('No active subscription')
    }

    await this.stripe.subscriptions.update(subscription.stripeSubId, {
      cancel_at_period_end: true,
    })

    await this.prisma.subscription.update({
      where: { userId },
      data: { cancelAtPeriodEnd: true },
    })

    return { success: true }
  }

  async handleWebhook(body: any) {
    // Webhook signature verification should be done in middleware
    const event = body

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        const userId = session.metadata?.userId
        const planId = session.metadata?.planId
        const stripeSubId = session.subscription
        const stripeCustomerId = session.customer

        if (userId && planId) {
          await this.prisma.subscription.upsert({
            where: { userId },
            create: {
              userId,
              planId,
              stripeSubId,
              stripeCustomerId,
              status: 'ACTIVE',
              currentPeriodStart: new Date(),
            },
            update: {
              planId,
              stripeSubId,
              stripeCustomerId,
              status: 'ACTIVE',
            },
          })

          this.logger.log(`Subscription created for user ${userId}`)
        }
        break
      }

      case 'customer.subscription.updated': {
        const sub = event.data.object
        const stripeSubId = sub.id

        await this.prisma.subscription.updateMany({
          where: { stripeSubId },
          data: {
            status: sub.status.toUpperCase() as any,
            currentPeriodStart: new Date(sub.current_period_start * 1000),
            currentPeriodEnd: new Date(sub.current_period_end * 1000),
          },
        })
        break
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object
        const stripeSubId = sub.id

        await this.prisma.subscription.updateMany({
          where: { stripeSubId },
          data: { status: 'CANCELED' },
        })
        break
      }
    }

    return { received: true }
  }
}