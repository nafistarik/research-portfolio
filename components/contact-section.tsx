import { personalInfo } from "@/data/portfolio-data"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, BookOpen } from "lucide-react"

export function ContactSection() {
  return (
    <section className="px-6 lg:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-secondary-foreground mb-12 text-balance">Contact Information</h2>

        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <div className="space-y-1">
                      {personalInfo.email.map((email, index) => (
                        <p key={index} className="text-card-foreground/80">
                          {email}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <p className="text-card-foreground/80">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">LinkedIn</p>
                    <p className="text-card-foreground/80">{personalInfo.linkedin}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">ResearchGate</p>
                    <p className="text-card-foreground/80">{personalInfo.researchGate}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
