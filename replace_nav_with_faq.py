import os
import glob

NAV_REPLACEMENT = """          <nav className="hidden lg:flex items-center gap-6 text-base font-medium text-[#475467]">
            <Link href="/" className="hover:text-[#101828] transition-colors">Home</Link>
            <Link href="/services" className="hover:text-[#101828] transition-colors">Services</Link>
            <Link href="/faqs" className="hover:text-[#101828] transition-colors">FAQs</Link>
            <Link href="/media" className="hover:text-[#101828] transition-colors">Media</Link>
            <Link href="/gallery" className="hover:text-[#101828] transition-colors">Gallery</Link>
            <Link href="/blogs" className="hover:text-[#101828] transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-[#101828] transition-colors">About us</Link>
            <Link href="/contact" className="hover:text-[#101828] transition-colors">Contact</Link>
          </nav>"""

def replace_nav_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    start_idx = content.find('<nav className="hidden lg:flex items-center')
    if start_idx == -1:
        return
        
    end_idx = content.find('</nav>', start_idx) + 6
    if end_idx == -1 + 6:
        return
        
    new_content = content[:start_idx] + NAV_REPLACEMENT + content[end_idx:]
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    print(f"Updated {filepath}")

for filepath in glob.glob('app/**/*.tsx', recursive=True):
    replace_nav_in_file(filepath)

