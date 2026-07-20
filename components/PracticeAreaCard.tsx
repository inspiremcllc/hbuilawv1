import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { PracticeCard } from '@/lib/site-data'

type PracticeAreaCardProps = {
  area: PracticeCard
  compact?: boolean
}

export function PracticeAreaCard({ area, compact = false }: PracticeAreaCardProps) {
  const Icon = area.icon

  return (
    <Link
      href={area.path}
      className="card-surface group flex h-full min-h-[220px] flex-col justify-between p-6 transition hover:-translate-y-1 hover:border-[var(--gold)] focus-visible:outline focus-visible:outline-2"
    >
      <div>
        <Icon aria-hidden="true" className="mb-7 text-[var(--gold)]" size={compact ? 30 : 38} />
        <h3 className="font-display text-2xl leading-tight text-[var(--navy)]">{area.shortTitle}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          {compact ? area.description : area.painPoint}
        </p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)]">
        Learn More
        <ArrowRight
          aria-hidden="true"
          className="text-[var(--gold)] transition group-hover:translate-x-1"
          size={17}
        />
      </span>
    </Link>
  )
}
