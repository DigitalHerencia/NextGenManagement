"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Video,
  Users,
  Eye,
  MessageSquare,
  DollarSign,
  Play,
  Square,
  Mic,
  Camera,
  Monitor,
  Wifi,
  TrendingUp,
  Clock,
} from "lucide-react"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface StreamingSectionProps {
  tenant: Tenant
}

export function StreamingSection({ tenant }: StreamingSectionProps) {
  const [isLive, setIsLive] = useState(false)
  const [selectedTab, setSelectedTab] = useState("dashboard")
  const [streamTitle, setStreamTitle] = useState("Live Stream Session")
  const [streamDescription, setStreamDescription] = useState("")
  const [currentViewers, setCurrentViewers] = useState(0)
  const [totalTips, setTotalTips] = useState(0)
  const [streamDuration, setStreamDuration] = useState(0)

  // Mock live stream data
  const streamStats = {
    totalStreams: 45,
    totalViewers: 12847,
    totalRevenue: 8945.5,
    averageViewers: 285,
    peakViewers: 567,
    streamHours: 127.5,
  }

  const liveViewers = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/images/profile-1.jpg",
      tier: "VIP",
      joinTime: "5 min ago",
      tips: 25.0,
    },
    {
      id: 2,
      name: "Sarah Miller",
      avatar: "/images/profile-2.jpg",
      tier: "Premium",
      joinTime: "12 min ago",
      tips: 15.0,
    },
    {
      id: 3,
      name: "Mike Chen",
      avatar: "/images/profile-3.jpg",
      tier: "Elite",
      joinTime: "8 min ago",
      tips: 50.0,
    },
    {
      id: 4,
      name: "Emma Davis",
      avatar: "/images/profile-1.jpg",
      tier: "VIP",
      joinTime: "3 min ago",
      tips: 10.0,
    },
  ]

  const liveChat = [
    {
      id: 1,
      user: "Alex Johnson",
      avatar: "/images/profile-1.jpg",
      message: "Amazing stream! 💕",
      timestamp: "2 min ago",
      tier: "VIP",
    },
    {
      id: 2,
      user: "Sarah Miller",
      avatar: "/images/profile-2.jpg",
      message: "Love the new setup!",
      timestamp: "3 min ago",
      tier: "Premium",
    },
    {
      id: 3,
      user: "Mike Chen",
      avatar: "/images/profile-3.jpg",
      message: "Can you do a shoutout? 🔥",
      timestamp: "4 min ago",
      tier: "Elite",
    },
  ]

  const upcomingStreams = [
    {
      id: 1,
      title: "Q&A Session with Fans",
      scheduledTime: "Today, 8:00 PM",
      description: "Interactive Q&A session with my amazing fans",
      expectedViewers: 300,
    },
    {
      id: 2,
      title: "Behind the Scenes Content Creation",
      scheduledTime: "Tomorrow, 3:00 PM",
      description: "Watch me create content and get exclusive insights",
      expectedViewers: 250,
    },
    {
      id: 3,
      title: "Special VIP Stream",
      scheduledTime: "Friday, 9:00 PM",
      description: "Exclusive stream for VIP and Elite subscribers only",
      expectedViewers: 150,
    },
  ]

  // Simulate live stream metrics
  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setCurrentViewers((prev) => Math.max(0, prev + Math.floor(Math.random() * 10) - 4))
        setTotalTips((prev) => prev + Math.random() * 5)
        setStreamDuration((prev) => prev + 1)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isLive])

  const startStream = () => {
    setIsLive(true)
    setCurrentViewers(Math.floor(Math.random() * 50) + 20)
    setStreamDuration(0)
  }

  const stopStream = () => {
    setIsLive(false)
    setCurrentViewers(0)
    setStreamDuration(0)
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "VIP":
        return "text-[#ff00ff]"
      case "Elite":
        return "text-yellow-400"
      case "Premium":
        return "text-[#00ffff]"
      default:
        return "text-gray-400"
    }
  }

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Live Streaming</h1>
          <p className="text-gray-400">Manage your live streams and connect with fans in real-time</p>
        </div>
        <div className="flex gap-2">
          {!isLive ? (
            <Button onClick={startStream} className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
              <Play className="mr-2 h-4 w-4" />
              Go Live
            </Button>
          ) : (
            <Button onClick={stopStream} variant="destructive">
              <Square className="mr-2 h-4 w-4" />
              End Stream
            </Button>
          )}
        </div>
      </div>

      {/* Live Stream Status */}
      {isLive && (
        <Card className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-500/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-white font-medium">LIVE</span>
                </div>
                <div className="text-white">
                  <span className="font-medium">{streamTitle}</span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{currentViewers} viewers</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>${totalTips.toFixed(2)} tips</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{formatDuration(streamDuration)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stream Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Streams</CardTitle>
            <Video className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{streamStats.totalStreams}</div>
            <p className="text-xs text-green-400">+3 this week</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Viewers</CardTitle>
            <Users className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{streamStats.totalViewers.toLocaleString()}</div>
            <p className="text-xs text-green-400">+12.5% this month</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Stream Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">${streamStats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-green-400">+18.2% this month</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Avg Viewers</CardTitle>
            <Eye className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{streamStats.averageViewers}</div>
            <p className="text-xs text-gray-400">per stream</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Peak Viewers</CardTitle>
            <TrendingUp className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{streamStats.peakViewers}</div>
            <p className="text-xs text-gray-400">all-time high</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Stream Hours</CardTitle>
            <Clock className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{streamStats.streamHours}</div>
            <p className="text-xs text-gray-400">total hours</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Stream Dashboard</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Stream Preview */}
            <Card className="bg-[#181e2b] border-[#2a2b30] lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-white">Stream Preview</CardTitle>
                <CardDescription>Your live stream view</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <img src="/images/hero-content.jpg" alt="Stream Preview" className="w-full h-full object-cover" />
                  {!isLive && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="text-center">
                        <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400">Stream offline</p>
                        <p className="text-sm text-gray-500">Click "Go Live" to start streaming</p>
                      </div>
                    </div>
                  )}
                  {isLive && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                        LIVE
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-gray-700 text-white">
                      <Mic className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-700 text-white">
                      <Camera className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-700 text-white">
                      <Monitor className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Wifi className="h-4 w-4 text-green-400" />
                    <span>Connection: Excellent</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Chat & Viewers */}
            <div className="space-y-4">
              {/* Live Viewers */}
              <Card className="bg-[#181e2b] border-[#2a2b30]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Live Viewers ({isLive ? currentViewers : 0})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {isLive ? (
                    liveViewers.map((viewer) => (
                      <div key={viewer.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={viewer.avatar || "/placeholder.svg"} alt={viewer.name} />
                            <AvatarFallback className="bg-[#ff00ff] text-white text-xs">
                              {viewer.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-white">{viewer.name}</p>
                            <p className="text-xs text-gray-400">{viewer.joinTime}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={`text-xs ${getTierColor(viewer.tier)} bg-transparent border`}>
                            {viewer.tier}
                          </Badge>
                          {viewer.tips > 0 && <p className="text-xs text-[#ff00ff]">${viewer.tips}</p>}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <Users className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">No viewers yet</p>
                      <p className="text-gray-500 text-xs">Start streaming to see viewers</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Live Chat */}
              <Card className="bg-[#181e2b] border-[#2a2b30]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Live Chat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {isLive ? (
                    <>
                      <div className="space-y-3 max-h-48 overflow-y-auto">
                        {liveChat.map((message) => (
                          <div key={message.id} className="flex items-start gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.user} />
                              <AvatarFallback className="bg-[#ff00ff] text-white text-xs">
                                {message.user.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <p className="text-xs font-medium text-white">{message.user}</p>
                                <Badge className={`text-xs ${getTierColor(message.tier)} bg-transparent border`}>
                                  {message.tier}
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-300">{message.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input placeholder="Chat with viewers..." className="text-sm" />
                        <Button size="sm" className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                          Send
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <MessageSquare className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Chat inactive</p>
                      <p className="text-gray-500 text-xs">Start streaming to enable chat</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Schedule New Stream</CardTitle>
                <CardDescription>Plan your upcoming live streams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Stream Title</Label>
                  <Input
                    id="title"
                    value={streamTitle}
                    onChange={(e) => setStreamTitle(e.target.value)}
                    placeholder="Enter stream title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={streamDescription}
                    onChange={(e) => setStreamDescription(e.target.value)}
                    placeholder="Describe your stream..."
                  />
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
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="qa">Q&A Session</SelectItem>
                      <SelectItem value="bts">Behind the Scenes</SelectItem>
                      <SelectItem value="vip">VIP Exclusive</SelectItem>
                      <SelectItem value="general">General Stream</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                  Schedule Stream
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Upcoming Streams</CardTitle>
                <CardDescription>Your scheduled live streams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingStreams.map((stream) => (
                  <div key={stream.id} className="p-4 rounded-lg bg-[#252d3a]">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-white">{stream.title}</h4>
                      <Badge className="bg-[#ff00ff]/20 text-[#ff00ff]">{stream.scheduledTime}</Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{stream.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Expected: {stream.expectedViewers} viewers</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-gray-700 text-white">
                          Edit
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                          Start
                        </Button>
                      </div>
                    </div>
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
                <CardTitle className="text-white">Stream Performance</CardTitle>
                <CardDescription>Weekly streaming analytics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Monday</span>
                    <span className="text-sm font-medium text-white">245 viewers</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Wednesday</span>
                    <span className="text-sm font-medium text-white">312 viewers</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Friday</span>
                    <span className="text-sm font-medium text-white">189 viewers</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Sunday</span>
                    <span className="text-sm font-medium text-white">567 viewers</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Revenue by Stream</CardTitle>
                <CardDescription>Tips and donations per stream</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Q&A Session</span>
                    <span className="text-sm font-medium text-white">$125.50</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">VIP Exclusive</span>
                    <span className="text-sm font-medium text-white">$89.25</span>
                  </div>
                  <Progress value={55} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Behind the Scenes</span>
                    <span className="text-sm font-medium text-white">$156.75</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">General Stream</span>
                    <span className="text-sm font-medium text-white">$67.00</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">Stream Settings</CardTitle>
              <CardDescription>Configure your streaming preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Auto-record streams</p>
                    <p className="text-sm text-gray-400">Automatically save stream recordings</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Chat moderation</p>
                    <p className="text-sm text-gray-400">Enable automatic chat filtering</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Subscriber-only chat</p>
                    <p className="text-sm text-gray-400">Restrict chat to subscribers only</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Stream notifications</p>
                    <p className="text-sm text-gray-400">Notify followers when you go live</p>
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
