import { getTenant } from "@/lib/multi-tenant/get-domain-tenant"
import { RolodexSection } from "@/components/dashboard/rolodex-section"
import { notFound } from "next/navigation"

export default async function RolodexPage({
  params,
}: {
  params: { tenant: string }
}) {
  const tenant = await getTenant(`${params.tenant}.localhost:3000`)

  if (!tenant) {
    notFound()
  }

  return <RolodexSection tenant={tenant} />
}
