"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, Users, Eye, Heart, DollarSign, Brain } from "lucide-react"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface AdvancedAnalyticsSectionProps {
  tenant: Tenant
}

export function AdvancedAnalyticsSection({ tenant }: AdvancedAnalyticsSectionProps) {
  const [selectedPeriod, setSelectedPeriod] = useState("30d")
  const [selectedTab, setSelectedTab] = useState("overview")

  // Mock analytics data
  const overviewMetrics = {
    totalRevenue: 89456.75,
    revenueGrowth: 24.5,
    totalFans: 15847,
    fanGrowth: 18.2,
    engagementRate: 34.8,
    engagementGrowth: 12.1,
    contentViews: 245678,
    viewsGrowth: 31.4,
  }

  const predictiveInsights = [
    {
      id: 1,
      type: "revenue",
      title: "Revenue Forecast",
      prediction: "Expected to reach $125K by month-end",
      confidence: 87,
      trend: "up",
      icon: DollarSign,
      color: "text-green-400",
    },
    {
      id: 2,
      type: "engagement",
      title: "Engagement Peak",
      prediction: "Best posting time: 8-10 PM weekdays",
      confidence: 92,
      trend: "up",
      icon: Heart,
      color: "text-[#ff00ff]",
    },
    {
      id: 3,
      type: "content",
      title: "Content Performance",
      prediction: "Behind-the-scenes content performs 40% better",
      confidence: 78,
      trend: "up",
      icon: Eye,
      color: "text-[#00ffff]",
    },
    {
      id: 4,
      type: "audience",
      title: "Audience Growth",
      prediction: "Potential to gain 2.5K new fans this month",
      confidence: 83,
      trend: "up",
      icon: Users,
      color: "text-yellow-400",
    },
  ]

  const contentPerformance = [
    {
      id: 1,
      title: "Exclusive Photoshoot BTS",
      type: "Photo Set",
      views: 12456,
      likes: 3421,
      revenue: 1245.5,
      engagement: 27.5,
      thumbnail: "/images/bts-demo.jpg",
    },
    {
      id: 2,
      title: "Personal Q&A Session",
      type: "Video",
      views: 8934,
      likes: 2156,
      revenue: 892.25,
      engagement: 24.1,
      thumbnail: "/images/content-editing.jpg",
    },
    {
      id: 3,
      title: "Workout Routine Tutorial",
      type: "Video",
      views: 15678,
      likes: 4523,
      revenue: 1567.75,
      engagement: 28.9,
      thumbnail: "/images/hero-content.jpg",
    },
  ]

  const audienceInsights = {
    demographics: {
      ageGroups: [
        { range: "18-24", percentage: 35, count: 5546 },
        { range: "25-34", percentage: 42, count: 6656 },
        { range: "35-44", percentage: 18, count: 2852 },
        { range: "45+", percentage: 5, count: 793 },
      ],
      topLocations: [
        { country: "United States", percentage: 45, count: 7131 },
        { country: "Canada", percentage: 18, count: 2852 },
        { country: "United Kingdom", percentage: 12, count: 1902 },
        { country: "Australia", percentage: 8, count: 1268 },
        { country: "Germany", percentage: 7, count: 1109 },
      ],
    },
    behavior: {
      peakHours: [
        { hour: "6 AM", activity: 15 },
        { hour: "12 PM", activity: 45 },
        { hour: "6 PM", activity: 85 },
        { hour: "9 PM", activity: 100 },
        { hour: "12 AM", activity: 35 },
      ],
      subscriptionTiers: [
        { tier: "Free", count: 8945, percentage: 56.4 },
        { tier: "Premium", count: 4523, percentage: 28.5 },
        { tier: "VIP", count: 1890, percentage: 11.9 },
        { tier: "Elite", count: 489, percentage: 3.1 },
      ],
    },
  }

  const aiRecommendations = [
    {
      id: 1,
      category: "Content Strategy",
      title: "Increase Behind-the-Scenes Content",
      description: "BTS content shows 40% higher engagement. Consider posting 2-3 times per week.",
      impact: "High",
      effort: "Low",
      priority: 1,
    },
    {
      id: 2,
      category: "Pricing Optimization",
      title: "Adjust VIP Tier Pricing",
      description: "Data suggests VIP tier could support 15% price increase without significant churn.",
      impact: "High",
      effort: "Low",
      priority: 2,
    },
    {
      id: 3,
      category: "Engagement",
      title: "Optimize Posting Schedule",
      description: "Shift 30% of posts to 8-10 PM window for maximum engagement.",
      impact: "Medium",
      effort: "Low",
      priority: 3,
    },
    {
      id: 4,
      category: "Monetization",
      title: "Launch Limited-Time Offers",
      description: "Create urgency with 48-hour exclusive content drops.",
      impact: "Medium",
      effort: "Medium",
      priority: 4,
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "text-green-400"
      case "Medium":
        return "text-yellow-400"
      case "Low":
        return "text-gray-400"
      default:
        return "text-gray-400"
    }
  }

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case "Low":
        return "text-green-400"
      case "Medium":
        return "text-yellow-400"
      case "High":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Advanced Analytics</h1>
          <p className="text-gray-400">AI-powered insights and predictive analytics for your content strategy</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
            <Brain className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">${overviewMetrics.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />+{overviewMetrics.revenueGrowth}% vs last period
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Fans</CardTitle>
            <Users className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{overviewMetrics.totalFans.toLocaleString()}</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />+{overviewMetrics.fanGrowth}% vs last period
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Engagement Rate</CardTitle>
            <Heart className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{overviewMetrics.engagementRate}%</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />+{overviewMetrics.engagementGrowth}% vs last period
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Content Views</CardTitle>
            <Eye className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{overviewMetrics.contentViews.toLocaleString()}</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />+{overviewMetrics.viewsGrowth}% vs last period
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
          <TabsTrigger value="content">Content Analytics</TabsTrigger>
          <TabsTrigger value="audience">Audience Insights</TabsTrigger>
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Revenue Trends</CardTitle>
                <CardDescription>Monthly revenue performance with forecasting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">January</span>
                    <span className="text-sm font-medium text-white">$67,340</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">February</span>
                    <span className="text-sm font-medium text-white">$78,920</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">March</span>
                    <span className="text-sm font-medium text-white">$89,456</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">April (Forecast)</span>
                    <span className="text-sm font-medium text-[#00ffff]">$125,000</span>
                  </div>
                  <Progress value={85} className="h-2 opacity-60" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Fan Growth Analysis</CardTitle>
                <CardDescription>Subscriber acquisition and retention metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-[#252d3a]">
                    <div className="text-2xl font-bold text-[#ff00ff]">2,847</div>
                    <div className="text-xs text-gray-400">New Fans</div>
                    <div className="text-xs text-green-400">+18.2%</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-[#252d3a]">
                    <div className="text-2xl font-bold text-[#00ffff]">94.2%</div>
                    <div className="text-xs text-gray-400">Retention Rate</div>
                    <div className="text-xs text-green-400">+2.1%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Free Tier</span>
                    <span className="text-white">8,945 (+12%)</span>
                  </div>
                  <Progress value={56} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Premium</span>
                    <span className="text-white">4,523 (+25%)</span>
                  </div>
                  <Progress value={29} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">VIP</span>
                    <span className="text-white">1,890 (+31%)</span>
                  </div>
                  <Progress value={12} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Elite</span>
                    <span className="text-white">489 (+45%)</span>
                  </div>
                  <Progress value={3} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {predictiveInsights.map((insight) => {
              const IconComponent = insight.icon
              return (
                <Card key={insight.id} className="bg-[#181e2b] border-[#2a2b30]">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <IconComponent className={`h-5 w-5 ${insight.color}`} />
                        <CardTitle className="text-white">{insight.title}</CardTitle>
                      </div>
                      <Badge className="bg-[#ff00ff]/20 text-[#ff00ff]">{insight.confidence}% confidence</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{insight.prediction}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-green-400">Positive trend</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Confidence</div>
                        <Progress value={insight.confidence} className="h-2 w-20" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">Top Performing Content</CardTitle>
              <CardDescription>Content ranked by engagement and revenue performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentPerformance.map((content, index) => (
                  <div key={content.id} className="flex items-center gap-4 p-4 rounded-lg bg-[#252d3a]">
                    <div className="flex items-center gap-3">
                      <div className="text-lg font-bold text-[#ff00ff]">#{index + 1}</div>
                      <img
                        src={content.thumbnail || "/placeholder.svg"}
                        alt={content.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-white">{content.title}</h4>
                        <p className="text-sm text-gray-400">{content.type}</p>
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-sm font-medium text-white">{content.views.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">Views</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{content.likes.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">Likes</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">${content.revenue.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">Revenue</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{content.engagement}%</div>
                        <div className="text-xs text-gray-400">Engagement</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Age Demographics</CardTitle>
                <CardDescription>Fan distribution by age groups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {audienceInsights.demographics.ageGroups.map((group) => (
                  <div key={group.range} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">{group.range}</span>
                      <span className="text-sm font-medium text-white">
                        {group.count.toLocaleString()} ({group.percentage}%)
                      </span>
                    </div>
                    <Progress value={group.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Geographic Distribution</CardTitle>
                <CardDescription>Top fan locations worldwide</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {audienceInsights.demographics.topLocations.map((location) => (
                  <div key={location.country} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">{location.country}</span>
                      <span className="text-sm font-medium text-white">
                        {location.count.toLocaleString()} ({location.percentage}%)
                      </span>
                    </div>
                    <Progress value={location.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Peak Activity Hours</CardTitle>
                <CardDescription>When your fans are most active</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {audienceInsights.behavior.peakHours.map((hour) => (
                  <div key={hour.hour} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">{hour.hour}</span>
                      <span className="text-sm font-medium text-white">{hour.activity}% activity</span>
                    </div>
                    <Progress value={hour.activity} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Subscription Tiers</CardTitle>
                <CardDescription>Fan distribution across subscription levels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {audienceInsights.behavior.subscriptionTiers.map((tier) => (
                  <div key={tier.tier} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">{tier.tier}</span>
                      <span className="text-sm font-medium text-white">
                        {tier.count.toLocaleString()} ({tier.percentage}%)
                      </span>
                    </div>
                    <Progress value={tier.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Brain className="h-5 w-5 text-[#ff00ff]" />
                AI-Powered Recommendations
              </CardTitle>
              <CardDescription>Personalized suggestions to optimize your content strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiRecommendations.map((rec) => (
                  <div key={rec.id} className="p-4 rounded-lg bg-[#252d3a] border-l-4 border-[#ff00ff]">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-[#00ffff]/20 text-[#00ffff]">{rec.category}</Badge>
                          <Badge className="bg-[#ff00ff]/20 text-[#ff00ff]">Priority {rec.priority}</Badge>
                        </div>
                        <h4 className="font-medium text-white">{rec.title}</h4>
                      </div>
                      <div className="flex gap-2">
                        <div className="text-center">
                          <div className={`text-sm font-medium ${getImpactColor(rec.impact)}`}>{rec.impact}</div>
                          <div className="text-xs text-gray-400">Impact</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-sm font-medium ${getEffortColor(rec.effort)}`}>{rec.effort}</div>
                          <div className="text-xs text-gray-400">Effort</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">{rec.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                        Implement
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-700 text-white">
                        Learn More
                      </Button>
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
