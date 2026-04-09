"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let CouponsService = class CouponsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async validate(code) {
        const coupon = await this.prisma.coupon.findUnique({
            where: { code: code.toUpperCase() },
        });
        if (!coupon) {
            return { valid: false, message: 'Cupom não encontrado' };
        }
        if (!coupon.isActive) {
            return { valid: false, message: 'Cupom inativo' };
        }
        if (coupon.expiresAt && coupon.expiresAt < new Date()) {
            return { valid: false, message: 'Cupom expirado' };
        }
        if (coupon.maxUses && coupon.usedCount >= coupon.maxUses) {
            return { valid: false, message: 'Cupom esgotado' };
        }
        return {
            valid: true,
            coupon: {
                code: coupon.code,
                discountPct: coupon.discountPct,
                discountAmt: coupon.discountAmt,
            },
        };
    }
    async incrementUsage(code) {
        await this.prisma.coupon.update({
            where: { code: code.toUpperCase() },
            data: { usedCount: { increment: 1 } },
        });
    }
};
exports.CouponsService = CouponsService;
exports.CouponsService = CouponsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CouponsService);
//# sourceMappingURL=coupons.service.js.map