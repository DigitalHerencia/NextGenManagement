import type React from "react"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { getTenant } from "@/lib/multi-tenant/get-domain-tenant"
import { notFound } from "next/navigation"

export default async function TenantLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ tenant: string }>
}) {
  const { tenant: tenantSlug } = await params
  const tenant = await getTenant(`${tenantSlug}.localhost:3000`)

  if (!tenant) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader tenant={tenant} />
      <div className="flex flex-1">
        <DashboardSidebar tenant={tenant} />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
