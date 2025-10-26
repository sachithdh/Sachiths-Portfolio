import { BottomNav } from "@/components/bottom-nav"
import { TopNav } from "@/components/top-nav"
import { BlogList } from "@/components/blog-list"
import { Pin } from "@/components/pin"

export default function BlogPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen p-6 md:p-12 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="relative mb-12">
            <Pin className="absolute -top-4 left-12 z-20" />
            <div className="bg-card/95 backdrop-blur-sm p-8 shadow-xl transition-all duration-300 border border-border glow-effect rounded-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">Blog</h1>
              <p className="text-lg text-muted-foreground">
                Thoughts on software development, design, and everything in between.
              </p>
            </div>
          </div>

          <BlogList />
        </div>
      </main>
      <BottomNav />
    </>
  )
}
