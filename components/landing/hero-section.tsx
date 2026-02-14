import Link from "next/link"

import { deckData } from "@/app/data/deck"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      className="section-snap relative flex min-h-dvh w-full items-center bg-black bg-[url('/images/hero-glamour.jpg')] bg-cover bg-center bg-no-repeat"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
      <div className="container relative z-10 px-4 py-16 md:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center space-y-6 text-center">
          <h1
            id="hero-heading"
            className="text-balance bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl xl:text-6xl"
          >
            {deckData.hero.title}
          </h1>
          <p className="max-w-[640px] text-base text-gray-200 sm:text-lg md:text-xl">
            {deckData.hero.description}
          </p>
          <div className="flex w-full flex-col justify-center gap-3 min-[420px]:w-auto min-[420px]:flex-row">
            <Link href={deckData.hero.primaryCta.href}>
              <Button className="min-h-11 w-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] px-6 text-white min-[420px]:w-auto">
                {deckData.hero.primaryCta.label}
              </Button>
            </Link>
            <Link href={deckData.hero.secondaryCta.href}>
              <Button
                variant="outline"
                className="min-h-11 w-full border-gray-600 bg-black/20 px-6 text-white hover:bg-white/10 min-[420px]:w-auto"
              >
                {deckData.hero.secondaryCta.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
