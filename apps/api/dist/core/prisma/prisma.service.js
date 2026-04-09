"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const generated_1 = require("../../../generated");
let PrismaService = class PrismaService {
    constructor() {
        this.prisma = new generated_1.PrismaClient({
            log: process.env.NODE_ENV === 'development'
                ? ['query', 'info', 'warn', 'error']
                : ['error'],
        });
    }
    async onModuleInit() {
        await this.prisma.$connect();
    }
    async onModuleDestroy() {
        await this.prisma.$disconnect();
    }
    // Expose all Prisma client properties
    get user() { return this.prisma.user; }
    get page() { return this.prisma.page; }
    get link() { return this.prisma.link; }
    get content() { return this.prisma.content; }
    get contentPurchase() { return this.prisma.contentPurchase; }
    get pageAnalytics() { return this.prisma.pageAnalytics; }
    get linkClick() { return this.prisma.linkClick; }
    get plan() { return this.prisma.plan; }
    get subscription() { return this.prisma.subscription; }
    get coupon() { return this.prisma.coupon; }
    get userGrant() { return this.prisma.userGrant; }
    get template() { return this.prisma.template; }
    get platformSettings() { return this.prisma.platformSettings; }
    // Expose $ methods
    $connect() { return this.prisma.$connect(); }
    $disconnect() { return this.prisma.$disconnect(); }
    $transaction(fn) { return this.prisma.$transaction(fn); }
    $queryRaw(query, ...values) {
        return this.prisma.$queryRaw(query, ...values);
    }
    $executeRaw(query, ...values) {
        return this.prisma.$executeRaw(query, ...values);
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map