"use client"

import { Pin } from "./pin"
import { Download, FileText, Server, Network, Code, Briefcase } from "lucide-react"
import { Button } from "./ui/button"

export function ResumeDownloads() {
  const resumes = [
    {
      title: "Software Engineering",
      description: "Full-stack development, system design, and architecture",
      icon: Code,
      filename: "resume-software-engineering.pdf",
      color: "bg-primary/20",
      borderColor: "border-primary/40",
      rotation: "rotate-[1deg]",
      iconColor: "text-primary",
      download: "https://drive.google.com/file/d/1_sdGfbsxT2y9k_oxFmIpVsw0WGMzjWiF/view?usp=sharing"
    },
    {
      title: "DevOps Engineering",
      description: "CI/CD, cloud infrastructure, and automation",
      icon: Server,
      filename: "resume-devops.pdf",
      color: "bg-secondary/20",
      borderColor: "border-secondary/40",
      rotation: "rotate-[-1.5deg]",
      iconColor: "text-secondary",
      download: "https://drive.google.com/file/d/1GfCS7QKIOl9X8rAvYyECwGN2pc4XqaEK/view?usp=sharing"
    },
    {
      title: "Network Engineering",
      description: "Network architecture, security, and protocols",
      icon: Network,
      filename: "resume-networking.pdf",
      color: "bg-accent/20",
      borderColor: "border-accent/40",
      rotation: "rotate-[2deg]",
      iconColor: "text-accent",
      download: "https://drive.google.com/file/d/1WazHvngA-sUIqZJ73gAlGXTN1jJJKoX4/view?usp=sharing"
    },
    {
      title: "Cyber Security",
      description: "Security operations, threat analysis, and risk management",
      icon: Briefcase,
      filename: "resume-general.pdf",
      color: "bg-cyan-500/20",
      borderColor: "border-cyan-500/40",
      rotation: "rotate-[-0.5deg]",
      iconColor: "text-cyan-500",
      download: "https://drive.google.com/file/d/12HX3qlGRXBPkHjbf68ndjFS9cTPTEC0-/view?usp=sharing"
    },
  ]

  const handleDownload = (download: string) => {
    const link = document.createElement("a")
    link.href = `${download}`
    link.download = download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resumes" className="min-h-[80vh] p-6 md:p-12 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="relative mb-12">
          <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
          <div className="bg-card/95 backdrop-blur-sm p-6 shadow-xl border border-border glow-effect inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-sans flex items-center gap-3">
              <FileText className="w-10 h-10 text-primary" />
              Download Resumes
            </h2>
            <p className="text-muted-foreground mt-2">Choose the resume that fits your needs</p>
          </div>
        </div>

        {/* Resume Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumes.map((resume, index) => {
            const Icon = resume.icon
            return (
              <div key={index} className="relative">
                <Pin className={`absolute -top-4 ${index % 2 === 0 ? "left-1/4" : "right-1/4"} z-20`} />
                <div
                  className={`${resume.color} ${resume.rotation} p-8 shadow-lg hover:rotate-0 hover:shadow-xl hover:scale-105 transition-all duration-300 paper-texture border ${resume.borderColor} h-full flex flex-col`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-background/50 ${resume.iconColor}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground font-sans mb-2">{resume.title}</h3>
                      <p className="text-foreground/70 text-sm">{resume.description}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <Button
                      onClick={() => handleDownload(resume.download)}
                      className="w-full gap-2 bg-background/80 hover:bg-background text-foreground border border-border shadow-md"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
