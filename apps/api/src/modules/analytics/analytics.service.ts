import { Injectable, ForbiddenException } from '@nestjs/common'
import { PrismaService } from '../../core/prisma/prisma.service'
import { PageAnalytics, Link, LinkClick } from '../../../generated'

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async trackView(slug: string, data: { referrer?: string; device?: string }) {
    const page = await this.prisma.page.findUnique({
      where: { slug: slug.toLowerCase() },
    })

    if (!page) return

    const today = new Date()
    today.setHours(0, 0, 0, 0)

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
    })
  }

  async getPageAnalytics(userId: string, pageId: string, days: number) {
    // Verify ownership
    const page = await this.prisma.page.findUnique({
      where: { id: pageId },
    })

    if (!page || page.userId !== userId) {
      throw new ForbiddenException('Not authorized')
    }

    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)
    startDate.setHours(0, 0, 0, 0)

    const analytics = await this.prisma.pageAnalytics.findMany({
      where: {
        pageId,
        date: { gte: startDate },
      },
      orderBy: { date: 'asc' },
    })

    const totalViews = analytics.reduce((sum: number, a: PageAnalytics) => sum + a.views, 0)
    const totalVisitors = analytics.reduce((sum: number, a: PageAnalytics) => sum + a.uniqueVisitors, 0)

    return {
      totalViews,
      totalVisitors,
      daily: analytics,
    }
  }

  async getLinkClicks(userId: string, pageId: string, days: number) {
    // Verify ownership
    const page = await this.prisma.page.findUnique({
      where: { id: pageId },
    })

    if (!page || page.userId !== userId) {
      throw new ForbiddenException('Not authorized')
    }

    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

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
    })

    return links.map((link: Link & { clicks: LinkClick[]; _count: { clicks: number } }) => ({
      id: link.id,
      title: link.title,
      url: link.url,
      totalClicks: link._count.clicks,
      recentClicks: link.clicks,
    }))
  }
}