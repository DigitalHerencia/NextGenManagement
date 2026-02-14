import { Check } from "lucide-react"
import Link from "next/link"

import { deckData } from "@/app/data/deck"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-snap w-full bg-black py-16 md:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm">Pricing</div>
          <h2
            id="pricing-heading"
            className="text-balance bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl"
          >
            Choose Your Plan
          </h2>
          <p className="text-base text-gray-300 sm:text-lg">
            We offer flexible plans to meet the needs of creators at every stage of their journey.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-8">
          {deckData.pricing.map((plan) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col rounded-xl border bg-gray-900 p-6 shadow-lg ${
                plan.highlighted ? "border-[#ff00ff]" : "border-gray-800"
              }`}
              aria-label={`${plan.name} plan`}
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-gray-300">{plan.summary}</p>
              </div>
              <div className="mt-4 flex items-baseline text-white">
                <span className="text-4xl font-bold">{plan.priceLabel}</span>
                <span className="ml-1 text-gray-300">{plan.cadence}</span>
              </div>
              <ul className="mt-6 grow space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#ff00ff]" aria-hidden="true" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href={plan.ctaHref}>
                  <Button className="min-h-11 w-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                    {plan.ctaLabel}
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
