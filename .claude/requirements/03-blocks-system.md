# RF-03: Sistema de Blocos

## Conceito
O perfil não é apenas uma lista de links. É composto por blocos modulares com tipos diferentes, cada um com configuração, estilo e tracking próprios.

## Tipos de bloco obrigatórios

| Tipo | Descrição | Plano mínimo |
|------|-----------|--------------|
| `BUTTON` | Botão padrão com URL | FREE |
| `BUTTON_CTA` | Botão CTA comercial (destaque visual) | FREE |
| `BUTTON_WHATSAPP` | Abre WhatsApp com mensagem pré-definida | FREE |
| `BUTTON_INSTAGRAM` | Link para perfil Instagram | FREE |
| `BUTTON_TIKTOK` | Link para perfil TikTok | FREE |
| `VIDEO` | Embed de YouTube / Vimeo | FREE |
| `IMAGE` | Imagem com link opcional | FREE |
| `FORM_LEAD` | Formulário de captura de lead (nome + email) | PRO |
| `PRODUCT` | Produto com foto, preço e CTA de compra | PRO |
| `COUPON` | Bloco de cupom promocional com código copiável | PRO |
| `DOWNLOAD_PDF` | Download de arquivo PDF | PRO |
| `CALENDAR` | Link para agenda (Calendly, Cal.com) | PRO |
| `HTML` | HTML customizado livre | BUSINESS |

## Propriedades comuns a todos os blocos
```typescript
{
  id: string
  pageId: string
  type: BlockType
  title: string
  position: number        // ordenação drag and drop
  isActive: boolean
  style: {
    backgroundColor?: string
    textColor?: string
    borderRadius?: number
    borderWidth?: number
    borderColor?: string
    animation?: 'none' | 'pulse' | 'bounce' | 'shake'
  }
  // tracking
  clickCount: number
  // dados específicos do tipo (JSON)
  data: Record<string, unknown>
}
```

## Drag and Drop
- Reordenação via drag and drop na área autenticada
- Persistência da ordem via `position` (integer, reordenado após drop)
- Usar `@dnd-kit/core` ou `react-beautiful-dnd`

## Tracking
- Cada clique em bloco registra: timestamp, referrer, device, country, browser, OS
- Mapeamento para `LinkClick` no schema atual (ou entidade `BlockClick` futura)