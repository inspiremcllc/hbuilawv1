import Image from 'next/image'
import { trustItems } from '@/lib/site-data'

export function TrustBar() {
  return (
    <div className="card-surface relative p-5 md:p-7">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div
            key={item.image}
            className="flex min-h-32 items-center justify-center rounded-[8px] border border-[var(--line)] bg-[#f4f0e7] p-4"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={item.width}
              height={item.height}
              unoptimized
              sizes="(max-width: 639px) calc(100vw - 72px), (max-width: 1023px) 45vw, 250px"
              className="max-h-24 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>
      <p className="mt-6 border-t border-[var(--line)] pt-4 text-center text-xs leading-5 text-[var(--muted)]">
        Certified by the State Bar of California Board of Legal Specialization where applicable.
        Attorney certifications apply to individual attorneys, not the firm as a whole.
      </p>
    </div>
  )
}
