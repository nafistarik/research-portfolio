import { LayoutWrapper } from "@/components/layout-wrapper"
import { skills } from "@/data/portfolio-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsPage() {
  return (
    <LayoutWrapper>
      <div className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-12 text-balance">Skillsets</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillCategory, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground text-balance">{skillCategory.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
