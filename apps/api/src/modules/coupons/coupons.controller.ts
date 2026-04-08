import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { IsPublic } from '../../core/auth/decorators/is-public.decorator'
import { CouponsService } from './coupons.service'

@ApiTags('coupons')
@Controller('coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @Get('validate/:code')
  @IsPublic()
  @ApiOperation({ summary: 'Validate coupon code' })
  async validate(@Param('code') code: string) {
    return this.couponsService.validate(code)
  }
}