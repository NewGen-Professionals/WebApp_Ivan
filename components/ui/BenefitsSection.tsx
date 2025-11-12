'use client'

import { useTranslations } from 'next-intl'

export default function BenefitsSection() {
  const t = useTranslations('benefits')

  const benefits = [
    {
      icon: '💰',
      title: t('allInclusive'),
      description: t('allInclusiveDesc'),
    },
    {
      icon: '⭐',
      title: t('exclusive'),
      description: t('exclusiveDesc'),
    },
    {
      icon: '👥',
      title: t('personalized'),
      description: t('personalizedDesc'),
    },
    {
      icon: '🔄',
      title: t('flexibility'),
      description: t('flexibilityDesc'),
    },
  ]

  return (
    <section className="py-20 bg-caribbean-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-caribbean-deep-blue mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-caribbean-deep-blue mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

