import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { TeamShowcase } from '@/components/TeamShowcase'
import { attorneys } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Attorneys | H Bui Law',
  description:
    'Meet the multilingual Southern California family law team supporting divorce, custody, support, restraining orders, and agreements.',
  openGraph: {
    title: 'Attorneys | H Bui Law',
    description:
      'Meet the multilingual Southern California family law team supporting high-stress family law matters.',
  },
}

export default function AttorneysPage() {
  return (
    <main>
      <PageHero
        title="Family Law Attorneys With Strategy and Care"
        copy="Meet the H Bui Law team serving Southern California families with experienced counsel, clear communication, and a practical approach."
        crumbs={[{ label: 'Attorneys', href: '/attorneys' }]}
      />

      <section className="section-pad bg-[var(--warm)]">
        <div className="container-site">
          <div className="mb-10 max-w-3xl">
            <SectionHeading
              title="One team, distinct areas of experience."
              copy="Our attorneys bring multilingual support and practical counsel to family law, criminal law, and related civil matters."
              align="left"
            />
          </div>
          <TeamShowcase />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <SectionHeading
              title="Experience shaped around client needs."
              copy="Explore each attorney’s practice focus, background, and approach to helping clients."
              align="left"
            />
          </div>
          <div className="mt-8">
            {attorneys.map((attorney, index) => (
              <article
                key={attorney.name}
                className="grid gap-7 border-b border-[var(--line)] py-10 first:pt-6 sm:gap-10 sm:py-14 lg:grid-cols-[360px_1fr] lg:gap-20"
              >
                <div className={`flex justify-center lg:block ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[8px] bg-[var(--soft)] sm:max-w-[360px]">
                    <Image
                      src={attorney.image}
                      alt={attorney.imageAlt}
                      fill
                      unoptimized
                      sizes="(max-width: 1023px) calc(100vw - 32px), 360px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className={`self-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-display text-3xl leading-tight text-[var(--navy)] sm:text-4xl">
                    {attorney.name}
                  </h2>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--gold-dark)]">
                    {attorney.role}
                  </p>
                  <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)]">
                    {attorney.helps}
                  </p>

                  <div className="mt-7 grid gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-7">
                    <InfoBlock title="Practice focus" items={attorney.focus} />
                    {attorney.languages.length > 1 ? (
                      <InfoBlock title="Languages" items={attorney.languages} />
                    ) : (
                      <InfoBlock title="Admissions" items={[attorney.admissions]} />
                    )}
                    <InfoBlock title="Education" items={[attorney.education]} />
                    {attorney.languages.length > 1 ? (
                      <InfoBlock title="Admissions" items={[attorney.admissions]} />
                    ) : null}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] focus-visible:outline focus-visible:outline-2"
                  >
                    Contact the firm
                    <ArrowRight aria-hidden="true" className="text-[var(--gold-dark)]" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[var(--navy)]">{title}</h3>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <p key={item} className="flex items-start gap-2 text-sm leading-6 text-[var(--muted)]">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--gold-dark)]" size={16} />
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}
