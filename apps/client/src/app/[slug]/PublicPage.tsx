'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { api } from '@/lib/api-client'

interface LinkData {
  id: string
  title: string
  url: string
  type: string
  style: {
    backgroundColor?: string
    textColor?: string
    borderRadius?: number
    borderWidth?: number
    borderColor?: string
  }
  isPaid: boolean
  price?: number
}

interface PageData {
  id: string
  slug: string
  title: string
  description?: string
  bio?: string
  avatarUrl?: string
  backgroundImageUrl?: string
  theme: {
    backgroundColor?: string
    textColor?: string
    font?: string
    buttonStyle?: string
  }
  user?: {
    name: string
    avatarUrl?: string
  }
  links: LinkData[]
}

interface PublicPageProps {
  page: PageData
}

export function PublicPage({ page }: PublicPageProps) {
  const [clickedLinks, setClickedLinks] = useState<Set<string>>(new Set())

  const handleLinkClick = async (link: LinkData) => {
    // Track click
    try {
      await api.post(`/links/${link.id}/click`, {
        referrer: document.referrer,
        device: navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop',
      })
    } catch (e) {
      // Ignore tracking errors
    }

    setClickedLinks((prev) => new Set(prev).add(link.id))
    window.open(link.url, '_blank', 'noopener,noreferrer')
  }

  const theme = page.theme || {}
  const buttonRadius = theme.buttonStyle === 'rounded' ? 9999 : theme.buttonStyle === 'square' ? 0 : 12

  return (
    <div
      className="min-h-screen py-12 px-4"
      style={{
        backgroundColor: theme.backgroundColor || '#ffffff',
        color: theme.textColor || '#000000',
        fontFamily: theme.font?.includes('jakarta') ? 'Plus Jakarta Sans, sans-serif' : undefined,
      }}
    >
      {/* Background image */}
      {page.backgroundImageUrl && (
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${page.backgroundImageUrl})` }}
        />
      )}

      <div className="max-w-md mx-auto">
        {/* Avatar */}
        <div className="text-center mb-6">
          <div
            className="w-24 h-24 mx-auto mb-4 bg-primary-500/20 flex items-center justify-center overflow-hidden"
            style={{ borderRadius: 9999 }}
          >
            {page.avatarUrl || page.user?.avatarUrl ? (
              <img
                src={page.avatarUrl || page.user?.avatarUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl font-bold text-primary-500">
                {(page.title || page.user?.name || 'U')[0].toUpperCase()}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-xl font-bold mb-1">{page.title || page.user?.name}</h1>

          {/* Bio */}
          {page.bio && (
            <p className="text-sm opacity-70 mb-1">{page.bio}</p>
          )}

          {/* Watermark for free plans */}
          <Link
            href="/"
            className="text-xs opacity-50 hover:opacity-70 transition-opacity"
          >
            linksss.space
          </Link>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {page.links.map((link) => {
            const isClicked = clickedLinks.has(link.id)
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link)}
                className="w-full text-left p-4 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3"
                style={{
                  backgroundColor: link.style?.backgroundColor || '#f1f5f9',
                  color: link.style?.textColor || '#1e293b',
                  borderRadius: link.style?.borderRadius ?? buttonRadius,
                  borderWidth: link.style?.borderWidth ? `${link.style.borderWidth}px` : 0,
                  borderColor: link.style?.borderColor || 'transparent',
                  borderStyle: 'solid',
                }}
              >
                <span className="font-medium flex-1">{link.title}</span>
                {link.isPaid && (
                  <span className="text-xs font-medium opacity-70">
                    R$ {link.price?.toFixed(2).replace('.', ',')}
                  </span>
                )}
                {isClicked && (
                  <span className="text-xs opacity-50">✓</span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}