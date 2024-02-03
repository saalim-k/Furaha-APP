import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/molecules/header'
import { ThemeProvider } from '@/components/molecules/theme-provider'
import { inter } from '@/components/ui/fonts'
import { TopNav } from '@/components/molecules/top-nav'
import SessionProvider from '@/components/SessionProvider'
import { auth } from '@/auth'

export const metadata: Metadata = {
  title: {
    template: '%s | Furaha',
    default: 'Furaha',
  },
  description: 'Furaha Market Place',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex-col md:flex border-black">
            <TopNav />

            <Header />
          </div>
          <div className="container mt-4">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
