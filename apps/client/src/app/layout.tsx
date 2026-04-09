import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const SITE_URL = 'https://linksss.space'
const SITE_NAME = 'Linksss'
const SITE_DESCRIPTION = 'Sua bio em um só lugar. Links, conteúdo pago, analytics completo. Crie páginas lindas em minutos.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Sua Bio em Um Só Lugar`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'linktree alternativo',
    'link na bio',
    'criador de conteúdo',
    'página de links',
    'bio links',
    'linksss',
    'bio personalizada',
    'links pagos',
    'analytics bio',
    'landing page criador',
    'instagram bio links',
    'tiktok bio links',
  ],
  authors: [{ name: 'Souzs', url: 'https://souzs.com' }],
  creator: 'Souzs',
  publisher: 'Souzs',
  category: 'Productivity',
  applicationName: SITE_NAME,
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Sua Bio em Um Só Lugar`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Linksss - Sua Bio em Um Só Lugar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Sua Bio em Um Só Lugar`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_URL,
    languages: {
      'pt-BR': SITE_URL,
    },
  },
  other: {
    'geo.region': 'BR-PR',
    'geo.placename': 'Ponta Grossa',
    'geo.position': '-25.0945;-50.1633',
    ICBM: '-25.0945, -50.1633',
    'content-language': 'pt-BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#6366f1',
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: 'Linksss Space',
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
      sameAs: [
        'https://instagram.com/souzs.com',
        'https://linkedin.com/company/souzs',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contato@linksss.space',
      },
      parentOrganization: {
        '@type': 'Organization',
        name: 'Souzs',
        url: 'https://souzs.com',
      },
    },
    {
      '@type': 'WebApplication',
      '@id': `${SITE_URL}/#webapp`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '0',
        highPrice: '79.90',
        priceCurrency: 'BRL',
        offerCount: 4,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'pt-BR',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}