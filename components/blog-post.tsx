"use client"

import { Pin } from "./pin"
import { Calendar, Clock } from "lucide-react"
import { CodeBlock } from "./code-block"

const blogPostData: Record<string, any> = {
  "1": {
    title: "Building Accessible React Components",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Accessibility", "Web Development"],
    content: [
      {
        type: "paragraph",
        text: "Accessibility is not just a feature—it's a fundamental aspect of web development that ensures everyone can use your applications, regardless of their abilities or the devices they use.",
      },
      {
        type: "heading",
        text: "Why Accessibility Matters",
      },
      {
        type: "paragraph",
        text: "According to the World Health Organization, over 1 billion people live with some form of disability. By building accessible applications, we're not just following best practices—we're ensuring our products can be used by everyone.",
      },
      {
        type: "code",
        language: "tsx",
        code: `import { useState } from 'react'

export function AccessibleButton({ onClick, children }) {
  const [isPressed, setIsPressed] = useState(false)
  
  return (
    <button
      onClick={onClick}
      aria-pressed={isPressed}
      className="px-4 py-2 bg-primary text-white rounded"
    >
      {children}
    </button>
  )
}`,
      },
      {
        type: "heading",
        text: "Key Principles",
      },
      {
        type: "list",
        items: [
          "Use semantic HTML elements whenever possible",
          "Provide proper ARIA labels and roles",
          "Ensure keyboard navigation works correctly",
          "Maintain sufficient color contrast ratios",
          "Test with screen readers regularly",
        ],
      },
      {
        type: "paragraph",
        text: "By following these principles and continuously testing our applications, we can create experiences that work for everyone.",
      },
    ],
  },
  "2": {
    title: "TypeScript Best Practices in 2024",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["TypeScript", "Best Practices"],
    content: [
      {
        type: "paragraph",
        text: "TypeScript has become the de facto standard for building large-scale JavaScript applications. Here are the best practices you should follow in 2024.",
      },
      {
        type: "heading",
        text: "Use Strict Mode",
      },
      {
        type: "paragraph",
        text: "Always enable strict mode in your tsconfig.json to catch potential errors early:",
      },
      {
        type: "code",
        language: "json",
        code: `{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}`,
      },
      {
        type: "heading",
        text: "Prefer Type Inference",
      },
      {
        type: "paragraph",
        text: "Let TypeScript infer types when possible instead of explicitly annotating everything:",
      },
      {
        type: "code",
        language: "typescript",
        code: `// Good - type is inferred
const numbers = [1, 2, 3, 4, 5]

// Unnecessary - explicit type annotation
const numbers: number[] = [1, 2, 3, 4, 5]`,
      },
    ],
  },
  "3": {
    title: "Optimizing Next.js Performance",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Next.js", "Performance", "Optimization"],
    content: [
      {
        type: "paragraph",
        text: "Performance is crucial for user experience and SEO. Let's explore how to make your Next.js applications faster.",
      },
      {
        type: "heading",
        text: "Image Optimization",
      },
      {
        type: "paragraph",
        text: "Use Next.js Image component for automatic optimization:",
      },
      {
        type: "code",
        language: "tsx",
        code: `import Image from 'next/image'

export function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority
      placeholder="blur"
    />
  )
}`,
      },
      {
        type: "heading",
        text: "Code Splitting",
      },
      {
        type: "paragraph",
        text: "Use dynamic imports to split your code and reduce initial bundle size:",
      },
      {
        type: "code",
        language: "typescript",
        code: `import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})`,
      },
    ],
  },
}

export function BlogPost({ postId }: { postId: string }) {
  const post = blogPostData[postId]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article>
      {/* Header */}
      <div className="relative mb-8">
        <Pin className="absolute -top-4 left-12 z-20" />
        <div className="bg-card/95 backdrop-blur-sm p-8 shadow-xl transition-all duration-300 border border-border glow-effect rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {post.content.map((block: any, index: number) => {
          switch (block.type) {
            case "paragraph":
              return (
                <div key={index} className="relative">
                  {index % 3 === 0 && <Pin className="absolute -top-4 right-8 z-20" />}
                  <div className="bg-card/95 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 border border-border rounded-xl">
                    <p className="text-foreground/90 leading-relaxed">{block.text}</p>
                  </div>
                </div>
              )

            case "heading":
              return (
                <div key={index} className="relative mt-8">
                  <Pin className="absolute -top-4 left-8 z-20" />
                  <div className="bg-primary/10 backdrop-blur-sm p-4 shadow-lg transition-all duration-300 border border-primary/30 rounded-xl">
                    <h2 className="text-2xl font-bold text-foreground">{block.text}</h2>
                  </div>
                </div>
              )

            case "code":
              return (
                <div key={index} className="relative">
                  <Pin className="absolute -top-4 left-12 z-20" />
                  <CodeBlock language={block.language} code={block.code} />
                </div>
              )

            case "list":
              return (
                <div key={index} className="relative">
                  <Pin className="absolute -top-4 right-12 z-20" />
                  <div className="bg-card/95 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 border border-border rounded-xl">
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
    </article>
  )
}
