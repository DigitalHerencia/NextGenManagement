"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Plus, Edit, Trash2, Video, Camera, FileText, Mic } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface ContentCalendarSectionProps {
  tenant: Tenant
}

export function ContentCalendarSection({ tenant }: ContentCalendarSectionProps) {
  const [isAddContentDialogOpen, setIsAddContentDialogOpen] = useState(false)
  const [selectedWeek, setSelectedWeek] = useState(0)

  const contentTypes = {
    video: { icon: Video, color: "text-[#ff00ff]", bg: "bg-[#ff00ff]/20" },
    photo: { icon: Camera, color: "text-[#00ffff]", bg: "bg-[#00ffff]/20" },
    blog: { icon: FileText, color: "text-green-400", bg: "bg-green-400/20" },
    podcast: { icon: Mic, color: "text-yellow-400", bg: "bg-yellow-400/20" },
  }

  // Mock content data
  const contentSchedule = [
    {
      id: 1,
      title: "Morning Workout Routine",
      type: "video",
      date: "2024-01-15",
      time: "09:00",
      status: "scheduled",
      description: "Full body workout for beginners",
      platform: "Instagram",
    },
    {
      id: 2,
      title: "Healthy Breakfast Recipe",
      type: "photo",
      date: "2024-01-15",
      time: "12:00",
      status: "draft",
      description: "Avocado toast with poached egg",
      platform: "Instagram",
    },
    {
      id: 3,
      title: "Productivity Tips Blog Post",
      type: "blog",
      date: "2024-01-16",
      time: "14:00",
      status: "scheduled",
      description: "10 tips for better time management",
      platform: "Website",
    },
    {
      id: 4,
      title: "Q&A Session",
      type: "video",
      date: "2024-01-17",
      time: "19:00",
      status: "scheduled",
      description: "Live Q&A with followers",
      platform: "YouTube",
    },
    {
      id: 5,
      title: "Behind the Scenes",
      type: "photo",
      date: "2024-01-18",
      time: "16:00",
      status: "idea",
      description: "Content creation process",
      platform: "Instagram Stories",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-green-500/20 text-green-400"
      case "draft":
        return "bg-yellow-500/20 text-yellow-400"
      case "idea":
        return "bg-blue-500/20 text-blue-400"
      case "published":
        return "bg-purple-500/20 text-purple-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const currentWeek = new Date()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Content Calendar</h1>
          <p className="text-gray-400">Plan and schedule your content across all platforms</p>
        </div>
        <Dialog open={isAddContentDialogOpen} onOpenChange={setIsAddContentDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add Content
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Schedule New Content</DialogTitle>
              <DialogDescription>Add new content to your calendar. Plan your posts in advance.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input id="title" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">
                  Type
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="photo">Photo</SelectItem>
                    <SelectItem value="blog">Blog Post</SelectItem>
                    <SelectItem value="podcast">Podcast</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input id="date" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="time" className="text-right">
                  Time
                </Label>
                <Input id="time" type="time" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="platform" className="text-right">
                  Platform
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea id="description" className="col-span-3" />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddContentDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Schedule Content</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Calendar Grid */}
      <div className="grid gap-4 lg:grid-cols-7">
        {days.map((day, index) => (
          <div key={day} className="space-y-4">
            <div className="text-center">
              <h3 className="font-semibold text-white">{day}</h3>
              <p className="text-sm text-gray-400">Jan {15 + index}</p>
            </div>
            <div className="space-y-2 min-h-[400px]">
              {contentSchedule
                .filter((content) => {
                  const contentDate = new Date(content.date)
                  const dayOfWeek = contentDate.getDay()
                  return dayOfWeek === (index + 1) % 7
                })
                .map((content) => {
                  const ContentIcon = contentTypes[content.type as keyof typeof contentTypes]?.icon || FileText
                  return (
                    <Card key={content.id} className="bg-[#181e2b] border-[#2a2b30] p-3">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <ContentIcon
                              className={`h-4 w-4 ${contentTypes[content.type as keyof typeof contentTypes]?.color}`}
                            />
                            <span className="text-sm font-medium text-white line-clamp-1">{content.title}</span>
                          </div>
                          <div className="flex gap-1">
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-[#00ffff]">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-red-400">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Clock className="h-3 w-3" />
                          {content.time}
                        </div>
                        <Badge className={`text-xs ${getStatusColor(content.status)}`}>{content.status}</Badge>
                        <p className="text-xs text-gray-400 line-clamp-2">{content.description}</p>
                        <p className="text-xs text-[#ff00ff]">{content.platform}</p>
                      </div>
                    </Card>
                  )
                })}
            </div>
          </div>
        ))}
      </div>

      {/* Content Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-white">This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#ff00ff]">12</div>
            <p className="text-xs text-gray-400">Scheduled posts</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-white">Drafts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#00ffff]">5</div>
            <p className="text-xs text-gray-400">Ready to schedule</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-white">Ideas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">8</div>
            <p className="text-xs text-gray-400">Content ideas</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-white">Published</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">24</div>
            <p className="text-xs text-gray-400">This month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
