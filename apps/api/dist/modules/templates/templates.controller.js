"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const is_public_decorator_1 = require("../../core/auth/decorators/is-public.decorator");
const templates_service_1 = require("./templates.service");
let TemplatesController = class TemplatesController {
    constructor(templatesService) {
        this.templatesService = templatesService;
    }
    async findAll() {
        return this.templatesService.findAll();
    }
    async findFeatured() {
        return this.templatesService.findFeatured();
    }
    async findBySlug(slug) {
        return this.templatesService.findBySlug(slug);
    }
};
exports.TemplatesController = TemplatesController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, is_public_decorator_1.IsPublic)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all public templates' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('featured'),
    (0, is_public_decorator_1.IsPublic)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get featured templates' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesController.prototype, "findFeatured", null);
tslib_1.__decorate([
    (0, common_1.Get)(':slug'),
    (0, is_public_decorator_1.IsPublic)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get template by slug' }),
    tslib_1.__param(0, (0, common_1.Param)('slug')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesController.prototype, "findBySlug", null);
exports.TemplatesController = TemplatesController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('templates'),
    (0, common_1.Controller)('templates'),
    tslib_1.__metadata("design:paramtypes", [templates_service_1.TemplatesService])
], TemplatesController);
//# sourceMappingURL=templates.controller.js.map