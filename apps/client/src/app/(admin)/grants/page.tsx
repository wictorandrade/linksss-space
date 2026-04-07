'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Trash2, Gift, Search, Calendar } from 'lucide-react'

// Mock data
const mockGrants = [
  { id: '1', userEmail: 'influencer@email.com', planName: 'Pro', reason: 'Parceria', expiresAt: null, createdAt: '2026-02-01' },
  { id: '2', userEmail: 'amigo@email.com', planName: 'Business', reason: 'Amigo', expiresAt: '2026-12-31', createdAt: '2026-01-15' },
  { id: '3', userEmail: 'beta@email.com', planName: 'Pro', reason: 'Beta tester', expiresAt: '2026-06-01', createdAt: '2026-03-01' },
]

const plans = ['Pro', 'Business']

export default function AdminGrantsPage() {
  const [grants, setGrants] = useState(mockGrants)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ email: '', plan: 'Pro', reason: '', expiresAt: '' })

  const createGrant = () => {
    // TODO: API call
    setGrants([...grants, {
      id: Date.now().toString(),
      userEmail: form.email,
      planName: form.plan,
      reason: form.reason,
      expiresAt: form.expiresAt || null,
      createdAt: new Date().toISOString().split('T')[0],
    }])
    setShowForm(false)
    setForm({ email: '', plan: 'Pro', reason: '', expiresAt: '' })
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Grants</h1>
          <p className="text-muted-foreground mt-1">Dê acesso grátis a usuários específicos</p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Novo grant
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Grants ativos</p>
          <p className="text-2xl font-bold">{grants.length}</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Pro grants</p>
          <p className="text-2xl font-bold">{grants.filter(g => g.planName === 'Pro').length}</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Business grants</p>
          <p className="text-2xl font-bold">{grants.filter(g => g.planName === 'Business').length}</p>
        </div>
      </div>

      {/* Create form */}
      {showForm && (
        <div className="border border-border/50 rounded-xl p-6 bg-muted/30">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Gift className="w-5 h-5" />
            Novo grant de acesso
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Email do usuário</label>
              <input
                type="email"
                placeholder="usuario@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border/50 bg-background px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Plano</label>
              <select
                value={form.plan}
                onChange={(e) => setForm({ ...form, plan: e.target.value })}
                className="w-full rounded-lg border border-border/50 bg-background px-3 py-2"
              >
                {plans.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Motivo</label>
              <input
                type="text"
                placeholder="Ex: Parceria, Beta tester..."
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                className="w-full rounded-lg border border-border/50 bg-background px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Validade (opcional)</label>
              <input
                type="date"
                value={form.expiresAt}
                onChange={(e) => setForm({ ...form, expiresAt: e.target.value })}
                className="w-full rounded-lg border border-border/50 bg-background px-3 py-2"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button onClick={createGrant}>Criar grant</Button>
            <Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="border border-border/50 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-4 font-medium">Email</th>
              <th className="text-left py-3 px-4 font-medium">Plano</th>
              <th className="text-left py-3 px-4 font-medium">Motivo</th>
              <th className="text-left py-3 px-4 font-medium">Validade</th>
              <th className="text-left py-3 px-4 font-medium">Criado em</th>
              <th className="text-left py-3 px-4 font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {grants.map((grant) => (
              <tr key={grant.id} className="border-b border-border/50 hover:bg-muted/30">
                <td className="py-3 px-4 font-medium">{grant.userEmail}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    grant.planName === 'Business' ? 'bg-amber-500/10 text-amber-500' : 'bg-primary-500/10 text-primary-500'
                  }`}>
                    {grant.planName}
                  </span>
                </td>
                <td className="py-3 px-4 text-muted-foreground">{grant.reason || '-'}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {grant.expiresAt ? new Date(grant.expiresAt).toLocaleDateString('pt-BR') : 'Permanente'}
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {new Date(grant.createdAt).toLocaleDateString('pt-BR')}
                </td>
                <td className="py-3 px-4">
                  <button className="p-1 text-muted-foreground hover:text-red-500" title="Remover grant">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}