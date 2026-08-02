import Image from "next/image";
import Link from "next/link";
import { Building2, BarChart3, Globe2, Code, Handshake, Zap, ArrowRight, BookOpen } from "lucide-react";
import Footer from "@/components/Footer";
import InlineSubscribeCard from "@/components/InlineSubscribeCard";
import { fetchAPI } from "@/lib/api";

export const metadata = {
  title: "Categories - Borderless Afro Legal Hub",
  description: "Browse our articles and insights by category for founders, investors, and legal professionals.",
};

export const revalidate = 60;

type Category = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
};

async function getCategories() {
  try {
    const res = await fetchAPI('/categories', { next: { revalidate: 60 } });
    return (res.data?.categories || res.data || res || []) as Category[];
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}

async function getPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}/posts`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch posts');
    const data = await res.json();
    return data.data?.posts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

const CATEGORY_STYLES: Record<string, { icon: any, bgColor: string, iconColor: string, btnStyle: string }> = {
  'real-estate': { icon: Building2, bgColor: 'bg-gold/10', iconColor: 'text-gold', btnStyle: 'border-gold text-gold hover:bg-gold hover:text-white' },
  'capital-markets': { icon: BarChart3, bgColor: 'bg-navy/10', iconColor: 'text-navy', btnStyle: 'border-navy text-navy hover:bg-navy hover:text-white' },
  'fdi-esg': { icon: Globe2, bgColor: 'bg-emerald-50', iconColor: 'text-emerald-700', btnStyle: 'border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300' },
  'startup-law': { icon: Code, bgColor: 'bg-blue-50', iconColor: 'text-blue-700', btnStyle: 'border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300' },
  'corporate-governance': { icon: Handshake, bgColor: 'bg-purple-50', iconColor: 'text-purple-700', btnStyle: 'border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300' },
};
const DEFAULT_STYLE = { icon: BookOpen, bgColor: 'bg-cream', iconColor: 'text-navy', btnStyle: 'border-navy/20 text-navy hover:bg-cream hover:border-navy/30' };

export default async function CategoriesPage() {
  const [categories, posts] = await Promise.all([getCategories(), getPosts()]);

  // Map category data
  const categoryData = categories.map((cat) => {
    const catPosts = posts.filter((p: any) => p.categories?.[0]?.slug === cat.slug);
    // Sort by createdAt for latest
    catPosts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    return {
      ...cat,
      articleCount: catPosts.length,
      latestArticle: catPosts.length > 0 ? catPosts[0].title : null,
      style: CATEGORY_STYLES[cat.slug] || DEFAULT_STYLE
    };
  });

  // Sort categories by article count to give visual hierarchy
  const maxArticles = Math.max(...categoryData.map(c => c.articleCount), 0);

  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-cream selection:text-navy flex flex-col justify-between">
      <main className="pb-24 pt-8">
        {/* Header Section */}
        <section className="px-4 py-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-8 border border-gold/20">
            <Zap className="w-4 h-4 fill-current" />
            Explore Topics
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 tracking-tight">
            Categories
          </h1>
          <p className="text-xl text-navy/70 leading-relaxed max-w-2xl mx-auto mb-8">
            Browse our articles and insights by category for founders, investors, and legal professionals.
          </p>
          <Link href="/blogs" className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors border-b-2 border-gold/30 hover:border-gold pb-1">
            Not sure where to start? Browse everything <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Categories Cards */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {categoryData.length > 0 ? (
              <>
                {categoryData.map((category) => {
                  const Icon = category.style.icon;
                  const isMostActive = category.articleCount > 0 && category.articleCount === maxArticles;
                  
                  return (
                    <div key={category._id || category.slug} className={`flex flex-col bg-white rounded-2xl p-8 shadow-sm border border-navy/10 hover:shadow-md transition-all duration-300 group relative overflow-hidden ${isMostActive ? 'ring-2 ring-gold/20 shadow-lg scale-[1.02]' : ''}`}>
                      {/* Duotone Header / Icon treatment */}
                      <div className={`w-14 h-14 ${category.style.bgColor} ${category.style.iconColor} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      {isMostActive && (
                        <span className="absolute top-8 right-8 text-[10px] uppercase tracking-wider font-bold bg-gold/10 text-gold-dark px-2 py-1 rounded-sm border border-gold/20">
                          Most Popular
                        </span>
                      )}

                      <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                        {category.name}
                      </h3>
                      
                      <div className="text-sm font-medium text-navy/50 mb-4">
                        {category.articleCount} {category.articleCount === 1 ? 'article' : 'articles'}
                      </div>

                      <p className="text-navy/70 leading-relaxed mb-6 flex-grow">
                        {category.description || `Explore all articles related to ${category.name}.`}
                      </p>

                      {category.latestArticle && (
                        <div className="mb-6 pt-6 border-t border-navy/5">
                          <p className="text-xs font-semibold text-navy/40 uppercase tracking-wider mb-2">Latest Article</p>
                          <p className="text-sm text-navy/80 line-clamp-2 font-medium">
                            "{category.latestArticle}"
                          </p>
                        </div>
                      )}

                      <Link href={`/blogs?category=${category.slug}`} className={`inline-flex items-center justify-center px-6 py-3 rounded-lg border font-semibold transition-colors w-full mt-auto ${category.style.btnStyle}`}>
                        View {category.name}
                      </Link>
                    </div>
                  );
                })}
                {/* Newsletter fill in the remaining grid spot */}
                <div className="h-full">
                  <InlineSubscribeCard />
                </div>
              </>
            ) : (
              <div className="col-span-full text-center py-12 text-navy/70">
                No categories found.
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
