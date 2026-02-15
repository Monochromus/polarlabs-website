import { i18n } from '../utils/translations';
import { router, Route } from '../utils/router';

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const render = () => {
    footer.innerHTML = `
      <div class="footer-container container">
        <div class="footer-grid">
          <div class="footer-brand-section">
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
            <p class="footer-tagline">Quiet tools for complex problems.</p>
          </div>

          <div class="footer-nav-section">
            <h4 class="footer-heading">Navigation</h4>
            <div class="footer-nav-links">
              <a href="/" class="footer-link" data-link>${i18n.t('nav.home')}</a>
              <a href="/#products" class="footer-link">${i18n.t('nav.products')}</a>
              <a href="/contact" class="footer-link" data-link>${i18n.t('nav.contact')}</a>
            </div>
          </div>

          <div class="footer-legal-section">
            <h4 class="footer-heading">Rechtliches</h4>
            <div class="footer-nav-links">
              <a href="/impressum" class="footer-link" data-link>${i18n.t('nav.impressum')}</a>
              <a href="/datenschutz" class="footer-link" data-link>${i18n.t('nav.datenschutz')}</a>
            </div>
          </div>

          <div class="footer-built-section">
            <h4 class="footer-heading">Workflow</h4>
            <div class="footer-built-badge">
              <span class="badge badge-luna">Built with Luna</span>
              <p class="footer-built-text">Designed & Automated by AI</p>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-copyright">
            <span class="mono">${i18n.t('footer.copyright')}</span>
          </div>
          <div class="footer-social-hint mono">
            vibe: coding // phase: beta
          </div>
        </div>
      </div>
    `;

    // Handle scroll to products from footer
    footer.querySelector('a[href="/#products"]')?.addEventListener('click', (e) => {
      e.preventDefault();
      if (router.route === '/') {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.navigate('/');
        setTimeout(() => {
          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });

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
    border-top: 1px solid rgba(168, 162, 158, 0.08);
    padding: var(--space-16) 0 var(--space-8);
    margin-top: auto;
    background: linear-gradient(to bottom, transparent, rgba(28, 25, 23, 0.4));
    backdrop-filter: blur(10px);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: var(--space-12);
    margin-bottom: var(--space-16);
  }

  .footer-brand-section {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .footer-tagline {
    font-size: var(--text-sm);
    color: var(--warm-text-muted);
    opacity: 0.8;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--warm-text-primary);
    font-family: var(--font-playful);
    font-size: var(--text-lg);
    font-weight: 700;
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  .footer-logo:hover .polar-star {
    fill: var(--petrol-soft);
    filter: drop-shadow(0 0 8px var(--petrol-soft));
  }

  .footer-logo-icon {
    width: 28px;
    height: 28px;
  }

  .footer-logo-icon .polar-star {
    transition: fill var(--transition-fast), filter var(--transition-fast);
  }

  .footer-heading {
    font-family: var(--font-playful);
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--petrol-soft);
    margin-bottom: var(--space-6);
  }

  .footer-nav-links {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .footer-link {
    font-family: var(--font-playful);
    font-size: var(--text-sm);
    color: var(--warm-text-secondary);
    text-decoration: none;
    transition: all var(--transition-fast);
  }

  .footer-link:hover {
    color: var(--warm-text-primary);
    transform: translateX(4px);
  }

  .footer-built-badge {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(168, 162, 158, 0.1);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    display: inline-flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .badge-luna {
    background: rgba(69, 196, 176, 0.1);
    color: var(--petrol-soft);
    border-color: rgba(69, 196, 176, 0.2);
    font-size: 10px;
    padding: 2px 8px;
    width: fit-content;
  }

  .footer-built-text {
    font-size: 11px;
    color: var(--warm-text-muted);
    margin: 0;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-8);
    border-top: 1px solid rgba(168, 162, 158, 0.05);
  }

  .footer-copyright {
    color: var(--warm-text-muted);
    font-size: var(--text-xs);
    opacity: 0.6;
  }

  .footer-social-hint {
    color: var(--warm-text-muted);
    font-size: 10px;
    opacity: 0.4;
    letter-spacing: 0.05em;
  }

  @media (max-width: 992px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 640px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: var(--space-10);
    }
    .footer-bottom {
      flex-direction: column;
      gap: var(--space-4);
      text-align: center;
    }
  }
`;
