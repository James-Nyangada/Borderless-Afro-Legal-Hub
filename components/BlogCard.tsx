'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  _id?: string;
  slug?: string; // Some hardcoded posts might not have a slug, we can use title as fallback
  title: string;
  excerpt?: string;
  author: any; // Can be string (from backend) or object (from hardcoded)
  createdAt?: string;
  publishDate?: string;
  featuredImages?: string[];
  category?: any;
  tags?: string[];
  // For fallback hardcoded posts
  image?: string;
  date?: string;
}

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Normalize images array
  const images = post.featuredImages?.length 
    ? post.featuredImages 
    : post.image 
      ? [post.image] 
      : [];

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000); // 4 seconds animation
      return () => clearInterval(timer);
    }
  }, [images.length]);

  // Normalize author name
  const authorName = typeof post.author === 'object' && post.author?.name 
    ? post.author.name 
    : typeof post.author === 'string' 
      ? post.author 
      : 'Unknown Author';

  // Format date
  const dateString = post.date || (post.publishDate || post.createdAt 
    ? new Date(post.publishDate || post.createdAt!).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    : 'Unknown Date');

  // Slug for linking
  const slug = post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const categoryName = typeof post.category === 'object' && post.category?.name 
    ? post.category.name 
    : typeof post.category === 'string' 
      ? post.category 
      : post.tags && post.tags.length > 0 ? post.tags[0] : null;

  return (
    <Link href={`/blog/${slug}`} className="group flex flex-col items-start justify-between cursor-pointer w-full h-full">
      <article className="flex flex-col w-full h-full">
        <div className="w-full overflow-hidden rounded-2xl bg-cream relative aspect-[4/3]">
          {images.length > 0 ? (
            images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`${post.title} - Image ${idx + 1}`}
                fill
                className={`object-cover transition-opacity duration-1000 ${
                  idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                } group-hover:scale-105`}
                referrerPolicy="no-referrer"
              />
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
              No Image
            </div>
          )}
        </div>
        
        <div className="mt-6 flex flex-col flex-1 w-full">
          {categoryName && (
            <span className="mb-3 inline-flex items-center rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy w-fit">
              {categoryName}
            </span>
          )}
          <h3 className="text-xl font-bold leading-6 text-navy transition-colors group-hover:text-navy-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-navy/70 flex-1">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {/* Profile picture commented out as requested */}
            {/*
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-cream">
              <Image
                src={typeof post.author === 'object' && post.author.image ? post.author.image : '/placeholder-avatar.png'}
                alt={authorName}
                fill
                className="object-cover"
              />
            </div>
            */}
            <div className="text-sm font-medium leading-6">
              <span className="text-navy">{authorName}</span>
              <span className="text-navy/50 font-normal mx-1">•</span>
              <span className="text-navy/60 font-normal">
                {dateString}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
