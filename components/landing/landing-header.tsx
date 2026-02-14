"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo-main.png" alt="NGMA" className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/#features" className="text-sm font-medium text-gray-300 hover:text-[#00ffff]">
            Features
          </Link>
          <Link href="/#pricing" className="text-sm font-medium text-gray-300 hover:text-[#00ffff]">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-[#00ffff]">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-[#00ffff]">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-2">
          <Link href="/dashboard">
            <Button variant="outline" className="border-gray-700 text-white hover:bg-[#252d3a]">
              Dashboard
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Sign Up</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black">
          <div className="container flex flex-col gap-4 py-4 px-4 md:px-6">
            <Link
              href="/#features"
              className="text-sm font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2">
              <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-gray-700 text-white">
                  Dashboard
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
