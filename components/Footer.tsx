import Link from "next/link";
import Image from "next/image";
import { Zap, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Globe } from "lucide-react";
import { fetchAPI } from "@/lib/api";

const getSocialIcon = (platform: string) => {
  const p = platform.toLowerCase();
  if (p.includes('facebook')) return <Facebook className="w-5 h-5" />;
  if (p.includes('twitter') || p.includes('x')) return <Twitter className="w-5 h-5" />;
  if (p.includes('linkedin')) return <Linkedin className="w-5 h-5" />;
  if (p.includes('instagram')) return <Instagram className="w-5 h-5" />;
  if (p.includes('youtube')) return <Youtube className="w-5 h-5" />;
  if (p.includes('github')) return <Github className="w-5 h-5" />;
  return <Globe className="w-5 h-5" />;
};

export default async function Footer() {
  let contactData: any = {};
  try {
    const res = await fetchAPI('/pages/contact', { cache: 'no-store' });
    contactData = res.data?.page?.content || {};
  } catch (err) {
    console.error("Failed to fetch contact data for footer", err);
  }
  const socialLinks = contactData?.socialLinks || [];

  return (
    <div className="bg-charcoal pt-20 rounded-t-[40px] px-4 sm:px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-2xl text-center pb-20 border-b border-white/10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Subscribe to our newsletter
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Stay up to date with the latest news, announcements, and articles.
        </p>
        <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto" >
          <input 
            type="email" 
            placeholder="Enter your email" 
            required
            className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-base text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
          />
          <button 
            type="submit"
            className="w-full sm:w-auto rounded-lg bg-gold px-6 py-3 text-base font-medium text-navy hover:bg-[#b08e4f] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal transition-colors shadow-sm whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>

      <footer className="mx-auto max-w-7xl pb-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Excerpt */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full object-cover" />
              <span className="text-xl font-bold text-white">Africa Diaspora Legal Hub</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Empowering teams to build better products together. We are building the infrastructure for the next generation of digital experiences.
            </p>
            {/* Minimal Social Icons Row below excerpt */}
            {socialLinks.length > 0 && (
               <div className="flex items-center gap-4">
                  {socialLinks.map((link: any, idx: number) => (
                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors" title={link.platform}>
                      {getSocialIcon(link.platform)}
                    </a>
                  ))}
               </div>
            )}
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-white/50 mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/categories" className="text-white/70 hover:text-gold transition-colors">Categories</Link></li>
              <li><Link href="/media" className="text-white/70 hover:text-gold transition-colors">Media & Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white/50 mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="text-white/70 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/blogs" className="text-white/70 hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-gold transition-colors">Contact</Link></li>
              <li><Link href="/faqs" className="text-white/70 hover:text-gold transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Connect Details */}
          <div>
            <h3 className="text-sm font-semibold text-white/50 mb-6">Get in touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="break-all"><a href={`mailto:${contactData?.email || 'hello@untitled.com'}`} className="text-white/70 hover:text-gold transition-colors">{contactData?.email || 'hello@untitled.com'}</a></li>
              <li className="break-all"><a href={`tel:${contactData?.phone || '+1 555 000 0000'}`} className="text-white/70 hover:text-gold transition-colors">{contactData?.phone || '+1 (555) 000-0000'}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Untitled UI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
