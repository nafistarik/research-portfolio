import type React from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNavigation />

      {/* Main content area */}
      <div className="lg:pl-80">
        <main className="min-h-screen">{children}</main>
      </div>
    </div>
  )
}
