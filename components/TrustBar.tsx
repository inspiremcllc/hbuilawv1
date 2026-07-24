import Image from 'next/image'
import { trustItems } from '@/lib/site-data'

export function TrustBar() {
  return (
    <div>
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
        Recognition and credentials
      </p>
      <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div
            key={item.image}
            className="flex min-h-28 items-center justify-center border-l border-[var(--line)] px-4 first:border-l-0 max-lg:odd:border-l-0"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={item.width}
              height={item.height}
              unoptimized
              sizes="(max-width: 639px) calc(100vw - 72px), (max-width: 1023px) 45vw, 250px"
              className="max-h-24 w-auto max-w-full object-contain mix-blend-multiply"
            />
          </div>
        ))}
      </div>
      <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-5 text-[var(--muted)]">
        Certified by the State Bar of California Board of Legal Specialization where applicable.
        Attorney certifications apply to individual attorneys, not the firm as a whole.
      </p>
    </div>
  )
}
