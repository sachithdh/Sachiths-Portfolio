"use client"

import { Pin } from "./pin"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative inline-block mb-12">
          <Pin className="absolute -top-4 -left-4 z-20" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground bg-card px-8 py-4 shadow-lg rotate-[1deg] border-2 border-border paper-texture">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info cards */}
          <div className="space-y-6">
            <div className="relative">
              <Pin className="absolute -top-4 left-1/4 z-20" />
              <div className="bg-accent/20 p-6 shadow-lg rotate-[-1deg] hover:rotate-0 transition-transform duration-300 paper-texture border border-accent/30">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent-foreground mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:hello@alexrivera.dev"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      hello@alexrivera.dev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Pin className="absolute -top-4 right-1/4 z-20" />
              <div className="bg-secondary/20 p-6 shadow-lg rotate-[2deg] hover:rotate-0 transition-transform duration-300 paper-texture border border-secondary/30">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary-foreground mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      San Francisco, CA
                      <br />
                      Open to remote work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="relative">
            <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
            <div className="bg-card p-8 shadow-xl rotate-[-1deg] hover:rotate-0 transition-transform duration-300 paper-texture border border-border">
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="bg-background" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="bg-background" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={4} className="bg-background resize-none" />
                </div>
                <Button className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <Pin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
            <p className="bg-primary/10 px-6 py-3 shadow-md rotate-[1deg] font-mono text-sm text-muted-foreground border border-primary/20 paper-texture">
              © 2025 Alex Rivera · Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
