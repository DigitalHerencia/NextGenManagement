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
import {
  MessageSquare,
  Heart,
  Users,
  TrendingUp,
  Send,
  Plus,
  Star,
  Gift,
  Zap,
  MessageCircle,
  BarChart3,
  Calendar,
  Search,
} from "lucide-react"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface FanEngagementSectionProps {
  tenant: Tenant
}

export function FanEngagementSection({ tenant }: FanEngagementSectionProps) {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [isCreatePollOpen, setIsCreatePollOpen] = useState(false)
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false)
  const [messageFilter, setMessageFilter] = useState("all")

  // Mock engagement data
  const engagementMetrics = [
    { name: "Mon", likes: 450, comments: 120, shares: 80, views: 2400 },
    { name: "Tue", likes: 520, comments: 150, shares: 95, views: 2800 },
    { name: "Wed", likes: 480, comments: 110, shares: 70, views: 2200 },
    { name: "Thu", likes: 680, comments: 200, shares: 120, views: 3200 },
    { name: "Fri", likes: 750, comments: 250, shares: 150, views: 3800 },
    { name: "Sat", likes: 920, comments: 320, shares: 200, views: 4500 },
    { name: "Sun", likes: 850, comments: 280, shares: 180, views: 4100 },
  ]

  const fanDemographics = [
    { name: "18-24", value: 35, color: "#ff00ff" },
    { name: "25-34", value: 40, color: "#00ffff" },
    { name: "35-44", value: 20, color: "#ffffff" },
    { name: "45+", value: 5, color: "#888888" },
  ]

  const topFans = [
    {
      id: 1,
      name: "Alex Johnson",
      username: "@alexj",
      avatar: "/images/profile-1.jpg",
      tier: "VIP",
      totalSpent: 2500,
      engagement: 95,
      joinDate: "2023-01-15",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Sarah Miller",
      username: "@sarahm",
      avatar: "/images/profile-2.jpg",
      tier: "Premium",
      totalSpent: 1800,
      engagement: 88,
      joinDate: "2023-02-20",
      lastActive: "1 hour ago",
    },
    {
      id: 3,
      name: "Mike Chen",
      username: "@mikec",
      avatar: "/images/profile-3.jpg",
      tier: "Standard",
      totalSpent: 950,
      engagement: 76,
      joinDate: "2023-03-10",
      lastActive: "30 minutes ago",
    },
    {
      id: 4,
      name: "Emma Davis",
      username: "@emmad",
      avatar: "/images/profile-1.jpg",
      tier: "VIP",
      totalSpent: 3200,
      engagement: 92,
      joinDate: "2022-12-05",
      lastActive: "5 minutes ago",
    },
  ]

  const recentMessages = [
    {
      id: 1,
      fan: { name: "Alex Johnson", username: "@alexj", avatar: "/images/profile-1.jpg" },
      message: "Love your latest content! Can't wait for the next post 💕",
      timestamp: "2 minutes ago",
      type: "message",
      unread: true,
    },
    {
      id: 2,
      fan: { name: "Sarah Miller", username: "@sarahm", avatar: "/images/profile-2.jpg" },
      message: "Thank you for the personalized video! It made my day ✨",
      timestamp: "15 minutes ago",
      type: "message",
      unread: true,
    },
    {
      id: 3,
      fan: { name: "Mike Chen", username: "@mikec", avatar: "/images/profile-3.jpg" },
      message: "When is your next live stream? I don't want to miss it!",
      timestamp: "1 hour ago",
      type: "message",
      unread: false,
    },
    {
      id: 4,
      fan: { name: "Emma Davis", username: "@emmad", avatar: "/images/profile-1.jpg" },
      message: "Just purchased your premium package! Excited to see exclusive content 🔥",
      timestamp: "2 hours ago",
      type: "purchase",
      unread: false,
    },
  ]

  const activePools = [
    {
      id: 1,
      question: "What type of content would you like to see more of?",
      options: [
        { text: "Behind the scenes", votes: 45 },
        { text: "Tutorials", votes: 32 },
        { text: "Q&A Sessions", votes: 28 },
        { text: "Collaborations", votes: 15 },
      ],
      totalVotes: 120,
      endDate: "2024-01-20",
    },
    {
      id: 2,
      question: "Best time for live streams?",
      options: [
        { text: "Morning (9-12 PM)", votes: 25 },
        { text: "Afternoon (1-5 PM)", votes: 40 },
        { text: "Evening (6-9 PM)", votes: 65 },
        { text: "Night (10 PM+)", votes: 20 },
      ],
      totalVotes: 150,
      endDate: "2024-01-18",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Live Q&A Session",
      date: "2024-01-16",
      time: "7:00 PM",
      attendees: 245,
      maxAttendees: 300,
      type: "live",
    },
    {
      id: 2,
      title: "Exclusive Photo Shoot Preview",
      date: "2024-01-18",
      time: "3:00 PM",
      attendees: 180,
      maxAttendees: 200,
      type: "premium",
    },
    {
      id: 3,
      title: "Community Game Night",
      date: "2024-01-20",
      time: "8:00 PM",
      attendees: 95,
      maxAttendees: 150,
      type: "community",
    },
  ]

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "VIP":
        return "bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white"
      case "Premium":
        return "bg-yellow-500/20 text-yellow-400"
      case "Standard":
        return "bg-blue-500/20 text-blue-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "live":
        return "bg-red-500/20 text-red-400"
      case "premium":
        return "bg-[#ff00ff]/20 text-[#ff00ff]"
      case "community":
        return "bg-[#00ffff]/20 text-[#00ffff]"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Fan Engagement</h1>
          <p className="text-gray-400">Connect with your community and track engagement metrics</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isCreatePollOpen} onOpenChange={setIsCreatePollOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-gray-700 text-white">
                <BarChart3 className="mr-2 h-4 w-4" />
                Create Poll
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Poll</DialogTitle>
                <DialogDescription>Engage your fans with interactive polls</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="question">Poll Question</Label>
                  <Input id="question" placeholder="What would you like to ask your fans?" />
                </div>
                <div className="space-y-2">
                  <Label>Poll Options</Label>
                  <Input placeholder="Option 1" />
                  <Input placeholder="Option 2" />
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Option
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Poll Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Day</SelectItem>
                      <SelectItem value="3">3 Days</SelectItem>
                      <SelectItem value="7">1 Week</SelectItem>
                      <SelectItem value="14">2 Weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreatePollOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Create Poll</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isCreateEventOpen} onOpenChange={setIsCreateEventOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                <Calendar className="mr-2 h-4 w-4" />
                Create Event
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Event</DialogTitle>
                <DialogDescription>Schedule live events and exclusive sessions</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input id="title" placeholder="Enter event title" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Event Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="live">Live Stream</SelectItem>
                      <SelectItem value="premium">Premium Event</SelectItem>
                      <SelectItem value="community">Community Event</SelectItem>
                      <SelectItem value="qa">Q&A Session</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe your event..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxAttendees">Max Attendees</Label>
                  <Input id="maxAttendees" type="number" placeholder="Enter maximum number of attendees" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreateEventOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Create Event</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Engagement Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Fans</CardTitle>
            <Users className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12,847</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Engagement Rate</CardTitle>
            <Heart className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">24.5%</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +3.1% from last week
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Active Conversations</CardTitle>
            <MessageSquare className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">156</div>
            <p className="text-xs text-yellow-400">24 unread messages</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Revenue This Month</CardTitle>
            <Zap className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$8,420</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +12.8% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="fans">Top Fans</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Weekly Engagement</CardTitle>
                <CardDescription>Likes, comments, and shares over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={engagementMetrics}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="likes" stroke="#ff00ff" strokeWidth={2} />
                    <Line type="monotone" dataKey="comments" stroke="#00ffff" strokeWidth={2} />
                    <Line type="monotone" dataKey="shares" stroke="#ffffff" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Fan Demographics</CardTitle>
                <CardDescription>Age distribution of your fanbase</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={fanDemographics}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {fanDemographics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {fanDemographics.map((demo) => (
                    <div key={demo.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: demo.color }} />
                        <span className="text-sm text-gray-300">{demo.name}</span>
                      </div>
                      <span className="text-sm font-medium text-white">{demo.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Active Polls</CardTitle>
                <CardDescription>Current polls and their results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activePools.map((poll) => (
                  <div key={poll.id} className="space-y-3 p-3 rounded-lg bg-[#252d3a]">
                    <h4 className="font-medium text-white">{poll.question}</h4>
                    <div className="space-y-2">
                      {poll.options.map((option, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{option.text}</span>
                            <span className="text-white">{option.votes} votes</span>
                          </div>
                          <Progress value={(option.votes / poll.totalVotes) * 100} className="h-2" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <span>{poll.totalVotes} total votes</span>
                      <span>Ends {poll.endDate}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Upcoming Events</CardTitle>
                <CardDescription>Scheduled live events and sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 rounded-lg bg-[#252d3a] space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-white">{event.title}</h4>
                      <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">
                        {event.attendees}/{event.maxAttendees} attendees
                      </div>
                      <Progress value={(event.attendees / event.maxAttendees) * 100} className="w-20 h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search messages..." className="pl-10" />
            </div>
            <Select value={messageFilter} onValueChange={setMessageFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Messages</SelectItem>
                <SelectItem value="unread">Unread</SelectItem>
                <SelectItem value="vip">VIP Fans</SelectItem>
                <SelectItem value="recent">Recent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Recent Messages</CardTitle>
                <CardDescription>Latest fan interactions and messages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-3 rounded-lg ${msg.unread ? "bg-[#ff00ff]/10 border border-[#ff00ff]/20" : "bg-[#252d3a]"}`}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={msg.fan.avatar || "/placeholder.svg"} alt={msg.fan.name} />
                        <AvatarFallback className="bg-[#ff00ff] text-white text-xs">
                          {msg.fan.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white">{msg.fan.name}</span>
                          <span className="text-xs text-gray-400">{msg.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-300">{msg.message}</p>
                        <div className="flex items-center gap-2">
                          {msg.type === "purchase" && <Gift className="h-3 w-3 text-[#00ffff]" />}
                          {msg.unread && <div className="w-2 h-2 rounded-full bg-[#ff00ff]" />}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Quick Reply</CardTitle>
                <CardDescription>Send messages to your fans</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Send to</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select recipient" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Fans</SelectItem>
                      <SelectItem value="vip">VIP Fans Only</SelectItem>
                      <SelectItem value="premium">Premium Fans</SelectItem>
                      <SelectItem value="recent">Recent Supporters</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here..." className="min-h-[100px]" />
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="border-gray-700">
                    <Gift className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Community Stats</CardTitle>
                <CardDescription>Overview of community engagement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Active Members</span>
                  <span className="text-lg font-bold text-[#ff00ff]">8,420</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Daily Active Users</span>
                  <span className="text-lg font-bold text-[#00ffff]">2,150</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Community Posts</span>
                  <span className="text-lg font-bold text-white">1,245</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Average Session</span>
                  <span className="text-lg font-bold text-green-400">12m 30s</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Community Features</CardTitle>
                <CardDescription>Manage community tools and settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-[#252d3a] hover:bg-[#2a2b30]">
                  <MessageCircle className="mr-2 h-4 w-4 text-[#ff00ff]" />
                  Community Forum
                </Button>
                <Button className="w-full justify-start bg-[#252d3a] hover:bg-[#2a2b30]">
                  <Users className="mr-2 h-4 w-4 text-[#00ffff]" />
                  Fan Groups
                </Button>
                <Button className="w-full justify-start bg-[#252d3a] hover:bg-[#2a2b30]">
                  <Star className="mr-2 h-4 w-4 text-yellow-400" />
                  Loyalty Program
                </Button>
                <Button className="w-full justify-start bg-[#252d3a] hover:bg-[#2a2b30]">
                  <Gift className="mr-2 h-4 w-4 text-green-400" />
                  Rewards System
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">Recent Community Activity</CardTitle>
              <CardDescription>Latest posts and interactions from your community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  user: "Alex Johnson",
                  action: "shared your latest post",
                  time: "2 minutes ago",
                  engagement: "45 likes, 12 comments",
                },
                {
                  user: "Sarah Miller",
                  action: "started a discussion in Fan Forum",
                  time: "15 minutes ago",
                  engagement: "23 replies",
                },
                {
                  user: "Mike Chen",
                  action: "joined VIP tier",
                  time: "1 hour ago",
                  engagement: "Welcome message sent",
                },
                {
                  user: "Emma Davis",
                  action: "created fan art",
                  time: "2 hours ago",
                  engagement: "89 likes, 34 comments",
                },
              ].map((activity, index) => (
                <div key={index} className="p-3 rounded-lg bg-[#252d3a] flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white">
                      <span className="font-medium text-[#ff00ff]">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-400">
                      {activity.time} • {activity.engagement}
                    </p>
                  </div>
                  <Button size="sm" variant="ghost" className="text-[#00ffff]">
                    View
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Engagement Trends</CardTitle>
                <CardDescription>Daily engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={engagementMetrics}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Bar dataKey="views" fill="#ff00ff" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Revenue by Fan Tier</CardTitle>
                <CardDescription>Monthly revenue breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">VIP Tier</span>
                    <span className="text-sm font-medium text-white">$4,200</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Premium Tier</span>
                    <span className="text-sm font-medium text-white">$2,800</span>
                  </div>
                  <Progress value={47} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Standard Tier</span>
                    <span className="text-sm font-medium text-white">$1,420</span>
                  </div>
                  <Progress value={24} className="h-2" />
                </div>
                <div className="pt-3 border-t border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Total Revenue</span>
                    <span className="text-lg font-bold text-[#ff00ff]">$8,420</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="fans" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">Top Fans</CardTitle>
              <CardDescription>Your most engaged and valuable supporters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topFans.map((fan) => (
                  <div key={fan.id} className="p-4 rounded-lg bg-[#252d3a] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={fan.avatar || "/placeholder.svg"} alt={fan.name} />
                        <AvatarFallback className="bg-[#ff00ff] text-white">{fan.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-white">{fan.name}</h4>
                          <Badge className={getTierColor(fan.tier)}>{fan.tier}</Badge>
                        </div>
                        <p className="text-sm text-gray-400">{fan.username}</p>
                        <p className="text-xs text-gray-500">Member since {fan.joinDate}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-sm font-medium text-white">${fan.totalSpent.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">{fan.engagement}% engagement</div>
                      <div className="text-xs text-[#00ffff]">Active {fan.lastActive}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
