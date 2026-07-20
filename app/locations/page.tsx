import type { Metadata } from 'next'
import { CTASection } from '@/components/CTASection'
import { LocationCard } from '@/components/LocationCard'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { locations } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Locations | H Bui Law',
  description:
    'Family law consultations by appointment in Arcadia, Pasadena, and Irvine, serving families across Southern California.',
  openGraph: {
    title: 'Locations | H Bui Law',
    description:
      'Arcadia, Pasadena, and Irvine family law office locations for H Bui Law mockup consultations.',
  },
}

export default function LocationsPage() {
  return (
    <main>
      <PageHero
        title="Family Law Consultations in Arcadia, Pasadena, and Irvine"
        copy="The mockup location page gives prospective clients clear office options, county context, and next-step calls to action without relying on a live map API."
        crumbs={[{ label: 'Locations', href: '/locations' }]}
      />
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            title="Choose the Office That Fits Your Matter"
            copy="Family law consultations are available by appointment. Address details are placeholders for pitch use."
          />
          <div className="mt-12 grid gap-7">
            {locations.map((location) => (
              <LocationCard key={location.city} location={location} detailed />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
