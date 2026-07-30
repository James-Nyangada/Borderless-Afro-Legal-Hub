import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Zap, ChevronRight, Share2, Link as LinkIcon } from "lucide-react";

export const metadata = {
  title: "The Future of Product Design - Untitled UI",
  description: "Exploring the intersection of artificial intelligence and creative workflows.",
};

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-cream selection:text-navy">
      {/* Navigation */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-navy text-white">
                <Zap className="h-5 w-5 fill-current text-gold" />
              </div>
              <span className="text-xl font-bold text-navy">Untitled UI</span>
            </Link>
          </div>

                                        <nav className="hidden lg:flex items-center gap-6 text-base font-medium text-[#475467]">
            <Link href="/" className="hover:text-[#101828] transition-colors">Home</Link>
            <Link href="/services" className="hover:text-[#101828] transition-colors">Services</Link>
            <Link href="/media" className="hover:text-[#101828] transition-colors">Media & Gallery</Link>
            <Link href="/blogs" className="hover:text-[#101828] transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-[#101828] transition-colors">About us</Link>
            <Link href="/contact" className="hover:text-[#101828] transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-base font-medium text-navy/70 hover:text-navy transition-colors"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="rounded-lg bg-navy px-4 py-2.5 text-base font-medium text-white hover:bg-navy-2 transition-colors"
            >
              Sign up
            </Link>
          </div>

          <button className="lg:hidden text-navy/70 hover:text-navy transition-colors">
            <Menu className="h-6 w-6 text-gold" />
          </button>
        </div>
      </header>

      <main>
        {/* Article Container */}
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-navy/60 font-medium mb-10">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blogs" className="hover:text-navy transition-colors">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-navy">Product Design</span>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-cream text-navy font-semibold text-sm rounded-full mb-6 border border-navy/5">
              Product Design
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-6 leading-tight">
              The Future of Product Design: How AI is Reshaping Our Tools
            </h1>
            <p className="text-xl text-navy/70 mb-8 leading-relaxed">
              Exploring the intersection of artificial intelligence and creative workflows.
            </p>
            
            {/* Author Meta */}
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-cream">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
                  alt="Frankie Sullivan" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-semibold text-navy">Frankie Sullivan</div>
                <div className="text-sm text-navy/60">Oct 24, 2024 · 5 min read</div>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 bg-cream shadow-sm">
            <Image 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564" 
              alt="AI and Product Design" 
              fill 
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-navy max-w-none text-navy/80">
            <p className="text-lg leading-relaxed mb-8">
              The landscape of product design is undergoing a seismic shift. For decades, our tools have been 
              largely passive—digital canvases waiting for our input. But today, with the rapid advancement of 
              artificial intelligence, these tools are becoming active collaborators.
            </p>

            <h2 className="text-3xl font-bold text-navy mb-6 mt-16">From Canvas to Collaborator</h2>
            
            <p className="text-lg leading-relaxed mb-8">
              We are moving beyond simple automation. AI is now capable of generating variations, suggesting 
              layout optimizations based on user behavior data, and even predicting accessibility issues before a 
              design leaves the conceptual phase. This transition frees designers from the minutiae of pixel-pushing.
            </p>

            <blockquote className="border-l-4 border-gold pl-6 py-4 my-10 bg-cream/30 rounded-r-2xl">
              <p className="text-xl italic text-navy font-medium leading-relaxed m-0">
                "Design is not just what it looks like and feels like. Design is how it works, and AI is 
                helping us understand 'how it works' faster and deeper than ever before."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold text-navy mb-6 mt-16">Key Impacts on the Creative Workflow</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              The integration of AI into our daily workflows brings several immediate benefits:
            </p>

            <ul className="list-disc pl-6 space-y-4 mb-10 text-lg">
              <li>
                <strong className="text-navy font-semibold">Rapid Prototyping:</strong> Generate dozens of wireframe 
                iterations in seconds based on a simple text prompt.
              </li>
              <li>
                <strong className="text-navy font-semibold">Data-Driven Decisions:</strong> Real-time analytics 
                integrated directly into the design environment.
              </li>
              <li>
                <strong className="text-navy font-semibold">Enhanced Accessibility:</strong> Automated checks for color 
                contrast, typography readability, and screen reader compatibility.
              </li>
              <li>
                <strong className="text-navy font-semibold">System Scalability:</strong> AI-assisted maintenance of robust 
                design systems, ensuring consistency across vast ecosystems.
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-12">
              As we look to the future, the role of the designer will evolve from a creator of artifacts to a curator of 
              experiences, guiding AI systems to achieve human-centric outcomes.
            </p>
          </div>

          {/* Author Footer */}
          <div className="border-t border-navy/10 pt-10 mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden bg-cream shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
                  alt="Frankie Sullivan" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">Written by Frankie Sullivan</h3>
                <p className="text-navy/70 text-sm">Product Designer specializing in AI tooling and future interfaces.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <button 
                className="h-10 w-10 flex items-center justify-center rounded-full border border-navy/10 text-navy hover:bg-cream hover:border-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Share article"
              >
                <Share2 className="h-5 w-5" />
              </button>
              <button 
                className="h-10 w-10 flex items-center justify-center rounded-full border border-navy/10 text-navy hover:bg-cream hover:border-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Copy link"
              >
                <LinkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="border-t border-navy/10 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy mb-10">From the blog</h2>
            
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
              {/* Card 1 */}
              <Link href="/blog/building-scalable-architecture" className="group flex flex-col items-start">
                <div className="w-full overflow-hidden rounded-2xl bg-cream relative aspect-[16/9] mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
                    alt="Design Systems"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-sm font-semibold text-gold mb-2 block">Design Systems</span>
                <h3 className="text-xl font-bold leading-6 text-navy transition-colors group-hover:text-navy-2 mb-3">
                  Building Scalable Architecture
                </h3>
                <p className="text-sm leading-6 text-navy/70">
                  Learn the foundational principles for creating a design system that grows with your team.
                </p>
              </Link>

              {/* Card 2 */}
              <Link href="/blog/the-developer-handoff" className="group flex flex-col items-start">
                <div className="w-full overflow-hidden rounded-2xl bg-cream relative aspect-[16/9] mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1522881113591-4468eeeb7469?auto=format&fit=crop&q=80&w=800"
                    alt="Engineering"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-sm font-semibold text-gold mb-2 block">Engineering</span>
                <h3 className="text-xl font-bold leading-6 text-navy transition-colors group-hover:text-navy-2 mb-3">
                  The Developer Handoff
                </h3>
                <p className="text-sm leading-6 text-navy/70">
                  Strategies for seamless collaboration between design and engineering teams.
                </p>
              </Link>

              {/* Card 3 */}
              <Link href="/blog/quantitative-empathy" className="group flex flex-col items-start">
                <div className="w-full overflow-hidden rounded-2xl bg-cream relative aspect-[16/9] mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                    alt="User Research"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-sm font-semibold text-gold mb-2 block">User Research</span>
                <h3 className="text-xl font-bold leading-6 text-navy transition-colors group-hover:text-navy-2 mb-3">
                  Quantitative Empathy
                </h3>
                <p className="text-sm leading-6 text-navy/70">
                  Using data analytics to drive empathetic design decisions in complex products.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <div className="bg-charcoal pt-20 rounded-t-[40px] px-4 sm:px-6 lg:px-8 text-white">
        <div className="mx-auto max-w-2xl text-center pb-20 border-b border-white/10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's get started on something great
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto rounded-lg border border-gold bg-transparent px-6 py-3 text-base font-medium text-gold hover:bg-gold/10 focus:outline-none focus:ring-2 focus:ring-gold transition-colors">
              Chat to us
            </button>
            <button className="w-full sm:w-auto rounded-lg bg-gold px-6 py-3 text-base font-medium text-navy hover:bg-[#b08e4f] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal transition-colors shadow-sm">
              Get started
            </button>
          </div>
        </div>

        <footer className="mx-auto max-w-7xl pb-12 pt-16">
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
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gold text-navy">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="text-xl font-bold text-white">Untitled UI</span>
            </Link>
            <p className="text-sm text-white/50">
              © 2077 Untitled UI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
