import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight, MapPin, Quote } from 'lucide-react'
import { CTASection } from '@/components/CTASection'
import { FAQAccordion } from '@/components/FAQAccordion'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { TeamShowcase } from '@/components/TeamShowcase'
import { TrustBar } from '@/components/TrustBar'
import {
  differentiators,
  locations,
  practiceGridCards,
  processSteps,
  testimonials,
} from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'H Bui Law | Southern California Family Law Attorneys',
  description:
    'Family law guidance for divorce, custody, support, restraining orders, prenups, and mediation across Arcadia, Pasadena, Irvine, and Southern California.',
  openGraph: {
    title: 'H Bui Law | Southern California Family Law Attorneys',
    description:
      'Family law guidance for divorce, custody, support, restraining orders, prenups, and mediation across Arcadia, Pasadena, Irvine, and Southern California.',
  },
}

const homepageFaqs = [
  {
    question: 'How long does a divorce take in California?',
    answer:
      'California has a minimum waiting period, but the full timeline depends on disputed issues, court calendars, disclosures, and settlement progress.',
  },
  {
    question: 'How does the court decide child custody?',
    answer:
      'California courts evaluate the child best interests, including safety, stability, parenting history, and the facts presented in the case.',
  },
  {
    question: 'Can support orders be modified?',
    answer:
      'Support orders may be modified when there is a legally relevant change in circumstances and the evidence supports a new order.',
  },
  {
    question: 'What should I bring to a consultation?',
    answer:
      'Bring court papers, income records, recent communications, key dates, and a short list of questions or goals.',
  },
  {
    question: 'Does contacting the firm create an attorney-client relationship?',
    answer:
      'No. Contacting the firm or submitting a mockup form does not create an attorney-client relationship.',
  },
]

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="bg-[var(--warm)] py-10 md:py-14">
        <div className="container-site">
          <TrustBar />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
              Counsel for defining decisions
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.16] text-[var(--navy)] md:text-5xl">
              Specialist experience, grounded in what matters to your family.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Our multilingual team brings local insight, careful preparation, and clear strategy
              to divorce, custody, support, and related family law matters.
            </p>
            <Link
              href="/family-law"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[var(--navy)] focus-visible:outline focus-visible:outline-2"
            >
              Explore our approach
              <ArrowRight aria-hidden="true" className="text-[var(--gold-dark)]" size={17} />
            </Link>
          </div>

          <div className="lg:pt-2">
            {differentiators.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="grid grid-cols-[42px_1fr] gap-5 border-b border-[var(--line)] py-6 first:pt-0 last:border-b-0"
                >
                  <Icon aria-hidden="true" className="mt-1 text-[var(--gold-dark)]" size={28} />
                  <div>
                    <h3 className="font-display text-xl leading-tight text-[var(--navy)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--warm)]">
        <div className="container-site grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-md lg:sticky lg:top-40 lg:self-start">
            <SectionHeading
              title="Family law support for the issue in front of you."
              copy="Start with the matter that needs attention now. We will help you understand how the other pieces connect."
              align="left"
            />
            <Link
              href="/family-law"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] focus-visible:outline focus-visible:outline-2"
            >
              View family law services
              <ArrowRight aria-hidden="true" className="text-[var(--gold-dark)]" size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 sm:gap-x-10">
            {practiceGridCards.map((area) => {
              const Icon = area.icon

              return (
                <Link
                  key={area.slug}
                  href={area.path}
                  className="group grid grid-cols-[34px_1fr_18px] gap-4 border-b border-[var(--line)] py-7 focus-visible:outline focus-visible:outline-2"
                >
                  <Icon aria-hidden="true" className="mt-1 text-[var(--gold-dark)]" size={23} />
                  <div>
                    <h3 className="font-display text-xl leading-tight text-[var(--navy)]">
                      {area.shortTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {area.description}
                    </p>
                  </div>
                  <ChevronRight
                    aria-hidden="true"
                    className="mt-1 text-[var(--gold-dark)] transition group-hover:translate-x-1"
                    size={18}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
          <div className="relative min-h-[400px] overflow-hidden rounded-[8px] bg-[var(--soft)] sm:min-h-[520px]">
            <Image
              src="/images/southern-california-law-office.jpg"
              alt="Southern California office setting"
              fill
              priority={false}
              sizes="(max-width: 1023px) calc(100vw - 32px), 520px"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 max-w-xs bg-[var(--navy)] p-6 text-white">
              <p className="font-display text-2xl leading-tight">
                A clear process when the next step feels uncertain.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              title="What happens after you contact us."
              copy="We begin with the facts, identify immediate priorities, and build a plan around your goals."
              align="left"
            />
            <div className="mt-9">
              {processSteps.map((step, index) => {
                const Icon = step.icon

                return (
                  <article
                    key={step.title}
                    className="grid grid-cols-[44px_1fr] gap-5 border-b border-[var(--line)] py-6 first:pt-0 last:border-b-0"
                  >
                    <div className="grid size-11 place-items-center rounded-full bg-[var(--navy)] text-white">
                      <Icon aria-hidden="true" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--gold-dark)]">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-2 font-display text-xl leading-tight text-[var(--navy)]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--warm)]">
        <div className="container-site">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="A team prepared for the human side of family law."
              copy="Experienced counsel, practical communication, and multilingual support across Southern California."
              align="left"
            />
            <Link
              href="/attorneys"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] focus-visible:outline focus-visible:outline-2"
            >
              Meet every attorney
              <ArrowRight aria-hidden="true" className="text-[var(--gold-dark)]" size={16} />
            </Link>
          </div>
          <TeamShowcase />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <article>
            <Quote aria-hidden="true" className="text-[var(--gold-dark)]" size={38} />
            <blockquote className="mt-7 max-w-3xl font-display text-3xl leading-snug text-[var(--navy)] md:text-5xl">
              “{testimonials[0].quote}”
            </blockquote>
            <p className="mt-7 text-sm font-semibold text-[var(--muted)]">
              {testimonials[0].source}
            </p>
          </article>
          <div className="lg:border-l lg:border-[var(--line)] lg:pl-12">
            {testimonials.slice(1).map((testimonial) => (
              <article
                key={testimonial.source}
                className="border-b border-[var(--line)] py-7 first:pt-0 last:border-b-0"
              >
                <blockquote className="text-lg leading-8 text-[var(--navy)]">
                  “{testimonial.quote}”
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-[var(--muted)]">
                  {testimonial.source}
                </p>
              </article>
            ))}
          </div>
        </div>
        <p className="container-site mt-12 max-w-4xl text-xs leading-6 text-[var(--muted)]">
          Testimonials reflect individual experiences. Results vary based on the facts and law
          applicable to each matter. No testimonial guarantees a similar outcome.
        </p>
      </section>

      <section className="section-pad-tight bg-[var(--warm)]">
        <div className="container-site grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <SectionHeading
            title="Local offices, one coordinated team."
            copy="Consultations are available by appointment in Arcadia, Pasadena, and Irvine."
            align="left"
          />
          <div>
            {locations.map((location) => (
              <article
                key={location.city}
                className="grid gap-5 border-b border-[var(--line)] py-7 first:pt-0 md:grid-cols-[180px_1fr_auto] md:items-center"
              >
                <div className="flex items-center gap-3">
                  <MapPin aria-hidden="true" className="text-[var(--gold-dark)]" size={21} />
                  <h3 className="font-display text-2xl text-[var(--navy)]">{location.city}</h3>
                </div>
                <div>
                  <p className="text-sm leading-6 text-[var(--muted)]">{location.address}</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--navy)]">{location.phone}</p>
                </div>
                <Link
                  href={`/locations#${location.city.toLowerCase()}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] focus-visible:outline focus-visible:outline-2"
                >
                  Office details
                  <ArrowRight aria-hidden="true" className="text-[var(--gold-dark)]" size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-tight bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
          <SectionHeading
            title="Questions that often come first."
            copy="Every matter is different. These answers provide a starting point, not legal advice."
            align="left"
          />
          <FAQAccordion items={homepageFaqs} />
        </div>
      </section>

      <CTASection />
    </main>
  )
}
