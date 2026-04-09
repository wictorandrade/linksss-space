import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TemplatesGrid } from '@/components/comercial/TemplatesGrid'

export const metadata: Metadata = {
  title: 'Templates | Linksss',
  description: '5 templates premium e artísticos para sua página se destacar. Dark, minimal, gradient, neon e organic.',
}

export default function TemplatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="container px-4 pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Templates <span className="text-gradient">artísticos</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Designs únicos e premium para sua página se destacar. Feitos com carinho.
        </p>
      </section>

      {/* Templates Grid */}
      <section className="container px-4 pb-20">
        <TemplatesGrid />
      </section>

      {/* CTA */}
      <section className="container px-4 pb-20">
        <div className="border border-border/50 rounded-3xl p-8 md:p-16 text-center bg-gradient-to-b from-primary-500/5 to-transparent">
          <h2 className="text-3xl font-bold mb-4">Gostou dos templates?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Escolha um e personalize sua página em minutos. Planos Basic+ têm acesso a todos.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="btn-glow text-base font-semibold px-8 py-6">
              Criar minha página
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}