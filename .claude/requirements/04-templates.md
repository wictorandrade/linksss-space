# RF-04: Sistema de Templates

## Conceito
Templates são configurações completas de aparência — não apenas troca de cor. Alteram layout, tipografia, espaçamento, bordas, estilo dos blocos e CTA.

## Templates obrigatórios

| Slug | Nome | Categoria | Plano |
|------|------|-----------|-------|
| `creator` | Creator | creator | FREE |
| `business` | Business | business | PRO |
| `ecommerce` | E-commerce | ecommerce | PRO |
| `medical` | Medical | professional | PRO |
| `corporate` | Corporate | professional | PRO |
| `minimal-dark` | Minimal Dark | minimal | PRO |
| `glassmorphism` | Glassmorphism | special | BUSINESS |

## Estrutura do tema (JSON)
```typescript
{
  font: string                    // 'plus_jakarta_sans' | 'inter' | 'merriweather' | etc.
  buttonStyle: 'rounded' | 'pill' | 'square' | 'outline' | 'ghost'
  buttonShadow: boolean
  background: {
    type: 'color' | 'gradient' | 'image'
    value: string                 // cor hex, gradiente CSS ou URL
  }
  textColor: string
  accentColor: string
  spacing: 'compact' | 'normal' | 'relaxed'
  avatarShape: 'circle' | 'square' | 'rounded'
  layout: 'centered' | 'left' | 'card'
}
```

## Comportamento
- Template é aplicado ao perfil e pode ser personalizado depois
- Templates PRO bloqueados para usuários FREE (preview disponível com lock)
- Preview ao vivo na tela de appearance sem salvar