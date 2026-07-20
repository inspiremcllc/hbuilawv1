type SectionHeadingProps = {
  title: string
  eyebrow?: string
  copy?: string
  align?: 'left' | 'center'
  inverse?: boolean
}

export function SectionHeading({
  title,
  eyebrow,
  copy,
  align = 'center',
  inverse = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const textColor = inverse ? 'text-white' : 'text-[var(--ink)]'
  const copyColor = inverse ? 'text-white/78' : 'text-[var(--muted)]'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--gold)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-3xl leading-tight md:text-5xl ${textColor}`}>{title}</h2>
      <div className="mx-auto mt-4 h-px w-16 bg-[var(--gold)]" />
      {copy ? <p className={`mt-5 text-base leading-7 md:text-lg ${copyColor}`}>{copy}</p> : null}
    </div>
  )
}
