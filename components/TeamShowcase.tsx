import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { attorneys } from '@/lib/site-data'

export function TeamShowcase() {
  const [featured, ...team] = attorneys

  return (
    <div className="grid gap-6 lg:grid-cols-[1.02fr_1.65fr]">
      <Link
        href="/attorneys"
        className="group relative min-h-[560px] overflow-hidden rounded-[8px] bg-[var(--soft)] focus-visible:outline focus-visible:outline-2"
      >
        <Image
          src={featured.image}
          alt={featured.imageAlt}
          fill
          unoptimized
          sizes="(max-width: 1023px) calc(100vw - 32px), 440px"
          className="object-cover object-top transition duration-300 group-hover:scale-[1.015]"
        />
        <div className="absolute inset-x-0 bottom-0 bg-[rgba(6,27,52,0.9)] p-6 text-white">
          <p className="font-display text-3xl leading-tight">{featured.name}</p>
          <p className="mt-2 text-sm font-semibold text-[var(--gold)]">{featured.role}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
            View profile
            <ArrowRight aria-hidden="true" size={16} />
          </span>
        </div>
      </Link>

      <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        {team.map((attorney) => (
          <article key={attorney.name}>
            <Link
              href="/attorneys"
              className="group block focus-visible:outline focus-visible:outline-2"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-[var(--soft)]">
                <Image
                  src={attorney.image}
                  alt={attorney.imageAlt}
                  fill
                  unoptimized
                  sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 33vw, 240px"
                  className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="mt-4 font-display text-xl leading-tight text-[var(--navy)]">
                {attorney.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[var(--gold-dark)]">
                {attorney.role}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
