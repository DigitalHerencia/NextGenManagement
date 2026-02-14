import { WellnessSection } from "@/components/dashboard/wellness-section-new"

export default function WellnessPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <WellnessSection tenant={mockTenant} />
}
