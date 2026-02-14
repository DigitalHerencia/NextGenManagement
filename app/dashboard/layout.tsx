import type React from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader tenant={mockTenant} />
      <div className="flex flex-1">
        <DashboardSidebar tenant={mockTenant} />
        <main className="flex-1 p-6 overflow-auto bg-black">{children}</main>
      </div>
    </div>
  )
}
