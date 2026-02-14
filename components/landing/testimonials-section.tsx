import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-transparent bg-clip-text">
              Success Stories
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from content creators who have transformed their careers with NextGen Management Agency.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <div className="flex flex-col justify-between p-6 bg-gray-900 rounded-lg shadow-lg">
            <div>
              <p className="mb-4 text-gray-300">
                "NextGen Management Agency transformed my content creation business. The analytics tools helped me
                increase my revenue by 300% in just 6 months. The platform is intuitive and the support team is
                incredible."
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/images/profile-2.jpg" alt="Creator" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">Creator Name</p>
                <p className="text-sm text-gray-400">100K+ Followers</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-6 bg-gray-900 rounded-lg shadow-lg">
            <div>
              <p className="mb-4 text-gray-300">
                "The subscription management and fan engagement tools are game-changers. I can now focus on creating
                content while NGMA handles the business side. My fan retention rate improved by 85%!"
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/images/profile-3.jpg" alt="Creator" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">Creator Name</p>
                <p className="text-sm text-gray-400">50K+ Followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
