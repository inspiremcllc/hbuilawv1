import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type AttorneyCardProps = {
  attorney: {
    name: string
    initials: string
    role: string
    focus: string[]
    languages: string[]
  }
  profile?: boolean
}

export function AttorneyCard({ attorney, profile = false }: AttorneyCardProps) {
  return (
    <article className="card-surface flex h-full flex-col p-6 text-center">
      <div className="mx-auto grid size-20 place-items-center rounded-full bg-[var(--navy)] font-display text-2xl text-white shadow-lg shadow-slate-900/20">
        {attorney.initials}
      </div>
      <h3 className="mt-6 font-display text-2xl leading-tight text-[var(--navy)]">{attorney.name}</h3>
      <p className="mt-2 text-sm font-semibold text-[var(--gold-dark)]">{attorney.role}</p>
      <div className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)]">
        <p>
          <span className="block font-semibold text-[var(--navy)]">Focus Areas</span>
          {attorney.focus.join(', ')}
        </p>
        <p>
          <span className="block font-semibold text-[var(--navy)]">Languages</span>
          {attorney.languages.join(', ')}
        </p>
      </div>
      <Link
        href={profile ? '/contact' : '/attorneys'}
        className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[var(--navy)] focus-visible:outline focus-visible:outline-2"
      >
        {profile ? 'Contact the Firm' : 'View Profile'}
        <ArrowRight aria-hidden="true" className="text-[var(--gold)]" size={16} />
      </Link>
    </article>
  )
}
