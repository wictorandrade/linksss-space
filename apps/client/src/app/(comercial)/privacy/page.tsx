import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Linksss',
  description: 'Como coletamos, usamos e protegemos seus dados na plataforma Linksss.',
}

export default function PrivacyPage() {
  return (
    <div className="container px-4 pt-32 pb-20 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Política de Privacidade</h1>
      <p className="text-muted-foreground mb-12 text-sm">
        Última atualização: abril de 2026
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Dados que coletamos</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Coletamos as seguintes informações ao usar o Linksss.space:
          </p>
          <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside">
            <li>Dados de conta: nome, e-mail e avatar, fornecidos via Souzs SSO</li>
            <li>Dados de uso: páginas criadas, links cadastrados, configurações de aparência</li>
            <li>Analytics de visitantes: views, cliques, dispositivo, país e referrer (sem cookies de terceiros)</li>
            <li>Dados de pagamento: processados pelo Stripe — não armazenamos dados de cartão</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Como usamos seus dados</h2>
          <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside">
            <li>Operar e melhorar o Serviço</li>
            <li>Fornecer analytics para sua página</li>
            <li>Processar pagamentos e gerenciar assinaturas</li>
            <li>Comunicar atualizações importantes (sem spam)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Compartilhamento de dados</h2>
          <p className="text-muted-foreground leading-relaxed">
            Não vendemos seus dados. Compartilhamos apenas com fornecedores essenciais:
            Stripe (pagamentos), Souzs SSO (autenticação) e provedores de infraestrutura
            (hospedagem segura). Todos seguem padrões adequados de proteção de dados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Usamos apenas cookies essenciais para autenticação (httpOnly, signed). Não usamos
            cookies de rastreamento ou publicidade de terceiros na sua área autenticada.
            Páginas públicas de usuários podem ter pixels de terceiros configurados pelo próprio
            usuário (planos Pro+).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Seus direitos (LGPD)</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
          </p>
          <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside">
            <li>Acessar os dados que temos sobre você</li>
            <li>Corrigir dados incorretos</li>
            <li>Solicitar exclusão da conta e dados</li>
            <li>Portabilidade dos seus dados</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Para exercer esses direitos:{' '}
            <a href="mailto:privacidade@linksss.space" className="text-primary-500 hover:underline">
              privacidade@linksss.space
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Retenção de dados</h2>
          <p className="text-muted-foreground leading-relaxed">
            Dados de conta são mantidos enquanto a conta estiver ativa. Após exclusão,
            removemos os dados em até 30 dias, exceto quando obrigados por lei a mantê-los
            por período maior.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Contato</h2>
          <p className="text-muted-foreground leading-relaxed">
            Encarregado de proteção de dados (DPO):{' '}
            <a href="mailto:privacidade@linksss.space" className="text-primary-500 hover:underline">
              privacidade@linksss.space
            </a>
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50 flex items-center gap-4 text-sm text-muted-foreground">
        <Link href="/terms" className="hover:text-foreground transition-colors">
          Termos de Uso
        </Link>
        <span>·</span>
        <Link href="/" className="hover:text-foreground transition-colors">
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}