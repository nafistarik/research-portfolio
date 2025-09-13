import { LayoutWrapper } from "@/components/layout-wrapper"
import { HeroSection } from "@/components/hero-section"
import { FeaturedWorksSection } from "@/components/featured-works-section"
import { ProfessionalAffiliationsSection } from "@/components/professional-affiliations-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <LayoutWrapper>
      <div className="space-y-16 pb-16">
        <HeroSection />
        <FeaturedWorksSection />
        <ProfessionalAffiliationsSection />
        <ContactSection />
      </div>
    </LayoutWrapper>
  )
}
