# RF-06: Analytics

## Importância
Analytics é uma das partes mais importantes do produto. É diferencial competitivo e argumento de venda do plano PRO.

## Dados coletados por pageview
```typescript
{
  pageId: string
  date: Date
  referrer?: string         // URL de origem
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  utmTerm?: string
  device: 'mobile' | 'desktop' | 'tablet'
  browser?: string
  os?: string
  country?: string
  city?: string
  sessionId?: string        // para cálculo de visitantes únicos
}
```

## Dados coletados por clique em bloco
```typescript
{
  linkId: string            // ou blockId
  clickedAt: Date
  referrer?: string
  device?: string
  country?: string
  city?: string
  browser?: string
  os?: string
  utmSource?: string
}
```

## Métricas por plano

### FREE
- Total de views (últimos 30 dias)
- Total de cliques
- CTR geral

### PRO
- Tudo do FREE +
- Visitantes únicos
- Origem do tráfego (breakdown por referrer)
- Breakdown por dispositivo
- Breakdown por país
- Horários de pico
- Analytics por bloco individual
- Performance UTM

### BUSINESS
- Tudo do PRO +
- Heatmap de cliques
- Funil de conversão
- Retenção
- Comparativo diário / semanal / mensal
- Export CSV

## Gráficos obrigatórios
- Linha: views e cliques ao longo do tempo
- Barra: top blocos por clique
- Mapa: top países
- Rosca: breakdown de dispositivos
- Heatmap: dia da semana × hora do dia

## Coleta (client-side)
- Pageview registrado via API route `/api/analytics/pageview` (server-side para evitar bloqueio de ad blockers)
- Clique registrado via chamada à API após o clique, com redirect posterior