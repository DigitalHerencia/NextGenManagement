import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "Fan Name",
        image: "/placeholder.svg?height=32&width=32",
        initials: "FN",
      },
      action: "subscribed to your content",
      time: "2 minutes ago",
    },
    {
      id: 2,
      user: {
        name: "Fan Name",
        image: "/placeholder.svg?height=32&width=32",
        initials: "FN",
      },
      action: "liked your recent post",
      time: "10 minutes ago",
    },
    {
      id: 3,
      user: {
        name: "Fan Name",
        image: "/placeholder.svg?height=32&width=32",
        initials: "FN",
      },
      action: "commented on your photo",
      time: "30 minutes ago",
    },
    {
      id: 4,
      user: {
        name: "Fan Name",
        image: "/placeholder.svg?height=32&width=32",
        initials: "FN",
      },
      action: "sent you a message",
      time: "1 hour ago",
    },
    {
      id: 5,
      user: {
        name: "Fan Name",
        image: "/placeholder.svg?height=32&width=32",
        initials: "FN",
      },
      action: "purchased your premium content",
      time: "2 hours ago",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={activity.user.image || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user.name} {activity.action}
            </p>
            <p className="text-sm text-gray-400">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
