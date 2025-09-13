import { professionalProjects, academicProjects } from "@/data/portfolio-data"
import type { ProfessionalProject, AcademicProject } from "@/lib/types"

export function getProfessionalProjectBySlug(slug: string): ProfessionalProject | null {
  const slugToTitle: Record<string, string> = {
    "human-smuggling-coxs-bazar": "Human Smuggling in Cox's Bazar and the Wider Sub-Region",
    "land-use-mapping-satellite-images": "Land Use Mapping Using Satellite Images and Remote Sensing Technology",
    "dhaka-south-master-plan": "Integrated City Master Plan (2020-2050) of Dhaka South City Corporation",
    "fakirkhali-eco-smart-city": "Fakirkhali Eco-smart City Master Plan",
  }

  const title = slugToTitle[slug]
  if (!title) return null

  return professionalProjects.find((project) => project.title === title) || null
}

export function getAcademicProjectBySlug(slug: string): AcademicProject | null {
  const slugToTitle: Record<string, string> = {
    "traffic-delay-railway-crossing":
      "Economic Evaluation of Traffic Delay at Railway Level Crossing – Mymensingh City Corporation",
    "non-motorized-transport-puran-dhaka":
      "The Condition of Non-Motorized Transport Modes in Puran Dhaka: A Multinomial Logit Model-Based Mode Choice Behavior Analysis.",
    "climate-change-agriculture-paba":
      "Impact of Climate Change on Agriculture & Food Security – Case Study, Paba Upazila, Rajshahi",
    "landscape-design-ruet": "Landscape Design Framework for Civil Engineering Faculty, RUET",
    "terrain-analysis-coxs-bazar": "Terrain Analysis for Cox's Bazar",
  }

  const title = slugToTitle[slug]
  if (!title) return null

  return academicProjects.find((project) => project.title === title) || null
}
