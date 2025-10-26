"use client"

import { Home, FileText, User, Mail, Moon, Sun, Download, Award, FolderGit2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function BottomNav() {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [activeSection, setActiveSection] = useState<string>("/")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#projects", icon: FolderGit2, label: "Projects" },
    // { href: "#resumes", icon: Download, label: "Resumes" },
    { href: "#certifications", icon: Award, label: "Certifications" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // If not on home page, don't update active section
      if (pathname !== "/") {
        return
      }

      const sections = navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => item.href.substring(1))

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("/")
        return
      }

      // Find which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if section is in viewport (with some offset for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(`#${sectionId}`)
            return
          }
        }
      }
    }

    // Add scroll listener
    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Don't prevent default for Blog link or Home link
    if (href === "/blog" || href === "/") {
      return
    }

    // Handle hash links (scroll to section)
    if (href.startsWith("#")) {
      e.preventDefault()
      
      // If we're not on the home page, navigate to home page with the hash
      if (pathname !== "/") {
        window.location.href = `/${href}`
        return
      }
      
      // If we're on the home page, just scroll to the section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-card/95 backdrop-blur-md border border-border shadow-2xl rounded-full px-4 py-3 flex items-center gap-2">
        {navItems.map((item) => {
          const Icon = item.icon
          // Check if current section is active (for hash links) or pathname matches
          const isActive = 
            pathname === "/blog" 
              ? item.href === "/blog"
              : pathname === item.href || activeSection === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "p-3 rounded-full transition-all hover:bg-primary/20 hover:scale-110 group relative",
                isActive && "bg-primary/20",
              )}
              aria-label={item.label}
            >
              {item.href === "/" ? (
                <Image
                  src={mounted && (resolvedTheme || theme) === 'light' ? "/images/logo_light.png" : "/images/logo.png"}
                  alt="Home"
                  width={25}
                  height={25}
                  className="object-contain"
                />
              ) : (
                <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground")} />
              )}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </Link>
          )
        })}

        <div className="w-px h-6 bg-border mx-1" />

        {/* Blog Link */}
        <Link
          href="/blog"
          className={cn(
            "p-3 rounded-full transition-all hover:bg-primary/20 hover:scale-110 group relative",
            pathname === "/blog" && "bg-primary/20",
          )}
          aria-label="Blog"
        >
          <FileText className={cn("w-5 h-5", pathname === "/blog" ? "text-primary" : "text-muted-foreground")} />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Blog
          </span>
        </Link>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full hover:bg-primary/20 hover:scale-110 transition-all"
          aria-label="Toggle theme"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </nav>
  )
}
