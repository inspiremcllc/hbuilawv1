'use client'

import { useEffect, useState } from 'react'

export function HeroVideo() {
  const [enabled, setEnabled] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: no-preference)')
    const syncPreference = () => setEnabled(motionPreference.matches)

    syncPreference()
    motionPreference.addEventListener('change', syncPreference)

    return () => motionPreference.removeEventListener('change', syncPreference)
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <video
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      controls={false}
      disablePictureInPicture
      aria-hidden="true"
      onCanPlay={() => setReady(true)}
    >
      <source src="/videos/hero-loop.mp4" type="video/mp4" />
    </video>
  )
}
