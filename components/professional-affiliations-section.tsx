import { professionalAffiliations } from "@/data/portfolio-data"
import { Card, CardContent } from "@/components/ui/card"

export function ProfessionalAffiliationsSection() {
  return (
    <section className="px-6 lg:px-12 text-center">
      <div className="mx-auto py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-balance">Professional Affiliations</h2>

        <div >
          {professionalAffiliations.map((affiliation, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-card-foreground mb-2">{affiliation.title}</h3>
                <p className="text-card-foreground/80 mb-1">{affiliation.organization}</p>
                <p className="text-sm text-card-foreground/60">ID: {affiliation.id}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
