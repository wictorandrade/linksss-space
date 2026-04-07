import { IsString, IsOptional, IsBoolean, IsObject, MinLength, MaxLength, Matches, IsUrl } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreatePageDto {
  @ApiProperty({ example: 'meu-perfil', description: 'Unique slug for the page' })
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Matches(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/, {
    message: 'Slug must be lowercase alphanumeric with hyphens',
  })
  slug: string

  @ApiProperty({ example: 'Meu Perfil', description: 'Page title' })
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  title: string

  @ApiPropertyOptional({ example: 'Descrição do meu perfil' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string

  @ApiPropertyOptional({ example: 'Bem-vindo ao meu perfil!' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
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
  theme?: Record<string, any>
}

export class UpdatePageDto {
  @ApiPropertyOptional({ example: 'novo-slug' })
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Matches(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/)
  slug?: string

  @ApiPropertyOptional({ example: 'Novo Título' })
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  title?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(200)
  bio?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  avatarUrl?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  backgroundImageUrl?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  theme?: Record<string, any>

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean
}