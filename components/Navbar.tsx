"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <div className="flex items-center gap-3 z-50 py-2">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <Image src="/logo.jpg" alt="Logo" width={80} height={80} className="object-contain hover:scale-105 transition-transform" priority />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-base font-medium text-[#475467]">
          <Link href="/" className="hover:text-[#101828] transition-colors">Home</Link>
          <Link href="/categories" className="hover:text-[#101828] transition-colors">Categories</Link>
          <Link href="/blogs" className="hover:text-[#101828] transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-[#101828] transition-colors">About us</Link>
          <Link href="/contact" className="hover:text-[#101828] transition-colors">Contact</Link>
        </nav>



        <button 
          className="lg:hidden text-navy/70 hover:text-navy transition-colors z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
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
          <Link href="/blogs" className="hover:text-[#101828] transition-colors" onClick={closeMenu}>Blog</Link>
          <Link href="/about" className="hover:text-[#101828] transition-colors" onClick={closeMenu}>About us</Link>
          <Link href="/contact" className="hover:text-[#101828] transition-colors" onClick={closeMenu}>Contact</Link>
        </nav>
        

      </div>
    </header>
  );
}
