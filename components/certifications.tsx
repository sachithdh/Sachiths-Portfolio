import { Pin } from "./pin"
import { Award, ExternalLink, Calendar, Trophy, Medal, Star } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export function Certifications() {
  const certifications : any = [
    // {
    //   name: "AWS Certified Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   logo: "/aws-logo.png",
    //   credentialUrl: "#",
    //   color: "bg-primary/20",
    //   borderColor: "border-primary/40",
    //   rotation: "rotate-[1deg]",
    // },
    // {
    //   name: "Google Cloud Professional",
    //   issuer: "Google Cloud",
    //   date: "2023",
    //   logo: "/images/partners/google-cloud-logo.png",
    //   credentialUrl: "#",
    //   color: "bg-secondary/20",
    //   borderColor: "border-secondary/40",
    //   rotation: "rotate-[-1deg]",
    // },
    // {
    //   name: "Kubernetes Administrator",
    //   issuer: "Cloud Native Computing Foundation",
    //   date: "2022",
    //   logo: "/kubernetes-logo.png",
    //   credentialUrl: "#",
    //   color: "bg-accent/20",
    //   borderColor: "border-accent/40",
    //   rotation: "rotate-[1.5deg]",
    // },
    // {
    //   name: "Docker Certified Associate",
    //   issuer: "Docker Inc.",
    //   date: "2022",
    //   logo: "/docker-logo.png",
    //   credentialUrl: "#",
    //   color: "bg-cyan-500/20",
    //   borderColor: "border-cyan-500/40",
    //   rotation: "rotate-[-2deg]",
    // },
    // {
    //   name: "MongoDB Certified Developer",
    //   issuer: "MongoDB University",
    //   date: "2021",
    //   logo: "/mongodb-logo.png",
    //   credentialUrl: "#",
    //   color: "bg-pink-500/20",
    //   borderColor: "border-pink-500/40",
    //   rotation: "rotate-[0.5deg]",
    // },
    // {
    //   name: "React Advanced Certification",
    //   issuer: "Meta",
    //   date: "2021",
    //   logo: "/react-logo.png",
    //   credentialUrl: "#",
    //   color: "bg-amber-500/20",
    //   borderColor: "border-amber-500/40",
    //   rotation: "rotate-[-1.5deg]",
    // },
  ]

  const achievements = [
    {
      title: "Director’s List – UCSC",
      category: "Academic Achievement",
      description: "Selected for the Director's List in 3 out of 4 semesters",
      date: "2023/2024",
      icon: Medal,
      color: "bg-amber-500/20",
      borderColor: "border-amber-500/40",
      rotation: "rotate-[1deg]",
    },
    {
      title: "Top 10 - CodeQuest: Vault Edition",
      category: "CTF Hackathon",
      description: "We fought the bugs, cracked the flags",
      date: "2025",
      icon: Trophy,
      color: "bg-amber-500/20",
      borderColor: "border-amber-500/40",
      rotation: "rotate-[1deg]",
    },
    {
      title: "University Inter-Faculty Baseball Championship",
      category: "Sports",
      description: "1st Runners-up",
      date: "2025",
      icon: Trophy,
      color: "bg-green-500/20",
      borderColor: "border-green-500/40",
      rotation: "rotate-[-2deg]",
    },
    {
      title: "University Inter-Faculty Baseball Championship",
      category: "Sports",
      description: "2nd Runners-up",
      date: "2024",
      icon: Medal,
      color: "bg-green-500/20",
      borderColor: "border-green-500/40",
      rotation: "rotate-[-2deg]",
    },
    {
      title: "University Inter-Faculty Elle Championship",
      category: "Sports",
      description: "2nd Runners-up",
      date: "2024",
      icon: Medal,
      color: "bg-cyan-500/20",
      borderColor: "border-cyan-500/40",
      rotation: "rotate-[1.5deg]",
    },
    {
      title: "Freshers Inter-Faculty Baseball Championship",
      category: "Sports",
      description: "1st Runners-up",
      date: "2023",
      icon: Trophy,
      color: "bg-blue-500/20",
      borderColor: "border-blue-500/40",
      rotation: "rotate-[-1.5deg]",
    },
    {
      title: "Freshers Inter-Faculty Elle Championship",
      category: "Sports",
      description: "1st Runners-up",
      date: "2023",
      icon: Trophy,
      color: "bg-purple-500/20",
      borderColor: "border-purple-500/40",
      rotation: "rotate-[0.5deg]",
    },
  ]

  return (
    <section id="certifications" className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative mb-12">
          <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
          <div className="bg-card/95 backdrop-blur-sm p-6 shadow-xl border border-border glow-effect inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-sans flex items-center gap-3">
              <Award className="w-10 h-10 text-primary" />
              Achievements
            </h2>
            <p className="text-muted-foreground mt-2">Professional credentials, awards, and accomplishments</p>
          </div>
        </div>

        {/* <div className="mb-16">
          <div className="relative inline-block mb-8">
            <Pin className="absolute -top-4 -left-4 z-20" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground bg-card px-6 py-3 shadow-lg rotate-[-0.5deg] border border-primary/30 paper-texture">
              Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.length > 0 && certifications.map((cert :any , index : any) => (
              <div key={index} className="relative">
                <Pin
                  className={`absolute -top-4 ${index % 3 === 0 ? "left-1/4" : index % 3 === 1 ? "left-1/2" : "right-1/4"} z-20`}
                />
                <div
                  className={`${cert.color} ${cert.rotation} p-6 shadow-lg hover:rotate-0 hover:shadow-xl hover:scale-105 transition-all duration-300 paper-texture border ${cert.borderColor} h-full flex flex-col`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={cert.issuer}
                      width={60}
                      height={60}
                      className="rounded-lg bg-background/50 p-2"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground font-sans mb-1 leading-tight">{cert.name}</h3>
                      <p className="text-sm text-foreground/70">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">{cert.date}</span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 mt-auto bg-background/50 hover:bg-background"
                    asChild
                  >
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      View Credential
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div>
          <div className="relative inline-block mb-8">
            <Pin className="absolute -top-4 -left-4 z-20" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground bg-card px-6 py-3 shadow-lg rotate-[0.5deg] border border-accent/30 paper-texture">
              Awards & Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="relative">
                  <Pin
                    className={`absolute -top-4 ${index % 3 === 0 ? "left-1/4" : index % 3 === 1 ? "left-1/2" : "right-1/4"} z-20`}
                  />
                  <div
                    className={`${achievement.color} ${achievement.rotation} p-6 shadow-lg hover:rotate-0 hover:shadow-xl hover:scale-105 transition-all duration-300 paper-texture border ${achievement.borderColor} h-full flex flex-col`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-background/50 rounded-lg">
                        <IconComponent className="w-8 h-8 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-2 py-1 text-xs font-semibold bg-background/50 rounded mb-2">
                          {achievement.category}
                        </span>
                        <h3 className="text-lg font-bold text-foreground font-sans leading-tight">
                          {achievement.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-foreground/70 mb-4 flex-1">{achievement.description}</p>

                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{achievement.date}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
