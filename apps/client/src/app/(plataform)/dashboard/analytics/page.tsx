'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, TrendingUp, Eye, MousePointerClick, Globe, Monitor } from 'lucide-react'

// Mock data
const stats = [
  { label: 'Visualizações', value: '1,234', change: '+12.5%', icon: Eye },
  { label: 'Cliques', value: '342', change: '+8.3%', icon: MousePointerClick },
  { label: 'CTR', value: '27.7%', change: '+2.1%', icon: TrendingUp },
]

const topLinks = [
  { title: 'Meu Instagram', clicks: 156, ctr: 12.6 },
  { title: 'YouTube', clicks: 89, ctr: 7.2 },
  { title: 'Loja', clicks: 67, ctr: 5.4 },
  { title: 'Contato', clicks: 30, ctr: 2.4 },
]

const topCountries = [
  { country: 'Brasil', visits: 823, percentage: 66.7 },
  { country: 'Portugal', visits: 156, percentage: 12.6 },
  { country: 'EUA', visits: 89, percentage: 7.2 },
  { country: 'Outros', visits: 166, percentage: 13.5 },
]

const topDevices = [
  { device: 'Mobile', visits: 765, percentage: 62 },
  { device: 'Desktop', visits: 469, percentage: 38 },
]

export default function DashboardAnalyticsPage() {
  const [period, setPeriod] = useState('7d')

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Veja como sua página está performando
          </p>
        </div>
        <div className="flex gap-2">
          {['7d', '30d', '90d'].map((p) => (
            <Button
              key={p}
              variant={period === p ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPeriod(p)}
            >
              {p === '7d' ? '7 dias' : p === '30d' ? '30 dias' : '90 dias'}
            </Button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-border/50 rounded-xl p-4 bg-muted/30">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-xs text-green-500 font-medium">{stat.change}</span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Top links */}
        <div className="border border-border/50 rounded-xl p-6 bg-muted/30">
          <h2 className="text-lg font-semibold mb-4">Links mais clicados</h2>
          <div className="space-y-3">
            {topLinks.map((link, i) => (
              <div key={link.title} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground text-sm w-4">{i + 1}.</span>
                  <span className="font-medium">{link.title}</span>
                </div>
                <div className="text-right">
                  <span className="font-medium">{link.clicks}</span>
                  <span className="text-sm text-muted-foreground ml-2">({link.ctr}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top countries */}
        <div className="border border-border/50 rounded-xl p-6 bg-muted/30">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Origem por país
          </h2>
          <div className="space-y-3">
            {topCountries.map((item) => (
              <div key={item.country}>
                <div className="flex items-center justify-between mb-1">
                  <span>{item.country}</span>
                  <span className="text-sm text-muted-foreground">{item.visits} ({item.percentage}%)</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Devices */}
      <div className="border border-border/50 rounded-xl p-6 bg-muted/30">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Monitor className="w-5 h-5" />
          Dispositivos
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {topDevices.map((item) => (
            <div key={item.device} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{item.device}</span>
                  <span className="text-muted-foreground">{item.visits} visitas</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade CTA */}
      <div className="border border-amber-500/50 rounded-xl p-6 bg-amber-500/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold mb-1">Analytics detalhado</p>
            <p className="text-sm text-muted-foreground">
              Desbloqueie histórico completo, export CSV e API com o plano Pro
            </p>
          </div>
          <Link href="/pricing">
            <Button>Fazer upgrade</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}