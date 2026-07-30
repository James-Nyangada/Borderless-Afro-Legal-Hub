import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Zap, Lightbulb, Rocket, Users } from "lucide-react";

export const metadata = {
  title: "About Us - Untitled UI",
  description: "Our mission is to empower teams to build better products together.",
};

export default function AboutPage() {
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

      <main className="pb-0">
        {/* Hero Section */}
        <section className="px-4 py-20 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101828] mb-6 tracking-tight">
            Our mission is to empower teams to build better products together.
          </h1>
          <p className="text-xl text-[#475467] leading-relaxed max-w-3xl mx-auto">
            We believe that the best tools fade into the background, allowing human creativity and collaboration to take center stage. We are building the infrastructure for the next generation of digital experiences.
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
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#101828] mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#f4ebff] text-[#7f56d9] rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#101828] mb-3">Clarity above all</h3>
                <p className="text-[#475467] leading-relaxed">
                  We prioritize clear communication and intuitive design. Complexity should be managed internally so our users experience only simplicity and power.
                </p>
              </div>
              {/* Value 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#f4ebff] text-[#7f56d9] rounded-full flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#101828] mb-3">Radical Collaboration</h3>
                <p className="text-[#475467] leading-relaxed">
                  Great products are not built in silos. We foster an environment where ideas are shared freely, critiqued constructively, and improved collectively.
                </p>
              </div>
              {/* Value 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#f4ebff] text-[#7f56d9] rounded-full flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#101828] mb-3">Continuous Velocity</h3>
                <p className="text-[#475467] leading-relaxed">
                  We move fast, but with purpose. We believe in shipping early, learning rapidly from real-world usage, and iterating relentlessly.
                </p>
              </div>
            </div>
          </section>

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

        {/* Meet the Team */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#101828] mb-4">Meet the Team</h2>
          <p className="text-lg text-[#475467] mb-16">The people building the future of collaboration.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 mb-4 shadow-sm border border-gray-100">
                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" alt="Sarah Jenkins" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-lg font-bold text-[#101828]">Sarah Jenkins</h3>
              <p className="text-[#475467] text-sm">CEO & Co-founder</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 mb-4 shadow-sm border border-gray-100">
                <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" alt="David Chen" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-lg font-bold text-[#101828]">David Chen</h3>
              <p className="text-[#475467] text-sm">CTO & Co-founder</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 mb-4 shadow-sm border border-gray-100">
                <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" alt="Elena Rodriguez" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-lg font-bold text-[#101828]">Elena Rodriguez</h3>
              <p className="text-[#475467] text-sm">Head of Design</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 mb-4 shadow-sm border border-gray-100">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" alt="Marcus Johnson" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-lg font-bold text-[#101828]">Marcus Johnson</h3>
              <p className="text-[#475467] text-sm">Lead Engineer</p>
            </div>
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
