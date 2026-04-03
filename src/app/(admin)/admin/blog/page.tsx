import { prisma } from "@/lib/prisma";
import { FileText, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white">
        <div className="divide-y divide-gray-50">
          {posts.map((post) => (
            <div key={post.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{post.title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-xs text-gray-400">/{post.slug}</p>
                    {post.publishedAt && (
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.publishedAt)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs bg-brand-orange/10 text-brand-orange rounded-full px-2 py-0.5">
                    {tag}
                  </span>
                ))}
                <span
                  className={`text-xs rounded-full px-2 py-0.5 ${
                    post.publishedAt
                      ? "bg-green-50 text-green-600"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  {post.publishedAt ? "Published" : "Draft"}
                </span>
              </div>
            </div>
          ))}
          {posts.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-400">No blog posts yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
