import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'PayzonIndia',
  description: 'Digital solutions for your business',
  generator: 'nitesh',
  icons: {
    icon: [
      { url: '/images/logo.png' }, // default favicon
      { url: '/images/logo.png', type: 'image/svg+xml' },
      { url: '/images/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/logo.png', sizes: '512x512', type: 'image/png' },
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
