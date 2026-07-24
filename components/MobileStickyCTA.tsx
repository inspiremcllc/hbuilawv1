'use client'

import Link from 'next/link'
import { CalendarCheck, MapPin, Phone } from 'lucide-react'
import { phoneHref } from '@/lib/site-data'

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/20 bg-[var(--gold-action)] text-white md:hidden">
      <a
        href={phoneHref}
        className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-xs font-semibold focus-visible:outline focus-visible:outline-2"
      >
        <Phone aria-hidden="true" size={18} />
        Call
      </a>
      <Link
        href="/contact"
        className="flex flex-col items-center justify-center gap-1 border-x border-white/22 px-2 py-3 text-xs font-semibold focus-visible:outline focus-visible:outline-2"
      >
        <CalendarCheck aria-hidden="true" size={18} />
        Consultation
      </Link>
      <Link
        href="/locations"
        className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-xs font-semibold focus-visible:outline focus-visible:outline-2"
      >
        <MapPin aria-hidden="true" size={18} />
        Directions
      </Link>
    </div>
  )
}
