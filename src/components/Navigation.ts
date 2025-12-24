import { i18n } from '../utils/translations';
import { themeManager } from '../utils/theme';
import { router, Route } from '../utils/router';

export function createNavigation(): HTMLElement {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');

  const render = () => {
    const currentRoute = router.route;
    const isDark = themeManager.theme === 'dark';
    const currentLang = i18n.language;

    nav.innerHTML = `
      <div class="nav-container container">
        <a href="/" class="nav-logo" aria-label="Polar Labs Home" data-link>
          <svg class="nav-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="20" y1="36" x2="20" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="20" cy="6" r="3" fill="currentColor" class="polar-star"/>
            <line x1="16" y1="32" x2="24" y2="32" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
            <line x1="17" y1="26" x2="23" y2="26" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.3"/>
            <line x1="18" y1="20" x2="22" y2="20" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.2"/>
          </svg>
          <span class="nav-logo-text">Polar Labs</span>
        </a>

        <button class="nav-mobile-toggle" aria-label="${i18n.t('menu.open')}" aria-expanded="false">
          <svg class="nav-mobile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6" class="menu-line-top"/>
            <line x1="3" y1="12" x2="21" y2="12" class="menu-line-middle"/>
            <line x1="3" y1="18" x2="21" y2="18" class="menu-line-bottom"/>
          </svg>
        </button>

        <div class="nav-menu">
          <div class="nav-links">
            <a href="/" class="nav-link ${currentRoute === '/' ? 'active' : ''}" data-link>
              ${i18n.t('nav.home')}
            </a>
            <div class="nav-dropdown">
              <button class="nav-link nav-dropdown-trigger ${currentRoute === '/mapmind' || currentRoute === '/secondbrain' ? 'active' : ''}">
                ${i18n.t('nav.products')}
                <svg class="nav-dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div class="nav-dropdown-menu">
                <a href="/mapmind" class="nav-dropdown-item ${currentRoute === '/mapmind' ? 'active' : ''}" data-link>
                  <span class="nav-dropdown-item-name">mapMind</span>
                  <span class="nav-dropdown-item-desc mono">AI Maps</span>
                </a>
                <a href="/secondbrain" class="nav-dropdown-item ${currentRoute === '/secondbrain' ? 'active' : ''}" data-link>
                  <span class="nav-dropdown-item-name">SecondBrainAgent</span>
                  <span class="nav-dropdown-item-desc mono">AI Agent</span>
                </a>
              </div>
            </div>
            <a href="/services" class="nav-link ${currentRoute === '/services' ? 'active' : ''}" data-link>
              ${i18n.t('nav.services')}
            </a>
          </div>

          <div class="nav-actions">
            <button class="nav-action-btn" id="lang-toggle" aria-label="${i18n.t('language.toggle')}">
              <span class="mono">${currentLang.toUpperCase()}</span>
            </button>
            <button class="nav-action-btn" id="theme-toggle" aria-label="${i18n.t('theme.toggle')}">
              ${isDark ? `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ` : `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              `}
            </button>
          </div>
        </div>
      </div>
    `;

    // Event listeners
    const themeToggle = nav.querySelector('#theme-toggle');
    themeToggle?.addEventListener('click', () => {
      themeManager.toggleTheme();
    });

    const langToggle = nav.querySelector('#lang-toggle');
    langToggle?.addEventListener('click', () => {
      i18n.toggleLanguage();
    });

    const mobileToggle = nav.querySelector('.nav-mobile-toggle');
    const navMenu = nav.querySelector('.nav-menu');
    mobileToggle?.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', (!isExpanded).toString());
      mobileToggle.setAttribute('aria-label', isExpanded ? i18n.t('menu.open') : i18n.t('menu.close'));
      navMenu?.classList.toggle('open');
      nav.classList.toggle('menu-open');
    });

    // Handle navigation links
    nav.querySelectorAll('[data-link]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href') as Route;
        router.navigate(href);
        navMenu?.classList.remove('open');
        nav.classList.remove('menu-open');
        mobileToggle?.setAttribute('aria-expanded', 'false');
      });
    });
  };

  render();

  // Re-render on language change
  i18n.onLanguageChange(render);
  themeManager.onThemeChange(render);
  router.onRouteChange(render);

  return nav;
}

