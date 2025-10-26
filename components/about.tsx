import type React from "react"
import { Pin } from "./pin"
import { Code2, Palette, Rocket, Users, Heart, Coffee, Zap, Target, Sparkles, Brain, Award } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-secondary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

            <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative inline-block mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <Pin className="absolute -top-4 -left-4 z-20" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground bg-card px-8 py-4 shadow-lg -rotate-1 border-2 border-primary/30 paper-texture glow-effect hover:scale-105 transition-transform duration-300">
            <span className="inline-flex items-center gap-2">
              About Me
            </span>
          </h2>
        </div>

        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="relative max-w-4xl mx-auto">
            <Pin className="absolute -top-4 right-1/4 z-20" />
            <div className="bg-card p-8 md:p-10 shadow-xl rotate-[0.5deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 paper-texture border border-border glow-effect group">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Brain className="w-6 h-6 text-primary/30" />
              </div>
              
              <p className="text-xl text-foreground/90 leading-relaxed mb-6 font-medium">
                Hi, I'm <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">Sachith Dhanushka</span>, 
                a passionate Computer Science undergraduate at the University of Colombo School of Computing, 
                with a strong foundation in <span className="text-primary font-semibold">software engineering</span>, 
                <span className="text-primary font-semibold"> cybersecurity</span>, 
                <span className="text-primary font-semibold"> DevOps</span>, and 
                <span className="text-primary font-semibold"> networking</span>.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-primary/10 rounded-full">
                    <Rocket className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-lg text-foreground/90 leading-relaxed flex-1">
                    I enjoy working on projects that blend security, automation, and system optimization, such as building CI/CD pipelines 
                    with GitHub Actions, deploying applications on AWS using Docker, 
                    and implementing robust authentication and access control systems.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-secondary/10 rounded-full">
                    <Heart className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground/90 leading-relaxed flex-1">
                    When I'm not coding, I enjoy music, movies, and exploring new technologies that challenge my problem-solving skills.
                  </p>
                </div>
              </div>
              
              <div className="relative mt-8 pl-6 border-l-4 border-primary bg-primary/5 py-4 rounded-r-lg hover:bg-primary/10 transition-colors duration-300">
                <Award className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary bg-card p-1 rounded-full" />
                <p className="text-lg text-foreground/80 leading-relaxed italic">
                  "Code is like humor. When you have to explain it, it's bad."
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-medium">- Cory House</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
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
            rotation="-rotate-1"
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

        <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="relative inline-block mb-8">
            <Pin className="absolute -top-4 -left-4 z-20" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground bg-card px-6 py-3 shadow-lg rotate-[-0.5deg] hover:rotate-0 transition-transform duration-300 border border-primary/30 paper-texture">
              Beyond Code
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <InterestCard
              icon={<Heart className="w-6 h-6" />}
              title="Open Source"
              description="Contributing to community projects"
              rotation="-rotate-1"
            />
            <InterestCard
              icon={<Coffee className="w-6 h-6" />}
              title="Tech Writing"
              description="Sharing knowledge through blogs"
              rotation="rotate-[1.5deg]"
            />
            <InterestCard
              icon={<Zap className="w-6 h-6" />}
              title="Hackathons"
              description="Building innovative solutions"
              rotation="rotate-[-0.5deg]"
            />
            <InterestCard
              icon={<Target className="w-6 h-6" />}
              title="Mentoring"
              description="Helping others grow in tech"
              rotation="rotate-[1deg]"
            />
          </div>
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
      <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div
        className={`bg-card p-6 shadow-lg ${rotation} hover:rotate-0 hover:scale-105 transition-all duration-300 paper-texture border border-border hover:shadow-2xl hover:border-primary/50 h-full cursor-pointer`}
      >
        <div className={`${color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded pointer-events-none" />
      </div>
    </div>
  )
}

function InterestCard({
  icon,
  title,
  description,
  rotation,
}: {
  icon: React.ReactNode
  title: string
  description: string
  rotation: string
}) {
  return (
    <div className="relative group">
      <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div
        className={`bg-accent/10 p-5 shadow-md ${rotation} hover:rotate-0 hover:scale-105 transition-all duration-300 paper-texture border border-accent/30 hover:shadow-xl h-full hover:bg-accent/20 cursor-pointer relative overflow-hidden`}
      >
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
        <div className="relative z-10">
          <div className="text-accent mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            {icon}
          </div>
          <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {title}
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
