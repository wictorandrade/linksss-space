import { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, Sparkles, Zap, Crown, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PricingCards } from '@/components/landing/PricingCards'

export const metadata: Metadata = {
  title: 'Preços | Linksss',
  description: 'Planos flexíveis para criadores de conteúdo. Comece grátis, escale quando precisar.',
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="container px-4 pt-32 pb-16 text-center">
        <div className="inline-flex items-center gap-2 border border-primary-500/20 rounded-full px-4 py-1.5 mb-6 bg-primary-500/5">
          <Sparkles className="w-4 h-4 text-primary-500" />
          <span className="text-sm font-medium text-primary-400">
            7 dias grátis no Pro
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Planos que <span className="text-gradient">cabem no seu bolso</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Comece grátis, sem cartão de crédito. Upgrade quando precisar.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="container px-4 pb-20">
        <PricingCards />
      </section>

      {/* Comparison Table */}
      <section className="container px-4 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">Compare os planos</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-4 px-4 font-medium">Recurso</th>
                <th className="text-center py-4 px-4 font-medium">Free</th>
                <th className="text-center py-4 px-4 font-medium">Basic</th>
                <th className="text-center py-4 px-4 font-medium text-primary-500">Pro</th>
                <th className="text-center py-4 px-4 font-medium">Business</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Links', values: ['5', '15', 'Ilimitados', 'Ilimitados'] },
                { name: 'Páginas', values: ['1', '1', '3', 'Ilimitadas'] },
                { name: 'Analytics', values: ['7 dias', '30 dias', '90 dias', 'Ilimitado'] },
                { name: 'Templates premium', values: [false, true, true, true] },
                { name: 'Sem marca d\'água', values: [false, true, true, true] },
                { name: 'Conteúdo pago', values: [false, false, true, true] },
                { name: 'Domínio customizado', values: [false, false, true, true] },
                { name: 'API Analytics', values: [false, false, false, true] },
                { name: 'Suporte prioritário', values: [false, false, false, true] },
              ].map((row) => (
                <tr key={row.name} className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium">{row.name}</td>
                  {row.values.map((value, i) => (
                    <td key={i} className="text-center py-3 px-4">
                      {typeof value === 'boolean' ? (
                        value ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{value}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="container px-4 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">Perguntas frequentes</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              q: 'Posso trocar de plano a qualquer momento?',
              a: 'Sim! Você pode fazer upgrade ou downgrade quando quiser. A diferença é calculada proporcionalmente.',
            },
            {
              q: 'O que acontece se eu cancelar?',
              a: 'Sua página continua ativa até o fim do período pago. Depois, volta para o plano Free.',
            },
            {
              q: 'Como funciona o conteúdo pago?',
              a: 'Você pode vender produtos, cursos ou arquivos diretamente na sua página. Nós processamos via Stripe.',
            },
            {
              q: 'Posso usar meu próprio domínio?',
              a: 'Sim! Nos planos Pro e Business você pode configurar seu domínio personalizado.',
            },
          ].map((faq) => (
            <div key={faq.q} className="border border-border/50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 pb-20">
        <div className="border border-border/50 rounded-3xl p-8 md:p-16 text-center bg-gradient-to-b from-primary-500/5 to-transparent">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Crie sua página em menos de 5 minutos. Sem cartão de crédito.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="btn-glow text-base font-semibold px-8 py-6">
              Começar grátis
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}