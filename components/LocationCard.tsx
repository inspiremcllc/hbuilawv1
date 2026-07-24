import Link from 'next/link'
import { MapPin, Navigation, Phone } from 'lucide-react'

type LocationCardProps = {
  location: {
    city: string
    address: string
    phone: string
    counties?: string[]
    courts?: string[]
  }
  detailed?: boolean
}

export function LocationCard({ location, detailed = false }: LocationCardProps) {
  const anchor = location.city.toLowerCase()

  return (
    <article id={anchor} className="card-surface overflow-hidden">
      <div className="grid gap-0 md:grid-cols-[160px_1fr]">
        <div className="map-grid relative min-h-32 md:min-h-[180px]">
          <div className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--navy)] text-white shadow-lg">
            <MapPin aria-hidden="true" size={22} />
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="font-display text-2xl text-[var(--navy)]">{location.city}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{location.address}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)]">
            <Phone aria-hidden="true" size={16} className="text-[var(--gold)]" />
            {location.phone}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={`/locations#${anchor}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[var(--navy)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-2)] focus-visible:outline focus-visible:outline-2 sm:w-auto"
            >
              <Navigation aria-hidden="true" size={16} />
              Directions
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-[8px] border border-[var(--line)] px-4 py-3 text-sm font-semibold text-[var(--navy)] transition hover:border-[var(--gold)] focus-visible:outline focus-visible:outline-2 sm:w-auto"
            >
              Request Consultation
            </Link>
          </div>
          <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
            Family law consultations available by appointment.
          </p>
          {detailed ? (
            <div className="mt-6 grid gap-5 border-t border-[var(--line)] pt-5 text-sm leading-6 text-[var(--muted)] sm:grid-cols-2">
              <div>
                <p className="font-semibold text-[var(--navy)]">Counties served</p>
                <p>{location.counties?.join(', ')}</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--navy)]">Courts commonly handled</p>
                <p>{location.courts?.join(', ')}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}
