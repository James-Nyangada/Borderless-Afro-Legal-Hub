import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchAPI } from "../../../lib/api";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post = null;

  try {
    const res = await fetchAPI(`/posts/${slug}`);
    post = res.data.post;
  } catch (err) {
    console.error('Failed to fetch post:', err);
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1 bg-white">
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-navy hover:text-gold mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
        
        <header className="mb-10 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="inline-flex items-center rounded-full bg-navy/5 px-2.5 py-0.5 text-xs font-semibold text-navy uppercase tracking-wider">
              {post.categories && post.categories.length > 0 ? post.categories[0].name : 'Uncategorized'}
            </span>
            <span className="text-gray-500 text-sm">
              • {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-navy mb-6">
            {post.title}
          </h1>

          <div className="flex justify-center items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-cream flex items-center justify-center">
              <span className="text-navy font-bold">{post.author?.name?.charAt(0) || 'U'}</span>
            </div>
            <div className="text-left text-sm font-medium leading-6">
              <div className="text-navy">{post.author?.name || 'Unknown Author'}</div>
            </div>
          </div>
        </header>

        {post.featuredImage && (
          <div className="w-full overflow-hidden rounded-2xl bg-cream relative aspect-[21/9] mb-12">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg prose-navy mx-auto max-w-3xl">
          {/* In a real app we'd use dangerouslySetInnerHTML or a markdown parser if the content is rich text */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </main>
  );
}
