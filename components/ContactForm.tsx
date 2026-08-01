"use client";

import { useState } from "react";
import { fetchAPI } from "@/lib/api";
import { toast } from "react-hot-toast";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      toast.error("Please agree to the privacy policy.");
      return;
    }

    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const name = `${formData.firstName} ${formData.lastName}`.trim();
      
      await fetchAPI("/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      toast.success("Message sent successfully!");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
      setAgreed(false);
    } catch (err: any) {
      toast.error(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#344054]">First name</label>
            <input 
              type="text" 
              name="firstName"
              placeholder="Jane" 
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:border-transparent transition-shadow text-[#101828]" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#344054]">Last name</label>
            <input 
              type="text" 
              name="lastName"
              placeholder="Doe" 
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:border-transparent transition-shadow text-[#101828]" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#344054]">Email</label>
          <input 
            type="email" 
            name="email"
            placeholder="you@company.com" 
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:border-transparent transition-shadow text-[#101828]" 
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#344054]">Subject</label>
          <div className="relative">
            <select 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:border-transparent transition-shadow text-[#101828] appearance-none bg-white"
            >
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Sales</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#344054]">Message</label>
          <textarea 
            name="message"
            placeholder="Leave us a message..." 
            rows={4} 
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:border-transparent transition-shadow text-[#101828] resize-none"
          ></textarea>
        </div>

        <div className="flex items-center gap-3">
          <input 
            type="checkbox" 
            id="privacy" 
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-[#7f56d9] focus:ring-[#7f56d9]" 
          />
          <label htmlFor="privacy" className="text-sm text-[#475467]">
            You agree to our friendly <Link href="#" className="text-[#7f56d9] hover:underline">privacy policy</Link>.
          </label>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-3 px-4 rounded-lg bg-[#7f56d9] hover:bg-[#6941c6] text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
}
