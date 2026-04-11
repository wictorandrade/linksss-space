import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Termos de Uso | Linksss',
  description: 'Termos e condições de uso da plataforma Linksss.',
}

export default function TermsPage() {
  return (
    <div className="container px-4 pt-32 pb-20 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Termos de Uso</h1>
      <p className="text-muted-foreground mb-12 text-sm">
        Última atualização: abril de 2026
      </p>

      <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Aceitação dos termos</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ao acessar ou usar a plataforma Linksss.space ("Serviço"), você concorda em ficar
            vinculado a estes Termos de Uso. Se não concordar com qualquer parte dos termos,
            não poderá usar o Serviço.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Descrição do serviço</h2>
          <p className="text-muted-foreground leading-relaxed">
            O Linksss.space é uma plataforma SaaS para criação de bio pages — páginas pessoais
            com links, blocos de conteúdo, analytics e ferramentas de monetização. O serviço é
            operado pela Souzs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Conta e responsabilidades</h2>
          <p className="text-muted-foreground leading-relaxed">
            Você é responsável por manter a confidencialidade de sua conta, por todas as
            atividades realizadas nela e pelo conteúdo publicado em sua página. É proibido
            publicar conteúdo ilegal, ofensivo, enganoso ou que viole direitos de terceiros.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Slugs e URLs</h2>
          <p className="text-muted-foreground leading-relaxed">
            Você pode escolher um slug único para sua página (ex: linksss.space/seunome).
            A Souzs reserva o direito de recusar ou remover slugs que conflitem com rotas
            do sistema, violem direitos de terceiros ou sejam considerados inadequados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Pagamentos e planos</h2>
          <p className="text-muted-foreground leading-relaxed">
            Planos pagos são cobrados conforme descrito na página de preços. Cancelamentos
            fazem a conta reverter ao plano Free ao final do período pago. Não há reembolso
            proporcional por períodos não utilizados, exceto quando exigido por lei.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Limitação de responsabilidade</h2>
          <p className="text-muted-foreground leading-relaxed">
            O serviço é fornecido "como está". A Souzs não garante disponibilidade ininterrupta
            e não se responsabiliza por danos decorrentes do uso ou impossibilidade de uso do
            Serviço, exceto quando exigido por lei.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Encerramento</h2>
          <p className="text-muted-foreground leading-relaxed">
            A Souzs reserva o direito de suspender ou encerrar contas que violem estes termos,
            sem aviso prévio, a critério exclusivo da empresa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Contato</h2>
          <p className="text-muted-foreground leading-relaxed">
            Dúvidas sobre os termos:{' '}
            <a
              href="mailto:legal@linksss.space"
              className="text-primary-500 hover:underline"
            >
              legal@linksss.space
            </a>
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50 flex items-center gap-4 text-sm text-muted-foreground">
        <Link href="/privacy" className="hover:text-foreground transition-colors">
          Política de Privacidade
        </Link>
        <span>·</span>
        <Link href="/" className="hover:text-foreground transition-colors">
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}