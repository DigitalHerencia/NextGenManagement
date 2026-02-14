import { cache } from "react"

export type Tenant = {
  id: string
  name: string
  domain: string
  customDomain?: string
  createdAt: Date
  updatedAt: Date
}

// This function is cached at the request level
export const getTenant = cache(async (domain: string): Promise<Tenant | null> => {
  // In a real application, this would query your database
  // For now, we'll use a simple mapping for demonstration
  const tenants: Record<string, Tenant> = {
    "creator1.localhost:3000": {
      id: "creator1",
      name: "Creator One",
      domain: "creator1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    "creator2.localhost:3000": {
      id: "creator2",
      name: "Creator Two",
      domain: "creator2",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Add more mappings as needed
  }

  // Check if we have a tenant for this domain
  return tenants[domain] || null
})

// Get the tenant information based on the request
export async function getDomainTenant(request: Request): Promise<Tenant | null> {
  const host = request.headers.get("host") || ""
  return getTenant(host)
}
