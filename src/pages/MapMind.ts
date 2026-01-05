import { i18n } from '../utils/translations';
import { router, Route } from '../utils/router';

export function renderMapMindPage(): string {
  return `
    <section class="product-hero product-hero-mapmind product-hero-warm">
      <div class="product-hero-background">
        <div class="product-hero-glow"></div>
        <div class="product-hero-orb product-hero-orb-1"></div>
        <div class="product-hero-orb product-hero-orb-2"></div>
        <div class="product-hero-lines">
          <svg class="hero-lines-svg" viewBox="0 0 400 300" preserveAspectRatio="none">
            <line x1="0" y1="150" x2="200" y2="100" stroke="var(--petrol-soft)" stroke-width="0.5" opacity="0.4"/>
            <line x1="200" y1="100" x2="300" y2="180" stroke="var(--petrol-soft)" stroke-width="0.5" opacity="0.4"/>
            <line x1="300" y1="180" x2="400" y2="120" stroke="var(--petrol-soft)" stroke-width="0.5" opacity="0.4"/>
            <circle cx="200" cy="100" r="4" fill="var(--petrol-soft)" opacity="0.6"/>
            <circle cx="300" cy="180" r="3" fill="var(--petrol-soft)" opacity="0.5"/>
          </svg>
        </div>
      </div>
      <div class="product-hero-content container">
        <span class="label mono text-petrol">// ${i18n.t('products.status.development')}</span>
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

    <section class="section section-alt-warm">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//04</span>
          <h2>${i18n.t('mapmind.roadmap.title')}</h2>
        </div>
        <div class="roadmap-vertical">
          <div class="roadmap-vertical-item" data-status="done">
            <div class="roadmap-vertical-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div class="roadmap-vertical-content">
              <span class="roadmap-vertical-title">${i18n.t('roadmap.mapmind.1')}</span>
              <span class="roadmap-vertical-desc mono">${i18n.t('roadmap.mapmind.1.desc')}</span>
            </div>
          </div>
          <div class="roadmap-vertical-item" data-status="done">
            <div class="roadmap-vertical-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div class="roadmap-vertical-content">
              <span class="roadmap-vertical-title">${i18n.t('roadmap.mapmind.2')}</span>
              <span class="roadmap-vertical-desc mono">${i18n.t('roadmap.mapmind.2.desc')}</span>
            </div>
          </div>
          <div class="roadmap-vertical-item" data-status="done">
            <div class="roadmap-vertical-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div class="roadmap-vertical-content">
              <span class="roadmap-vertical-title">${i18n.t('roadmap.mapmind.3')}</span>
              <span class="roadmap-vertical-desc mono">${i18n.t('roadmap.mapmind.3.desc')}</span>
            </div>
          </div>
          <div class="roadmap-vertical-item" data-status="done">
            <div class="roadmap-vertical-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div class="roadmap-vertical-content">
              <span class="roadmap-vertical-title">${i18n.t('roadmap.mapmind.4')}</span>
              <span class="roadmap-vertical-desc mono">${i18n.t('roadmap.mapmind.4.desc')}</span>
            </div>
          </div>
          <div class="roadmap-vertical-item" data-status="done">
            <div class="roadmap-vertical-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div class="roadmap-vertical-content">
              <span class="roadmap-vertical-title">${i18n.t('roadmap.mapmind.5')}</span>
              <span class="roadmap-vertical-desc mono">${i18n.t('roadmap.mapmind.5.desc')}</span>
            </div>
          </div>
          <div class="roadmap-vertical-item" data-status="current">
            <div class="roadmap-vertical-marker">
              <span class="roadmap-vertical-pulse"></span>
            </div>
            <div class="roadmap-vertical-content">
              <span class="roadmap-vertical-title">${i18n.t('roadmap.mapmind.6')}</span>
              <span class="roadmap-vertical-desc mono">${i18n.t('roadmap.mapmind.6.desc')}</span>
            </div>
          </div>
          <div class="roadmap-vertical-item" data-status="upcoming">
            <div class="roadmap-vertical-marker"></div>
            <div class="roadmap-vertical-content">
              <span class="roadmap-vertical-title">${i18n.t('roadmap.mapmind.7')}</span>
              <span class="roadmap-vertical-desc mono">${i18n.t('roadmap.mapmind.7.desc')}</span>
            </div>
          </div>
          <div class="roadmap-vertical-item" data-status="future">
            <div class="roadmap-vertical-marker"></div>
            <div class="roadmap-vertical-content">
              <span class="roadmap-vertical-title">${i18n.t('roadmap.mapmind.8')}</span>
              <span class="roadmap-vertical-desc mono">${i18n.t('roadmap.mapmind.8.desc')}</span>
            </div>
          </div>
          <div class="roadmap-vertical-item" data-status="future">
            <div class="roadmap-vertical-marker"></div>
            <div class="roadmap-vertical-content">
              <span class="roadmap-vertical-title">${i18n.t('roadmap.mapmind.9')}</span>
              <span class="roadmap-vertical-desc mono">${i18n.t('roadmap.mapmind.9.desc')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section-warm">
      <div class="container">
        <div class="cta-content">
          <h2>${i18n.t('mapmind.cta')}</h2>
          <a href="/contact" class="btn btn-warm btn-lg" data-link>${i18n.t('nav.contact')}</a>
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

  document.querySelectorAll('.roadmap-vertical-item').forEach(item => {
    observer.observe(item);
  });
}

export const mapMindStyles = `
  /* Warm color utilities */
  .text-petrol {
    color: var(--petrol-soft);
  }

  /* Product Hero - Warm Design */
  .product-hero {
    position: relative;
    min-height: 70vh;
    display: flex;
    align-items: center;
    padding-top: 64px;
    overflow: hidden;
  }

  .product-hero-warm {
    background: linear-gradient(
      135deg,
      var(--warm-bg-dark) 0%,
      var(--warm-bg-medium) 50%,
      var(--warm-bg-dark) 100%
    );
  }

  .product-hero-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .product-hero-warm .product-hero-glow {
    position: absolute;
    top: 20%;
    right: 10%;
    width: 500px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(69, 196, 176, 0.12) 0%, transparent 70%);
    filter: blur(80px);
  }

  .product-hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
  }

  .product-hero-orb-1 {
    top: 30%;
    left: 5%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(69, 196, 176, 0.08) 0%, transparent 70%);
    animation: floatOrb 15s ease-in-out infinite;
  }

  .product-hero-orb-2 {
    bottom: 20%;
    right: 15%;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(168, 162, 158, 0.06) 0%, transparent 70%);
    animation: floatOrb 20s ease-in-out infinite reverse;
  }

  @keyframes floatOrb {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(20px, -30px) scale(1.05); }
    66% { transform: translate(-15px, 20px) scale(0.95); }
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
    font-family: var(--font-playful);
    font-size: clamp(var(--text-4xl), 6vw, var(--text-6xl));
    margin: var(--space-4) 0;
    font-weight: var(--font-light);
    color: var(--warm-text-primary);
  }

  .product-hero-subtitle {
    font-size: var(--text-lg);
    color: var(--petrol-soft);
    margin-bottom: var(--space-6);
  }

  .product-hero-description {
    font-size: var(--text-lg);
    line-height: 1.7;
    color: var(--warm-text-secondary);
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
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
  }

  .concept-content p {
    color: var(--warm-text-secondary);
  }

  .concept-visual {
    position: relative;
  }

  /* Map Preview - Glassmorphism */
  .map-preview {
    position: relative;
    aspect-ratio: 4/3;
    background: rgba(41, 37, 36, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(168, 162, 158, 0.12);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }

  .map-preview-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, rgba(168, 162, 158, 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(168, 162, 158, 0.08) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.6;
  }

  .map-preview-marker {
    position: absolute;
    width: 12px;
    height: 12px;
    background: var(--petrol-soft);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 12px rgba(69, 196, 176, 0.5);
  }

  .map-marker-pulse {
    position: absolute;
    inset: -4px;
    border: 2px solid var(--petrol-soft);
    border-radius: 50%;
    animation: markerPulse 2s ease-out infinite;
  }

  @keyframes markerPulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }

  /* Section Alt - Warm Gradient */
  .section-alt-warm {
    background: linear-gradient(
      180deg,
      rgba(41, 37, 36, 0.4) 0%,
      rgba(28, 25, 23, 0.6) 100%
    );
  }

  /* Examples - Glassmorphism */
  .examples-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .example-item {
    padding: var(--space-6);
    background: rgba(41, 37, 36, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(168, 162, 158, 0.1);
    border-radius: var(--radius-md);
    border-left: 2px solid var(--petrol-soft);
    transition: all var(--transition-fast);
  }

  .example-item:hover {
    border-color: rgba(69, 196, 176, 0.3);
    background: rgba(41, 37, 36, 0.7);
    transform: translateX(4px);
  }

  .example-prompt {
    font-size: var(--text-sm);
    color: var(--warm-text-secondary);
  }

  /* Features Grid - Glassmorphism */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-6);
  }

  .feature-card {
    padding: var(--space-6);
    background: rgba(41, 37, 36, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(168, 162, 158, 0.1);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }

  .feature-card:hover {
    border-color: rgba(69, 196, 176, 0.25);
    background: rgba(41, 37, 36, 0.7);
    transform: translateY(-2px);
  }

  .feature-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-4);
    color: var(--petrol-soft);
  }

  .feature-icon svg {
    width: 24px;
    height: 24px;
  }

  .feature-card h4 {
    margin-bottom: var(--space-2);
    font-size: var(--text-base);
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
  }

  .feature-card p {
    font-size: var(--text-sm);
    color: var(--warm-text-muted);
  }

  /* Section Header */
  .section-header h2 {
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
  }

  /* Vertical Roadmap */
  .roadmap-vertical {
    display: flex;
    flex-direction: column;
    gap: 0;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }

  .roadmap-vertical::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(168, 162, 158, 0.15);
  }

  .roadmap-vertical-item {
    display: flex;
    align-items: flex-start;
    gap: var(--space-4);
    padding: var(--space-4) 0;
    position: relative;
    opacity: 0;
    transform: translateX(-10px);
    transition: all var(--transition-slow);
  }

  .roadmap-vertical-item.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .roadmap-vertical-marker {
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--warm-bg-dark);
    border: 2px solid rgba(168, 162, 158, 0.2);
    z-index: 1;
    transition: all var(--transition-fast);
  }

  .roadmap-vertical-item[data-status="done"] .roadmap-vertical-marker {
    background: var(--petrol-soft);
    border-color: var(--petrol-soft);
    color: var(--warm-bg-dark);
  }

  .roadmap-vertical-item[data-status="done"] .roadmap-vertical-marker svg {
    width: 16px;
    height: 16px;
  }

  .roadmap-vertical-item[data-status="current"] .roadmap-vertical-marker {
    border-color: var(--petrol-soft);
    background: rgba(69, 196, 176, 0.15);
    box-shadow: 0 0 20px rgba(69, 196, 176, 0.3);
  }

  .roadmap-vertical-pulse {
    width: 10px;
    height: 10px;
    background: var(--petrol-soft);
    border-radius: 50%;
    animation: roadmapPulse 2s ease-in-out infinite;
  }

  @keyframes roadmapPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.7; }
  }

  .roadmap-vertical-item[data-status="upcoming"] .roadmap-vertical-marker {
    border-color: rgba(69, 196, 176, 0.4);
  }

  .roadmap-vertical-item[data-status="future"] .roadmap-vertical-marker {
    border-color: rgba(168, 162, 158, 0.15);
    opacity: 0.6;
  }

  .roadmap-vertical-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    padding-top: var(--space-1);
  }

  .roadmap-vertical-title {
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
  }

  .roadmap-vertical-item[data-status="done"] .roadmap-vertical-title {
    color: var(--warm-text-muted);
  }

  .roadmap-vertical-item[data-status="future"] .roadmap-vertical-title {
    color: var(--warm-text-muted);
    opacity: 0.6;
  }

  .roadmap-vertical-desc {
    font-size: var(--text-xs);
    color: var(--warm-text-muted);
  }

  /* CTA Section - Warm */
  .cta-section-warm {
    text-align: center;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(69, 196, 176, 0.03) 50%,
      transparent 100%
    );
  }

  .cta-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-6);
  }

  .cta-content h2 {
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
  }

  .btn-warm {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: var(--space-4) var(--space-8);
    background: linear-gradient(135deg, var(--petrol-soft) 0%, #3BA89A 100%);
    color: var(--warm-bg-dark);
    font-family: var(--font-playful);
    font-weight: var(--font-semibold);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(69, 196, 176, 0.25);
  }

  .btn-warm:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(69, 196, 176, 0.35);
  }

  .btn-lg {
    padding: var(--space-4) var(--space-10);
    font-size: var(--text-base);
  }

  @media (max-width: 1024px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
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

    .roadmap-vertical {
      padding-left: var(--space-2);
    }
  }
`;
