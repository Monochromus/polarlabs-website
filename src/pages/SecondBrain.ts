import { i18n } from '../utils/translations';
import { router, Route } from '../utils/router';

export function renderSecondBrainPage(): string {
  return `
    <section class="product-hero product-hero-secondbrain">
      <div class="product-hero-background">
        <div class="product-hero-glow secondbrain-glow"></div>
        <div class="product-hero-nodes">
          <svg class="nodes-svg" viewBox="0 0 400 300" preserveAspectRatio="none">
            <line x1="100" y1="80" x2="200" y2="150" stroke="var(--petrol-soft)" stroke-width="0.5" opacity="0.3"/>
            <line x1="200" y1="150" x2="150" y2="220" stroke="var(--petrol-soft)" stroke-width="0.5" opacity="0.3"/>
            <line x1="200" y1="150" x2="300" y2="130" stroke="var(--petrol-soft)" stroke-width="0.5" opacity="0.3"/>
            <line x1="300" y1="130" x2="350" y2="200" stroke="var(--petrol-soft)" stroke-width="0.5" opacity="0.3"/>
            <circle cx="100" cy="80" r="4" fill="var(--petrol-soft)" opacity="0.4"/>
            <circle cx="200" cy="150" r="6" fill="var(--petrol-soft)" opacity="0.6"/>
            <circle cx="150" cy="220" r="3" fill="var(--petrol-soft)" opacity="0.3"/>
            <circle cx="300" cy="130" r="4" fill="var(--petrol-soft)" opacity="0.4"/>
            <circle cx="350" cy="200" r="3" fill="var(--petrol-soft)" opacity="0.3"/>
          </svg>
        </div>
      </div>
      <div class="product-hero-content container">
        <div class="hero-logo-wrapper">
          <img src="/pocket_assistent_logo.svg" alt="Pocket Assistant Logo" class="hero-logo" />
        </div>
        <span class="label mono text-petrol">// ${i18n.t('products.status.development')}</span>
        <h1 class="product-hero-title">${i18n.t('secondbrain.hero.title')}</h1>
        <p class="product-hero-subtitle secondbrain-subtitle">${i18n.t('secondbrain.hero.subtitle')}</p>
        <p class="product-hero-description">${i18n.t('secondbrain.hero.description')}</p>
        <a href="https://pocketassistant.polarlabs.de/login" target="_blank" rel="noopener noreferrer" class="btn btn-primary-violet btn-lg hero-cta-btn">${i18n.t('secondbrain.try')}</a>
      </div>
    </section>

    <section class="section problem-section">
      <div class="container">
        <div class="section-header section-header-center">
          <span class="label mono">//00</span>
          <h2>${i18n.t('secondbrain.problem.title')}</h2>
          <p class="section-subtitle">${i18n.t('secondbrain.problem.subtitle')}</p>
        </div>
        <div class="problem-grid">
          <div class="problem-item">
            <div class="problem-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span>${i18n.t('secondbrain.problem.item1')}</span>
          </div>
          <div class="problem-item">
            <div class="problem-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polygon points="23 7 16 12 23 17 23 7"/>
                <rect x="1" y="5" width="15" height="14" rx="2"/>
              </svg>
            </div>
            <span>${i18n.t('secondbrain.problem.item2')}</span>
          </div>
          <div class="problem-item">
            <div class="problem-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <span>${i18n.t('secondbrain.problem.item3')}</span>
          </div>
          <div class="problem-item">
            <div class="problem-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <span>${i18n.t('secondbrain.problem.item4')}</span>
          </div>
        </div>
        <blockquote class="problem-quote">
          ${i18n.t('secondbrain.problem.quote')}
        </blockquote>
      </div>
    </section>

    <section class="section section-alt solution-section">
      <div class="container">
        <div class="section-header section-header-center">
          <span class="label mono">//01</span>
          <h2>${i18n.t('secondbrain.solution.title')}</h2>
          <p class="section-subtitle">${i18n.t('secondbrain.solution.subtitle')}</p>
        </div>

        <!-- Flow Visualisierung -->
        <div class="flow-visual">
          <div class="flow-step flow-step-input">
            <div class="flow-icons">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
            </div>
            <span class="flow-label mono">Input</span>
          </div>
          <div class="flow-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          <div class="flow-step flow-step-brain">
            <img src="/pocket_assistent_logo.svg" alt="Pocket Assistant" class="flow-brain-logo" />
            <span class="flow-label mono">AI Brain</span>
          </div>
          <div class="flow-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          <div class="flow-step flow-step-output">
            <div class="flow-icons">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <span class="flow-label mono">Output</span>
          </div>
        </div>

        <!-- 3 Phasen -->
        <div class="phases-grid">
          <div class="phase-card phase-card-1">
            <div class="phase-number">1</div>
            <h3>${i18n.t('secondbrain.phase.1.title')}</h3>
            <p class="phase-desc">${i18n.t('secondbrain.phase.1.desc')}</p>
            <p class="phase-features">${i18n.t('secondbrain.phase.1.features')}</p>
            <p class="phase-highlight">${i18n.t('secondbrain.phase.1.highlight')}</p>
          </div>
          <div class="phase-card phase-card-2">
            <div class="phase-number">2</div>
            <h3>${i18n.t('secondbrain.phase.2.title')}</h3>
            <p class="phase-desc">${i18n.t('secondbrain.phase.2.desc')}</p>
            <p class="phase-example">${i18n.t('secondbrain.phase.2.example')}</p>
          </div>
          <div class="phase-card phase-card-3">
            <div class="phase-number">3</div>
            <h3>${i18n.t('secondbrain.phase.3.title')}</h3>
            <p class="phase-desc">${i18n.t('secondbrain.phase.3.desc')}</p>
            <p class="phase-example">${i18n.t('secondbrain.phase.3.example1')}</p>
            <p class="phase-example">${i18n.t('secondbrain.phase.3.example2')}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//02</span>
          <h2>${i18n.t('secondbrain.examples.title')}</h2>
        </div>
        <div class="examples-grid examples-grid-secondbrain">
          <div class="example-card example-card-secondbrain">
            <div class="example-prompt mono">"${i18n.t('secondbrain.example.1')}"</div>
            <div class="example-result">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              <span class="mono">${i18n.t('secondbrain.example.1.result')}</span>
            </div>
          </div>
          <div class="example-card example-card-secondbrain">
            <div class="example-prompt mono">"${i18n.t('secondbrain.example.2')}"</div>
            <div class="example-result">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              <span class="mono">${i18n.t('secondbrain.example.2.result')}</span>
            </div>
          </div>
          <div class="example-card example-card-secondbrain">
            <div class="example-prompt mono">"${i18n.t('secondbrain.example.3')}"</div>
            <div class="example-result">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              <span class="mono">${i18n.t('secondbrain.example.3.result')}</span>
            </div>
          </div>
          <div class="example-card example-card-secondbrain">
            <div class="example-prompt mono">"${i18n.t('secondbrain.example.4')}"</div>
            <div class="example-result">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              <span class="mono">${i18n.t('secondbrain.example.4.result')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section briefing-section">
      <div class="container">
        <div class="section-header section-header-center">
          <span class="label mono">//03</span>
          <h2>${i18n.t('secondbrain.briefing.title')}</h2>
          <p class="section-subtitle">${i18n.t('secondbrain.briefing.subtitle')}</p>
        </div>
        <p class="briefing-intro">${i18n.t('secondbrain.briefing.desc')}</p>
        <div class="briefing-grid">
          <div class="briefing-item">
            <div class="briefing-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                <circle cx="12" cy="12" r="4"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.briefing.weather')}</h4>
            <p>${i18n.t('secondbrain.briefing.weather.desc')}</p>
          </div>
          <div class="briefing-item">
            <div class="briefing-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.briefing.events')}</h4>
            <p>${i18n.t('secondbrain.briefing.events.desc')}</p>
          </div>
          <div class="briefing-item">
            <div class="briefing-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1"/>
                <path d="M18 14h4v4"/>
                <path d="M15 11l7 7"/>
                <line x1="7" y1="8" x2="13" y2="8"/>
                <line x1="7" y1="12" x2="11" y2="12"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.briefing.news')}</h4>
            <p>${i18n.t('secondbrain.briefing.news.desc')}</p>
          </div>
          <div class="briefing-item">
            <div class="briefing-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.briefing.calendar')}</h4>
            <p>${i18n.t('secondbrain.briefing.calendar.desc')}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt usecase-section">
      <div class="container">
        <div class="section-header section-header-center">
          <span class="label mono">//04</span>
          <h2>${i18n.t('secondbrain.usecase.title')}</h2>
          <p class="section-subtitle">${i18n.t('secondbrain.usecase.subtitle')}</p>
        </div>
        <p class="usecase-intro">${i18n.t('secondbrain.usecase.desc')}</p>

        <div class="usecase-highlight">
          <div class="usecase-highlight-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <div class="usecase-highlight-content">
            <h4>${i18n.t('secondbrain.usecase.example.title')}</h4>
            <p>${i18n.t('secondbrain.usecase.example.desc')}</p>
          </div>
        </div>

        <div class="usecase-ideas">
          <h4>${i18n.t('secondbrain.usecase.more')}</h4>
          <div class="usecase-ideas-grid usecase-ideas-grid-3">
            <div class="usecase-idea">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
              </svg>
              <span>${i18n.t('secondbrain.usecase.idea1')}</span>
            </div>
            <div class="usecase-idea">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="12 6 12 12 16 14"/>
              </svg>
              <span>${i18n.t('secondbrain.usecase.idea3')}</span>
            </div>
            <div class="usecase-idea">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <span>${i18n.t('secondbrain.usecase.idea4')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt shortcut-section">
      <div class="container">
        <div class="shortcut-grid">
          <div class="shortcut-visual">
            <div class="phone-mockup">
              <div class="phone-screen">
                <div class="phone-widget">
                  <img src="/pocket_assistent_logo.svg" alt="Pocket Assistant" class="widget-icon" />
                  <span class="widget-label">Pocket Assistant</span>
                </div>
                <div class="phone-time">09:41</div>
                <div class="phone-date">Donnerstag, 9. Januar</div>
              </div>
            </div>
          </div>
          <div class="shortcut-content">
            <span class="label mono">//05</span>
            <h2>${i18n.t('secondbrain.shortcut.title')}</h2>
            <p class="shortcut-subtitle">${i18n.t('secondbrain.shortcut.subtitle')}</p>
            <p>${i18n.t('secondbrain.shortcut.desc')}</p>
            <div class="shortcut-steps">
              <div class="shortcut-step">
                <span class="step-number">1</span>
                <span>${i18n.t('secondbrain.shortcut.step1')}</span>
              </div>
              <div class="shortcut-step">
                <span class="step-number">2</span>
                <span>${i18n.t('secondbrain.shortcut.step2')}</span>
              </div>
              <div class="shortcut-step">
                <span class="step-number">3</span>
                <span>${i18n.t('secondbrain.shortcut.step3')}</span>
              </div>
              <div class="shortcut-step">
                <span class="step-number">4</span>
                <span>${i18n.t('secondbrain.shortcut.step4')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//06</span>
          <h2>${i18n.t('secondbrain.features.title')}</h2>
        </div>
        <div class="features-grid features-grid-6 features-grid-secondbrain">
          <div class="feature-card feature-card-secondbrain">
            <div class="feature-icon feature-icon-secondbrain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8v3H8v-3c-3-1.5-5-4.5-5-8a9 9 0 0 1 9-9z"/>
                <path d="M12 2v4"/>
                <path d="M4.93 4.93l2.83 2.83"/>
                <path d="M19.07 4.93l-2.83 2.83"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.feature.1.title')}</h4>
            <p>${i18n.t('secondbrain.feature.1.desc')}</p>
          </div>
          <div class="feature-card feature-card-secondbrain">
            <div class="feature-icon feature-icon-secondbrain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.feature.2.title')}</h4>
            <p>${i18n.t('secondbrain.feature.2.desc')}</p>
          </div>
          <div class="feature-card feature-card-secondbrain">
            <div class="feature-icon feature-icon-secondbrain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.feature.3.title')}</h4>
            <p>${i18n.t('secondbrain.feature.3.desc')}</p>
          </div>
          <div class="feature-card feature-card-secondbrain">
            <div class="feature-icon feature-icon-secondbrain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.feature.4.title')}</h4>
            <p>${i18n.t('secondbrain.feature.4.desc')}</p>
          </div>
          <div class="feature-card feature-card-secondbrain">
            <div class="feature-icon feature-icon-secondbrain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.feature.5.title')}</h4>
            <p>${i18n.t('secondbrain.feature.5.desc')}</p>
          </div>
          <div class="feature-card feature-card-secondbrain">
            <div class="feature-icon feature-icon-secondbrain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.feature.6.title')}</h4>
            <p>${i18n.t('secondbrain.feature.6.desc')}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//07</span>
          <h2>${i18n.t('secondbrain.pricing.title')}</h2>
        </div>
        <div class="pricing-grid pricing-grid-3">
          <div class="pricing-card pricing-card-free">
            <div class="pricing-header">
              <h3 class="pricing-name">${i18n.t('secondbrain.pricing.free')}</h3>
              <div class="pricing-price">
                <span class="price-amount">${i18n.t('secondbrain.pricing.free.price')}</span>
                <span class="price-period mono">${i18n.t('secondbrain.pricing.free.period')}</span>
              </div>
              <p class="pricing-desc">${i18n.t('secondbrain.pricing.free.desc')}</p>
            </div>
            <ul class="pricing-features">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.free.feature.1')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.free.feature.2')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.free.feature.3')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.free.feature.4')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.free.feature.5')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.free.feature.6')}
              </li>
              <li class="pricing-limitation">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                ${i18n.t('secondbrain.pricing.free.limitation.1')}
              </li>
              <li class="pricing-limitation">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                ${i18n.t('secondbrain.pricing.free.limitation.2')}
              </li>
            </ul>
            <a href="https://pocketassistant.polarlabs.de/login" target="_blank" rel="noopener noreferrer" class="btn btn-secondary pricing-cta">${i18n.t('secondbrain.pricing.cta.free')}</a>
          </div>

          <div class="pricing-card pricing-card-ownkey">
            <div class="pricing-header">
              <h3 class="pricing-name">${i18n.t('secondbrain.pricing.ownkey')}</h3>
              <div class="pricing-price">
                <span class="price-amount">${i18n.t('secondbrain.pricing.ownkey.price')}</span>
                <span class="price-period mono">${i18n.t('secondbrain.pricing.ownkey.period')}</span>
              </div>
              <p class="pricing-desc">${i18n.t('secondbrain.pricing.ownkey.desc')}</p>
            </div>
            <p class="pricing-includes mono">${i18n.t('secondbrain.pricing.ownkey.includes')}</p>
            <ul class="pricing-features">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.ownkey.feature.1')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.ownkey.feature.2')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.ownkey.feature.3')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.ownkey.feature.4')}
              </li>
            </ul>
            <p class="pricing-note mono">${i18n.t('secondbrain.pricing.ownkey.note')}</p>
            <a href="https://pocketassistant.polarlabs.de/login" target="_blank" rel="noopener noreferrer" class="btn btn-secondary-petrol pricing-cta">${i18n.t('secondbrain.pricing.cta.ownkey')}</a>
          </div>

          <div class="pricing-card pricing-card-pro">
            <div class="pricing-badge">${i18n.t('secondbrain.pricing.popular')}</div>
            <div class="pricing-header">
              <h3 class="pricing-name">${i18n.t('secondbrain.pricing.pro')}</h3>
              <div class="pricing-price">
                <span class="price-amount">${i18n.t('secondbrain.pricing.pro.price')}</span>
                <span class="price-period mono">${i18n.t('secondbrain.pricing.pro.period')}</span>
              </div>
              <p class="pricing-desc">${i18n.t('secondbrain.pricing.pro.desc')}</p>
            </div>
            <p class="pricing-includes mono">${i18n.t('secondbrain.pricing.pro.includes')}</p>
            <ul class="pricing-features">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.pro.feature.1')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.pro.feature.2')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.pro.feature.3')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.pro.feature.4')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.pro.feature.5')}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${i18n.t('secondbrain.pricing.pro.feature.6')}
              </li>
            </ul>
            <a href="https://pocketassistant.polarlabs.de/login" target="_blank" rel="noopener noreferrer" class="btn btn-primary-violet pricing-cta">${i18n.t('secondbrain.pricing.cta.pro')}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//08</span>
          <h2>${i18n.t('secondbrain.roadmap.title')}</h2>
        </div>
        <div class="timeline-pocket">
          <div class="timeline-item done">
            <div class="timeline-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="timeline-content">
              <span class="timeline-title">${i18n.t('roadmap.secondbrain.1')}</span>
              <span class="timeline-desc">${i18n.t('roadmap.secondbrain.1.desc')}</span>
            </div>
          </div>
          <div class="timeline-item done">
            <div class="timeline-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="timeline-content">
              <span class="timeline-title">${i18n.t('roadmap.secondbrain.2')}</span>
              <span class="timeline-desc">${i18n.t('roadmap.secondbrain.2.desc')}</span>
            </div>
          </div>
          <div class="timeline-item done">
            <div class="timeline-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="timeline-content">
              <span class="timeline-title">${i18n.t('roadmap.secondbrain.3')}</span>
              <span class="timeline-desc">${i18n.t('roadmap.secondbrain.3.desc')}</span>
            </div>
          </div>
          <div class="timeline-item done">
            <div class="timeline-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="timeline-content">
              <span class="timeline-title">${i18n.t('roadmap.secondbrain.4')}</span>
              <span class="timeline-desc">${i18n.t('roadmap.secondbrain.4.desc')}</span>
            </div>
          </div>
          <div class="timeline-item done">
            <div class="timeline-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="timeline-content">
              <span class="timeline-title">${i18n.t('roadmap.secondbrain.5')}</span>
              <span class="timeline-desc">${i18n.t('roadmap.secondbrain.5.desc')}</span>
            </div>
          </div>
          <div class="timeline-item done">
            <div class="timeline-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="timeline-content">
              <span class="timeline-title">${i18n.t('roadmap.secondbrain.6')}</span>
              <span class="timeline-desc">${i18n.t('roadmap.secondbrain.6.desc')}</span>
            </div>
          </div>
          <div class="timeline-item done">
            <div class="timeline-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="timeline-content">
              <span class="timeline-title">${i18n.t('roadmap.secondbrain.7')}</span>
              <span class="timeline-desc">${i18n.t('roadmap.secondbrain.7.desc')}</span>
            </div>
          </div>
          <div class="timeline-item current">
            <div class="timeline-marker">
              <div class="pulse-dot"></div>
            </div>
            <div class="timeline-content">
              <span class="timeline-title">${i18n.t('roadmap.secondbrain.8')}</span>
              <span class="timeline-desc">${i18n.t('roadmap.secondbrain.8.desc')}</span>
            </div>
          </div>
          <div class="timeline-item upcoming">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-title">${i18n.t('roadmap.secondbrain.9')}</span>
              <span class="timeline-desc">${i18n.t('roadmap.secondbrain.9.desc')}</span>
            </div>
          </div>
          <div class="timeline-item future">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-title">${i18n.t('roadmap.secondbrain.10')}</span>
              <span class="timeline-desc">${i18n.t('roadmap.secondbrain.10.desc')}</span>
            </div>
          </div>
          <div class="timeline-item future last">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-title">${i18n.t('roadmap.secondbrain.11')}</span>
              <span class="timeline-desc">${i18n.t('roadmap.secondbrain.11.desc')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>${i18n.t('secondbrain.cta')}</h2>
          <a href="https://pocketassistant.polarlabs.de/login" target="_blank" rel="noopener noreferrer" class="btn btn-primary-violet btn-lg">${i18n.t('secondbrain.try')}</a>
        </div>
      </div>
    </section>
  `;
}

