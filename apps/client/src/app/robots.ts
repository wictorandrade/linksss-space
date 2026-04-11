import { MetadataRoute } from 'next'

const BASE_URL = 'https://linksss.space'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/pricing',
          '/templates',
          '/features',
          '/terms',
          '/privacy',
          '/support',
        ],
        disallow: [
          '/dashboard',
          '/dashboard/',
          '/admin',
          '/admin/',
          '/api/',
          '/auth/',
          '/callback',
          '/_next/',
          '/settings',
          '/billing',
          '/analytics',
          '/profile',
          '/account',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}