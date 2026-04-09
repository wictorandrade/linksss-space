"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../../core/auth/decorators/current-user.decorator");
const is_public_decorator_1 = require("../../core/auth/decorators/is-public.decorator");
const links_service_1 = require("./links.service");
const create_link_dto_1 = require("./dto/create-link.dto");
const update_link_dto_1 = require("./dto/update-link.dto");
const reorder_links_dto_1 = require("./dto/reorder-links.dto");
let LinksController = class LinksController {
    constructor(linksService) {
        this.linksService = linksService;
    }
    async create(user, createLinkDto) {
        return this.linksService.create(user.id, createLinkDto);
    }
    async findByPage(user, pageId) {
        return this.linksService.findByPage(user.id, pageId);
    }
    async findOne(user, id) {
        return this.linksService.findOne(user.id, id);
    }
    async update(user, id, updateLinkDto) {
        return this.linksService.update(user.id, id, updateLinkDto);
    }
    async remove(user, id) {
        await this.linksService.remove(user.id, id);
    }
    async reorder(user, reorderDto) {
        return this.linksService.reorder(user.id, reorderDto);
    }
    // Public endpoint for tracking clicks
    async trackClick(id, body) {
        await this.linksService.trackClick(id, body);
    }
};
exports.LinksController = LinksController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new link' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, create_link_dto_1.CreateLinkDto]),
    tslib_1.__metadata("design:returntype", Promise)
], LinksController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)('page/:pageId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all links for a page' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Param)('pageId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], LinksController.prototype, "findByPage", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get link by ID' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], LinksController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update link' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, update_link_dto_1.UpdateLinkDto]),
    tslib_1.__metadata("design:returntype", Promise)
], LinksController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete link' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], LinksController.prototype, "remove", null);
tslib_1.__decorate([
    (0, common_1.Put)('reorder'),
    (0, swagger_1.ApiOperation)({ summary: 'Reorder links' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, reorder_links_dto_1.ReorderLinksDto]),
    tslib_1.__metadata("design:returntype", Promise)
], LinksController.prototype, "reorder", null);
tslib_1.__decorate([
    (0, common_1.Post)(':id/click'),
    (0, is_public_decorator_1.IsPublic)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Track link click' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LinksController.prototype, "trackClick", null);
exports.LinksController = LinksController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('links'),
    (0, common_1.Controller)('links'),
    (0, swagger_1.ApiBearerAuth)(),
    tslib_1.__metadata("design:paramtypes", [links_service_1.LinksService])
], LinksController);
//# sourceMappingURL=links.controller.js.map