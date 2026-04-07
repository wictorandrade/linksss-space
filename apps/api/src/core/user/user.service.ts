import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../core/prisma/prisma.service'
import { User } from '../../../generated'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<User | null> {
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
    })
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    })
  }

  async findBySsoId(ssoId: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { ssoId },
    })
  }

  async updateProfile(id: string, data: { name?: string; avatarUrl?: string }) {
    return this.prisma.user.update({
      where: { id },
      data,
    })
  }

  async getEffectivePlan(userId: string) {
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
    })

    // Grant takes priority over subscription
    if (user?.grants.length && user.grants[0].plan) {
      return user.grants[0].plan
    }

    if (user?.subscription?.status === 'ACTIVE' && user.subscription.plan) {
      return user.subscription.plan
    }

    // Return free plan
    return this.prisma.plan.findUnique({ where: { name: 'Free' } })
  }
}