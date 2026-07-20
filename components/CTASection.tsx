import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { phoneDisplay, phoneHref } from '@/lib/site-data'

type CTASectionProps = {
  title?: string
  copy?: string
}

export function CTASection({
  title = 'Ready to understand your options?',
  copy = 'Start with a confidential consultation and a clear next step.',
}: CTASectionProps) {
  return (
    <section className="navy-gradient text-white">
      <div className="container-site flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-white/78 md:text-lg">{copy}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="gold-button inline-flex items-center justify-center gap-2 rounded-[8px] px-6 py-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2"
          >
            Request Consultation
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/28 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2"
          >
            <Phone aria-hidden="true" size={18} />
            Call {phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
