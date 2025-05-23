import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Abhiswant Chaudhary - Portfolio',
  description: 'Computer Science Student & Competitive Programmer',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/apple-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
      },
    ],
  },
  manifest: '/site.webmanifest',
  keywords: ['Abhiswant Chaudhary', 'Portfolio', 'Computer Science', 'Competitive Programming', 'Web Development'],
  authors: [{ name: 'Abhiswant Chaudhary' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-url.com',
    title: 'Abhiswant Chaudhary - Portfolio',
    description: 'Computer Science Student & Competitive Programmer',
    siteName: 'Abhiswant Chaudhary Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhiswant Chaudhary - Portfolio',
    description: 'Computer Science Student & Competitive Programmer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
} 