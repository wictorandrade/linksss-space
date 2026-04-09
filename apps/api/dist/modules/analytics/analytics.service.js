"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let AnalyticsService = class AnalyticsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async trackView(slug, data) {
        const page = await this.prisma.page.findUnique({
            where: { slug: slug.toLowerCase() },
        });
        if (!page)
            return;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        await this.prisma.pageAnalytics.upsert({
            where: { pageId_date: { pageId: page.id, date: today } },
            create: {
                pageId: page.id,
                date: today,
                views: 1,
                uniqueVisitors: 1,
                topReferrers: data.referrer ? { [data.referrer]: 1 } : {},
                topDevices: data.device ? { [data.device]: 1 } : {},
            },
            update: {
                views: { increment: 1 },
            },
        });
    }
    async getPageAnalytics(userId, pageId, days) {
        // Verify ownership
        const page = await this.prisma.page.findUnique({
            where: { id: pageId },
        });
        if (!page || page.userId !== userId) {
            throw new common_1.ForbiddenException('Not authorized');
        }
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        startDate.setHours(0, 0, 0, 0);
        const analytics = await this.prisma.pageAnalytics.findMany({
            where: {
                pageId,
                date: { gte: startDate },
            },
            orderBy: { date: 'asc' },
        });
        const totalViews = analytics.reduce((sum, a) => sum + a.views, 0);
        const totalVisitors = analytics.reduce((sum, a) => sum + a.uniqueVisitors, 0);
        return {
            totalViews,
            totalVisitors,
            daily: analytics,
        };
    }
    async getLinkClicks(userId, pageId, days) {
        // Verify ownership
        const page = await this.prisma.page.findUnique({
            where: { id: pageId },
        });
        if (!page || page.userId !== userId) {
            throw new common_1.ForbiddenException('Not authorized');
        }
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const links = await this.prisma.link.findMany({
            where: { pageId },
            include: {
                clicks: {
                    where: { clickedAt: { gte: startDate } },
                },
                _count: {
                    select: { clicks: { where: { clickedAt: { gte: startDate } } } },
                },
            },
        });
        return links.map((link) => ({
            id: link.id,
            title: link.title,
            url: link.url,
            totalClicks: link._count.clicks,
            recentClicks: link.clicks,
        }));
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map