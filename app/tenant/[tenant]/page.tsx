import { getTenant } from "@/lib/multi-tenant/get-domain-tenant"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { notFound } from "next/navigation"

export default async function TenantDashboard({
  params,
}: {
  params: { tenant: string }
}) {
  const tenant = await getTenant(`${params.tenant}.localhost:3000`)

  if (!tenant) {
    notFound()
  }

  return <DashboardOverview tenant={tenant} />
}
