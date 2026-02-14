"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Users,
  Calendar,
  BarChart3,
  Heart,
  MessageSquare,
  FileText,
  Settings,
  Home,
  DollarSign,
  Video,
  Brain,
  TrendingUp,
} from "lucide-react"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface DashboardSidebarProps {
  tenant: Tenant
}

export function DashboardSidebar({ tenant }: DashboardSidebarProps) {
  const pathname = usePathname()
  const basePath = `/dashboard`

  const navigation = [
    {
      name: "Dashboard",
      href: basePath,
      icon: Home,
      current: pathname === basePath,
    },
    {
      name: "Rolodex",
      href: `${basePath}/rolodex`,
      icon: Users,
      current: pathname === `${basePath}/rolodex`,
    },
    {
      name: "Content Calendar",
      href: `${basePath}/calendar`,
      icon: Calendar,
      current: pathname === `${basePath}/calendar`,
    },
    {
      name: "Chat",
      href: `${basePath}/chat`,
      icon: MessageSquare,
      current: pathname === `${basePath}/chat`,
    },
    {
      name: "Live Streaming",
      href: `${basePath}/streaming`,
      icon: Video,
      current: pathname === `${basePath}/streaming`,
    },
    {
      name: "Subscriptions",
      href: `${basePath}/subscriptions`,
      icon: Users,
      current: pathname === `${basePath}/subscriptions`,
    },
    {
      name: "Monetization",
      href: `${basePath}/monetization`,
      icon: DollarSign,
      current: pathname === `${basePath}/monetization`,
    },
    {
      name: "Analytics",
      href: `${basePath}/analytics`,
      icon: TrendingUp,
      current: pathname === `${basePath}/analytics`,
    },
    {
      name: "AI Tools",
      href: `${basePath}/ai-tools`,
      icon: Brain,
      current: pathname === `${basePath}/ai-tools`,
    },
    {
      name: "Tax & Accounting",
      href: `${basePath}/accounting`,
      icon: BarChart3,
      current: pathname === `${basePath}/accounting`,
    },
    {
      name: "Wellness",
      href: `${basePath}/wellness`,
      icon: Heart,
      current: pathname === `${basePath}/wellness`,
    },
    {
      name: "Fan Engagement",
      href: `${basePath}/engagement`,
      icon: MessageSquare,
      current: pathname === `${basePath}/engagement`,
    },
    {
      name: "Content Management",
      href: `${basePath}/content`,
      icon: FileText,
      current: pathname === `${basePath}/content`,
    },
    {
      name: "Settings",
      href: `${basePath}/settings`,
      icon: Settings,
      current: pathname === `${basePath}/settings`,
    },
  ]

  return (
    <div className="hidden md:flex flex-col w-64 bg-[#181e2b] border-r border-[#2a2b30]">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                item.current ? "bg-[#ff00ff] text-black" : "text-[#fffeff] hover:bg-[#252d3a] hover:text-white",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-lg",
              )}
            >
              <item.icon
                className={cn(
                  item.current ? "text-black" : "text-[#ff00ff] group-hover:text-[#ff00ff]",
                  "mr-3 flex-shrink-0 h-6 w-6",
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
