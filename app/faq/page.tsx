import type { Metadata } from 'next'
import { CTASection } from '@/components/CTASection'
import { FAQAccordion } from '@/components/FAQAccordion'
import { PageHero } from '@/components/PageHero'
import { faqCategories } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Family Law FAQ | H Bui Law',
  description:
    'Frequently asked questions about California divorce, custody, support, restraining orders, mediation, and consultations.',
  openGraph: {
    title: 'Family Law FAQ | H Bui Law',
    description:
      'Answers to common family law questions for divorce, custody, support, mediation, restraining orders, and consultations.',
  },
}

export default function FAQPage() {
  return (
    <main>
      <PageHero
        title="Family Law Questions, Answered Clearly"
        copy="This FAQ page helps prospective clients understand common California family law topics before requesting a consultation."
        crumbs={[{ label: 'FAQ', href: '/faq' }]}
      />
      <section className="section-pad bg-white">
        <div className="container-site grid gap-12">
          {faqCategories.map((category) => (
            <section key={category.category} className="grid gap-6 lg:grid-cols-[300px_1fr]">
              <div>
                <h2 className="font-display text-3xl text-[var(--navy)]">{category.category}</h2>
                <div className="mt-4 h-px w-14 bg-[var(--gold)]" />
              </div>
              <FAQAccordion items={category.items} />
            </section>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  )
}
