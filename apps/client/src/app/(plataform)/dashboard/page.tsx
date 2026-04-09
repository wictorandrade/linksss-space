import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus, ExternalLink, BarChart3, Link as LinkIcon } from 'lucide-react'

export default function DashboardHomePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie suas páginas e links
          </p>
        </div>
        <Link href="/dashboard/pages/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nova página
          </Button>
        </Link>
      </div>

      {/* Quick stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Total de páginas</p>
          <p className="text-2xl font-bold">1</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Total de links</p>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Views (30 dias)</p>
          <p className="text-2xl font-bold">1.2K</p>
        </div>
        <div className="border border-border/50 rounded-xl p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">Cliques (30 dias)</p>
          <p className="text-2xl font-bold">342</p>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link
          href="/dashboard/pages/new"
          className="border border-border/50 rounded-xl p-6 bg-muted/30 hover:bg-muted/50 transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-3 group-hover:bg-primary-500/20">
            <Plus className="w-5 h-5 text-primary-500" />
          </div>
          <h3 className="font-semibold mb-1">Criar nova página</h3>
          <p className="text-sm text-muted-foreground">
            Comece do zero ou use um template
          </p>
        </Link>

        <Link
          href="/dashboard/analytics"
          className="border border-border/50 rounded-xl p-6 bg-muted/30 hover:bg-muted/50 transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-3 group-hover:bg-primary-500/20">
            <BarChart3 className="w-5 h-5 text-primary-500" />
          </div>
          <h3 className="font-semibold mb-1">Ver analytics</h3>
          <p className="text-sm text-muted-foreground">
            Views, cliques, origem do tráfego
          </p>
        </Link>

        <Link
          href="/pricing"
          className="border border-border/50 rounded-xl p-6 bg-muted/30 hover:bg-muted/50 transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3 group-hover:bg-amber-500/20">
            <LinkIcon className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="font-semibold mb-1">Fazer upgrade</h3>
          <p className="text-sm text-muted-foreground">
            Links ilimitados, conteúdo pago
          </p>
        </Link>
      </div>

      {/* Pages list */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Suas páginas</h2>
        <div className="border border-dashed border-border/50 rounded-xl p-12 text-center">
          <div className="max-w-sm mx-auto">
            <p className="text-muted-foreground mb-4">
              Você ainda não tem nenhuma página criada
            </p>
            <Link href="/dashboard/pages/new">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Criar primeira página
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Current plan */}
      <div className="border border-primary-500/50 rounded-xl p-6 bg-primary-500/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Plano atual</p>
            <p className="text-xl font-bold">Free</p>
            <p className="text-sm text-muted-foreground mt-1">
              5 links • 1 página • Analytics 7 dias
            </p>
          </div>
          <Link href="/pricing">
            <Button variant="outline">Ver planos</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}