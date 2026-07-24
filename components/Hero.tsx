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
      <div className="container-site relative flex min-h-[72dvh] items-end py-12 sm:py-16 md:min-h-[76dvh] md:items-center md:py-20">
        <div className="max-w-3xl text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
            Southern California Family Law
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[2.65rem] leading-[1.06] text-white sm:text-5xl md:mt-6 md:text-7xl">
            Where Family Comes First
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/88 sm:text-lg sm:leading-8 md:mt-7 md:text-xl">
            Board-certified guidance for divorce, custody, and support, delivered with strategy,
            discretion, and care.
          </p>
          <div className="mt-7 flex w-full flex-col items-start gap-3 sm:mt-10 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="gold-button inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-[8px] px-4 py-4 text-[13px] font-semibold transition focus-visible:outline focus-visible:outline-2 sm:w-auto sm:gap-3 sm:px-7 sm:text-sm"
            >
              Request a Confidential Consultation
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a
              href={phoneHref}
              className="inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-[8px] border border-white/50 px-5 py-4 text-sm font-semibold text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 sm:w-auto sm:px-7"
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
