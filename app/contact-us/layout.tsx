import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>{children}</div>
  )
}
