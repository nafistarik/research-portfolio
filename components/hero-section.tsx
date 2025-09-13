import Image from "next/image"
import { heroContent } from "@/data/portfolio-data"

export function HeroSection() {
  return (
    <section className="px-6 py-16 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance">{heroContent.name}</h1>
              <p className="text-xl text-primary font-medium text-balance">{heroContent.title}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">About</h2>
              <ul className="space-y-3">
                {heroContent.aboutPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground leading-relaxed text-pretty">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/professional-headshot-of-academic-researcher.jpg"
                alt="Prosenjit Das - Professional headshot"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
