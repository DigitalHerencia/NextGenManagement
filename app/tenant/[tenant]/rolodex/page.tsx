import { RolodexSection } from "@/components/dashboard/rolodex-section"
import { getTenant } from "@/lib/multi-tenant/get-domain-tenant"
import { notFound } from "next/navigation"

export default async function RolodexPage({ params }: { params: Promise<{ tenant: string }> }) {
  const { tenant: tenantSlug } = await params
  const tenant = await getTenant(`${tenantSlug}.localhost:3000`)

  if (!tenant) {
    notFound()
  }

  return <RolodexSection tenant={tenant} />
}
