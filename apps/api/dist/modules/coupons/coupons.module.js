"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const coupons_controller_1 = require("./coupons.controller");
const coupons_service_1 = require("./coupons.service");
let CouponsModule = class CouponsModule {
};
exports.CouponsModule = CouponsModule;
exports.CouponsModule = CouponsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [coupons_controller_1.CouponsController],
        providers: [coupons_service_1.CouponsService],
        exports: [coupons_service_1.CouponsService],
    })
], CouponsModule);
//# sourceMappingURL=coupons.module.js.map