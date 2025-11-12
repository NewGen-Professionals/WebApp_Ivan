'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ContactSection() {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // TODO: Implement actual contact form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-caribbean-deep-blue mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t('name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                suppressHydrationWarning
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caribbean-blue focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                suppressHydrationWarning
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caribbean-blue focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                {t('phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                suppressHydrationWarning
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caribbean-blue focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t('message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                suppressHydrationWarning
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caribbean-blue focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-caribbean-coral text-white px-8 py-4 rounded-full font-semibold hover:bg-caribbean-deep-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {status === 'sending' ? 'Sending...' : t('send')}
            </button>

            {status === 'success' && (
              <div className="text-center text-green-600 font-medium">
                Message sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="text-center text-red-600 font-medium">
                Error sending message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

