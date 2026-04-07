import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'
import { CurrentUser } from '../../core/auth/decorators/current-user.decorator'
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard'
import { User } from '../../../generated'
import { CouponsService } from './coupons.service'
import { CreateCouponDto } from './dto/create-coupon.dto'

@ApiTags('coupons')
@Controller('coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @Get('validate/:code')
  @ApiOperation({ summary: 'Validate coupon code' })
  async validate(@Param('code') code: string) {
    return this.couponsService.validate(code)
  }
}