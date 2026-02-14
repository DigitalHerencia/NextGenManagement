import { Users, Calendar, BarChart3, Heart, MessageSquare } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-transparent bg-clip-text">
              Everything You Need to Succeed
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides all the tools content creators need to manage their business, engage with fans, and
              grow their audience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-[#ff00ff]" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Customizable Rolodex</h3>
                <p className="text-gray-300">
                  Manage your contacts with customizable profile templates to streamline collaboration and onboarding.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BarChart3 className="w-10 h-10 text-[#00ffff]" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Tax & Accounting</h3>
                <p className="text-gray-300">
                  Integrated system for managing taxes and accounting, tailored specifically for content creators.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-10 h-10 text-[#ff00ff]" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Content Calendar</h3>
                <p className="text-gray-300">
                  Drag-and-drop functionality for building and managing content campaigns effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <Heart className="w-10 h-10 text-[#00ffff]" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Wellness Resources</h3>
                <p className="text-gray-300">
                  Dedicated section for fitness, nutrition, meditation, and work-life balance resources.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare className="w-10 h-10 text-[#ff00ff]" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Fan Engagement</h3>
                <p className="text-gray-300">Tools to foster interaction and build a community around your content.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-[#00ffff]" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Content Management</h3>
                <p className="text-gray-300">Organize and publish your content with our intuitive management system.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
