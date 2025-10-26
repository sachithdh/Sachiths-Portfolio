"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "./ui/button"

interface CodeBlockProps {
  language: string
  code: string
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-muted/50 backdrop-blur-sm shadow-lg transition-all duration-300 border border-border rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/80 border-b border-border">
        <span className="text-xs font-mono text-muted-foreground uppercase">{language}</span>
        <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-7 px-2 hover:bg-primary/10">
          {copied ? (
            <>
              <Check className="w-3 h-3 mr-1" />
              <span className="text-xs">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 mr-1" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground/90">{code}</code>
      </pre>
    </div>
  )
}
