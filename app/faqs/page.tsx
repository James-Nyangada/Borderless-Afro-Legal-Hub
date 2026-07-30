import Link from "next/link";
import { ChevronDown, Menu, Zap, Search } from "lucide-react";

export const metadata = {
  title: "FAQs - Untitled UI",
  description: "Everything you need to know about the product and billing.",
};

export default function FaqsPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#101828] font-sans selection:bg-[#f4ebff] selection:text-[#7f56d9] flex flex-col">
      {/* Navigation */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#f4ebff] text-[#7f56d9]">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="text-xl font-bold text-[#101828]">Untitled UI</span>
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
              className="text-base font-medium text-[#475467] hover:text-[#101828] transition-colors"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="rounded-lg bg-[#7f56d9] px-4 py-2.5 text-base font-medium text-white hover:bg-[#6941c6] transition-colors"
            >
              Sign up
            </Link>
          </div>

          <button className="lg:hidden text-[#475467] hover:text-[#101828] transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main className="flex-1 pb-24 bg-[#f9fafb]">
        {/* Header Section */}
        <section className="px-4 py-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#101828] mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#475467] mb-10">
            Everything you need to know about the product and billing.
          </p>
          
          <div className="relative max-w-xl mx-auto">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
               <Search className="h-5 w-5 text-gray-400" />
             </div>
             <input type="text" placeholder="Search for answers..." className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:border-transparent text-[#101828] bg-white" />
          </div>
        </section>

        {/* FAQ Layout */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
           {/* Sidebar */}
           <div className="w-full md:w-64 shrink-0 space-y-2">
             <button className="w-full text-left px-4 py-2.5 rounded-lg bg-[#f4ebff] text-[#7f56d9] font-medium transition-colors">
               General
             </button>
             <button className="w-full text-left px-4 py-2.5 rounded-lg text-[#475467] font-medium hover:bg-gray-50 transition-colors">
               Features
             </button>
             <button className="w-full text-left px-4 py-2.5 rounded-lg text-[#475467] font-medium hover:bg-gray-50 transition-colors">
               Integrations
             </button>
             <button className="w-full text-left px-4 py-2.5 rounded-lg text-[#475467] font-medium hover:bg-gray-50 transition-colors">
               Billing
             </button>
           </div>
           
           {/* Accordion */}
           <div className="flex-1 space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:border-gray-200 transition-colors">
                <h3 className="text-[#101828] text-lg font-medium">Is there a free trial available?</h3>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:border-gray-200 transition-colors">
                <h3 className="text-[#101828] text-lg font-medium">Can I change my plan later?</h3>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:border-gray-200 transition-colors">
                <h3 className="text-[#101828] text-lg font-medium">What is your cancellation policy?</h3>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:border-gray-200 transition-colors">
                <h3 className="text-[#101828] text-lg font-medium">How does billing work?</h3>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
           </div>
        </section>

        {/* Still have questions */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-24">
           <div className="bg-[#f4f3ff] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100 shadow-sm">
              <div>
                <h3 className="text-2xl font-bold text-[#101828] mb-2">Still have questions?</h3>
                <p className="text-[#475467]">Can't find the answer you're looking for? Please chat to our friendly team.</p>
              </div>
              <button className="shrink-0 px-5 py-3 rounded-lg bg-[#7f56d9] text-white font-medium hover:bg-[#6941c6] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:ring-offset-2">
                Get in touch
              </button>
           </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#f4ebff] text-[#7f56d9]">
                <Zap className="h-4 w-4 fill-current" />
              </div>
              <span className="text-[#475467] text-sm">© 2024 Untitled UI. All rights reserved.</span>
           </div>
           <div className="flex items-center gap-6 text-sm text-[#475467]">
              <Link href="#" className="hover:text-[#101828]">Terms</Link>
              <Link href="/privacy" className="hover:text-[#101828]">Privacy</Link>
              <Link href="#" className="hover:text-[#101828]">Cookies</Link>
              <Link href="/contact" className="hover:text-[#101828]">Contact</Link>
           </div>
        </div>
      </footer>
    </div>
  );
}
