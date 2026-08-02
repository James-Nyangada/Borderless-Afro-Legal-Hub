"use client";

import { useState } from "react";
import { fetchAPI } from "@/lib/api";
import { toast } from "react-hot-toast";
import { Mail } from "lucide-react";

export default function InlineNewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      await fetchAPI("/subscribers", {
        method: "POST",
        body: JSON.stringify({ email, source: "inline_home" }),
      });
      toast.success("Thanks for subscribing!");
      setEmail("");
    } catch (err: any) {
      toast.error(err.message || "Failed to subscribe. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
      <div className="relative w-full">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-navy/50" />
        <input 
          type="email" 
          placeholder="Enter your email address" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="w-full rounded-lg border border-transparent bg-white pl-10 pr-4 py-3 text-sm text-navy placeholder-navy/50 focus:outline-none focus:ring-2 focus:ring-navy transition-all shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
        />
      </div>
      <button 
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-2 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 focus:ring-offset-gold transition-colors shadow-sm whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Joining..." : "Join Newsletter"}
      </button>
    </form>
  );
}
