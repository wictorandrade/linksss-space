import Link from 'next/link'

interface LogoProps {
  variant?: 'default' | 'compact' | 'sidebar' | 'admin'
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ variant = 'default', showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: 'text-base' },
    md: { icon: 32, text: 'text-xl' },
    lg: { icon: 40, text: 'text-2xl' },
  }

  const { icon, text } = sizes[size]

  if (variant === 'sidebar') {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/logo-path-linksss-space.svg"
          alt="Linksss Logo"
          width={32}
          height={32}
          className="rounded-lg"
        />
        {showText && (
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">Linksss</span>
            <span className="text-xs text-muted-foreground">Seu espaço</span>
          </div>
        )}
      </div>
    )
  }

  if (variant === 'admin') {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/logo-path-linksss-space.svg"
          alt="Linksss Logo"
          width={32}
          height={32}
          className="rounded-lg"
        />
        {showText && (
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">Linksss Admin</span>
            <span className="text-xs text-muted-foreground">Dashboard</span>
          </div>
        )}
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <img
        src="/logo-path-linksss-space.svg"
        alt="Linksss Logo"
        width={icon}
        height={icon}
        className="rounded-lg"
      />
    )
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <img
        src="/logo-path-linksss-space.svg"
        alt="Linksss Logo"
        width={icon}
        height={icon}
        className="rounded-lg"
      />
      {showText && (
        <span className={`font-bold ${text}`}>Linksss</span>
      )}
    </Link>
  )
}