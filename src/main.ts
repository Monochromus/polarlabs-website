import './styles/base.css';
import { createNavigation, navigationStyles } from './components/Navigation';
import { createFooter, footerStyles } from './components/Footer';
import { renderHomePage, initHomePage, homeStyles } from './pages/Home';
import { renderMapMindPage, initMapMindPage, mapMindStyles } from './pages/MapMind';
import { renderSecondBrainPage, initSecondBrainPage, secondBrainStyles } from './pages/SecondBrain';
import { renderContactPage, initContactPage, contactStyles } from './pages/Contact';
import { renderImpressumPage, initImpressumPage, impressumStyles } from './pages/Impressum';
import { renderDatenschutzPage, initDatenschutzPage, datenschutzStyles } from './pages/Datenschutz';
import { router } from './utils/router';
import { i18n } from './utils/translations';

// Inject component styles
const styles = document.createElement('style');
styles.textContent = `
  ${navigationStyles}
  ${footerStyles}
  ${homeStyles}
  ${mapMindStyles}
  ${secondBrainStyles}
  ${contactStyles}
  ${impressumStyles}
  ${datenschutzStyles}
`;
document.head.appendChild(styles);

// Initialize app
function initApp(): void {
  const app = document.getElementById('app');
  if (!app) return;

  // Create skip link for accessibility
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, app);

  // Create navigation
  const nav = createNavigation();
  app.appendChild(nav);

  // Create main content area
  const main = document.createElement('main');
  main.id = 'main-content';
  main.setAttribute('role', 'main');
  app.appendChild(main);

  // Create footer
  const footer = createFooter();
  app.appendChild(footer);

  // Define route handlers
  router.register('/', () => {
    main.innerHTML = renderHomePage();
    initHomePage();
    updatePageMeta({
      title: 'Polar Labs',
      description: 'Werkzeuge die Klarheit schaffen. Entdecke mapMind und Pocket Assistant.',
      path: '/',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'Polar Labs',
        'url': 'https://polarlabs.de'
      }
    });
  });

  router.register('/mapmind', () => {
    main.innerHTML = renderMapMindPage();
    initMapMindPage();
    updatePageMeta({
      title: 'mapMind | Polar Labs',
      description: 'KI-gestützte Karten für personalisierte Entdeckungen. Visualisiere komplexe Zusammenhänge.',
      path: '/mapmind',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'mapMind',
        'applicationCategory': 'ProductivityApplication',
        'operatingSystem': 'Web',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'EUR'
        }
      }
    });
  });

  router.register('/pocket-assistant', () => {
    main.innerHTML = renderSecondBrainPage();
    initSecondBrainPage();
    updatePageMeta({
      title: 'Pocket Assistant | Polar Labs',
      description: 'Dein KI-gestützter Produktivitäts-Assistent – ein Befehl, viele Aktionen. Automatisiere deinen Alltag.',
      path: '/pocket-assistant',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'Pocket Assistant',
        'applicationCategory': 'ProductivityApplication',
        'operatingSystem': 'Web',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'EUR'
        }
      }
    });
  });

  router.register('/contact', () => {
    main.innerHTML = renderContactPage();
    initContactPage();
    updatePageMeta({
      title: 'Kontakt | Polar Labs',
      description: 'Kontaktieren Sie uns für Anfragen oder Zusammenarbeit.',
      path: '/contact'
    });
  });

  router.register('/impressum', () => {
    main.innerHTML = renderImpressumPage();
    initImpressumPage();
    updatePageMeta({
      title: 'Impressum | Polar Labs',
      description: 'Rechtliche Informationen und Angaben gemäß § 5 TMG.',
      path: '/impressum'
    });
  });

  router.register('/datenschutz', () => {
    main.innerHTML = renderDatenschutzPage();
    initDatenschutzPage();
    updatePageMeta({
      title: 'Datenschutz | Polar Labs',
      description: 'Datenschutzerklärung und Informationen zur Datenverarbeitung.',
      path: '/datenschutz'
    });
  });

  // Initialize router
  router.init();

  // Re-render current page on language change
  i18n.onLanguageChange(() => {
    const currentRoute = router.route;
    const handler = {
      '/': () => { main.innerHTML = renderHomePage(); initHomePage(); },
      '/mapmind': () => { main.innerHTML = renderMapMindPage(); initMapMindPage(); },
      '/pocket-assistant': () => { main.innerHTML = renderSecondBrainPage(); initSecondBrainPage(); },
      '/contact': () => { main.innerHTML = renderContactPage(); initContactPage(); },
      '/impressum': () => { main.innerHTML = renderImpressumPage(); initImpressumPage(); },
      '/datenschutz': () => { main.innerHTML = renderDatenschutzPage(); initDatenschutzPage(); },
    }[currentRoute];

    if (handler) {
      handler();
    }
  });
}

interface PageMeta {
  title: string;
  description: string;
  path: string;
  schema?: object;
}

function updatePageMeta(meta: PageMeta): void {
  const baseUrl = 'https://polarlabs.de';
  const canonicalUrl = `${baseUrl}${meta.path === '/' ? '' : meta.path}`;
  const ogImage = `${baseUrl}/logo_large.png`;

  // Title
  document.title = meta.title;

  // Description
  updateMetaTag('meta[name="description"]', 'content', meta.description);

  // Canonical
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', canonicalUrl);
  }

  // Open Graph
  updateMetaTag('meta[property="og:title"]', 'content', meta.title);
  updateMetaTag('meta[property="og:description"]', 'content', meta.description);
  updateMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
  updateMetaTag('meta[property="og:image"]', 'content', ogImage);

  // Twitter
  updateMetaTag('meta[name="twitter:title"]', 'content', meta.title);
  updateMetaTag('meta[name="twitter:description"]', 'content', meta.description);
  updateMetaTag('meta[name="twitter:url"]', 'content', canonicalUrl);
  updateMetaTag('meta[name="twitter:image"]', 'content', ogImage);

  // Update page-specific JSON-LD schema
  if (meta.schema) {
    const schemaScript = document.getElementById('page-schema');
    if (schemaScript) {
      schemaScript.textContent = JSON.stringify(meta.schema);
    }
  }
}

function updateMetaTag(selector: string, attribute: string, value: string): void {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
