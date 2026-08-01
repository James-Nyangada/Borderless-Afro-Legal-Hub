import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Zap, Lightbulb, Rocket, Users } from "lucide-react";
import { fetchAPI } from "@/lib/api";

export const metadata = {
  title: "About Us - Untitled UI",
  description: "Our mission is to empower teams to build better products together.",
};

export default async function AboutPage() {
  let aboutData: any = {};
  try {
    const res = await fetchAPI('/pages/about', { cache: 'no-store' });
    aboutData = res.data?.page?.content || {};
  } catch (err) {
    console.error("Failed to fetch about page data", err);
  }

  const heroTitle = aboutData?.heroTitle || "Our mission is to empower teams to build better products together.";
  const heroSubtitle = aboutData?.heroSubtitle || "We believe that the best tools fade into the background, allowing human creativity and collaboration to take center stage. We are building the infrastructure for the next generation of digital experiences.";
  const values = aboutData?.values || [];

  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-cream selection:text-navy">
      {/* Navigation */}
      

      <main className="pb-0">
        {/* Hero Section */}
        <section className="px-4 py-20 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101828] mb-6 tracking-tight">
            {heroTitle}
          </h1>
          <p className="text-xl text-[#475467] leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
            {heroSubtitle}
          </p>
        </section>

        {/* Hero Image */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="w-full aspect-[21/9] bg-gray-100 rounded-3xl overflow-hidden relative shadow-sm">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2850" 
              alt="Team collaboration" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </section>

        <div className="bg-[#f9fafb] py-24 border-t border-gray-100">
          {/* Our Values */}
          {values.length > 0 && (
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#101828] mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((val: any, index: number) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-[#f4ebff] text-[#7f56d9] rounded-full flex items-center justify-center mb-6">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#101828] mb-3">{val.title}</h3>
                    <p className="text-[#475467] leading-relaxed whitespace-pre-line">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Our Journey */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="bg-[#f0f2f5] border border-gray-200 rounded-3xl p-10 sm:p-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#101828] mb-16">Our Journey</h2>
              
              <div className="space-y-12">
                {/* Milestone 1 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 h-full w-[2px] bg-gray-300"></div>
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-[#7f56d9] border-[3px] border-[#f0f2f5] box-content"></div>
                  <h3 className="text-2xl font-bold text-[#101828] mb-2">2021: The Genesis</h3>
                  <p className="text-[#475467] text-lg">Founded in a small apartment with a singular vision to fix broken design handoffs.</p>
                </div>
                {/* Milestone 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 h-full w-[2px] bg-gray-300"></div>
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-[#7f56d9] border-[3px] border-[#f0f2f5] box-content"></div>
                  <h3 className="text-2xl font-bold text-[#101828] mb-2">2022: Seed Round & V1</h3>
                  <p className="text-[#475467] text-lg">Secured $2M in seed funding and successfully launched our first public beta to 1,000 teams.</p>
                </div>
                {/* Milestone 3 */}
                <div className="relative pl-8">
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-[#7f56d9] border-[3px] border-[#f0f2f5] box-content"></div>
                  <h3 className="text-2xl font-bold text-[#101828] mb-2">2024: Scaling Up</h3>
                  <p className="text-[#475467] text-lg">Reached 50,000 active users, expanded our team to 40 talented individuals, and introduced advanced AI workflows.</p>
                </div>
              </div>
            </div>
          </section>
        </div>


      </main>

      <Footer />
    </div>
  );
}
