import { Quote, Star } from 'lucide-react'

type TestimonialCardProps = {
  quote: string
  source: string
}

export function TestimonialCard({ quote, source }: TestimonialCardProps) {
  return (
    <article className="border-l border-white/22 px-6 text-white first:border-l-0 md:px-8">
      <Quote aria-hidden="true" className="mb-5 text-[var(--gold)]" size={28} />
      <div className="mb-5 flex gap-1 text-[var(--gold)]" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="text-base leading-7 text-white/90">&quot;{quote}&quot;</p>
      <p className="mt-5 text-sm font-semibold text-white">- {source}</p>
    </article>
  )
}
