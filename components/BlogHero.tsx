"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

export default function BlogHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative flex min-h-[300px] sm:min-h-[400px] w-full flex-col justify-end overflow-hidden rounded-3xl p-8 sm:p-12 text-white group">
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
        
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent transition-opacity duration-300 group-hover:opacity-80 z-0" />
        
        <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center mx-auto gap-4 mb-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Our Blog
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-white">
            Borderless Afro Legal Hub
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-gray-200 sm:text-xl">
            In-depth analysis on cross-border investment, regulation, and market entry across Africa — updated as the landscape shifts.
          </p>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
