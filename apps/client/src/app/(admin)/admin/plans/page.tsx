'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Eye, EyeOff, Check, X } from 'lucide-react'

// Mock data - will be replaced with API calls
const mockPlans = [
  { id: '1', name: 'Free', price: 0, maxLinks: 5, maxPages: 1, isPublic: true, subscribers: 1234 },
  { id: '2', name: 'Basic', price: 9.90, maxLinks: 15, maxPages: 1, isPublic: true, subscribers: 456 },
  { id: '3', name: 'Pro', price: 29.90, maxLinks: -1, maxPages: 3, isPublic: true, subscribers: 789 },
  { id: '4', name: 'Business', price: 79.90, maxLinks: -1, maxPages: -1, isPublic: true, subscribers: 123 },
  { id: '5', name: 'VIP', price: 0, maxLinks: -1, maxPages: -1, isPublic: false, subscribers: 5 },
]

export default function AdminPlansPage() {
  const [plans, setPlans] = useState(mockPlans)
  const [editing, setEditing] = useState<string | null>(null)

  const togglePublic = (id: string) => {
    setPlans(plans.map(p => p.id === id ? { ...p, isPublic: !p.isPublic } : p))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Planos</h1>
          <p className="text-muted-foreground mt-1">Gerencie os planos de assinatura</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Novo plano
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Total assinantes</p>
          <p className="text-2xl font-bold">2,607</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Receita mensal</p>
          <p className="text-2xl font-bold">R$ 45.670</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Planos ativos</p>
          <p className="text-2xl font-bold">4</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Planos internos</p>
          <p className="text-2xl font-bold">1</p>
        </div>
      </div>

      {/* Table */}
      <div className="border border-border/50 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-4 font-medium">Nome</th>
              <th className="text-left py-3 px-4 font-medium">Preço</th>
              <th className="text-left py-3 px-4 font-medium">Links</th>
              <th className="text-left py-3 px-4 font-medium">Páginas</th>
              <th className="text-left py-3 px-4 font-medium">Público</th>
              <th className="text-left py-3 px-4 font-medium">Assinantes</th>
              <th className="text-left py-3 px-4 font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id} className="border-b border-border/50 hover:bg-muted/30">
                <td className="py-3 px-4 font-medium">{plan.name}</td>
                <td className="py-3 px-4">
                  {plan.price === 0 ? 'Grátis' : `R$ ${plan.price.toFixed(2).replace('.', ',')}/mês`}
                </td>
                <td className="py-3 px-4">
                  {plan.maxLinks === -1 ? '∞' : plan.maxLinks}
                </td>
                <td className="py-3 px-4">
                  {plan.maxPages === -1 ? '∞' : plan.maxPages}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => togglePublic(plan.id)}
                    className={`p-1 rounded ${plan.isPublic ? 'text-green-500' : 'text-muted-foreground'}`}
                  >
                    {plan.isPublic ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </td>
                <td className="py-3 px-4">{plan.subscribers}</td>
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