import React from "react";
import Link from "next/link";
import { Search, ChevronDown, Flame } from "lucide-react";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import BlogHero from "@/components/BlogHero";
import InlineSubscribeCard from "@/components/InlineSubscribeCard";

async function getPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}/posts`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.data.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null; // Return null to indicate server error
  }
}

async function getCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}/categories`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data?.categories || data.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export const metadata = {
  title: "Blog - Borderless Afro Legal Hub",
  description: "In-depth analysis on cross-border investment, regulation, and market entry across Africa — updated as the landscape shifts.",
};

export default async function BlogsPage({ searchParams }: { searchParams: Promise<{ category?: string, sort?: string }> }) {
  const resolvedParams = await searchParams;
  const categoryFilter = resolvedParams?.category;
  const sortParam = resolvedParams?.sort || 'newest';

  const fetchedPosts = await getPosts();
  const categoriesList = await getCategories();

  if (fetchedPosts === null) {
    return (
      <div className="min-h-screen bg-white text-navy flex flex-col justify-between">
        <main className="flex-1 flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-bold mb-4">Server Error</h1>
          <p className="text-navy/70">Failed to load posts. Please try again later.</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (fetchedPosts.length === 0) {
    return (
      <div className="min-h-screen bg-white text-navy flex flex-col justify-between">
        <main className="flex-1 flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-bold mb-4">No posts added yet</h1>
          <p className="text-navy/70">Check back soon for new insights.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const allPosts = [...fetchedPosts];

  // Calculate category counts
  const categoryCounts: Record<string, number> = {};
  allPosts.forEach((p: any) => {
    const apiSlug = p.categories?.[0]?.slug;
    if (apiSlug) {
      categoryCounts[apiSlug] = (categoryCounts[apiSlug] || 0) + 1;
    }
  });

  // Filter by category
  let filteredPosts = categoryFilter 
    ? allPosts.filter((p: any) => p.categories?.[0]?.slug === categoryFilter.toLowerCase())
    : allPosts;

  // Most Read Posts (Top 2 by viewCount)
  const mostReadPosts = [...allPosts].sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0)).slice(0, 2);

  // Sorting
  if (sortParam === 'popular') {
    filteredPosts = filteredPosts.sort((a: any, b: any) => (b.viewCount || 0) - (a.viewCount || 0));
  } else {
    // Newest is default (already sorted by backend typically, but just in case)
    filteredPosts = filteredPosts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-cream selection:text-navy">
      <main>
        {/* Header Section */}
        <BlogHero />

        {/* Most Read Ribbon */}
        {!categoryFilter && mostReadPosts.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 border-b border-navy/5">
            <div className="flex items-center gap-2 mb-6 text-gold font-bold text-lg">
              <Flame className="h-5 w-5" /> Most Read
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mostReadPosts.map((post: any, idx: number) => (
                <div key={idx} className="h-full">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Categories / Filter and Sort Control */}
        <section className="mx-auto max-w-7xl px-4 pt-12 pb-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-navy/10 pb-6">
            
            <div className="flex flex-wrap items-center gap-2">
              <Link 
                href={`/blogs${sortParam ? `?sort=${sortParam}` : ''}`}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${!categoryFilter ? 'bg-cream text-navy border border-navy/5' : 'text-navy/70 hover:bg-cream hover:text-navy'}`}
              >
                View all ({allPosts.length})
              </Link>
              {categoriesList.map((cat: any) => (
                <Link 
                  key={cat.slug || cat._id}
                  href={`/blogs?category=${cat.slug}${sortParam !== 'newest' ? `&sort=${sortParam}` : ''}`}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${categoryFilter === cat.slug ? 'bg-cream text-navy border border-navy/5' : 'text-navy/70 hover:bg-cream hover:text-navy'}`}
                >
                  {cat.name} {categoryCounts[cat.slug] ? `(${categoryCounts[cat.slug]})` : ''}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative w-full sm:w-48 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/40 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-navy/10 bg-gray-50 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-navy/40"
                />
              </div>

              <div className="relative group">
                <div className="flex items-center gap-2 px-3 py-2 border border-navy/10 rounded-lg text-sm font-medium text-navy bg-white cursor-pointer hover:border-gold transition-colors">
                  Sort: {sortParam === 'popular' ? 'Most Popular' : 'Newest'}
                  <ChevronDown className="h-4 w-4 text-navy/50" />
                </div>
                {/* Sort Dropdown Hover */}
                <div className="absolute right-0 mt-1 w-40 bg-white border border-navy/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 overflow-hidden">
                  <Link href={`/blogs?sort=newest${categoryFilter ? `&category=${categoryFilter}` : ''}`} className="block px-4 py-2 text-sm text-navy hover:bg-cream">Newest</Link>
                  <Link href={`/blogs?sort=popular${categoryFilter ? `&category=${categoryFilter}` : ''}`} className="block px-4 py-2 text-sm text-navy hover:bg-cream">Most Popular</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-cream/30 rounded-2xl border border-navy/5">
              <h3 className="text-2xl font-bold text-navy mb-3">More coming soon</h3>
              <p className="text-navy/70 mb-8 max-w-md mx-auto">We're currently preparing new content for this category. Subscribe to be notified when we publish.</p>
              <div className="max-w-sm mx-auto">
                <InlineSubscribeCard />
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post: any, idx: number) => {
                  return (
                    <React.Fragment key={idx}>
                      {idx === 3 && (
                        <div className="h-full">
                          <InlineSubscribeCard />
                        </div>
                      )}
                      <div className="h-full">
                        <BlogCard post={post} />
                      </div>
                    </React.Fragment>
                  );
                })}
                {filteredPosts.length < 3 && (
                  <div key="subscribe-card-end" className="h-full">
                    <InlineSubscribeCard />
                  </div>
                )}
              </div>

              <div className="mt-16 flex flex-col items-center pb-8 gap-4">
                <span className="text-sm font-medium text-navy/50">
                  Showing {Math.min(filteredPosts.length, 12)} of {filteredPosts.length} articles
                </span>
                {filteredPosts.length > 12 && (
                  <button className="rounded-lg bg-navy px-6 py-3 text-base font-medium text-white hover:bg-navy-2 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 transition-colors shadow-sm">
                    Load More...
                  </button>
                )}
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
