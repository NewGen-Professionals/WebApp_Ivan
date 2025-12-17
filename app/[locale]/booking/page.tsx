'use client'

import { useTranslations } from 'next-intl'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'

export default function BookingPage() {
  const t = useTranslations('booking')

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow py-20 bg-caribbean-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-caribbean-deep-blue mb-12">
            {t('title')}
          </h1>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4 min-h-[700px]">
            {/* 
              TODO: Replace the src below with your actual Cal.com event link
              Example: src="https://cal.com/ivans-tours/saona-excursion"
            */}
            <iframe 
              src="https://cal.com/ivan-baez-vrnunf/saona-island-excursion?embed=true&brandColor=%23006994&theme=light"
              style={{ width: "100%", height: "100%", minHeight: "700px", border: "none", borderRadius: "8px" }}
              title="Book your tour"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
