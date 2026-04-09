import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { IsPublic } from '../../core/auth/decorators/is-public.decorator'
import { TemplatesService } from './templates.service'

@ApiTags('templates')
@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Get()
  @IsPublic()
  @ApiOperation({ summary: 'Get all public templates' })
  async findAll() {
    return this.templatesService.findAll()
  }

  @Get('featured')
  @IsPublic()
  @ApiOperation({ summary: 'Get featured templates' })
  async findFeatured() {
    return this.templatesService.findFeatured()
  }

  @Get(':slug')
  @IsPublic()
  @ApiOperation({ summary: 'Get template by slug' })
  async findBySlug(@Param('slug') slug: string) {
    return this.templatesService.findBySlug(slug)
  }
}