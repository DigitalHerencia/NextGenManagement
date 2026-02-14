"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Mail, Phone, Instagram, Edit, Trash2 } from "lucide-react"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface RolodexSectionProps {
  tenant: Tenant
}

export function RolodexSection({ tenant }: RolodexSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddContactDialogOpen, setIsAddContactDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock data for contacts
  const contacts = [
    {
      id: 1,
      name: "Jane Smith",
      role: "Photographer",
      email: "jane@example.com",
      phone: "+1 (555) 123-4567",
      social: {
        instagram: "@janesmith",
        twitter: "@janesmith",
      },
      image: "/placeholder.svg?height=40&width=40",
      initials: "JS",
      category: "collaborator",
      notes: "Specializes in portrait photography. Available weekends.",
      rating: 5,
    },
    {
      id: 2,
      name: "John Doe",
      role: "Makeup Artist",
      email: "john@example.com",
      phone: "+1 (555) 987-6543",
      social: {
        instagram: "@johndoe",
        twitter: "@johndoe",
      },
      image: "/placeholder.svg?height=40&width=40",
      initials: "JD",
      category: "collaborator",
      notes: "Expert in special effects makeup. Very reliable.",
      rating: 4,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Content Creator",
      email: "sarah@example.com",
      phone: "+1 (555) 456-7890",
      social: {
        instagram: "@sarahjohnson",
        twitter: "@sarahjohnson",
      },
      image: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
      category: "collaborator",
      notes: "Great for collaboration videos. 100K+ followers.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Videographer",
      email: "michael@example.com",
      phone: "+1 (555) 789-0123",
      social: {
        instagram: "@michaelbrown",
        twitter: "@michaelbrown",
      },
      image: "/placeholder.svg?height=40&width=40",
      initials: "MB",
      category: "collaborator",
      notes: "Professional video editing and production services.",
      rating: 4,
    },
    {
      id: 5,
      name: "Emily Davis",
      role: "Brand Manager",
      email: "emily@example.com",
      phone: "+1 (555) 321-6547",
      social: {
        instagram: "@emilydavis",
        twitter: "@emilydavis",
      },
      image: "/placeholder.svg?height=40&width=40",
      initials: "ED",
      category: "business",
      notes: "Handles brand partnerships and sponsorship deals.",
      rating: 5,
    },
    {
      id: 6,
      name: "David Wilson",
      role: "Accountant",
      email: "david@example.com",
      phone: "+1 (555) 654-3210",
      social: {
        instagram: "@davidwilson",
        twitter: "@davidwilson",
      },
      image: "/placeholder.svg?height=40&width=40",
      initials: "DW",
      category: "business",
      notes: "Specializes in content creator tax planning and business setup.",
      rating: 5,
    },
  ]

  // Filter contacts based on search query and category
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.role.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || contact.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = [
    { value: "all", label: "All Contacts" },
    { value: "collaborator", label: "Collaborators" },
    { value: "business", label: "Business" },
    { value: "fan", label: "Fans" },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Rolodex</h1>
          <p className="text-gray-400">Manage your professional contacts and collaborators</p>
        </div>
        <Dialog open={isAddContactDialogOpen} onOpenChange={setIsAddContactDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add Contact
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Contact</DialogTitle>
              <DialogDescription>Add a new contact to your rolodex. Fill in the details below.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Input id="role" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input id="phone" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="collaborator">Collaborator</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="fan">Fan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="notes" className="text-right">
                  Notes
                </Label>
                <Textarea id="notes" className="col-span-3" />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddContactDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Add Contact</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            {categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value} className="text-xs">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredContacts.map((contact) => (
          <Card key={contact.id} className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={contact.image || "/placeholder.svg"} alt={contact.name} />
                    <AvatarFallback className="bg-[#ff00ff] text-white">{contact.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-sm text-white">{contact.name}</CardTitle>
                    <CardDescription className="text-[#ff00ff]">{contact.role}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-[#252d3a] text-[#00ffff]">
                  {contact.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Mail className="h-4 w-4 text-[#ff00ff]" />
                  <span className="truncate">{contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Phone className="h-4 w-4 text-[#ff00ff]" />
                  <span>{contact.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-[#ff00ff]" />
                <span className="text-sm text-[#00ffff]">{contact.social.instagram}</span>
              </div>

              {contact.notes && <p className="text-sm text-gray-400 line-clamp-2">{contact.notes}</p>}

              <div className="flex items-center justify-between pt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < contact.rating ? "text-[#ff00ff]" : "text-gray-600"}`}>
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex gap-1">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-[#00ffff] hover:text-white">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-400 hover:text-red-300">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No contacts found matching your search.</p>
        </div>
      )}
    </div>
  )
}
