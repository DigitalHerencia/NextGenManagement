import Link from "next/link"

export function LandingFooter() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black">
      <div className="container flex flex-col gap-6 py-8 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-transparent bg-clip-text">
              NGMA
            </span>
          </Link>
          <p className="text-sm text-gray-400">Empowering content creators with professional tools and resources.</p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="font-medium text-white">Company</p>
            <Link href="/about" className="text-sm text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
              Contact
            </Link>
            <Link href="/careers" className="text-sm text-gray-400 hover:text-white">
              Careers
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium text-white">Resources</p>
            <Link href="/blog" className="text-sm text-gray-400 hover:text-white">
              Blog
            </Link>
            <Link href="/guides" className="text-sm text-gray-400 hover:text-white">
              Guides
            </Link>
            <Link href="/support" className="text-sm text-gray-400 hover:text-white">
              Support
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium text-white">Legal</p>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
      <div className="container border-t border-gray-800 py-4 px-4 md:px-6">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} NextGen Management Agency. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
