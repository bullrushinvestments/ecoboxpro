import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoBoxPro',
  description: 'A subscription-based SaaS service providing personalized climate tech solutions and eco-friendly products to small businesses. Each month, EcoBoxPro sends out a curated box with tools, gadgets, and advice tailored to the specific sustainability goals of its subscribers.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoBoxPro</h1>
      <p className="mt-4 text-lg">A subscription-based SaaS service providing personalized climate tech solutions and eco-friendly products to small businesses. Each month, EcoBoxPro sends out a curated box with tools, gadgets, and advice tailored to the specific sustainability goals of its subscribers.</p>
    </main>
  )
}
