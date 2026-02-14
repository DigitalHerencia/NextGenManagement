import Link from "next/link"

import { deckData } from "@/app/data/deck"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section
      className="section-snap w-full bg-gradient-to-r from-[#ff00ff]/20 to-[#00ffff]/20 py-16 md:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-5 text-center">
          <h2
            id="cta-heading"
            className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            {deckData.cta.title}
          </h2>
          <p className="max-w-[640px] text-base text-gray-200 sm:text-lg">
            {deckData.cta.description}
          </p>
          <div className="flex w-full flex-col gap-3 min-[420px]:w-auto min-[420px]:flex-row">
            <Link href={deckData.cta.primaryCta.href}>
              <Button className="min-h-11 w-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white min-[420px]:w-auto">
                {deckData.cta.primaryCta.label}
              </Button>
            </Link>
            <Link href={deckData.cta.secondaryCta.href}>
              <Button
                variant="outline"
                className="min-h-11 w-full border-gray-700 text-white min-[420px]:w-auto"
              >
                {deckData.cta.secondaryCta.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
