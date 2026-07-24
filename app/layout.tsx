import type { Metadata } from 'next'
import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'
import { MobileStickyCTA } from '@/components/MobileStickyCTA'
import { SiteHeader } from '@/components/SiteHeader'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://h-bui-law-mockup.vercel.app'),
  title: {
    default: 'H Bui Law | Southern California Family Law Attorneys',
    template: '%s',
  },
  description:
    'Family law guidance for divorce, custody, support, restraining orders, prenups, and mediation across Arcadia, Pasadena, Irvine, and Southern California.',
  openGraph: {
    title: 'H Bui Law | Southern California Family Law Attorneys',
    description:
      'Family law guidance for divorce, custody, support, restraining orders, prenups, and mediation across Southern California.',
    siteName: 'H Bui Law',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${libreBaskerville.variable}`}>
        <SiteHeader />
        {children}
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  )
}
