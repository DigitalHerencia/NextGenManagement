import { RolodexSection } from "@/components/dashboard/rolodex-section"

export default function RolodexPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <RolodexSection tenant={mockTenant} />
}
