import { researchInterests } from "@/data/portfolio-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ResearchInterestsSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6 text-balance">Research Interests</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-card-foreground">Areas of Interest</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {researchInterests.map((interest, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-card-foreground leading-relaxed text-pretty">{interest}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
