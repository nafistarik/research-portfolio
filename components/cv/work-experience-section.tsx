import { workExperience } from "@/data/portfolio-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function WorkExperienceSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6 text-balance">Work Experience</h2>

      <Accordion type="single" collapsible className="space-y-4">
        {workExperience.map((work, index) => (
          <AccordionItem key={index} value={`work-${index}`} className="border-0">
            <Card>
              <CardHeader className="pb-3">
                <AccordionTrigger className="hover:no-underline p-0">
                  <div className="text-left">
                    <CardTitle className="text-lg text-card-foreground text-balance">{work.position}</CardTitle>
                    <p className="font-medium text-card-foreground/80 text-pretty">{work.organization}</p>
                    <p className="text-sm text-card-foreground/60">{work.period}</p>
                  </div>
                </AccordionTrigger>
              </CardHeader>

              <AccordionContent>
                <CardContent className="pt-0">
                  {work.responsibilities.length > 0 && (
                    <div>
                      <h4 className="font-medium text-card-foreground mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {work.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm text-card-foreground/80 leading-relaxed text-pretty">
                              {responsibility}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
