import { AccountingSection } from "@/components/dashboard/accounting-section"

export default function AccountingPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <AccountingSection tenant={mockTenant} />
}
