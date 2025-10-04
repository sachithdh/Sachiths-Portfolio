import { Pin } from "./pin"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export function Resume() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Mentored team of 5 junior developers",
        "Reduced API response time by 40% through optimization",
      ],
      color: "bg-primary/20",
      borderColor: "border-primary/40",
      rotation: "rotate-[1deg]",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      location: "Remote",
      period: "2019 - 2021",
      description: [
        "Built and maintained 10+ client web applications",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with design team on UI/UX improvements",
      ],
      color: "bg-secondary/20",
      borderColor: "border-secondary/40",
      rotation: "rotate-[-1deg]",
    },
    {
      title: "Junior Developer",
      company: "StartUp Labs",
      location: "New York, NY",
      period: "2017 - 2019",
      description: [
        "Developed responsive web applications using React and Node.js",
        "Participated in agile development processes",
        "Contributed to open-source projects",
      ],
      color: "bg-accent/20",
      borderColor: "border-accent/40",
      rotation: "rotate-[2deg]",
    },
  ]

  return (
    <section className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="relative mb-12">
          <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
          <div className="bg-card/95 backdrop-blur-sm p-6 shadow-xl border border-border glow-effect inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-sans flex items-center gap-3">
              <Briefcase className="w-10 h-10 text-primary" />
              Work Experience
            </h2>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <Pin className={`absolute -top-4 ${index % 2 === 0 ? "left-1/4" : "right-1/4"} z-20`} />
              <div
                className={`${exp.color} ${exp.rotation} p-8 shadow-lg hover:rotate-0 hover:shadow-xl transition-all duration-300 paper-texture border ${exp.borderColor}`}
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground font-sans">{exp.title}</h3>
                      <p className="text-lg text-foreground/80 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-foreground/80">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
