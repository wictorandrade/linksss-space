# RF-07: Billing e Planos

## Integração
Stripe para billing. Webhooks para sincronização de status.

## Planos

### FREE
- 5 blocos/links
- 1 perfil
- Analytics básico (30 dias)
- Branding do app (watermark)
- Sem domínio customizado
- Sem pixels
- Sem templates premium

### PRO (mensal/anual)
- Blocos ilimitados
- 1 perfil
- Templates premium
- Analytics avançado (90 dias)
- Pixel tracking (Meta, Google, TikTok)
- Domínio customizado (1)
- Sem watermark/branding
- Geração de QR code

### BUSINESS (mensal/anual)
- Tudo do PRO +
- Múltiplos perfis (até 5)
- Membros da equipe (até 3)
- Analytics completo (1 ano + export CSV)
- Heatmap e funil
- Suporte prioritário
- Domínios customizados (até 3)

## Origem do plano
Campo `planSource` no modelo (FREE, STRIPE, ADMIN) — permite concessão manual de planos sem criar assinatura Stripe.

## Fluxo de checkout
1. Usuário clica em "Upgrade"
2. Cria Stripe Checkout Session
3. Redirect para Stripe
4. Webhook confirma pagamento
5. Subscription criada/atualizada no DB

## Webhooks Stripe obrigatórios
- `checkout.session.completed`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_failed`

## Rotas de billing
```
/app/billing                → plano atual, botões de upgrade
/app/billing/invoices       → histórico de faturas (via Stripe API)
/app/billing/payment-method → atualizar cartão (via Stripe Portal)
```

## Cupons
- Código único (ex: WELCOME50, LAUNCH30)
- Desconto percentual ou valor fixo
- Data de expiração opcional
- Limite de usos opcional
- Aplicável a plano específico ou todos
- Validação no checkout antes de aplicar ao Stripe