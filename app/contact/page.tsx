import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Zap, Mail, MapPin, Phone, Plus } from "lucide-react";

export const metadata = {
  title: "Contact Us - Untitled UI",
  description: "Get in touch with the Untitled UI team.",
};

export default function ContactPage() {
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
            Get in touch
          </h1>
          <p className="text-xl text-[#475467] leading-relaxed max-w-2xl mx-auto">
            We'd love to hear from you. Please fill out this form or use our contact details below.
          </p>
        </section>

        {/* Contact Content */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#344054]">First name</label>
                    <input type="text" placeholder="Jane" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:border-transparent transition-shadow text-[#101828]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#344054]">Last name</label>
                    <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:border-transparent transition-shadow text-[#101828]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#344054]">Email</label>
                  <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:border-transparent transition-shadow text-[#101828]" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#344054]">Subject</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:border-transparent transition-shadow text-[#101828] appearance-none bg-white">
                      <option>General Inquiry</option>
                      <option>Support</option>
                      <option>Sales</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#344054]">Message</label>
                  <textarea placeholder="Leave us a message..." rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:border-transparent transition-shadow text-[#101828] resize-none"></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="privacy" className="h-4 w-4 rounded border-gray-300 text-[#7f56d9] focus:ring-[#7f56d9]" />
                  <label htmlFor="privacy" className="text-sm text-[#475467]">
                    You agree to our friendly <Link href="#" className="text-[#7f56d9] hover:underline">privacy policy</Link>.
                  </label>
                </div>

                <button type="button" className="w-full py-3 px-4 rounded-lg bg-[#7f56d9] hover:bg-[#6941c6] text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:ring-offset-2">
                  Send message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                {/* Email Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="w-10 h-10 bg-[#f4ebff] text-[#7f56d9] rounded-full flex items-center justify-center mb-6">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#101828] mb-2">Email us</h3>
                  <p className="text-[#475467] text-sm mb-4 flex-1">Our friendly team is here to help.</p>
                  <a href="mailto:hello@modernminimal.com" className="text-[#7f56d9] font-medium text-sm hover:underline">hello@modernminimal.com</a>
                </div>

                {/* Office Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="w-10 h-10 bg-[#f4ebff] text-[#7f56d9] rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#101828] mb-2">Office</h3>
                  <p className="text-[#475467] text-sm mb-4 flex-1">Come say hello at our HQ.</p>
                  <div className="text-[#101828] font-medium text-sm">
                    <p>100 Smith Street</p>
                    <p>Collingwood VIC 3066 AU</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:col-span-2 md:col-span-1 lg:col-span-2">
                  <div className="w-10 h-10 bg-[#f4ebff] text-[#7f56d9] rounded-full flex items-center justify-center mb-6">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#101828] mb-2">Phone</h3>
                  <p className="text-[#475467] text-sm mb-4 flex-1">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+15550000000" className="text-[#7f56d9] font-medium text-sm hover:underline">+1 (555) 000-0000</a>
                </div>
              </div>
              
              {/* Map Image container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-64 relative w-full">
                <Image 
                   src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600" 
                   alt="Map location" 
                   fill 
                   className="object-cover opacity-70"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                {/* Fake map pins to match design aesthetic loosely */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="relative">
                     <MapPin className="h-10 w-10 text-[#7f56d9] fill-white" />
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#7f56d9]/20 rounded-full animate-ping"></div>
                  </div>
                </div>
                 <div className="absolute top-1/2 left-1/3 -translate-x-1/2 translate-y-4 flex items-center justify-center">
                  <div className="relative">
                     <MapPin className="h-8 w-8 text-[#7f56d9] fill-white" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto pt-16">
          <h2 className="text-3xl font-bold text-center text-[#101828] mb-12">Frequently asked questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:border-gray-200 transition-colors">
              <h3 className="text-lg font-semibold text-[#101828]">Is there a free trial available?</h3>
              <Plus className="w-5 h-5 text-gray-400" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:border-gray-200 transition-colors">
              <h3 className="text-lg font-semibold text-[#101828]">Can I change my plan later?</h3>
              <Plus className="w-5 h-5 text-gray-400" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:border-gray-200 transition-colors">
              <h3 className="text-lg font-semibold text-[#101828]">What is your cancellation policy?</h3>
              <Plus className="w-5 h-5 text-gray-400" />
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
