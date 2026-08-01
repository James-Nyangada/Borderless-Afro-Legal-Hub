import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, ArrowRight, Hexagon, Zap } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import LandingHero from "@/components/LandingHero";

async function getPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}/posts`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.data.posts.slice(0, 12);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null;
  }
}

export default async function BlogHome() {
  const fetchedPosts = await getPosts();
  const displayPosts = fetchedPosts || posts.slice(0, 12);

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

                                        <nav className="hidden lg:flex items-center gap-6 text-base font-medium text-[#475467]">
            <Link href="/" className="hover:text-[#101828] transition-colors">Home</Link>
            <Link href="/categories" className="hover:text-[#101828] transition-colors">Categories</Link>
            <Link href="/media" className="hover:text-[#101828] transition-colors">Media & Gallery</Link>
            <Link href="/blogs" className="hover:text-[#101828] transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-[#101828] transition-colors">About us</Link>
            <Link href="/contact" className="hover:text-[#101828] transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3001'} className="text-base font-medium text-navy/70 hover:text-navy transition-colors">Log in</a>
            {/* <Link
              href="#"
              className="rounded-lg bg-navy px-4 py-2.5 text-base font-medium text-white hover:bg-navy-2 transition-colors"
            >
              Sign up
            </Link> */}
          </div>

          <button className="lg:hidden text-navy/70 hover:text-navy transition-colors">
            <Menu className="h-6 w-6 text-gold" />
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <LandingHero />

        {/* Recent Posts Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold text-navy">
            Recent blog posts
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post: any, idx: number) => (
              <BlogCard key={idx} post={post} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button className="rounded-lg bg-navy px-6 py-3 text-base font-medium text-white hover:bg-navy-2 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 transition-colors shadow-sm">
              Load More...
            </button>
          </div>
        </section>
      </main>

      <Footer />
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
