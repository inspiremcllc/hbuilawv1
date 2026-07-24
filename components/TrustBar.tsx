import Image from 'next/image'
import { trustItems } from '@/lib/site-data'

export function TrustBar() {
  return (
    <div>
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
        Recognition and credentials
      </p>
      <div className="card-surface mt-6 p-3 sm:p-5 md:p-7">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.image}
              className="flex min-h-28 items-center justify-center rounded-[8px] border border-[var(--line)] bg-[#f4f0e7] p-3 sm:min-h-32 sm:p-4"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                unoptimized
                sizes="(max-width: 639px) 38vw, (max-width: 1023px) 42vw, 250px"
                className="max-h-20 w-auto max-w-full object-contain sm:max-h-24"
              />
            </div>
          ))}
        </div>
        <p className="mt-5 border-t border-[var(--line)] pt-4 text-center text-xs leading-5 text-[var(--muted)] sm:mt-6">
          Certified by the State Bar of California Board of Legal Specialization where applicable.
          Attorney certifications apply to individual attorneys, not the firm as a whole.
        </p>
      </div>
    </div>
  )
}
