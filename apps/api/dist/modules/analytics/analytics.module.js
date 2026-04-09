"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const analytics_controller_1 = require("./analytics.controller");
const analytics_service_1 = require("./analytics.service");
let AnalyticsModule = class AnalyticsModule {
};
exports.AnalyticsModule = AnalyticsModule;
exports.AnalyticsModule = AnalyticsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [analytics_controller_1.AnalyticsController],
        providers: [analytics_service_1.AnalyticsService],
        exports: [analytics_service_1.AnalyticsService],
    })
], AnalyticsModule);
//# sourceMappingURL=analytics.module.js.map