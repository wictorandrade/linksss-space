import { PrismaClient, SubStatus } from '../generated'

const prisma = new PrismaClient()

const plans = [
  {
    name: 'Free',
    maxLinks: 5,
    maxPages: 1,
    maxAnalytics: 7,
    customThemes: false,
    paidContent: false,
    customDomain: false,
    removeWatermark: false,
    prioritySupport: false,
    price: 0,
    isPublic: true,
    description: 'Perfeito para começar',
    features: ['5 links', '1 página', 'Analytics por 7 dias'],
  },
  {
    name: 'Basic',
    maxLinks: 15,
    maxPages: 1,
    maxAnalytics: 30,
    customThemes: true,
    paidContent: false,
    customDomain: false,
    removeWatermark: true,
    prioritySupport: false,
    price: 9.90,
    isPublic: true,
    description: 'Para criadores de conteúdo',
    features: ['15 links', '1 página', 'Analytics por 30 dias', '3 templates premium', 'Sem marca d\'água'],
  },
  {
    name: 'Pro',
    maxLinks: -1,
    maxPages: 3,
    maxAnalytics: 90,
    customThemes: true,
    paidContent: true,
    customDomain: true,
    removeWatermark: true,
    prioritySupport: false,
    price: 29.90,
    isPublic: true,
    description: 'Para profissionais',
    features: ['Links ilimitados', '3 páginas', 'Analytics por 90 dias', 'Todos templates', 'Conteúdo pago', 'Domínio customizado'],
  },
  {
    name: 'Business',
    maxLinks: -1,
    maxPages: -1,
    maxAnalytics: -1,
    customThemes: true,
    paidContent: true,
    customDomain: true,
    removeWatermark: true,
    prioritySupport: true,
    price: 79.90,
    isPublic: true,
    description: 'Para empresas',
    features: ['Tudo ilimitado', 'Analytics completo', 'API Analytics', 'Suporte prioritário', 'SLA garantido'],
  },
]

const templates = [
  {
    name: 'Minimal Elegance',
    slug: 'minimal-elegance',
    description: 'Design clean e elegante com tons neutros',
    category: 'minimal',
    isFeatured: true,
    order: 1,
    theme: {
      backgroundColor: '#ffffff',
      textColor: '#1e293b',
      buttonBackgroundColor: '#f1f5f9',
      buttonTextColor: '#1e293b',
      buttonHoverBackgroundColor: '#e2e8f0',
      buttonBorderRadius: 12,
      buttonShadow: false,
      fontFamily: 'plus_jakarta_sans',
      avatarBorderRadius: 9999,
      linkBorderRadius: 12,
    },
  },
  {
    name: 'Dark Premium',
    slug: 'dark-premium',
    description: 'Dark mode sofisticado com detalhes dourados',
    category: 'dark',
    isFeatured: true,
    order: 2,
    theme: {
      backgroundColor: '#0a0e0a',
      textColor: '#ffffff',
      buttonBackgroundColor: '#1a1f1a',
      buttonTextColor: '#ffffff',
      buttonHoverBackgroundColor: '#2a2f2a',
      accentColor: '#d4af37',
      buttonBorderRadius: 16,
      buttonShadow: true,
      buttonBorderColor: '#d4af3733',
      buttonBorderWidth: 1,
      fontFamily: 'plus_jakarta_sans',
      avatarBorderRadius: 9999,
      linkBorderRadius: 16,
    },
  },
  {
    name: 'Aurora Gradient',
    slug: 'aurora-gradient',
    description: 'Gradiente vibrante e moderno',
    category: 'gradient',
    isFeatured: true,
    order: 3,
    theme: {
      backgroundGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #ff9a9e 100%)',
      textColor: '#ffffff',
      buttonBackgroundColor: '#ffffff22',
      buttonTextColor: '#ffffff',
      buttonHoverBackgroundColor: '#ffffff33',
      buttonBorderRadius: 24,
      buttonShadow: true,
      fontFamily: 'plus_jakarta_sans',
      avatarBorderRadius: 9999,
      linkBorderRadius: 24,
      backdropBlur: true,
    },
  },
  {
    name: 'Neon Cyber',
    slug: 'neon-cyber',
    description: 'Estilo cyberpunk com efeitos neon',
    category: 'neon',
    isFeatured: true,
    order: 4,
    theme: {
      backgroundColor: '#0a0a0f',
      textColor: '#ffffff',
      buttonBackgroundColor: '#0a0a0f',
      buttonTextColor: '#00ff88',
      buttonHoverBackgroundColor: '#00ff8822',
      accentColor: '#ff00ff',
      secondaryAccent: '#00ff88',
      buttonBorderRadius: 8,
      buttonShadow: true,
      buttonBorderColor: '#00ff88',
      buttonBorderWidth: 2,
      fontFamily: 'plus_jakarta_sans',
      avatarBorderRadius: 0,
      linkBorderRadius: 8,
      glowEffect: true,
    },
  },
  {
    name: 'Organic Flow',
    slug: 'organic-flow',
    description: 'Natural e calmo com tons terrosos',
    category: 'nature',
    isFeatured: true,
    order: 5,
    theme: {
      backgroundColor: '#faf7f2',
      textColor: '#2d3436',
      buttonBackgroundColor: '#dfe6e9',
      buttonTextColor: '#2d3436',
      buttonHoverBackgroundColor: '#b2bec3',
      accentColor: '#00b894',
      buttonBorderRadius: 9999,
      buttonShadow: false,
      fontFamily: 'plus_jakarta_sans',
      avatarBorderRadius: 9999,
      linkBorderRadius: 9999,
    },
  },
]

async function main() {
  console.log('🌱 Seeding database...')

  // Create plans
  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { name: plan.name },
      update: plan,
      create: plan,
    })
    console.log(`✅ Plan ${plan.name} created/updated`)
  }

  // Create templates
  for (const template of templates) {
    await prisma.template.upsert({
      where: { slug: template.slug },
      update: template,
      create: template,
    })
    console.log(`✅ Template ${template.name} created/updated`)
  }

  // Create platform settings
  await prisma.platformSettings.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      siteName: 'Linksss',
      siteDescription: 'Sua bio em um só lugar. Links, conteúdo pago, analytics.',
    },
  })
  console.log('✅ Platform settings created/updated')

  console.log('🎉 Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })