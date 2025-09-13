import { education } from "@/data/portfolio-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6 text-balance">Education</h2>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-card-foreground text-balance">{edu.degree}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium text-card-foreground text-pretty">{edu.institution}</p>
              <p className="text-sm text-card-foreground/70">{edu.period}</p>
              <p className="text-sm text-card-foreground/80 font-medium">CGPA: {edu.cgpa}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
