import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ProjectDetailProps {
  title: string
  description: string
  images: string[]
  backLink: string
  backText: string
}

export function ProjectDetail({ title, description, images, backLink, backText }: ProjectDetailProps) {
  return (
    <div className="px-6 py-16 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href={backLink}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {backText}
            </Link>
          </Button>
        </div>

        {/* Project Title */}
        <h1 className="text-4xl font-bold text-foreground mb-8 text-balance leading-tight">{title}</h1>

        {/* Project Images */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-bold text-secondary-foreground mb-6">Project Overview</h2>
          <p className="text-secondary-foreground leading-relaxed text-pretty whitespace-pre-line">{description}</p>
        </div>
      </div>
    </div>
  )
}
