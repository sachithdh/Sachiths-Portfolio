'use client'
import type React from "react"
import { Pin } from "./pin"
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Code2, Rocket, MapPin, Download, Eye, PaintbrushIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { useTheme } from "next-themes"

export function Hero() {
  const { theme, resolvedTheme } = useTheme()
  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Enhanced Background with Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-40 left-[15%] w-20 h-20 border border-primary/20 rounded-lg rotate-12 animate-float" />
      <div className="absolute bottom-40 right-[20%] w-16 h-16 border border-accent/20 rounded-full animate-float-delayed" />

      <div className="max-w-7xl w-full relative z-10">
        {/* Logo with CTA Buttons */}
        <div className="flex items-center justify-center gap-6 md:gap-12 mb-8 lg:mb-12">
          {/* Projects Button */}
          <Button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            variant="outline"
            className="group relative overflow-hidden border-2 border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 h-11 px-6 shadow-lg hover:shadow-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Rocket className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform" />
            <span className="font-semibold">Projects</span>
          </Button>

          {/* Logo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <img
              src={(resolvedTheme || theme) === 'light' ? "/images/logo_light.png" : "/images/logo.png"}
              alt="Logo"
              className="relative h-24 md:h-32 w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Blog Button */}
          <Button
            onClick={() => {
              document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
            }}
            variant="outline"
            className="group relative overflow-hidden border-2 border-accent/30 hover:border-accent bg-background/50 backdrop-blur-sm hover:bg-accent/5 transition-all duration-300 h-11 px-6 shadow-lg hover:shadow-accent/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <PaintbrushIcon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold">Read Blog</span>
          </Button>
        </div>
        
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-start">
          <div className="relative lg:sticky lg:top-8 group">
            <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
            <div className="bg-card/95 backdrop-blur-xl p-8 shadow-2xl hover:rotate-0 rotate-1 transition-all duration-500 border border-border/50 hover:border-primary/30 rounded-3xl">
              <div className="space-y-6">
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-[2.5rem]" />
                  <div className="absolute inset-0.5 bg-white rounded-[2.4rem]" />
                  <div className="absolute inset-1 bg-card rounded-[2.3rem]" />
                  <div className="absolute inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://avatars.githubusercontent.com/u/110117965?s=400&u=1decb418419c1f2357229c9c9c239a937c4a8e28&v=4"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <h1 className="text-4xl font-bold text-foreground font-sans tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                    Sachith Dhanushka
                  </h1>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <Badge variant="secondary" className="gap-1.5 py-1 px-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      Software Engineer
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="font-medium">Colombo, Sri Lanka</span>
                  </p>
                </div>

                {/* <div className="grid grid-cols-3 gap-3 py-6 border-y border-border/50">
                  <div className="text-center space-y-1">
                    <div className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                      5+
                    </div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-3xl font-bold bg-gradient-to-br from-accent to-accent/60 bg-clip-text text-transparent">
                      50+
                    </div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-3xl font-bold bg-gradient-to-br from-secondary to-secondary/60 bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </div>
                </div> */}

                <div className="flex justify-center gap-2">
                  <a
                    href="https://github.com/sachithdh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hover:bg-primary/20 rounded-xl transition-all hover:scale-110 hover:-translate-y-1 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 group"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com/in/sachithdh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hover:bg-blue-500/20 rounded-xl transition-all hover:scale-110 hover:-translate-y-1 border border-border/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-foreground group-hover:text-blue-500 transition-colors" />
                  </a>
                  <a
                    href="mailto:sachith.devx@gmail.com"
                    className="p-3 hover:bg-accent/20 rounded-xl transition-all hover:scale-110 hover:-translate-y-1 border border-border/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 group"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
                  </a>
                </div>

                <div className="space-y-3 pt-2">
                  {/* <Button className="w-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary hover:via-primary/95 hover:to-primary/85 text-primary-foreground font-semibold group shadow-primary/30 h-11 transition-all duration-300">
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Download Resume
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button> */}
                  <Button
                    className="w-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary hover:via-primary/95 hover:to-primary/85 text-primary-foreground font-semibold group shadow-primary/30 h-11 transition-all duration-300"
                    onClick={() => {
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Projects
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-accent/50 hover:bg-accent/10 hover:border-accent font-semibold group h-11 transition-all duration-300"
                    onClick={() => {
                      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <PaintbrushIcon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Read Blog
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 lg:pt-8">
            <div className="relative group">
              <Pin className="absolute -top-4 left-12 z-20" />
              <div className="bg-card/95 backdrop-blur-xl p-10 md:p-12 shadow-2xl hover:rotate-0 -rotate-1 transition-all duration-500 border border-border/50 hover:border-primary/30 glow-effect rounded-3xl">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono animate-fade-in">
                      <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                      <span>Welcome to my digital workspace</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground font-sans text-balance leading-[1.1] tracking-tight">
                      Crafting{" "}
                      <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto]">
                        Secure, Automated,
                      </span>{" "}
                      and Scalable Solutions
                    </h2>
                  </div>
                  <p className="text-xl text-foreground/70 leading-relaxed text-pretty max-w-3xl">
                    I’m a developer passionate about building high-performance software with{" "}
                    <span className="text-foreground font-semibold relative inline-block group-hover:text-primary transition-colors">
                      security
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                     {" "} and {" "}
                    <span className="text-foreground font-semibold relative inline-block group-hover:text-primary transition-colors">
                      reliability
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 delay-75" />
                    </span>{" "}
                    at its core. My work spans {" "}
                    <span className="text-foreground font-semibold relative inline-block group-hover:text-primary transition-colors">
                      software engineering
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 delay-75" />
                    </span>
                    , {" "}
                    <span className="text-foreground font-semibold relative inline-block group-hover:text-primary transition-colors">
                      cybersecurity
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 delay-75" />
                    </span>
                    , and{" "}
                    <span className="text-foreground font-semibold relative inline-block group-hover:text-primary transition-colors">
                      DevOps
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 delay-75" />
                    </span>
                    designing scalable applications, automating cloud deployments, and safeguarding systems through modern security practices.
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"].map((tech, index) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="px-3 py-1 text-xs font-medium bg-background/50 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-200 cursor-default"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
            <div className="flex flex-row gap-6 mt-5">
              <InfoCard
                rotation=""
                pinPosition="left-8"
                icon={<Code2 className="w-5 h-5" />}
                iconColor="text-primary"
                bgColor="bg-primary/5"
                borderColor="border-primary/30"
                accentColor="primary"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Currently</p>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Intern Software Engineer</h3>
                  <p className="text-sm text-foreground/70">
                    at <span className="text-primary font-semibold"><a href="https://www.linkedin.com/company/xeptagon/">Xeptagon</a></span>
                  </p>
                  {/* <p className="text-sm text-muted-foreground leading-relaxed">
                    Design and deliver scalable web solutions using React.js, PHP, and WordPress, improving performance, user experience, and project outcomes through effective collaboration and problem-solving.
                  </p> */}
                </div>
              </InfoCard>

              <InfoCard
                rotation=""
                pinPosition="right-12"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                }
                iconColor="text-chart-4"
                bgColor="bg-chart-4/5"
                borderColor="border-chart-4/30"
                accentColor="chart-4"
              >
                <div className="space-y-3">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">When Not Coding</p>
                  <h3 className="text-xl font-bold text-foreground">Life Outside Tech</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You’ll find me rapping along to Eminem, screaming Linkin Park lyrics, or exploring random facts I’ll never use.
                  </p>
                </div>
              </InfoCard>
            </div>
      </div>
    </section>
  )
}

function InfoCard({
  children,
  rotation,
  pinPosition,
  icon,
  iconColor,
  bgColor,
  borderColor,
  accentColor,
}: {
  children: React.ReactNode
  rotation: string
  pinPosition: string
  icon: React.ReactNode
  iconColor: string
  bgColor: string
  borderColor: string
  accentColor: string
}) {
  return (
    <div className="relative group flex-1">
      <Pin className={`absolute -top-4 ${pinPosition} z-20`} />
      <div
        className={`${bgColor} ${rotation} p-6 shadow-xl hover:shadow-2xl transition-all duration-500 paper-texture border ${borderColor} hover:border-${accentColor}/50 rounded-2xl h-full backdrop-blur-sm`}
      >
        <div className={`inline-flex p-2 rounded-lg ${bgColor} border ${borderColor} mb-3 ${iconColor} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        {children}
      </div>
    </div>
  )
}
