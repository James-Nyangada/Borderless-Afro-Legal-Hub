import os
import glob

OLD_TEXT = """          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
          </div>"""

NEW_TEXT = """          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Stay up to date with the latest news, announcements, and articles.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-base text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
            />
            <button 
              type="submit"
              className="w-full sm:w-auto rounded-lg bg-gold px-6 py-3 text-base font-medium text-navy hover:bg-[#b08e4f] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal transition-colors shadow-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>"""

def replace_cta_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    if OLD_TEXT in content:
        new_content = content.replace(OLD_TEXT, NEW_TEXT)
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        # Fallback if whitespace differs
        print(f"OLD_TEXT not found in {filepath} (exact match failed)")

for filepath in glob.glob('app/**/*.tsx', recursive=True):
    replace_cta_in_file(filepath)
