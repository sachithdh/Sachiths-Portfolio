import { Pin } from "./pin"
import { ExternalLink, Github, Star } from "lucide-react"
import { Button } from "./ui/button"

const projects = [
  {
    title: "TaskFlow",
    description: "A collaborative project management tool with real-time updates and team analytics.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    image: "/modern-project-management-dashboard-with-kanban-bo.jpg",
    github: "https://github.com",
    demo: "https://example.com",
    rotation: "rotate-[1deg]",
    featured: true,
  },
  {
    title: "CodeSnippet",
    description: "A beautiful code snippet manager with syntax highlighting and cloud sync.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    image: "/code-editor-with-syntax-highlighting-dark-theme.jpg",
    github: "https://github.com",
    demo: "https://example.com",
    rotation: "rotate-[-2deg]",
    featured: true,
  },
  {
    title: "WeatherNow",
    description: "Real-time weather app with beautiful visualizations and location-based forecasts.",
    tags: ["React Native", "API", "Maps", "Charts"],
    image: "/weather-app-with-forecast-visualization-and-maps.jpg",
    github: "https://github.com",
    demo: "https://example.com",
    rotation: "rotate-[2deg]",
    featured: false,
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent chatbot powered by GPT-4 with context-aware responses.",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    image: "/ai-chatbot-interface.png",
    github: "https://github.com",
    demo: "https://example.com",
    rotation: "rotate-[-1deg]",
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-40 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative inline-block mb-12">
          <Pin className="absolute -top-4 -right-4 z-20" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground bg-card px-8 py-4 shadow-lg rotate-[1deg] border-2 border-secondary/30 paper-texture glow-effect">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="relative group">
      <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div
        className={`bg-card shadow-xl ${project.rotation} hover:rotate-0 transition-all duration-300 hover:shadow-2xl border border-border overflow-hidden glow-effect`}
      >
        <div className="aspect-video bg-muted overflow-hidden relative">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {project.featured && (
            <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </div>
          )}
        </div>

        <div className="p-6 paper-texture">
          <h3 className="text-2xl font-bold text-foreground mb-2 font-sans group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-mono px-3 py-1 bg-muted text-foreground rounded-full border border-border hover:border-primary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 hover:bg-primary/10 hover:border-primary transition-colors bg-transparent"
            >
              <a href={project.github} className="flex items-center justify-center gap-2">
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
            <Button size="sm" asChild className="flex-1 bg-primary hover:bg-primary/90">
              <a href={project.demo} className="flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
