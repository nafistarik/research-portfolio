import { LayoutWrapper } from "@/components/layout-wrapper"
import { activities } from "@/data/portfolio-data"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function ActivitiesPage() {
  return (
    <LayoutWrapper>
      <div className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-12 text-balance">Extracurricular Activities</h1>

          <div className="space-y-6">
            {activities.map((activity, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-card-foreground text-balance">{activity.title}</CardTitle>
                      <div className="mt-2 space-y-1">
                        <p className="font-medium text-card-foreground/80 text-pretty">{activity.organization}</p>
                        {activity.period && <p className="text-sm text-card-foreground/60">{activity.period}</p>}
                      </div>
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
