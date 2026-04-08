import {
  Injectable,
  NotFoundException,
  ConflictException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common'
import { PrismaService } from '../../core/prisma/prisma.service'
import { UserService } from '../../core/user/user.service'
import { CreatePageDto } from './dto/create-page.dto'
import { UpdatePageDto } from './dto/update-page.dto'

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
]

@Injectable()
export class PagesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async create(userId: string, createPageDto: CreatePageDto) {
    // Check slug availability
    const slugAvailable = await this.checkSlugAvailability(createPageDto.slug)
    if (!slugAvailable.available) {
      throw new ConflictException('Slug already taken')
    }

    // Check plan limits
    const plan = await this.userService.getEffectivePlan(userId)
    if (!plan) {
      throw new BadRequestException('Plan not found')
    }
    const currentPages = await this.prisma.page.count({ where: { userId } })

    if (plan.maxPages !== -1 && currentPages >= plan.maxPages) {
      throw new BadRequestException(
        `Plan limit reached. Max pages: ${plan.maxPages}`,
      )
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
    })
  }

  async findAllByUser(userId: string) {
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
    })
  }

  async findOne(userId: string, id: string) {
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
    })

    if (!page) {
      throw new NotFoundException('Page not found')
    }

    if (page.userId !== userId) {
      throw new ForbiddenException('Not authorized to access this page')
    }

    return page
  }

  async findBySlug(slug: string) {
    const lowerSlug = slug.toLowerCase()
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
    })

    if (!page) {
      throw new NotFoundException('Page not found')
    }

    if (!page.isActive) {
      throw new NotFoundException('Page is not available')
    }

    return page
  }

  async update(userId: string, id: string, updatePageDto: UpdatePageDto) {
    // Verify ownership
    await this.findOne(userId, id)

    // If updating slug, check availability
    if (updatePageDto.slug) {
      const slugAvailable = await this.checkSlugAvailability(
        updatePageDto.slug,
        id,
      )
      if (!slugAvailable.available) {
        throw new ConflictException('Slug already taken')
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
        theme: updatePageDto.theme as any,
        isActive: updatePageDto.isActive,
      },
      include: {
        links: {
          orderBy: { position: 'asc' },
        },
      },
    })
  }

  async remove(userId: string, id: string) {
    // Verify ownership
    await this.findOne(userId, id)

    await this.prisma.page.delete({ where: { id } })
  }

  async checkSlugAvailability(slug: string, excludeId?: string): Promise<{ available: boolean }> {
    const lowerSlug = slug.toLowerCase()

    // Check reserved slugs
    if (RESERVED_SLUGS.includes(lowerSlug)) {
      return { available: false }
    }

    // Validate slug format
    const slugRegex = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/
    if (!slugRegex.test(lowerSlug) || lowerSlug.length < 3 || lowerSlug.length > 50) {
      return { available: false }
    }

    // Check database
    const existingPage = await this.prisma.page.findUnique({
      where: { slug: lowerSlug },
      select: { id: true },
    })

    if (!existingPage) {
      return { available: true }
    }

    // If excluding, check if it's the same page
    if (excludeId && existingPage.id === excludeId) {
      return { available: true }
    }

    return { available: false }
  }
}