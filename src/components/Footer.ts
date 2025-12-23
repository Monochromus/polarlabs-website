import { i18n } from '../utils/translations';
import { router, Route } from '../utils/router';

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const render = () => {
    footer.innerHTML = `
      <div class="footer-container container">
        <div class="footer-brand">
          <a href="/" class="footer-logo" data-link>
            <svg class="footer-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="20" y1="36" x2="20" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="20" cy="6" r="3" fill="currentColor" class="polar-star"/>
              <line x1="16" y1="32" x2="24" y2="32" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
              <line x1="17" y1="26" x2="23" y2="26" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.3"/>
              <line x1="18" y1="20" x2="22" y2="20" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.2"/>
            </svg>
            <span>Polar Labs</span>
          </a>
        </div>
        <div class="footer-links">
          <a href="/contact" class="footer-link" data-link>${i18n.t('nav.contact')}</a>
          <a href="/impressum" class="footer-link" data-link>${i18n.t('nav.impressum')}</a>
        </div>
        <div class="footer-copyright">
          <span class="mono">${i18n.t('footer.copyright')}</span>
        </div>
      </div>
    `;

    footer.querySelectorAll('[data-link]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href') as Route;
        router.navigate(href);
      });
    });
  };

  render();
  i18n.onLanguageChange(render);

  return footer;
}

export const footerStyles = `
  .footer {
    border-top: 1px solid var(--border);
    padding: var(--space-12) 0;
    margin-top: auto;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-6);
  }

  .footer-brand {
    display: flex;
    align-items: center;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--text-secondary);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    transition: color var(--transition-fast);
  }

  .footer-logo:hover {
    color: var(--text-primary);
  }

  .footer-logo:hover .polar-star {
    fill: var(--aurora-cyan);
  }

  .footer-logo-icon {
    width: 24px;
    height: 24px;
  }

  .footer-logo-icon .polar-star {
    transition: fill var(--transition-fast);
  }

  .footer-links {
    display: flex;
    gap: var(--space-6);
  }

  .footer-link {
    font-size: var(--text-sm);
    color: var(--text-muted);
    transition: color var(--transition-fast);
  }

  .footer-link:hover {
    color: var(--text-primary);
  }

  .footer-copyright {
    color: var(--text-muted);
    font-size: var(--text-xs);
  }

  @media (max-width: 768px) {
    .footer-container {
      text-align: center;
    }
  }
`;
