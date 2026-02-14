import { BarChart3, Calendar, Heart, MessageSquare, Users } from "lucide-react"

import { deckData, type DeckFeature } from "@/app/data/deck"

const iconMap = {
  "Customizable Rolodex": Users,
  "Tax & Accounting": BarChart3,
  "Content Calendar": Calendar,
  "Wellness Resources": Heart,
  "Fan Engagement": MessageSquare,
  "Content Management": Users,
} as const satisfies Record<string, typeof Users>

function FeatureCard({ feature }: { feature: DeckFeature }) {
  const Icon = (iconMap as Record<string, typeof Users>)[feature.title] ?? Users
  const accentClass = feature.accent === "pink" ? "text-[#ff00ff]" : "text-[#00ffff]"

  return (
    <li className="rounded-xl border border-gray-800/70 bg-gray-950/80 p-5">
      <div className="flex items-start gap-4">
        <Icon className={`h-8 w-8 shrink-0 ${accentClass}`} aria-hidden="true" />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white sm:text-xl">{feature.title}</h3>
          <p className="text-sm text-gray-300 sm:text-base">{feature.description}</p>
        </div>
      </div>
    </li>
  )
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-snap w-full bg-black py-16 md:py-24"
      aria-labelledby="features-heading"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm">Features</div>
          <h2
            id="features-heading"
            className="text-balance bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl"
          >
            Everything You Need to Succeed
          </h2>
          <p className="text-base text-gray-300 sm:text-lg">
            Our platform provides the tools content creators need to manage their business, engage
            with fans, and grow their audience.
          </p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:gap-6 lg:grid-cols-2">
          {deckData.features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </ul>
      </div>
    </section>
  )
}
