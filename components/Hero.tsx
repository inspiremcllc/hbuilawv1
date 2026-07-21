import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { phoneDisplay, phoneHref } from '@/lib/site-data'
import { TrustBar } from './TrustBar'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)]">
      <div className="absolute inset-0">
        <video
          className="hero-video h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/southern-california-law-office.png"
          aria-hidden="true"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div
          className="hero-poster-fallback absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/southern-california-law-office.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,23,44,0.72)] via-[rgba(6,23,44,0.45)] to-[rgba(6,23,44,0.82)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(4,15,29,0.9)] to-transparent" />
      </div>
      <div className="container-site relative flex min-h-[82vh] items-center pb-24 pt-44">
        <div className="max-w-4xl text-center mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
            Arcadia · Pasadena · Irvine
          </p>
          <h1 className="font-display mt-6 text-5xl leading-[1.04] text-white md:text-7xl">
            Where Family Comes First
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            Board-certified family law guidance for divorce, custody, and support. Serving
            Southern California families with strategy, discretion, and care.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="gold-button inline-flex items-center justify-center gap-3 rounded-[8px] px-7 py-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2"
            >
              Request a Confidential Consultation
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-3 rounded-[8px] border border-white/40 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[var(--gold)] hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2"
            >
              <Phone aria-hidden="true" size={18} />
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="container-site relative pb-2">
        <TrustBar />
      </div>
    </section>
  )
}
