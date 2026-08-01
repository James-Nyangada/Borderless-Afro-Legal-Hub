import glob

OLD_TEXT = """            <Link
              href="#"
              className="rounded-lg bg-navy px-4 py-2.5 text-base font-medium text-white hover:bg-navy-2 transition-colors"
            >
              Sign up
            </Link>"""

NEW_TEXT = """            {/* <Link
              href="#"
              className="rounded-lg bg-navy px-4 py-2.5 text-base font-medium text-white hover:bg-navy-2 transition-colors"
            >
              Sign up
            </Link> */}"""

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    if OLD_TEXT in content:
        new_content = content.replace(OLD_TEXT, NEW_TEXT)
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        # Fallback if whitespace differs slightly
        # Try a more resilient approach if needed, but exact match usually works here
        print(f"Not found exactly in {filepath}")

for filepath in glob.glob('app/**/*.tsx', recursive=True):
    replace_in_file(filepath)
