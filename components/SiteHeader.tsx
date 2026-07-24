'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { CreditCard, Globe2, MapPin, Menu, Phone, X } from 'lucide-react'
import { navLinks, phoneHref } from '@/lib/site-data'
import { useState } from 'react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white">
      <div className="bg-[var(--navy)] text-white">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-2.5 text-[11px] sm:text-xs md:text-sm">
          <div className="flex items-center gap-2 max-[359px]:hidden">
            <MapPin aria-hidden="true" size={15} className="text-[var(--gold)]" />
            <span>Arcadia | Pasadena | Irvine</span>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Globe2 aria-hidden="true" size={15} className="text-white/80" />
            <span>English | Chinese | Spanish | Vietnamese</span>
          </div>
          <Link
            href="/payment"
            className="inline-flex items-center gap-2 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2"
          >
            <CreditCard aria-hidden="true" size={15} className="text-white/80" />
            Existing Clients: Pay Invoice
          </Link>
        </div>
      </div>
      <div className="container-site flex h-20 items-center justify-between gap-4 md:h-24 md:gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-[var(--navy)] focus-visible:outline focus-visible:outline-2"
          aria-label="H Bui Law home"
        >
          <Image
            src="/h-bui-logo.png"
            alt=""
            width={48}
            height={48}
            priority
            className="size-12 shrink-0 bg-white object-contain md:size-14"
          />
          <span className="font-display text-[1.4rem] leading-tight sm:text-3xl">H Bui Law</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
          {navLinks.slice(0, 7).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className={`border-b-2 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 ${
                pathname === link.href
                  ? 'border-[var(--gold)] text-[var(--navy)]'
                  : 'border-transparent text-[var(--muted)] hover:text-[var(--navy)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={phoneHref}
            className="inline-flex size-11 items-center justify-center rounded-[8px] border border-[var(--line)] text-[var(--navy)] transition-colors hover:border-[var(--gold)] focus-visible:outline focus-visible:outline-2"
            aria-label="Call H Bui Law"
          >
            <Phone aria-hidden="true" size={18} />
          </a>
          <Link
            href="/contact"
            className="gold-button inline-flex items-center justify-center rounded-[8px] px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2"
          >
            Request Consultation
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-[8px] border border-[var(--line)] text-[var(--navy)] transition-colors xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-[var(--line)] bg-white xl:hidden">
          <nav className="container-site grid gap-1 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[8px] px-3 py-3 text-base font-semibold text-[var(--navy)] hover:bg-[#f5f6f7] focus-visible:outline focus-visible:outline-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="gold-button mt-3 rounded-[8px] px-4 py-4 text-center text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              Request Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
