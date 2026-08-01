'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroCarouselProps {
  images: string[];
  title: string;
}

export default function HeroCarousel({ images, title }: HeroCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 bg-cream shadow-sm group">
      {images.map((img, idx) => (
        <Image 
          key={idx}
          src={img} 
          alt={`${title} - Image ${idx + 1}`} 
          fill 
          className={`object-cover transition-opacity duration-1000 ${
            idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={idx === 0}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
}
