import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { getRelatedPracticeAreas, practiceAreas, type PracticeArea } from '@/lib/site-data'
import { CTASection } from './CTASection'
import { FAQAccordion } from './FAQAccordion'
import { PageHero } from './PageHero'
import { SectionHeading } from './SectionHeading'

type PracticePageProps = {
  area: PracticeArea
}

export function PracticePage({ area }: PracticePageProps) {
  const related = getRelatedPracticeAreas(area)

  return (
    <>
      <PageHero
        title={area.heroTitle}
        copy={area.intro}
        crumbs={[{ label: area.shortTitle, href: area.path }]}
      />
      <section className="section-pad bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[250px_1fr_280px]">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="overflow-hidden rounded-[8px] border border-[var(--line)] bg-[#f7f8f9]">
              {practiceAreas.map((practice) => (
                <Link
                  key={practice.path}
                  href={practice.path}
                  className={`block border-b border-[var(--line)] px-4 py-3 text-sm font-semibold last:border-b-0 focus-visible:outline focus-visible:outline-2 ${
                    practice.slug === area.slug
                      ? 'bg-[var(--navy)] text-white'
                      : 'text-[var(--navy)] hover:bg-white'
                  }`}
                >
                  {practice.shortTitle}
                </Link>
              ))}
            </div>
            <div className="card-surface mt-5 p-5">
              <p className="font-display text-2xl text-[var(--navy)]">Ready to talk?</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                We are here to listen and help you understand your options.
              </p>
              <Link
                href="/contact"
                className="gold-button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[8px] px-4 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2"
              >
                Schedule a Consultation
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </aside>
          <main>
            <SectionHeading title="How We Help" align="left" />
            <div className="mt-8 grid gap-4">
              {area.howWeHelp.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-[var(--line)] pb-4 text-sm leading-7 text-[var(--muted)]"
                >
                  <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-[var(--gold)]" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <SectionHeading title="Common Issues We Handle" align="left" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {area.issues.map((issue) => (
                  <div key={issue} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--gold)]" size={18} />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <SectionHeading title="Our Process" align="left" />
              <div className="mt-8 grid gap-4">
                {area.process.map((step, index) => (
                  <div key={step} className="card-surface flex gap-4 p-5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--navy)] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-[var(--muted)]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <SectionHeading title="Frequently Asked Questions" align="left" />
              <div className="mt-8">
                <FAQAccordion items={area.faqs} />
              </div>
            </div>
          </main>
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="card-surface overflow-hidden">
              <div className="h-40 bg-[url('/images/southern-california-law-office.png')] bg-cover bg-center" />
              <div className="p-5">
                <p className="font-display text-2xl text-[var(--navy)]">Related Practice Areas</p>
                <div className="mt-5 grid gap-3">
                  {related.map((practice) => (
                    <Link
                      key={practice.path}
                      href={practice.path}
                      className="flex items-center justify-between border-b border-[var(--line)] pb-3 text-sm font-semibold text-[var(--navy)] last:border-b-0 focus-visible:outline focus-visible:outline-2"
                    >
                      {practice.shortTitle}
                      <ArrowRight aria-hidden="true" className="text-[var(--gold)]" size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <CTASection title="Let us talk about your next steps" copy="Book a consultation to get clear answers and a plan that fits your family law matter." />
    </>
  )
}
