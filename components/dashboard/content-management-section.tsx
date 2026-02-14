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
import {
  Upload,
  FileText,
  Video,
  Camera,
  Mic,
  Edit,
  Trash2,
  Eye,
  Download,
  Share2,
  Search,
  Calendar,
  Clock,
  Star,
  TrendingUp,
} from "lucide-react"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface ContentManagementSectionProps {
  tenant: Tenant
}

export function ContentManagementSection({ tenant }: ContentManagementSectionProps) {
  const [selectedTab, setSelectedTab] = useState("library")
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [contentFilter, setContentFilter] = useState("all")

  // Mock content data
  const contentLibrary = [
    {
      id: 1,
      title: "Morning Workout Routine",
      type: "video",
      thumbnail: "/images/hero-content.jpg",
      duration: "15:30",
      size: "245 MB",
      uploadDate: "2024-01-15",
      status: "published",
      views: 12500,
      likes: 890,
      platform: ["Instagram", "YouTube"],
      tags: ["fitness", "morning", "workout"],
    },
    {
      id: 2,
      title: "Healthy Breakfast Recipe",
      type: "photo",
      thumbnail: "/images/content-editing.jpg",
      size: "8.5 MB",
      uploadDate: "2024-01-14",
      status: "scheduled",
      views: 0,
      likes: 0,
      platform: ["Instagram"],
      tags: ["food", "healthy", "breakfast"],
    },
    {
      id: 3,
      title: "Productivity Tips Blog",
      type: "blog",
      thumbnail: "/images/bts-demo.jpg",
      wordCount: 1250,
      size: "2.1 MB",
      uploadDate: "2024-01-13",
      status: "draft",
      views: 0,
      likes: 0,
      platform: ["Website"],
      tags: ["productivity", "tips", "lifestyle"],
    },
    {
      id: 4,
      title: "Q&A Session Highlights",
      type: "audio",
      thumbnail: "/images/hero-glamour.jpg",
      duration: "45:20",
      size: "89 MB",
      uploadDate: "2024-01-12",
      status: "published",
      views: 3200,
      likes: 245,
      platform: ["Spotify", "YouTube"],
      tags: ["qa", "podcast", "community"],
    },
    {
      id: 5,
      title: "Behind the Scenes",
      type: "video",
      thumbnail: "/images/bts-demo.jpg",
      duration: "8:45",
      size: "156 MB",
      uploadDate: "2024-01-11",
      status: "published",
      views: 8900,
      likes: 567,
      platform: ["Instagram", "TikTok"],
      tags: ["bts", "behind-scenes", "fun"],
    },
  ]

  const contentStats = {
    totalContent: 156,
    publishedContent: 124,
    draftContent: 18,
    scheduledContent: 14,
    totalViews: 2450000,
    totalLikes: 89500,
    engagementRate: 24.5,
  }

  const getContentIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video
      case "photo":
        return Camera
      case "blog":
        return FileText
      case "audio":
        return Mic
      default:
        return FileText
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-500/20 text-green-400"
      case "scheduled":
        return "bg-blue-500/20 text-blue-400"
      case "draft":
        return "bg-yellow-500/20 text-yellow-400"
      case "processing":
        return "bg-purple-500/20 text-purple-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const filteredContent = contentLibrary.filter((content) => {
    if (contentFilter === "all") return true
    return content.type === contentFilter || content.status === contentFilter
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Content Management</h1>
          <p className="text-gray-400">Organize, edit, and publish your content across all platforms</p>
        </div>
        <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
              <Upload className="mr-2 h-4 w-4" />
              Upload Content
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Upload New Content</DialogTitle>
              <DialogDescription>Add new content to your library</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Content Title</Label>
                <Input id="title" placeholder="Enter content title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Content Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="photo">Photo</SelectItem>
                    <SelectItem value="blog">Blog Post</SelectItem>
                    <SelectItem value="audio">Audio/Podcast</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="file">Upload File</Label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-400">Drag and drop your file here, or click to browse</p>
                  <Input id="file" type="file" className="hidden" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your content..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" placeholder="Enter tags separated by commas" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="platforms">Platforms</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select platforms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Upload Content</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Content Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Content</CardTitle>
            <FileText className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{contentStats.totalContent}</div>
            <p className="text-xs text-gray-400">{contentStats.publishedContent} published</p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{contentStats.totalViews.toLocaleString()}</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +15.2% this month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Engagement Rate</CardTitle>
            <Star className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{contentStats.engagementRate}%</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +2.1% this week
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Pending Content</CardTitle>
            <Clock className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {contentStats.draftContent + contentStats.scheduledContent}
            </div>
            <p className="text-xs text-gray-400">
              {contentStats.draftContent} drafts, {contentStats.scheduledContent} scheduled
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="library">Content Library</TabsTrigger>
          <TabsTrigger value="editor">Content Editor</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="library" className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search content..." className="pl-10" />
            </div>
            <Select value={contentFilter} onValueChange={setContentFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Content</SelectItem>
                <SelectItem value="video">Videos</SelectItem>
                <SelectItem value="photo">Photos</SelectItem>
                <SelectItem value="blog">Blog Posts</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Drafts</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredContent.map((content) => {
              const ContentIcon = getContentIcon(content.type)
              return (
                <Card key={content.id} className="bg-[#181e2b] border-[#2a2b30] overflow-hidden">
                  <div className="relative">
                    <img
                      src={content.thumbnail || "/placeholder.svg"}
                      alt={content.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className={getStatusColor(content.status)}>{content.status}</Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <ContentIcon className="h-5 w-5 text-white bg-black/50 rounded p-1" />
                    </div>
                    {content.duration && (
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {content.duration}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-white line-clamp-1">{content.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar className="h-3 w-3" />
                        {content.uploadDate}
                        <span>•</span>
                        <span>{content.size}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {content.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {content.likes.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {content.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-[#252d3a] text-[#00ffff]">
                            {tag}
                          </Badge>
                        ))}
                        {content.tags.length > 2 && (
                          <Badge variant="secondary" className="text-xs bg-[#252d3a] text-gray-400">
                            +{content.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex gap-1">
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-[#00ffff]">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-[#ff00ff]">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-gray-400">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-400">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="editor" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">Content Editor</CardTitle>
              <CardDescription>Create and edit your content with built-in tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-[#252d3a] border-[#2a2b30] p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Video className="h-6 w-6 text-[#ff00ff]" />
                    <h3 className="font-medium text-white">Video Editor</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Edit videos with trim, filters, and effects</p>
                  <Button className="w-full bg-[#ff00ff] hover:bg-[#ff00ff]/80">Launch Editor</Button>
                </Card>
                <Card className="bg-[#252d3a] border-[#2a2b30] p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Camera className="h-6 w-6 text-[#00ffff]" />
                    <h3 className="font-medium text-white">Photo Editor</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Enhance photos with filters and adjustments</p>
                  <Button className="w-full bg-[#00ffff] hover:bg-[#00ffff]/80 text-black">Launch Editor</Button>
                </Card>
                <Card className="bg-[#252d3a] border-[#2a2b30] p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-6 w-6 text-green-400" />
                    <h3 className="font-medium text-white">Blog Editor</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Write and format blog posts with rich text</p>
                  <Button className="w-full bg-green-500 hover:bg-green-500/80">Launch Editor</Button>
                </Card>
                <Card className="bg-[#252d3a] border-[#2a2b30] p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Mic className="h-6 w-6 text-yellow-400" />
                    <h3 className="font-medium text-white">Audio Editor</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Edit audio with noise reduction and effects</p>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-500/80 text-black">Launch Editor</Button>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Content Performance</CardTitle>
                <CardDescription>Top performing content this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {contentLibrary
                  .filter((content) => content.status === "published")
                  .sort((a, b) => b.views - a.views)
                  .slice(0, 5)
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
                          <p className="text-xs text-gray-400">{content.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-[#ff00ff]">{content.views.toLocaleString()}</p>
                        <p className="text-xs text-gray-400">{content.likes.toLocaleString()} likes</p>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Content Distribution</CardTitle>
                <CardDescription>Content types breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Videos</span>
                    <span className="text-sm font-medium text-white">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Photos</span>
                    <span className="text-sm font-medium text-white">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Blog Posts</span>
                    <span className="text-sm font-medium text-white">20%</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Audio</span>
                    <span className="text-sm font-medium text-white">5%</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">Content Templates</CardTitle>
              <CardDescription>Pre-designed templates to speed up content creation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Instagram Story",
                    type: "photo",
                    description: "Vertical story template with text overlay",
                    thumbnail: "/placeholder.svg?height=120&width=80",
                  },
                  {
                    name: "YouTube Thumbnail",
                    type: "photo",
                    description: "Eye-catching thumbnail design",
                    thumbnail: "/placeholder.svg?height=80&width=120",
                  },
                  {
                    name: "Blog Post Layout",
                    type: "blog",
                    description: "Professional blog post template",
                    thumbnail: "/placeholder.svg?height=120&width=80",
                  },
                  {
                    name: "Video Intro",
                    type: "video",
                    description: "Animated intro for videos",
                    thumbnail: "/placeholder.svg?height=80&width=120",
                  },
                  {
                    name: "Quote Card",
                    type: "photo",
                    description: "Inspirational quote design",
                    thumbnail: "/placeholder.svg?height=120&width=120",
                  },
                  {
                    name: "Product Showcase",
                    type: "photo",
                    description: "Product photography template",
                    thumbnail: "/placeholder.svg?height=120&width=120",
                  },
                ].map((template, index) => (
                  <Card key={index} className="bg-[#252d3a] border-[#2a2b30] overflow-hidden">
                    <div className="relative">
                      <img
                        src={template.thumbnail || "/placeholder.svg"}
                        alt={template.name}
                        className="w-full h-24 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-[#ff00ff]/20 text-[#ff00ff]">{template.type}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-medium text-white text-sm">{template.name}</h3>
                      <p className="text-xs text-gray-400 mt-1">{template.description}</p>
                      <Button size="sm" className="w-full mt-3 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                        Use Template
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
