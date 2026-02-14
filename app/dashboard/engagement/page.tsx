import { FanEngagementSection } from "@/components/dashboard/fan-engagement-section"

export default function EngagementPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <FanEngagementSection tenant={mockTenant} />
}
