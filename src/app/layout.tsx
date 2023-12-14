import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'sport car',
  description: 'the super car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* min-h-screen */}
      <body className=''>{children}</body>
    </html>
  )
}
