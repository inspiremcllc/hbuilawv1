'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { CreditCard, Globe2, MapPin, Menu, Phone, X } from 'lucide-react'
import { navLinks, phoneHref } from '@/lib/site-data'
import { useEffect, useState } from 'react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Transparent-over-hero treatment only on the homepage; inner pages keep a solid header.
  const overlay = pathname === '/'
  const solid = !overlay || scrolled || open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navColor = solid ? 'text-[var(--navy)]' : 'text-white'

  return (
    <header
      className={`${overlay ? 'fixed inset-x-0' : 'sticky'} top-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/96 shadow-sm backdrop-blur'
          : 'bg-gradient-to-b from-[rgba(4,15,29,0.62)] via-[rgba(4,15,29,0.28)] to-transparent'
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          solid ? 'bg-[var(--navy)] text-white' : 'border-b border-white/15 bg-transparent text-white'
        }`}
      >
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-3 text-xs md:text-sm">
          <div className="flex items-center gap-2">
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
      <div className="container-site flex h-24 items-center justify-between gap-6">
        <Link
          href="/"
          className={`inline-flex items-center gap-3 transition-colors duration-300 ${navColor} focus-visible:outline focus-visible:outline-2`}
          aria-label="H Bui Law home"
        >
          <Image
            src="/h-bui-logo.png"
            alt=""
            width={56}
            height={56}
            priority
            className="size-14 shrink-0 rounded-md bg-white object-contain"
          />
          <span className="font-display text-2xl leading-tight sm:text-3xl">H Bui Law</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${navColor} hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={phoneHref}
            className={`inline-flex size-11 items-center justify-center rounded-[8px] border transition-colors duration-300 ${
              solid
                ? 'border-[var(--line)] text-[var(--navy)]'
                : 'border-white/40 text-white'
            } hover:border-[var(--gold)] focus-visible:outline focus-visible:outline-2`}
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
          className={`inline-flex size-11 items-center justify-center rounded-[8px] border transition-colors duration-300 lg:hidden ${
            solid ? 'border-[var(--line)] text-[var(--navy)]' : 'border-white/40 text-white'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-[var(--line)] bg-white lg:hidden">
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
