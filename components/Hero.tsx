import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { HeroVideo } from '@/components/HeroVideo'
import { phoneDisplay, phoneHref } from '@/lib/site-data'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)]">
      <div className="absolute inset-0">
        <Image
          src="/images/southern-california-law-office.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <HeroVideo />
        <div className="image-wash absolute inset-0" />
      </div>
      <div className="container-site relative flex min-h-[76dvh] items-end py-20 md:items-center">
        <div className="max-w-3xl text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
            Southern California Family Law
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.04] text-white md:text-7xl">
            Where Family Comes First
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/88 md:text-xl">
            Board-certified guidance for divorce, custody, and support, delivered with strategy,
            discretion, and care.
          </p>
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="gold-button inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-[8px] px-7 py-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2"
            >
              Request a Confidential Consultation
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-[8px] border border-white/50 px-7 py-4 text-sm font-semibold text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2"
            >
              <Phone aria-hidden="true" size={18} />
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
