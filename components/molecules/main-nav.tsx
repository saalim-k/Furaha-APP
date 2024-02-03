'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import FurahaLogo from '../ui/furaha-logo'
import Search from './search'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname()

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <LinkItem href="/" currentRoute={pathName} name="Home" />
      <LinkItem href="/categories" currentRoute={pathName} name="Categories" />
      <LinkItem
        href="/market-place"
        currentRoute={pathName}
        name="Market Place"
      />
      <LinkItem href="/contact-us" currentRoute={pathName} name="Contact Us" />
    </nav>
  )
}

function LinkItem(props: any) {
  const { name, currentRoute, href } = props
  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
        currentRoute == href ? 'text-primary' : ''
      )}
    >
      {name}
    </Link>
  )
}
