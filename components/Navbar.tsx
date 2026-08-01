"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // A helper to close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 z-50">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
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
          <a href={process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://dashboard.borderlessafrolegalhub.com/'} className="text-base font-medium text-navy/70 hover:text-navy transition-colors">Log in</a>
        </div>

        <button 
          className="lg:hidden text-navy/70 hover:text-navy transition-colors z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6 text-gold" /> : <Menu className="h-6 w-6 text-gold" />}
        </button>
      </div>

      {/* Mobile Slide-out Menu */}
      <div 
        className={`fixed inset-0 bg-navy/20 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg font-medium text-[#475467]">
          <Link href="/" className="hover:text-[#101828] transition-colors" onClick={closeMenu}>Home</Link>
          <Link href="/categories" className="hover:text-[#101828] transition-colors" onClick={closeMenu}>Categories</Link>
          <Link href="/media" className="hover:text-[#101828] transition-colors" onClick={closeMenu}>Media & Gallery</Link>
          <Link href="/blogs" className="hover:text-[#101828] transition-colors" onClick={closeMenu}>Blog</Link>
          <Link href="/about" className="hover:text-[#101828] transition-colors" onClick={closeMenu}>About us</Link>
          <Link href="/contact" className="hover:text-[#101828] transition-colors" onClick={closeMenu}>Contact</Link>
        </nav>
        
        <div className="mt-auto pb-10 flex flex-col gap-4">
          <a 
            href={process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://dashboard.borderlessafrolegalhub.com/'} 
            className="rounded-lg bg-navy px-4 py-3 text-center text-base font-medium text-white hover:bg-navy-2 transition-colors"
          >
            Log in
          </a>
        </div>
      </div>
    </header>
  );
}
