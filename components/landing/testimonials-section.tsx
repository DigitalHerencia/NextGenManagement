import { deckData } from "@/app/data/deck"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-snap w-full bg-black py-16 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm">Testimonials</div>
          <h2
            id="testimonials-heading"
            className="text-balance bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl"
          >
            Success Stories
          </h2>
          <p className="text-base text-gray-300 sm:text-lg">
            Hear from content creators who have transformed their careers with NextGen Management
            Agency.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
          {deckData.testimonials.map((testimonial) => (
            <article
              key={testimonial.quote}
              className="rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-lg"
            >
              <blockquote className="mb-5 text-gray-300">“{testimonial.quote}”</blockquote>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatarSrc}
                    alt={`${testimonial.author} profile image`}
                  />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.audience}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
