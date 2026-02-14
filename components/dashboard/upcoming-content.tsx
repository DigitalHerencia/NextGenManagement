import { Calendar, Clock } from "lucide-react"

export function UpcomingContent() {
  const upcomingContent = [
    {
      id: 1,
      title: "Photoshoot Release",
      type: "Photo",
      date: "Today",
      time: "2:00 PM",
    },
    {
      id: 2,
      title: "Q&A Session",
      type: "Live Stream",
      date: "Tomorrow",
      time: "7:00 PM",
    },
    {
      id: 3,
      title: "Behind the Scenes",
      type: "Video",
      date: "May 30",
      time: "12:00 PM",
    },
    {
      id: 4,
      title: "Fitness Routine",
      type: "Video",
      date: "June 1",
      time: "10:00 AM",
    },
    {
      id: 5,
      title: "Cooking Tutorial",
      type: "Video",
      date: "June 3",
      time: "3:00 PM",
    },
  ]

  return (
    <div className="space-y-4">
      {upcomingContent.map((content) => (
        <div key={content.id} className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{content.title}</p>
            <p className="text-sm text-gray-400">{content.type}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="mr-1 h-4 w-4" />
              {content.date}
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Clock className="mr-1 h-4 w-4" />
              {content.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
