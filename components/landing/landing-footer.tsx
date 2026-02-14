import Link from "next/link"

const footerGroups = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/guides", label: "Guides" },
      { href: "/support", label: "Support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
]

export function LandingFooter() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black">
      <div className="container flex flex-col gap-8 px-4 py-8 md:flex-row md:justify-between md:px-6">
        <div className="flex max-w-xs flex-col gap-2">
          <Link
            href="/"
            className="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff]"
          >
            <span className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-2xl font-bold text-transparent">
              NGMA
            </span>
          </Link>
          <p className="text-sm text-gray-400">
            Empowering content creators with professional tools and resources.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <p className="font-medium text-white">{group.title}</p>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm text-sm text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="pb-safe-bottom container border-t border-gray-800 px-4 py-4 md:px-6">
        <p className="text-center text-sm text-gray-400">
          © NextGen Management Agency. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
