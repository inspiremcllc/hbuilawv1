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
      <div className="container-site py-16 md:py-24">
        {crumbs.length ? (
          <nav className="mb-7 text-xs text-white/60" aria-label="Breadcrumb">
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
        <div className="grid gap-8 md:grid-cols-[1fr_360px] md:items-end">
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl leading-tight md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">{copy}</p>
          </div>
          <div className="card-surface bg-white p-5 text-[var(--navy)]">
            <p className="font-display text-2xl">Ready to talk?</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
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
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[var(--line)] px-4 py-3 text-sm font-semibold text-[var(--navy)] focus-visible:outline focus-visible:outline-2"
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
