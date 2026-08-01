const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove <header>...</header>
      // We will use a regex to remove the <header> tag and its contents.
      const headerRegex = /<header[\s\S]*?<\/header>/;
      if (headerRegex.test(content)) {
        content = content.replace(headerRegex, '');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Removed header from ${fullPath}`);
      }
    }
  }
}

processDir(appDir);
