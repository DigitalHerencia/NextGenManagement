"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Brain, Utensils, Moon, Target, Play, CheckCircle } from "lucide-react"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface WellnessSectionProps {
  tenant: Tenant
}

export function WellnessSection({ tenant }: WellnessSectionProps) {
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null)

  // Mock wellness data
  const fitnessGoals = [
    { id: 1, title: "Daily Steps", current: 8500, target: 10000, unit: "steps" },
    { id: 2, title: "Workout Sessions", current: 4, target: 5, unit: "sessions/week" },
    { id: 3, title: "Water Intake", current: 6, target: 8, unit: "glasses/day" },
    { id: 4, title: "Sleep Hours", current: 7.5, target: 8, unit: "hours/night" },
  ]

  const workoutPlans = [
    {
      id: 1,
      title: "Morning Energy Boost",
      duration: "15 min",
      difficulty: "Beginner",
      type: "Cardio",
      description: "Quick morning routine to energize your day",
    },
    {
      id: 2,
      title: "Strength Training",
      duration: "30 min",
      difficulty: "Intermediate",
      type: "Strength",
      description: "Full body strength workout for content creators",
    },
    {
      id: 3,
      title: "Yoga Flow",
      duration: "20 min",
      difficulty: "Beginner",
      type: "Flexibility",
      description: "Relaxing yoga session for stress relief",
    },
    {
      id: 4,
      title: "HIIT Workout",
      duration: "25 min",
      difficulty: "Advanced",
      type: "Cardio",
      description: "High-intensity interval training",
    },
  ]

  const nutritionTips = [
    {
      id: 1,
      title: "Brain Food for Creators",
      description: "Foods that boost creativity and focus",
      category: "Nutrition",
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "Meal Prep for Busy Schedules",
      description: "Quick and healthy meal preparation tips",
      category: "Meal Prep",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Hydration for Better Performance",
      description: "Why staying hydrated improves content quality",
      category: "Hydration",
      readTime: "2 min read",
    },
  ]

  const meditationSessions = [
    {
      id: 1,
      title: "Morning Mindfulness",
      duration: "10 min",
      type: "Guided",
      description: "Start your day with clarity and focus",
    },
    {
      id: 2,
      title: "Stress Relief",
      duration: "15 min",
      type: "Breathing",
      description: "Release tension and anxiety",
    },
    {
      id: 3,
      title: "Creative Visualization",
      duration: "20 min",
      type: "Visualization",
      description: "Enhance creativity and inspiration",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400"
      case "Advanced":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Wellness Hub</h1>
          <p className="text-gray-400">Take care of your mind and body for better content creation</p>
        </div>
        <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
          <Target className="mr-2 h-4 w-4" />
          Set Goals
        </Button>
      </div>

      {/* Wellness Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {fitnessGoals.map((goal) => (
          <Card key={goal.id} className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-white">{goal.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">
                    {goal.current} {goal.unit}
                  </span>
                  <span className="text-gray-400">
                    {goal.target} {goal.unit}
                  </span>
                </div>
                <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                <p className="text-xs text-gray-400">{Math.round((goal.current / goal.target) * 100)}% of daily goal</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="fitness" className="space-y-4">
        <TabsList>
          <TabsTrigger value="fitness">Fitness</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="meditation">Meditation</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
        </TabsList>

        <TabsContent value="fitness" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Activity className="h-5 w-5 text-[#ff00ff]" />
                  Workout Plans
                </CardTitle>
                <CardDescription>Tailored exercises for content creators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {workoutPlans.map((workout) => (
                  <div key={workout.id} className="p-3 rounded-lg bg-[#252d3a] space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-white">{workout.title}</h4>
                      <Badge className={getDifficultyColor(workout.difficulty)}>{workout.difficulty}</Badge>
                    </div>
                    <p className="text-sm text-gray-400">{workout.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span>{workout.duration}</span>
                        <span>{workout.type}</span>
                      </div>
                      <Button size="sm" className="bg-[#ff00ff] hover:bg-[#ff00ff]/80">
                        <Play className="mr-1 h-3 w-3" />
                        Start
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="h-5 w-5 text-[#00ffff]" />
                  Weekly Progress
                </CardTitle>
                <CardDescription>Your fitness achievements this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Monday - Morning Boost</span>
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Tuesday - Strength Training</span>
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Wednesday - Yoga Flow</span>
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Thursday - Rest Day</span>
                    <div className="w-4 h-4 rounded-full border-2 border-gray-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Friday - HIIT Workout</span>
                    <div className="w-4 h-4 rounded-full border-2 border-gray-600" />
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Weekly Goal</span>
                    <span className="text-sm text-[#ff00ff]">3/5 completed</span>
                  </div>
                  <Progress value={60} className="mt-2 h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="nutrition" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-[#ff00ff]" />
                  Nutrition Tips
                </CardTitle>
                <CardDescription>Healthy eating for content creators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {nutritionTips.map((tip) => (
                  <div key={tip.id} className="p-3 rounded-lg bg-[#252d3a] space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-white">{tip.title}</h4>
                      <Badge className="bg-[#00ffff]/20 text-[#00ffff]">{tip.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-400">{tip.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{tip.readTime}</span>
                      <Button size="sm" variant="ghost" className="text-[#ff00ff]">
                        Read More
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Daily Nutrition</CardTitle>
                <CardDescription>Track your daily intake</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Calories</span>
                    <span className="text-sm text-white">1,850 / 2,000</span>
                  </div>
                  <Progress value={92.5} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Protein</span>
                    <span className="text-sm text-white">120g / 150g</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Carbs</span>
                    <span className="text-sm text-white">180g / 200g</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Water</span>
                    <span className="text-sm text-white">6 / 8 glasses</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="meditation" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="h-5 w-5 text-[#ff00ff]" />
                  Meditation Sessions
                </CardTitle>
                <CardDescription>Mindfulness for better creativity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {meditationSessions.map((session) => (
                  <div key={session.id} className="p-3 rounded-lg bg-[#252d3a] space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-white">{session.title}</h4>
                      <Badge className="bg-purple-500/20 text-purple-400">{session.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-400">{session.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{session.duration}</span>
                      <Button size="sm" className="bg-[#ff00ff] hover:bg-[#ff00ff]/80">
                        <Play className="mr-1 h-3 w-3" />
                        Start
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Mindfulness Streak</CardTitle>
                <CardDescription>Your meditation consistency</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ff00ff]">7</div>
                  <p className="text-sm text-gray-400">Days in a row</p>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                        i < 7 ? "bg-[#ff00ff] text-white" : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Weekly Goal</span>
                    <span className="text-white">7/7 sessions</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sleep" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Moon className="h-5 w-5 text-[#ff00ff]" />
                  Sleep Tracking
                </CardTitle>
                <CardDescription>Monitor your sleep patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00ffff]">7.5</div>
                  <p className="text-sm text-gray-400">Hours last night</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Bedtime</span>
                    <span className="text-sm text-white">11:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Wake Time</span>
                    <span className="text-sm text-white">7:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Sleep Quality</span>
                    <Badge className="bg-green-500/20 text-green-400">Good</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Sleep Tips</CardTitle>
                <CardDescription>Improve your sleep quality</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg bg-[#252d3a]">
                  <h4 className="font-medium text-white mb-2">Create a Sleep Schedule</h4>
                  <p className="text-sm text-gray-400">Go to bed and wake up at the same time every day</p>
                </div>
                <div className="p-3 rounded-lg bg-[#252d3a]">
                  <h4 className="font-medium text-white mb-2">Limit Screen Time</h4>
                  <p className="text-sm text-gray-400">Avoid screens 1 hour before bedtime</p>
                </div>
                <div className="p-3 rounded-lg bg-[#252d3a]">
                  <h4 className="font-medium text-white mb-2">Optimize Environment</h4>
                  <p className="text-sm text-gray-400">Keep your bedroom cool, dark, and quiet</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
