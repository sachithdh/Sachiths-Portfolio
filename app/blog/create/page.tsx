import { TopNav } from "@/components/top-nav"
import { BottomNav } from "@/components/bottom-nav"
import BlogEditor from "@/components/blog-editor"

export const metadata = {
  title: "Create Blog Post",
}

export default function BlogCreatePage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen p-40 pt-24">
        <BlogEditor />
      </main>
      <BottomNav />
    </>
  )
}
