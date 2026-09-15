import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ChevronDown, Menu, Zap, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import HeroCarousel from "@/components/HeroCarousel";
import CommentSection from "@/components/CommentSection";
import ShareButtons from "@/components/ShareButtons";

async function getPost(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}/posts/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error('Failed to fetch post');
    }
    const data = await res.json();
    return data.data.post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

async function getRecentPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}/posts?limit=3&status=published`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data.posts.slice(0, 3);
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Untitled UI`,
    description: post.seoDescription || post.excerpt || `Read about ${post.title}`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const recentPosts = await getRecentPosts();

  const authorName = typeof post.author === 'object' && post.author?.name 
    ? post.author.name 
    : typeof post.author === 'string' 
      ? post.author 
      : 'Unknown Author';

  const dateString = post.publishDate || post.createdAt 
    ? new Date(post.publishDate || post.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    : 'Unknown Date';

  const categoryName = post.categories && post.categories.length > 0 
    ? (post.categories[0].name || 'Blog')
    : 'Blog';

  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-cream selection:text-navy">
      {/* Navigation */}
      

      <main>
        {/* Article Container */}
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-navy/80 font-medium mb-10">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blogs" className="hover:text-navy transition-colors">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-navy">{categoryName}</span>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-cream text-navy font-semibold text-sm rounded-full mb-6 border border-navy/5">
              {categoryName}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-navy/70 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            {/* Author Meta */}
            <div className="flex items-center gap-4">
              {/* Profile picture commented out */}
              {/*
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-cream">
                <Image 
                  src="/placeholder-avatar.png" 
                  alt={authorName}
                  fill 
                  className="object-cover"
                />
              </div>
              */}
              <div>
                <div className="font-semibold text-navy">{authorName}</div>
                <div className="text-sm text-navy/90">{dateString}</div>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          {post.featuredImages && post.featuredImages.length > 0 && (
            <HeroCarousel images={post.featuredImages} title={post.title} />
          )}

          {/* Article Body */}
          <div 
            className="prose prose-lg prose-navy mx-auto text-navy/80 break-words"
            dangerouslySetInnerHTML={{ 
              __html: post.content ? post.content
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&amp;/g, '&')
                .replace(/&quot;/g, '"')
                .replace(/&#x27;/g, "'")
                .replace(/&#39;/g, "'")
                .replace(/&#x2F;/g, '/')
                .replace(/&nbsp;/g, ' ') : '' 
            }}
          />

          {/* Author Footer */}
          <div className="border-t border-navy/10 pt-10 mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/*
              <div className="relative h-16 w-16 rounded-full overflow-hidden bg-cream shrink-0">
                <Image 
                  src="/placeholder-avatar.png"
                  alt={authorName}
                  fill 
                  className="object-cover"
                />
              </div>
              */}
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">Written by {authorName}</h3>
              </div>
            </div>
            
            <ShareButtons title={post.title} text={post.excerpt} />
          </div>
          
          <CommentSection postId={post._id} />
        </article>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <section className="border-t border-navy/10 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-navy mb-10">From the blog</h2>
              
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
                {recentPosts.map((recentPost: any, idx: number) => (
                  <div key={idx} className="h-full">
                    <BlogCard post={recentPost} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
