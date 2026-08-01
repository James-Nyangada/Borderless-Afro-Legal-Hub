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
    
    if "Zap" not in content:
        continue
        
    print(f"Modifying {filepath}")
    
    if "import Image from" not in content:
        # insert after first import
        content = re.sub(r'(import .*?\n)', r'\1import Image from "next/image";\n', content, count=1)
    
    # regex to replace the Zap block.
    
    # Case 1: Logo in headers with Untitled UI
    content = re.sub(
        r'<div className="[^"]*">\s*<Zap className="[^"]*" />\s*</div>\s*<span className="([^"]*)">Untitled UI</span>',
        r'<Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full object-cover" />\n              <span className="\1">Africa Diaspora Legal Hub</span>',
        content
    )
    
    # Case 2: Zap alone in admin login page
    content = re.sub(
        r'<Zap className="h-8 w-8 fill-current text-gold" />',
        r'<Image src="/logo.jpg" alt="Logo" width={64} height={64} className="rounded-full mx-auto mb-6 object-cover" />',
        content
    )

    # Case 3: Admin Sidebar and Admin headers
    content = re.sub(
        r'<div className="[^"]*">\s*<Zap className="[^"]*" />\s*</div>\s*<span className="([^"]*)">Admin UI</span>',
        r'<Image src="/logo.jpg" alt="Logo" width={32} height={32} className="rounded-full object-cover" />\n          <span className="\1">Admin Dashboard</span>',
        content
    )
    
    # Remove Zap from imports if it's unused
    # Actually, it's safer to leave the Zap import than to try and write a complex regex to remove it, but let's try a simple one:
    # content = re.sub(r',\s*Zap\s*,', ',', content)
    # content = re.sub(r'{\s*Zap\s*,\s*', '{ ', content)
    # content = re.sub(r',\s*Zap\s*}', ' }', content)
    
    with open(filepath, 'w') as f:
        f.write(content)
