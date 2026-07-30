import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Zap, Target, BookOpen, Globe, Award, Shield, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us - Untitled UI",
  description: "Demystifying cross-border legal and investment complexity across Africa.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-cream selection:text-navy">
      {/* Header */}
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

          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-navy/70">
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <button className="flex items-center gap-1 hover:text-navy transition-colors">
              Products <ChevronDown className="h-4 w-4" />
            </button>
            <Link href="/blogs" className="flex items-center gap-1 hover:text-navy transition-colors">
              Blog <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-navy transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-navy">
              About us
            </Link>
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

          <button className="md:hidden text-navy/70 hover:text-navy transition-colors">
            <Menu className="h-6 w-6 text-gold" />
          </button>
        </div>
      </header>

      <main>
        {/* Hero / Mission Statement */}
        <section className="bg-navy relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-2 opacity-90" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">Our Mission</span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Demystifying cross-border legal and investment complexity across Africa.
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              We exist to provide clear, actionable insights for those navigating the intricate legal and business landscapes of African markets.
            </p>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy">Who We Serve</h2>
              <p className="mt-4 text-navy/70 max-w-2xl mx-auto">Our platform is meticulously designed to support key players driving African growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5 hover:border-gold/30 transition-colors">
                <Globe className="h-10 w-10 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy mb-3">Diaspora Investors</h3>
                <p className="text-navy/70 leading-relaxed">Connecting you with secure, compliant investment pathways back home, mitigating risk and maximizing impact.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5 hover:border-gold/30 transition-colors">
                <Target className="h-10 w-10 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy mb-3">Institutional Investors</h3>
                <p className="text-navy/70 leading-relaxed">Providing deep-dive regulatory analysis and compliance frameworks for large-scale capital deployment.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5 hover:border-gold/30 transition-colors">
                <BookOpen className="h-10 w-10 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy mb-3">Startup Founders</h3>
                <p className="text-navy/70 leading-relaxed">Guiding entrepreneurs entering African markets through formation, governance, and capital raising.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Bio */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-cream shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
                  alt="Ian - Founder"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">The Founder</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">Ian</h2>
                <p className="text-navy/70 text-lg leading-relaxed mb-8">
                  Ian is a seasoned legal professional with extensive experience navigating the complexities of African legal frameworks. With deep expertise in cross-border transactions, he founded the platform to bridge the information gap for investors and founders.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-cream p-3 rounded-xl">
                      <Award className="h-6 w-6 text-gold shrink-0" />
                    </div>
                    <div>
                      <strong className="block text-navy font-bold text-lg mb-1">Credentials & Admissions</strong>
                      <span className="text-navy/70 leading-relaxed">Admitted to the Bar, with specialized certifications in international corporate law and cross-border transactions.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-cream p-3 rounded-xl">
                      <BookOpen className="h-6 w-6 text-gold shrink-0" />
                    </div>
                    <div>
                      <strong className="block text-navy font-bold text-lg mb-1">Relevant Experience</strong>
                      <span className="text-navy/70 leading-relaxed">Years of advising high-net-worth individuals, institutional funds, and tech startups expanding across the continent.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Focus */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Areas of Focus</h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">Our expertise spans across key sectors critical to African economic development.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-navy-2 p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-gold mb-3 group-hover:text-white transition-colors">Real Estate</h3>
                <p className="text-white/70 leading-relaxed">Navigating property rights, acquisitions, and commercial real estate development frameworks.</p>
              </div>
              <div className="bg-navy-2 p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-gold mb-3 group-hover:text-white transition-colors">Capital Markets</h3>
                <p className="text-white/70 leading-relaxed">Insights into securities regulations, debt/equity financing, and public market entry.</p>
              </div>
              <div className="bg-navy-2 p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-gold mb-3 group-hover:text-white transition-colors">FDI & ESG</h3>
                <p className="text-white/70 leading-relaxed">Foreign Direct Investment structuring aligned with robust Environmental, Social, and Governance standards.</p>
              </div>
              <div className="bg-navy-2 p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-gold mb-3 group-hover:text-white transition-colors">Startup Law</h3>
                <p className="text-white/70 leading-relaxed">Comprehensive legal roadmaps for tech startups, from incorporation to funding rounds and IP protection.</p>
              </div>
              <div className="bg-navy-2 p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-300 group lg:col-span-2">
                <h3 className="text-xl font-bold text-gold mb-3 group-hover:text-white transition-colors">Corporate Governance</h3>
                <p className="text-white/70 leading-relaxed">Establishing transparent, compliant, and efficient board structures and corporate practices for sustainable growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Approach */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="mx-auto max-w-7xl text-center">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">Our Commitment</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-16">Editorial Approach & Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-gold shadow-sm border border-navy/5">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Deeply Researched</h3>
                <p className="text-navy/70 leading-relaxed">Every piece of content is backed by rigorous legal research and verified against current statutes and market practices.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-gold shadow-sm border border-navy/5">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Uncompromising Accuracy</h3>
                <p className="text-navy/70 leading-relaxed">As a legal-adjacent platform, trust is our currency. We maintain strict editorial standards to ensure all analysis is precise and reliable.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-gold shadow-sm border border-navy/5">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Regularly Updated</h3>
                <p className="text-navy/70 leading-relaxed">African legal landscapes evolve rapidly. We commit to continuous updates, ensuring our insights remain highly relevant.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA and Footer */}
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
