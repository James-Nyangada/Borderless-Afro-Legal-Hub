import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Zap, Search } from "lucide-react";
import { fetchAPI } from "@/lib/api";

export const metadata = {
  title: "FAQs - Untitled UI",
  description: "Everything you need to know about the product and billing.",
};

export default async function FaqsPage() {
  let faqData: any = {};
  try {
    const res = await fetchAPI('/pages/faq', { cache: 'no-store' });
    faqData = res.data?.page?.content || {};
  } catch (err) {
    console.error("Failed to fetch faq page data", err);
  }

  const faqs = faqData?.faqs || [];

  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#101828] font-sans selection:bg-[#f4ebff] selection:text-[#7f56d9] flex flex-col">
      {/* Navigation */}
      

      <main className="flex-1 pb-24 bg-[#f9fafb]">
        {/* Header Section */}
        <section className="px-4 py-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#101828] mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#475467] mb-10">
            {faqData.subtitle || "Everything you need to know about the product and billing."}
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
              {faqs.length > 0 ? (
                faqs.map((faq: any, index: number) => (
                  <details key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
                    <summary className="p-6 flex justify-between items-center cursor-pointer list-none hover:border-gray-200 transition-colors">
                      <h3 className="text-[#101828] text-lg font-medium pr-4">{faq.question}</h3>
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 group-open:-rotate-180 transition-transform duration-200" />
                    </summary>
                    <div className="px-6 pb-6 text-[#475467]">
                      {faq.answer}
                    </div>
                  </details>
                ))
              ) : (
                <div className="text-center py-12 text-[#475467]">
                  No FAQs available at the moment.
                </div>
              )}
           </div>
        </section>

        {/* Still have questions */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-24">
           <div className="bg-[#f4f3ff] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100 shadow-sm">
              <div>
                <h3 className="text-2xl font-bold text-[#101828] mb-2">Still have questions?</h3>
                <p className="text-[#475467]">Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
              </div>
              <Link href="/contact" className="shrink-0 px-5 py-3 rounded-lg bg-[#7f56d9] text-white font-medium hover:bg-[#6941c6] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:ring-offset-2 inline-block">
                Get in touch
              </Link>
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
              <span className="text-[#475467] text-sm">© 2026 Untitled UI. All rights reserved.</span>
           </div>
           <div className="flex items-center gap-6 text-sm text-[#475467]">
              <Link href="#" className="hover:text-[#101828]">Terms</Link>
              <Link href="/privacy-policy" className="hover:text-[#101828]">Privacy</Link>
              <Link href="#" className="hover:text-[#101828]">Cookies</Link>
              <Link href="/contact" className="hover:text-[#101828]">Contact</Link>
           </div>
        </div>
      </footer>
    </div>
  );
}
