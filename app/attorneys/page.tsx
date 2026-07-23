import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { AttorneyCard } from '@/components/AttorneyCard'
import { CTASection } from '@/components/CTASection'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
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
        title="Attorneys Focused on Strategy, Care, and Clear Communication"
        copy="Meet the H Bui Law team serving Southern California families with experienced counsel, clear communication, and a practical approach."
        crumbs={[{ label: 'Attorneys', href: '/attorneys' }]}
      />
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            title="Our Attorneys"
            copy="A multilingual legal team supporting clients through family law, criminal law, and related civil matters."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {attorneys.map((attorney) => (
              <AttorneyCard key={attorney.name} attorney={attorney} profile />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-[var(--warm)]">
        <div className="container-site grid gap-8">
          {attorneys.map((attorney) => (
            <article
              key={attorney.name}
              className="card-surface grid gap-8 overflow-hidden p-6 md:grid-cols-[240px_1fr] md:p-8"
            >
              <div>
                <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[8px] bg-[var(--soft)]">
                  <Image
                    src={attorney.image}
                    alt={attorney.imageAlt}
                    fill
                    unoptimized
                    sizes="(max-width: 767px) calc(100vw - 80px), 240px"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-6 font-display text-3xl text-[var(--navy)]">{attorney.name}</h2>
                <p className="mt-2 text-sm font-semibold text-[var(--gold-dark)]">{attorney.role}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <InfoBlock title="Practice focus" items={attorney.focus} />
                {attorney.languages.length > 1 ? (
                  <InfoBlock title="Languages" items={attorney.languages} />
                ) : null}
                <InfoBlock title="Education" items={[attorney.education]} />
                <InfoBlock title="Admissions" items={[attorney.admissions]} />
                <div className="md:col-span-2">
                  <h3 className="text-sm font-semibold text-[var(--navy)]">
                    How this attorney helps clients
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{attorney.helps}</p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] focus-visible:outline focus-visible:outline-2"
                  >
                    Contact the Firm
                    <ArrowRight aria-hidden="true" className="text-[var(--gold)]" size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
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
            <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--gold)]" size={16} />
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}
