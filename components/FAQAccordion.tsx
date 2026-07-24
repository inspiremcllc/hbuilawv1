import { ChevronDown } from 'lucide-react'

export type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-[var(--line)] overflow-hidden rounded-[8px] border border-[var(--line)] bg-white">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-[var(--navy)] transition hover:bg-[#f6f7f8] focus-visible:outline focus-visible:outline-2 sm:px-5">
            <span>{item.question}</span>
            <ChevronDown
              aria-hidden="true"
              className="shrink-0 text-[var(--gold)] transition group-open:rotate-180"
              size={18}
            />
          </summary>
          <div className="px-4 pb-5 text-sm leading-7 text-[var(--muted)] sm:px-5">{item.answer}</div>
        </details>
      ))}
    </div>
  )
}
