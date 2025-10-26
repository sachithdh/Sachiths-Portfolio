import { Pin } from "./pin"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science(Hons) in Computer Science",
      school: "University of Colombo School of Computing",
      location: "Colombo, SL",
      period: "2022 - Current",
      gpa: "3.8/4.0",
      highlights: [
        "Director's List in 3 out of 4 semesters",
        "Relevant Coursework: Data Structures & Algorithms, Database Systems, Operating Systems, Software Engineering, AI & Neural Networks, Web Development",
        "Research: Currently conducting research on a Federated Learning framework for Cybersecurity Threat Analysis",
      ],
      color: "bg-primary/20",
      borderColor: "border-primary/40",
      rotation: "rotate-[-2deg]",
    },
    {
      degree: "GCE A/L",
      school: "Nugawela Central College",
      location: "Kandy, SL",
      period: "2021",
      z: "2.3577",
      highlights: [
        "Physics - A",
        "Information and Communication Technology - A",
        "Combined Mathematics - B",
      ],
      color: "bg-secondary/20",
      borderColor: "border-secondary/40",
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
                      <span className="font-mono">{edu.gpa ? `GPA: ${edu.gpa}` : `Z-Score: ${edu.z}`}</span>
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
      </div>
    </section>
  )
}
