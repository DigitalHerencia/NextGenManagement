import { ContentCalendarSection } from "@/components/dashboard/content-calendar-section"

export default function CalendarPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <ContentCalendarSection tenant={mockTenant} />
}
