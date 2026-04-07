import { notFound } from 'next/navigation'
import { api } from '@/lib/api-client'
import { PublicPage } from './PublicPage'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params

  let page
  try {
    const response = await api.get(`/pages/public/${slug}`)
    page = response.data
  } catch (error) {
    notFound()
  }

  return <PublicPage page={page} />
}