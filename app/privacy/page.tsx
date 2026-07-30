import Link from "next/link";
import { Zap } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - Untitled UI",
  description: "Privacy Policy for Untitled UI",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#101828] font-sans selection:bg-[#f4ebff] selection:text-[#7f56d9] flex flex-col">
      {/* Navigation */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#f4ebff] text-[#7f56d9]">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="text-xl font-bold text-[#101828]">Untitled UI</span>
            </Link>
          </div>
          
          <Link href="/" className="text-sm font-medium text-[#475467] hover:text-[#101828] transition-colors">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 pb-12 border-b border-gray-100">
           <div className="max-w-3xl">
             <div className="text-sm font-semibold text-[#7f56d9] mb-3">Legal</div>
             <h1 className="text-4xl sm:text-5xl font-bold text-[#101828] mb-6 tracking-tight">
               Privacy Policy
             </h1>
             <p className="text-lg text-[#475467] leading-relaxed">
               Your privacy is important to us. This privacy policy explains what personal data we collect from you and how we use it. Last updated on October 24, 2024.
             </p>
           </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 flex flex-col md:flex-row gap-12">
           {/* Sidebar */}
           <div className="w-full md:w-64 shrink-0 space-y-4 md:sticky md:top-8 h-fit">
             <h3 className="text-xs font-bold text-[#101828] tracking-wider uppercase mb-4">Contents</h3>
             <ul className="space-y-3 text-sm font-medium text-[#475467]">
               <li><a href="#introduction" className="hover:text-[#101828]">Introduction</a></li>
               <li><a href="#data-collection" className="hover:text-[#101828]">Data Collection</a></li>
               <li><a href="#how-we-use-your-data" className="hover:text-[#101828]">How We Use Your Data</a></li>
               <li><a href="#data-sharing" className="hover:text-[#101828]">Data Sharing</a></li>
               <li><a href="#your-rights" className="text-[#7f56d9]">Your Rights</a></li>
               <li><a href="#contact-us" className="hover:text-[#101828]">Contact Us</a></li>
             </ul>
           </div>

           {/* Prose Content */}
           <div className="flex-1 max-w-3xl">
             <div id="introduction" className="mb-12">
               <h2 className="text-3xl font-bold text-[#101828] mb-4">Introduction</h2>
               <p className="text-[#475467] leading-relaxed mb-4">Welcome to Untitled UI. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.</p>
               <p className="text-[#475467] leading-relaxed mb-4">When you visit our website and use any of our services, we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.</p>
             </div>

             <div id="data-collection" className="mb-12">
               <h2 className="text-3xl font-bold text-[#101828] mb-4">Data Collection</h2>
               <p className="text-[#475467] leading-relaxed mb-4">We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.</p>
               <p className="text-[#475467] leading-relaxed mb-4">The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
               <ul className="list-disc pl-5 space-y-2 mt-4 text-[#475467] leading-relaxed">
                 <li><strong className="text-[#101828]">Personal Information Provided by You:</strong> We collect names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; data collected from surveys; passwords; contact or authentication data; billing addresses; debit/credit card numbers; and other similar information.</li>
                 <li><strong className="text-[#101828]">Payment Data:</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument.</li>
                 <li><strong className="text-[#101828]">Social Media Login Data:</strong> We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account.</li>
               </ul>
             </div>

             <div id="how-we-use-your-data" className="mb-12">
               <h2 className="text-3xl font-bold text-[#101828] mb-4">How We Use Your Data</h2>
               <p className="text-[#475467] leading-relaxed mb-4">We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
               
               <div className="bg-[#f9fafb] rounded-xl p-6 mt-6 border border-gray-100">
                 <h4 className="text-sm font-semibold text-[#101828] mb-3">Key Purposes:</h4>
                 <ul className="list-disc pl-5 space-y-2 text-[#475467] text-sm">
                   <li>To facilitate account creation and logon process.</li>
                   <li>To post testimonials.</li>
                   <li>Request feedback.</li>
                   <li>To protect our services (fraud monitoring).</li>
                   <li>To manage user accounts.</li>
                   <li>To deliver services to the user.</li>
                 </ul>
               </div>
             </div>

             <div id="data-sharing" className="mb-12">
               <h2 className="text-3xl font-bold text-[#101828] mb-4">Data Sharing</h2>
               <p className="text-[#475467] leading-relaxed mb-4">We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:</p>
               <ul className="list-disc pl-5 space-y-2 mt-4 text-[#475467] leading-relaxed">
                 <li><strong className="text-[#101828]">Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                 <li><strong className="text-[#101828]">Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                 <li><strong className="text-[#101828]">Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
               </ul>
             </div>

             <div id="your-rights" className="mb-12">
               <h2 className="text-3xl font-bold text-[#101828] mb-4">Your Rights</h2>
               <p className="text-[#475467] leading-relaxed mb-4">In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.</p>
               <p className="text-[#475467] leading-relaxed mb-4">If you would like to exercise any of these rights, please contact us using the details provided below. We will consider and act upon any request in accordance with applicable data protection laws.</p>
             </div>

             <div id="contact-us" className="mb-12">
               <h2 className="text-3xl font-bold text-[#101828] mb-4">Contact Us</h2>
               <p className="text-[#475467] leading-relaxed mb-4">If you have questions or comments about this notice, you may email us at privacy@untitled-ui.com or by post to:</p>
               <div className="bg-[#f9fafb] rounded-xl p-6 mt-6 border border-gray-100 text-[#475467] text-sm leading-relaxed inline-block">
                 <strong className="text-[#101828]">Untitled UI</strong><br />
                 123 Design Street<br />
                 Creative City, ST 12345<br />
                 United States
               </div>
             </div>
           </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-[#101828] font-bold text-lg">
             Untitled UI
           </div>
           <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-[#475467]">
              <div className="flex items-center gap-6">
                <Link href="#" className="hover:text-[#101828]">Terms</Link>
                <Link href="/privacy" className="text-[#101828] font-medium">Privacy</Link>
                <Link href="#" className="hover:text-[#101828]">Cookies</Link>
                <Link href="/contact" className="hover:text-[#101828]">Contact</Link>
              </div>
              <span className="text-[#475467] hidden md:inline-block">© 2024 Untitled UI. All rights reserved.</span>
           </div>
           <span className="text-[#475467] text-sm md:hidden">© 2024 Untitled UI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
