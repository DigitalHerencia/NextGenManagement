import { AIToolsSection } from "@/components/dashboard/ai-tools-section"

export default function AIToolsPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <AIToolsSection tenant={mockTenant} />
}
