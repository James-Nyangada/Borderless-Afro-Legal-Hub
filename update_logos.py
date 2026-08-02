import os
import glob
import re

frontend_dir = "/home/james/Documents/DEVELOPMENT/Borderless-Afro-Legal-Hub"
admin_dir = "/home/james/Documents/DEVELOPMENT/Borderless Afro Legal hub-admin"

frontend_files = glob.glob(os.path.join(frontend_dir, "app", "**", "page.tsx"), recursive=True)
frontend_files.append(os.path.join(frontend_dir, "components", "Footer.tsx"))
admin_files = glob.glob(os.path.join(admin_dir, "app", "**", "page.tsx"), recursive=True)
admin_files.append(os.path.join(admin_dir, "components", "layout", "AdminSidebar.tsx"))

all_files = frontend_files + admin_files

for filepath in all_files:
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r') as f:
        content = f.read()
        
    print(f"Modifying {filepath}")
    
    # regex to replace the logo and remove text
    # Current format:
    # <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full object-cover" />
    # <span className="[^"]*">Africa Diaspora Legal Hub</span>
    
    # We want to change width={40} to width={80}, height={40} to height={80}, 
    # remove rounded-full object-cover and make it just a plain image (or keep rounded if it looks better, let's keep rounded-full but make it 80x80)
    # and remove the span entirely.
    
    # Match the entire Link content if possible, but let's just match Image and span
    pattern1 = r'<Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full object-cover" />\s*<span className="[^"]*">Africa Diaspora Legal Hub</span>'
    replacement1 = r'<Image src="/logo.jpg" alt="Africa Diaspora Legal Hub Logo" width={80} height={80} className="object-contain hover:scale-105 transition-transform" />'
    content = re.sub(pattern1, replacement1, content)
    
    # Also for Admin Sidebar which has width 32
    pattern2 = r'<Image src="/logo.jpg" alt="Logo" width={32} height={32} className="rounded-full object-cover" />\s*<span className="[^"]*">Admin Dashboard</span>'
    replacement2 = r'<Image src="/logo.jpg" alt="Admin Logo" width={64} height={64} className="object-contain hover:scale-105 transition-transform mx-auto mb-2" />'
    content = re.sub(pattern2, replacement2, content)

    # For admin login, it has width 64, let's make it 100
    pattern3 = r'<Image src="/logo.jpg" alt="Logo" width={64} height={64} className="rounded-full mx-auto mb-6 object-cover" />'
    replacement3 = r'<Image src="/logo.jpg" alt="Admin Logo" width={100} height={100} className="mx-auto mb-6 object-contain" />'
    content = re.sub(pattern3, replacement3, content)

    with open(filepath, 'w') as f:
        f.write(content)
