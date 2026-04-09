import { IsString, IsOptional, IsDateString } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateGrantDto {
  @ApiProperty({ description: 'Plan ID' })
  @IsString()
  planId: string

  @ApiPropertyOptional({ example: 'Parceria' })
  @IsOptional()
  @IsString()
  reason?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expiresAt?: string
}