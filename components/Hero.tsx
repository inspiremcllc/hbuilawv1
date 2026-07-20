import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { phoneDisplay, phoneHref } from '@/lib/site-data'
import { TrustBar } from './TrustBar'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/images/southern-california-law-office.png"
          alt="Southern California professional office exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/94 to-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>
      <div className="container-site relative grid min-h-[710px] items-center py-16 lg:grid-cols-[0.92fr_1fr]">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl leading-[0.98] text-[var(--navy)] md:text-7xl">
            Board-Certified Family Law Guidance for Divorce, Custody & Support
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
            Helping families across Arcadia, Pasadena, Irvine, and Southern California navigate
            high-stakes family law matters with strategy, discretion, and care.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="gold-button inline-flex items-center justify-center gap-3 rounded-[8px] px-6 py-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2"
            >
              Request a Confidential Consultation
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-3 rounded-[8px] border border-[var(--navy)] bg-white/90 px-6 py-4 text-sm font-semibold text-[var(--navy)] transition hover:border-[var(--gold)] focus-visible:outline focus-visible:outline-2"
            >
              <Phone aria-hidden="true" size={18} />
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="container-site relative">
        <TrustBar />
      </div>
    </section>
  )
}