export const navigationStyles = `
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-sticky);
    background: var(--background);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(10px);
    transition: background-color var(--transition-slow);
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    color: var(--text-primary);
    font-weight: var(--font-medium);
    transition: color var(--transition-fast);
  }

  .nav-logo:hover {
    color: var(--aurora-cyan);
  }

  .nav-logo:hover .polar-star {
    fill: var(--aurora-cyan);
    filter: drop-shadow(0 0 6px var(--aurora-cyan));
  }

  .nav-logo-icon {
    width: 32px;
    height: 32px;
  }

  .nav-logo-icon .polar-star {
    transition: fill var(--transition-fast), filter var(--transition-fast);
  }

  .nav-logo-text {
    font-size: var(--text-lg);
    letter-spacing: -0.01em;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: var(--space-8);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: var(--space-6);
  }

  .nav-link {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    transition: color var(--transition-fast);
    position: relative;
  }

  .nav-link:hover {
    color: var(--text-primary);
  }

  .nav-link.active {
    color: var(--text-primary);
  }

  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--aurora-cyan);
  }

  /* Dropdown */
  .nav-dropdown {
    position: relative;
  }

  .nav-dropdown-trigger {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    padding: 0;
  }

  .nav-dropdown-trigger::after {
    display: none;
  }

  .nav-dropdown-arrow {
    transition: transform var(--transition-fast);
  }

  .nav-dropdown:hover .nav-dropdown-arrow {
    transform: rotate(180deg);
  }

  .nav-dropdown-menu {
    position: absolute;
    top: calc(100% + var(--space-4));
    left: 50%;
    transform: translateX(-50%);
    min-width: 200px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: var(--space-2);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-fast);
    z-index: var(--z-dropdown);
  }

  .nav-dropdown:hover .nav-dropdown-menu {
    opacity: 1;
    visibility: visible;
  }

  .nav-dropdown-item {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius-sm);
    transition: background var(--transition-fast);
  }

  .nav-dropdown-item:hover {
    background: var(--background);
    color: var(--text-primary);
  }

  .nav-dropdown-item.active {
    background: var(--background);
  }

  .nav-dropdown-item-name {
    font-weight: var(--font-medium);
    color: var(--text-primary);
  }

  .nav-dropdown-item-desc {
    font-size: var(--text-xs);
    color: var(--text-muted);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .nav-action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .nav-action-btn:hover {
    border-color: var(--text-secondary);
    color: var(--text-primary);
  }

  .nav-action-btn:focus-visible {
    outline: 2px solid var(--aurora-cyan);
    outline-offset: 2px;
  }

  .nav-action-btn svg {
    width: 18px;
    height: 18px;
  }

  .nav-action-btn .mono {
    font-size: var(--text-xs);
  }

  .nav-mobile-toggle {
    display: none;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    padding: var(--space-2);
  }

  .nav-mobile-icon {
    width: 100%;
    height: 100%;
  }

  .menu-line-top,
  .menu-line-middle,
  .menu-line-bottom {
    transition: all var(--transition-base);
    transform-origin: center;
  }

  .menu-open .menu-line-top {
    transform: translateY(6px) rotate(45deg);
  }

  .menu-open .menu-line-middle {
    opacity: 0;
  }

  .menu-open .menu-line-bottom {
    transform: translateY(-6px) rotate(-45deg);
  }

  @media (max-width: 768px) {
    .nav-mobile-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav-menu {
      position: fixed;
      top: 64px;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--background);
      flex-direction: column;
      justify-content: flex-start;
      padding: var(--space-8) var(--space-6);
      gap: var(--space-8);
      transform: translateX(100%);
      transition: transform var(--transition-slow);
      visibility: hidden;
      z-index: var(--z-overlay);
      overflow-y: auto;
    }

    .nav-menu.open {
      transform: translateX(0);
      visibility: visible;
    }

    .nav-menu::before {
      content: '';
      position: fixed;
      top: 64px;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--background);
      z-index: -1;
    }

    .nav-links {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-6);
      width: 100%;
    }

    .nav-link {
      font-size: var(--text-xl);
    }

    .nav-dropdown {
      width: 100%;
    }

    .nav-dropdown-trigger {
      font-size: var(--text-xl);
      width: 100%;
      justify-content: flex-start;
    }

    .nav-dropdown-menu {
      position: static;
      transform: none;
      opacity: 1;
      visibility: visible;
      background: transparent;
      border: none;
      padding: var(--space-4) 0 0 var(--space-4);
      min-width: auto;
    }

    .nav-dropdown-item {
      padding: var(--space-2) var(--space-3);
    }

    .nav-actions {
      width: 100%;
      justify-content: flex-start;
    }
  }
`;
