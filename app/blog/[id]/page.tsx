import { BottomNav } from "@/components/bottom-nav"
import { BlogPost } from "@/components/blog-post"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <>
      <main className="min-h-screen p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 -ml-2 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <BlogPost postId={params.id} />
        </div>
      </main>
      <BottomNav />
    </>
  )
}
