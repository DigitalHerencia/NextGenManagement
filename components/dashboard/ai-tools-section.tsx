"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Brain,
  Sparkles,
  Wand2,
  ImageIcon,
  FileText,
  Calendar,
  TrendingUp,
  Lightbulb,
  Camera,
  Edit,
  Copy,
  Download,
  RefreshCw,
} from "lucide-react"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface AIToolsSectionProps {
  tenant: Tenant
}

export function AIToolsSection({ tenant }: AIToolsSectionProps) {
  const [selectedTab, setSelectedTab] = useState("content-generator")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")
  const [contentPrompt, setContentPrompt] = useState("")

  // Mock AI tools data
  const aiTools = [
    {
      id: 1,
      name: "Content Generator",
      description: "AI-powered content creation for posts, captions, and descriptions",
      icon: FileText,
      color: "text-[#ff00ff]",
      usage: 245,
      limit: 500,
    },
    {
      id: 2,
      name: "Image Enhancement",
      description: "Automatically enhance and optimize your photos",
      icon: ImageIcon,
      color: "text-[#00ffff]",
      usage: 89,
      limit: 200,
    },
    {
      id: 3,
      name: "Schedule Optimizer",
      description: "AI-optimized posting schedule for maximum engagement",
      icon: Calendar,
      color: "text-green-400",
      usage: 156,
      limit: 300,
    },
    {
      id: 4,
      name: "Trend Analyzer",
      description: "Identify trending topics and hashtags in your niche",
      icon: TrendingUp,
      color: "text-yellow-400",
      usage: 67,
      limit: 150,
    },
  ]

  const contentSuggestions = [
    {
      id: 1,
      type: "Caption",
      title: "Motivational Monday Post",
      content:
        "Starting this week with positive energy! ✨ Remember, every small step counts towards your bigger goals. What's one thing you're excited to accomplish this week? Drop it in the comments! 💕 #MondayMotivation #PositiveVibes #Goals",
      engagement: 94,
      hashtags: ["#MondayMotivation", "#PositiveVibes", "#Goals", "#Inspiration"],
    },
    {
      id: 2,
      type: "Story",
      title: "Behind the Scenes Content",
      content:
        "Take your fans behind the scenes of your content creation process. Show your setup, editing workflow, or preparation routine. This type of authentic content builds stronger connections!",
      engagement: 87,
      hashtags: ["#BehindTheScenes", "#ContentCreator", "#Authentic", "#Process"],
    },
    {
      id: 3,
      type: "Post",
      title: "Fan Appreciation",
      content:
        "Grateful for each and every one of you! 🙏 Your support means the world to me and motivates me to keep creating content you love. Thank you for being part of this amazing community! ❤️",
      engagement: 91,
      hashtags: ["#Grateful", "#FanLove", "#Community", "#ThankYou"],
    },
  ]

  const trendingTopics = [
    {
      id: 1,
      topic: "Self-Care Sunday",
      growth: "+245%",
      relevance: 92,
      hashtags: ["#SelfCareSunday", "#Wellness", "#MeTime"],
    },
    {
      id: 2,
      topic: "Workout Wednesday",
      growth: "+189%",
      relevance: 87,
      hashtags: ["#WorkoutWednesday", "#Fitness", "#HealthyLifestyle"],
    },
    {
      id: 3,
      topic: "Throwback Thursday",
      growth: "+156%",
      relevance: 78,
      hashtags: ["#ThrowbackThursday", "#Memories", "#Nostalgia"],
    },
  ]

  const optimizedSchedule = [
    {
      day: "Monday",
      bestTime: "8:00 PM",
      engagement: "High",
      contentType: "Motivational posts",
    },
    {
      day: "Tuesday",
      bestTime: "7:30 PM",
      engagement: "Medium",
      contentType: "Behind-the-scenes",
    },
    {
      day: "Wednesday",
      bestTime: "9:00 PM",
      engagement: "High",
      contentType: "Interactive content",
    },
    {
      day: "Thursday",
      bestTime: "8:30 PM",
      engagement: "High",
      contentType: "Personal stories",
    },
    {
      day: "Friday",
      bestTime: "7:00 PM",
      engagement: "Very High",
      contentType: "Weekend prep",
    },
    {
      day: "Saturday",
      bestTime: "2:00 PM",
      engagement: "Medium",
      contentType: "Lifestyle content",
    },
    {
      day: "Sunday",
      bestTime: "6:00 PM",
      engagement: "High",
      contentType: "Self-care & wellness",
    },
  ]

  const generateContent = async () => {
    setIsGenerating(true)
    // Simulate AI content generation
    setTimeout(() => {
      const sampleContent = `🌟 Exciting news! I've been working on something special just for you amazing people! ✨

Your support has been incredible, and I wanted to create content that truly shows my appreciation. This week, I'm sharing some of my most personal and authentic moments with you.

What would you love to see more of? Drop your suggestions below! 💕

#Grateful #ContentCreator #Community #Authentic #NewContent #ThankYou`

      setGeneratedContent(sampleContent)
      setIsGenerating(false)
    }, 3000)
  }

  const getEngagementColor = (engagement: number) => {
    if (engagement >= 90) return "text-green-400"
    if (engagement >= 80) return "text-yellow-400"
    return "text-gray-400"
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Tools</h1>
          <p className="text-gray-400">Leverage AI to optimize your content strategy and engagement</p>
        </div>
        <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
          <Sparkles className="mr-2 h-4 w-4" />
          Upgrade AI Plan
        </Button>
      </div>

      {/* AI Tools Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {aiTools.map((tool) => {
          const ToolIcon = tool.icon
          const usagePercentage = (tool.usage / tool.limit) * 100
          return (
            <Card key={tool.id} className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <ToolIcon className={`h-6 w-6 ${tool.color}`} />
                  <Badge className="bg-[#ff00ff]/20 text-[#ff00ff]">
                    {tool.usage}/{tool.limit}
                  </Badge>
                </div>
                <CardTitle className="text-white text-sm">{tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-400 mb-3">{tool.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">Usage</span>
                    <span className="text-white">{usagePercentage.toFixed(0)}%</span>
                  </div>
                  <Progress value={usagePercentage} className="h-2" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="content-generator">Content Generator</TabsTrigger>
          <TabsTrigger value="suggestions">Smart Suggestions</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
          <TabsTrigger value="scheduler">Schedule Optimizer</TabsTrigger>
          <TabsTrigger value="enhancement">Image Enhancement</TabsTrigger>
        </TabsList>

        <TabsContent value="content-generator" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Wand2 className="h-5 w-5 text-[#ff00ff]" />
                  AI Content Generator
                </CardTitle>
                <CardDescription>Generate engaging content with AI assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contentType">Content Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="caption">Social Media Caption</SelectItem>
                      <SelectItem value="story">Story Content</SelectItem>
                      <SelectItem value="description">Video Description</SelectItem>
                      <SelectItem value="email">Email Newsletter</SelectItem>
                      <SelectItem value="blog">Blog Post</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tone">Tone & Style</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="friendly">Friendly & Casual</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="playful">Playful & Fun</SelectItem>
                      <SelectItem value="motivational">Motivational</SelectItem>
                      <SelectItem value="intimate">Personal & Intimate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prompt">Content Prompt</Label>
                  <Textarea
                    id="prompt"
                    value={contentPrompt}
                    onChange={(e) => setContentPrompt(e.target.value)}
                    placeholder="Describe what you want to create... (e.g., 'A motivational post about achieving goals')"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Additional Options</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#00ffff]/20 text-[#00ffff] cursor-pointer">Include Hashtags</Badge>
                    <Badge className="bg-[#ff00ff]/20 text-[#ff00ff] cursor-pointer">Add Emojis</Badge>
                    <Badge className="bg-green-500/20 text-green-400 cursor-pointer">Call to Action</Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-400 cursor-pointer">Question for Engagement</Badge>
                  </div>
                </div>
                <Button
                  onClick={generateContent}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Content
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Generated Content</CardTitle>
                <CardDescription>AI-generated content ready to use</CardDescription>
              </CardHeader>
              <CardContent>
                {generatedContent ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#252d3a] border border-[#2a2b30]">
                      <p className="text-white whitespace-pre-wrap">{generatedContent}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-700 text-white">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-700 text-white">
                        <Download className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">Generated content will appear here</p>
                    <p className="text-sm text-gray-500">Fill out the form and click generate to get started</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-[#ff00ff]" />
                Smart Content Suggestions
              </CardTitle>
              <CardDescription>AI-curated content ideas based on your audience and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentSuggestions.map((suggestion) => (
                  <div key={suggestion.id} className="p-4 rounded-lg bg-[#252d3a] border border-[#2a2b30]">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-[#00ffff]/20 text-[#00ffff]">{suggestion.type}</Badge>
                          <Badge className={`${getEngagementColor(suggestion.engagement)} bg-transparent border`}>
                            {suggestion.engagement}% predicted engagement
                          </Badge>
                        </div>
                        <h4 className="font-medium text-white">{suggestion.title}</h4>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                        Use This
                      </Button>
                    </div>
                    <p className="text-gray-300 mb-3">{suggestion.content}</p>
                    <div className="flex flex-wrap gap-1">
                      {suggestion.hashtags.map((hashtag, index) => (
                        <Badge key={index} className="bg-[#ff00ff]/20 text-[#ff00ff] text-xs">
                          {hashtag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-[#ff00ff]" />
                  Trending Topics
                </CardTitle>
                <CardDescription>Hot topics in your niche right now</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingTopics.map((trend) => (
                  <div key={trend.id} className="p-4 rounded-lg bg-[#252d3a]">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{trend.topic}</h4>
                      <Badge className="bg-green-500/20 text-green-400">{trend.growth}</Badge>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Relevance Score</span>
                      <span className="text-sm font-medium text-white">{trend.relevance}%</span>
                    </div>
                    <Progress value={trend.relevance} className="h-2 mb-3" />
                    <div className="flex flex-wrap gap-1">
                      {trend.hashtags.map((hashtag, index) => (
                        <Badge key={index} className="bg-[#00ffff]/20 text-[#00ffff] text-xs">
                          {hashtag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Hashtag Performance</CardTitle>
                <CardDescription>Your best performing hashtags this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">#ContentCreator</span>
                    <span className="text-sm font-medium text-white">2.4M reach</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">#BehindTheScenes</span>
                    <span className="text-sm font-medium text-white">1.8M reach</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">#Authentic</span>
                    <span className="text-sm font-medium text-white">1.2M reach</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">#Community</span>
                    <span className="text-sm font-medium text-white">950K reach</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scheduler" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#ff00ff]" />
                AI-Optimized Schedule
              </CardTitle>
              <CardDescription>Best times to post based on your audience behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {optimizedSchedule.map((schedule) => (
                  <div key={schedule.day} className="flex items-center justify-between p-4 rounded-lg bg-[#252d3a]">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="font-medium text-white">{schedule.day}</div>
                        <div className="text-sm text-gray-400">{schedule.bestTime}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{schedule.contentType}</div>
                        <div className="text-xs text-gray-400">Recommended content type</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        className={
                          schedule.engagement === "Very High"
                            ? "bg-green-500/20 text-green-400"
                            : schedule.engagement === "High"
                              ? "bg-[#ff00ff]/20 text-[#ff00ff]"
                              : "bg-yellow-500/20 text-yellow-400"
                        }
                      >
                        {schedule.engagement}
                      </Badge>
                      <div className="text-xs text-gray-400 mt-1">Engagement</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="enhancement" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-[#ff00ff]" />
                  AI Image Enhancement
                </CardTitle>
                <CardDescription>Automatically enhance and optimize your photos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 mb-2">Drop your images here or click to upload</p>
                  <p className="text-sm text-gray-500">Supports JPG, PNG, WebP up to 10MB</p>
                  <Button className="mt-4 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Choose Files</Button>
                </div>
                <div className="space-y-2">
                  <Label>Enhancement Options</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Auto Color Correction</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Noise Reduction</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Sharpening</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Background Enhancement</span>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Enhancement History</CardTitle>
                <CardDescription>Recently enhanced images</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#252d3a]">
                    <img src="/images/bts-demo.jpg" alt="Enhanced" className="w-12 h-12 rounded object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">BTS_Photoshoot_01.jpg</p>
                      <p className="text-xs text-gray-400">Enhanced 2 hours ago</p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400">+25% quality</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#252d3a]">
                    <img src="/images/content-editing.jpg" alt="Enhanced" className="w-12 h-12 rounded object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">Workspace_Setup.jpg</p>
                      <p className="text-xs text-gray-400">Enhanced 1 day ago</p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400">+18% quality</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#252d3a]">
                    <img src="/images/hero-content.jpg" alt="Enhanced" className="w-12 h-12 rounded object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">Content_Hero.jpg</p>
                      <p className="text-xs text-gray-400">Enhanced 3 days ago</p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400">+32% quality</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
