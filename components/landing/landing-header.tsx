"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/90 bg-black/85 backdrop-blur supports-[backdrop-filter]:bg-black/75">
      <div className="pt-safe-top container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff]"
        >
          <Image
            src="/images/logo-main.png"
            alt="NextGen Management Agency"
            width={116}
            height={32}
            priority
          />
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-2 text-sm font-medium text-gray-200 transition-colors hover:text-[#00ffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden gap-2 md:flex">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="min-h-10 border-gray-700 text-white hover:bg-[#252d3a]"
            >
              Dashboard
            </Button>
          </Link>
          <Link href="/register">
            <Button className="min-h-10 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
              Sign Up
            </Button>
          </Link>
        </div>
        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
      {isMenuOpen ? (
        <div id="mobile-nav" className="border-t border-gray-800 bg-black md:hidden">
          <div className="pb-safe-bottom container flex flex-col gap-3 px-4 py-4 md:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-base font-medium text-gray-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-1 grid gap-2">
              <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="min-h-11 w-full border-gray-700 text-white">
                  Dashboard
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="min-h-11 w-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
