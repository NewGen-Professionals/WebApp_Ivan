'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/island pic 1.png')",
          }}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/saona drone view.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-caribbean-deep-blue/60 via-caribbean-blue/40 to-caribbean-turquoise/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          {t('title')}
        </h1>
        <p className="text-2xl sm:text-3xl text-white mb-4 font-semibold drop-shadow-md">
          {t('subtitle')}
        </p>
        <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow">
          {t('description')}
        </p>
        <a
          href="#tours"
          className="inline-block bg-caribbean-coral text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-caribbean-deep-blue transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
        >
          {t('cta')}
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

