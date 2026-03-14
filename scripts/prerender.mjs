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

// Routes to pre-render with SEO meta data, breadcrumbs and schemas
const routesMeta = [
  {
    path: '/',
    title: 'Polar Labs – KI-Werkzeuge für Produktivität & Kartenvisualisierung',
    description: 'Polar Labs entwickelt KI-gestützte Tools: mapMind für intelligente Kartenvisualisierung und Pocket Assistant – dein persönlicher KI-Produktivitäts-Agent. Made in Germany.',
    canonical: 'https://polarlabs.de/',
    breadcrumbs: [
      { name: 'Home', url: 'https://polarlabs.de/' }
    ],
    pageSchema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Polar Labs',
      'url': 'https://polarlabs.de',
      'inLanguage': ['de', 'en'],
      'publisher': {
        '@type': 'Organization',
        'name': 'Polar Labs'
      }
    }
  },
  {
    path: '/mapmind',
    title: 'mapMind – KI-gestützte Kartenvisualisierung | Polar Labs',
    description: 'mapMind: ChatGPT meets Google Maps. Stelle Fragen in natürlicher Sprache und erhalte personalisierte, interaktive Karten mit relevanten Informationen.',
    canonical: 'https://polarlabs.de/mapmind',
    breadcrumbs: [
      { name: 'Home', url: 'https://polarlabs.de/' },
      { name: 'Produkte', url: 'https://polarlabs.de/#products' },
      { name: 'mapMind', url: 'https://polarlabs.de/mapmind' }
    ],
    pageSchema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'mapMind',
      'applicationCategory': 'UtilitiesApplication',
      'operatingSystem': 'Web',
      'description': 'KI-gestützte Kartenvisualisierung - ChatGPT meets Google Maps. Stelle Fragen in natürlicher Sprache und erhalte personalisierte, interaktive Karten.',
      'url': 'https://polarlabs.de/mapmind',
      'author': {
        '@type': 'Organization',
        'name': 'Polar Labs',
        'url': 'https://polarlabs.de'
      },
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'EUR',
        'availability': 'https://schema.org/ComingSoon'
      },
      'featureList': [
        'Natürliche Sprachverarbeitung',
        'Interaktive Kartenvisualisierung',
        'Personalisierte Empfehlungen',
        'KI-gestützte Ortssuche'
      ],
      'inLanguage': ['de', 'en']
    }
  },
  {
    path: '/pocket-assistant',
    title: 'Pocket Assistant – KI-Produktivitäts-Agent mit PARA-Methode | Polar Labs',
    description: 'Dein KI-gestützter Produktivitäts-Assistent. Automatisiere deinen Alltag mit Email-Integration, Kalender-Sync, Web-Recherche und der PARA-Methode.',
    canonical: 'https://polarlabs.de/pocket-assistant',
    breadcrumbs: [
      { name: 'Home', url: 'https://polarlabs.de/' },
      { name: 'Produkte', url: 'https://polarlabs.de/#products' },
      { name: 'Pocket Assistant', url: 'https://polarlabs.de/pocket-assistant' }
    ],
    pageSchema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Pocket Assistant',
      'applicationCategory': 'ProductivityApplication',
      'operatingSystem': 'Web',
      'description': 'KI-gestützter Produktivitäts-Assistent mit PARA-Methode. Automatisiere deinen Alltag mit Email-Integration, Kalender-Sync und Web-Recherche.',
      'url': 'https://polarlabs.de/pocket-assistant',
      'author': {
        '@type': 'Organization',
        'name': 'Polar Labs',
        'url': 'https://polarlabs.de'
      },
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'EUR',
        'availability': 'https://schema.org/ComingSoon'
      },
      'featureList': [
        'PARA-Methode Integration',
        'Email-Integration',
        'Kalender-Synchronisation',
        'Web-Recherche',
        'KI-gestützte Automatisierung',
        'Second Brain Funktionalität'
      ],
      'inLanguage': ['de', 'en']
    }
  },
  {
    path: '/contact',
    title: 'Kontakt | Polar Labs',
    description: 'Kontaktieren Sie Polar Labs für Anfragen zu unseren KI-Tools mapMind und Pocket Assistant oder für Zusammenarbeit.',
    canonical: 'https://polarlabs.de/contact',
    breadcrumbs: [
      { name: 'Home', url: 'https://polarlabs.de/' },
      { name: 'Kontakt', url: 'https://polarlabs.de/contact' }
    ],
    pageSchema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Kontakt - Polar Labs',
      'url': 'https://polarlabs.de/contact',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'Polar Labs',
        'url': 'https://polarlabs.de'
      }
    }
  },
  {
    path: '/impressum',
    title: 'Impressum | Polar Labs',
    description: 'Rechtliche Angaben und Impressum von Polar Labs, Daniel Sauer, Kiel. Angaben gemäß § 5 TMG.',
    canonical: 'https://polarlabs.de/impressum',
    breadcrumbs: [
      { name: 'Home', url: 'https://polarlabs.de/' },
      { name: 'Impressum', url: 'https://polarlabs.de/impressum' }
    ],
    pageSchema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Impressum - Polar Labs',
      'url': 'https://polarlabs.de/impressum'
    }
  },
  {
    path: '/datenschutz',
    title: 'Datenschutzerklärung | Polar Labs',
    description: 'Datenschutzerklärung von Polar Labs. Informationen zur Datenverarbeitung, Hosting und Ihren Rechten nach DSGVO.',
    canonical: 'https://polarlabs.de/datenschutz',
    breadcrumbs: [
      { name: 'Home', url: 'https://polarlabs.de/' },
      { name: 'Datenschutz', url: 'https://polarlabs.de/datenschutz' }
    ],
    pageSchema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Datenschutzerklärung - Polar Labs',
      'url': 'https://polarlabs.de/datenschutz'
    }
  },
  {
    path: '/agb',
    title: 'Allgemeine Geschäftsbedingungen (AGB) | Polar Labs',
    description: 'AGB von Polar Labs für digitale Dienste und Produkte. Geltungsbereich, Vertragsschluss, Preise und Haftung.',
    canonical: 'https://polarlabs.de/agb',
    breadcrumbs: [
      { name: 'Home', url: 'https://polarlabs.de/' },
      { name: 'AGB', url: 'https://polarlabs.de/agb' }
    ],
    pageSchema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'AGB - Polar Labs',
      'url': 'https://polarlabs.de/agb'
    }
  },
  {
    path: '/widerruf',
    title: 'Widerrufsbelehrung | Polar Labs',
    description: 'Widerrufsbelehrung und Muster-Widerrufsformular für Verträge mit Polar Labs. 14 Tage Widerrufsrecht.',
    canonical: 'https://polarlabs.de/widerruf',
    breadcrumbs: [
      { name: 'Home', url: 'https://polarlabs.de/' },
      { name: 'Widerruf', url: 'https://polarlabs.de/widerruf' }
    ],
    pageSchema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Widerrufsbelehrung - Polar Labs',
      'url': 'https://polarlabs.de/widerruf'
    }
  }
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
  console.log('Starting pre-rendering with SEO meta injection...\n');

  const port = 3000;
  const server = await createStaticServer(distDir, port);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const route of routesMeta) {
      console.log(`Pre-rendering: ${route.path}`);

      const page = await browser.newPage();
      await page.goto(`http://localhost:${port}${route.path}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Wait for the app to render
      await page.waitForSelector('#app', { timeout: 10000 });

      // Give JS a moment to fully initialize
      await new Promise(resolve => setTimeout(resolve, 500));

      // Inject SEO meta tags, breadcrumbs and schemas for this specific route
      await page.evaluate((meta) => {
        // Update title
        document.title = meta.title;

        // Update description
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) descMeta.setAttribute('content', meta.description);

        // Update canonical
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute('href', meta.canonical);

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', meta.title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', meta.description);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', meta.canonical);

        // Update Twitter Card tags
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle) twTitle.setAttribute('content', meta.title);

        const twDesc = document.querySelector('meta[name="twitter:description"]');
        if (twDesc) twDesc.setAttribute('content', meta.description);

        const twUrl = document.querySelector('meta[name="twitter:url"]');
        if (twUrl) twUrl.setAttribute('content', meta.canonical);

        // Update BreadcrumbList Schema
        const breadcrumbSchema = document.getElementById('breadcrumb-schema');
        if (breadcrumbSchema && meta.breadcrumbs) {
          const breadcrumbData = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': meta.breadcrumbs.map((item, index) => ({
              '@type': 'ListItem',
              'position': index + 1,
              'name': item.name,
              'item': item.url
            }))
          };
          breadcrumbSchema.textContent = JSON.stringify(breadcrumbData);
        }

        // Update Page-specific Schema
        const pageSchema = document.getElementById('page-schema');
        if (pageSchema && meta.pageSchema) {
          pageSchema.textContent = JSON.stringify(meta.pageSchema);
        }
      }, route);

      console.log(`  -> Injected meta: "${route.title.substring(0, 50)}..."`);
      console.log(`  -> Injected breadcrumbs: ${route.breadcrumbs.map(b => b.name).join(' > ')}`);
      console.log(`  -> Injected schema: ${route.pageSchema['@type']}`);

      // Get the rendered HTML with injected meta tags
      const html = await page.content();

      // Determine output path
      const outputPath = route.path === '/'
        ? join(distDir, 'index.html')
        : join(distDir, route.path.slice(1), 'index.html');

      // Create directory if needed
      const outputDir = dirname(outputPath);
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      // Write the pre-rendered HTML
      writeFileSync(outputPath, html);
      console.log(`  -> Saved to: ${outputPath}\n`);

      await page.close();
    }

    console.log('Pre-rendering complete with full SEO optimization!');
    console.log('  - Meta tags injected per page');
    console.log('  - BreadcrumbList schemas injected');
    console.log('  - SoftwareApplication schemas for products');
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