export function initSecondBrainPage(): void {
  document.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href') as Route;
      router.navigate(href);
    });
  });

  // Animate roadmap items on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.roadmap-item').forEach(item => {
    observer.observe(item);
  });
}

export const secondBrainStyles = `
  /* ============================================
     POCKET ASSISTANT - Claude-inspired cozy design
     Petrol accent color, Nunito font, Warm brown theme
     ============================================ */

  /* Warm brown background theme for the entire page */
  .product-hero-secondbrain,
  .product-hero-secondbrain ~ section {
    background-color: var(--warm-bg-dark);
    color: var(--warm-text-primary);
  }

  /* Override page font to playful Nunito */
  .product-hero-secondbrain,
  .product-hero-secondbrain ~ section {
    font-family: var(--font-playful);
  }

  .product-hero-secondbrain h1,
  .product-hero-secondbrain h2,
  .product-hero-secondbrain ~ section h2,
  .product-hero-secondbrain ~ section h3,
  .product-hero-secondbrain ~ section h4 {
    font-family: var(--font-playful);
    font-weight: 700;
    color: var(--warm-text-primary);
  }

  .product-hero-secondbrain p,
  .product-hero-secondbrain ~ section p {
    color: var(--warm-text-secondary);
  }

  /* Hero Logo */
  .hero-logo-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: var(--space-6);
  }

  .hero-logo {
    width: 80px;
    height: 80px;
    filter: drop-shadow(0 8px 24px rgba(20, 145, 155, 0.3));
    animation: logoFloat 4s ease-in-out infinite;
  }

  @keyframes logoFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  /* Hero Section - Warm, inviting feel */
  .product-hero-secondbrain {
    background: linear-gradient(180deg,
      var(--warm-bg-dark) 0%,
      var(--warm-bg-medium) 100%
    );
    position: relative;
    overflow: hidden;
  }

  .product-hero-secondbrain .secondbrain-glow {
    position: absolute;
    top: 20%;
    right: 5%;
    width: 500px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(20, 145, 155, 0.15) 0%, transparent 70%);
    filter: blur(80px);
    animation: gentlePulse 8s ease-in-out infinite;
  }

  @keyframes gentlePulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 0.9; transform: scale(1.05); }
  }

  .product-hero-nodes {
    position: absolute;
    inset: 0;
    opacity: 0.4;
  }

  .nodes-svg {
    width: 100%;
    height: 100%;
  }

  .nodes-svg line {
    stroke: var(--petrol-soft) !important;
  }

  .nodes-svg circle {
    fill: var(--petrol-soft) !important;
  }

  .product-hero-secondbrain .product-hero-title {
    font-family: var(--font-playful);
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .secondbrain-subtitle {
    color: var(--petrol-soft);
    font-weight: 600;
    font-size: var(--text-xl);
  }

  .text-petrol {
    color: var(--petrol-soft);
  }

  .text-violet {
    color: var(--petrol-main);
  }

  .product-hero-secondbrain .hero-cta-btn {
    margin-top: var(--space-6);
    border-radius: 50px;
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-base);
    font-weight: 600;
  }

  .concept-grid-reverse {
    direction: rtl;
  }

  .concept-grid-reverse > * {
    direction: ltr;
  }

  /* Brain Preview - Softer, friendlier */
  .brain-preview {
    position: relative;
    aspect-ratio: 3/2;
    background: linear-gradient(135deg,
      var(--warm-bg-medium) 0%,
      var(--warm-bg-light) 100%
    );
    border: 2px solid var(--warm-border);
    border-radius: 24px;
    overflow: hidden;
  }

  .brain-connections {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .brain-connections line {
    stroke: var(--petrol-soft) !important;
    stroke-width: 2;
    opacity: 0.4;
  }

  .brain-node {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--warm-bg-dark);
    border: 2px solid var(--warm-border);
    border-radius: 16px;
    color: var(--petrol-soft);
    transition: all 0.3s ease;
  }

  .brain-node:hover {
    border-color: var(--petrol-main);
    box-shadow: var(--shadow-glow-petrol);
    transform: translateY(-2px);
  }

  .brain-node svg {
    width: 20px;
    height: 20px;
  }

  .brain-node-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--petrol-main) 0%, var(--petrol-soft) 100%);
    color: white;
    font-size: var(--text-xs);
    font-weight: var(--font-medium);
    border: none;
    box-shadow: 0 8px 24px rgba(20, 145, 155, 0.3);
  }

  .brain-node-center:hover {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 12px 32px rgba(20, 145, 155, 0.4);
  }

  .brain-node-center svg {
    width: 32px;
    height: 32px;
  }

  .brain-center-logo {
    width: 36px;
    height: 36px;
  }

  .brain-node-1 {
    top: 10%;
    left: 15%;
    width: 48px;
    height: 48px;
  }

  .brain-node-2 {
    top: 10%;
    right: 15%;
    width: 48px;
    height: 48px;
  }

  .brain-node-3 {
    bottom: 10%;
    left: 15%;
    width: 48px;
    height: 48px;
  }

  .brain-node-4 {
    bottom: 10%;
    right: 15%;
    width: 48px;
    height: 48px;
  }

  /* Examples Grid - Chat bubble style */
  .examples-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-5);
  }

  .example-card {
    padding: var(--space-6);
    background: var(--warm-bg-medium);
    border: 1px solid var(--warm-border);
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .example-card-secondbrain {
    border-left: 4px solid var(--petrol-soft);
  }

  .example-card-secondbrain:hover {
    border-color: var(--petrol-soft);
    background: var(--warm-bg-light);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(20, 145, 155, 0.15);
  }

  .example-prompt {
    font-size: var(--text-base);
    font-family: var(--font-playful);
    color: var(--text-secondary);
    margin-bottom: var(--space-4);
    line-height: 1.6;
    font-style: italic;
  }

  .example-result {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    font-size: var(--text-sm);
    color: var(--petrol-main);
    font-weight: 600;
  }

  .example-result svg {
    flex-shrink: 0;
  }

  /* Features Grid */
  .features-grid-6 {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Feature Cards - Cozy style */
  .feature-card-secondbrain {
    background: var(--warm-bg-medium);
    border: 1px solid var(--warm-border);
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .feature-card-secondbrain h4 {
    font-family: var(--font-playful);
    font-weight: 700;
    color: var(--warm-text-primary);
  }

  .feature-card-secondbrain p {
    color: var(--warm-text-secondary);
  }

  .feature-icon-secondbrain {
    width: 52px;
    height: 52px;
    background: linear-gradient(135deg, rgba(20, 145, 155, 0.15) 0%, rgba(69, 196, 176, 0.2) 100%);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--petrol-soft);
    margin-bottom: var(--space-4);
  }

  .feature-card-secondbrain:hover {
    border-color: var(--petrol-soft);
    background: var(--warm-bg-light);
    transform: translateY(-4px);
  }

  .features-grid-secondbrain .feature-card:hover {
    box-shadow: 0 12px 32px rgba(20, 145, 155, 0.2);
  }

  /* Pricing Grid - Friendly cards */
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
    max-width: 900px;
    margin: 0 auto;
  }

  .pricing-grid-3 {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1100px;
  }

  .pricing-card {
    position: relative;
    background: var(--warm-bg-medium);
    border: 2px solid var(--warm-border);
    border-radius: 24px;
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }

  .pricing-card:hover {
    border-color: var(--warm-border-hover);
    transform: translateY(-4px);
  }

  .pricing-card-ownkey {
    border-color: var(--petrol-muted);
  }

  .pricing-card-ownkey:hover {
    border-color: var(--petrol-soft);
    box-shadow: 0 12px 36px rgba(20, 145, 155, 0.15);
  }

  .pricing-card-ownkey .price-amount {
    color: var(--petrol-muted);
  }

  .pricing-card-ownkey .pricing-features li svg {
    color: var(--petrol-muted);
  }

  .pricing-card-pro {
    border-color: var(--petrol-soft);
    background: linear-gradient(180deg,
      var(--warm-bg-light) 0%,
      var(--warm-bg-medium) 100%
    );
  }

  .pricing-card-pro:hover {
    box-shadow: 0 16px 48px rgba(20, 145, 155, 0.25);
  }

  .pricing-badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, var(--petrol-main) 0%, var(--petrol-soft) 100%);
    color: white;
    font-size: var(--text-xs);
    font-family: var(--font-playful);
    font-weight: 700;
    padding: var(--space-2) var(--space-5);
    border-radius: 50px;
  }

  .pricing-header {
    text-align: center;
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-6);
    border-bottom: 1px solid var(--warm-border);
  }

  .pricing-name {
    font-size: var(--text-xl);
    font-family: var(--font-playful);
    font-weight: 700;
    margin-bottom: var(--space-4);
    color: var(--warm-text-primary);
  }

  .pricing-price {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: var(--space-2);
    margin-bottom: var(--space-2);
  }

  .price-amount {
    font-size: var(--text-4xl);
    font-family: var(--font-playful);
    font-weight: 700;
    color: var(--warm-text-primary);
  }

  .pricing-card-byok .price-amount {
    color: var(--petrol-muted);
  }

  .pricing-card-pro .price-amount {
    color: var(--petrol-soft);
  }

  .price-period {
    font-size: var(--text-sm);
    color: var(--warm-text-muted);
  }

  .pricing-desc {
    font-size: var(--text-sm);
    color: var(--warm-text-muted);
  }

  .pricing-includes {
    font-size: var(--text-sm);
    color: var(--petrol-soft);
    margin-bottom: var(--space-4);
    font-weight: 600;
  }

  .pricing-features {
    list-style: none;
    padding: 0;
    margin: 0 0 var(--space-6) 0;
    flex-grow: 1;
  }

  .pricing-features li {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    font-size: var(--text-sm);
    color: var(--warm-text-secondary);
    margin-bottom: var(--space-4);
    font-family: var(--font-playful);
  }

  .pricing-features li svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: var(--warm-text-muted);
  }

  .pricing-card-byok .pricing-features li svg {
    color: var(--petrol-muted);
  }

  .pricing-card-pro .pricing-features li svg {
    color: var(--petrol-soft);
  }

  .pricing-limitation {
    color: var(--warm-text-muted) !important;
    opacity: 0.7;
  }

  .pricing-limitation svg {
    color: #ef4444 !important;
  }

  .pricing-note {
    font-size: var(--text-xs);
    color: var(--warm-text-muted);
    font-style: italic;
    margin-bottom: var(--space-4);
    text-align: center;
  }

  .pricing-cta {
    width: 100%;
    text-align: center;
    margin-top: auto;
    border-radius: 50px;
    font-family: var(--font-playful);
    font-weight: 600;
  }

  /* Secondary Petrol Button */
  .btn-secondary-petrol {
    background: transparent;
    color: var(--petrol-soft);
    border: 2px solid var(--petrol-muted);
    border-radius: 50px;
  }

  .btn-secondary-petrol:hover {
    background: rgba(20, 145, 155, 0.1);
    border-color: var(--petrol-soft);
    color: var(--petrol-soft);
  }

  /* Secondary Button Override for warm theme */
  .product-hero-secondbrain ~ section .btn-secondary {
    background: transparent;
    color: var(--warm-text-secondary);
    border: 2px solid var(--warm-border);
    border-radius: 50px;
  }

  .product-hero-secondbrain ~ section .btn-secondary:hover {
    background: var(--warm-bg-light);
    border-color: var(--warm-border-hover);
    color: var(--warm-text-primary);
  }


  /* Timeline - Pocket Assistant */
  .timeline-pocket {
    display: flex;
    flex-direction: column;
    gap: 0;
    max-width: 600px;
    margin: 0 auto;
  }

  .timeline-item {
    display: flex;
    align-items: flex-start;
    gap: var(--space-4);
    position: relative;
    padding-bottom: var(--space-6);
  }

  .timeline-item:not(.last)::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 32px;
    bottom: 0;
    width: 2px;
    background: var(--warm-border);
  }

  .timeline-item.done:not(.last)::before {
    background: var(--petrol-main);
  }

  .timeline-item.current::before {
    background: linear-gradient(to bottom, var(--petrol-soft) 0%, var(--warm-border) 100%);
  }

  .timeline-marker {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    background: var(--warm-bg-medium);
    border: 2px solid var(--warm-border);
  }

  .timeline-item.done .timeline-marker {
    background: var(--petrol-main);
    border-color: var(--petrol-main);
    color: white;
  }

  .timeline-item.done .timeline-marker svg {
    width: 16px;
    height: 16px;
  }

  .timeline-item.current .timeline-marker {
    background: var(--warm-bg-dark);
    border-color: var(--petrol-soft);
    border-width: 3px;
  }

  .pulse-dot {
    width: 12px;
    height: 12px;
    background: var(--petrol-soft);
    border-radius: 50%;
    animation: pulseDot 2s ease-in-out infinite;
  }

  @keyframes pulseDot {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(69, 196, 176, 0.4);
    }
    50% {
      transform: scale(1.1);
      box-shadow: 0 0 0 8px rgba(69, 196, 176, 0);
    }
  }

  .timeline-item.upcoming .timeline-marker {
    border-color: var(--petrol-muted);
  }

  .timeline-item.future .timeline-marker {
    border-color: var(--warm-border);
    opacity: 0.6;
  }

  .timeline-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    padding-top: var(--space-1);
  }

  .timeline-title {
    font-family: var(--font-playful);
    font-weight: 600;
    font-size: var(--text-base);
    color: var(--warm-text-primary);
  }

  .timeline-item.done .timeline-title {
    color: var(--warm-text-muted);
  }

  .timeline-item.current .timeline-title {
    color: var(--petrol-soft);
    font-size: var(--text-lg);
  }

  .timeline-item.future .timeline-title {
    opacity: 0.6;
  }

  .timeline-desc {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--warm-text-muted);
  }

  .timeline-item.future .timeline-desc {
    opacity: 0.5;
  }

  /* Button Petrol variant */
  .btn-primary-violet {
    background: linear-gradient(135deg, var(--petrol-main) 0%, var(--petrol-soft) 100%);
    color: white;
    border: none;
    border-radius: 50px;
    font-family: var(--font-playful);
    font-weight: 600;
    box-shadow: 0 4px 16px rgba(20, 145, 155, 0.3);
  }

  .btn-primary-violet:hover {
    background: linear-gradient(135deg, var(--petrol-dark) 0%, var(--petrol-main) 100%);
    color: white;
    box-shadow: 0 8px 24px rgba(20, 145, 155, 0.4);
    transform: translateY(-2px);
  }

  /* CTA Section */
  .cta-section {
    background: linear-gradient(180deg,
      var(--warm-bg-medium) 0%,
      var(--warm-bg-light) 100%
    );
  }

  .cta-content h2 {
    font-family: var(--font-playful);
    font-weight: 700;
    color: var(--warm-text-primary);
  }

  /* Section alternating backgrounds */
  .section-alt {
    background: var(--warm-bg-medium);
  }

  /* Labels with Petrol */
  .product-hero-secondbrain ~ section .label {
    color: var(--petrol-soft);
    font-weight: 600;
  }

  /* Section headers */
  .product-hero-secondbrain ~ section .section-header h2 {
    color: var(--warm-text-primary);
  }

  .section-header-center {
    text-align: center;
    max-width: 700px;
    margin: 0 auto var(--space-10);
  }

  .section-subtitle {
    font-size: var(--text-lg);
    color: var(--warm-text-muted);
    margin-top: var(--space-3);
    font-family: var(--font-playful);
  }

  /* Problem Section */
  .problem-section {
    background: var(--warm-bg-dark);
  }

  .problem-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-6);
    margin-bottom: var(--space-10);
  }

  .problem-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--space-4);
    padding: var(--space-6);
    background: var(--warm-bg-medium);
    border: 1px solid var(--warm-border);
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .problem-item:hover {
    border-color: rgba(239, 68, 68, 0.3);
    transform: translateY(-4px);
  }

  .problem-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(239, 68, 68, 0.1);
    border-radius: 16px;
    color: #ef4444;
  }

  .problem-icon svg {
    width: 28px;
    height: 28px;
  }

  .problem-item span {
    font-family: var(--font-playful);
    font-size: var(--text-base);
    color: var(--warm-text-secondary);
    font-weight: 500;
  }

  .problem-quote {
    text-align: center;
    font-family: var(--font-playful);
    font-size: var(--text-xl);
    font-style: italic;
    color: var(--warm-text-muted);
    padding: var(--space-6) var(--space-8);
    border-left: 4px solid rgba(239, 68, 68, 0.4);
    background: var(--warm-bg-medium);
    border-radius: 0 16px 16px 0;
    max-width: 700px;
    margin: 0 auto;
  }

  /* Solution Section */
  .solution-section {
    background: var(--warm-bg-medium);
  }

  .solution-section .section-header-center h2 {
    color: var(--petrol-soft);
  }

  /* Flow Visualisierung */
  .flow-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-4);
    margin-bottom: var(--space-12);
    padding: var(--space-8) var(--space-4);
    background: var(--warm-bg-dark);
    border: 1px solid var(--warm-border);
    border-radius: 24px;
  }

  .flow-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-5);
    background: var(--warm-bg-medium);
    border: 2px solid var(--warm-border);
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .flow-step:hover {
    border-color: var(--petrol-soft);
    transform: translateY(-4px);
  }

  .flow-step-input {
    border-color: rgba(69, 196, 176, 0.3);
  }

  .flow-step-brain {
    padding: var(--space-6);
    background: linear-gradient(135deg, rgba(20, 145, 155, 0.1) 0%, rgba(69, 196, 176, 0.15) 100%);
    border-color: var(--petrol-soft);
  }

  .flow-step-output {
    border-color: rgba(69, 196, 176, 0.3);
  }

  .flow-icons {
    display: flex;
    gap: var(--space-3);
  }

  .flow-icons svg {
    width: 28px;
    height: 28px;
    color: var(--petrol-soft);
    opacity: 0.8;
  }

  .flow-brain-logo {
    width: 56px;
    height: 56px;
    filter: drop-shadow(0 4px 12px rgba(20, 145, 155, 0.3));
  }

  .flow-arrow {
    color: var(--petrol-soft);
    opacity: 0.6;
  }

  .flow-arrow svg {
    width: 32px;
    height: 32px;
  }

  .flow-label {
    font-size: var(--text-xs);
    color: var(--warm-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* 3 Phasen Grid */
  .phases-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-6);
  }

  .phase-card {
    padding: var(--space-6);
    background: var(--warm-bg-dark);
    border: 1px solid var(--warm-border);
    border-radius: 20px;
    position: relative;
    transition: all 0.3s ease;
  }

  .phase-card:hover {
    border-color: var(--petrol-soft);
    transform: translateY(-4px);
  }

  .phase-card h3 {
    font-family: var(--font-playful);
    font-size: var(--text-xl);
    color: var(--petrol-soft);
    margin-bottom: var(--space-3);
  }

  .phase-number {
    position: absolute;
    top: -12px;
    left: var(--space-6);
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--petrol-main) 0%, var(--petrol-soft) 100%);
    color: white;
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: 700;
    border-radius: 50%;
  }

  .phase-desc {
    font-family: var(--font-playful);
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--warm-text-primary);
    margin-bottom: var(--space-4);
  }

  .phase-features {
    font-size: var(--text-sm);
    color: var(--warm-text-secondary);
    margin-bottom: var(--space-3);
  }

  .phase-highlight {
    font-size: var(--text-sm);
    color: var(--petrol-soft);
    font-weight: 600;
    padding: var(--space-3);
    background: rgba(69, 196, 176, 0.1);
    border-radius: 8px;
    border-left: 3px solid var(--petrol-soft);
  }

  .phase-example {
    font-size: var(--text-sm);
    color: var(--warm-text-secondary);
    font-style: italic;
    padding: var(--space-2) 0;
    border-bottom: 1px dashed var(--warm-border);
  }

  .phase-example:last-child {
    border-bottom: none;
  }

  /* Briefing Section */
  .briefing-section {
    background: var(--warm-bg-dark);
  }

  .briefing-intro {
    text-align: center;
    max-width: 700px;
    margin: 0 auto var(--space-10);
    font-size: var(--text-lg);
    color: var(--warm-text-secondary);
  }

  .briefing-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-6);
  }

  .briefing-item {
    text-align: center;
    padding: var(--space-6);
    background: var(--warm-bg-medium);
    border: 1px solid var(--warm-border);
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .briefing-item:hover {
    border-color: rgba(69, 196, 176, 0.3);
    transform: translateY(-4px);
  }

  .briefing-icon {
    width: 56px;
    height: 56px;
    margin: 0 auto var(--space-4);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(69, 196, 176, 0.1);
    border-radius: 16px;
    color: var(--petrol-soft);
  }

  .briefing-icon svg {
    width: 28px;
    height: 28px;
  }

  .briefing-item h4 {
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
    margin-bottom: var(--space-2);
  }

  .briefing-item p {
    font-size: var(--text-sm);
    color: var(--warm-text-muted);
  }

  /* Usecase Section */
  .usecase-intro {
    text-align: center;
    max-width: 700px;
    margin: 0 auto var(--space-10);
    font-size: var(--text-lg);
    color: var(--warm-text-secondary);
  }

  .usecase-highlight {
    display: flex;
    gap: var(--space-6);
    padding: var(--space-8);
    background: var(--warm-bg-dark);
    border: 1px solid var(--warm-border);
    border-left: 4px solid var(--petrol-soft);
    border-radius: 0 20px 20px 0;
    margin-bottom: var(--space-10);
  }

  .usecase-highlight-icon {
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(69, 196, 176, 0.1);
    border-radius: 16px;
    color: var(--petrol-soft);
  }

  .usecase-highlight-icon svg {
    width: 32px;
    height: 32px;
  }

  .usecase-highlight-content h4 {
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
    margin-bottom: var(--space-2);
  }

  .usecase-highlight-content p {
    color: var(--warm-text-secondary);
    line-height: 1.7;
  }

  .usecase-ideas h4 {
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
    margin-bottom: var(--space-6);
    text-align: center;
  }

  .usecase-ideas-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: var(--space-4);
  }

  .usecase-idea {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-4);
    background: var(--warm-bg-dark);
    border: 1px solid var(--warm-border);
    border-radius: 16px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .usecase-idea:hover {
    border-color: rgba(69, 196, 176, 0.3);
  }

  .usecase-idea svg {
    color: var(--petrol-soft);
  }

  .usecase-idea span {
    font-size: var(--text-sm);
    color: var(--warm-text-secondary);
  }

  /* Power Section */
  .power-section {
    background: var(--warm-bg-dark);
  }

  .power-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: center;
  }

  .power-content h2 {
    margin-top: var(--space-4);
    color: var(--warm-text-primary);
  }

  .power-subtitle {
    font-family: var(--font-playful);
    font-size: var(--text-xl);
    color: var(--petrol-soft);
    margin-bottom: var(--space-4);
  }

  .power-content > p {
    color: var(--warm-text-secondary);
    margin-bottom: var(--space-6);
  }

  .power-example {
    background: var(--warm-bg-medium);
    border: 1px solid var(--warm-border);
    border-radius: 16px;
    padding: var(--space-6);
  }

  .power-example blockquote {
    font-family: var(--font-playful);
    font-style: italic;
    color: var(--warm-text-primary);
    margin-bottom: var(--space-4);
  }

  .power-result {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    color: var(--petrol-soft);
  }

  .power-result span {
    font-size: var(--text-sm);
  }

  .tools-showcase {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }

  .tools-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: var(--warm-bg-medium);
    border: 2px solid var(--petrol-soft);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 40px rgba(69, 196, 176, 0.2);
  }

  .tools-center img {
    width: 48px;
    height: 48px;
  }

  .tools-orbit {
    position: absolute;
    inset: 0;
    animation: rotate 30s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .tool-badge {
    position: absolute;
    padding: var(--space-2) var(--space-3);
    background: var(--warm-bg-medium);
    border: 1px solid var(--warm-border);
    border-radius: 20px;
    font-size: var(--text-xs);
    font-family: var(--font-mono);
    color: var(--warm-text-secondary);
    animation: counter-rotate 30s linear infinite;
  }

  @keyframes counter-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  .tool-badge-1 { top: 0; left: 50%; transform: translateX(-50%); }
  .tool-badge-2 { top: 20%; right: 0; }
  .tool-badge-3 { bottom: 20%; right: 0; }
  .tool-badge-4 { bottom: 0; left: 50%; transform: translateX(-50%); }
  .tool-badge-5 { bottom: 20%; left: 0; }
  .tool-badge-6 { top: 20%; left: 0; }

  .usecase-ideas-grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Shortcut Section */
  .shortcut-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: center;
  }

  .phone-mockup {
    width: 220px;
    height: 450px;
    margin: 0 auto;
    background: #1a1a1a;
    border-radius: 40px;
    border: 3px solid #333;
    padding: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }

  .phone-screen {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-4);
  }

  .phone-widget {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-4) var(--space-6);
    background: rgba(69, 196, 176, 0.15);
    border: 1px solid rgba(69, 196, 176, 0.3);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .phone-widget:hover {
    background: rgba(69, 196, 176, 0.25);
    transform: scale(1.05);
  }

  .widget-icon {
    width: 32px;
    height: 32px;
  }

  .widget-label {
    font-size: 10px;
    color: var(--warm-text-muted);
  }

  .phone-time {
    font-size: 48px;
    font-weight: 200;
    color: white;
    letter-spacing: -2px;
  }

  .phone-date {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }

  .shortcut-content h2 {
    margin-top: var(--space-4);
    color: var(--warm-text-primary);
  }

  .shortcut-subtitle {
    font-family: var(--font-playful);
    font-size: var(--text-xl);
    color: var(--petrol-soft);
    margin-bottom: var(--space-4);
  }

  .shortcut-content > p {
    color: var(--warm-text-secondary);
    margin-bottom: var(--space-6);
  }

  .shortcut-steps {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .shortcut-step {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4);
    background: var(--warm-bg-dark);
    border: 1px solid var(--warm-border);
    border-radius: 12px;
  }

  .step-number {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(69, 196, 176, 0.1);
    border: 1px solid var(--petrol-soft);
    border-radius: 50%;
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--petrol-soft);
    flex-shrink: 0;
  }

  .shortcut-step span:last-child {
    color: var(--warm-text-secondary);
    font-size: var(--text-sm);
  }

  @media (max-width: 1024px) {
    .briefing-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .usecase-ideas-grid,
    .usecase-ideas-grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }

    .power-grid,
    .shortcut-grid {
      grid-template-columns: 1fr;
      gap: var(--space-10);
    }

    .power-visual {
      order: -1;
    }

    .problem-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .examples-grid {
      grid-template-columns: 1fr;
    }

    .features-grid-6 {
      grid-template-columns: repeat(2, 1fr);
    }

    .pricing-grid,
    .pricing-grid-3 {
      max-width: 500px;
      grid-template-columns: 1fr;
    }

    .hero-logo {
      width: 64px;
      height: 64px;
    }

    .phases-grid {
      grid-template-columns: 1fr;
    }

    .flow-visual {
      flex-direction: column;
      gap: var(--space-3);
    }

    .flow-arrow {
      transform: rotate(90deg);
    }

    .flow-arrow svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 768px) {
    .problem-grid {
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }

    .problem-item {
      padding: var(--space-4);
      border-radius: 16px;
    }

    .problem-quote {
      font-size: var(--text-base);
      padding: var(--space-4) var(--space-5);
    }

    .briefing-grid {
      grid-template-columns: 1fr;
    }

    .usecase-highlight {
      flex-direction: column;
      text-align: center;
    }

    .usecase-ideas-grid,
    .usecase-ideas-grid-3 {
      grid-template-columns: 1fr;
    }

    .tools-showcase {
      width: 250px;
      height: 250px;
    }

    .phone-mockup {
      width: 180px;
      height: 380px;
    }

    .phone-time {
      font-size: 36px;
    }

    .shortcut-visual {
      order: -1;
    }

    .concept-grid-reverse {
      direction: ltr;
    }

    .features-grid-6 {
      grid-template-columns: 1fr;
    }

    .example-card {
      border-radius: 16px;
    }

    .feature-card-secondbrain,
    .pricing-card {
      border-radius: 16px;
    }
  }
`;
