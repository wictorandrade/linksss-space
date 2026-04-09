"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const user_service_1 = require("../../core/user/user.service");
// Reserved slugs that cannot be used
const RESERVED_SLUGS = [
    'admin',
    'api',
    'auth',
    'pricing',
    'features',
    'templates',
    'dashboard',
    'settings',
    'plans',
    'login',
    'logout',
    'register',
    'signup',
    'signin',
    'about',
    'contact',
    'terms',
    'privacy',
    'help',
    'support',
    'blog',
    'docs',
    'api-docs',
    'swagger',
    'health',
    'metrics',
    'favicon',
    'robots',
    'sitemap',
    '_next',
    '_error',
];
let PagesService = class PagesService {
    constructor(prisma, userService) {
        this.prisma = prisma;
        this.userService = userService;
    }
    async create(userId, createPageDto) {
        // Check slug availability
        const slugAvailable = await this.checkSlugAvailability(createPageDto.slug);
        if (!slugAvailable.available) {
            throw new common_1.ConflictException('Slug already taken');
        }
        // Check plan limits
        const plan = await this.userService.getEffectivePlan(userId);
        if (!plan) {
            throw new common_1.BadRequestException('Plan not found');
        }
        const currentPages = await this.prisma.page.count({ where: { userId } });
        if (plan.maxPages !== -1 && currentPages >= plan.maxPages) {
            throw new common_1.BadRequestException(`Plan limit reached. Max pages: ${plan.maxPages}`);
        }
        return this.prisma.page.create({
            data: {
                userId,
                slug: createPageDto.slug.toLowerCase(),
                title: createPageDto.title,
                description: createPageDto.description,
                bio: createPageDto.bio,
                avatarUrl: createPageDto.avatarUrl,
                backgroundImageUrl: createPageDto.backgroundImageUrl,
                theme: createPageDto.theme || {},
            },
            include: {
                links: {
                    orderBy: { position: 'asc' },
                },
            },
        });
    }
    async findAllByUser(userId) {
        return this.prisma.page.findMany({
            where: { userId },
            include: {
                links: {
                    orderBy: { position: 'asc' },
                },
                _count: {
                    select: { links: true },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(userId, id) {
        const page = await this.prisma.page.findUnique({
            where: { id },
            include: {
                links: {
                    orderBy: { position: 'asc' },
                },
                contents: {
                    where: { isActive: true },
                },
            },
        });
        if (!page) {
            throw new common_1.NotFoundException('Page not found');
        }
        if (page.userId !== userId) {
            throw new common_1.ForbiddenException('Not authorized to access this page');
        }
        return page;
    }
    async findBySlug(slug) {
        const lowerSlug = slug.toLowerCase();
        const page = await this.prisma.page.findUnique({
            where: { slug: lowerSlug },
            include: {
                links: {
                    where: { isActive: true },
                    orderBy: { position: 'asc' },
                },
                contents: {
                    where: { isActive: true },
                },
                user: {
                    select: {
                        name: true,
                        avatarUrl: true,
                    },
                },
            },
        });
        if (!page) {
            throw new common_1.NotFoundException('Page not found');
        }
        if (!page.isActive) {
            throw new common_1.NotFoundException('Page is not available');
        }
        return page;
    }
    async update(userId, id, updatePageDto) {
        // Verify ownership
        await this.findOne(userId, id);
        // If updating slug, check availability
        if (updatePageDto.slug) {
            const slugAvailable = await this.checkSlugAvailability(updatePageDto.slug, id);
            if (!slugAvailable.available) {
                throw new common_1.ConflictException('Slug already taken');
            }
        }
        return this.prisma.page.update({
            where: { id },
            data: {
                slug: updatePageDto.slug?.toLowerCase(),
                title: updatePageDto.title,
                description: updatePageDto.description,
                bio: updatePageDto.bio,
                avatarUrl: updatePageDto.avatarUrl,
                backgroundImageUrl: updatePageDto.backgroundImageUrl,
                theme: updatePageDto.theme,
                isActive: updatePageDto.isActive,
            },
            include: {
                links: {
                    orderBy: { position: 'asc' },
                },
            },
        });
    }
    async remove(userId, id) {
        // Verify ownership
        await this.findOne(userId, id);
        await this.prisma.page.delete({ where: { id } });
    }
    async checkSlugAvailability(slug, excludeId) {
        const lowerSlug = slug.toLowerCase();
        // Check reserved slugs
        if (RESERVED_SLUGS.includes(lowerSlug)) {
            return { available: false };
        }
        // Validate slug format
        const slugRegex = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/;
        if (!slugRegex.test(lowerSlug) || lowerSlug.length < 3 || lowerSlug.length > 50) {
            return { available: false };
        }
        // Check database
        const existingPage = await this.prisma.page.findUnique({
            where: { slug: lowerSlug },
            select: { id: true },
        });
        if (!existingPage) {
            return { available: true };
        }
        // If excluding, check if it's the same page
        if (excludeId && existingPage.id === excludeId) {
            return { available: true };
        }
        return { available: false };
    }
};
exports.PagesService = PagesService;
exports.PagesService = PagesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService])
], PagesService);
//# sourceMappingURL=pages.service.js.map