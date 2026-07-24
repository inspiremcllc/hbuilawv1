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
        className="group relative min-h-[440px] overflow-hidden rounded-[8px] bg-[var(--soft)] focus-visible:outline focus-visible:outline-2 sm:min-h-[560px]"
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

      <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-5 sm:gap-y-8 md:grid-cols-3">
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
                  sizes="(max-width: 639px) 44vw, (max-width: 1023px) 33vw, 240px"
                  className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="mt-3 font-display text-lg leading-tight text-[var(--navy)] sm:mt-4 sm:text-xl">
                {attorney.name}
              </h3>
              <p className="mt-1 text-xs font-semibold leading-5 text-[var(--gold-dark)] sm:text-sm">
                {attorney.role}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
