import type React from "react"
import { Pin } from "./pin"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-start">
          {/* Left Sidebar - Profile Card */}
          <div className="relative">
            <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
            <div className="bg-card/95 backdrop-blur-sm p-8 shadow-2xl hover:rotate-0 rotate-1 transition-all duration-300 border border-border glow-effect rounded-2xl sticky top-8">
              <div className="space-y-6">
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden ring-4 ring-primary/10 shadow-xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NT1ddPWHcQz3klrgDIgyyydaiVCRGG.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Title */}
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-bold text-foreground font-sans">Alex Morgan</h1>
                  <p className="text-primary font-medium">Software Engineer</p>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-xs text-muted-foreground">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">50+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href="https://github.com"
                    className="p-2.5 hover:bg-primary/20 rounded-lg transition-all hover:scale-110 border border-border/50"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="p-2.5 hover:bg-primary/20 rounded-lg transition-all hover:scale-110 border border-border/50"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href="mailto:hello@example.com"
                    className="p-2.5 hover:bg-primary/20 rounded-lg transition-all hover:scale-110 border border-border/50"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-foreground" />
                  </a>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2 pt-2">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium group">
                    Download Resume
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="w-full border-border hover:bg-accent/10 bg-transparent">
                    View Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="space-y-8 lg:pt-8">
            {/* Main Intro Card */}
            <div className="relative">
              <Pin className="absolute -top-4 left-12 z-20" />
              <div className="bg-card/95 backdrop-blur-sm p-8 md:p-10 shadow-xl hover:rotate-0 -rotate-1 transition-all duration-300 border border-border glow-effect rounded-2xl">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 font-mono">👋 Hello there!</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans text-balance">
                      I craft accessible, pixel-perfect digital experiences
                    </h2>
                  </div>

                  <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
                    I'm a developer passionate about creating accessible, pixel-perfect user interfaces that blend
                    thoughtful design with robust engineering. My favorite work lies at the intersection of design and
                    development, creating experiences that not only look great but are meticulously built for
                    performance and usability.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                      React
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-chart-4/10 text-chart-4 rounded-full text-sm font-medium border border-chart-4/20">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Current Role Card */}
              <InfoCard
                rotation="rotate-[2deg]"
                pinPosition="left-8"
                color="bg-primary/5"
                borderColor="border-primary/30"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Currently</p>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Senior Frontend Engineer</h3>
                  <p className="text-sm text-foreground/70">
                    at <span className="text-primary font-semibold">Klaviyo</span>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building and maintaining critical UI components, ensuring web accessibility standards
                  </p>
                </div>
              </InfoCard>

              {/* Experience Card */}
              <InfoCard
                rotation="rotate-[-2deg]"
                pinPosition="right-8"
                color="bg-secondary/5"
                borderColor="border-secondary/30"
              >
                <div className="space-y-2">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Experience</p>
                  <h3 className="text-lg font-bold text-foreground">Diverse Background</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    From <span className="text-secondary font-medium">advertising agencies</span> and{" "}
                    <span className="text-secondary font-medium">large corporations</span> to{" "}
                    <span className="text-secondary font-medium">start-ups</span> and{" "}
                    <span className="text-secondary font-medium">digital studios</span>
                  </p>
                </div>
              </InfoCard>

              {/* Side Projects Card */}
              <InfoCard
                rotation="rotate-[-1deg]"
                pinPosition="left-12"
                color="bg-accent/5"
                borderColor="border-accent/30"
              >
                <div className="space-y-2">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Side Projects</p>
                  <h3 className="text-lg font-bold text-foreground">Teaching & Creating</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Released a <span className="text-accent font-medium">comprehensive video course</span> on building
                    web apps with the Spotify API
                  </p>
                </div>
              </InfoCard>

              {/* Interests Card */}
              <InfoCard
                rotation="rotate-[1deg]"
                pinPosition="right-12"
                color="bg-chart-4/5"
                borderColor="border-chart-4/30"
              >
                <div className="space-y-2">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">When Not Coding</p>
                  <h3 className="text-lg font-bold text-foreground">Life Outside Tech</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for{" "}
                    <span className="text-chart-4 font-medium">Korok seeds</span>
                  </p>
                </div>
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  children,
  rotation,
  pinPosition,
  color,
  borderColor,
}: {
  children: React.ReactNode
  rotation: string
  pinPosition: string
  color: string
  borderColor: string
}) {
  return (
    <div className="relative">
      <Pin className={`absolute -top-4 ${pinPosition} z-20`} />
      <div
        className={`${color} ${rotation} p-6 shadow-lg hover:rotate-0 hover:shadow-xl transition-all duration-300 paper-texture border ${borderColor} rounded-xl h-full`}
      >
        {children}
      </div>
    </div>
  )
}
