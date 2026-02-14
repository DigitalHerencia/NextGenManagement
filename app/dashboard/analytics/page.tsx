import { AdvancedAnalyticsSection } from "@/components/dashboard/advanced-analytics-section"

export default function AdvancedAnalyticsPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <AdvancedAnalyticsSection tenant={mockTenant} />
}
