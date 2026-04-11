# RF-02: Perfis Públicos

## Rota
`/[slug]` — ex: `/wictor`, `/empresa-x`

## Slug
- Único por usuário
- Validado no backend e frontend
- Sistema de blacklist obrigatório

### Blacklist de slugs reservados (mínimo obrigatório)
```
app, admin, billing, pricing, login, signup, api,
templates, blog, settings, dashboard, support,
auth, callback, webhook, health, metrics, static,
assets, public, robots, sitemap, favicon
```

## Conteúdo do perfil público
- Avatar
- Nome
- Headline
- Descrição curta (bio)
- CTA principal (botão destacado)
- Lista de blocos (links, botões, mídias, etc.)
- Redes sociais (ícones de rodapé)

## Comportamento
- Perfil inativo (`isActive: false`) retorna 404
- Analytics deve ser registrado a cada visualização (pageview)
- Suporte a pixel tracking (Meta Pixel, Google Analytics, TikTok Pixel)
- Suporte a parâmetros UTM — capturar e armazenar na analytics

## Performance
- Geração estática onde possível (revalidação via ISR)
- Imagens otimizadas via Next.js Image