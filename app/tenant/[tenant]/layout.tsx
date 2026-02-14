import type React from "react"
import { notFound } from "next/navigation"
import { getTenant } from "@/lib/multi-tenant/get-domain-tenant"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"

export default async function TenantLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { tenant: string }
}) {
  const tenant = await getTenant(`${params.tenant}.localhost:3000`)

  if (!tenant) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader tenant={tenant} />
      <div className="flex flex-1">
        <DashboardSidebar tenant={tenant} />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
