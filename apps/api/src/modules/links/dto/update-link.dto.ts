import { IsString, IsOptional, IsUrl, IsBoolean, IsNumber, IsObject, IsEnum } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { LinkType } from '../../../../generated'

export class UpdateLinkDto {
  @ApiPropertyOptional({ example: 'Meu Link' })
  @IsOptional()
  @IsString()
  title?: string

  @ApiPropertyOptional({ example: 'https://example.com' })
  @IsOptional()
  @IsUrl()
  url?: string

  @ApiPropertyOptional({ enum: LinkType })
  @IsOptional()
  @IsEnum(LinkType)
  type?: LinkType

  @ApiPropertyOptional({ example: 'globe' })
  @IsOptional()
  @IsString()
  icon?: string

  @ApiPropertyOptional({ example: 'https://example.com/icon.png' })
  @IsOptional()
  @IsUrl()
  imageUrl?: string

  @ApiPropertyOptional({ example: { backgroundColor: '#fff' } })
  @IsOptional()
  @IsObject()
  style?: Record<string, unknown>

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  position?: number

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isPaid?: boolean

  @ApiPropertyOptional({ example: 9.99 })
  @IsOptional()
  @IsNumber()
  price?: number
}