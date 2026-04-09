'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Copy, Check, X, Ticket } from 'lucide-react'

// Mock data
const mockCoupons = [
  { id: '1', code: 'LANCAMENTO20', discountPct: 20, maxUses: 100, usedCount: 45, expiresAt: '2026-06-01', isActive: true },
  { id: '2', code: 'PROMO10', discountPct: 10, maxUses: 50, usedCount: 50, expiresAt: '2026-04-15', isActive: false },
  { id: '3', code: 'VIP100', discountAmt: 100, maxUses: 10, usedCount: 3, expiresAt: null, isActive: true },
  { id: '4', code: 'INFLUENCER', discountPct: 50, maxUses: null, usedCount: 127, expiresAt: '2026-12-31', isActive: true },
]

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState(mockCoupons)
  const [showForm, setShowForm] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(code)
    setTimeout(() => setCopied(null), 2000)
  }

  const toggleActive = (id: string) => {
    setCoupons(coupons.map(c => c.id === id ? { ...c, isActive: !c.isActive } : c))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Cupons</h1>
          <p className="text-muted-foreground mt-1">Gerencie cupons de desconto</p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Novo cupom
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Cupons ativos</p>
          <p className="text-2xl font-bold">{coupons.filter(c => c.isActive).length}</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Total usados</p>
          <p className="text-2xl font-bold">{coupons.reduce((sum, c) => sum + c.usedCount, 0)}</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Desconto médio</p>
          <p className="text-2xl font-bold">25%</p>
        </div>
      </div>

      {/* Create form */}
      {showForm && (
        <div className="border border-border/50 rounded-xl p-6 bg-muted/30">
          <h2 className="text-lg font-semibold mb-4">Novo cupom</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Código</label>
              <input
                type="text"
                placeholder="DESCONTO20"
                className="w-full rounded-lg border border-border/50 bg-background px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Desconto %</label>
              <input
                type="number"
                placeholder="20"
                className="w-full rounded-lg border border-border/50 bg-background px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Limite de uso</label>
              <input
                type="number"
                placeholder="100"
                className="w-full rounded-lg border border-border/50 bg-background px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Validade</label>
              <input
                type="date"
                className="w-full rounded-lg border border-border/50 bg-background px-3 py-2"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button onClick={() => setShowForm(false)}>Criar cupom</Button>
            <Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="border border-border/50 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-4 font-medium">Código</th>
              <th className="text-left py-3 px-4 font-medium">Desconto</th>
              <th className="text-left py-3 px-4 font-medium">Usos</th>
              <th className="text-left py-3 px-4 font-medium">Validade</th>
              <th className="text-left py-3 px-4 font-medium">Status</th>
              <th className="text-left py-3 px-4 font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id} className="border-b border-border/50 hover:bg-muted/30">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                      {coupon.code}
                    </code>
                    <button
                      onClick={() => copyCode(coupon.code)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {copied === coupon.code ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </td>
                <td className="py-3 px-4">
                  {coupon.discountPct ? `${coupon.discountPct}%` : `R$ ${coupon.discountAmt}`}
                </td>
                <td className="py-3 px-4">
                  {coupon.usedCount}
                  {coupon.maxUses && ` / ${coupon.maxUses}`}
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {coupon.expiresAt ? new Date(coupon.expiresAt).toLocaleDateString('pt-BR') : 'Sem limite'}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => toggleActive(coupon.id)}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      coupon.isActive
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {coupon.isActive ? 'Ativo' : 'Inativo'}
                  </button>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 text-muted-foreground hover:text-foreground">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-muted-foreground hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}