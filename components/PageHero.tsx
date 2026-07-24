import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { phoneDisplay, phoneHref } from '@/lib/site-data'

type PageHeroProps = {
  title: string
  copy: string
  crumbs?: { label: string; href: string }[]
}

export function PageHero({ title, copy, crumbs = [] }: PageHeroProps) {
  return (
    <section className="navy-gradient text-white">
      <div className="container-site py-11 sm:py-14 md:py-20">
        {crumbs.length ? (
          <nav className="mb-5 text-xs text-white/60 md:mb-7" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white focus-visible:outline focus-visible:outline-2">
              Home
            </Link>
            {crumbs.map((crumb) => (
              <span key={crumb.href}>
                <span className="px-2">/</span>
                <Link
                  href={crumb.href}
                  className="hover:text-white focus-visible:outline focus-visible:outline-2"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        ) : null}
        <div className="grid gap-8 lg:grid-cols-[1fr_290px] lg:items-end lg:gap-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-[2rem] leading-[1.15] sm:text-4xl md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/78 md:mt-6 md:text-lg md:leading-8">{copy}</p>
          </div>
          <div className="hidden border-l border-white/24 pl-6 md:block">
            <p className="font-display text-2xl text-white">Ready to talk?</p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Start with a conflict check and private consultation request.
            </p>
            <div className="mt-5 grid gap-3">
              <Link
                href="/contact"
                className="gold-button inline-flex items-center justify-center gap-2 rounded-[8px] px-4 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2"
              >
                Request Consultation
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/28 px-4 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2"
              >
                <Phone aria-hidden="true" size={16} />
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
