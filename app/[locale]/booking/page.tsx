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
          <h1 className="text-4xl font-bold text-center text-caribbean-deep-blue mb-12 mt-12">
            {t('title')}
          </h1>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-2 min-h-[700px] border border-caribbean-sand/30">
            <iframe 
              src="https://cal.com/ivan-baez-vrnunf/saona-island-excursion?embed=true&brandColor=%230369A1&theme=light&hideEventTypeDetails=false"
              style={{ width: "100%", height: "100%", minHeight: "700px", border: "none", borderRadius: "12px" }}
              title="Book your tour"
              className="w-full"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
