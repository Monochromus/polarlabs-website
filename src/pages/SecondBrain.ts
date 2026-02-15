import { i18n } from '../utils/translations';
// @ts-ignore
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
        <a href="#experience" class="btn btn-primary-violet btn-lg hero-cta-btn scroll-to-exp">${i18n.t('products.learnmore')}</a>
      </div>
    </section>

    <section id="experience" class="experience-section">
      <div class="container-fluid">
        <!-- Module Navigation -->
        <div class="module-nav-wrapper">
          <nav class="module-nav">
            <button class="module-nav-btn active" data-module="vision">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"></circle><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path></svg>
              <span>Vision</span>
            </button>
            <button class="module-nav-btn" data-module="brain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8v3H8v-3c-3-1.5-5-4.5-5-8a9 9 0 0 1 9-9z"></path></svg>
              <span>Brain</span>
            </button>
            <button class="module-nav-btn" data-module="utility">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              <span>Utility</span>
            </button>
            <button class="module-nav-btn" data-module="engine">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              <span>Engine</span>
            </button>
            <button class="module-nav-btn" data-module="future">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M9 18l6-6-6-6"></path></svg>
              <span>Future</span>
            </button>
          </nav>
        </div>

        <!-- Module Content Container -->
        <div class="module-content-viewport container">
          
          <!-- Module: Vision -->
          <div class="module-panel active" id="module-vision">
            <div class="panel-header text-center">
              <span class="label mono">// VISION</span>
              <h2>${i18n.t('secondbrain.problem.title')}</h2>
              <p class="section-subtitle">${i18n.t('secondbrain.problem.subtitle')}</p>
            </div>
            
            <div class="problem-grid">
              <div class="problem-item">
                <div class="problem-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <span>${i18n.t('secondbrain.problem.item1')}</span>
              </div>
              <div class="problem-item">
                <div class="problem-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
                </div>
                <span>${i18n.t('secondbrain.problem.item2')}</span>
              </div>
              <div class="problem-item">
                <div class="problem-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                </div>
                <span>${i18n.t('secondbrain.problem.item3')}</span>
              </div>
              <div class="problem-item">
                <div class="problem-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <span>${i18n.t('secondbrain.problem.item4')}</span>
              </div>
            </div>
            <blockquote class="problem-quote">${i18n.t('secondbrain.problem.quote')}</blockquote>

            <div class="panel-divider"></div>

            <div class="panel-header text-center">
              <h2>${i18n.t('secondbrain.solution.title')}</h2>
              <p class="section-subtitle">${i18n.t('secondbrain.solution.subtitle')}</p>
            </div>

            <div class="flow-visual">
              <div class="flow-step">
                <div class="flow-icons">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>
                <span class="flow-label mono">Input</span>
              </div>
              <div class="flow-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              <div class="flow-step flow-step-brain">
                <img src="/pocket_assistent_logo.svg" alt="Pocket Assistant" class="flow-brain-logo" />
                <span class="flow-label mono">AI Brain</span>
              </div>
              <div class="flow-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              <div class="flow-step">
                <div class="flow-icons">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <span class="flow-label mono">Output</span>
              </div>
            </div>
          </div>

          <!-- Module: Brain -->
          <div class="module-panel" id="module-brain">
             <div class="panel-header text-center">
              <span class="label mono">// THE BRAIN</span>
              <h2>${i18n.t('secondbrain.concept.title')}</h2>
            </div>
            
            <div class="phases-grid">
              <div class="phase-card">
                <div class="phase-number">1</div>
                <h3>${i18n.t('secondbrain.phase.1.title')}</h3>
                <p class="phase-desc">${i18n.t('secondbrain.phase.1.desc')}</p>
                <p class="phase-features">${i18n.t('secondbrain.phase.1.features')}</p>
                <p class="phase-highlight">${i18n.t('secondbrain.phase.1.highlight')}</p>
              </div>
              <div class="phase-card">
                <div class="phase-number">2</div>
                <h3>${i18n.t('secondbrain.phase.2.title')}</h3>
                <p class="phase-desc">${i18n.t('secondbrain.phase.2.desc')}</p>
                <p class="phase-example">${i18n.t('secondbrain.phase.2.example')}</p>
              </div>
              <div class="phase-card">
                <div class="phase-number">3</div>
                <h3>${i18n.t('secondbrain.phase.3.title')}</h3>
                <p class="phase-desc">${i18n.t('secondbrain.phase.3.desc')}</p>
                <p class="phase-example">${i18n.t('secondbrain.phase.3.example1')}</p>
                <p class="phase-example">${i18n.t('secondbrain.phase.3.example2')}</p>
              </div>
            </div>

            <div class="panel-divider"></div>

            <div class="panel-header text-center">
              <h2>${i18n.t('secondbrain.examples.title')}</h2>
            </div>

            <div class="examples-grid">
              <div class="example-card">
                <div class="example-prompt mono">"${i18n.t('secondbrain.example.1')}"</div>
                <div class="example-result">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span class="mono">${i18n.t('secondbrain.example.1.result')}</span>
                </div>
              </div>
              <div class="example-card">
                <div class="example-prompt mono">"${i18n.t('secondbrain.example.2')}"</div>
                <div class="example-result">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span class="mono">${i18n.t('secondbrain.example.2.result')}</span>
                </div>
              </div>
              <div class="example-card">
                <div class="example-prompt mono">"${i18n.t('secondbrain.example.3')}"</div>
                <div class="example-result">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span class="mono">${i18n.t('secondbrain.example.3.result')}</span>
                </div>
              </div>
              <div class="example-card">
                <div class="example-prompt mono">"${i18n.t('secondbrain.example.4')}"</div>
                <div class="example-result">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span class="mono">${i18n.t('secondbrain.example.4.result')}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Module: Utility -->
          <div class="module-panel" id="module-utility">
            <div class="panel-header text-center">
              <span class="label mono">// UTILITY</span>
              <h2>${i18n.t('secondbrain.briefing.title')}</h2>
              <p class="section-subtitle">${i18n.t('secondbrain.briefing.subtitle')}</p>
            </div>
            <p class="briefing-intro text-center">${i18n.t('secondbrain.briefing.desc')}</p>
            <div class="briefing-grid">
              <div class="briefing-item">
                <div class="briefing-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="4"/></svg>
                </div>
                <h4>${i18n.t('secondbrain.briefing.weather')}</h4>
                <p>${i18n.t('secondbrain.briefing.weather.desc')}</p>
              </div>
              <div class="briefing-item">
                <div class="briefing-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h4>${i18n.t('secondbrain.briefing.events')}</h4>
                <p>${i18n.t('secondbrain.briefing.events.desc')}</p>
              </div>
              <div class="briefing-item">
                <div class="briefing-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1"/><path d="M18 14h4v4"/><path d="M15 11l7 7"/><line x1="7" y1="8" x2="13" y2="8"/><line x1="7" y1="12" x2="11" y2="12"/></svg>
                </div>
                <h4>${i18n.t('secondbrain.briefing.news')}</h4>
                <p>${i18n.t('secondbrain.briefing.news.desc')}</p>
              </div>
              <div class="briefing-item">
                <div class="briefing-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>
                </div>
                <h4>${i18n.t('secondbrain.briefing.calendar')}</h4>
                <p>${i18n.t('secondbrain.briefing.calendar.desc')}</p>
              </div>
            </div>

            <div class="panel-divider"></div>

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
                  <div class="shortcut-step"><span class="step-number">1</span><span>${i18n.t('secondbrain.shortcut.step1')}</span></div>
                  <div class="shortcut-step"><span class="step-number">2</span><span>${i18n.t('secondbrain.shortcut.step2')}</span></div>
                  <div class="shortcut-step"><span class="step-number">3</span><span>${i18n.t('secondbrain.shortcut.step3')}</span></div>
                  <div class="shortcut-step"><span class="step-number">4</span><span>${i18n.t('secondbrain.shortcut.step4')}</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Module: Engine -->
          <div class="module-panel" id="module-engine">
            <div class="panel-header text-center">
              <span class="label mono">// ENGINE</span>
              <h2>${i18n.t('secondbrain.features.title')}</h2>
            </div>

            <div class="features-grid">
              <div class="feature-card feature-card-secondbrain">
                <div class="feature-icon feature-icon-secondbrain">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8v3H8v-3c-3-1.5-5-4.5-5-8a9 9 0 0 1 9-9z"/><path d="M12 2v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M19.07 4.93l-2.83 2.83"/></svg>
                </div>
                <h4>${i18n.t('secondbrain.feature.1.title')}</h4>
                <p>${i18n.t('secondbrain.feature.1.desc')}</p>
              </div>
              <div class="feature-card feature-card-secondbrain">
                <div class="feature-icon feature-icon-secondbrain">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <h4>${i18n.t('secondbrain.feature.2.title')}</h4>
                <p>${i18n.t('secondbrain.feature.2.desc')}</p>
              </div>
              <div class="feature-card feature-card-secondbrain">
                <div class="feature-icon feature-icon-secondbrain">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <h4>${i18n.t('secondbrain.feature.3.title')}</h4>
                <p>${i18n.t('secondbrain.feature.3.desc')}</p>
              </div>
              <div class="feature-card feature-card-secondbrain">
                <div class="feature-icon feature-icon-secondbrain">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <h4>${i18n.t('secondbrain.feature.4.title')}</h4>
                <p>${i18n.t('secondbrain.feature.4.desc')}</p>
              </div>
              <div class="feature-card feature-card-secondbrain">
                <div class="feature-icon feature-icon-secondbrain">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                </div>
                <h4>${i18n.t('secondbrain.feature.5.title')}</h4>
                <p>${i18n.t('secondbrain.feature.5.desc')}</p>
              </div>
              <div class="feature-card feature-card-secondbrain">
                <div class="feature-icon feature-icon-secondbrain">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                </div>
                <h4>${i18n.t('secondbrain.feature.6.title')}</h4>
                <p>${i18n.t('secondbrain.feature.6.desc')}</p>
              </div>
            </div>

            <div class="panel-divider"></div>

            <div class="changelog-container">
              <div class="section-header text-center">
                <h2>${i18n.t('secondbrain.changelog.title')}</h2>
                <p class="section-subtitle">${i18n.t('secondbrain.changelog.subtitle')}</p>
              </div>
              <div id="github-changelog" class="changelog-list">
                <div class="changelog-loading"><div class="loading-spinner"></div><span>${i18n.t('secondbrain.changelog.loading')}</span></div>
              </div>
              <div class="changelog-footer">
                <a href="https://github.com/Monochromus/PocketAssistent" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">View on GitHub</a>
              </div>
            </div>
          </div>

          <!-- Module: Future -->
          <div class="module-panel" id="module-future">
            <div class="panel-header text-center">
              <span class="label mono">// FUTURE</span>
              <h2>${i18n.t('secondbrain.roadmap.title')}</h2>
            </div>

            <div class="timeline-pocket">
              <div class="timeline-item done"><div class="timeline-marker"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div class="timeline-content"><span class="timeline-title">${i18n.t('roadmap.secondbrain.1')}</span><span class="timeline-desc">${i18n.t('roadmap.secondbrain.1.desc')}</span></div></div>
              <div class="timeline-item done"><div class="timeline-marker"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div class="timeline-content"><span class="timeline-title">${i18n.t('roadmap.secondbrain.2')}</span><span class="timeline-desc">${i18n.t('roadmap.secondbrain.2.desc')}</span></div></div>
              <div class="timeline-item done"><div class="timeline-marker"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div class="timeline-content"><span class="timeline-title">${i18n.t('roadmap.secondbrain.3')}</span><span class="timeline-desc">${i18n.t('roadmap.secondbrain.3.desc')}</span></div></div>
              <div class="timeline-item done"><div class="timeline-marker"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div class="timeline-content"><span class="timeline-title">${i18n.t('roadmap.secondbrain.4')}</span><span class="timeline-desc">${i18n.t('roadmap.secondbrain.4.desc')}</span></div></div>
              <div class="timeline-item done"><div class="timeline-marker"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div class="timeline-content"><span class="timeline-title">${i18n.t('roadmap.secondbrain.5')}</span><span class="timeline-desc">${i18n.t('roadmap.secondbrain.5.desc')}</span></div></div>
              <div class="timeline-item done"><div class="timeline-marker"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div class="timeline-content"><span class="timeline-title">${i18n.t('roadmap.secondbrain.6')}</span><span class="timeline-desc">${i18n.t('roadmap.secondbrain.6.desc')}</span></div></div>
              <div class="timeline-item done"><div class="timeline-marker"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div class="timeline-content"><span class="timeline-title">${i18n.t('roadmap.secondbrain.7')}</span><span class="timeline-desc">${i18n.t('roadmap.secondbrain.7.desc')}</span></div></div>
              <div class="timeline-item current"><div class="timeline-marker"><div class="pulse-dot"></div></div><div class="timeline-content"><span class="timeline-title">${i18n.t('roadmap.secondbrain.8')}</span><span class="timeline-desc">${i18n.t('roadmap.secondbrain.8.desc')}</span></div></div>
              <div class="timeline-item upcoming"><div class="timeline-marker"></div><div class="timeline-content"><span class="timeline-title">${i18n.t('roadmap.secondbrain.9')}</span><span class="timeline-desc">${i18n.t('roadmap.secondbrain.9.desc')}</span></div></div>
              <div class="timeline-item future"><div class="timeline-marker"></div><div class="timeline-content"><span class="timeline-title">${i18n.t('roadmap.secondbrain.10')}</span><span class="timeline-desc">${i18n.t('roadmap.secondbrain.10.desc')}</span></div></div>
              <div class="timeline-item future last"><div class="timeline-marker"></div><div class="timeline-content"><span class="timeline-title">${i18n.t('roadmap.secondbrain.11')}</span><span class="timeline-desc">${i18n.t('roadmap.secondbrain.11.desc')}</span></div></div>
            </div>

            <div class="panel-divider"></div>

            <div class="section-header text-center">
              <h2>${i18n.t('secondbrain.pricing.title')}</h2>
            </div>
            <div class="pricing-grid pricing-grid-3 pricing-blurred">
              <div class="pricing-card pricing-card-free">
                <div class="pricing-header">
                  <h3 class="pricing-name">${i18n.t('secondbrain.pricing.free')}</h3>
                  <div class="pricing-price"><span class="price-amount">${i18n.t('secondbrain.pricing.free.price')}</span><span class="price-period mono">${i18n.t('secondbrain.pricing.free.period')}</span></div>
                </div>
                <ul class="pricing-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.free.feature.1')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.free.feature.2')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.free.feature.3')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.free.feature.4')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.free.feature.5')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.free.feature.6')}</li>
                </ul>
                <a href="https://pocketassistant.polarlabs.de/login" target="_blank" rel="noopener noreferrer" class="btn btn-secondary pricing-cta">${i18n.t('secondbrain.pricing.cta.free')}</a>
              </div>
              <div class="pricing-card pricing-card-ownkey">
                <div class="pricing-header">
                  <h3 class="pricing-name">${i18n.t('secondbrain.pricing.ownkey')}</h3>
                  <div class="pricing-price"><span class="price-amount">${i18n.t('secondbrain.pricing.ownkey.price')}</span><span class="price-period mono">${i18n.t('secondbrain.pricing.ownkey.period')}</span></div>
                </div>
                <ul class="pricing-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.ownkey.feature.1')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.ownkey.feature.2')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.ownkey.feature.3')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.ownkey.feature.4')}</li>
                </ul>
                <a href="https://pocketassistant.polarlabs.de/login" target="_blank" rel="noopener noreferrer" class="btn btn-secondary-petrol pricing-cta">${i18n.t('secondbrain.pricing.cta.ownkey')}</a>
              </div>
              <div class="pricing-card pricing-card-pro">
                <div class="pricing-badge">${i18n.t('secondbrain.pricing.popular')}</div>
                <div class="pricing-header">
                  <h3 class="pricing-name">${i18n.t('secondbrain.pricing.pro')}</h3>
                  <div class="pricing-price"><span class="price-amount">${i18n.t('secondbrain.pricing.pro.price')}</span><span class="price-period mono">${i18n.t('secondbrain.pricing.pro.period')}</span></div>
                </div>
                <ul class="pricing-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.pro.feature.1')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.pro.feature.2')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.pro.feature.3')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.pro.feature.4')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.pro.feature.5')}</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>${i18n.t('secondbrain.pricing.pro.feature.6')}</li>
                </ul>
                <a href="https://pocketassistant.polarlabs.de/login" target="_blank" rel="noopener noreferrer" class="btn btn-primary-violet pricing-cta">${i18n.t('secondbrain.pricing.cta.pro')}</a>
              </div>
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
  const navBtns = document.querySelectorAll('.module-nav-btn');
  const panels = document.querySelectorAll('.module-panel');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-module');
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      panels.forEach(p => {
        p.classList.remove('active');
        if (p.id === 'module-' + target) p.classList.add('active');
      });
      // Scroll to start of experience section on mobile when switching
      if (window.innerWidth < 768) {
        document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.querySelector('.scroll-to-exp')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
  });

  fetchLatestCommits();
}

