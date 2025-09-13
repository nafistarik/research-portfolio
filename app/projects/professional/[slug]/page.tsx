import { notFound } from "next/navigation"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { ProjectDetail } from "@/components/project-detail"
import { getProfessionalProjectBySlug } from "@/lib/project-utils"

interface ProfessionalProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProfessionalProjectPage({ params }: ProfessionalProjectPageProps) {
  const project = getProfessionalProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <LayoutWrapper>
      <ProjectDetail
        title={project.title}
        description={project.description}
        images={project.images}
        backLink="/work-experience"
        backText="Back to Professional Experience"
      />
    </LayoutWrapper>
  )
}

export function generateStaticParams() {
  return [
    { slug: "human-smuggling-coxs-bazar" },
    { slug: "land-use-mapping-satellite-images" },
    { slug: "dhaka-south-master-plan" },
    { slug: "fakirkhali-eco-smart-city" },
  ]
}
