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
  title: {
    default: 'Memória Eternus | Serviços Funerários em Lisboa',
    template: '%s | Memória Eternus',
  },
  description: 'Acompanhamos famílias em momentos difíceis com respeito e dignidade. Serviços funerários completos em Lisboa, disponível 24h, 7 dias por semana. Funeral, cremação, velório e apoio familiar.',
  keywords: ['funerária Lisboa', 'serviços funerários', 'velório', 'cremação', 'funeral', 'memória eternus', 'Lisboa', 'Portugal', 'agência funerária', 'funeral 24 horas'],
  authors: [{ name: 'Memória Eternus' }],
  creator: 'Memória Eternus',
  metadataBase: new URL('https://memoriaeternus.pt'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Memória Eternus | Serviços Funerários em Lisboa',
    description: 'Acompanhamos famílias em momentos difíceis com respeito e dignidade. Serviços funerários completos, disponível 24h.',
    url: 'https://memoriaeternus.pt',
    siteName: 'Memória Eternus',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Memória Eternus | Serviços Funerários em Lisboa',
    description: 'Acompanhamos famílias em momentos difíceis com respeito e dignidade. Disponível 24h.',
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
    },
  },
  verification: {
    google: 'adicionar-codigo-google-search-console',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FuneralHome',
  name: 'Memória Eternus',
  description: 'Serviços funerários completos em Lisboa. Acompanhamos famílias em momentos difíceis com respeito e dignidade.',
  url: 'https://memoriaeternus.pt',
  telephone: '+351928352824',
  email: 'geralmemoriaeternus@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lisboa',
    addressCountry: 'PT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '38.7223',
    longitude: '-9.1393',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '€€',
  image: 'https://memoriaeternus.pt/logo.svg',
  sameAs: [
    'https://www.facebook.com/memoriaeternus',
    'https://www.instagram.com/memoriaeternus',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Lisboa',
  },
  serviceType: ['Funeral', 'Cremação', 'Velório', 'Florista', 'Apoio Familiar'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${cormorant.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
