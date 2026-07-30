import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, ArrowRight, Hexagon, Zap } from "lucide-react";

export default function BlogHome() {
  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-cream selection:text-navy">
      {/* Navigation */}
      <header className="border-b border-gray-100">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-navy text-white">
                <Zap className="h-5 w-5 fill-current text-gold" />
              </div>
              <span className="text-xl font-bold text-navy">Untitled UI</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-navy/70">
            <Link href="/" className="text-navy">
              Home
            </Link>
            <button className="flex items-center gap-1 hover:text-navy transition-colors">
              Products <ChevronDown className="h-4 w-4" />
            </button>
            <Link href="/blogs" className="flex items-center gap-1 hover:text-navy transition-colors">
              Blog <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-navy transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-navy transition-colors">
              About us
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-base font-medium text-navy/70 hover:text-navy transition-colors"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="rounded-lg bg-navy px-4 py-2.5 text-base font-medium text-white hover:bg-navy-2 transition-colors"
            >
              Sign up
            </Link>
          </div>

          <button className="md:hidden text-navy/70 hover:text-navy transition-colors">
            <Menu className="h-6 w-6 text-gold" />
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="relative flex min-h-[500px] sm:min-h-[600px] w-full flex-col justify-end overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 text-white group cursor-pointer">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhKLj5OprSIDTEmYjlccmPyax1V89IfEYjeD4tA7yFtK1mIv6ROKyUSbWPDWJYyOl1Cww7CxSItODgHQD4_lyQgaef6o6vppZNZQIWM87HdCj8MiMfgOcQmuFCz2yx59g8iyTVpQtpdZE9tnaMA9FVOlQa1HR_a3Bw6kI04LP75CkWN1uQurwY77IjPiwz4ffsEscvtKWO_TkwymfnYkoWP04VBXqxyOEARX7sDDPwlZPTnbVYhTjT"
              alt="Hero background"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
            
            <div className="relative z-10 flex w-full max-w-3xl flex-col items-start gap-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Featured
              </span>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white">
                Breaking Into Product Design: <br />
                Advice from Untitled Founder, Frankie
              </h1>
              <p className="mt-2 max-w-2xl text-lg text-gray-200 sm:text-xl">
                Let's get one thing out of the way: you don't need a fancy
                Bachelor's Degree to get into Product Design. We sat down with
                Frankie Sullivan to talk about gatekeeping in product design and
                how anyone can get into this growing industry.
              </p>
            </div>

            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block z-10">
              <ArrowRight className="h-12 w-12 text-gold/70 transition-colors group-hover:text-gold" strokeWidth={1.5} />
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold text-navy">
            Recent blog posts
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="group flex flex-col items-start justify-between cursor-pointer"
              >
                <div className="w-full overflow-hidden rounded-2xl bg-cream relative aspect-[4/3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold leading-6 text-navy transition-colors group-hover:text-navy-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-navy/70 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-cream">
                       <Image
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-sm font-medium leading-6">
                      <span className="text-navy">{post.author.name}</span>
                      <span className="text-navy/50 font-normal mx-1">
                        •
                      </span>
                      <span className="text-navy/60 font-normal">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button className="rounded-lg bg-navy px-6 py-3 text-base font-medium text-white hover:bg-navy-2 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 transition-colors shadow-sm">
              Loading more...
            </button>
          </div>
        </section>
      </main>

      {/* CTA and Footer Section */}
      <div className="mt-20 bg-charcoal pt-20 rounded-t-[40px] px-4 sm:px-6 lg:px-8 text-white">
        <div className="mx-auto max-w-2xl text-center pb-20 border-b border-white/10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's get started on something great
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto rounded-lg border border-gold bg-transparent px-6 py-3 text-base font-medium text-gold hover:bg-gold/10 focus:outline-none focus:ring-2 focus:ring-gold transition-colors">
              Chat to us
            </button>
            <button className="w-full sm:w-auto rounded-lg bg-gold px-6 py-3 text-base font-medium text-navy hover:bg-[#b08e4f] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal transition-colors shadow-sm">
              Get started
            </button>
          </div>
        </div>

        <footer className="mx-auto max-w-7xl pb-12 pt-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:gap-12">
            <div>
              <h3 className="text-sm font-semibold text-white/50">Product</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Overview</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Features</Link></li>
                <li>
                  <Link href="#" className="group flex items-center gap-2 text-white/70 hover:text-gold transition-colors">
                    Solutions
                    <span className="rounded-full bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold border border-gold/20 group-hover:bg-gold/20 transition-colors">
                      New
                    </span>
                  </Link>
                </li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Tutorials</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Releases</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/50">Company</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="/about" className="text-white/70 hover:text-gold transition-colors">About us</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Press</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">News</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Media kit</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/50">Resources</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="/blogs" className="text-white/70 hover:text-gold transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Newsletter</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Events</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Help centre</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Tutorials</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/50">Use cases</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Startups</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Enterprise</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Government</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">SaaS centre</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Marketplaces</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Ecommerce</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/50">Social</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Twitter</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Facebook</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">GitHub</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">AngelList</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Dribbble</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/50">Legal</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Terms</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Privacy</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Cookies</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Licenses</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Settings</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gold text-navy">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="text-xl font-bold text-white">Untitled UI</span>
            </Link>
            <p className="text-sm text-white/50">
              © 2077 Untitled UI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

const posts = [
  {
    title: "Migrating to Linear 101",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEiA4lwMPpHdffSlgq658uiqw2FkYiFMAOeXgDbwKDjFCHxSW0J0AdLzrZStZ9ITw6KgEBsw24QMnUlPGlmaiKX3HMlXfB1R_kGqE7RKeTWSYUsTfhavBACkSdx2UwKcUaw4IuYLubmHeHyCfMzBadZSr3xXoTAvf9GRWPMPj9MCwlkm0p0bKACgV7y2URq9DxtsjWB_iN2fOxBMSsAEZTESLU0WCtPqjQS2PiqN_kppn06x9eMGsd",
    author: {
      name: "Jonathan Wills",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDb1_5WrdiEpyo-2lR6hb0dGxlkvX39QU1T4hp82xiY8D67H8TuTHcjo2BduxlJi_4BxpZpSqpYaHFwBLGVYVwmmjmvnZ2c0UsWVQ1GVURb5Jcm1CNuOhxGhZok2RiaI4-9409Y39SCZGo3Cb4Awvp-LS9UugIFpPc8d32V97tx2-IzC0D83xBLvskWKuJHoiwaUbDq_IwM6hsDx6DR8JAu3RJQPPLOTC0csGY-1xdJS6wDF-qyJYUR",
    },
    date: "19 Jan 2022",
  },
  {
    title: "Building your API Stack",
    excerpt:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCsOsqi4lILyEZk5yeySEGYCfibBL39r6EiLRLU7NVLq1ysvPx0pB6Ryb-xjZ3l0kb3cepgiqtRzDVQaL_YhnLxuFRg3YPGoXQJX2lXXa6mE0DbLt-DqkFw4ZFmNvbivSslmAUS7jZM5Igk496edxvO0HPQFuObhe_wBN1VPSsmCNIm0GMOTKIzsKDiBR69Md1uTINkNmqldffk9_z4RzhJ0JmZvo--UPg8UCWheiZE268ba2L0uY3",
    author: {
      name: "Lana Steiner",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA9z9MwP4TUIfSBDS61J5yEWiYfqWhjT2IQzxJ8ESrzT4j0beCe-zjRdcdsiGCDVxdHOHyEaGE0SOnCoyFRCFdgux-aFTiV65iW8048CFDuyAPJoevnYqbyyHFxRWtpCgusyxhzFCcB-47JS_9iAKG8UDS5ynNZUxWbTTbEcHZ21A9HKw10Ij7-yaB92l8Vqg41YJZp5XN3sDZ9o7DUsG5oy4Y1OU-I_qXJFarUOSq7ecHsm5xikSAs",
    },
    date: "18 Jan 2022",
  },
  {
    title: "Bill Walsh leadership lessons",
    excerpt:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwupKyhOReD7bj6b5Blz0wA1sqpLx1GqoDolW2XTGsJecl6Mh_wLTB1Y8lfoLZDUKRu3QHiBr16hl5PhPwnQlOxpdcNx5X8eb_C-59oP3YLLgxhA2skvCjuGT3zgK6EaZsvOHNkEpCVPLOfvVmqp91A7lCedyCosTh_BXuMBFQoJA6WQbYNq6_mE1CwgHFiTTh-mhdDTawA6rg1efihnCV3BMp8WF9qUgTyrzciGivU1S-Od0xcGBh",
    author: {
      name: "Eve Wilkins",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAX2g3Q__7ucX2JWHKDVPRderbIe7MzJzWMQSi_Mj-GwQIRIi-JhpDV9E9uc5QgWBBoaQL1V_JkerpWgqgNrNvX8T42QL0hzoC6qrVSISa7R4ix82PCoZIQ26W0LTETIwARDDoRZn8GFVELp21Qa1-KcBLgdRkdeD0NDWccrENeMsb1QyYCM0x8dNczpn1Y4c_SSZ1ba2rauxkq6JwbLM3Hb_poAxEzwD3hlY2S33fcs1d4yp17g_Fe",
    },
    date: "18 Jan 2022",
  },
  {
    title: "PM mental models",
    excerpt:
      "Mental models are simple expressions of complex processes or relationships.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpHuXyBzMYFv_Om5d5i8Hxv_tFU8xsl7A3odbM6r8fcDHClIRuHC1J4HX-xZkglJOV-V9RshpydsZzIRc4EoQBi1q1GXLqAkEE90lutlMnaN6l_qJ5IusXC-EtFT6k7DVW-Ck6sSweQ1voJPEXxK02iFtfJrdLpJAM12TfqpOq9XXTZ_vUwGh7UYze4dofCb7GPDz70n5DVNZzP94_PvoFbpbFsLBjUIiYg46OrVOhWAfQbYMPA3Cv",
    author: {
      name: "Eve Wilkins",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCwfG5lceh-PTn8Sqsg7Wms4Tu_bH84baPoyhsd14vcapsvKxf8TISJPM6Fu1mhpkcr4g5U7e51F_eY0jgE3YqOalrFvuKw8j8__gMUOgYKC9-UhuKIHGZTTVkz7k2z26MXUdGxqsPJVGfFHiJfzHzft5ifwBHBFzS90pk8lKnzoK5lH1pGdmaV7uk5tqy5Aw3fzsdQ5y1RhHC8FXzEieKFXFnLxsvdBmo6gRuUDklj1J_tQe0zF2As",
    },
    date: "18 Jan 2022",
  },
  {
    title: "What is Wireframing?",
    excerpt:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHNuEzfaRVhfeyDi3f-ijXi202JXWzQ-S1K6IObukPIBBNfhANVWNi8-g6gWlls3PvlCiWSRFdngwPm27aDflDInsqjC-cmnsETPoLx0DEep8su5XycNPNCqBMVJOp61EdXEGbBTW-tAuSVy5vrk51eglPLupa9gB9GgT4vp5Hw8BMDUHUvG0OtC_Ho2KlOF3NLkGWNP4jbV2MlbuvgtgwMWl5VsemNS4HCWUQiymDaWd-jswZSZcx",
    author: {
      name: "Lana Steiner",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAkmZtIsVZuPp_SOi_ofjW5O0PeWgIIvfx7GyaZ4w9nIRCE9Ss9I9chAHGRA_t8UxtM47VNVprDn87uzQIa6Bze6IIR-9W2iUff5-tyN4d7DsqSyEPFYhgPI4MsyZqVNeFGM1OJ92eZoaBl1t5FmjX_9JTKr_0xqit98wG-g8zInoBEy-u3xRB4JhwSHc3xeaCzlMY114efa7rPuw8S1wRjl3Y7fQp_aVmdTCbDiKxGv-JTq2Rfr2j2",
    },
    date: "18 Jan 2022",
  },
  {
    title: "How collaboration makes us better designers",
    excerpt:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-tZ7_ygVYU98la5s-Pl-Q4Urqpir8eOovx6KDyMj67Umne4apbRd5e73af6tukSgP_xp5b32ftdL4FRHfRcCDaIb4eBmyCMPpCjOIl1IxzQ4bvwnbE-qFGggxMUJNyaLM2tTQaMeivkB0K7F3AIluHnvqEPVXYTg1k--XkE9qsP0_0qvmAx-QVYNd7NlvHl8nE2ydk3z8FTmu7_wvelh_VJfecVgLF5KKipIOLRb8MPaLKENwz_BQ",
    author: {
      name: "Jonathan Wills",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDuvVO2Y5_SIy5pWEZdwDqYduDSFBFaRogxQn7RcXV0TQxQ8S2LVZdyMMY3J8NlZZvotKkO0_T0Ej1P0hRoMAvcsvVEJsr07KMRGvk-TrbYIZfXIT-di6VcCeWcZR9jllidCZWnxxuGft5vT2yIS7pSUCQHkZOmUKnqOQLuZhc6alC2fedfYukOEJDXZAcvviVgUJ-M4Lb45F_Hwr_xcbQfVGT3chUgjLpkzWQZwmRpLIS-7OD0_PwD",
    },
    date: "19 Jan 2022",
  },
  {
    title: "Our top 10 Javascript frameworks to use",
    excerpt:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKjQ9QxDVGAEDkZK8XL4OxjpzlXePIA3NDAq3L35YhNSG4U1U9ZTctEsJlnZsw3GX8NMdOmhFRU9Y3Bs4FjuJ0dexT78qcKG_K9lmxrS5e7HGkGDSfQboCpg9-2Tt9QiQAD6PlJU2qqA0VR8KCavofed_DJfgZ6LIlFP7hnhOnBFQuvmac5GufAKtFLIaf6GLSWdnwq3nTnV2eVUC5ycVUWlNaqg5jhekVhyag5628QBLNBjiNWTdG",
    author: {
      name: "Lana Steiner",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAW7KvJfhaeA0CUyAExZOs7mSTjtAyvIh9EPKEbqs8Z3lvW8Y9Rk-VLUkkySO7OFH2rh9LLr10uQr0WqC17wakoyCJDlkG5jDOZ6XaJC89iNABkQeg3MYE-jKZ4eHU2VbaKumQgM4pL586PzumZmDpmATZUoC4ZIIQ4xc3kKkqBycsDxjwLqwIF5qKl8TFCsFM88SwyKaUs-rm-6GG2pmErPmAs5pmrZTtbHKgn52oPiSPvryvacpSH",
    },
    date: "18 Jan 2022",
  },
  {
    title: "Podcast: Creating a better CX Community",
    excerpt:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMb83YQiaxUKgErWLlKdg2DP4QARNZpZEbsatIYu4VbPmgY3WAuTBdK5BJN54rTebbm9RppfaD6f3mI6ZTBX91YcX-6LzQM1znFL1-lSC2Ehpk38PZ5fJcQ64oKBWbLFU0UnnGodqG4jjHA7x2vQ4go4g9rkxgCFa2kcyDswAc4McYFA9l2xBoCjzsZaTtwYk8uT-Cw5hAC69Nc8RBZGhJvtbUm7tgB8LrhTkBdS1f3577TT8K9h9s",
    author: {
      name: "Jonathan Wills",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD9RHOe-ztDfaZUTIWMNAiO90pA4MnQn0ambUMTbNUaO1QcdvmlWoSXdY51oO5pQb-UFyW2wZ_Jje_H-TRgAlcCnx9ILXoRuqM1tbpk1-CPYled3nQ6Z_Y2I5Kmh1BAwvPXuCvd9C4W0JNIRF5unZKgFGOYTJg_NkQLCZW4-VciJmbKV1s-1d3ir2uoL1sEdTof7N8K6fNcTC_1JeUYfZ1z8vgBi83G8z16UqeOBEYJl7SD2gu419Ui",
    },
    date: "19 Jan 2022",
  },
];
