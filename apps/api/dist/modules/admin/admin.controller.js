"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_only_decorator_1 = require("../../core/auth/decorators/admin-only.decorator");
const admin_service_1 = require("./admin.service");
const create_plan_dto_1 = require("./dto/create-plan.dto");
const create_coupon_dto_1 = require("./dto/create-coupon.dto");
const create_grant_dto_1 = require("./dto/create-grant.dto");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    // ============ PLANS ============
    async getPlans() {
        return this.adminService.getAllPlans();
    }
    async createPlan(dto) {
        return this.adminService.createPlan(dto);
    }
    async updatePlan(id, dto) {
        return this.adminService.updatePlan(id, dto);
    }
    async deletePlan(id) {
        return this.adminService.deletePlan(id);
    }
    // ============ COUPONS ============
    async getCoupons() {
        return this.adminService.getAllCoupons();
    }
    async createCoupon(dto) {
        return this.adminService.createCoupon(dto);
    }
    async updateCoupon(id, dto) {
        return this.adminService.updateCoupon(id, dto);
    }
    async deleteCoupon(id) {
        return this.adminService.deleteCoupon(id);
    }
    // ============ USERS ============
    async getUsers(search, limit, offset) {
        return this.adminService.getUsers(search, limit || 50, offset || 0);
    }
    async getUser(id) {
        return this.adminService.getUser(id);
    }
    async grantAccess(userId, dto) {
        return this.adminService.createGrant(userId, dto.planId, dto.reason, dto.expiresAt);
    }
    // ============ GRANTS ============
    async getGrants() {
        return this.adminService.getAllGrants();
    }
    async deleteGrant(id) {
        return this.adminService.deleteGrant(id);
    }
    // ============ ANALYTICS ============
    async getDashboardStats() {
        return this.adminService.getDashboardStats();
    }
    async getTopPages(limit) {
        return this.adminService.getTopPages(limit || 10);
    }
};
exports.AdminController = AdminController;
tslib_1.__decorate([
    (0, common_1.Get)('plans'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all plans (admin)' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "getPlans", null);
tslib_1.__decorate([
    (0, common_1.Post)('plans'),
    (0, swagger_1.ApiOperation)({ summary: 'Create plan' }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_plan_dto_1.CreatePlanDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "createPlan", null);
tslib_1.__decorate([
    (0, common_1.Put)('plans/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update plan' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "updatePlan", null);
tslib_1.__decorate([
    (0, common_1.Delete)('plans/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete plan' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "deletePlan", null);
tslib_1.__decorate([
    (0, common_1.Get)('coupons'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all coupons' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "getCoupons", null);
tslib_1.__decorate([
    (0, common_1.Post)('coupons'),
    (0, swagger_1.ApiOperation)({ summary: 'Create coupon' }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_coupon_dto_1.CreateCouponDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "createCoupon", null);
tslib_1.__decorate([
    (0, common_1.Put)('coupons/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update coupon' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "updateCoupon", null);
tslib_1.__decorate([
    (0, common_1.Delete)('coupons/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete coupon' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "deleteCoupon", null);
tslib_1.__decorate([
    (0, common_1.Get)('users'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    tslib_1.__param(0, (0, common_1.Query)('search')),
    tslib_1.__param(1, (0, common_1.Query)('limit')),
    tslib_1.__param(2, (0, common_1.Query)('offset')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "getUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by ID' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "getUser", null);
tslib_1.__decorate([
    (0, common_1.Post)('users/:id/grant'),
    (0, swagger_1.ApiOperation)({ summary: 'Grant plan access to user' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, create_grant_dto_1.CreateGrantDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "grantAccess", null);
tslib_1.__decorate([
    (0, common_1.Get)('grants'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all grants' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "getGrants", null);
tslib_1.__decorate([
    (0, common_1.Delete)('grants/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete grant' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "deleteGrant", null);
tslib_1.__decorate([
    (0, common_1.Get)('analytics/dashboard'),
    (0, swagger_1.ApiOperation)({ summary: 'Get admin dashboard stats' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "getDashboardStats", null);
tslib_1.__decorate([
    (0, common_1.Get)('analytics/top-pages'),
    (0, swagger_1.ApiOperation)({ summary: 'Get top pages by views' }),
    tslib_1.__param(0, (0, common_1.Query)('limit')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "getTopPages", null);
exports.AdminController = AdminController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('admin'),
    (0, common_1.Controller)('admin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, admin_only_decorator_1.AdminOnly)(),
    tslib_1.__metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map