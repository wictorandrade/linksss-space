import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'
import { IsPublic } from '../../core/auth/decorators/is-public.decorator'
import { PlansService } from './plans.service'

@ApiTags('plans')
@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Get()
  @IsPublic()
  @ApiOperation({ summary: 'Get all public plans' })
  async findAll() {
    return this.plansService.findAll()
  }

  @Get(':id')
  @IsPublic()
  @ApiOperation({ summary: 'Get plan by ID' })
  async findOne(@Param('id') id: string) {
    return this.plansService.findOne(id)
  }
}