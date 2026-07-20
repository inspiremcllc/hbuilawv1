'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const languages = ['English', 'Chinese', 'Spanish', 'Vietnamese']
const caseTypes = [
  'Divorce',
  'Child custody',
  'Child support',
  'Spousal support',
  'Restraining order',
  'Prenup or postnup',
  'Mediation',
  'Modification',
]
const counties = ['Los Angeles', 'Orange', 'Riverside', 'San Bernardino', 'San Diego', 'Other']
const urgency = ['This week', 'Within 2 weeks', 'Planning ahead', 'Not sure']
const times = ['Morning', 'Afternoon', 'Evening', 'Anytime']

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className="card-surface grid gap-5 p-6 md:p-8"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <div className="rounded-[8px] border border-[var(--line)] bg-[#f7f8f9] p-4 text-sm leading-6 text-[var(--muted)]">
        Submitting this form does not create an attorney-client relationship. Do not include
        confidential or time-sensitive information until an attorney-client relationship has been
        established.
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your full name" />
        <Field label="Phone" name="phone" placeholder="(555) 123-4567" type="tel" />
        <Field label="Email" name="email" placeholder="you@example.com" type="email" />
        <SelectField label="Preferred language" name="language" options={languages} />
        <SelectField label="Case type" name="caseType" options={caseTypes} />
        <Field
          label="Opposing party name for conflict check"
          name="opposingParty"
          placeholder="Full name if known"
        />
        <SelectField label="County" name="county" options={counties} />
        <SelectField label="Urgency" name="urgency" options={urgency} />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-[var(--navy)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-[8px] border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--ink)] shadow-sm transition focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[rgba(201,148,49,0.18)]"
          placeholder="Please provide a brief description of your situation."
        />
      </div>
      <SelectField label="Best time to contact" name="bestTime" options={times} />
      <button
        type="submit"
        className="gold-button inline-flex items-center justify-center gap-2 rounded-[8px] px-6 py-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2"
      >
        Request Consultation
        <ArrowRight aria-hidden="true" size={18} />
      </button>
      {submitted ? (
        <div
          className="flex items-start gap-3 rounded-[8px] border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900"
          role="status"
        >
          <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0" size={18} />
          <span>
            Thank you. This mockup form does not submit yet, but the final version can connect to
            CRM, email, or intake software.
          </span>
        </div>
      ) : null}
    </form>
  )
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
}: {
  label: string
  name: string
  placeholder: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-[var(--navy)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-[8px] border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--ink)] shadow-sm transition focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[rgba(201,148,49,0.18)]"
        placeholder={placeholder}
      />
    </div>
  )
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-[var(--navy)]">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full rounded-[8px] border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--ink)] shadow-sm transition focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[rgba(201,148,49,0.18)]"
        defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
