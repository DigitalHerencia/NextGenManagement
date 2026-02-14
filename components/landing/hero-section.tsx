import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-black relative bg-[url('/images/hero-glamour.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col justify-center items-center text-center min-h-screen">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-transparent bg-clip-text">
                Empower Your Content Creation Journey
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                NextGen Management Agency provides the tools and resources content creators need to succeed. Replace
                traditional talent agencies with our comprehensive platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/register">
                <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Get Started</Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" className="border-gray-700 text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
