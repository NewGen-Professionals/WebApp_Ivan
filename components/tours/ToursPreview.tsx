'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Tour {
  id: string
  slug: string
  name: any
  shortDesc: any
  price: number
  maxCapacity: number
  category: string
  images: string[]
}

export default function ToursPreview() {
  const t = useTranslations('tours')
  const locale = useLocale()
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch tours from API
    fetch('/api/tours')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch tours')
        }
        return res.json()
      })
      .then((data) => {
        // Ensure data is an array before calling slice
        if (Array.isArray(data)) {
          setTours(data.slice(0, 3)) // Show only first 3 tours
        } else {
          console.error('API returned non-array data:', data)
          setTours([])
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching tours:', error)
        setTours([])
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-caribbean-blue mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-caribbean-deep-blue mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Tour Image */}
              <div className="relative h-64 bg-gradient-to-br from-caribbean-blue to-caribbean-turquoise">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                  🏝️
                </div>
                <div className="absolute top-4 right-4 bg-caribbean-coral text-white px-4 py-2 rounded-full font-semibold">
                  {t('from')} ${tour.price}
                </div>
              </div>

              {/* Tour Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-caribbean-blue uppercase tracking-wide">
                    {t(tour.category.toLowerCase())}
                  </span>
                  <span className="text-sm text-gray-500">
                    {t('max')} {tour.maxCapacity} {t('people')}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {tour.name[locale] || tour.name.en}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-2">
                  {tour.shortDesc[locale] || tour.shortDesc.en}
                </p>

                <Link
                  href={`/${locale}/tours/${tour.slug}`}
                  className="block w-full bg-caribbean-blue text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-caribbean-deep-blue transition-colors"
                >
                  {t('bookNow')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/tours`}
            className="inline-block bg-caribbean-coral text-white px-8 py-3 rounded-full font-semibold hover:bg-caribbean-deep-blue transition-colors shadow-lg"
          >
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  )
}

