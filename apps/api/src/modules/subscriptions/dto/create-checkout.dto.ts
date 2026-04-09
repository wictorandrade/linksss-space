import { IsString, IsOptional } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateCheckoutDto {
  @ApiProperty({ example: 'uuid-plan-id' })
  @IsString()
  planId: string

  @ApiPropertyOptional({ example: 'DESCONTO20' })
  @IsOptional()
  @IsString()
  couponCode?: string
}