# RF-08: Painel Administrativo

## Acesso
Rota `/admin/**` — protegida por role `ADMIN` ou `SUPER_ADMIN`.

## Roles de acesso
```typescript
enum UserRole {
  USER          // usuário comum
  SUPPORT       // lê dados, não altera planos
  ADMIN         // gerencia usuários e planos
  SUPER_ADMIN   // acesso total, inclui configurações globais
}
```

## Rotas

```
/admin                    → redirect para /admin/dashboard
/admin/dashboard          → KPIs globais da plataforma
/admin/users              → listagem e gestão de usuários
/admin/users/[id]         → detalhes de um usuário específico
/admin/plans              → gestão de planos
/admin/coupons            → gestão de cupons
/admin/revenue            → receita, MRR, ARR
/admin/analytics          → analytics agregado da plataforma
```

## Dashboard admin — KPIs
- Total de usuários cadastrados
- Usuários ativos (último 30 dias)
- Usuários FREE vs pagos
- MRR (Monthly Recurring Revenue)
- ARR (Annual Recurring Revenue)
- Churn mensal
- Trial conversions
- Novos usuários hoje / semana / mês
- Crescimento percentual

## Gestão de usuários (/admin/users)
- Listar todos os usuários com paginação
- Busca por nome, email ou slug
- Filtros: plano, status, data de criação
- Ver perfil do usuário
- Ver plano atual e histórico
- **Alterar plano manualmente** (sem Stripe)
- Suspender conta (bloqueia acesso)
- Reativar conta
- Conceder acesso premium manual:
  - Por 30 dias
  - Por 1 ano
  - Vitalício

## Concessão manual de plano
Campo `planSource` na tabela `UserGrant`:
- `FREE` — plano gratuito padrão
- `STRIPE` — assinatura via Stripe
- `ADMIN` — concessão manual pelo admin

O `UserGrant` com `planSource: ADMIN` sobrepõe o plano do Stripe para fins de verificação de acesso a features.

## Gestão de cupons (/admin/coupons)
- Criar, editar e desativar cupons
- Ver quantas vezes cada cupom foi usado
- Ver quem usou cada cupom

## Revenue (/admin/revenue)
- Gráfico de MRR ao longo do tempo
- Breakdown por plano
- Churn rate mensal
- Cohort de retenção

## Configurações globais (SUPER_ADMIN)
- Manutenção mode on/off
- Permitir/bloquear plano free
- Configurações de email, domínio, etc.