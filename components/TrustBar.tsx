import { trustItems } from '@/lib/site-data'

export function TrustBar() {
  return (
    <div className="card-surface relative p-5 md:p-7">
      <div className="grid gap-5 md:grid-cols-4 md:divide-x md:divide-[var(--line)]">
        {trustItems.map((item) => {
          const Icon = item.icon

          return (
            <div key={item.title} className="flex gap-4 md:px-5 first:md:pl-0 last:md:pr-0">
              <Icon aria-hidden="true" className="shrink-0 text-[var(--gold)]" size={36} />
              <div>
                <p className="font-display text-lg leading-tight text-[var(--navy)]">{item.title}</p>
                <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{item.detail}</p>
              </div>
            </div>
          )
        })}
      </div>
      <p className="mt-6 border-t border-[var(--line)] pt-4 text-center text-xs leading-5 text-[var(--muted)]">
        Certified by the State Bar of California Board of Legal Specialization where applicable.
        Attorney certifications apply to individual attorneys, not the firm as a whole.
      </p>
    </div>
  )
}
