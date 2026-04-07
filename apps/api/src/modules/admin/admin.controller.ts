import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common'
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'
import { CurrentUser } from '../../core/auth/decorators/current-user.decorator'
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard'
import { User } from '../../../generated'
import { AdminService } from './admin.service'
import { CreatePlanDto } from './dto/create-plan.dto'
import { CreateCouponDto } from './dto/create-coupon.dto'
import { CreateGrantDto } from './dto/create-grant.dto'

@ApiTags('admin')
@Controller('admin')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // ============ PLANS ============
  @Get('plans')
  @ApiOperation({ summary: 'Get all plans (admin)' })
  async getPlans() {
    return this.adminService.getAllPlans()
  }

  @Post('plans')
  @ApiOperation({ summary: 'Create plan' })
  async createPlan(@Body() dto: CreatePlanDto) {
    return this.adminService.createPlan(dto)
  }

  @Put('plans/:id')
  @ApiOperation({ summary: 'Update plan' })
  async updatePlan(@Param('id') id: string, @Body() dto: Partial<CreatePlanDto>) {
    return this.adminService.updatePlan(id, dto)
  }

  @Delete('plans/:id')
  @ApiOperation({ summary: 'Delete plan' })
  async deletePlan(@Param('id') id: string) {
    return this.adminService.deletePlan(id)
  }

  // ============ COUPONS ============
  @Get('coupons')
  @ApiOperation({ summary: 'Get all coupons' })
  async getCoupons() {
    return this.adminService.getAllCoupons()
  }

  @Post('coupons')
  @ApiOperation({ summary: 'Create coupon' })
  async createCoupon(@Body() dto: CreateCouponDto) {
    return this.adminService.createCoupon(dto)
  }

  @Put('coupons/:id')
  @ApiOperation({ summary: 'Update coupon' })
  async updateCoupon(
    @Param('id') id: string,
    @Body() dto: Partial<CreateCouponDto>,
  ) {
    return this.adminService.updateCoupon(id, dto)
  }

  @Delete('coupons/:id')
  @ApiOperation({ summary: 'Delete coupon' })
  async deleteCoupon(@Param('id') id: string) {
    return this.adminService.deleteCoupon(id)
  }

  // ============ USERS ============
  @Get('users')
  @ApiOperation({ summary: 'Get all users' })
  async getUsers(
    @Query('search') search?: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
  ) {
    return this.adminService.getUsers(search, limit || 50, offset || 0)
  }

  @Get('users/:id')
  @ApiOperation({ summary: 'Get user by ID' })
  async getUser(@Param('id') id: string) {
    return this.adminService.getUser(id)
  }

  @Post('users/:id/grant')
  @ApiOperation({ summary: 'Grant plan access to user' })
  async grantAccess(
    @Param('id') userId: string,
    @Body() dto: CreateGrantDto,
  ) {
    return this.adminService.createGrant(userId, dto.planId, dto.reason, dto.expiresAt)
  }

  // ============ GRANTS ============
  @Get('grants')
  @ApiOperation({ summary: 'Get all grants' })
  async getGrants() {
    return this.adminService.getAllGrants()
  }

  @Delete('grants/:id')
  @ApiOperation({ summary: 'Delete grant' })
  async deleteGrant(@Param('id') id: string) {
    return this.adminService.deleteGrant(id)
  }

  // ============ ANALYTICS ============
  @Get('analytics/dashboard')
  @ApiOperation({ summary: 'Get admin dashboard stats' })
  async getDashboardStats() {
    return this.adminService.getDashboardStats()
  }

  @Get('analytics/top-pages')
  @ApiOperation({ summary: 'Get top pages by views' })
  async getTopPages(@Query('limit') limit?: number) {
    return this.adminService.getTopPages(limit || 10)
  }
}