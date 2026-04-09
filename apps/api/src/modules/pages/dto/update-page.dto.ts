import { IsString, IsOptional, IsUrl, IsBoolean, IsNumber, IsObject } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class UpdatePageDto {
  @ApiPropertyOptional({ example: 'meu-slug' })
  @IsOptional()
  @IsString()
  slug?: string

  @ApiPropertyOptional({ example: 'Meu Site' })
  @IsOptional()
  @IsString()
  title?: string

  @ApiPropertyOptional({ example: 'Minha descrição' })
  @IsOptional()
  @IsString()
  description?: string

  @ApiPropertyOptional({ example: 'Developer & Creator' })
  @IsOptional()
  @IsString()
  bio?: string

  @ApiPropertyOptional({ example: 'https://example.com/avatar.jpg' })
  @IsOptional()
  @IsUrl()
  avatarUrl?: string

  @ApiPropertyOptional({ example: 'https://example.com/bg.jpg' })
  @IsOptional()
  @IsUrl()
  backgroundImageUrl?: string

  @ApiPropertyOptional({ example: { font: 'plus_jakarta_sans' } })
  @IsOptional()
  @IsObject()
  theme?: Record<string, unknown>

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean
}