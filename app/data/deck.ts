import { z } from "zod"

const featureSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  accent: z.enum(["pink", "cyan"]),
})

const pricingPlanSchema = z.object({
  name: z.string().min(1),
  summary: z.string().min(1),
  priceLabel: z.string().min(1),
  cadence: z.string().min(1),
  ctaLabel: z.string().min(1),
  ctaHref: z.string().min(1),
  highlighted: z.boolean().default(false),
  items: z.array(z.string().min(1)).min(1),
})

const testimonialSchema = z.object({
  quote: z.string().min(1),
  author: z.string().min(1),
  audience: z.string().min(1),
  avatarSrc: z.string().min(1),
  avatarFallback: z.string().min(1),
})

const deckSchema = z.object({
  hero: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    primaryCta: z.object({ label: z.string().min(1), href: z.string().min(1) }),
    secondaryCta: z.object({ label: z.string().min(1), href: z.string().min(1) }),
  }),
  features: z.array(featureSchema).min(1),
  pricing: z.array(pricingPlanSchema).min(1),
  testimonials: z.array(testimonialSchema).min(1),
  cta: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    primaryCta: z.object({ label: z.string().min(1), href: z.string().min(1) }),
    secondaryCta: z.object({ label: z.string().min(1), href: z.string().min(1) }),
  }),
})

const deckSource = {
  hero: {
    title: "Empower Your Content Creation Journey",
    description:
      "NextGen Management Agency provides the tools and resources content creators need to succeed. Replace traditional talent agencies with our comprehensive platform.",
    primaryCta: { label: "Get Started", href: "/register" },
    secondaryCta: { label: "Learn More", href: "#features" },
  },
  features: [
    {
      title: "Customizable Rolodex",
      description:
        "Manage your contacts with customizable profile templates to streamline collaboration and onboarding.",
      accent: "pink",
    },
    {
      title: "Tax & Accounting",
      description:
        "Integrated system for managing taxes and accounting, tailored specifically for content creators.",
      accent: "cyan",
    },
    {
      title: "Content Calendar",
      description:
        "Drag-and-drop functionality for building and managing content campaigns effectively.",
      accent: "pink",
    },
    {
      title: "Wellness Resources",
      description:
        "Dedicated section for fitness, nutrition, meditation, and work-life balance resources.",
      accent: "cyan",
    },
    {
      title: "Fan Engagement",
      description: "Tools to foster interaction and build a community around your content.",
      accent: "pink",
    },
    {
      title: "Content Management",
      description: "Organize and publish your content with our intuitive management system.",
      accent: "cyan",
    },
  ],
  pricing: [
    {
      name: "Basic",
      summary: "Perfect for new creators just starting out.",
      priceLabel: "$50",
      cadence: "/month",
      ctaLabel: "Get Started",
      ctaHref: "/register?plan=basic",
      highlighted: false,
      items: [
        "Dashboard with basic analytics",
        "Content scheduling tools",
        "Community support resources",
        "Basic rolodex features",
      ],
    },
    {
      name: "Pro",
      summary: "For established creators looking to grow.",
      priceLabel: "$150",
      cadence: "/month",
      ctaLabel: "Get Started",
      ctaHref: "/register?plan=pro",
      highlighted: true,
      items: [
        "Advanced analytics",
        "Personalized growth consultations",
        "Content review and optimization",
        "Premium editing tools",
        "Full rolodex functionality",
      ],
    },
    {
      name: "Enterprise",
      summary: "For agencies managing multiple creators.",
      priceLabel: "Custom",
      cadence: "pricing",
      ctaLabel: "Contact Sales",
      ctaHref: "/contact",
      highlighted: false,
      items: [
        "Scaled solutions for multiple creators",
        "Dedicated account managers",
        "Advanced growth strategies",
        "Custom integrations",
        "White-label options",
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "NextGen Management Agency transformed my content creation business. The analytics tools helped me increase my revenue in just months. The platform is intuitive and the support team is incredible.",
      author: "Creator Name",
      audience: "100K+ Followers",
      avatarSrc: "/images/profile-2.jpg",
      avatarFallback: "CN",
    },
    {
      quote:
        "The subscription management and fan engagement tools are game-changers. I can now focus on creating content while NGMA handles the business side.",
      author: "Creator Name",
      audience: "50K+ Followers",
      avatarSrc: "/images/profile-3.jpg",
      avatarFallback: "CN",
    },
  ],
  cta: {
    title: "Ready to Take Your Content Creation to the Next Level?",
    description:
      "Join NextGen Management Agency today and access the tools and resources you need to succeed.",
    primaryCta: { label: "Get Started", href: "/register" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
} satisfies z.input<typeof deckSchema>

export const deckData = deckSchema.parse(deckSource)

export type DeckData = z.infer<typeof deckSchema>
export type DeckFeature = z.infer<typeof featureSchema>
export type DeckPricingPlan = z.infer<typeof pricingPlanSchema>
export type DeckTestimonial = z.infer<typeof testimonialSchema>
