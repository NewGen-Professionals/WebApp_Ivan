'use client'

import { useTranslations } from 'next-intl'

export default function BookingSection() {
  const t = useTranslations('booking')

  return (
    <section id="book-now" className="py-20 bg-caribbean-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-caribbean-deep-blue mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your date and book your Saona Island adventure instantly
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-4 min-h-[700px]">
          <iframe 
            src="https://cal.com/ivan-baez-vrnunf/saona-island-excursion?embed=true&brandColor=%23006994&theme=light"
            style={{ width: "100%", height: "100%", minHeight: "700px", border: "none", borderRadius: "8px" }}
            title="Book your tour"
          />
        </div>
      </div>
    </section>
  )
}


