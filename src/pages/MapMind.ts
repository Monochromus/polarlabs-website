import { i18n } from '../utils/translations';
import { router, Route } from '../utils/router';

export function renderMapMindPage(): string {
  return `
    <section class="product-hero product-hero-mapmind">
      <div class="product-hero-background">
        <div class="product-hero-glow"></div>
        <div class="product-hero-lines">
          <svg class="hero-lines-svg" viewBox="0 0 400 300" preserveAspectRatio="none">
            <line x1="0" y1="150" x2="200" y2="100" stroke="var(--aurora-cyan)" stroke-width="0.5" opacity="0.3"/>
            <line x1="200" y1="100" x2="300" y2="180" stroke="var(--aurora-cyan)" stroke-width="0.5" opacity="0.3"/>
            <line x1="300" y1="180" x2="400" y2="120" stroke="var(--aurora-cyan)" stroke-width="0.5" opacity="0.3"/>
            <circle cx="200" cy="100" r="4" fill="var(--aurora-cyan)" opacity="0.5"/>
            <circle cx="300" cy="180" r="3" fill="var(--aurora-cyan)" opacity="0.4"/>
          </svg>
        </div>
      </div>
      <div class="product-hero-content container">
        <span class="label mono text-cyan">// ${i18n.t('products.status.development')}</span>
        <h1 class="product-hero-title">${i18n.t('mapmind.hero.title')}</h1>
        <p class="product-hero-subtitle mono">${i18n.t('mapmind.hero.subtitle')}</p>
        <p class="product-hero-description">${i18n.t('mapmind.hero.description')}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="concept-grid">
          <div class="concept-content">
            <span class="label mono">//01</span>
            <h2>${i18n.t('mapmind.concept.title')}</h2>
            <p>${i18n.t('mapmind.concept.p1')}</p>
            <p>${i18n.t('mapmind.concept.p2')}</p>
            <p>${i18n.t('mapmind.concept.p3')}</p>
          </div>
          <div class="concept-visual">
            <div class="map-preview">
              <div class="map-preview-marker" style="top: 30%; left: 40%;">
                <span class="map-marker-pulse"></span>
              </div>
              <div class="map-preview-marker" style="top: 50%; left: 60%;">
                <span class="map-marker-pulse" style="animation-delay: 0.3s"></span>
              </div>
              <div class="map-preview-marker" style="top: 70%; left: 35%;">
                <span class="map-marker-pulse" style="animation-delay: 0.6s"></span>
              </div>
              <div class="map-preview-grid"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//02</span>
          <h2>${i18n.t('mapmind.examples.title')}</h2>
        </div>
        <div class="examples-list">
          <div class="example-item">
            <span class="example-prompt mono">"${i18n.t('mapmind.example.1')}"</span>
          </div>
          <div class="example-item">
            <span class="example-prompt mono">"${i18n.t('mapmind.example.2')}"</span>
          </div>
          <div class="example-item">
            <span class="example-prompt mono">"${i18n.t('mapmind.example.3')}"</span>
          </div>
          <div class="example-item">
            <span class="example-prompt mono">"${i18n.t('mapmind.example.4')}"</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//03</span>
          <h2>${i18n.t('mapmind.features.title')}</h2>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h4>${i18n.t('mapmind.feature.1.title')}</h4>
            <p>${i18n.t('mapmind.feature.1.desc')}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h4>${i18n.t('mapmind.feature.2.title')}</h4>
            <p>${i18n.t('mapmind.feature.2.desc')}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
                <line x1="15" y1="3" x2="15" y2="21"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="3" y1="15" x2="21" y2="15"/>
              </svg>
            </div>
            <h4>${i18n.t('mapmind.feature.3.title')}</h4>
            <p>${i18n.t('mapmind.feature.3.desc')}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <h4>${i18n.t('mapmind.feature.4.title')}</h4>
            <p>${i18n.t('mapmind.feature.4.desc')}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//04</span>
          <h2>${i18n.t('mapmind.roadmap.title')}</h2>
        </div>
        <div class="roadmap roadmap-mapmind roadmap-8">
          <div class="roadmap-line"></div>
          <div class="roadmap-item" data-status="done">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.mapmind.1')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.mapmind.1.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="done">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.mapmind.2')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.mapmind.2.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="done">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.mapmind.3')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.mapmind.3.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="done">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.mapmind.4')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.mapmind.4.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="current">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.mapmind.5')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.mapmind.5.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="upcoming">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.mapmind.6')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.mapmind.6.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="future">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.mapmind.7')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.mapmind.7.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="future">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.mapmind.8')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.mapmind.8.desc')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>${i18n.t('mapmind.cta')}</h2>
          <a href="/contact" class="btn btn-primary btn-lg" data-link>${i18n.t('nav.contact')}</a>
        </div>
      </div>
    </section>
  `;
}

