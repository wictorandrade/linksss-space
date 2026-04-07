import { Controller, Get, Post, Param, Query, Body, UseGuards, HttpStatus, HttpCode } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'
import { CurrentUser } from '../../core/auth/decorators/current-user.decorator'
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard'
import { IsPublic } from '../../core/auth/decorators/is-public.decorator'
import { User } from '../../../generated'
import { AnalyticsService } from './analytics.service'

@ApiTags('analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('page/:pageId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get page analytics' })
  async getPageAnalytics(
    @CurrentUser() user: User,
    @Param('pageId') pageId: string,
    @Query('days') days?: string,
  ) {
    return this.analyticsService.getPageAnalytics(user.id, pageId, days ? parseInt(days) : 30)
  }

  @Get('page/:pageId/links')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get link click analytics' })
  async getLinkAnalytics(
    @CurrentUser() user: User,
    @Param('pageId') pageId: string,
    @Query('days') days?: string,
  ) {
    return this.analyticsService.getLinkClicks(user.id, pageId, days ? parseInt(days) : 30)
  }

  @Post('track/:slug')
  @IsPublic()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Track page view' })
  async trackView(
    @Param('slug') slug: string,
    @Body() body: { referrer?: string; device?: string },
  ) {
    await this.analyticsService.trackView(slug, body)
  }
}