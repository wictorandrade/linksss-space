import { IsString, IsOptional, IsNumber, IsBoolean, IsDateString } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateCouponDto {
  @ApiProperty({ example: 'DESCONTO20' })
  @IsString()
  code: string

  @ApiPropertyOptional({ example: 20 })
  @IsOptional()
  @IsNumber()
  discountPct?: number

  @ApiPropertyOptional({ example: 10.00 })
  @IsOptional()
  @IsNumber()
  discountAmt?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  planId?: string

  @ApiPropertyOptional({ example: 100 })
  @IsOptional()
  @IsNumber()
  maxUses?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expiresAt?: string
}