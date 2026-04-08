import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger'
import { CurrentUser } from '../../core/auth/decorators/current-user.decorator'
import { User } from '../../../generated'
import { PagesService } from './pages.service'
import { CreatePageDto } from './dto/create-page.dto'
import { UpdatePageDto } from './dto/update-page.dto'
import { IsPublic } from '../../core/auth/decorators/is-public.decorator'

@ApiTags('pages')
@Controller('pages')
@ApiBearerAuth()
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new page' })
  @ApiResponse({ status: 201, description: 'Page created successfully' })
  async create(@CurrentUser() user: User, @Body() createPageDto: CreatePageDto) {
    return this.pagesService.create(user.id, createPageDto)
  }

  @Get()
  @ApiOperation({ summary: 'Get all pages for current user' })
  async findAll(@CurrentUser() user: User) {
    return this.pagesService.findAllByUser(user.id)
  }

  @Get('check-slug/:slug')
  @IsPublic()
  @ApiOperation({ summary: 'Check if slug is available' })
  async checkSlug(@Param('slug') slug: string) {
    return this.pagesService.checkSlugAvailability(slug)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get page by ID' })
  async findOne(@CurrentUser() user: User, @Param('id') id: string) {
    return this.pagesService.findOne(user.id, id)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update page' })
  async update(
    @CurrentUser() user: User,
    @Param('id') id: string,
    @Body() updatePageDto: UpdatePageDto,
  ) {
    return this.pagesService.update(user.id, id, updatePageDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete page' })
  async remove(@CurrentUser() user: User, @Param('id') id: string) {
    await this.pagesService.remove(user.id, id)
  }

  // Public endpoint for viewing pages
  @Get('public/:slug')
  @IsPublic()
  @ApiOperation({ summary: 'Get public page by slug' })
  async findBySlug(@Param('slug') slug: string) {
    return this.pagesService.findBySlug(slug)
  }
}