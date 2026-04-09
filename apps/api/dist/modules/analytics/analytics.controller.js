"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../../core/auth/decorators/current-user.decorator");
const is_public_decorator_1 = require("../../core/auth/decorators/is-public.decorator");
const analytics_service_1 = require("./analytics.service");
let AnalyticsController = class AnalyticsController {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    async getPageAnalytics(user, pageId, days) {
        return this.analyticsService.getPageAnalytics(user.id, pageId, days ? parseInt(days) : 30);
    }
    async getLinkAnalytics(user, pageId, days) {
        return this.analyticsService.getLinkClicks(user.id, pageId, days ? parseInt(days) : 30);
    }
    async trackView(slug, body) {
        await this.analyticsService.trackView(slug, body);
    }
};
exports.AnalyticsController = AnalyticsController;
tslib_1.__decorate([
    (0, common_1.Get)('page/:pageId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get page analytics' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Param)('pageId')),
    tslib_1.__param(2, (0, common_1.Query)('days')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getPageAnalytics", null);
tslib_1.__decorate([
    (0, common_1.Get)('page/:pageId/links'),
    (0, swagger_1.ApiOperation)({ summary: 'Get link click analytics' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Param)('pageId')),
    tslib_1.__param(2, (0, common_1.Query)('days')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getLinkAnalytics", null);
tslib_1.__decorate([
    (0, common_1.Post)('track/:slug'),
    (0, is_public_decorator_1.IsPublic)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Track page view' }),
    tslib_1.__param(0, (0, common_1.Param)('slug')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsController.prototype, "trackView", null);
exports.AnalyticsController = AnalyticsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('analytics'),
    (0, common_1.Controller)('analytics'),
    (0, swagger_1.ApiBearerAuth)(),
    tslib_1.__metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsController);
//# sourceMappingURL=analytics.controller.js.map