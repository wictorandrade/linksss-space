# RF-10: Requisitos Não-Funcionais

## Performance
- Perfis públicos: LCP < 2.5s (ISR com revalidação de 60s)
- Área autenticada: resposta da API < 300ms no p95
- Analytics queries: pré-agregadas por dia (não queries raw a cada request)

## Segurança
- Autenticação via Souzs SSO (RS256, cookies httpOnly signed)
- Todas as rotas `/app/**` e `/admin/**` protegidas por middleware
- Validação de slug na criação E na atualização
- Blacklist de slugs reservados validada no backend
- Rate limiting nas rotas de analytics e tracking
- Sanitização de HTML no bloco `HTML` (plano BUSINESS)
- Webhook Stripe validado via `stripe-signature`

## Escalabilidade
- Analytics agregado por dia (não por evento) — tabela `PageAnalytics` já existe
- Eventos brutos (`LinkClick`) para analytics detalhado, com retention policy
- Uso de índices nas queries mais frequentes (já no schema)
- Jobs assíncronos para envio de email e agregação de analytics

## Acessibilidade
- Componentes Shadcn UI (já acessíveis por padrão)
- Alt text obrigatório em imagens do perfil
- Contraste mínimo WCAG AA

## SEO (perfis públicos)
- `<title>` e `<meta description>` gerados a partir do perfil
- Open Graph tags (nome, avatar, headline)
- Twitter Card
- `robots.txt` e `sitemap.xml` já configurados no projeto

## Internacionalização
- Produto em português por padrão
- Estrutura pronta para i18n futuro (não implementar agora)

## Observabilidade
- Logs estruturados no NestJS (já configurado)
- Erros capturados com contexto (userId, pageId)
- Health check endpoint na API (`/health`)