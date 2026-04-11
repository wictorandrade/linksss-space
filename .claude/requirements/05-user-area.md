# RF-05: Área Autenticada do Usuário

## Rotas
```
/app                    → redirect para /app/dashboard
/app/dashboard          → visão geral com KPIs
/app/profile            → edição de dados do perfil
/app/links              → gestão de blocos (drag and drop)
/app/appearance         → templates e personalização visual
/app/analytics          → analytics detalhado
/app/billing            → plano atual e gestão de assinatura
/app/billing/invoices   → histórico de faturas
/app/billing/payment-method → método de pagamento
/app/settings           → configurações da conta (slug, domínio, pixels)
```

## Autenticação
- Usa Souzs SSO (ver `.claude/integrations/sso-docs.md`)
- Middleware Next.js protege todas as rotas `/app/**`
- Redirect para SSO login se sem cookie de sessão

## Dashboard (/app/dashboard)
KPIs exibidos:
- Total de visualizações do perfil (7d, 30d, all time)
- Visitantes únicos
- Total de cliques em blocos
- CTR geral (cliques / visualizações)
- Origem do tráfego (referrer breakdown)
- Dispositivos (mobile, desktop, tablet)
- Top países
- Horários de pico (heatmap por hora/dia)
- Performance por UTM (utm_source, utm_medium, utm_campaign)
- Conversão por bloco (cliques / visualizações)

## Gestão de blocos (/app/links)
- Listagem de todos os blocos em ordem
- Drag and drop para reordenar
- Toggle ativo/inativo por bloco
- Formulário de criação/edição por tipo de bloco
- Preview em tempo real da página pública

## Appearance (/app/appearance)
- Seleção de template (com preview)
- Customização de cores, fontes, bordas
- Upload de avatar e imagem de fundo
- Preview ao vivo (iframe ou componente espelho)

## Settings (/app/settings)
- Alterar slug (com validação de disponibilidade)
- Configurar domínio customizado (planos PRO+)
- Configurar pixels (Meta, Google, TikTok)
- Configurar UTM padrão
- Excluir conta