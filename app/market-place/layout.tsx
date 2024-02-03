import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Place',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
