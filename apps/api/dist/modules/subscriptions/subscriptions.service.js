"use strict";
var SubscriptionsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const stripe_1 = tslib_1.__importDefault(require("stripe"));
let SubscriptionsService = SubscriptionsService_1 = class SubscriptionsService {
    constructor(prisma, configService) {
        this.prisma = prisma;
        this.configService = configService;
        this.logger = new common_1.Logger(SubscriptionsService_1.name);
        this.stripe = null;
        const stripeKey = this.configService.get('STRIPE_SECRET_KEY');
        if (stripeKey) {
            this.stripe = new stripe_1.default(stripeKey, { apiVersion: '2026-03-25.dahlia' });
        }
    }
    async getUserSubscription(userId) {
        const subscription = await this.prisma.subscription.findUnique({
            where: { userId },
            include: { plan: true },
        });
        return subscription;
    }
    async createCheckoutSession(userId, planId, couponCode) {
        if (!this.stripe) {
            throw new common_1.BadRequestException('Stripe not configured');
        }
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const plan = await this.prisma.plan.findUnique({ where: { id: planId } });
        if (!plan || !plan.stripePriceId) {
            throw new common_1.NotFoundException('Plan not found or not available');
        }
        // Create or get Stripe customer
        let customerId;
        const existingSub = await this.prisma.subscription.findUnique({
            where: { userId },
        });
        if (existingSub?.stripeCustomerId) {
            customerId = existingSub.stripeCustomerId;
        }
        else {
            const customer = await this.stripe.customers.create({
                email: user.email,
                metadata: { userId },
            });
            customerId = customer.id;
        }
        // Build checkout session params
        const params = {
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
        };
        // Apply coupon if provided
        if (couponCode) {
            const coupon = await this.prisma.coupon.findUnique({
                where: { code: couponCode.toUpperCase() },
            });
            if (coupon && coupon.isActive && (!coupon.expiresAt || coupon.expiresAt > new Date())) {
                if (!coupon.maxUses || coupon.usedCount < coupon.maxUses) {
                    params.discounts = [{ coupon: coupon.code }];
                }
            }
        }
        const session = await this.stripe.checkout.sessions.create(params);
        return { url: session.url };
    }
    async cancelSubscription(userId) {
        if (!this.stripe) {
            throw new common_1.BadRequestException('Stripe not configured');
        }
        const subscription = await this.prisma.subscription.findUnique({
            where: { userId },
        });
        if (!subscription || !subscription.stripeSubId) {
            throw new common_1.NotFoundException('No active subscription');
        }
        await this.stripe.subscriptions.update(subscription.stripeSubId, {
            cancel_at_period_end: true,
        });
        await this.prisma.subscription.update({
            where: { userId },
            data: { cancelAtPeriodEnd: true },
        });
        return { success: true };
    }
    async handleWebhook(body) {
        // Webhook signature verification should be done in middleware
        const event = body;
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object;
                const userId = session.metadata?.userId;
                const planId = session.metadata?.planId;
                const stripeSubId = session.subscription;
                const stripeCustomerId = session.customer;
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
                    });
                    this.logger.log(`Subscription created for user ${userId}`);
                }
                break;
            }
            case 'customer.subscription.updated': {
                const sub = event.data.object;
                const stripeSubId = sub.id;
                await this.prisma.subscription.updateMany({
                    where: { stripeSubId },
                    data: {
                        status: sub.status.toUpperCase(),
                        currentPeriodStart: new Date(sub.current_period_start * 1000),
                        currentPeriodEnd: new Date(sub.current_period_end * 1000),
                    },
                });
                break;
            }
            case 'customer.subscription.deleted': {
                const sub = event.data.object;
                const stripeSubId = sub.id;
                await this.prisma.subscription.updateMany({
                    where: { stripeSubId },
                    data: { status: 'CANCELED' },
                });
                break;
            }
        }
        return { received: true };
    }
};
exports.SubscriptionsService = SubscriptionsService;
exports.SubscriptionsService = SubscriptionsService = SubscriptionsService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], SubscriptionsService);
//# sourceMappingURL=subscriptions.service.js.map