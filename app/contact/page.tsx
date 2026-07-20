import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { locations, phoneDisplay } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact | H Bui Law',
  description:
    'Request a confidential family law consultation for divorce, custody, support, restraining orders, mediation, or agreements.',
  openGraph: {
    title: 'Contact | H Bui Law',
    description:
      'Request a family law consultation with the H Bui Law mockup intake form.',
  },
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Request a Confidential Consultation"
        copy="Start with a conflict check, language preference, and a clear summary of what you need help with. This mockup form does not submit to a live system."
        crumbs={[{ label: 'Contact', href: '/contact' }]}
      />
      <section className="section-pad bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <SectionHeading title="Tell Us How We Can Help" align="left" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <aside className="lg:pt-28">
            <div className="card-surface p-6">
              <h2 className="font-display text-3xl text-[var(--navy)]">Contact Details</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Call {phoneDisplay} or request a consultation through the form. Multilingual support
                is available in English, Chinese, Spanish, and Vietnamese.
              </p>
              <div className="mt-6 grid gap-4">
                {locations.map((location) => (
                  <div key={location.city} className="border-t border-[var(--line)] pt-4">
                    <p className="font-display text-xl text-[var(--navy)]">{location.city}</p>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{location.address}</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--navy)]">{location.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
