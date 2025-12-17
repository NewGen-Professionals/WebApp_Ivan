import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import HeroSection from '@/components/ui/HeroSection'
import BenefitsSection from '@/components/ui/BenefitsSection'
import ToursPreview from '@/components/tours/ToursPreview'
import TestimonialsSection from '@/components/ui/TestimonialsSection'
import BookingSection from '@/components/ui/BookingSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ToursPreview />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  )
}

