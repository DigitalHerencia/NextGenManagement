"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Crown, Star, Users, DollarSign, TrendingUp, Plus, Edit, Trash2, Zap } from "lucide-react"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface SubscriptionManagementSectionProps {
  tenant: Tenant
}

export function SubscriptionManagementSection({ tenant }: SubscriptionManagementSectionProps) {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [isCreateTierOpen, setIsCreateTierOpen] = useState(false)

  // Mock subscription data
  const subscriptionTiers = [
    {
      id: 1,
      name: "Free Tier",
      price: 0,
      interval: "month",
      description: "Basic access to content",
      features: ["Limited content access", "Basic chat", "Community posts"],
      subscribers: 2847,
      revenue: 0,
      color: "bg-gray-500/20 text-gray-400",
      isActive: true,
    },
    {
      id: 2,
      name: "Premium",
      price: 19.99,
      interval: "month",
      description: "Enhanced experience with exclusive content",
      features: ["All content access", "Priority chat", "Exclusive posts", "Monthly video calls"],
      subscribers: 1245,
      revenue: 24887.55,
      color: "bg-blue-500/20 text-blue-400",
      isActive: true,
    },
    {
      id: 3,
      name: "VIP",
      price: 49.99,
      interval: "month",
      description: "Ultimate fan experience",
      features: [
        "Everything in Premium",
        "1-on-1 chats",
        "Custom content requests",
        "Weekly video calls",
        "Merchandise discounts",
      ],
      subscribers: 387,
      revenue: 19346.13,
      color: "bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white",
      isActive: true,
    },
    {
      id: 4,
      name: "Elite",
      price: 99.99,
      interval: "month",
      description: "Exclusive elite access",
      features: [
        "Everything in VIP",
        "Daily interactions",
        "Behind-the-scenes access",
        "Personal shoutouts",
        "Priority support",
      ],
      subscribers: 89,
      revenue: 8899.11,
      color: "bg-yellow-500/20 text-yellow-400",
      isActive: true,
    },
  ]

  const recentSubscribers = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/images/profile-1.jpg",
      tier: "VIP",
      joinDate: "2024-01-15",
      amount: 49.99,
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Miller",
      avatar: "/images/profile-2.jpg",
      tier: "Premium",
      joinDate: "2024-01-14",
      amount: 19.99,
      status: "active",
    },
    {
      id: 3,
      name: "Mike Chen",
      avatar: "/images/profile-3.jpg",
      tier: "Elite",
      joinDate: "2024-01-13",
      amount: 99.99,
      status: "active",
    },
    {
      id: 4,
      name: "Emma Davis",
      avatar: "/images/profile-1.jpg",
      tier: "VIP",
      joinDate: "2024-01-12",
      amount: 49.99,
      status: "cancelled",
    },
  ]

  const subscriptionStats = {
    totalSubscribers: 4568,
    monthlyRevenue: 53132.79,
    averageRevenue: 11.63,
    churnRate: 5.2,
    conversionRate: 12.8,
  }

  const getTierIcon = (tierName: string) => {
    switch (tierName.toLowerCase()) {
      case "vip":
        return Crown
      case "elite":
        return Star
      case "premium":
        return Zap
      default:
        return Users
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Subscription Management</h1>
          <p className="text-gray-400">Manage your subscription tiers and subscriber relationships</p>
        </div>
        <Dialog open={isCreateTierOpen} onOpenChange={setIsCreateTierOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
              <Plus className="mr-2 h-4 w-4" />
              Create Tier
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Subscription Tier</DialogTitle>
              <DialogDescription>Set up a new subscription tier with custom pricing and features</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="tierName">Tier Name</Label>
                <Input id="tierName" placeholder="e.g., Premium, VIP, Elite" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" type="number" placeholder="19.99" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interval">Billing Interval</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select interval" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">Monthly</SelectItem>
                      <SelectItem value="year">Yearly</SelectItem>
                      <SelectItem value="week">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe what this tier includes..." />
              </div>
              <div className="space-y-2">
                <Label>Features (one per line)</Label>
                <Textarea placeholder="Exclusive content access&#10;Priority chat support&#10;Monthly video calls" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="active" />
                <Label htmlFor="active">Active tier</Label>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsCreateTierOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Create Tier</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Subscription Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Subscribers</CardTitle>
            <Users className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{subscriptionStats.totalSubscribers.toLocaleString()}</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +12.5% this month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">${subscriptionStats.monthlyRevenue.toLocaleString()}</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +18.2% this month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Avg Revenue/User</CardTitle>
            <TrendingUp className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">${subscriptionStats.averageRevenue}</div>
            <p className="text-xs text-green-400">+5.1% this month</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Conversion Rate</CardTitle>
            <Zap className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{subscriptionStats.conversionRate}%</div>
            <p className="text-xs text-green-400">+2.3% this month</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Churn Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{subscriptionStats.churnRate}%</div>
            <p className="text-xs text-red-400">-1.2% this month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tiers">Subscription Tiers</TabsTrigger>
          <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Subscription Tiers Performance</CardTitle>
                <CardDescription>Revenue and subscriber count by tier</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {subscriptionTiers.map((tier) => {
                  const TierIcon = getTierIcon(tier.name)
                  return (
                    <div key={tier.id} className="flex items-center justify-between p-3 rounded-lg bg-[#252d3a]">
                      <div className="flex items-center gap-3">
                        <TierIcon className="h-5 w-5 text-[#ff00ff]" />
                        <div>
                          <p className="font-medium text-white">{tier.name}</p>
                          <p className="text-sm text-gray-400">{tier.subscribers} subscribers</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-white">${tier.revenue.toLocaleString()}</p>
                        <p className="text-sm text-gray-400">${tier.price}/month</p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Recent Subscribers</CardTitle>
                <CardDescription>Latest subscription activity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentSubscribers.map((subscriber) => (
                  <div key={subscriber.id} className="flex items-center justify-between p-3 rounded-lg bg-[#252d3a]">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={subscriber.avatar || "/placeholder.svg"} alt={subscriber.name} />
                        <AvatarFallback className="bg-[#ff00ff] text-white">{subscriber.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-white">{subscriber.name}</p>
                        <p className="text-sm text-gray-400">
                          {subscriber.tier} • {subscriber.joinDate}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-white">${subscriber.amount}</p>
                      <Badge
                        className={
                          subscriber.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }
                      >
                        {subscriber.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tiers" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {subscriptionTiers.map((tier) => {
              const TierIcon = getTierIcon(tier.name)
              return (
                <Card key={tier.id} className="bg-[#181e2b] border-[#2a2b30]">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TierIcon className="h-5 w-5 text-[#ff00ff]" />
                        <CardTitle className="text-white">{tier.name}</CardTitle>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-[#00ffff]">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-400">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">
                        ${tier.price}
                        <span className="text-lg font-normal text-gray-400">/{tier.interval}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Subscribers</span>
                        <span className="text-white">{tier.subscribers}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Monthly Revenue</span>
                        <span className="text-white">${tier.revenue.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-white">Features:</p>
                      <ul className="space-y-1">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#ff00ff]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <Badge
                        className={tier.isActive ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}
                      >
                        {tier.isActive ? "Active" : "Inactive"}
                      </Badge>
                      <Button size="sm" className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="subscribers" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">All Subscribers</CardTitle>
              <CardDescription>Manage your subscriber base</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...recentSubscribers, ...recentSubscribers.map((s) => ({ ...s, id: s.id + 10 }))].map(
                  (subscriber) => (
                    <div key={subscriber.id} className="flex items-center justify-between p-4 rounded-lg bg-[#252d3a]">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={subscriber.avatar || "/placeholder.svg"} alt={subscriber.name} />
                          <AvatarFallback className="bg-[#ff00ff] text-white">
                            {subscriber.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-white">{subscriber.name}</p>
                          <p className="text-sm text-gray-400">Joined {subscriber.joinDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <Badge
                            className={`${subscriptionTiers.find((t) => t.name === subscriber.tier)?.color || "bg-gray-500/20 text-gray-400"}`}
                          >
                            {subscriber.tier}
                          </Badge>
                          <p className="text-sm text-gray-400 mt-1">${subscriber.amount}/month</p>
                        </div>
                        <Badge
                          className={
                            subscriber.status === "active"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }
                        >
                          {subscriber.status}
                        </Badge>
                        <Button size="sm" variant="ghost" className="text-[#00ffff]">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Subscription Growth</CardTitle>
                <CardDescription>Monthly subscriber acquisition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">January</span>
                    <span className="text-sm font-medium text-white">+245 subscribers</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">February</span>
                    <span className="text-sm font-medium text-white">+312 subscribers</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">March</span>
                    <span className="text-sm font-medium text-white">+189 subscribers</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Revenue Breakdown</CardTitle>
                <CardDescription>Revenue by subscription tier</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {subscriptionTiers
                  .filter((t) => t.revenue > 0)
                  .map((tier) => (
                    <div key={tier.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">{tier.name}</span>
                        <span className="text-sm font-medium text-white">${tier.revenue.toLocaleString()}</span>
                      </div>
                      <Progress value={(tier.revenue / subscriptionStats.monthlyRevenue) * 100} className="h-2" />
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">Subscription Settings</CardTitle>
              <CardDescription>Configure your subscription preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Auto-renewal</p>
                    <p className="text-sm text-gray-400">Automatically renew subscriptions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Trial periods</p>
                    <p className="text-sm text-gray-400">Offer free trial periods</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Proration</p>
                    <p className="text-sm text-gray-400">Prorate charges for tier changes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Email notifications</p>
                    <p className="text-sm text-gray-400">Send subscription update emails</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
