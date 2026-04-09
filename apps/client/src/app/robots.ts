import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://linksss.space'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/api', '/admin'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}