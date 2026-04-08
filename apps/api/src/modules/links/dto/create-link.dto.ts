import { IsString, IsOptional, IsBoolean, IsEnum, IsNumber, IsUrl, IsObject, MinLength, MaxLength } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { LinkType } from '../../../../generated'

export class CreateLinkDto {
  @ApiProperty({ description: 'Page ID' })
  @IsString()
  pageId: string

  @ApiPropertyOptional({ enum: LinkType, default: LinkType.URL })
  @IsOptional()
  @IsEnum(LinkType)
  type?: LinkType

  @ApiProperty({ example: 'Meu Instagram' })
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  title: string

  @ApiProperty({ example: 'https://instagram.com/me' })
  @IsString()
  @MaxLength(500)
  url: string

  @ApiPropertyOptional({ example: 'instagram' })
  @IsOptional()
  @IsString()
  icon?: string

  @ApiPropertyOptional({ example: 'https://example.com/icon.png' })
  @IsOptional()
  @IsUrl()
  imageUrl?: string

  @ApiPropertyOptional({ example: { backgroundColor: '#ffffff' } })
  @IsOptional()
  @IsObject()
  style?: Record<string, any>

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  isPaid?: boolean

  @ApiPropertyOptional({ example: 9.99 })
  @IsOptional()
  @IsNumber()
  price?: number
}

export class UpdateLinkDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(LinkType)
  type?: LinkType

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  title?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(500)
  url?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  icon?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  imageUrl?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  style?: Record<string, any>

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isPaid?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  price?: number
}