async function fetchLatestCommits(): Promise<void> {
  const container = document.getElementById('github-changelog');
  if (!container) return;

  try {
    const response = await fetch('https://api.github.com/repos/Monochromus/PocketAssistent/commits?per_page=5');
    if (!response.ok) throw new Error('Failed to fetch commits');
    const commits = await response.json();
    container.innerHTML = commits.map((c: any) => `
      <div class="changelog-entry">
        <div class="changelog-dot"></div>
        <div class="changelog-meta">
          <span class="changelog-hash mono">${c.sha.substring(0, 7)}</span>
          <span class="changelog-date">${new Date(c.commit.author.date).toLocaleDateString()}</span>
        </div>
        <div class="changelog-message">${c.commit.message.split('\n')[0]}</div>
      </div>
    `).join('');
  } catch (error) {
    container.innerHTML = `<div class="changelog-error">Unable to load live updates.</div>`;
  }
}

export const secondBrainStyles = `
  /* ============================================
     POCKET ASSISTANT - Fixed Modular Style
     ============================================ */

  .product-hero-secondbrain, .product-hero-secondbrain ~ section {
    background-color: var(--warm-bg-dark);
    color: var(--warm-text-primary);
    font-family: var(--font-playful);
  }

  .hero-logo-wrapper { display: flex; justify-content: center; margin-bottom: var(--space-6); }
  .hero-logo { width: 80px; height: 80px; filter: drop-shadow(0 8px 24px rgba(20, 145, 155, 0.3)); animation: logoFloat 4s ease-in-out infinite; }
  @keyframes logoFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

  .experience-section { background: var(--warm-bg-dark); padding: var(--space-12) 0; min-height: 800px; }
  
  .module-nav-wrapper { 
    display: flex; 
    justify-content: center; 
    margin-bottom: var(--space-10); 
    position: sticky; 
    top: 80px; 
    z-index: 100;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: var(--space-2) 0;
    scrollbar-width: none;
  }
  .module-nav-wrapper::-webkit-scrollbar { display: none; }

  .module-nav { 
    display: flex; 
    background: var(--warm-bg-medium); 
    border: 1px solid var(--warm-border); 
    padding: var(--space-1); 
    border-radius: 50px; 
    box-shadow: var(--shadow-lg);
    min-width: max-content;
    margin: 0 auto;
  }

  .module-nav-btn { 
    display: flex; 
    align-items: center; 
    gap: var(--space-2); 
    padding: var(--space-2) var(--space-6); 
    border-radius: 40px; 
    border: none; 
    background: transparent; 
    color: var(--warm-text-muted); 
    font-family: var(--font-playful); 
    font-weight: 600; 
    cursor: pointer; 
    transition: all 0.3s ease;
    white-space: nowrap;
  }
  .module-nav-btn:hover { color: var(--warm-text-primary); background: rgba(255, 255, 255, 0.05); }
  .module-nav-btn.active { background: var(--petrol-soft); color: white; box-shadow: 0 4px 12px rgba(69, 196, 176, 0.3); }

  .module-content-viewport { 
    background: var(--warm-bg-medium); 
    border: 1px solid var(--warm-border); 
    border-radius: 32px; 
    padding: var(--space-10); 
    min-height: 600px;
    width: 100%;
  }

  .module-panel { display: none; animation: slideUp 0.5s ease-out forwards; width: 100%; }
  .module-panel.active { display: block; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  .panel-divider { height: 1px; background: var(--warm-border); margin: var(--space-12) 0; }
  .section-header-center { text-align: center; max-width: 700px; margin: 0 auto var(--space-10); }
  .section-subtitle { font-size: var(--text-lg); color: var(--warm-text-muted); margin-top: var(--space-3); }

  /* Grids */
  .problem-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-6); margin-bottom: var(--space-10); }
  .problem-item { display: flex; flex-direction: column; align-items: center; text-align: center; gap: var(--space-4); padding: var(--space-6); background: var(--warm-bg-dark); border: 1px solid var(--warm-border); border-radius: 20px; }
  .problem-icon { width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; background: rgba(239, 68, 68, 0.1); border-radius: 16px; color: #ef4444; }
  .problem-icon svg { width: 28px; height: 28px; }
  .problem-quote { text-align: center; font-style: italic; color: var(--warm-text-muted); padding: var(--space-6) var(--space-8); border-left: 4px solid rgba(239, 68, 68, 0.4); background: var(--warm-bg-dark); border-radius: 0 16px 16px 0; max-width: 700px; margin: 0 auto; }

  .flow-visual { display: flex; align-items: center; justify-content: center; gap: var(--space-4); margin: var(--space-8) 0; }
  .flow-step { display: flex; flex-direction: column; align-items: center; gap: var(--space-3); padding: var(--space-5); background: var(--warm-bg-dark); border: 2px solid var(--warm-border); border-radius: 20px; }
  .flow-brain-logo { width: 56px; height: 56px; }
  .flow-arrow svg { width: 32px; height: 32px; color: var(--petrol-soft); }

  .phases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
  .phase-card { padding: var(--space-6); background: var(--warm-bg-dark); border: 1px solid var(--warm-border); border-radius: 20px; position: relative; }
  .phase-number { position: absolute; top: -12px; left: var(--space-6); width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: var(--petrol-soft); color: white; border-radius: 50%; font-size: var(--text-sm); font-weight: 700; }
  .phase-highlight { font-size: var(--text-sm); color: var(--petrol-soft); font-weight: 600; padding: var(--space-3); background: rgba(69, 196, 176, 0.1); border-radius: 8px; border-left: 3px solid var(--petrol-soft); margin-top: var(--space-4); }

  .examples-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-5); }
  .example-card { padding: var(--space-6); background: var(--warm-bg-dark); border: 1px solid var(--warm-border); border-radius: 20px; border-left: 4px solid var(--petrol-soft); }
  .example-prompt { color: var(--warm-text-muted); margin-bottom: var(--space-4); font-style: italic; }
  .example-result { display: flex; align-items: center; gap: var(--space-3); color: var(--petrol-soft); font-weight: 600; }

  .briefing-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-6); }
  .briefing-item { text-align: center; padding: var(--space-6); background: var(--warm-bg-dark); border: 1px solid var(--warm-border); border-radius: 20px; }
  .briefing-icon { width: 56px; height: 56px; margin: 0 auto var(--space-4); display: flex; align-items: center; justify-content: center; background: rgba(69, 196, 176, 0.1); border-radius: 16px; color: var(--petrol-soft); }
  .briefing-icon svg { width: 28px; height: 28px; }

  .shortcut-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-16); align-items: center; }
  .phone-mockup { width: 200px; height: 400px; background: #1a1a1a; border-radius: 40px; border: 3px solid #333; padding: 12px; margin: 0 auto; }
  .phone-screen { width: 100%; height: 100%; background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%); border-radius: 32px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--space-4); }
  .phone-widget { background: rgba(69, 196, 176, 0.15); border: 1px solid rgba(69, 196, 176, 0.3); border-radius: 16px; padding: var(--space-4); text-align: center; }
  .widget-icon { width: 32px; height: 32px; }
  .phone-time { font-size: 36px; color: white; font-weight: 200; }
  .shortcut-steps { display: flex; flex-direction: column; gap: var(--space-4); margin-top: var(--space-6); }
  .shortcut-step { display: flex; align-items: center; gap: var(--space-4); padding: var(--space-4); background: var(--warm-bg-dark); border: 1px solid var(--warm-border); border-radius: 12px; }
  .step-number { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: rgba(69, 196, 176, 0.1); border: 1px solid var(--petrol-soft); border-radius: 50%; color: var(--petrol-soft); flex-shrink: 0; }

  .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
  .feature-card-secondbrain { padding: var(--space-6); background: var(--warm-bg-dark); border: 1px solid var(--warm-border); border-radius: 20px; }
  .feature-icon-secondbrain { width: 52px; height: 52px; background: rgba(69, 196, 176, 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; color: var(--petrol-soft); margin-bottom: var(--space-4); }

  .changelog-container { background: var(--warm-bg-dark); border: 1px solid var(--warm-border); border-radius: 24px; padding: var(--space-8); max-width: 800px; margin: 0 auto; }
  .changelog-list { display: flex; flex-direction: column; gap: var(--space-4); margin: var(--space-6) 0; }
  .changelog-entry { display: flex; align-items: center; gap: var(--space-4); padding: var(--space-4); background: var(--warm-bg-medium); border-radius: 16px; border: 1px solid var(--warm-border); }
  .changelog-dot { width: 8px; height: 8px; background: var(--petrol-soft); border-radius: 50%; box-shadow: 0 0 8px var(--petrol-soft); }
  .changelog-meta { display: flex; flex-direction: column; min-width: 100px; font-size: 12px; }
  .changelog-date { color: var(--petrol-soft); font-weight: 600; }
  .changelog-message { color: var(--warm-text-primary); font-size: var(--text-sm); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  .timeline-pocket { display: flex; flex-direction: column; gap: var(--space-4); max-width: 600px; margin: 0 auto; }
  .timeline-item { display: flex; gap: var(--space-4); align-items: flex-start; padding: var(--space-4); background: var(--warm-bg-dark); border-radius: 16px; border: 1px solid var(--warm-border); }
  .timeline-marker { width: 32px; height: 32px; border-radius: 50%; background: var(--warm-bg-medium); border: 2px solid var(--warm-border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .timeline-item.done .timeline-marker { background: var(--petrol-soft); color: white; border-color: var(--petrol-soft); }
  .timeline-item.current .timeline-marker { border-color: var(--petrol-soft); border-width: 3px; }
  .pulse-dot { width: 12px; height: 12px; background: var(--petrol-soft); border-radius: 50%; animation: pulse 2s infinite; }
  @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.7; } }

  .pricing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6); max-width: 900px; margin: 0 auto; }
  .pricing-card { background: var(--warm-bg-dark); border: 2px solid var(--warm-border); border-radius: 24px; padding: var(--space-6); display: flex; flex-direction: column; position: relative; }
  .pricing-card-pro { border-color: var(--petrol-soft); }
  .pricing-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--petrol-soft); color: white; font-size: var(--text-xs); padding: var(--space-2) var(--space-5); border-radius: 50px; font-weight: 700; }
  .pricing-header { text-align: center; margin-bottom: var(--space-6); }
  .price-amount { font-size: var(--text-4xl); font-weight: 700; color: var(--warm-text-primary); }
  .pricing-features { list-style: none; padding: 0; margin-bottom: var(--space-6); flex-grow: 1; }
  .pricing-features li { display: flex; gap: var(--space-3); font-size: var(--text-sm); margin-bottom: var(--space-3); }
  .pricing-blurred { filter: blur(8px); pointer-events: none; user-select: none; opacity: 0.6; }

  .btn-primary-violet { background: linear-gradient(135deg, var(--petrol-main) 0%, var(--petrol-soft) 100%); color: white; border: none; border-radius: 50px; padding: var(--space-3) var(--space-8); cursor: pointer; transition: all 0.3s ease; }
  .btn-primary-violet:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(20, 145, 155, 0.4); }

  .product-hero-secondbrain .hero-cta-btn {
    margin: var(--space-8) auto 0;
    display: block;
    width: max-content;
    border-radius: 50px;
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-base);
    font-weight: 600;
  }
  .btn-primary-violet:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(20, 145, 155, 0.4); }

  @media (max-width: 1024px) { 
    .problem-grid, .phases-grid, .briefing-grid, .features-grid { grid-template-columns: repeat(2, 1fr); } 
  }
  @media (max-width: 768px) { 
    .module-nav-wrapper { top: 60px; padding: 0 var(--space-4); } 
    .module-nav { transform: scale(0.9); } 
    .problem-grid, .phases-grid, .briefing-grid, .features-grid, .pricing-grid, .shortcut-grid, .examples-grid { grid-template-columns: 1fr; } 
    .module-content-viewport { padding: var(--space-6); border-radius: 20px; }
    .flow-visual { flex-direction: column; gap: var(--space-3); }
    .flow-arrow { transform: rotate(90deg); }
    .section-header-center { margin-bottom: var(--space-6); }
  }
`;
