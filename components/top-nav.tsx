"use client"

import Link from "next/link"
import Image from "next/image"
import { FileText } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"

export function TopNav() {
  const { theme, resolvedTheme } = useTheme()
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src={(resolvedTheme || theme) === 'light' ? "/images/logo_light.png" : "/images/logo.png"}
            alt="Logo"
            width={55}
            height={55}
            className="object-contain"
          />
        </Link>

        {/* Blog Link */}
        <Link href="/blog">
          <Button
            variant="ghost"
            className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span className="font-medium">Blog</span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}
