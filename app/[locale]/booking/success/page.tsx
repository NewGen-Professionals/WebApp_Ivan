'use client'

import { useEffect, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'

export default function BookingSuccessPage() {
  const t = useTranslations('booking')
  const locale = useLocale()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate verification delay
    setTimeout(() => setLoading(false), 1500)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-caribbean-blue mx-auto mb-4"></div>
            <p className="text-gray-600">Verifying your payment...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow py-20 bg-caribbean-sand/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-caribbean-deep-blue mb-4">
              Booking Confirmed! 🎉
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your booking! Your payment has been processed successfully.
            </p>

            {/* Booking Details */}
            <div className="bg-caribbean-sand/30 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-bold text-caribbean-deep-blue mb-4">
                What happens next?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-caribbean-blue mr-2">✓</span>
                  <span>You will receive a confirmation email with all booking details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caribbean-blue mr-2">✓</span>
                  <span>Our team will contact you 24-48 hours before your tour</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caribbean-blue mr-2">✓</span>
                  <span>We&apos;ll confirm pickup time and location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caribbean-blue mr-2">✓</span>
                  <span>Keep your booking reference number for check-in</span>
                </li>
              </ul>
            </div>

            {sessionId && (
              <div className="mb-8">
                <p className="text-sm text-gray-500">
                  Booking Reference: <span className="font-mono font-semibold">{sessionId.slice(-12)}</span>
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}`}
                className="bg-caribbean-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-caribbean-deep-blue transition-colors shadow-md"
              >
                Back to Home
              </Link>
              <Link
                href={`/${locale}/booking`}
                className="bg-caribbean-coral text-white px-8 py-3 rounded-full font-semibold hover:bg-caribbean-deep-blue transition-colors shadow-md"
              >
                Book Another Tour
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




