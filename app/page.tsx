import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { AttorneyCard } from '@/components/AttorneyCard'
import { CTASection } from '@/components/CTASection'
import { FAQAccordion } from '@/components/FAQAccordion'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { LocationCard } from '@/components/LocationCard'
import { PracticeAreaCard } from '@/components/PracticeAreaCard'
import { SectionHeading } from '@/components/SectionHeading'
import { TestimonialCard } from '@/components/TestimonialCard'
import {
  attorneys,
  differentiators,
  locations,
  practiceGridCards,
  practiceAreas,
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

const urgentSlugs = ['divorce', 'child-custody', 'support', 'restraining-orders']
const urgentAreas = urgentSlugs
  .map((slug) => practiceAreas.find((area) => area.slug === slug))
  .filter((area): area is (typeof practiceAreas)[number] => Boolean(area))
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

      <section className="statement-band section-pad">
        <div className="container-site max-w-5xl">
          <h2 className="font-display text-3xl leading-snug text-[var(--navy)] md:text-[2.6rem] md:leading-[1.25]">
            When you choose H Bui Law, you&rsquo;re not just hiring a law firm. You&rsquo;re
            gaining an advocate for the people who matter most. Our multilingual team guides
            Southern California families through divorce, custody, and support with local insight
            and specialist-level experience.
          </h2>
          <Link
            href="/family-law"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold-dark)] transition hover:text-[var(--navy)]"
          >
            Learn More
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>

      <section className="section-pad-tight bg-white">
        <div className="container-site">
          <SectionHeading title="We Help With Life's Most Urgent Issues" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {urgentAreas.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-tight bg-[var(--warm)]">
        <div className="container-site">
          <SectionHeading title="Why Clients Choose H Bui Law" />
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {differentiators.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.title} className="text-center">
                  <Icon aria-hidden="true" className="mx-auto text-[var(--gold)]" size={44} />
                  <h3 className="mt-5 font-display text-xl leading-tight text-[var(--navy)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad navy-gradient text-white">
        <div className="container-site">
          <SectionHeading title="Our Practice Areas" inverse />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {practiceGridCards.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading title="What Happens After You Contact Us" />
          <div className="relative mt-14 grid gap-6 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-11 hidden h-px bg-[var(--gold)] lg:block" />
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <article key={step.title} className="relative text-center">
                  <div className="mx-auto grid size-11 place-items-center rounded-full bg-[var(--navy)] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <Icon aria-hidden="true" className="mx-auto mt-6 text-[var(--gold)]" size={38} />
                  <h3 className="mt-5 font-display text-xl leading-tight text-[var(--navy)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad-tight bg-[var(--warm)]">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Our Attorneys"
              copy="Compassionate advocates. Strategic counsel. Multilingual support."
              align="left"
            />
            <Link
              href="/attorneys"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] focus-visible:outline focus-visible:outline-2"
            >
              Meet the Team
              <ArrowRight aria-hidden="true" className="text-[var(--gold)]" size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {attorneys.map((attorney) => (
              <AttorneyCard key={attorney.name} attorney={attorney} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] text-white">
        <div className="container-site grid gap-8 py-14 lg:grid-cols-[300px_1fr] lg:items-center">
          <div>
            <p className="text-5xl leading-none text-[var(--gold)]">"</p>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">What Our Clients Say</h2>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2"
            >
              Request a Consultation
              <ArrowRight aria-hidden="true" size={16} className="text-[var(--gold)]" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.source}
                quote={testimonial.quote}
                source={testimonial.source}
              />
            ))}
          </div>
        </div>
        <div className="bg-white py-5">
          <p className="container-site text-center text-xs leading-6 text-[var(--muted)]">
            Testimonials reflect individual experiences. Results vary based on the facts and law
            applicable to each matter. No testimonial guarantees a similar outcome.
          </p>
        </div>
      </section>

      <section className="section-pad-tight bg-white">
        <div className="container-site">
          <SectionHeading title="Our Locations" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {locations.map((location) => (
              <LocationCard key={location.city} location={location} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-tight bg-[var(--warm)]">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading title="Frequently Asked Questions" align="left" />
          <FAQAccordion items={homepageFaqs} />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site grid gap-6 py-12 md:grid-cols-3">
          {['Arcadia', 'Pasadena', 'Irvine'].map((city) => (
            <div key={city} className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
              <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--gold)]" size={18} />
              <span>Family law consultations available by appointment in {city}.</span>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