export function initMapMindPage(): void {
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

export const mapMindStyles = `
  .product-hero {
    position: relative;
    min-height: 70vh;
    display: flex;
    align-items: center;
    padding-top: 64px;
    overflow: hidden;
  }

  .product-hero-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .product-hero-mapmind .product-hero-glow {
    position: absolute;
    top: 30%;
    right: 10%;
    width: 400px;
    height: 300px;
    background: radial-gradient(ellipse, rgba(77, 238, 234, 0.1) 0%, transparent 70%);
    filter: blur(60px);
  }

  .product-hero-lines {
    position: absolute;
    inset: 0;
    opacity: 0.5;
  }

  .hero-lines-svg {
    width: 100%;
    height: 100%;
  }

  .product-hero-content {
    position: relative;
    z-index: 1;
    max-width: 700px;
  }

  .product-hero-title {
    font-size: clamp(var(--text-4xl), 6vw, var(--text-6xl));
    margin: var(--space-4) 0;
    font-weight: var(--font-light);
  }

  .product-hero-subtitle {
    font-size: var(--text-lg);
    color: var(--aurora-cyan);
    margin-bottom: var(--space-6);
  }

  .product-hero-description {
    font-size: var(--text-lg);
    line-height: 1.7;
  }

  /* Concept Section */
  .concept-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: center;
  }

  .concept-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .concept-content h2 {
    margin-top: var(--space-2);
  }

  .concept-visual {
    position: relative;
  }

  .map-preview {
    position: relative;
    aspect-ratio: 4/3;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .map-preview-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, var(--border) 1px, transparent 1px),
      linear-gradient(to bottom, var(--border) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.5;
  }

  .map-preview-marker {
    position: absolute;
    width: 12px;
    height: 12px;
    background: var(--aurora-cyan);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .map-marker-pulse {
    position: absolute;
    inset: -4px;
    border: 2px solid var(--aurora-cyan);
    border-radius: 50%;
    animation: markerPulse 2s ease-out infinite;
  }

  @keyframes markerPulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  /* Section Alt */
  .section-alt {
    background: var(--surface);
  }

  /* Examples */
  .examples-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .example-item {
    padding: var(--space-6);
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    border-left: 2px solid var(--aurora-cyan);
    transition: border-color var(--transition-fast);
  }

  .example-item:hover {
    border-left-color: var(--aurora-cyan);
    border-color: var(--aurora-cyan);
  }

  .example-prompt {
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }

  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-6);
  }

  .feature-card {
    padding: var(--space-6);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    transition: border-color var(--transition-fast);
  }

  .feature-card:hover {
    border-color: var(--border-hover);
  }

  .feature-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-4);
    color: var(--aurora-cyan);
  }

  .feature-icon svg {
    width: 24px;
    height: 24px;
  }

  .feature-card h4 {
    margin-bottom: var(--space-2);
    font-size: var(--text-base);
  }

  .feature-card p {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }

  /* Roadmap */
  .roadmap {
    position: relative;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: var(--space-4);
    padding-top: var(--space-8);
  }

  .roadmap-line {
    position: absolute;
    top: calc(var(--space-8) + 6px);
    left: 0;
    right: 0;
    height: 2px;
    background: var(--border);
  }

  .roadmap-8 {
    grid-template-columns: repeat(8, 1fr);
  }

  .roadmap-mapmind .roadmap-line::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 56%;
    height: 100%;
    background: var(--aurora-cyan);
  }

  .roadmap-mapmind [data-status="done"] .roadmap-node {
    border-color: var(--aurora-cyan);
    background: var(--aurora-cyan);
  }

  .roadmap-mapmind [data-status="done"] .roadmap-title {
    color: var(--text-muted);
  }

  .roadmap-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: 0;
    transform: translateY(10px);
    transition: all var(--transition-slow);
  }

  .roadmap-item.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .roadmap-node {
    width: 14px;
    height: 14px;
    background: var(--background);
    border: 2px solid var(--border);
    border-radius: 50%;
    margin-bottom: var(--space-4);
    z-index: 1;
    transition: all var(--transition-fast);
  }

  .roadmap-mapmind [data-status="current"] .roadmap-node {
    border-color: var(--aurora-cyan);
    background: var(--aurora-cyan);
    box-shadow: 0 0 10px var(--aurora-cyan);
  }

  .roadmap-mapmind [data-status="upcoming"] .roadmap-node {
    border-color: var(--aurora-cyan);
  }

  .roadmap-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .roadmap-title {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--text-primary);
  }

  .roadmap-desc {
    font-size: var(--text-xs);
    color: var(--text-muted);
  }

  /* CTA Section */
  .cta-section {
    text-align: center;
  }

  .cta-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-6);
  }

  .btn-lg {
    padding: var(--space-4) var(--space-10);
    font-size: var(--text-base);
  }

  @media (max-width: 1024px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .roadmap {
      grid-template-columns: repeat(3, 1fr);
      row-gap: var(--space-8);
    }

    .roadmap-line {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .concept-grid {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .roadmap {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
