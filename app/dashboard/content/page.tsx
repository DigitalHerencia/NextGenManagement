import { ContentManagementSection } from "@/components/dashboard/content-management-section"

export default function ContentPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <ContentManagementSection tenant={mockTenant} />
}
