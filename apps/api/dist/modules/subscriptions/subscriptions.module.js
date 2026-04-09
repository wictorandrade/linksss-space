"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const subscriptions_controller_1 = require("./subscriptions.controller");
const subscriptions_service_1 = require("./subscriptions.service");
let SubscriptionsModule = class SubscriptionsModule {
};
exports.SubscriptionsModule = SubscriptionsModule;
exports.SubscriptionsModule = SubscriptionsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [subscriptions_controller_1.SubscriptionsController],
        providers: [subscriptions_service_1.SubscriptionsService],
        exports: [subscriptions_service_1.SubscriptionsService],
    })
], SubscriptionsModule);
//# sourceMappingURL=subscriptions.module.js.map