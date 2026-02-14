import { StreamingSection } from "@/components/dashboard/streaming-section"

export default function StreamingPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <StreamingSection tenant={mockTenant} />
}
