import { Pin } from "./pin"
import { Code2, Database, Wrench, Palette, Server, Box, GitBranch, Cloud, FigmaIcon, Terminal } from "lucide-react"

const skillIcons: Record<string, any> = {
  React: Code2,
  "Next.js": Code2,
  TypeScript: Terminal,
  "Tailwind CSS": Palette,
  "Vue.js": Code2,
  "Node.js": Server,
  Express: Server,
  PostgreSQL: Database,
  MongoDB: Database,
  GraphQL: Database,
  Git: GitBranch,
  Docker: Box,
  AWS: Cloud,
  "CI/CD": Wrench,
}

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    color: "bg-secondary/20 border-primary/40",
    rotation: "rotate-[-1deg]",
    textColor: "text-primary",
    icon: Code2,
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "SpringBoot"],
    color: "bg-secondary/20 border-secondary/40",
    rotation: "rotate-[2deg]",
    textColor: "text-primary",
    icon: Database,
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
    color: "bg-accent/20 border-accent/40",
    rotation: "rotate-[-2deg]",
    textColor: "text-primary",
    icon: Wrench,
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-muted/30 relative">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative inline-block mb-12">
          <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground bg-card px-8 py-4 shadow-lg rotate-[-1deg] border-2 border-accent/30 paper-texture glow-effect">
            Skills & Tools
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ category }: { category: (typeof skillCategories)[0] }) {
  const CategoryIcon = category.icon

  return (
    <div className="relative group">
      <Pin className="absolute -top-4 right-1/4 z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div
        className={`${category.color} ${category.rotation} hover:rotate-0 hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 shadow-lg border paper-texture glow-effect`}
      >
        <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-current">
          <CategoryIcon className={`w-6 h-6 ${category.textColor}`} />
          <h3 className={`text-xl font-bold ${category.textColor} font-mono`}>{category.title}</h3>
        </div>

        <ul className="space-y-3">
          {category.skills.map((skill, i) => {
            const SkillIcon = skillIcons[skill] || Terminal
            return (
              <li
                key={i}
                className="flex items-center gap-3 text-foreground group/item hover:translate-x-2 transition-all duration-200 hover:bg-background/30 p-2 rounded"
              >
                <SkillIcon className={`w-4 h-4 ${category.textColor} flex-shrink-0`} />
                <span className="font-mono text-sm">{skill}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
