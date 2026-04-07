import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, BarChart3, Palette, CreditCard, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const features = [
  {
    icon: Zap,
    title: 'Setup em minutos',
    description: 'Crie sua página de links em menos de 5 minutos. Sem complicação.',
  },
  {
    icon: Palette,
    title: 'Templates premium',
    description: '5 templates únicos e artísticos para sua página se destacar.',
  },
  {
    icon: BarChart3,
    title: 'Analytics completo',
    description: 'Veja quem clica, de onde vem, e otimize sua bio.',
  },
  {
    icon: CreditCard,
    title: 'Conteúdo pago',
    description: 'Venda produtos, cursos e conteúdos exclusivos direto na bio.',
  },
]

const plans = [
  {
    name: 'Free',
    price: 'R$ 0',
    period: 'para sempre',
    description: 'Perfeito para começar',
    features: ['5 links', '1 página', 'Analytics 7 dias'],
    cta: 'Começar grátis',
    featured: false,
  },
  {
    name: 'Basic',
    price: 'R$ 9,90',
    period: '/mês',
    description: 'Para criadores de conteúdo',
    features: ['15 links', '3 templates premium', 'Sem marca d\'água', 'Analytics 30 dias'],
    cta: 'Assinar agora',
    featured: false,
  },
  {
    name: 'Pro',
    price: 'R$ 29,90',
    period: '/mês',
    description: 'Para profissionais',
    features: ['Links ilimitados', 'Todos templates', 'Conteúdo pago', 'Domínio customizado', 'Analytics 90 dias'],
    cta: 'Assinar Pro',
    featured: true,
  },
  {
    name: 'Business',
    price: 'R$ 79,90',
    period: '/mês',
    description: 'Para empresas',
    features: ['Tudo ilimitado', 'API Analytics', 'Suporte prioritário', 'SLA garantido'],
    cta: 'Falar conosco',
    featured: false,
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Top glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(99,102,241,0.15),transparent)]" />

        {/* Hero */}
        <section className="relative container px-4 pt-32 pb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-primary-500/20 rounded-full px-4 py-1.5 mb-8 bg-primary-500/5">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-400">
              Feito por criadores, para criadores
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-foreground">Sua bio em</span>
            <br />
            <span className="text-gradient">um só lugar</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Links, conteúdo pago, analytics completo.
            <br className="hidden sm:block" />
            Crie páginas lindas em minutos. Feito por{' '}
            <a href="https://souzs.com" className="text-primary-500 hover:underline">
              Souzs
            </a>
            .
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="btn-glow text-base font-semibold px-8 py-6">
                Criar minha página grátis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="text-base font-semibold px-8 py-6">
                Ver planos
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16">
            {[
              { value: '5', label: 'Templates premium' },
              { value: '4', label: 'Planos flexíveis' },
              { value: '99%', label: 'Uptime garantido' },
              { value: '24/7', label: 'Suporte Pro+' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-border/50 rounded-2xl p-4 bg-muted/50"
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="relative container px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tudo que você precisa na bio
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Recursos pensados para criadores de conteúdo, influencers e profissionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Pricing */}
        <section id="pricing" className="relative container px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos que cabem no seu bolso
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Comece grátis, escale quando precisar. Sem surpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative border rounded-2xl p-6 ${
                  plan.featured
                    ? 'border-primary-500 bg-primary-500/5'
                    : 'border-border/50 bg-muted/30'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Mais popular
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.featured ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative container px-4 py-20">
          <div className="border border-border/50 rounded-3xl p-8 md:p-16 text-center bg-gradient-to-b from-primary-500/5 to-transparent">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para transformar sua bio?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
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
      </main>
      <Footer />
    </>
  )
}