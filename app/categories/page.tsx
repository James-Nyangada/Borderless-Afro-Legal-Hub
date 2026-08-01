import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Zap, PenTool, Ruler, Search } from "lucide-react";

export const metadata = {
  title: "Services - Untitled UI",
  description: "Design-led solutions for modern teams.",
};

export const revalidate = 60;
import { fetchAPI } from "@/lib/api";

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

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-cream selection:text-navy">
      {/* Navigation */}
      

      <main className="bg-[#f9fafb] pb-24">
        {/* Header Section */}
        <section className="px-4 py-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f4ebff] text-[#7f56d9] rounded-full text-sm font-semibold mb-8 border border-[#7f56d9]/10">
            <Zap className="w-4 h-4 fill-current" />
            Explore Topics
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101828] mb-6 tracking-tight">
            Categories
          </h1>
          <p className="text-xl text-[#475467] leading-relaxed max-w-2xl mx-auto">
            Browse our articles and insights by category. Find exactly what you're looking for.
          </p>
        </section>

        {/* Categories Cards */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.length > 0 ? categories.map((category) => (
              <div key={category._id || category.slug} className="flex flex-col bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-[#f4ebff] text-[#7f56d9] rounded-full flex items-center justify-center mb-6">
                  {/* We use a fallback icon if dynamic icon parsing isn't easy without a library */}
                  <PenTool className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#101828] mb-4 group-hover:text-[#7f56d9] transition-colors">{category.name}</h3>
                <p className="text-[#475467] leading-relaxed mb-8 flex-grow">
                  {category.description || `Explore all articles related to ${category.name}.`}
                </p>
                <Link href={`/blogs?category=${category.slug}`} className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-[#344054] font-semibold hover:bg-gray-50 hover:text-[#101828] transition-colors w-full mt-auto">
                  View Blogs
                </Link>
              </div>
            )) : (
              <div className="col-span-full text-center py-12 text-[#475467]">
                No categories found.
              </div>
            )}
          </div>
        </section>
      </main>

      {/* CTA and Footer Section (Since it already has a CTA, maybe skip the first part? The design shows the footer exactly below "Ready to build". So I'll just use the footer part) */}
      <div className="bg-charcoal pt-16 px-4 sm:px-6 lg:px-8 text-white rounded-t-[40px]">
        <footer className="mx-auto max-w-7xl pb-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:gap-12">
            <div>
              <h3 className="text-sm font-semibold text-white/50">Product</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Overview</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Features</Link></li>
                <li>
                  <Link href="#" className="group flex items-center gap-2 text-white/70 hover:text-gold transition-colors">
                    Solutions
                    <span className="rounded-full bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold border border-gold/20 group-hover:bg-gold/20 transition-colors">
                      New
                    </span>
                  </Link>
                </li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Tutorials</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Releases</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/50">Company</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="/about" className="text-white/70 hover:text-gold transition-colors">About us</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Press</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">News</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Media kit</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/50">Resources</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="/blogs" className="text-white/70 hover:text-gold transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Newsletter</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Events</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Help centre</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Tutorials</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/50">Use cases</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Startups</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Enterprise</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Government</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">SaaS centre</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Marketplaces</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Ecommerce</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/50">Social</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Twitter</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Facebook</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">GitHub</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">AngelList</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Dribbble</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/50">Legal</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Terms</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Privacy</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Cookies</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Licenses</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Settings</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full object-cover" />
              <span className="text-xl font-bold text-white">Africa Diaspora Legal Hub</span>
            </Link>
            <p className="text-sm text-white/50">
              © 2026 Untitled UI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
