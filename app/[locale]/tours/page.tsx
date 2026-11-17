'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { TOURS } from '@/lib/tours'

export default function ToursPage() {
  const t = useTranslations('tours')
  const tBooking = useTranslations('booking')
  const locale = useLocale()
  const searchParams = useSearchParams()
  const tourSlug = searchParams.get('tour')

  const [formData, setFormData] = useState({
    tourId: '1', // Auto-select the only tour
    bookingDate: '',
    numberOfPeople: 2,
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    specialRequests: ''
  })

  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)

  const minDate = new Date()
  minDate.setDate(minDate.getDate() + 1)
  const minDateString = minDate.toISOString().split('T')[0]

  // Single excursion available
  const tours = [
    {
      id: '1',
      slug: 'saona-island-excursion',
      name: {
        en: 'Saona Island Excursion',
        es: 'Excursión a la Isla Saona',
        fr: 'Excursion à l\'île de Saona',
        de: 'Ausflug zur Insel Saona'
      },
      shortDesc: {
        en: 'Discover the natural beauty of Saona Island, the Dominican Republic\'s most important protected biosphere.',
        es: 'Descubre la belleza natural de la Isla Saona, la biosfera protegida más importante de la República Dominicana.',
        fr: 'Découvrez la beauté naturelle de l&apos;île de Saona, la biosphère protégée la plus importante de la République dominicaine.',
        de: 'Entdecken Sie die natürliche Schönheit der Insel Saona, dem wichtigsten geschützten Biosphärenreservat der Dominikanischen Republik.'
      },
      description: {
        en: {
          overview: 'Encounter the natural beauty and inspiration of the most important protected biosphere in the Dominican Republic with the best tour of Saona Island. Travel by speedboat and catamaran along the southeastern coast of Bayahibe for more than a simple trip to one of the top white-sand beaches in the world.',
          activities: [
            'Head to the hidden Saona Island from Bayahibe aboard a thrilling speedboat or a cruising catamaran',
            'Take a dip near a sandbar and enjoy a nice swim in natural pools',
            'Move your feet with dance lessons on the white sands of Saona Beach',
            'Enjoy beach volleyball and relaxation activities',
            'Indulge in a traditional Dominican buffet lunch',
            'Return to Bayahibe by catamaran or speedboat, the opposite of what brought you to Saona'
          ],
          included: [
            'Round-trip transportation',
            'Open bar on Saona Island including water, soft drinks, beer, rum and coffee',
            'Buffet lunch on Saona Island',
            'Hotel pick-up and drop off included'
          ],
          notices: [
            'Activity duration: 8 hours (not including transportation time to and from activity)',
            'Guests may travel to the island by catamaran and return by speedboat or vice-versa, depending on the operations of the day',
            'Wear comfortable clothes and beach sandals. Bring your bathing suit, sunscreen, a beach towel, sunglasses and camera'
          ]
        },
        es: {
          overview: 'Encuentra la belleza natural e inspiración de la biosfera protegida más importante de la República Dominicana con el mejor tour de la Isla Saona. Viaja en lancha rápida y catamarán a lo largo de la costa sureste de Bayahibe para algo más que un simple viaje a una de las mejores playas de arena blanca del mundo.',
          activities: [
            'Dirígete a la Isla Saona desde Bayahibe a bordo de una emocionante lancha rápida o un catamarán de crucero',
            'Date un chapuzón cerca de un banco de arena y disfruta de un buen baño en piscinas naturales',
            'Mueve los pies con lecciones de baile en las arenas blancas de la Playa Saona',
            'Disfruta de voleibol playero y actividades de relajación',
            'Disfruta de un tradicional almuerzo buffet dominicano',
            'Regresa a Bayahibe en catamarán o lancha rápida, lo opuesto a lo que te llevó a Saona'
          ],
          included: [
            'Transporte de ida y vuelta con aire acondicionado',
            'Barra libre en la Isla Saona incluyendo agua, refrescos, cerveza, ron y café',
            'Almuerzo buffet en la Isla Saona',
            'Recogida y regreso al hotel incluido'
          ],
          notices: [
            'Duración de la actividad: 8 horas (sin incluir el tiempo de transporte hacia y desde la actividad)',
            'Los huéspedes pueden viajar a la isla en catamarán y regresar en lancha rápida o viceversa, dependiendo de las operaciones del día',
            'Usa ropa cómoda y sandalias de playa. Trae tu traje de baño, protector solar, toalla de playa, gafas de sol y cámara'
          ]
        },
        fr: {
          overview: 'Rencontrez la beauté naturelle et l&apos;inspiration de la biosphère protégée la plus importante de la République dominicaine avec le meilleur tour de l&apos;île de Saona. Voyagez en bateau rapide et catamaran le long de la côte sud-est de Bayahibe pour bien plus qu&apos;un simple voyage vers l&apos;une des meilleures plages de sable blanc au monde.',
          activities: [
            'Rendez-vous sur l&apos;île cachée de Saona depuis Bayahibe à bord d&apos;un bateau rapide palpitant ou d&apos;un catamaran de croisière',
            'Plongez près d&apos;un banc de sable et profitez d&apos;une belle baignade dans des piscines naturelles',
            'Bougez vos pieds avec des cours de danse sur les sables blancs de la plage de Saona',
            'Profitez du beach-volley et des activités de détente',
            'Savourez un déjeuner buffet traditionnel dominicain',
            'Retournez à Bayahibe en catamaran ou bateau rapide, l&apos;opposé de ce qui vous a amené à Saona'
          ],
          included: [
            'Transport aller-retour climatisé',
            'Bar ouvert sur l&apos;île de Saona incluant eau, boissons gazeuses, bière, rhum et café',
            'Déjeuner buffet sur l&apos;île de Saona',
            'Ramassage et retour à l&apos;hôtel inclus'
          ],
          notices: [
            'Durée de l&apos;activité: 8 heures (sans inclure le temps de transport vers et depuis l&apos;activité)',
            'Les invités peuvent voyager vers l&apos;île en catamaran et retourner en bateau rapide ou vice-versa, selon les opérations du jour',
            'Portez des vêtements confortables et des sandales de plage. Apportez votre maillot de bain, crème solaire, serviette de plage, lunettes de soleil et appareil photo'
          ]
        },
        de: {
          overview: 'Begegnen Sie der natürlichen Schönheit und Inspiration des wichtigsten geschützten Biosphärenreservats der Dominikanischen Republik mit der besten Tour zur Insel Saona. Reisen Sie mit Schnellboot und Katamaran entlang der südöstlichen Küste von Bayahibe für mehr als eine einfache Reise zu einem der besten weißen Sandstrände der Welt.',
          activities: [
            'Fahren Sie zur versteckten Insel Saona von Bayahibe an Bord eines aufregenden Schnellboots oder eines Kreuzfahrt-Katamarans',
            'Nehmen Sie ein Bad in der Nähe einer Sandbank und genießen Sie ein schönes Schwimmen in natürlichen Pools',
            'Bewegen Sie Ihre Füße mit Tanzstunden auf den weißen Sandstränden von Saona Beach',
            'Genießen Sie Beachvolleyball und Entspannungsaktivitäten',
            'Gönnen Sie sich ein traditionelles dominikanisches Buffet-Mittagessen',
            'Kehren Sie nach Bayahibe mit Katamaran oder Schnellboot zurück, das Gegenteil von dem, was Sie nach Saona gebracht hat'
          ],
          included: [
            'Hin- und Rückfahrt mit klimatisiertem Transport',
            'Offene Bar auf der Insel Saona einschließlich Wasser, Softdrinks, Bier, Rum und Kaffee',
            'Buffet-Mittagessen auf der Insel Saona',
            'Hotelabholung und Rückfahrt inbegriffen'
          ],
          notices: [
            'Aktivitätsdauer: 8 Stunden (ohne Transportzeit zur und von der Aktivität)',
            'Gäste können mit dem Katamaran zur Insel fahren und mit dem Schnellboot zurückkehren oder umgekehrt, je nach Tagesbetrieb',
            'Tragen Sie bequeme Kleidung und Strandsandalen. Bringen Sie Ihren Badeanzug, Sonnencreme, Strandtuch, Sonnenbrille und Kamera mit'
          ]
        }
      },
      price: TOURS['saona-island-excursion'].price,
      duration: 'Full Day',
      maxCapacity: TOURS['saona-island-excursion'].maxCapacity,
      category: 'Party',
      features: {
        en: ['Speedboat & catamaran', 'Natural pool swimming', 'Beach volleyball & dancing', 'Buffet lunch & open bar'],
        es: ['Lancha rápida y catamarán', 'Natación en piscinas naturales', 'Voleibol playero y baile', 'Almuerzo buffet y barra libre'],
        fr: ['Bateau rapide et catamaran', 'Natation en piscines naturelles', 'Beach-volley et danse', 'Déjeuner buffet et bar ouvert'],
        de: ['Schnellboot und Katamaran', 'Schwimmen in natürlichen Pools', 'Beachvolleyball und Tanzen', 'Buffet-Mittagessen und offene Bar']
      }
    }
  ]

  const selectedTour = tours.find(t => t.id === formData.tourId)

  useEffect(() => {
    // Auto-select the tour if not already selected
    if (!formData.tourId && tours.length > 0) {
      setFormData(prev => ({ ...prev, tourId: tours[0].id }))
    }
  }, [])

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      handleNext()
    } else {
      setIsProcessing(true)
      
      try {
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tourPrice: selectedTour?.price,
            numberOfPeople: formData.numberOfPeople,
            customerEmail: formData.customerEmail,
            customerName: formData.customerName,
            tourSlug: selectedTour?.slug,
            locale,
          }),
        })

        const data = await response.json()

        if (data.url) {
          window.location.href = data.url
        } else {
          const errorMsg = data.error || 'Failed to create checkout session'
          
          if (errorMsg.includes('not configured') || errorMsg.includes('STRIPE_SECRET_KEY')) {
            alert('⚠️ Payment System Setup Required\n\nThe payment system needs to be configured by the administrator.\n\nPlease contact support:\n📧 info@saona-island-stars.com\n📞 +1 829 814 8619')
          } else {
            alert('Payment Error: ' + errorMsg + '\n\nPlease try again or contact support.')
          }
          
          throw new Error(errorMsg)
        }
      } catch (error: any) {
        console.error('Payment error:', error)
        setIsProcessing(false)
      }
    }
  }

  const totalAmount = selectedTour ? selectedTour.price * formData.numberOfPeople : 0

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-r from-caribbean-blue to-caribbean-turquoise py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">{t('title')}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience the ultimate Saona Island adventure
            </p>
          </div>
        </section>

        {/* Tours Content - Two Column Layout */}
        <section className="py-16 bg-caribbean-sand/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Tour Details */}
              <div className="lg:col-span-2">
                {tours.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg"
                  >
                    {/* Tour Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={`/images/island pic ${tour.id}.png`}
                        alt={tour.name[locale as keyof typeof tour.name] || tour.name.en}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 672px"
                      />
                      <div className="absolute top-4 right-4 bg-caribbean-coral text-white px-4 py-2 rounded-full font-semibold shadow-lg z-10">
                        ${tour.price}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-caribbean-deep-blue px-4 py-2 rounded-full font-semibold text-sm z-10">
                        {tour.duration}
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
                        {tour.name[locale as keyof typeof tour.name] || tour.name.en}
                      </h3>

                      {/* Overview */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {tour.shortDesc[locale as keyof typeof tour.shortDesc] || tour.shortDesc.en}
                      </p>

                      {/* Description Content */}
                      {tour.description && (() => {
                        const desc = tour.description[locale as keyof typeof tour.description] || tour.description.en
                        return (
                          <div className="space-y-4">
                            {/* Overview */}
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {desc.overview}
                            </p>

                            {/* Activities */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 text-sm">What You&apos;ll Do:</h4>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-2">
                                {desc.activities.map((activity: string, idx: number) => (
                                  <li key={idx}>{activity}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Included */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Included:</h4>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-2">
                                {desc.included.map((item: string, idx: number) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Notices */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Important Information:</h4>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-2">
                                {desc.notices.map((notice: string, idx: number) => (
                                  <li key={idx}>{notice}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )
                      })()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Booking Form */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm text-gray-600">From</span>
                      <span className="text-3xl font-bold text-caribbean-deep-blue">${tours[0]?.price || 99}</span>
                      <span className="text-sm text-gray-600">USD</span>
                    </div>
                    <p className="text-xs text-gray-500">Price per Passenger</p>
                  </div>

                  <form onSubmit={handleSubmit} suppressHydrationWarning>
                    {/* Step 1: Select Date & People */}
                    {step === 1 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {tBooking('selectDate')} *
                          </label>
                          <input
                            type="date"
                            value={formData.bookingDate}
                            onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                            min={minDateString}
                            required
                            suppressHydrationWarning
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caribbean-blue focus:border-transparent cursor-pointer"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {tBooking('numberOfPeople')} *
                          </label>
                          <input
                            type="number"
                            value={formData.numberOfPeople}
                            onChange={(e) => setFormData({ ...formData, numberOfPeople: parseInt(e.target.value) })}
                            min="1"
                            max="20"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caribbean-blue focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 2: Customer Details */}
                    {step === 2 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {tBooking('fullName')} *
                          </label>
                          <input
                            type="text"
                            value={formData.customerName}
                            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                            required
                            suppressHydrationWarning
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caribbean-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {tBooking('emailAddress')} *
                          </label>
                          <input
                            type="email"
                            value={formData.customerEmail}
                            onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                            required
                            suppressHydrationWarning
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caribbean-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {tBooking('phoneNumber')}
                          </label>
                          <input
                            type="tel"
                            value={formData.customerPhone}
                            onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                            suppressHydrationWarning
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caribbean-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {tBooking('specialRequests')}
                          </label>
                          <textarea
                            value={formData.specialRequests}
                            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                            rows={3}
                            suppressHydrationWarning
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caribbean-blue focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 3: Summary */}
                    {step === 3 && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-caribbean-deep-blue mb-4">
                          {tBooking('bookingSummary')}
                        </h3>
                        <div className="bg-caribbean-sand/30 p-4 rounded-lg space-y-2 text-sm">
                          <p>
                            <span className="font-semibold">{tBooking('tour')}:</span>{' '}
                            {selectedTour?.name[locale as keyof typeof selectedTour.name] || selectedTour?.name.en}
                          </p>
                          <p>
                            <span className="font-semibold">{tBooking('date')}:</span>{' '}
                            {formData.bookingDate || 'N/A'}
                          </p>
                          <p>
                            <span className="font-semibold">{tBooking('guests')}:</span> {formData.numberOfPeople}
                          </p>
                          <p className="text-lg font-bold text-caribbean-coral pt-2">
                            {tBooking('total')}: ${totalAmount.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex flex-col gap-3 mt-6">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={handleBack}
                          className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-400 transition-colors"
                        >
                          Back
                        </button>
                      )}
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className={`w-full px-6 py-3 rounded-full font-semibold transition-colors ${
                          isProcessing 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-caribbean-blue text-white hover:bg-caribbean-deep-blue'
                        }`}
                      >
                        {isProcessing ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          step < 3 ? tBooking('next') : tBooking('confirmAndPay')
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}



