# RF-09: Recursos Extras

## QR Code do perfil
- Gerado automaticamente para cada perfil público
- Download em PNG e SVG
- Disponível em `/app/settings` ou na página do perfil no dashboard

## Domínio customizado
- Configurável em `/app/settings` (planos PRO e BUSINESS)
- Usuário aponta CNAME para o app
- Verificação de domínio via TXT record ou HTTP challenge
- Roteamento: middleware Next.js verifica `host` e serve o perfil correto

## Link curto
- Cada bloco pode gerar um link curto (ex: `lnks.cc/abc123`)
- Redirect com tracking de analytics

## Pixel Tracking
- Meta Pixel (Facebook)
- Google Analytics (GA4)
- TikTok Pixel
- Configurados por perfil em `/app/settings`
- Injetados no `<head>` da página pública do perfil

## Export de Analytics
- CSV com dados de views e cliques
- Disponível para planos BUSINESS
- Filtros: período, bloco específico

## Múltiplos perfis (BUSINESS)
- Até 5 perfis por conta
- Navegação entre perfis na área autenticada
- Analytics separado por perfil

## IA — Sugestões de otimização
- Análise do CTR atual e sugestão de melhoria de CTA
- Sugestão de reordenação de blocos baseada em cliques
- Sugestão de horário de publicação baseada em picos de tráfego
- Integração via Anthropic API (Claude)
- Feature dos planos PRO e BUSINESS

## Marketing Site (comercial)
Rotas no grupo `(comercial)`:
```
/                  → landing page principal
/pricing           → tabela de preços
/templates         → galeria de templates
/blog              → blog (opcional, fase 2)
/support           → suporte / FAQ
```