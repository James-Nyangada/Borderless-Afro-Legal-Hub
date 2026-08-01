import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Untitled UI",
  description: "Privacy Policy for Untitled UI",
};

export default async function PrivacyPage() {
  let privacyData: any = {};
  
  try {
    const res = await fetchAPI('/pages/privacy-policy', { cache: 'no-store' });
    privacyData = res.data?.page?.content || {};
  } catch (err) {
    console.error("Failed to fetch privacy page data", err);
  }

  // Fallback content in case the database is empty or fetch fails
  const fallbackHTML = `
    <h2>Introduction</h2>
    <p>Welcome to Untitled UI. We are committed to protecting your personal information and your right to privacy.</p>
  `;

  const htmlContent = privacyData?.text || fallbackHTML;

  return (
    <div className="min-h-screen bg-white text-[#101828] font-sans selection:bg-[#f4ebff] selection:text-[#7f56d9] flex flex-col">
      {/* Navigation */}
      

      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 pb-12 border-b border-gray-100">
           <div className="max-w-3xl">
             <div className="text-sm font-semibold text-[#7f56d9] mb-3">Legal</div>
             <h1 className="text-4xl sm:text-5xl font-bold text-[#101828] mb-6 tracking-tight">
               Privacy Policy
             </h1>
             <p className="text-lg text-[#475467] leading-relaxed">
               Your privacy is important to us. This privacy policy explains what personal data we collect from you and how we use it. Last updated on October 24, 2024.
             </p>
           </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-12 w-full overflow-hidden">
           <div 
             className="prose prose-lg max-w-none w-full break-words text-[#475467] prose-headings:text-[#101828] prose-a:text-[#7f56d9] hover:prose-a:text-[#6941c6] overflow-wrap-anywhere overflow-x-hidden"
             dangerouslySetInnerHTML={{ __html: htmlContent }} 
           />
        </section>
      </main>
      <Footer />
    </div>
  );
}
