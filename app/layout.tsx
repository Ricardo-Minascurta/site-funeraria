import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Memória Eternus | Serviços de Assistência Funerária em Lisboa',
  description: 'Acompanhamos famílias em momentos difíceis com respeito e dignidade. Serviços funerários completos, disponível 24h, 7 dias por semana.',
  keywords: ['funerária', 'serviços funerários', 'velório', 'cremação', 'funeral', 'memória eternus', 'Lisboa', 'Portugal'],
  openGraph: {
    title: 'Memória Eternus | Serviços de Assistência Funerária',
    description: 'Acompanhamos famílias em momentos difíceis com respeito e dignidade. Disponível 24h.',
    locale: 'pt_PT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="font-sans bg-cream text-brown-dark">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
