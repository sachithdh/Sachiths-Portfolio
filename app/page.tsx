import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Resume } from "@/components/resume"
import { ResumeDownloads } from "@/components/resume-downloads"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <ResumeDownloads />
        <Certifications />
        {/* <Testimonials /> */}
        <Education />
        <Contact />
      </main>
      <BottomNav />
    </>
  )
}
