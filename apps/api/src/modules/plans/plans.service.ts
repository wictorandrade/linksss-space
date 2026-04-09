import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../core/prisma/prisma.service'

@Injectable()
export class PlansService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.plan.findMany({
      where: { isPublic: true },
      orderBy: { price: 'asc' },
    })
  }

  async findOne(id: string) {
    const plan = await this.prisma.plan.findUnique({
      where: { id },
    })

    if (!plan) {
      throw new NotFoundException('Plan not found')
    }

    return plan
  }

  async findByName(name: string) {
    return this.prisma.plan.findUnique({
      where: { name },
    })
  }
}