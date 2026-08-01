import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
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
            <Link href="/categories" className="hover:text-[#101828] transition-colors">Categories</Link>
            <Link href="/media" className="hover:text-[#101828] transition-colors">Media & Gallery</Link>
            <Link href="/blogs" className="hover:text-[#101828] transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-[#101828] transition-colors">About us</Link>
            <Link href="/contact" className="hover:text-[#101828] transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3001'} className="text-base font-medium text-navy/70 hover:text-navy transition-colors">Log in</a>
            {/* <Link
              href="#"
              className="rounded-lg bg-navy px-4 py-2.5 text-base font-medium text-white hover:bg-navy-2 transition-colors"
            >
              Sign up
            </Link> */}
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

      <Footer />
    </div>
  );
}
