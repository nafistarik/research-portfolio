import Image from "next/image"
import { featuredWorks } from "@/data/portfolio-data"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedWorksSection() {
  return (
    <section className="px-6 lg:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-secondary-foreground mb-12 text-balance">Featured Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => {
            const firstImage = Array.isArray(work.image) ? work.image[0] : work.image

            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={firstImage || "/placeholder.svg"}
                      alt={work.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-card-foreground leading-tight text-balance">{work.name}</h3>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
