"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const is_public_decorator_1 = require("../../core/auth/decorators/is-public.decorator");
const plans_service_1 = require("./plans.service");
let PlansController = class PlansController {
    constructor(plansService) {
        this.plansService = plansService;
    }
    async findAll() {
        return this.plansService.findAll();
    }
    async findOne(id) {
        return this.plansService.findOne(id);
    }
};
exports.PlansController = PlansController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, is_public_decorator_1.IsPublic)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all public plans' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PlansController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, is_public_decorator_1.IsPublic)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get plan by ID' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PlansController.prototype, "findOne", null);
exports.PlansController = PlansController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('plans'),
    (0, common_1.Controller)('plans'),
    tslib_1.__metadata("design:paramtypes", [plans_service_1.PlansService])
], PlansController);
//# sourceMappingURL=plans.controller.js.map