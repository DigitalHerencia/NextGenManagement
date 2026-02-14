"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
import { DollarSign, TrendingUp, Zap, Eye, Lock, Star, CreditCard, Plus, Users, Heart, Crown } from "lucide-react"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface MonetizationSectionProps {
  tenant: Tenant
}

export function MonetizationSection({ tenant }: MonetizationSectionProps) {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [isCreateOfferOpen, setIsCreateOfferOpen] = useState(false)

  // Mock monetization data
  const revenueStreams = [
    {
      id: 1,
      name: "Subscriptions",
      revenue: 45230.5,
      percentage: 68.2,
      growth: 12.5,
      icon: Users,
      color: "text-[#ff00ff]",
    },
    {
      id: 2,
      name: "Tips & Donations",
      revenue: 12450.75,
      percentage: 18.8,
      growth: 8.3,
      icon: Heart,
      color: "text-[#00ffff]",
    },
    {
      id: 3,
      name: "Pay-Per-View",
      revenue: 6890.25,
      percentage: 10.4,
      growth: 15.7,
      icon: Eye,
      color: "text-green-400",
    },
    {
      id: 4,
      name: "Custom Content",
      revenue: 1750.0,
      percentage: 2.6,
      growth: 22.1,
      icon: Star,
      color: "text-yellow-400",
    },
  ]

  const payPerViewContent = [
    {
      id: 1,
      title: "Exclusive Photoshoot Behind the Scenes",
      price: 15.99,
      views: 234,
      revenue: 3741.66,
      thumbnail: "/images/bts-demo.jpg",
      status: "active",
      createdAt: "2024-01-10",
    },
    {
      id: 2,
      title: "Personal Q&A Session Recording",
      price: 9.99,
      views: 156,
      revenue: 1558.44,
      thumbnail: "/images/content-editing.jpg",
      status: "active",
      createdAt: "2024-01-08",
    },
    {
      id: 3,
      title: "Workout Routine Tutorial",
      price: 12.99,
      views: 89,
      revenue: 1156.11,
      thumbnail: "/images/hero-content.jpg",
      status: "active",
      createdAt: "2024-01-05",
    },
  ]

  const customOffers = [
    {
      id: 1,
      title: "Personal Video Message",
      price: 25.0,
      description: "Custom 2-3 minute video message for special occasions",
      orders: 45,
      revenue: 1125.0,
      status: "active",
    },
    {
      id: 2,
      title: "1-on-1 Video Call (30 min)",
      price: 75.0,
      description: "Private video call session",
      orders: 12,
      revenue: 900.0,
      status: "active",
    },
    {
      id: 3,
      title: "Custom Photo Set",
      price: 35.0,
      description: "Personalized photo collection based on your preferences",
      orders: 23,
      revenue: 805.0,
      status: "active",
    },
  ]

  const recentTransactions = [
    {
      id: 1,
      type: "tip",
      amount: 50.0,
      from: "Alex Johnson",
      message: "Love your content! Keep it up! 💕",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      type: "ppv",
      amount: 15.99,
      from: "Sarah Miller",
      content: "Exclusive Photoshoot Behind the Scenes",
      timestamp: "4 hours ago",
    },
    {
      id: 3,
      type: "custom",
      amount: 25.0,
      from: "Mike Chen",
      content: "Personal Video Message",
      timestamp: "6 hours ago",
    },
    {
      id: 4,
      type: "subscription",
      amount: 49.99,
      from: "Emma Davis",
      tier: "VIP",
      timestamp: "8 hours ago",
    },
  ]

  const totalRevenue = revenueStreams.reduce((acc, stream) => acc + stream.revenue, 0)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Monetization</h1>
          <p className="text-gray-400">Manage your revenue streams and pricing strategies</p>
        </div>
        <Dialog open={isCreateOfferOpen} onOpenChange={setIsCreateOfferOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
              <Plus className="mr-2 h-4 w-4" />
              Create Offer
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Monetization Offer</DialogTitle>
              <DialogDescription>Set up a new way to monetize your content</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="offerType">Offer Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select offer type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ppv">Pay-Per-View Content</SelectItem>
                    <SelectItem value="custom">Custom Service</SelectItem>
                    <SelectItem value="tip">Tip Goal</SelectItem>
                    <SelectItem value="bundle">Content Bundle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter offer title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input id="price" type="number" placeholder="19.99" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your offer..." />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="active" />
                <Label htmlFor="active">Active offer</Label>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsCreateOfferOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Create Offer</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Revenue Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +14.2% this month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Active Offers</CardTitle>
            <Zap className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-gray-400">3 new this week</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">18.5%</div>
            <p className="text-xs text-green-400">+2.1% this month</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Avg Order Value</CardTitle>
            <CreditCard className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$28.50</div>
            <p className="text-xs text-green-400">+5.3% this month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ppv">Pay-Per-View</TabsTrigger>
          <TabsTrigger value="custom">Custom Offers</TabsTrigger>
          <TabsTrigger value="tips">Tips & Donations</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Revenue Streams</CardTitle>
                <CardDescription>Breakdown of your income sources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {revenueStreams.map((stream) => {
                  const StreamIcon = stream.icon
                  return (
                    <div key={stream.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <StreamIcon className={`h-4 w-4 ${stream.color}`} />
                          <span className="text-sm text-gray-300">{stream.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-medium text-white">${stream.revenue.toLocaleString()}</span>
                          <span className="text-xs text-green-400 ml-2">+{stream.growth}%</span>
                        </div>
                      </div>
                      <Progress value={stream.percentage} className="h-2" />
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Recent Transactions</CardTitle>
                <CardDescription>Latest payments and purchases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-[#252d3a]">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          transaction.type === "tip"
                            ? "bg-[#ff00ff]/20"
                            : transaction.type === "ppv"
                              ? "bg-[#00ffff]/20"
                              : transaction.type === "custom"
                                ? "bg-green-500/20"
                                : "bg-yellow-500/20"
                        }`}
                      >
                        {transaction.type === "tip" && <Heart className="h-4 w-4 text-[#ff00ff]" />}
                        {transaction.type === "ppv" && <Eye className="h-4 w-4 text-[#00ffff]" />}
                        {transaction.type === "custom" && <Star className="h-4 w-4 text-green-400" />}
                        {transaction.type === "subscription" && <Crown className="h-4 w-4 text-yellow-400" />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{transaction.from}</p>
                        <p className="text-xs text-gray-400">
                          {transaction.type === "tip" && transaction.message}
                          {transaction.type === "ppv" && transaction.content}
                          {transaction.type === "custom" && transaction.content}
                          {transaction.type === "subscription" && `${transaction.tier} Subscription`}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">${transaction.amount}</p>
                      <p className="text-xs text-gray-400">{transaction.timestamp}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ppv" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">Pay-Per-View Content</CardTitle>
              <CardDescription>Manage your premium content offerings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {payPerViewContent.map((content) => (
                  <Card key={content.id} className="bg-[#252d3a] border-[#2a2b30] overflow-hidden">
                    <div className="relative">
                      <img
                        src={content.thumbnail || "/placeholder.svg"}
                        alt={content.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-[#ff00ff]/20 text-[#ff00ff]">${content.price}</Badge>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-black/70 text-white">
                          <Lock className="h-3 w-3 mr-1" />
                          PPV
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-white mb-2 line-clamp-2">{content.title}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Views:</span>
                          <span className="text-white">{content.views}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Revenue:</span>
                          <span className="text-white">${content.revenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Status:</span>
                          <Badge
                            className={
                              content.status === "active"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }
                          >
                            {content.status}
                          </Badge>
                        </div>
                      </div>
                      <Button className="w-full mt-3 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                        Manage
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">Custom Offers</CardTitle>
              <CardDescription>Personalized services and content requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customOffers.map((offer) => (
                  <div key={offer.id} className="p-4 rounded-lg bg-[#252d3a] flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-white">{offer.title}</h3>
                        <Badge className="bg-[#00ffff]/20 text-[#00ffff]">${offer.price}</Badge>
                        <Badge
                          className={
                            offer.status === "active" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                          }
                        >
                          {offer.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{offer.description}</p>
                      <div className="flex items-center gap-6 text-sm">
                        <div>
                          <span className="text-gray-400">Orders: </span>
                          <span className="text-white">{offer.orders}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Revenue: </span>
                          <span className="text-white">${offer.revenue.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-gray-700 text-white">
                        Edit
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Tip Goals</CardTitle>
                <CardDescription>Set goals to encourage fan support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-[#252d3a]">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-white">New Equipment Fund</h4>
                    <Badge className="bg-[#ff00ff]/20 text-[#ff00ff]">Active</Badge>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">Help me get a new camera for better content!</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Progress</span>
                      <span className="text-white">$1,250 / $2,000</span>
                    </div>
                    <Progress value={62.5} className="h-2" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#252d3a]">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-white">Studio Upgrade</h4>
                    <Badge className="bg-green-500/20 text-green-400">Completed</Badge>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">New lighting setup for professional content</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Progress</span>
                      <span className="text-white">$800 / $800</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Recent Tips</CardTitle>
                <CardDescription>Latest fan donations and support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentTransactions
                  .filter((t) => t.type === "tip")
                  .map((tip) => (
                    <div key={tip.id} className="p-3 rounded-lg bg-[#252d3a]">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-white">{tip.from}</p>
                        <span className="text-[#ff00ff] font-medium">${tip.amount}</span>
                      </div>
                      <p className="text-sm text-gray-400">{tip.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{tip.timestamp}</p>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Revenue Trends</CardTitle>
                <CardDescription>Monthly revenue performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">January</span>
                    <span className="text-sm font-medium text-white">$52,340</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">February</span>
                    <span className="text-sm font-medium text-white">$58,920</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">March</span>
                    <span className="text-sm font-medium text-white">$66,321</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Top Performing Content</CardTitle>
                <CardDescription>Highest earning content this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {payPerViewContent
                  .sort((a, b) => b.revenue - a.revenue)
                  .map((content) => (
                    <div key={content.id} className="flex items-center justify-between p-3 rounded-lg bg-[#252d3a]">
                      <div className="flex items-center gap-3">
                        <img
                          src={content.thumbnail || "/placeholder.svg"}
                          alt={content.title}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-white line-clamp-1">{content.title}</p>
                          <p className="text-xs text-gray-400">{content.views} views</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-[#ff00ff]">${content.revenue.toLocaleString()}</p>
                        <p className="text-xs text-gray-400">${content.price} each</p>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
