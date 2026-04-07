'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { User, Bell, Link as LinkIcon } from 'lucide-react'

export default function DashboardSettingsPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('user@email.com')

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold">Configurações</h1>
        <p className="text-muted-foreground mt-1">
          Gerencie suas preferências
        </p>
      </div>

      {/* Profile */}
      <div className="border border-border/50 rounded-xl p-6 bg-muted/30">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <User className="w-5 h-5" />
          Perfil
        </h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full rounded-lg border border-border/50 bg-background px-3 py-2"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full rounded-lg border border-border/50 bg-muted px-3 py-2 text-muted-foreground"
            />
            <p className="text-xs text-muted-foreground mt-1">
              O email é gerenciado pelo SSO Souzs
            </p>
          </div>
          <Button>Salvar alterações</Button>
        </div>
      </div>

      {/* Notifications */}
      <div className="border border-border/50 rounded-xl p-6 bg-muted/30">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Notificações
        </h2>
        <div className="space-y-4">
          <label className="flex items-center justify-between">
            <span>Email de relatório semanal</span>
            <input type="checkbox" className="w-4 h-4" />
          </label>
          <label className="flex items-center justify-between">
            <span>Alertas de pagamentos</span>
            <input type="checkbox" className="w-4 h-4" defaultChecked />
          </label>
          <label className="flex items-center justify-between">
            <span>Novidades e atualizações</span>
            <input type="checkbox" className="w-4 h-4" />
          </label>
        </div>
      </div>

      {/* Danger zone */}
      <div className="border border-red-500/50 rounded-xl p-6 bg-red-500/5">
        <h2 className="text-lg font-semibold mb-4 text-red-500">Zona de perigo</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Excluir sua conta removerá todas as suas páginas, links e dados permanentemente.
        </p>
        <Button variant="destructive">Excluir conta</Button>
      </div>
    </div>
  )
}