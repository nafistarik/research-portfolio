import { LayoutWrapper } from "@/components/layout-wrapper"
import { training } from "@/data/portfolio-data"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function TrainingPage() {
  return (
    <LayoutWrapper>
      <div className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-12 text-balance">Training & Workshops</h1>

          <div className="space-y-4">
            {training.map((trainingItem, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-card-foreground text-balance leading-tight">
                        {trainingItem.title}
                      </CardTitle>
                      {trainingItem.provider && (
                        <p className="mt-2 font-medium text-card-foreground/80">{trainingItem.provider}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
