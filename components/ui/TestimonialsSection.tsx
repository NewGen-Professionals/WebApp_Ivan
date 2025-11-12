'use client'

import { useTranslations } from 'next-intl'

export default function TestimonialsSection() {
  const t = useTranslations('testimonials')

  const testimonials = [
    {
      name: 'Anna B.',
      rating: 5,
      title: 'Stunning excursion to Saona',
      text: 'I can highly recommend the Saona tour to anyone who loves the nature and the good tour guides. I learned a lot about the country, the island and its inhabitants, politics, gastronomy and nature. The beaches really left me open-mouthed and we had enough time to enjoy it all.',
    },
    {
      name: 'Brigitte',
      rating: 5,
      title: 'Dream day in Saona',
      text: 'We booked the Saona Exclusive Tour and we were not disappointed. In a small group of 8 people took a speedboat to Saona Island and explored the beaches of dream and the fishing village. We were alone almost everywhere except in the fishing village.',
    },
    {
      name: 'Melina S.',
      rating: 5,
      title: 'Absolute recommendation!',
      text: 'We did the Saona tour and we were absolutely delighted! The places are super beautiful, you always have enough time to look at everything and take photos and the company was especially great. The atmosphere in the group was lively and there was plenty of food and drink during all day long.',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-caribbean-sand/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-caribbean-deep-blue mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-caribbean-deep-blue mb-3">
                {testimonial.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 mb-4 leading-relaxed">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-caribbean-blue rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

