"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Mon",
    likes: 400,
    comments: 240,
    shares: 100,
  },
  {
    name: "Tue",
    likes: 300,
    comments: 139,
    shares: 80,
  },
  {
    name: "Wed",
    likes: 500,
    comments: 300,
    shares: 120,
  },
  {
    name: "Thu",
    likes: 450,
    comments: 198,
    shares: 110,
  },
  {
    name: "Fri",
    likes: 600,
    comments: 380,
    shares: 150,
  },
  {
    name: "Sat",
    likes: 750,
    comments: 420,
    shares: 200,
  },
  {
    name: "Sun",
    likes: 800,
    comments: 450,
    shares: 220,
  },
]

export function FanEngagementMetrics() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Line type="monotone" dataKey="likes" stroke="#ff00ff" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="comments" stroke="#00ffff" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="shares" stroke="#ffffff" strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
