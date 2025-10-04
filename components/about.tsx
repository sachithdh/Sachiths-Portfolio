import type React from "react"
import { Pin } from "./pin"
import { Code2, Palette, Rocket, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-muted/30 relative">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative inline-block mb-12">
          <Pin className="absolute -top-4 -left-4 z-20" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground bg-card px-8 py-4 shadow-lg rotate-[-1deg] border-2 border-primary/30 paper-texture glow-effect">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <Pin className="absolute -top-4 right-1/4 z-20" />
            <div className="bg-card p-8 shadow-xl rotate-[1deg] hover:rotate-0 transition-all duration-300 paper-texture border border-border glow-effect h-full">
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                I'm a software engineer with 5+ years of experience building web applications. I specialize in
                full-stack development with a focus on creating intuitive user interfaces and robust backend systems.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                When I'm not coding, you'll find me contributing to open source projects, writing technical blog posts,
                or exploring new technologies.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed italic">
                "Code is like humor. When you have to explain it, it's bad." - Cory House
              </p>
            </div>
          </div>

          <div className="relative">
            <Pin className="absolute -top-4 left-1/3 z-20" />
            <div className="bg-card p-4 shadow-xl rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 border border-border polaroid-shadow">
              <div className="aspect-square bg-muted mb-4 overflow-hidden">
                <img src="/modern-software-engineer-workspace-with-multiple-m.jpg" alt="Workspace" className="w-full h-full object-cover" />
              </div>
              <p className="text-center font-mono text-sm text-muted-foreground">My creative space ✨</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            icon={<Code2 className="w-8 h-8" />}
            title="Clean Code"
            description="Writing maintainable, scalable solutions"
            rotation="rotate-[1deg]"
            color="text-primary"
          />
          <ValueCard
            icon={<Palette className="w-8 h-8" />}
            title="Design Focus"
            description="Crafting beautiful user experiences"
            rotation="rotate-[-1deg]"
            color="text-secondary"
          />
          <ValueCard
            icon={<Rocket className="w-8 h-8" />}
            title="Innovation"
            description="Exploring cutting-edge technologies"
            rotation="rotate-[2deg]"
            color="text-accent"
          />
          <ValueCard
            icon={<Users className="w-8 h-8" />}
            title="Collaboration"
            description="Building together with teams"
            rotation="rotate-[-2deg]"
            color="text-chart-4"
          />
        </div>
      </div>
    </section>
  )
}

function ValueCard({
  icon,
  title,
  description,
  rotation,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  rotation: string
  color: string
}) {
  return (
    <div className="relative group">
      <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div
        className={`bg-card p-6 shadow-lg ${rotation} hover:rotate-0 transition-all duration-300 paper-texture border border-border hover:shadow-xl h-full`}
      >
        <div className={`${color} mb-3`}>{icon}</div>
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
