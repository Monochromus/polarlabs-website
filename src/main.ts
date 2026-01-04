import './styles/base.css';
import { createNavigation, navigationStyles } from './components/Navigation';
import { createFooter, footerStyles } from './components/Footer';
import { renderHomePage, initHomePage, homeStyles } from './pages/Home';
import { renderMapMindPage, initMapMindPage, mapMindStyles } from './pages/MapMind';
import { renderSecondBrainPage, initSecondBrainPage, secondBrainStyles } from './pages/SecondBrain';
import { renderServicesPage, initServicesPage, servicesStyles } from './pages/Services';
import { renderContactPage, initContactPage, contactStyles } from './pages/Contact';
import { renderImpressumPage, initImpressumPage, impressumStyles } from './pages/Impressum';
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
  ${servicesStyles}
  ${contactStyles}
  ${impressumStyles}
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
    updatePageMeta('Polar Labs', 'We reveal structure in complex systems. KI-Werkzeuge für Klarheit.');
  });

  router.register('/mapmind', () => {
    main.innerHTML = renderMapMindPage();
    initMapMindPage();
    updatePageMeta('mapMind | Polar Labs', 'KI-gestützte Karten für personalisierte Entdeckungen.');
  });

  router.register('/secondbrain', () => {
    main.innerHTML = renderSecondBrainPage();
    initSecondBrainPage();
    updatePageMeta('Pocket Assistant | Polar Labs', 'Dein KI-gestützter Produktivitäts-Assistent – ein Befehl, viele Aktionen.');
  });

  router.register('/services', () => {
    main.innerHTML = renderServicesPage();
    initServicesPage();
    updatePageMeta('Dienstleistungen | Polar Labs', 'Individuelle Lösungen und Beratung.');
  });

  router.register('/contact', () => {
    main.innerHTML = renderContactPage();
    initContactPage();
    updatePageMeta('Kontakt | Polar Labs', 'Kontaktieren Sie uns für Anfragen oder Zusammenarbeit.');
  });

  router.register('/impressum', () => {
    main.innerHTML = renderImpressumPage();
    initImpressumPage();
    updatePageMeta('Impressum | Polar Labs', 'Rechtliche Informationen.');
  });

  // Initialize router
  router.init();

  // Re-render current page on language change
  i18n.onLanguageChange(() => {
    const currentRoute = router.route;
    const handler = {
      '/': () => { main.innerHTML = renderHomePage(); initHomePage(); },
      '/mapmind': () => { main.innerHTML = renderMapMindPage(); initMapMindPage(); },
      '/secondbrain': () => { main.innerHTML = renderSecondBrainPage(); initSecondBrainPage(); },
      '/services': () => { main.innerHTML = renderServicesPage(); initServicesPage(); },
      '/contact': () => { main.innerHTML = renderContactPage(); initContactPage(); },
      '/impressum': () => { main.innerHTML = renderImpressumPage(); initImpressumPage(); },
    }[currentRoute];

    if (handler) {
      handler();
    }
  });
}

function updatePageMeta(title: string, description: string): void {
  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
