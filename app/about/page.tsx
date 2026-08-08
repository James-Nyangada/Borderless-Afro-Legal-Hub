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


        </div>

        {/* About the Founder */}
        <section id="about-founder" className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-24 mb-24">
          <div className="bg-white border border-gray-200 rounded-3xl p-10 sm:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="relative w-48 h-48 shrink-0 rounded-full overflow-hidden border-4 border-gold shadow-lg">
              <Image src="/logo.jpg" alt="Ian Mathenge" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#101828] mb-6">About the Founder</h2>
              <div className="space-y-4 text-[#475467] text-lg leading-relaxed">
                <p>
                  Borderless Legal Hub is founded and edited by Ian Mwiti Mathenge, a corporate lawyer admitted to practice in New York and Kenya, working at the intersection of international capital markets and cross-border corporate execution. His experience spans debt and equity offerings, green and sustainable-finance instruments, corporate governance, and mergers and acquisitions.
                </p>
                <p>
                  He holds an LL.M. from Harvard Law School — where he was named Dean's Scholar for his work on the rise of ESG in corporate law and governance — a Bachelor of Laws (First Class Honours), and a Master of Laws in Human Rights and Democratisation in Africa (with Distinction). That combination of global capital markets and African human-rights and development is the perspective the Hub is written from.
                </p>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
