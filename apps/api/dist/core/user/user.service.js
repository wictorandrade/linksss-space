"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            include: {
                subscription: {
                    include: { plan: true },
                },
                grants: {
                    include: { plan: true },
                },
            },
        });
    }
    async findByEmail(email) {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }
    async findBySsoId(ssoId) {
        return this.prisma.user.findUnique({
            where: { ssoId },
        });
    }
    async updateProfile(id, data) {
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }
    async getEffectivePlan(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: {
                subscription: { include: { plan: true } },
                grants: {
                    where: {
                        OR: [
                            { expiresAt: null },
                            { expiresAt: { gte: new Date() } },
                        ],
                    },
                    include: { plan: true },
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                },
            },
        });
        // Grant takes priority over subscription
        if (user?.grants.length && user.grants[0].plan) {
            return user.grants[0].plan;
        }
        if (user?.subscription?.status === 'ACTIVE' && user.subscription.plan) {
            return user.subscription.plan;
        }
        // Return free plan
        return this.prisma.plan.findUnique({ where: { name: 'Free' } });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map