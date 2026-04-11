import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { isSlugReserved } from '@/lib/slug-blacklist'
import { PublicPage } from './PublicPage'

const API_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:3001/api/v1'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function fetchPublicPage(slug: string) {
  try {
    const res = await fetch(`${API_URL}/pages/public/${slug}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  if (isSlugReserved(slug)) {
    return { title: 'Linksss' }
  }

  const page = await fetchPublicPage(slug)
  if (!page) {
    return {
      title: 'Perfil não encontrado | Linksss',
      robots: { index: false },
    }
  }

  const title = page.title || page.user?.name || slug
  const description =
    page.bio || page.description || `Confira os links de ${title} no Linksss.`

  return {
    title: `${title} | Linksss`,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      images: page.avatarUrl ? [{ url: page.avatarUrl, width: 400, height: 400 }] : [],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: page.avatarUrl ? [page.avatarUrl] : [],
    },
    alternates: {
      canonical: `https://linksss.space/${slug}`,
    },
  }
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params

  if (isSlugReserved(slug)) {
    redirect('/')
  }

  const page = await fetchPublicPage(slug)
  if (!page) {
    notFound()
  }

  return <PublicPage page={page} />
}