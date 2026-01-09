import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '..', 'dist');

// Routes to pre-render
const routes = [
  '/',
  '/mapmind',
  '/pocket-assistant',
  '/contact',
  '/impressum',
  '/datenschutz'
];

// MIME types for static file serving
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

// Simple static file server
function createStaticServer(dir, port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(dir, req.url === '/' ? 'index.html' : req.url);

      // Handle SPA routing - serve index.html for routes
      if (!existsSync(filePath) || !extname(filePath)) {
        filePath = join(dir, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = extname(filePath);
        const contentType = mimeTypes[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch (err) {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(port, () => {
      console.log(`Static server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting pre-rendering...\n');

  const port = 3000;
  const server = await createStaticServer(distDir, port);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const route of routes) {
      console.log(`Pre-rendering: ${route}`);

      const page = await browser.newPage();
      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Wait for the app to render
      await page.waitForSelector('#app', { timeout: 10000 });

      // Give JS a moment to fully initialize
      await new Promise(resolve => setTimeout(resolve, 500));

      // Get the rendered HTML
      const html = await page.content();

      // Determine output path
      const outputPath = route === '/'
        ? join(distDir, 'index.html')
        : join(distDir, route.slice(1), 'index.html');

      // Create directory if needed
      const outputDir = dirname(outputPath);
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      // Write the pre-rendered HTML
      writeFileSync(outputPath, html);
      console.log(`  -> Saved to: ${outputPath}`);

      await page.close();
    }

    console.log('\nPre-rendering complete!');
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
