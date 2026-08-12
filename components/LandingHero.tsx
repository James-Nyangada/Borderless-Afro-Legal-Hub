"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const carouselImages = [
  {
    src: "/hero1.jpg",
    alt: "Diverse group of legal professionals having a productive meeting",
  },
  {
    src: "/hero2.jpg",
    alt: "A sleek wooden gavel on a desk with law books",
  },
  {
    src: "/hero3.jpg",
    alt: "Abstract modern justice scale in gold and navy blue",
  },
];

export default function LandingHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative flex min-h-[500px] sm:min-h-[600px] w-full flex-col justify-end overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 text-white group cursor-pointer">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-transform duration-[6000ms] ease-out ${
                index === currentIndex ? "scale-105" : "scale-100"
              }`}
              priority={index === 0}
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-opacity duration-300 group-hover:opacity-80 z-0" />
        
        <div className="relative z-10 flex w-full max-w-4xl flex-col items-start gap-6">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white">
            Borderless Afro Legal Hub
          </h1>
          <h2 className="text-2xl font-medium sm:text-3xl text-gold">
            Demystifying Cross-Border Capital, Entity Formation & Relocation Across Africa
          </h2>
          <p className="mt-2 max-w-3xl text-lg text-gray-200 sm:text-xl leading-relaxed">
            Borderless Legal Hub is an independent thought-leadership platform delivering market intelligence and regulatory insights on cross-border capital flows, entity frameworks, and investment landscapes across Africa. Designed for institutional investors, global entrepreneurs, and the diaspora, the Hub unifies and demystifies Africa’s fragmented legal environment, making complex multi-jurisdictional information transparent, clear, and easily accessible.
          </p>
        </div>

        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block z-10">
          <ArrowRight className="h-12 w-12 text-gold/70 transition-colors group-hover:text-gold" strokeWidth={1.5} />
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className="w-11 h-11 flex items-center justify-center focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                  index === currentIndex ? "w-8 bg-gold" : "w-2 bg-white/50 hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
