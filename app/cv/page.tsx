import { LayoutWrapper } from "@/components/layout-wrapper"
import { EducationSection } from "@/components/cv/education-section"
import { WorkExperienceSection } from "@/components/cv/work-experience-section"
import { StandardizedTestSection } from "@/components/cv/standardized-test-section"
import { ResearchInterestsSection } from "@/components/cv/research-interests-section"

export default function CVPage() {
  return (
    <LayoutWrapper>
      <div className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-12 text-balance">Curriculum Vitae</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-12">
              <EducationSection />
              <StandardizedTestSection />
              <ResearchInterestsSection />
            </div>

            {/* Right Column */}
            <div>
              <WorkExperienceSection />
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
