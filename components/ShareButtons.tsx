'use client';

import { Share2, Link as LinkIcon, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

interface ShareButtonsProps {
  title: string;
  text: string;
  url?: string;
}

export default function ShareButtons({ title, text, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(url || window.location.href);
  }, [url]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: currentUrl,
        });
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      // Fallback if Web Share API is not supported (copy link)
      handleCopyLink();
      toast.success('Link copied to your clipboard!');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <div className="flex items-center gap-3 shrink-0 relative">
      <button 
        onClick={handleShare}
        className="h-10 w-10 flex items-center justify-center rounded-full border border-navy/10 text-navy hover:bg-cream hover:border-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
        aria-label="Share article via OS share menu"
        title="Share to WhatsApp, Instagram, X, etc."
      >
        <Share2 className="h-5 w-5" />
      </button>
      
      <div className="relative">
        <button 
          onClick={handleCopyLink}
          className={`h-10 w-10 flex items-center justify-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-gold ${
            copied 
              ? 'bg-green-50 border-green-200 text-green-600' 
              : 'border-navy/10 text-navy hover:bg-cream hover:border-gold'
          }`}
          aria-label="Copy link"
          title="Copy link to clipboard"
        >
          {copied ? <Check className="h-5 w-5" /> : <LinkIcon className="h-5 w-5" />}
        </button>
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}
