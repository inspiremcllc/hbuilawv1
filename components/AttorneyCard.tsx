import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type AttorneyCardProps = {
  attorney: {
    name: string
    initials: string
    role: string
    image: string
    imageAlt: string
    focus: string[]
    languages: string[]
  }
  profile?: boolean
}

export function AttorneyCard({ attorney, profile = false }: AttorneyCardProps) {
  return (
    <article className="card-surface flex h-full flex-col overflow-hidden text-center">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--soft)]">
        <Image
          src={attorney.image}
          alt={attorney.imageAlt}
          fill
          unoptimized
          sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl leading-tight text-[var(--navy)]">{attorney.name}</h3>
        <p className="mt-2 text-sm font-semibold text-[var(--gold-dark)]">{attorney.role}</p>
        <div className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)]">
          <p>
            <span className="block font-semibold text-[var(--navy)]">Focus Areas</span>
            {attorney.focus.join(', ')}
          </p>
          {attorney.languages.length > 1 ? (
            <p>
              <span className="block font-semibold text-[var(--navy)]">Languages</span>
              {attorney.languages.join(', ')}
            </p>
          ) : null}
        </div>
        <Link
          href={profile ? '/contact' : '/attorneys'}
          className="mt-auto inline-flex items-center justify-center gap-2 pt-6 text-sm font-semibold text-[var(--navy)] focus-visible:outline focus-visible:outline-2"
        >
          {profile ? 'Contact the Firm' : 'View Profile'}
          <ArrowRight aria-hidden="true" className="text-[var(--gold)]" size={16} />
        </Link>
      </div>
    </article>
  )
}
