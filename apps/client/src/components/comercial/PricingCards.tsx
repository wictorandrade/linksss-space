'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Free',
    price: 'R$ 0',
    period: 'para sempre',
    description: 'Perfeito para começar',
    features: ['5 links', '1 página', 'Analytics 7 dias', 'Tema padrão'],
    cta: 'Começar grátis',
    ctaLink: '/dashboard',
    featured: false,
  },
  {
    name: 'Basic',
    price: 'R$ 9,90',
    period: '/mês',
    description: 'Para criadores de conteúdo',
    features: [
      '15 links',
      '3 templates premium',
      'Sem marca d\'água',
      'Analytics 30 dias',
    ],
    cta: 'Assinar Basic',
    ctaLink: '/dashboard?plan=basic',
    featured: false,
  },
  {
    name: 'Pro',
    price: 'R$ 29,90',
    period: '/mês',
    description: 'Para profissionais',
    features: [
      'Links ilimitados',
      'Todos templates',
      'Conteúdo pago',
      'Domínio customizado',
      'Analytics 90 dias',
      'Suporte prioritário',
    ],
    cta: 'Assinar Pro',
    ctaLink: '/dashboard?plan=pro',
    featured: true,
    badge: 'Mais popular',
  },
  {
    name: 'Business',
    price: 'R$ 79,90',
    period: '/mês',
    description: 'Para empresas',
    features: [
      'Tudo ilimitado',
      'Páginas ilimitadas',
      'API Analytics',
      'SLA garantido',
      'Suporte 24/7',
      'Gerente dedicado',
    ],
    cta: 'Falar conosco',
    ctaLink: 'https://wa.me/5542999999999',
    featured: false,
  },
]

export function PricingCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative border rounded-2xl p-6 ${
            plan.featured
              ? 'border-primary-500 bg-primary-500/5 shadow-lg shadow-primary-500/10'
              : 'border-border/50 bg-muted/30'
          }`}
        >
          {plan.badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {plan.badge}
              </span>
            </div>
          )}

          <div className="mb-4">
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </div>

          <div className="mb-6">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className="text-muted-foreground text-sm">{plan.period}</span>
          </div>

          <ul className="space-y-3 mb-6">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {plan.ctaLink.startsWith('http') ? (
            <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
              <Button
                className="w-full"
                variant={plan.featured ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </a>
          ) : (
            <Link href={plan.ctaLink}>
              <Button
                className="w-full"
                variant={plan.featured ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}