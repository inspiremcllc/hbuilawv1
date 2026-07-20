import type { Metadata } from 'next'
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Existing Client Payment Portal | H Bui Law',
  description:
    'Existing client payment portal mockup for H Bui Law, intended to connect to LawPay or another approved processor.',
  openGraph: {
    title: 'Existing Client Payment Portal | H Bui Law',
    description:
      'Payment portal mockup for existing clients, with placeholder processor connection copy.',
  },
}

export default function PaymentPage() {
  return (
    <main>
      <PageHero
        title="Existing Client Payment Portal"
        copy="This page is for existing clients only. In a final build, the payment action would link to LawPay or another approved payment processor."
        crumbs={[{ label: 'Payment', href: '/payment' }]}
      />
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl card-surface p-8 text-center md:p-12">
            <div className="mx-auto grid size-20 place-items-center rounded-full bg-[var(--navy)] text-[var(--gold)]">
              <LockKeyhole aria-hidden="true" size={34} />
            </div>
            <h2 className="mt-8 font-display text-4xl text-[var(--navy)]">
              Existing Client Payment Portal
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
              This mockup would send existing clients to LawPay or another approved payment
              processor to complete a secure invoice payment.
            </p>
            <button
              type="button"
              className="gold-button mt-8 inline-flex items-center justify-center gap-2 rounded-[8px] px-7 py-4 text-sm font-semibold focus-visible:outline focus-visible:outline-2"
            >
              Continue to Secure Payment
              <ArrowRight aria-hidden="true" size={18} />
            </button>
            <div className="mx-auto mt-6 flex max-w-xl items-start justify-center gap-3 rounded-[8px] bg-[#f7f8f9] p-4 text-sm leading-6 text-[var(--muted)]">
              <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--gold)]" size={18} />
              <span>This mockup button is not connected to a live payment processor.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
