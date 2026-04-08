'use client'

import { BarChart3, TrendingUp, Users, DollarSign, Eye, MousePointerClick } from 'lucide-react'

// Mock data
const stats = [
  { label: 'Visualizações totais', value: '128.4K', change: '+12.5%', icon: Eye },
  { label: 'Cliques totais', value: '45.2K', change: '+8.3%', icon: MousePointerClick },
  { label: 'Usuários ativos', value: '1,234', change: '+23.1%', icon: Users },
  { label: 'MRR', value: 'R$ 45.6K', change: '+15.2%', icon: DollarSign },
]

const topPages = [
  { slug: 'influencer-x', views: 12340, clicks: 4521, user: 'influencer@email.com' },
  { slug: 'creator-y', views: 8921, clicks: 3212, user: 'creator@email.com' },
  { slug: 'brand-z', views: 7654, clicks: 2891, user: 'brand@email.com' },
  { slug: 'artist-w', views: 5432, clicks: 1923, user: 'artist@email.com' },
  { slug: 'coach-v', views: 4123, clicks: 1542, user: 'coach@email.com' },
]

const dailyViews = [
  { day: '01/04', views: 4200 },
  { day: '02/04', views: 3800 },
  { day: '03/04', views: 4500 },
  { day: '04/04', views: 5100 },
  { day: '05/04', views: 4800 },
  { day: '06/04', views: 5200 },
  { day: '07/04', views: 4900 },
]

export default function AdminAnalyticsPage() {
  const maxViews = Math.max(...dailyViews.map(d => d.views))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Analytics Global</h1>
        <p className="text-muted-foreground mt-1">Métricas de toda a plataforma</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
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

      {/* Chart placeholder */}
      <div className="border border-border/50 rounded-xl p-6 bg-muted/30">
        <h2 className="text-lg font-semibold mb-4">Visualizações (últimos 7 dias)</h2>
        <div className="flex items-end gap-2 h-48">
          {dailyViews.map((day) => (
            <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-primary-500/30 rounded-t"
                style={{ height: `${(day.views / maxViews) * 100}%` }}
              />
              <span className="text-xs text-muted-foreground">{day.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top pages */}
      <div className="border border-border/50 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border/50 bg-muted/50">
          <h2 className="text-lg font-semibold">Top páginas</h2>
        </div>
        <table className="w-full">
          <thead className="bg-muted/30">
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-4 font-medium">Slug</th>
              <th className="text-left py-3 px-4 font-medium">Usuário</th>
              <th className="text-right py-3 px-4 font-medium">Views</th>
              <th className="text-right py-3 px-4 font-medium">Cliques</th>
              <th className="text-right py-3 px-4 font-medium">CTR</th>
            </tr>
          </thead>
          <tbody>
            {topPages.map((page, i) => (
              <tr key={page.slug} className="border-b border-border/50 hover:bg-muted/30">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground text-sm">{i + 1}.</span>
                    <code className="text-sm">/{page.slug}</code>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{page.user}</td>
                <td className="py-3 px-4 text-right">{page.views.toLocaleString()}</td>
                <td className="py-3 px-4 text-right">{page.clicks.toLocaleString()}</td>
                <td className="py-3 px-4 text-right text-sm text-muted-foreground">
                  {((page.clicks / page.views) * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}