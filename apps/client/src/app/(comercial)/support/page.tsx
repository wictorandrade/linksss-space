import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageCircle, FileText, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Suporte | Linksss',
  description: 'Central de ajuda e suporte da plataforma Linksss. FAQ, contato e documentação.',
}

const faqs = [
  {
    q: 'Como crio minha primeira página?',
    a: 'Acesse o dashboard, clique em "Nova página" e escolha um slug único. Em minutos sua página estará no ar.',
  },
  {
    q: 'Posso trocar de plano a qualquer momento?',
    a: 'Sim. Upgrade é imediato. Downgrade ocorre no fim do período pago.',
  },
  {
    q: 'Como funciona o domínio customizado?',
    a: 'Nos planos Pro+, você aponta o CNAME do seu domínio para nosso servidor. O processo leva até 24h para propagar.',
  },
  {
    q: 'Como vendo conteúdo digital na minha página?',
    a: 'Adicione um bloco do tipo "Produto" ou "Download" com preço. O pagamento é processado via Stripe.',
  },
  {
    q: 'Posso cancelar minha assinatura?',
    a: 'Sim, a qualquer momento. Sua página continua ativa até o fim do período pago e depois retorna ao plano Free.',
  },
  {
    q: 'O que acontece com meus dados se eu excluir a conta?',
    a: 'Removemos todos os dados em até 30 dias após a exclusão. Ver nossa Política de Privacidade para detalhes.',
  },
  {
    q: 'Analytics está contando minhas próprias visitas?',
    a: 'Quando você está logado e visita sua própria página, as visitas são filtradas para não distorcer os dados.',
  },
  {
    q: 'Posso ter mais de um perfil?',
    a: 'Sim, no plano Business você pode criar até 5 perfis distintos com slugs e configurações independentes.',
  },
]

export default function SupportPage() {
  return (
    <div className="container px-4 pt-32 pb-20">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como podemos <span className="text-gradient">ajudar?</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Central de suporte do Linksss. Encontre respostas ou fale diretamente com nosso time.
        </p>
      </div>

      {/* Contact options */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
        <a
          href="mailto:suporte@linksss.space"
          className="group border border-border/50 rounded-2xl p-6 bg-muted/30 hover:bg-muted/50 transition-colors text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors">
            <Mail className="w-6 h-6 text-primary-500" />
          </div>
          <h3 className="font-semibold mb-1">E-mail</h3>
          <p className="text-sm text-muted-foreground">suporte@linksss.space</p>
          <p className="text-xs text-muted-foreground mt-1">Resposta em até 24h</p>
        </a>

        <a
          href="https://wa.me/5542999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-border/50 rounded-2xl p-6 bg-muted/30 hover:bg-muted/50 transition-colors text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
            <MessageCircle className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="font-semibold mb-1">WhatsApp</h3>
          <p className="text-sm text-muted-foreground">Planos Pro e Business</p>
          <p className="text-xs text-muted-foreground mt-1">Suporte prioritário</p>
        </a>

        <Link
          href="/pricing"
          className="group border border-border/50 rounded-2xl p-6 bg-muted/30 hover:bg-muted/50 transition-colors text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
            <FileText className="w-6 h-6 text-amber-500" />
          </div>
          <h3 className="font-semibold mb-1">Ver planos</h3>
          <p className="text-sm text-muted-foreground">Compare os recursos</p>
          <p className="text-xs text-muted-foreground mt-1">7 dias grátis no Pro</p>
        </Link>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Perguntas frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="border border-border/50 rounded-xl p-6 bg-muted/20"
            >
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border border-border/50 rounded-3xl p-8 md:p-12 text-center bg-gradient-to-b from-primary-500/5 to-transparent max-w-2xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-3">Não encontrou o que procurava?</h2>
        <p className="text-muted-foreground mb-6">
          Nossa equipe está pronta para ajudar.
        </p>
        <a href="mailto:suporte@linksss.space">
          <Button size="lg">
            Falar com suporte
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </a>
      </div>
    </div>
  )
}