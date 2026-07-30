import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Zap, Download, Palette, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Media & Gallery - Untitled UI",
  description: "Explore our visual identity and project photography.",
};

export default function MediaPage() {
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

      <main className="pb-24 bg-[#f9fafb]">
        {/* Header Section */}
        <section className="px-4 py-20 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101828] mb-6 tracking-tight">
            Media & Gallery
          </h1>
          <p className="text-xl text-[#475467] leading-relaxed max-w-2xl mx-auto">
            Explore our visual identity, latest project photography, and download official brand assets for press and partnerships.
          </p>
        </section>

        {/* Project Highlights */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-[#101828] mb-8">Project Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 h-[240px] relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
              <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" alt="Office desk" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="lg:col-span-1 h-[240px] relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Working on tablet" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="lg:col-span-1 lg:row-span-2 h-[504px] relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100 hidden lg:block">
              <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Modern office interior" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            
            <div className="lg:col-span-1 h-[240px] relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
              <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Architecture" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="lg:col-span-1 h-[240px] relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
              <Image src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200" alt="Laptop and phone on desk" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* Brand Kit */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-[#101828] mb-8">Brand Kit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logos */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#7f56d9]"><Zap className="w-6 h-6" /></div>
                  <h3 className="text-2xl font-bold text-[#7f56d9]">Official Logos</h3>
                </div>
                <p className="text-[#475467] leading-relaxed mb-8 max-w-sm">
                  Download our primary and secondary logo marks in SVG and high-resolution PNG formats. Includes light and dark mode variations.
                </p>
              </div>
              <div>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-[#344054] hover:bg-gray-50 font-medium transition-colors shadow-sm">
                  <Download className="w-4 h-4" /> Download ZIP (12MB)
                </button>
              </div>
            </div>

            {/* Color Palette */}
            <div className="bg-[#f0f2f5] rounded-3xl p-8 shadow-sm border border-gray-200 h-full flex flex-col justify-between">
               <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-[#101828]"><Palette className="w-5 h-5" /></div>
                    <h3 className="text-xl font-bold text-[#101828]">Color Palette</h3>
                  </div>
                  
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#7f56d9] border border-black/10 shadow-sm"></div>
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm"></div>
                    <div className="w-12 h-12 rounded-full bg-[#101828] border border-black/10 shadow-sm"></div>
                  </div>
                  
                  <p className="text-[#475467] leading-relaxed text-sm mb-6 max-w-sm">
                    Access our official color codes (HEX, RGB, CMYK) and usage guidelines.
                  </p>
               </div>
               <div>
                 <Link href="#" className="flex items-center gap-2 text-[#7f56d9] font-medium hover:underline">
                    View Guidelines <ArrowRight className="w-4 h-4" />
                 </Link>
               </div>
            </div>
          </div>
        </section>

        {/* Press Mentions */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 text-center">
          <h2 className="text-3xl font-bold text-[#101828] mb-12">Press Mentions</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-3xl font-bold font-sans">TECHCRUNCH</span>
            <span className="text-3xl font-serif italic">The Verge</span>
            <div className="border-[3px] border-black px-3 py-1 font-bold text-2xl tracking-widest">WIRED</div>
            <span className="text-2xl font-medium tracking-wider text-gray-800">FAST COMPANY</span>
          </div>
        </section>

      </main>

      {/* CTA and Footer Section */}
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
