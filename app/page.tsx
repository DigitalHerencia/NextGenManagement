import { CallToAction } from "@/components/landing/call-to-action"
import { FeaturesSection } from "@/components/landing/features-section"
import { HeroSection } from "@/components/landing/hero-section"
import { LandingFooter } from "@/components/landing/landing-footer"
import { LandingHeader } from "@/components/landing/landing-header"
import { PricingSection } from "@/components/landing/pricing-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-black px-3 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:ring-2 focus:ring-[#00ffff]"
      >
        Skip to main content
      </a>
      <LandingHeader />
      <main id="main-content" className="landing-scroll flex-1">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <LandingFooter />
    </div>
  )
}
