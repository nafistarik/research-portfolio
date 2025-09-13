import { standardizedTestScores } from "@/data/portfolio-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StandardizedTestSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6 text-balance">Standardized Test Scores</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-card-foreground">IELTS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-card-foreground/70">Overall</p>
              <p className="font-semibold text-card-foreground">{standardizedTestScores.ielts.overall}</p>
            </div>
            <div>
              <p className="text-sm text-card-foreground/70">Listening</p>
              <p className="font-semibold text-card-foreground">{standardizedTestScores.ielts.listening}</p>
            </div>
            <div>
              <p className="text-sm text-card-foreground/70">Reading</p>
              <p className="font-semibold text-card-foreground">{standardizedTestScores.ielts.reading}</p>
            </div>
            <div>
              <p className="text-sm text-card-foreground/70">Writing</p>
              <p className="font-semibold text-card-foreground">{standardizedTestScores.ielts.writing}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-card-foreground/70">Speaking</p>
            <p className="font-semibold text-card-foreground">{standardizedTestScores.ielts.speaking}</p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
