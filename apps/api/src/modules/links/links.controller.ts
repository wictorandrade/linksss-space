import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'
import { CurrentUser } from '../../core/auth/decorators/current-user.decorator'
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard'
import { IsPublic } from '../../core/auth/decorators/is-public.decorator'
import { User } from '../../../generated'
import { LinksService } from './links.service'
import { CreateLinkDto } from './dto/create-link.dto'
import { UpdateLinkDto } from './dto/update-link.dto'
import { ReorderLinksDto } from './dto/reorder-links.dto'

@ApiTags('links')
@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new link' })
  async create(@CurrentUser() user: User, @Body() createLinkDto: CreateLinkDto) {
    return this.linksService.create(user.id, createLinkDto)
  }

  @Get('page/:pageId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all links for a page' })
  async findByPage(@CurrentUser() user: User, @Param('pageId') pageId: string) {
    return this.linksService.findByPage(user.id, pageId)
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get link by ID' })
  async findOne(@CurrentUser() user: User, @Param('id') id: string) {
    return this.linksService.findOne(user.id, id)
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update link' })
  async update(
    @CurrentUser() user: User,
    @Param('id') id: string,
    @Body() updateLinkDto: UpdateLinkDto,
  ) {
    return this.linksService.update(user.id, id, updateLinkDto)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete link' })
  async remove(@CurrentUser() user: User, @Param('id') id: string) {
    await this.linksService.remove(user.id, id)
  }

  @Put('reorder')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Reorder links' })
  async reorder(@CurrentUser() user: User, @Body() reorderDto: ReorderLinksDto) {
    return this.linksService.reorder(user.id, reorderDto)
  }

  // Public endpoint for tracking clicks
  @Post(':id/click')
  @IsPublic()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Track link click' })
  async trackClick(
    @Param('id') id: string,
    @Body() body: { referrer?: string; device?: string; country?: string },
  ) {
    await this.linksService.trackClick(id, body)
  }
}