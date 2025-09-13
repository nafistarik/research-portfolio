"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface MenuItem {
  title: string
  href?: string
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "CV",
    href: "/cv",
  },
  {
    title: "Research",
    children: [
      {
        title: "Research Experience",
        href: "/research/experience",
      },
      {
        title: "Research Articles",
        href: "/research/articles",
      },
    ],
  },
  {
    title: "Professional Experience",
    children: [
      {
        title: "Work Experience",
        href: "/work-experience",
      },
    ],
  },
  {
    title: "Professional Projects",
    children: [
      {
        title: "Human Smuggling in Cox's Bazar and the Wider Sub-Region",
        href: "/projects/professional/human-smuggling-coxs-bazar",
      },
      {
        title: "LULC Mapping Using Satellite Images and Remote Sensing Technology",
        href: "/projects/professional/land-use-mapping-satellite-images",
      },
      {
        title: "Integrated City Master Plan (2020-2050) of Dhaka South City Corporation",
        href: "/projects/professional/dhaka-south-master-plan",
      },
      {
        title: "Fakirkhali Eco-smart City Master Plan",
        href: "/projects/professional/fakirkhali-eco-smart-city",
      },
    ],
  },
  {
    title: "Academic Projects",
    children: [
      {
        title: "Economic Evaluation of Traffic Delay at Railway Level Crossing",
        href: "/projects/academic/traffic-delay-railway-crossing",
      },
      {
        title:
          "A Multinomial Logit Model-Based Mode Choice Behavior Analysis.",
        href: "/projects/academic/non-motorized-transport-puran-dhaka",
      },
      {
        title: "Impact of Climate Change on Agriculture & Food Security",
        href: "/projects/academic/climate-change-agriculture-paba",
      },
      {
        title: "Landscape Design Framework for Civil Engineering Faculty, RUET",
        href: "/projects/academic/landscape-design-ruet",
      },
      {
        title: "Terrain Analysis for Cox's Bazar",
        href: "/projects/academic/terrain-analysis-coxs-bazar",
      },
    ],
  },
  {
    title: "Skillsets/Awards/Extra curricular Activities",
    children: [
      {
        title: "Skillsets",
        href: "/skills",
      },
      {
        title: "Awards & Scholarship",
        href: "/awards",
      },
      {
        title: "Extra curricular Activities",
        href: "/activities",
      },
      {
        title: "Training and workshop",
        href: "/training",
      },
    ],
  },
]

interface SidebarItemProps {
  item: MenuItem
  level?: number
  onItemClick?: () => void
}

function SidebarItem({ item, level = 0, onItemClick }: SidebarItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isActive = item.href === pathname
  const hasChildren = item.children && item.children.length > 0

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen)
    } else if (onItemClick) {
      onItemClick()
    }
  }

  return (
    <div className="w-full">
      {item.href ? (
        <Link
          href={item.href}
          onClick={onItemClick}
          className={cn(
            "flex items-center justify-between w-full px-3 py-2 text-sm rounded-md transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            level > 0 && "ml-4 text-xs",
            isActive && "bg-sidebar-accent text-sidebar-accent-foreground font-medium",
          )}
        >
          <span className="text-balance leading-tight">{item.title}</span>
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={cn(
            "flex items-center justify-between w-full px-3 py-2 text-sm rounded-md transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-left",
            level > 0 && "ml-4 text-xs",
          )}
        >
          <span className="text-balance leading-tight">{item.title}</span>
          {hasChildren && (
            <div className="flex-shrink-0 ml-2">
              {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </div>
          )}
        </button>
      )}

      {hasChildren && isOpen && (
        <div className="mt-1 space-y-1">
          {item.children?.map((child, index) => (
            <SidebarItem key={index} item={child} level={level + 1} onItemClick={onItemClick} />
          ))}
        </div>
      )}
    </div>
  )
}

interface SidebarContentProps {
  onItemClick?: () => void
}

function SidebarContent({ onItemClick }: SidebarContentProps) {
  return (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-lg font-semibold text-balance">Prosenjit Das</h2>
        <p className="text-sm text-sidebar-foreground/80 mt-1">GIS Researcher | Urban Planner</p>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item, index) => (
          <SidebarItem key={index} item={item} onItemClick={onItemClick} />
        ))}
      </nav>
    </div>
  )
}

export function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-sm border border-border"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <SidebarContent onItemClick={() => setIsOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0">
        <SidebarContent />
      </div>
    </>
  )
}
