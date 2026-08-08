import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Building2, Globe, Scale, Lightbulb, Mail, ArrowUpRight, Zap } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import LandingHero from "@/components/LandingHero";
import InlineNewsletterForm from "@/components/InlineNewsletterForm";

async function getPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}/posts`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.data.posts.slice(0, 12);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null;
  }
}

export default async function BlogHome() {
  const fetchedPosts = await getPosts();
  const displayPosts = fetchedPosts || posts.slice(0, 12);
  
  const editorsPicks = displayPosts.slice(0, 3);
  const recentPosts = displayPosts.slice(3, 9); // Limit recent to 6 for cleaner layout

  const categories = [
    { name: "Cross-Border Capital & FDI", desc: "Investment routes, treaty protections, capital controls, and due-diligence for inbound capital.", icon: Globe, href: "/categories?tag=Cross-Border Capital %26 FDI" },
    { name: "Setting Up a Business in Africa", desc: "Jurisdiction choice, incorporating, holding-company structuring, and local-presence rules.", icon: Building2, href: "/categories?tag=Setting Up a Business in Africa" },
    { name: "Relocation & Establishment", desc: "Redomiciliation, residency, and what founders should know before relocating.", icon: ArrowUpRight, href: "/categories?tag=Relocation %26 Establishment" },
    { name: "The Europe–Africa Corridor", desc: "EU–Africa regulatory interface, supply-chain rules, and cross-border corridors.", icon: Scale, href: "/categories?tag=The Europe-Africa Corridor" },
    { name: "Capital Markets & Sustainable Finance", desc: "Raising debt/equity, listings, ESG instruments, and development-finance.", icon: TrendingUp, href: "/categories?tag=Capital Markets %26 Sustainable Finance" },
    { name: "Funds & Private Capital", desc: "Private equity, fund formation, diaspora vehicles, and catalytic finance.", icon: Lightbulb, href: "/categories?tag=Funds %26 Private Capital" },
    { name: "Infrastructure, Energy & Projects", desc: "Project finance, energy transition, and managing regulatory and political risk.", icon: Zap, href: "/categories?tag=Infrastructure, Energy %26 Projects" },
    { name: "Governance, Regulation & AfCFTA", desc: "Corporate governance, AfCFTA harmonisation, and cross-border enforcement.", icon: Scale, href: "/categories?tag=Governance, Regulation %26 AfCFTA" },
  ];

  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-cream selection:text-navy">
      <main>
        {/* Hero Section */}
        <LandingHero />

        {/* Trust Strip */}
        <section className="border-b border-gray-100 bg-gray-50/50 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-navy/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              <span>Insights by Ian Mathenge, Advocate of the High Court of Kenya</span>
            </div>
            <span className="hidden sm:block text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              <span>Navigating Cross-Border Legal Complexity</span>
            </div>
            <span className="hidden sm:block text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              <span>Trusted by Founders & Investors</span>
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-navy text-center sm:text-left">
            What We Cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link key={idx} href={cat.href} className="flex flex-col p-6 bg-white border border-gray-100 rounded-2xl hover:border-gold hover:shadow-md transition-all group items-start text-left">
                <div className="h-12 w-12 rounded-full bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors shrink-0">
                  <cat.icon className="h-6 w-6 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{cat.name}</h3>
                <p className="text-sm text-navy/70 leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Editor's Picks */}
        {editorsPicks.length > 0 && (
          <section className="bg-navy py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-white">
                  Editor's Picks
                </h2>
                <Link href="/blogs" className="hidden sm:flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-medium">
                  View all articles <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {editorsPicks.map((post: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 transition-transform hover:-translate-y-1">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Inline Subscribe */}
        <section className="bg-gold py-12 border-y border-navy/10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-navy mb-4">Stay ahead of Africa's evolving legal landscape</h3>
            <p className="text-navy/80 mb-6">Get premium regulatory insights and cross-border analysis delivered directly to your inbox.</p>
            <InlineNewsletterForm />
          </div>
        </section>

        {/* Recent Posts Section */}
        {recentPosts.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-3xl font-bold text-navy">
              Latest Insights
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post: any, idx: number) => (
                <BlogCard key={idx} post={post} />
              ))}
            </div>
            
            <div className="mt-16 flex justify-center">
              <Link href="/blogs" className="rounded-lg bg-navy/5 px-6 py-3 text-base font-semibold text-navy hover:bg-navy/10 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 transition-colors">
                View All Articles
              </Link>
            </div>
          </section>
        )}

        {/* About Author Teaser */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 mb-12">
          <div className="bg-cream rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative h-32 w-32 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg bg-navy flex items-center justify-center">
              <Image src="/logo.jpg" alt="Ian Mathenge" fill className="object-cover" />
            </div>
            
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-2xl font-bold text-navy mb-2">About the Author</h2>
              <p className="text-navy/70 leading-relaxed mb-6">
                Insights and analysis curated by Ian Mathenge, Advocate of the High Court of Kenya. Bridging the gap between complex cross-border regulations and actionable business strategy for investors in Africa.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-navy hover:text-gold transition-colors">
                Read full bio <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

const posts = [
  {
    title: "Migrating to Linear 101",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEiA4lwMPpHdffSlgq658uiqw2FkYiFMAOeXgDbwKDjFCHxSW0J0AdLzrZStZ9ITw6KgEBsw24QMnUlPGlmaiKX3HMlXfB1R_kGqE7RKeTWSYUsTfhavBACkSdx2UwKcUaw4IuYLubmHeHyCfMzBadZSr3xXoTAvf9GRWPMPj9MCwlkm0p0bKACgV7y2URq9DxtsjWB_iN2fOxBMSsAEZTESLU0WCtPqjQS2PiqN_kppn06x9eMGsd",
    category: "Capital Markets",
    author: {
      name: "Jonathan Wills",
    },
    date: "19 Jan 2022",
  },
  {
    title: "Building your API Stack",
    excerpt:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCsOsqi4lILyEZk5yeySEGYCfibBL39r6EiLRLU7NVLq1ysvPx0pB6Ryb-xjZ3l0kb3cepgiqtRzDVQaL_YhnLxuFRg3YPGoXQJX2lXXa6mE0DbLt-DqkFw4ZFmNvbivSslmAUS7jZM5Igk496edxvO0HPQFuObhe_wBN1VPSsmCNIm0GMOTKIzsKDiBR69Md1uTINkNmqldffk9_z4RzhJ0JmZvo--UPg8UCWheiZE268ba2L0uY3",
    category: "Corporate Governance",
    author: {
      name: "Lana Steiner",
    },
    date: "18 Jan 2022",
  },
  {
    title: "Structuring Cross-Border Property Deals",
    excerpt:
      "How to effectively manage real estate investments across different African jurisdictions while mitigating regulatory risk.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    category: "Real Estate",
    author: {
      name: "Ian Mathenge",
    },
    date: "24 Feb 2023",
  },
  {
    title: "PM mental models",
    excerpt:
      "Mental models are simple expressions of complex processes or relationships.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpHuXyBzMYFv_Om5d5i8Hxv_tFU8xsl7A3odbM6r8fcDHClIRuHC1J4HX-xZkglJOV-V9RshpydsZzIRc4EoQBi1q1GXLqAkEE90lutlMnaN6l_qJ5IusXC-EtFT6k7DVW-Ck6sSweQ1voJPEXxK02iFtfJrdLpJAM12TfqpOq9XXTZ_vUwGh7UYze4dofCb7GPDz70n5DVNZzP94_PvoFbpbFsLBjUIiYg46OrVOhWAfQbYMPA3Cv",
    category: "Startup Law",
    author: {
      name: "Eve Wilkins",
    },
    date: "18 Jan 2022",
  },
  {
    title: "What is Wireframing?",
    excerpt:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHNuEzfaRVhfeyDi3f-ijXi202JXWzQ-S1K6IObukPIBBNfhANVWNi8-g6gWlls3PvlCiWSRFdngwPm27aDflDInsqjC-cmnsETPoLx0DEep8su5XycNPNCqBMVJOp61EdXEGbBTW-tAuSVy5vrk51eglPLupa9gB9GgT4vp5Hw8BMDUHUvG0OtC_Ho2KlOF3NLkGWNP4jbV2MlbuvgtgwMWl5VsemNS4HCWUQiymDaWd-jswZSZcx",
    category: "FDI & ESG",
    author: {
      name: "Lana Steiner",
    },
    date: "18 Jan 2022",
  },
  {
    title: "How collaboration makes us better designers",
    excerpt:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-tZ7_ygVYU98la5s-Pl-Q4Urqpir8eOovx6KDyMj67Umne4apbRd5e73af6tukSgP_xp5b32ftdL4FRHfRcCDaIb4eBmyCMPpCjOIl1IxzQ4bvwnbE-qFGggxMUJNyaLM2tTQaMeivkB0K7F3AIluHnvqEPVXYTg1k--XkE9qsP0_0qvmAx-QVYNd7NlvHl8nE2ydk3z8FTmu7_wvelh_VJfecVgLF5KKipIOLRb8MPaLKENwz_BQ",
    category: "Corporate Governance",
    author: {
      name: "Jonathan Wills",
    },
    date: "19 Jan 2022",
  },
];
