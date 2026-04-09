"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../../core/auth/decorators/current-user.decorator");
const is_public_decorator_1 = require("../../core/auth/decorators/is-public.decorator");
const subscriptions_service_1 = require("./subscriptions.service");
const create_checkout_dto_1 = require("./dto/create-checkout.dto");
let SubscriptionsController = class SubscriptionsController {
    constructor(subscriptionsService) {
        this.subscriptionsService = subscriptionsService;
    }
    async getSubscription(user) {
        return this.subscriptionsService.getUserSubscription(user.id);
    }
    async createCheckout(user, dto) {
        return this.subscriptionsService.createCheckoutSession(user.id, dto.planId, dto.couponCode);
    }
    async cancel(user) {
        return this.subscriptionsService.cancelSubscription(user.id);
    }
    async handleWebhook(body) {
        return this.subscriptionsService.handleWebhook(body);
    }
};
exports.SubscriptionsController = SubscriptionsController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user subscription' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsController.prototype, "getSubscription", null);
tslib_1.__decorate([
    (0, common_1.Post)('checkout'),
    (0, swagger_1.ApiOperation)({ summary: 'Create Stripe checkout session' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, create_checkout_dto_1.CreateCheckoutDto]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsController.prototype, "createCheckout", null);
tslib_1.__decorate([
    (0, common_1.Post)('cancel'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel subscription' }),
    tslib_1.__param(0, (0, current_user_decorator_1.CurrentUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsController.prototype, "cancel", null);
tslib_1.__decorate([
    (0, common_1.Post)('webhook'),
    (0, is_public_decorator_1.IsPublic)(),
    (0, swagger_1.ApiOperation)({ summary: 'Stripe webhook handler' }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsController.prototype, "handleWebhook", null);
exports.SubscriptionsController = SubscriptionsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('subscriptions'),
    (0, common_1.Controller)('subscriptions'),
    (0, swagger_1.ApiBearerAuth)(),
    tslib_1.__metadata("design:paramtypes", [subscriptions_service_1.SubscriptionsService])
], SubscriptionsController);
//# sourceMappingURL=subscriptions.controller.js.map