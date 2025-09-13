import { LayoutWrapper } from "@/components/layout-wrapper"
import { WorkExperienceSection } from "@/components/cv/work-experience-section"

export default function WorkExperiencePage() {
  return (
    <LayoutWrapper>
      <div className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-12 text-balance">Professional Work Experience</h1>
          <WorkExperienceSection />
        </div>
      </div>
    </LayoutWrapper>
  )
}
