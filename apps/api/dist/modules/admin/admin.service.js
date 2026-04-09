"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let AdminService = class AdminService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    // ============ PLANS ============
    async getAllPlans() {
        return this.prisma.plan.findMany({
            orderBy: { price: 'asc' },
            include: {
                _count: { select: { subscriptions: true } },
            },
        });
    }
    async createPlan(data) {
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
        });
    }
    async updatePlan(id, data) {
        return this.prisma.plan.update({
            where: { id },
            data,
        });
    }
    async deletePlan(id) {
        // Check if plan has subscriptions
        const subsCount = await this.prisma.subscription.count({
            where: { planId: id },
        });
        if (subsCount > 0) {
            throw new common_1.ForbiddenException('Cannot delete plan with active subscriptions');
        }
        return this.prisma.plan.delete({ where: { id } });
    }
    // ============ COUPONS ============
    async getAllCoupons() {
        return this.prisma.coupon.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                plan: { select: { name: true } },
            },
        });
    }
    async createCoupon(data) {
        return this.prisma.coupon.create({
            data: {
                code: data.code.toUpperCase(),
                discountPct: data.discountPct,
                discountAmt: data.discountAmt,
                planId: data.planId,
                maxUses: data.maxUses,
                expiresAt: data.expiresAt ? new Date(data.expiresAt) : undefined,
            },
        });
    }
    async updateCoupon(id, data) {
        return this.prisma.coupon.update({
            where: { id },
            data,
        });
    }
    async deleteCoupon(id) {
        return this.prisma.coupon.delete({ where: { id } });
    }
    // ============ USERS ============
    async getUsers(search, limit = 50, offset = 0) {
        const where = search
            ? {
                OR: [
                    { name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {};
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
        ]);
        return {
            users: users.map((u) => ({
                id: u.id,
                name: u.name,
                email: u.email,
                avatarUrl: u.avatarUrl,
                plan: u.subscription?.plan?.name || 'Free',
                pagesCount: u.pages.length,
                createdAt: u.createdAt,
            })),
            total,
        };
    }
    async getUser(id) {
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
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    // ============ GRANTS ============
    async getAllGrants() {
        return this.prisma.userGrant.findMany({
            include: {
                user: { select: { id: true, email: true, name: true } },
                plan: { select: { id: true, name: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async createGrant(userId, planId, reason, expiresAt) {
        // Check if user exists
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        // Check if plan exists
        const plan = await this.prisma.plan.findUnique({ where: { id: planId } });
        if (!plan) {
            throw new common_1.NotFoundException('Plan not found');
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
        });
    }
    async deleteGrant(id) {
        return this.prisma.userGrant.delete({ where: { id } });
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
        ]);
        return {
            totalUsers,
            activeUsers,
            totalViews: totalViews._sum.views || 0,
            totalClicks,
            payingUsers,
        };
    }
    async getTopPages(limit = 10) {
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        const pages = await this.prisma.pageAnalytics.groupBy({
            by: ['pageId'],
            where: { date: { gte: thirtyDaysAgo } },
            _sum: { views: true },
            orderBy: { _sum: { views: 'desc' } },
            take: limit,
        });
        const pageIds = pages.map((p) => p.pageId);
        const pageData = await this.prisma.page.findMany({
            where: { id: { in: pageIds } },
            select: { id: true, slug: true, title: true, userId: true, user: { select: { email: true } } },
        });
        // Get click counts
        const clickCounts = await this.prisma.linkClick.groupBy({
            by: ['linkId'],
            where: { clickedAt: { gte: thirtyDaysAgo } },
            _count: true,
        });
        return pages.map((p) => ({
            ...pageData.find((pd) => pd.id === p.pageId),
            views: p._sum.views || 0,
            clicks: clickCounts.reduce((sum, c) => sum + c._count, 0),
        }));
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map