import { Pin } from "./pin"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2015 - 2017",
      gpa: "3.9/4.0",
      highlights: [
        "Specialized in Machine Learning and Distributed Systems",
        "Teaching Assistant for Data Structures course",
        "Published research on neural network optimization",
      ],
      color: "bg-primary/20",
      borderColor: "border-primary/40",
      rotation: "rotate-[-2deg]",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2011 - 2015",
      gpa: "3.8/4.0",
      highlights: [
        "Dean's List all semesters",
        "President of Computer Science Club",
        "Completed senior thesis on web performance optimization",
      ],
      color: "bg-secondary/20",
      borderColor: "border-secondary/40",
      rotation: "rotate-[2deg]",
    },
  ]

  const certifications = [
    { name: "AWS Certified Solutions Architect", year: "2022", icon: "☁️" },
    { name: "Google Cloud Professional Developer", year: "2021", icon: "🔧" },
    { name: "MongoDB Certified Developer", year: "2020", icon: "🍃" },
  ]

  return (
    <section className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="relative mb-12">
          <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
          <div className="bg-card/95 backdrop-blur-sm p-6 shadow-xl border border-border glow-effect inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-sans flex items-center gap-3">
              <GraduationCap className="w-10 h-10 text-secondary" />
              Education
            </h2>
          </div>
        </div>

        {/* Education Cards */}
        <div className="space-y-8 mb-12">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <Pin className={`absolute -top-4 ${index % 2 === 0 ? "right-1/4" : "left-1/4"} z-20`} />
              <div
                className={`${edu.color} ${edu.rotation} p-8 shadow-lg hover:rotate-0 hover:shadow-xl transition-all duration-300 paper-texture border ${edu.borderColor}`}
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground font-sans">{edu.degree}</h3>
                      <p className="text-lg text-foreground/80 font-medium">{edu.school}</p>
                      <p className="text-sm text-foreground/60 font-mono">{edu.location}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-foreground/70">
                      <span className="font-mono font-bold">{edu.period}</span>
                      <span className="font-mono">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-foreground/80">
                    {edu.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="relative">
          <Pin className="absolute -top-4 left-1/3 z-20" />
          <div className="bg-accent/20 p-8 shadow-lg rotate-[1deg] hover:rotate-0 transition-all duration-300 paper-texture border border-accent/40">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground font-sans">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card/50 p-4 rounded-lg border border-accent/30 hover:border-accent/60 transition-all hover:scale-105"
                >
                  <div className="text-2xl mb-2">{cert.icon}</div>
                  <p className="font-medium text-foreground text-sm">{cert.name}</p>
                  <p className="text-xs text-foreground/60 font-mono mt-1">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
