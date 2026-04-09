import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../core/prisma/prisma.service'

@Injectable()
export class CouponsService {
  constructor(private readonly prisma: PrismaService) {}

  async validate(code: string) {
    const coupon = await this.prisma.coupon.findUnique({
      where: { code: code.toUpperCase() },
    })

    if (!coupon) {
      return { valid: false, message: 'Cupom não encontrado' }
    }

    if (!coupon.isActive) {
      return { valid: false, message: 'Cupom inativo' }
    }

    if (coupon.expiresAt && coupon.expiresAt < new Date()) {
      return { valid: false, message: 'Cupom expirado' }
    }

    if (coupon.maxUses && coupon.usedCount >= coupon.maxUses) {
      return { valid: false, message: 'Cupom esgotado' }
    }

    return {
      valid: true,
      coupon: {
        code: coupon.code,
        discountPct: coupon.discountPct,
        discountAmt: coupon.discountAmt,
      },
    }
  }

  async incrementUsage(code: string) {
    await this.prisma.coupon.update({
      where: { code: code.toUpperCase() },
      data: { usedCount: { increment: 1 } },
    })
  }
}