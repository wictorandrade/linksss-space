import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'
import { CurrentUser } from '../../core/auth/decorators/current-user.decorator'
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard'
import { User } from '../../../generated'
import { SubscriptionsService } from './subscriptions.service'
import { CreateCheckoutDto } from './dto/create-checkout.dto'

@ApiTags('subscriptions')
@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user subscription' })
  async getSubscription(@CurrentUser() user: User) {
    return this.subscriptionsService.getUserSubscription(user.id)
  }

  @Post('checkout')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create Stripe checkout session' })
  async createCheckout(
    @CurrentUser() user: User,
    @Body() dto: CreateCheckoutDto,
  ) {
    return this.subscriptionsService.createCheckoutSession(user.id, dto.planId, dto.couponCode)
  }

  @Post('cancel')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cancel subscription' })
  async cancel(@CurrentUser() user: User) {
    return this.subscriptionsService.cancelSubscription(user.id)
  }

  @Post('webhook')
  @ApiOperation({ summary: 'Stripe webhook handler' })
  async handleWebhook(@Body() body: any) {
    return this.subscriptionsService.handleWebhook(body)
  }
}