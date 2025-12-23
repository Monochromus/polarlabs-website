import { i18n } from '../utils/translations';
import { router, Route } from '../utils/router';

export function renderServicesPage(): string {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="label mono">//services</span>
        <h1>${i18n.t('nav.services')}</h1>
        <p class="page-hero-description">${i18n.t('services.description')}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-coming-soon">
          <div class="coming-soon-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h2>${i18n.t('services.coming.title')}</h2>
          <p>${i18n.t('services.coming.text')}</p>
          <a href="/contact" class="btn btn-primary" data-link>${i18n.t('nav.contact')}</a>
        </div>
      </div>
    </section>
  `;
}

export function initServicesPage(): void {
  document.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href') as Route;
      router.navigate(href);
    });
  });
}

export const servicesStyles = `
  .services-coming-soon {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    padding: var(--space-16) 0;
  }

  .coming-soon-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--space-8);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface);
    border-radius: 50%;
    color: var(--aurora-cyan);
  }

  .coming-soon-icon svg {
    width: 40px;
    height: 40px;
  }

  .services-coming-soon h2 {
    margin-bottom: var(--space-4);
  }

  .services-coming-soon p {
    margin-bottom: var(--space-8);
    color: var(--text-secondary);
  }
`;
