'use client'

import { ExternalLink } from 'lucide-react'

const templates = [
  {
    id: 'minimal-elegance',
    name: 'Minimal Elegance',
    description: 'Design clean e elegante com tons neutros',
    category: 'minimal',
    colors: ['#ffffff', '#f1f5f9', '#1e293b', '#14b8a6'],
    preview: '/templates/minimal.png',
  },
  {
    id: 'dark-premium',
    name: 'Dark Premium',
    description: 'Dark mode sofisticado com detalhes dourados',
    category: 'dark',
    colors: ['#0a0e0a', '#1a1f1a', '#d4af37', '#ffffff'],
    preview: '/templates/dark.png',
  },
  {
    id: 'aurora-gradient',
    name: 'Aurora Gradient',
    description: 'Gradiente vibrante e moderno',
    category: 'gradient',
    colors: ['#667eea', '#764ba2', '#f093fb', '#f5576c'],
    preview: '/templates/aurora.png',
  },
  {
    id: 'neon-cyber',
    name: 'Neon Cyber',
    description: 'Estilo cyberpunk com efeitos neon',
    category: 'neon',
    colors: ['#0a0a0f', '#00ff88', '#ff00ff', '#ffffff'],
    preview: '/templates/neon.png',
  },
  {
    id: 'organic-flow',
    name: 'Organic Flow',
    description: 'Natural e calmo com tons terrosos',
    category: 'nature',
    colors: ['#faf7f2', '#dfe6e9', '#00b894', '#2d3436'],
    preview: '/templates/organic.png',
  },
]

export function TemplatesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {templates.map((template) => (
        <div
          key={template.id}
          className="group border border-border/50 rounded-2xl overflow-hidden bg-muted/30 hover:bg-muted/50 transition-all"
        >
          {/* Preview */}
          <div
            className="aspect-[9/16] relative overflow-hidden"
            style={{
              background: template.category === 'gradient'
                ? `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]}, ${template.colors[2]})`
                : template.colors[0],
            }}
          >
            {/* Mock content */}
            <div className="absolute inset-0 flex flex-col items-center pt-12 px-4">
              {/* Avatar placeholder */}
              <div
                className="w-20 h-20 rounded-full mb-4 flex items-center justify-center"
                style={{ backgroundColor: template.colors[2] || template.colors[1] }}
              >
                <span className="text-2xl font-bold" style={{ color: template.colors[0] }}>
                  L
                </span>
              </div>

              {/* Name placeholder */}
              <div
                className="w-32 h-4 rounded mb-2"
                style={{ backgroundColor: template.colors[1] }}
              />
              <div
                className="w-48 h-3 rounded mb-8"
                style={{ backgroundColor: template.colors[1], opacity: 0.5 }}
              />

              {/* Link placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-full max-w-[200px] h-10 rounded-lg mb-2"
                  style={{
                    backgroundColor: template.colors[1],
                    borderRadius: template.id === 'organic-flow' ? 9999 : template.id === 'neon-cyber' ? 8 : 12,
                  }}
                />
              ))}
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <a
                href={`/demo/${template.id}`}
                className="bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-white/90"
              >
                Ver demo
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="p-4">
            <h3 className="font-semibold mb-1">{template.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{template.description}</p>

            {/* Color palette */}
            <div className="flex gap-2">
              {template.colors.map((color, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border border-border/50"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}