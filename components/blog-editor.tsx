"use client"

import { useState } from "react"
import { Pin } from "./pin"
import { CodeBlock } from "./code-block"

type BlogPostDraft = {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

export function BlogEditor() {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10))
  const [readTime, setReadTime] = useState("5 min read")
  const [tagInput, setTagInput] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [content, setContent] = useState<string>("")
  const [preview, setPreview] = useState(false)
  const [splitView, setSplitView] = useState(true)

  function addTag() {
    const t = tagInput.trim()
    if (t && !tags.includes(t)) {
      setTags((s) => [...s, t])
    }
    setTagInput("")
  }

  function removeTag(t: string) {
    setTags((s) => s.filter((x) => x !== t))
  }

  function exportJSON() {
    const draft: BlogPostDraft = { title, excerpt, date, readTime, tags, content }
    const data = JSON.stringify(draft, null, 2)
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${title || "draft"}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  async function copyJSON() {
    const draft: BlogPostDraft = { title, excerpt, date, readTime, tags, content }
    await navigator.clipboard.writeText(JSON.stringify(draft, null, 2))
    // small visual cue could be added; keeping minimal
  }

  // Simple parser that recognizes headings (#), fenced code blocks, and lists (- or * or 1.), and paragraphs.
  function parseToBlocks(text: string) {
    const lines = text.split(/\r?\n/)
    const blocks: any[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]

      // code fence
      if (/^```/.test(line)) {
        const lang = (line.match(/^```(\w+)/) || [])[1] || undefined
        i++
        const buf: string[] = []
        while (i < lines.length && !/^```/.test(lines[i])) {
          buf.push(lines[i])
          i++
        }
        // skip closing ```
        i++
        blocks.push({ type: "code", language: lang || "", code: buf.join("\n") })
        continue
      }

      // heading
      if (/^#{1,6}\s+/.test(line)) {
        const text = line.replace(/^#{1,6}\s+/, "").trim()
        blocks.push({ type: "heading", text })
        i++
        continue
      }

      // list (unordered/ordered)
      if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
        const items: string[] = []
        while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
          items.push(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, "").trim())
          i++
        }
        blocks.push({ type: "list", items })
        continue
      }

      // paragraph (collect until blank line)
      if (line.trim() === "") {
        i++
        continue
      }

      const paraBuf: string[] = []
      while (i < lines.length && lines[i].trim() !== "") {
        paraBuf.push(lines[i])
        i++
      }
      blocks.push({ type: "paragraph", text: paraBuf.join(" ").trim() })
    }

    return blocks
  }

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] bg-transparent">
      {/* Header / toolbar */}
  <div className="shrink-0 bg-card/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center gap-4">
        <Pin className="-mt-4" />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          className="flex-1 bg-transparent placeholder:text-muted-foreground outline-none text-lg font-semibold"
        />

        <div className="hidden md:flex items-center gap-2">
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                addTag()
              }
            }}
            placeholder="Add tag"
            className="rounded-md border px-2 py-1 bg-card text-xs"
          />
          <button onClick={addTag} className="px-3 py-1 rounded-md bg-primary text-secondary text-xs">Add</button>
        </div>

        <div className="ml-4 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSplitView((s) => !s)}
            className="px-3 py-1 rounded-md border bg-card text-sm"
          >
            {splitView ? "Single" : "Split"}
          </button>

          <button
            type="button"
            onClick={() => setPreview((p) => !p)}
            className="px-3 py-1 rounded-md border bg-card text-sm"
          >
            {preview ? "Edit" : "Preview"}
          </button>

          <button onClick={copyJSON} className="px-3 py-1 rounded-md border bg-card text-sm">Copy JSON</button>
          <button onClick={exportJSON} className="px-3 py-1 rounded-md bg-primary text-white text-sm">Export</button>
        </div>
      </div>

      {/* Metadata row (sticky under header) */}
  <div className="shrink-0 bg-card/90 border-b border-border px-6 py-2 text-sm text-muted-foreground flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2">
            <span className="text-xs">Date</span>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="rounded-md border px-2 py-1 bg-card text-xs" />
          </label>
          <label className="flex items-center gap-2">
            <span className="text-xs">Read</span>
            <input value={readTime} onChange={(e) => setReadTime(e.target.value)} className="rounded-md border px-2 py-1 bg-card text-xs w-28" />
          </label>
        </div>

        <div className="flex flex-wrap gap-2 ml-auto">
          {tags.map((t) => (
            <button key={t} onClick={() => removeTag(t)} className="px-2 py-1 bg-card/80 border border-border rounded text-xs">{t} ×</button>
          ))}
        </div>
      </div>

      {/* Editor area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Textarea */}
        <div className={`flex-1 ${splitView && preview ? "md:w-1/2" : "w-full"} h-full` }>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-full w-full p-6 resize-none bg-transparent outline-none text-foreground font-sans leading-relaxed"
            placeholder={"Write your post in Markdown. Use code fences for code blocks."}
          />
        </div>

        {/* Preview pane */}
        {preview && (
          <div className={`hidden md:block ${splitView ? "md:w-1/2" : "md:w-full"} h-full overflow-auto bg-card/95 border-l border-border p-6` }>
            <div className="prose max-w-none text-foreground">
              <h1>{title || "(no title)"}</h1>
              <p className="text-sm text-muted-foreground">{excerpt}</p>
              <div className="text-xs text-muted-foreground mb-2">{date} • {readTime}</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((t) => (
                  <span key={t} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">{t}</span>
                ))}
              </div>

              <div>
                {parseToBlocks(content).map((block: any, idx: number) => {
                  switch (block.type) {
                    case "paragraph":
                      return (
                        <div key={idx} className="relative">
                          {idx % 3 === 0 && <Pin className="absolute -top-4 right-8 z-20" />}
                          <div className="bg-card/95 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 border border-border rounded-xl mb-4">
                            <p className="text-foreground/90 leading-relaxed">{block.text}</p>
                          </div>
                        </div>
                      )

                    case "heading":
                      return (
                        <div key={idx} className="relative mt-6">
                          <Pin className="absolute -top-4 left-8 z-20" />
                          <div className="bg-primary/10 backdrop-blur-sm p-4 shadow-lg transition-all duration-300 border border-primary/30 rounded-xl mb-4">
                            <h2 className="text-2xl font-bold text-foreground">{block.text}</h2>
                          </div>
                        </div>
                      )

                    case "code":
                      return (
                        <div key={idx} className="relative">
                          <Pin className="absolute -top-4 left-12 z-20" />
                          <CodeBlock language={block.language || ""} code={block.code} />
                        </div>
                      )

                    case "list":
                      return (
                        <div key={idx} className="relative">
                          <Pin className="absolute -top-4 right-12 z-20" />
                          <div className="bg-card/95 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 border border-border rounded-xl mb-4">
                            <ul className="space-y-2">
                              {block.items.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-foreground/90">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )

                    default:
                      return null
                  }
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogEditor
