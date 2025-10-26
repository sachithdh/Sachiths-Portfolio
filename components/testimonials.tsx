import { Pin } from "./pin"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at Tech Innovations",
      company: "Tech Innovations Inc.",
      image: "/professional-woman-portrait.png",
      content:
        "An exceptional engineer who consistently delivers high-quality solutions. Their ability to tackle complex problems and mentor junior developers is outstanding.",
      rating: 5,
      color: "bg-primary/20",
      borderColor: "border-primary/40",
      rotation: "rotate-[1deg]",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Digital Solutions Co.",
      image: "/professional-man-portrait.png",
      content:
        "Working with them was a pleasure. They brought innovative ideas to the table and executed them flawlessly. A true team player with excellent communication skills.",
      rating: 5,
      color: "bg-secondary/20",
      borderColor: "border-secondary/40",
      rotation: "rotate-[-1.5deg]",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      company: "StartUp Labs",
      image: "/professional-woman-developer.png",
      content:
        "Their technical expertise and problem-solving abilities are remarkable. They transformed our codebase and improved our development workflow significantly.",
      rating: 5,
      color: "bg-accent/20",
      borderColor: "border-accent/40",
      rotation: "rotate-[2deg]",
    },
  ]

  return (
    <section id="testimonials" className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="relative mb-12">
          <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
          <div className="bg-card/95 backdrop-blur-sm p-6 shadow-xl border border-border glow-effect inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-sans flex items-center gap-3">
              <Quote className="w-10 h-10 text-primary" />
              Testimonials
            </h2>
            <p className="text-muted-foreground mt-2">What colleagues and clients say</p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <Pin
                className={`absolute -top-4 ${index % 3 === 0 ? "left-1/4" : index % 3 === 1 ? "left-1/2" : "right-1/4"} z-20`}
              />
              <div
                className={`${testimonial.color} ${testimonial.rotation} p-6 shadow-lg hover:rotate-0 hover:shadow-xl hover:scale-105 transition-all duration-300 paper-texture border ${testimonial.borderColor} h-full flex flex-col`}
              >
                <Quote className="w-8 h-8 text-primary/40 mb-4" />

                <p className="text-foreground/80 mb-6 flex-1 italic leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-border"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                    <p className="text-xs text-foreground/50">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
