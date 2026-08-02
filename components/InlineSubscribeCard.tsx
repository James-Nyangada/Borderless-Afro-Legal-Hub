"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function InlineSubscribeCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1"}/subscribers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Thanks for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8 rounded-2xl bg-gold/10 border border-gold/20 text-center relative overflow-hidden min-h-[400px]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
      
      <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center mb-6">
        <Mail className="h-6 w-6 text-gold-dark" />
      </div>
      
      <h3 className="text-2xl font-bold text-navy mb-3">
        Join our Newsletter
      </h3>
      <p className="text-sm text-navy/70 mb-8 max-w-sm">
        Get premium regulatory insights and cross-border analysis delivered directly to your inbox.
      </p>

      {status === "success" ? (
        <div className="flex flex-col items-center gap-2 text-green-700 bg-green-50 p-4 rounded-xl border border-green-200">
          <CheckCircle2 className="h-6 w-6" />
          <p className="font-medium text-sm">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent disabled:opacity-70 transition-all placeholder:text-navy/40 text-center"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-white hover:bg-navy-2 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 disabled:opacity-70 transition-all shadow-sm flex items-center justify-center"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe Now"}
          </button>
          
          {status === "error" && (
            <p className="text-red-500 text-xs mt-2">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}
