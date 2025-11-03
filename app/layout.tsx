import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { Analytics } from '@/components/analytics/Analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: {
    default: 'Mujeres Tukuy — Mentoría para Mujeres Emprendedoras',
    template: '%s | Mujeres Tukuy'
  },
  description: 'Mentoría especializada para mujeres emprendedoras en Bolivia. Transforma tu visión en un negocio próspero con metodologías personalizadas.',
  keywords: ['mentoría', 'mujeres emprendedoras', 'Bolivia', 'negocios', 'coaching empresarial'],
  authors: [{ name: 'Janette Blacutt' }],
  creator: 'Mujeres Tukuy',
  publisher: 'Mujeres Tukuy',
  metadataBase: new URL('https://mujerestukuy.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Mujeres Tukuy',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mujeres Tukuy - Mentoría para Emprendedoras'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mujerestukuy'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-gray-900 font-inter antialiased">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}