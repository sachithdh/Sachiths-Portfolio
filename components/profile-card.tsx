import { Pin } from "./pin"
import { Github, Twitter } from "lucide-react"
import { Button } from "./ui/button"

export function ProfileCard() {
  return (
    <div className="relative max-w-sm mx-auto">
      <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
      <div className="bg-card/95 backdrop-blur-sm p-8 shadow-2xl hover:rotate-0 transition-all duration-300 border border-border glow-effect rounded-2xl">
        <div className="space-y-6">
          {/* Profile Image */}
          <div className="w-24 h-24 mx-auto bg-muted rounded-2xl overflow-hidden ring-2 ring-primary/20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NT1ddPWHcQz3klrgDIgyyydaiVCRGG.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Me Heading */}
          <h2 className="text-2xl font-bold text-center text-foreground font-sans">About Me</h2>

          {/* Bio Text */}
          <p className="text-sm text-center text-foreground/80 leading-relaxed">
            I'm Walter, a multidisciplinary designer who focuses on telling my clients' stories visually, through
            enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 pt-2">
            <a
              href="https://github.com"
              className="p-2 hover:bg-primary/20 rounded-lg transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://twitter.com"
              className="p-2 hover:bg-primary/20 rounded-lg transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://instagram.com"
              className="p-2 hover:bg-primary/20 rounded-lg transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 text-foreground"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              className="p-2 hover:bg-primary/20 rounded-lg transition-all hover:scale-110"
              aria-label="YouTube"
            >
              <svg
                className="w-5 h-5 text-foreground"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Resume Button */}
          <Button className="w-full bg-foreground hover:bg-foreground/90 text-background font-medium">Resume</Button>
        </div>
      </div>
    </div>
  )
}
