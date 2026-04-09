"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../../core/auth/decorators/current-user.decorator");
const pages_service_1 = require("./pages.service");
const create_page_dto_1 = require("./dto/create-page.dto");
const update_page_dto_1 = require("./dto/update-page.dto");
const is_public_decorator_1 = require("../../core/auth/decorators/is-public.decorator");
let PagesController = class PagesController {
    constructor(pagesService) {
        this.pagesService = pagesService;
    }
    async create(user, createPageDto) {
        return this.pagesService.create(user.id, createPageDto);
    }
    async findAll(user) {
        return this.pagesService.findAllByUser(user.id);
    }
    async checkSlug(slug) {
        return this.pagesService.checkSlugAvailability(slug);
    }
    async findOne(user, id) {
        return this.pagesService.findOne(user.id, id);
    }
    async update(user, id, updatePageDto) {
        return this.pagesService.update(user.id, id, updatePageDto);
    }
    async remove(user, id) {
        await this.pagesService.remove(user.id, id);
    }
    // Public endpoint for viewing pages
    async findBySlug(slug) {
        return this.pagesService.findBySlug(slug);
    }
};
exports.PagesController = PagesController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new page' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Page created successfully' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, create_page_dto_1.CreatePageDto]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all pages for current user' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('check-slug/:slug'),
    (0, is_public_decorator_1.IsPublic)(),
    (0, swagger_1.ApiOperation)({ summary: 'Check if slug is available' }),
    tslib_1.__param(0, (0, common_1.Param)('slug')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesController.prototype, "checkSlug", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get page by ID' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update page' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, update_page_dto_1.UpdatePageDto]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete page' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesController.prototype, "remove", null);
tslib_1.__decorate([
    (0, common_1.Get)('public/:slug'),
    (0, is_public_decorator_1.IsPublic)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get public page by slug' }),
    tslib_1.__param(0, (0, common_1.Param)('slug')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesController.prototype, "findBySlug", null);
exports.PagesController = PagesController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('pages'),
    (0, common_1.Controller)('pages'),
    (0, swagger_1.ApiBearerAuth)(),
    tslib_1.__metadata("design:paramtypes", [pages_service_1.PagesService])
], PagesController);
//# sourceMappingURL=pages.controller.js.map