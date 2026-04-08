import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common'
import { PrismaService } from '../../core/prisma/prisma.service'
import { User, Page, PageAnalytics, LinkClick } from '../../../generated'

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  // ============ PLANS ============
  async getAllPlans() {
    return this.prisma.plan.findMany({
      orderBy: { price: 'asc' },
      include: {
        _count: { select: { subscriptions: true } },
      },
    })
  }

  async createPlan(data: {
    name: string
    price: number
    maxLinks?: number
    maxPages?: number
    maxAnalytics?: number
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    isPublic?: boolean
    description?: string
    features?: any
    stripePriceId?: string
  }) {
    return this.prisma.plan.create({
      data: {
        name: data.name,
        price: data.price,
        maxLinks: data.maxLinks ?? 10,
        maxPages: data.maxPages ?? 1,
        maxAnalytics: data.maxAnalytics ?? 30,
        customThemes: data.customThemes ?? false,
        paidContent: data.paidContent ?? false,
        customDomain: data.customDomain ?? false,
        removeWatermark: data.removeWatermark ?? false,
        prioritySupport: data.prioritySupport ?? false,
        isPublic: data.isPublic ?? true,
        description: data.description,
        features: data.features,
        stripePriceId: data.stripePriceId,
      },
    })
  }

  async updatePlan(id: string, data: Record<string, any>) {
    return this.prisma.plan.update({
      where: { id },
      data,
    })
  }

  async deletePlan(id: string) {
    // Check if plan has subscriptions
    const subsCount = await this.prisma.subscription.count({
      where: { planId: id },
    })

    if (subsCount > 0) {
      throw new ForbiddenException('Cannot delete plan with active subscriptions')
    }

    return this.prisma.plan.delete({ where: { id } })
  }

  // ============ COUPONS ============
  async getAllCoupons() {
    return this.prisma.coupon.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        plan: { select: { name: true } },
      },
    })
  }

  async createCoupon(data: {
    code: string
    discountPct?: number
    discountAmt?: number
    planId?: string
    maxUses?: number
    expiresAt?: string
  }) {
    return this.prisma.coupon.create({
      data: {
        code: data.code.toUpperCase(),
        discountPct: data.discountPct,
        discountAmt: data.discountAmt,
        planId: data.planId,
        maxUses: data.maxUses,
        expiresAt: data.expiresAt ? new Date(data.expiresAt) : undefined,
      },
    })
  }

  async updateCoupon(id: string, data: Record<string, any>) {
    return this.prisma.coupon.update({
      where: { id },
      data,
    })
  }

  async deleteCoupon(id: string) {
    return this.prisma.coupon.delete({ where: { id } })
  }

  // ============ USERS ============
  async getUsers(search?: string, limit = 50, offset = 0) {
    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' as const } },
            { email: { contains: search, mode: 'insensitive' as const } },
          ],
        }
      : {}

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        include: {
          subscription: {
            include: { plan: { select: { name: true } } },
          },
          pages: { select: { id: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      this.prisma.user.count({ where }),
    ])

    return {
      users: users.map((u: any) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        avatarUrl: u.avatarUrl,
        plan: u.subscription?.plan?.name || 'Free',
        pagesCount: u.pages.length,
        createdAt: u.createdAt,
      })),
      total,
    }
  }

  async getUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        subscription: {
          include: { plan: true },
        },
        pages: {
          include: {
            _count: { select: { links: true } },
          },
        },
        grants: {
          include: { plan: true },
        },
      },
    })

    if (!user) {
      throw new NotFoundException('User not found')
    }

    return user
  }

  // ============ GRANTS ============
  async getAllGrants() {
    return this.prisma.userGrant.findMany({
      include: {
        user: { select: { id: true, email: true, name: true } },
        plan: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  async createGrant(userId: string, planId: string, reason?: string, expiresAt?: string) {
    // Check if user exists
    const user = await this.prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      throw new NotFoundException('User not found')
    }

    // Check if plan exists
    const plan = await this.prisma.plan.findUnique({ where: { id: planId } })
    if (!plan) {
      throw new NotFoundException('Plan not found')
    }

    return this.prisma.userGrant.create({
      data: {
        userId,
        planId,
        reason,
        expiresAt: expiresAt ? new Date(expiresAt) : undefined,
      },
      include: {
        user: { select: { id: true, email: true, name: true } },
        plan: { select: { id: true, name: true } },
      },
    })
  }

  async deleteGrant(id: string) {
    return this.prisma.userGrant.delete({ where: { id } })
  }

  // ============ ANALYTICS ============
  async getDashboardStats() {
    const [totalUsers, activeUsers, totalViews, totalClicks, payingUsers] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.user.count({
        where: {
          pages: {
            some: {
              updatedAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
            },
          },
        },
      }),
      this.prisma.pageAnalytics.aggregate({ _sum: { views: true } }),
      this.prisma.linkClick.count(),
      this.prisma.subscription.count({ where: { status: 'ACTIVE' } }),
    ])

    return {
      totalUsers,
      activeUsers,
      totalViews: totalViews._sum.views || 0,
      totalClicks,
      payingUsers,
    }
  }

  async getTopPages(limit = 10) {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

    const pages = await this.prisma.pageAnalytics.groupBy({
      by: ['pageId'],
      where: { date: { gte: thirtyDaysAgo } },
      _sum: { views: true },
      orderBy: { _sum: { views: 'desc' } },
      take: limit,
    })

    const pageIds = pages.map((p: { pageId: string }) => p.pageId)
    const pageData = await this.prisma.page.findMany({
      where: { id: { in: pageIds } },
      select: { id: true, slug: true, title: true, userId: true, user: { select: { email: true } } },
    })

    // Get click counts
    const clickCounts = await this.prisma.linkClick.groupBy({
      by: ['linkId'],
      where: { clickedAt: { gte: thirtyDaysAgo } },
      _count: true,
    })

    return pages.map((p: { pageId: string; _sum: { views: number | null } }) => ({
      ...pageData.find((pd) => pd.id === p.pageId),
      views: p._sum.views || 0,
      clicks: clickCounts.reduce((sum: number, c: { _count: number }) => sum + c._count, 0),
    }))
  }
}