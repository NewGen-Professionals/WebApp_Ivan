'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'

export default function BookingCancelPage() {
  const t = useTranslations('booking')
  const locale = useLocale()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow py-20 bg-caribbean-sand/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            {/* Cancel Icon */}
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            {/* Cancel Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Booking Cancelled
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your booking was not completed. No charges have been made to your account.
            </p>

            {/* Information */}
            <div className="bg-caribbean-sand/30 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-bold text-caribbean-deep-blue mb-4">
                What would you like to do?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-caribbean-blue mr-2">•</span>
                  <span>Try booking again with different dates or tour options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caribbean-blue mr-2">•</span>
                  <span>Browse our other available tours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caribbean-blue mr-2">•</span>
                  <span>Contact us if you need assistance with your booking</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/booking`}
                className="bg-caribbean-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-caribbean-deep-blue transition-colors shadow-md"
              >
                Try Again
              </Link>
              <Link
                href={`/${locale}`}
                className="bg-gray-300 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-400 transition-colors shadow-md"
              >
                Back to Home
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-2">Need help with your booking?</p>
              <p className="text-caribbean-blue font-semibold">
                📧 info@saona-island-stars.com | 📞 +1 829 814 8619
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}




