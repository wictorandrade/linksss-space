import { IsString, IsOptional, IsNumber, IsBoolean, IsDateString } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreatePlanDto {
  @ApiProperty({ example: 'Pro' })
  @IsString()
  name: string

  @ApiProperty({ example: 29.90 })
  @IsNumber()
  price: number

  @ApiPropertyOptional({ example: -1 })
  @IsOptional()
  @IsNumber()
  maxLinks?: number

  @ApiPropertyOptional({ example: 3 })
  @IsOptional()
  @IsNumber()
  maxPages?: number

  @ApiPropertyOptional({ example: 90 })
  @IsOptional()
  @IsNumber()
  maxAnalytics?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  customThemes?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  paidContent?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  customDomain?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  removeWatermark?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  prioritySupport?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  stripePriceId?: string
}