import { Metadata } from 'next'
import Link from 'next/link'
import { Zap, Palette, BarChart3, CreditCard, Globe, Shield, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Recursos | Linksss',
  description: 'Tudo que você precisa para criar uma bio profissional. Links, analytics, conteúdo pago, templates e mais.',
}

const features = [
  {
    icon: Zap,
    title: 'Setup em minutos',
    description: 'Crie sua página completa em menos de 5 minutos. Interface intuitiva e sem complicação.',
  },
  {
    icon: Palette,
    title: 'Templates premium',
    description: '5 templates únicos e artísticos para sua página se destacar. Dark, minimal, gradient, neon e organic.',
  },
  {
    icon: BarChart3,
    title: 'Analytics completo',
    description: 'Veja quem clica, de onde vem, qual dispositivo usa. Dados para otimizar sua bio.',
  },
  {
    icon: CreditCard,
    title: 'Conteúdo pago',
    description: 'Venda produtos, cursos, arquivos e conteúdos exclusivos direto na sua página.',
  },
  {
    icon: Globe,
    title: 'Domínio customizado',
    description: 'Use seu próprio domínio para fortalecer sua marca. Disponível nos planos Pro+.',
  },
  {
    icon: Shield,
    title: 'Seguro e confiável',
    description: '99.9% de uptime garantido. Seus links sempre disponíveis, sempre rápidos.',
  },
]

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="container px-4 pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tudo que você precisa <span className="text-gradient">na bio</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Recursos pensados para criadores de conteúdo, influencers e profissionais.
        </p>
      </section>

      {/* Features Grid */}
      <section className="container px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group border border-border/50 rounded-2xl p-6 bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed sections */}
      <section className="container px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Analytics */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Analytics que fazem sentido</h2>
              <p className="text-muted-foreground mb-4">
                Entenda seu público com métricas claras: visualizações, cliques por link,
                origem do tráfego, dispositivos e muito mais.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Visualizações únicas e totais</li>
                <li>• Cliques por link com ranking</li>
                <li>• Mapa de origem por país</li>
                <li>• Gráfico de tendências</li>
              </ul>
            </div>
            <div className="border border-border/50 rounded-2xl p-6 bg-muted/30 aspect-video flex items-center justify-center">
              <BarChart3 className="w-20 h-20 text-muted-foreground/30" />
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 border border-border/50 rounded-2xl p-6 bg-muted/30 aspect-video flex items-center justify-center">
              <CreditCard className="w-20 h-20 text-muted-foreground/30" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-4">Monetize seu conteúdo</h2>
              <p className="text-muted-foreground mb-4">
                Venda produtos digitais, cursos, e-books ou qualquer conteúdo exclusivo.
                Pagamentos processados via Stripe com total segurança.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Links pagos com preço customizado</li>
                <li>• Downloads seguros após pagamento</li>
                <li>• Relatório de vendas</li>
                <li>• Taxa competitiva</li>
              </ul>
            </div>
          </div>

          {/* Templates */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Design que impressiona</h2>
              <p className="text-muted-foreground mb-4">
                Templates criados por designers para fazer sua página se destacar.
                Personalize cores, fontes e muito mais.
              </p>
              <Link href="/templates" className="text-primary-500 hover:underline inline-flex items-center gap-1">
                Ver todos os templates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="border border-border/50 rounded-2xl p-6 bg-muted/30 aspect-video flex items-center justify-center">
              <Palette className="w-20 h-20 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 pb-20">
        <div className="border border-border/50 rounded-3xl p-8 md:p-16 text-center bg-gradient-to-b from-primary-500/5 to-transparent">
          <Sparkles className="w-12 h-12 text-primary-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua bio?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Junte-se a criadores que já usam o Linksss para conectar com sua audiência.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="btn-glow text-base font-semibold px-8 py-6">
              Começar agora — é grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}