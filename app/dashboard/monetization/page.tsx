import { MonetizationSection } from "@/components/dashboard/monetization-section"

export default function MonetizationPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <MonetizationSection tenant={mockTenant} />
}
