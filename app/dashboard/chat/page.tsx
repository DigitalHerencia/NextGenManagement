import { ChatSection } from "@/components/dashboard/chat-section"

export default function ChatPage() {
  // Mock tenant data for standalone dashboard
  const mockTenant = {
    id: "demo",
    name: "Demo Creator",
    domain: "demo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return <ChatSection tenant={mockTenant} />
}
