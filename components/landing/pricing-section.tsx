import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-transparent bg-clip-text">
              Choose Your Plan
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer flexible plans to meet the needs of creators at every stage of their journey.
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col p-6 bg-gray-900 rounded-lg shadow-lg">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Basic</h3>
              <p className="text-gray-300">Perfect for new creators just starting out.</p>
            </div>
            <div className="mt-4 flex items-baseline text-white">
              <span className="text-4xl font-bold">$50</span>
              <span className="ml-1 text-gray-300">/month</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Dashboard with basic analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Content scheduling tools</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Community support resources</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Basic rolodex features</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/register?plan=basic">
                <Button className="w-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Get Started</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-gray-900 rounded-lg shadow-lg border-2 border-[#ff00ff]">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Pro</h3>
              <p className="text-gray-300">For established creators looking to grow.</p>
            </div>
            <div className="mt-4 flex items-baseline text-white">
              <span className="text-4xl font-bold">$150</span>
              <span className="ml-1 text-gray-300">/month</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Personalized growth consultations</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Content review and optimization</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Premium editing tools</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Full rolodex functionality</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/register?plan=pro">
                <Button className="w-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Get Started</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-gray-900 rounded-lg shadow-lg">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Enterprise</h3>
              <p className="text-gray-300">For agencies managing multiple creators.</p>
            </div>
            <div className="mt-4 flex items-baseline text-white">
              <span className="text-4xl font-bold">Custom</span>
              <span className="ml-1 text-gray-300">pricing</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Scaled solutions for multiple creators</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Dedicated account managers</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Advanced growth strategies</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">Custom integrations</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#ff00ff] mr-2" />
                <span className="text-gray-300">White-label options</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
