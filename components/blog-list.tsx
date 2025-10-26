import Link from "next/link"
import { Pin } from "./pin"
import { Calendar, Clock } from "lucide-react"


const blogPosts: any = []
// const blogPosts = [
//   {
//     id: "1",
//     title: "Building Accessible React Components",
//     excerpt: "A deep dive into creating accessible React components that work for everyone.",
//     date: "2024-01-15",
//     readTime: "8 min read",
//     tags: ["React", "Accessibility", "Web Development"],
//   },
//   {
//     id: "2",
//     title: "TypeScript Best Practices in 2024",
//     excerpt: "Modern TypeScript patterns and practices for building robust applications.",
//     date: "2024-01-10",
//     readTime: "12 min read",
//     tags: ["TypeScript", "Best Practices"],
//   },
//   {
//     id: "3",
//     title: "Optimizing Next.js Performance",
//     excerpt: "Tips and tricks for making your Next.js applications blazingly fast.",
//     date: "2024-01-05",
//     readTime: "10 min read",
//     tags: ["Next.js", "Performance", "Optimization"],
//   },
// ]

export function BlogList() {
  if (blogPosts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="text-center space-y-3">
          <p className="text-lg text-muted-foreground">No blogs yet</p>
          <p className="text-sm text-muted-foreground/70">Check back soon for new content!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.length >0 && blogPosts.map((post :any, index: any) => (
        <Link key={post.id} href={`/blog/${post.id}`} className="group">
          <div className="relative h-full">
            <Pin className="absolute -top-4 left-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div
              className="bg-card/95 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl hover:rotate-0 transition-all duration-300 border border-border rounded-xl h-full flex flex-col"
              style={{
                transform: `rotate(${index % 2 === 0 ? "1deg" : "-1deg"})`,
              }}
            >
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-border/50">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: any) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
