import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Zap, Mail, MapPin, Phone, Plus, Globe } from "lucide-react";
import Footer from "@/components/Footer";
import { fetchAPI } from '@/lib/api';
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - Untitled UI",
  description: "Get in touch with the Untitled UI team.",
};

export default async function ContactPage() {
  let contactData: any = null;
  let faqData: any = null;
  
  try {
    // Revalidate every request to immediately reflect admin changes
    const [resContact, resFaq] = await Promise.all([
      fetchAPI('/pages/contact', { cache: 'no-store' }),
      fetchAPI('/pages/faq', { cache: 'no-store' })
    ]);
    contactData = resContact.data?.page?.content || {};
    faqData = resFaq.data?.page?.content || {};
  } catch (err) {
    console.error("Failed to fetch page data", err);
  }

  const email = contactData?.email || "hello@modernminimal.com";
  const phone = contactData?.phone || "+1 (555) 000-0000";
  const socialLinks = contactData?.socialLinks || [];
  const faqs = (faqData?.faqs || []).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-cream selection:text-navy">
      {/* Navigation */}
      

      <main className="pb-24 bg-[#f9fafb]">
        {/* Header Section */}
        <section className="px-4 py-20 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101828] mb-6 tracking-tight">
            Get in touch
          </h1>
          <p className="text-xl text-[#475467] leading-relaxed max-w-2xl mx-auto">
            We'd love to hear from you. Please fill out this form or use our contact details below.
          </p>
        </section>

        {/* Contact Content */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Form */}
            <ContactForm />

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                {/* Email Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="w-10 h-10 bg-[#f4ebff] text-[#7f56d9] rounded-full flex items-center justify-center mb-6">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#101828] mb-2">Email us</h3>
                  <p className="text-[#475467] text-sm mb-4 flex-1">Our friendly team is here to help.</p>
                  <a href={`mailto:${email}`} className="text-[#7f56d9] font-medium text-sm hover:underline">{email}</a>
                </div>

                {/* Phone Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="w-10 h-10 bg-[#f4ebff] text-[#7f56d9] rounded-full flex items-center justify-center mb-6">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#101828] mb-2">Phone</h3>
                  <p className="text-[#475467] text-sm mb-4 flex-1">Mon-Fri from 8am to 5pm.</p>
                  <a href={`tel:${phone}`} className="text-[#7f56d9] font-medium text-sm hover:underline">{phone}</a>
                </div>

                {/* Social Links Card (if any) */}
                {socialLinks.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                    <div className="w-10 h-10 bg-[#f4ebff] text-[#7f56d9] rounded-full flex items-center justify-center mb-6">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#101828] mb-2">Social</h3>
                    <p className="text-[#475467] text-sm mb-4 flex-1">Connect with us on social media.</p>
                    <div className="flex flex-col gap-2">
                      {socialLinks.map((link: any, index: number) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#7f56d9] font-medium text-sm hover:underline flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-[#7f56d9]"></span>
                           {link.platform}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto pt-16">
          <h2 className="text-3xl font-bold text-center text-[#101828] mb-12">Frequently asked questions</h2>
          
          <div className="space-y-4">
            {faqs.length > 0 ? (
              faqs.map((faq: any, index: number) => (
                <details key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
                  <summary className="p-6 flex justify-between items-center cursor-pointer list-none hover:border-gray-200 transition-colors">
                    <h3 className="text-[#101828] text-lg font-medium pr-4">{faq.question}</h3>
                    <Plus className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-45 transition-transform duration-200" />
                  </summary>
                  <div className="px-6 pb-6 text-[#475467]">
                    {faq.answer}
                  </div>
                </details>
              ))
            ) : (
              <div className="text-center py-8 text-[#475467]">
                No FAQs available at the moment.
              </div>
            )}
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/faqs" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-[#344054] bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7f56d9] focus:ring-offset-2">
              See more
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

