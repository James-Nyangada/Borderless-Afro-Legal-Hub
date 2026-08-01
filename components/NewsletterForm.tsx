"use client";

import { useState } from "react";
import { fetchAPI } from "@/lib/api";
import { toast } from "react-hot-toast";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      await fetchAPI("/subscribers", {
        method: "POST",
        body: JSON.stringify({ email, source: "footer" }),
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
    <div className="mt-8 max-w-md mx-auto w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-base text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto rounded-lg bg-gold px-6 py-3 text-base font-medium text-navy hover:bg-[#b08e4f] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal transition-colors shadow-sm whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
