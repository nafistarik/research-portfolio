import { notFound } from "next/navigation"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { ProjectDetail } from "@/components/project-detail"
import { getAcademicProjectBySlug } from "@/lib/project-utils"

interface AcademicProjectPageProps {
  params: {
    slug: string
  }
}

export default function AcademicProjectPage({ params }: AcademicProjectPageProps) {
  const project = getAcademicProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <LayoutWrapper>
      <ProjectDetail
        title={project.title}
        description={project.description}
        images={project.images}
        backLink="/research/experience"
        backText="Back to Research"
      />
    </LayoutWrapper>
  )
}

export function generateStaticParams() {
  return [
    { slug: "traffic-delay-railway-crossing" },
    { slug: "non-motorized-transport-puran-dhaka" },
    { slug: "climate-change-agriculture-paba" },
    { slug: "landscape-design-ruet" },
    { slug: "terrain-analysis-coxs-bazar" },
  ]
}
