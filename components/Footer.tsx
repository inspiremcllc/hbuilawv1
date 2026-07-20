import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { locations, navLinks, phoneDisplay, phoneHref, practiceAreas } from '@/lib/site-data'

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] pb-20 text-white md:pb-0">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[1.2fr_2fr_1fr]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-4 focus-visible:outline focus-visible:outline-2"
            aria-label="H Bui Law home"
          >
            <Image
              src="/h-bui-logo.png"
              alt=""
              width={56}
              height={56}
              className="size-14 shrink-0 bg-white object-contain"
            />
            <span>
              <span className="block font-display text-2xl">H Bui Law</span>
              <span className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">
                Family Law
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
            A multilingual Southern California family law firm built for divorce, custody,
            support, and high-stress family transitions.
          </p>
          <a
            href={phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2"
          >
            <Phone aria-hidden="true" size={17} className="text-[var(--gold)]" />
            {phoneDisplay}
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold text-white">Practice areas</h2>
            <div className="mt-4 grid gap-3">
              {practiceAreas.slice(1).map((area) => (
                <Link
                  key={area.path}
                  href={area.path}
                  className="text-sm text-white/70 hover:text-white focus-visible:outline focus-visible:outline-2"
                >
                  {area.shortTitle}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Locations</h2>
            <div className="mt-4 grid gap-3">
              {locations.map((location) => (
                <Link
                  key={location.city}
                  href={`/locations#${location.city.toLowerCase()}`}
                  className="text-sm text-white/70 hover:text-white focus-visible:outline focus-visible:outline-2"
                >
                  {location.city}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <div className="mt-4 grid gap-3">
              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white focus-visible:outline focus-visible:outline-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/payment"
                className="text-sm text-white/70 hover:text-white focus-visible:outline focus-visible:outline-2"
              >
                Existing Clients: Pay Invoice
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-[8px] border border-white/14 p-5">
          <h2 className="font-display text-2xl">Disclaimer</h2>
          <p className="mt-4 text-xs leading-6 text-white/68">
            This website mockup is for demonstration purposes only and does not provide legal
            advice. Viewing this site or submitting a form does not create an attorney-client
            relationship.
          </p>
        </div>
      </div>
      <div className="border-t border-white/12 py-5">
        <div className="container-site flex flex-col gap-3 text-xs text-white/58 md:flex-row md:items-center md:justify-between">
          <p>© 2026 H Bui Law. Mockup for demonstration purposes.</p>
          <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  )
}
