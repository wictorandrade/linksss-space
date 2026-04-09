"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const plans_controller_1 = require("./plans.controller");
const plans_service_1 = require("./plans.service");
let PlansModule = class PlansModule {
};
exports.PlansModule = PlansModule;
exports.PlansModule = PlansModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [plans_controller_1.PlansController],
        providers: [plans_service_1.PlansService],
        exports: [plans_service_1.PlansService],
    })
], PlansModule);
//# sourceMappingURL=plans.module.js.map