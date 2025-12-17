'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ]

  const currentLang = languages.find((lang) => lang.code === locale)

  const switchLocale = (newLocale: string) => {
    const path = pathname.split('/').slice(2).join('/')
    return `/${newLocale}/${path}`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-caribbean-blue">
              Saona Island Stars
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${locale}`}
              className="text-gray-700 hover:text-caribbean-blue transition-colors font-medium"
            >
              {t('home')}
            </Link>
            <a
              href="#tours"
              className="text-gray-700 hover:text-caribbean-blue transition-colors font-medium"
            >
              {t('tours')}
            </a>
            <Link
              href={`/${locale}#about`}
              className="text-gray-700 hover:text-caribbean-blue transition-colors font-medium"
            >
              {t('about')}
            </Link>
            <Link
              href={`/${locale}#contact`}
              className="text-gray-700 hover:text-caribbean-blue transition-colors font-medium"
            >
              {t('contact')}
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-caribbean-blue transition-colors"
              >
                <span>{currentLang?.flag}</span>
                <span className="font-medium">{currentLang?.code.toUpperCase()}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={switchLocale(lang.code)}
                      onClick={() => setIsLangOpen(false)}
                      className="flex items-center space-x-3 px-4 py-2 hover:bg-caribbean-sand transition-colors"
                    >
                      <span>{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href={`/${locale}/booking`}
              className="bg-caribbean-coral text-white px-6 py-2.5 rounded-full font-semibold hover:bg-caribbean-deep-blue transition-colors shadow-md"
            >
              {t('bookNow')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-caribbean-blue"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href={`/${locale}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-caribbean-blue transition-colors font-medium"
              >
                {t('home')}
              </Link>
              <a
                href="#tours"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-caribbean-blue transition-colors font-medium"
              >
                {t('tours')}
              </a>
              <Link
                href={`/${locale}#about`}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-caribbean-blue transition-colors font-medium"
              >
                {t('about')}
              </Link>
              <Link
                href={`/${locale}#contact`}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-caribbean-blue transition-colors font-medium"
              >
                {t('contact')}
              </Link>

              {/* Mobile Language Selector */}
              <div className="pt-2 border-t border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Language</div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={switchLocale(lang.code)}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border ${
                        lang.code === locale
                          ? 'bg-caribbean-blue text-white border-caribbean-blue'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-caribbean-blue'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.code.toUpperCase()}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={`/${locale}/booking`}
                onClick={() => setIsMenuOpen(false)}
                className="bg-caribbean-coral text-white px-6 py-2.5 rounded-full font-semibold hover:bg-caribbean-deep-blue transition-colors text-center shadow-md"
              >
                {t('bookNow')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

