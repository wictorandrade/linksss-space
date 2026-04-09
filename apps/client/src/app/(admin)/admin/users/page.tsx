'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search, MoreHorizontal, Mail, User, Shield, Gift } from 'lucide-react'

// Mock data
const mockUsers = [
  { id: '1', name: 'João Silva', email: 'joao@email.com', plan: 'Pro', pages: 3, createdAt: '2026-01-15', avatar: null },
  { id: '2', name: 'Maria Santos', email: 'maria@email.com', plan: 'Free', pages: 1, createdAt: '2026-02-20', avatar: null },
  { id: '3', name: 'Pedro Costa', email: 'pedro@email.com', plan: 'Business', pages: 12, createdAt: '2026-03-01', avatar: null },
  { id: '4', name: 'Ana Lima', email: 'ana@email.com', plan: 'Basic', pages: 1, createdAt: '2026-03-10', avatar: null },
  { id: '5', name: 'Carlos Souza', email: 'carlos@email.com', plan: 'Free', pages: 1, createdAt: '2026-03-15', avatar: null },
]

export default function AdminUsersPage() {
  const [users] = useState(mockUsers)
  const [search, setSearch] = useState('')

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Usuários</h1>
          <p className="text-muted-foreground mt-1">Gerencie todos os usuários</p>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar usuário..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-lg border border-border/50 bg-background w-64"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Total usuários</p>
          <p className="text-2xl font-bold">2,847</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Ativos (30 dias)</p>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Novos (7 dias)</p>
          <p className="text-2xl font-bold">89</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Pagantes</p>
          <p className="text-2xl font-bold">423</p>
        </div>
      </div>

      {/* Table */}
      <div className="border border-border/50 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-4 font-medium">Usuário</th>
              <th className="text-left py-3 px-4 font-medium">Plano</th>
              <th className="text-left py-3 px-4 font-medium">Páginas</th>
              <th className="text-left py-3 px-4 font-medium">Criado em</th>
              <th className="text-left py-3 px-4 font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b border-border/50 hover:bg-muted/30">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <span className="text-primary-500 font-medium text-sm">
                        {user.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.plan === 'Free' ? 'bg-muted text-muted-foreground' :
                    user.plan === 'Pro' ? 'bg-primary-500/10 text-primary-500' :
                    user.plan === 'Business' ? 'bg-amber-500/10 text-amber-500' :
                    'bg-green-500/10 text-green-500'
                  }`}>
                    {user.plan}
                  </span>
                </td>
                <td className="py-3 px-4">{user.pages}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {new Date(user.createdAt).toLocaleDateString('pt-BR')}
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-1">
                    <button className="p-1 text-muted-foreground hover:text-foreground" title="Ver perfil">
                      <User className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-muted-foreground hover:text-foreground" title="Enviar email">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-muted-foreground hover:text-foreground" title="Grant acesso">
                      <Gift className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-muted-foreground hover:text-foreground" title="Mais opções">
                      <MoreHorizontal className="w-4 h-4" />
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