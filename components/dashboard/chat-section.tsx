"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MessageSquare,
  Send,
  Search,
  Phone,
  Video,
  MoreVertical,
  Smile,
  Paperclip,
  Gift,
  Crown,
  Star,
  Users,
  Check,
  CheckCheck,
} from "lucide-react"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface ChatSectionProps {
  tenant: Tenant
}

export function ChatSection({ tenant }: ChatSectionProps) {
  const [selectedChat, setSelectedChat] = useState<number | null>(1)
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState<any[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Mock chat data
  const chatList = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/images/profile-1.jpg",
      lastMessage: "Thank you for the amazing content! 💕",
      timestamp: "2 min ago",
      unread: 3,
      tier: "VIP",
      isOnline: true,
      lastSeen: "Online",
    },
    {
      id: 2,
      name: "Sarah Miller",
      avatar: "/images/profile-2.jpg",
      lastMessage: "When is your next live stream?",
      timestamp: "15 min ago",
      unread: 1,
      tier: "Premium",
      isOnline: false,
      lastSeen: "5 min ago",
    },
    {
      id: 3,
      name: "Mike Chen",
      avatar: "/images/profile-3.jpg",
      lastMessage: "Love your latest post! 🔥",
      timestamp: "1 hour ago",
      unread: 0,
      tier: "Elite",
      isOnline: true,
      lastSeen: "Online",
    },
    {
      id: 4,
      name: "Emma Davis",
      avatar: "/images/profile-1.jpg",
      lastMessage: "Can you do a custom video for me?",
      timestamp: "2 hours ago",
      unread: 2,
      tier: "VIP",
      isOnline: false,
      lastSeen: "1 hour ago",
    },
    {
      id: 5,
      name: "David Wilson",
      avatar: "/images/profile-2.jpg",
      lastMessage: "Thanks for the shoutout! ✨",
      timestamp: "3 hours ago",
      unread: 0,
      tier: "Premium",
      isOnline: false,
      lastSeen: "2 hours ago",
    },
  ]

  const mockMessages = [
    {
      id: 1,
      senderId: 1,
      senderName: "Alex Johnson",
      message: "Hey! I just saw your latest post and it's absolutely amazing! 💕",
      timestamp: "10:30 AM",
      isOwn: false,
      status: "read",
    },
    {
      id: 2,
      senderId: "creator",
      senderName: "You",
      message: "Thank you so much! I'm glad you enjoyed it 😊",
      timestamp: "10:32 AM",
      isOwn: true,
      status: "read",
    },
    {
      id: 3,
      senderId: 1,
      senderName: "Alex Johnson",
      message: "I was wondering if you could do a custom video for my birthday next week?",
      timestamp: "10:35 AM",
      isOwn: false,
      status: "read",
    },
    {
      id: 4,
      senderId: "creator",
      senderName: "You",
      message:
        "Of course! I'd love to create something special for you. Send me the details and I'll get started on it 🎉",
      timestamp: "10:37 AM",
      isOwn: true,
      status: "read",
    },
    {
      id: 5,
      senderId: 1,
      senderName: "Alex Johnson",
      message: "Thank you for the amazing content! 💕",
      timestamp: "10:45 AM",
      isOwn: false,
      status: "delivered",
    },
  ]

  useEffect(() => {
    if (selectedChat) {
      setMessages(mockMessages)
    }
  }, [selectedChat])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      const message = {
        id: messages.length + 1,
        senderId: "creator",
        senderName: "You",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
        status: "sent",
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case "VIP":
        return Crown
      case "Elite":
        return Star
      case "Premium":
        return Gift
      default:
        return Users
    }
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

  const selectedChatData = chatList.find((chat) => chat.id === selectedChat)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Chat</h1>
          <p className="text-gray-400">Connect with your fans in real-time</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-gray-700 text-white">
            <Users className="mr-2 h-4 w-4" />
            Group Chat
          </Button>
          <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
            <MessageSquare className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 h-[600px]">
        {/* Chat List */}
        <Card className="bg-[#181e2b] border-[#2a2b30] lg:col-span-1">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Messages</CardTitle>
              <Badge className="bg-[#ff00ff]/20 text-[#ff00ff]">
                {chatList.reduce((acc, chat) => acc + chat.unread, 0)} unread
              </Badge>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {chatList.map((chat) => {
                const TierIcon = getTierIcon(chat.tier)
                return (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-3 cursor-pointer hover:bg-[#252d3a] transition-colors ${
                      selectedChat === chat.id ? "bg-[#252d3a] border-l-2 border-[#ff00ff]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                          <AvatarFallback className="bg-[#ff00ff] text-white">{chat.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {chat.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#181e2b]" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-white truncate">{chat.name}</p>
                            <TierIcon className={`h-4 w-4 ${getTierColor(chat.tier)}`} />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">{chat.timestamp}</span>
                            {chat.unread > 0 && (
                              <Badge className="bg-[#ff00ff] text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                                {chat.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                        <p className="text-xs text-gray-500">{chat.lastSeen}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="bg-[#181e2b] border-[#2a2b30] lg:col-span-2 flex flex-col">
          {selectedChatData ? (
            <>
              {/* Chat Header */}
              <CardHeader className="pb-3 border-b border-[#2a2b30]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedChatData.avatar || "/placeholder.svg"} alt={selectedChatData.name} />
                        <AvatarFallback className="bg-[#ff00ff] text-white">
                          {selectedChatData.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {selectedChatData.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#181e2b]" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-white">{selectedChatData.name}</p>
                        <Badge className={`${getTierColor(selectedChatData.tier)} bg-transparent border`}>
                          {selectedChatData.tier}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400">{selectedChatData.lastSeen}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="text-[#00ffff]">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-[#00ffff]">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[70%] ${message.isOwn ? "order-2" : "order-1"}`}>
                        <div
                          className={`p-3 rounded-lg ${
                            message.isOwn
                              ? "bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white"
                              : "bg-[#252d3a] text-white"
                          }`}
                        >
                          <p className="text-sm">{message.message}</p>
                        </div>
                        <div
                          className={`flex items-center gap-1 mt-1 ${message.isOwn ? "justify-end" : "justify-start"}`}
                        >
                          <span className="text-xs text-gray-400">{message.timestamp}</span>
                          {message.isOwn && (
                            <div className="text-gray-400">
                              {message.status === "sent" && <Check className="h-3 w-3" />}
                              {message.status === "delivered" && <CheckCheck className="h-3 w-3" />}
                              {message.status === "read" && <CheckCheck className="h-3 w-3 text-[#00ffff]" />}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t border-[#2a2b30]">
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" className="text-gray-400">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-gray-400">
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button size="sm" variant="ghost" className="text-[#ff00ff]">
                    <Gift className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Select a conversation to start chatting</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
