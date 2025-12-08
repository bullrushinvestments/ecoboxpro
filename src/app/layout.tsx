import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoBoxPro',
  description: 'A subscription-based SaaS service providing personalized climate tech solutions and eco-friendly products to small businesses. Each month, EcoBoxPro sends out a curated box with tools, gadgets, and advice tailored to the specific sustainability goals of its subscribers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
