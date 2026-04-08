'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus, ExternalLink, MoreHorizontal, Edit, Trash2, Eye, BarChart3 } from 'lucide-react'

// Mock data
const mockPages = [
  {
    id: '1',
    slug: 'meu-perfil',
    title: 'Meu Perfil',
    bio: 'Bem-vindo ao meu perfil!',
    linksCount: 5,
    views: 1234,
    isActive: true,
    createdAt: '2026-03-15',
  },
]

export default function DashboardPagesPage() {
  const [pages] = useState(mockPages)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Páginas</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie suas páginas de links
          </p>
        </div>
        <Link href="/dashboard/pages/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nova página
          </Button>
        </Link>
      </div>

      {pages.length === 0 ? (
        <div className="border border-dashed border-border/50 rounded-xl p-12 text-center">
          <p className="text-muted-foreground mb-4">
            Você ainda não tem nenhuma página
          </p>
          <Link href="/dashboard/pages/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Criar primeira página
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {pages.map((page) => (
            <div
              key={page.id}
              className="border border-border/50 rounded-xl p-6 bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{page.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      page.isActive ? 'bg-green-500/10 text-green-500' : 'bg-muted text-muted-foreground'
                    }`}>
                      {page.isActive ? 'Ativa' : 'Inativa'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{page.bio}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      linksss.space/{page.slug}
                    </span>
                    <span>{page.linksCount} links</span>
                    <span>{page.views.toLocaleString()} views</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://linksss.space/${page.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground"
                    title="Ver página"
                  >
                    <Eye className="w-4 h-4" />
                  </a>
                  <Link
                    href={`/dashboard/analytics?page=${page.id}`}
                    className="p-2 text-muted-foreground hover:text-foreground"
                    title="Analytics"
                  >
                    <BarChart3 className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/dashboard/pages/${page.id}/edit`}
                    className="p-2 text-muted-foreground hover:text-foreground"
                    title="Editar"
                  >
                    <Edit className="w-4 h-4" />
                  </Link>
                  <button
                    className="p-2 text-muted-foreground hover:text-red-500"
                    title="Excluir"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}