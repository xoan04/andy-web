import LandingHeader from "@/components/landing/landing-header"
import HeroSection from "@/components/landing/hero-section"
import FeaturesSection from "@/components/landing/features-section"
import CoursesCarousel from "@/components/landing/courses-carousel"
import TestimonialsSection from "@/components/landing/testimonials-section"
import PartnersSection from "@/components/landing/partners-section"
import CtaSection from "@/components/landing/cta-section"
import LandingFooter from "@/components/landing/landing-footer"

export default function LandingPage() {
  return (
    <main>
      <LandingHeader />
      <HeroSection />
      <FeaturesSection />
      <CoursesCarousel />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
      <LandingFooter />
    </main>
  )
}
