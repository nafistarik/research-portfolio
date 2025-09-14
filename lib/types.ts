import { StaticImageData } from "next/image"

export interface PersonalInfo {
  name: string
  email: string[]
  linkedin: string
  researchGate: string
  phone: string
}

export interface Education {
  period: string
  institution: string
  degree: string
  cgpa: string
}

export interface WorkExperience {
  period: string
  organization: string
  position: string
  responsibilities: string[]
}

export interface ResearchExperience {
  period: string
  position: string
  organization: string
  project: string
  description?: string
}

export interface ResearchArticle {
  title: string
  presentedAt?: string
  publishedAt?: string
  date: string
  location?: string
  DOI?: string
  href?: string
}

export interface FeaturedWork {
  title: string
  image: string | string[] | StaticImageData
  description?: string
  slug?: string
}

export interface ProfessionalAffiliation {
  title: string
  organization: string
  id: string
}

export interface ProfessionalProject {
  title: string
  description: string
  images: string[]
}

export interface AcademicProject {
  title: string
  description: string
  images: string[] | StaticImageData[]
}

export interface Award {
  title: string
  year: string
  organization: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Activity {
  title: string
  organization: string
  period?: string
}

export interface Training {
  title: string
  provider?: string
}

export interface StandardizedTestScores {
  ielts: {
    overall: number
    listening: number
    reading: number
    writing: number
    speaking: number
  }
}
