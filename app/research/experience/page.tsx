import { LayoutWrapper } from "@/components/layout-wrapper"
import { researchExperience } from "@/data/portfolio-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResearchExperiencePage() {
  return (
    <LayoutWrapper>
      <div className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-12 text-balance">Research Experience</h1>

          <div className="space-y-6">
            {researchExperience.map((research, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground text-balance">{research.project}</CardTitle>
                  <div className="space-y-1">
                    <p className="font-medium text-card-foreground/80">{research.position}</p>
                    <p className="text-sm text-card-foreground/60">
                      {research.organization} • {research.period}
                    </p>
                  </div>
                </CardHeader>

                {research.description && (
                  <CardContent>
                    <p className="text-card-foreground/80 leading-relaxed text-pretty">{research.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
