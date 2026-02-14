import { SubscriptionManagementSection } from "@/components/dashboard/subscription-management-section"

export default function SubscriptionsPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <SubscriptionManagementSection tenant={mockTenant} />
}
