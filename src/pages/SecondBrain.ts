import { i18n } from '../utils/translations';
import { router, Route } from '../utils/router';

export function renderSecondBrainPage(): string {
  return `
    <section class="product-hero product-hero-secondbrain">
      <div class="product-hero-background">
        <div class="product-hero-glow secondbrain-glow"></div>
        <div class="product-hero-nodes">
          <svg class="nodes-svg" viewBox="0 0 400 300" preserveAspectRatio="none">
            <line x1="100" y1="80" x2="200" y2="150" stroke="var(--soft-violet)" stroke-width="0.5" opacity="0.3"/>
            <line x1="200" y1="150" x2="150" y2="220" stroke="var(--soft-violet)" stroke-width="0.5" opacity="0.3"/>
            <line x1="200" y1="150" x2="300" y2="130" stroke="var(--soft-violet)" stroke-width="0.5" opacity="0.3"/>
            <line x1="300" y1="130" x2="350" y2="200" stroke="var(--soft-violet)" stroke-width="0.5" opacity="0.3"/>
            <circle cx="100" cy="80" r="4" fill="var(--soft-violet)" opacity="0.4"/>
            <circle cx="200" cy="150" r="6" fill="var(--soft-violet)" opacity="0.6"/>
            <circle cx="150" cy="220" r="3" fill="var(--soft-violet)" opacity="0.3"/>
            <circle cx="300" cy="130" r="4" fill="var(--soft-violet)" opacity="0.4"/>
            <circle cx="350" cy="200" r="3" fill="var(--soft-violet)" opacity="0.3"/>
          </svg>
        </div>
      </div>
      <div class="product-hero-content container">
        <span class="label mono text-violet">// ${i18n.t('products.status.development')}</span>
        <h1 class="product-hero-title">${i18n.t('secondbrain.hero.title')}</h1>
        <p class="product-hero-subtitle mono secondbrain-subtitle">${i18n.t('secondbrain.hero.subtitle')}</p>
        <p class="product-hero-description">${i18n.t('secondbrain.hero.description')}</p>
        <a href="https://second-brain-api-fo1f.onrender.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary-violet btn-lg hero-cta-btn">${i18n.t('secondbrain.try')}</a>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="concept-grid concept-grid-reverse">
          <div class="concept-visual">
            <div class="brain-preview">
              <div class="brain-node brain-node-center">
                <span class="brain-node-label mono">BRAIN</span>
              </div>
              <div class="brain-node brain-node-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div class="brain-node brain-node-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </div>
              <div class="brain-node brain-node-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <div class="brain-node brain-node-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <svg class="brain-connections" viewBox="0 0 300 200">
                <line x1="150" y1="100" x2="60" y2="40" stroke="var(--soft-violet)" stroke-width="1" opacity="0.3"/>
                <line x1="150" y1="100" x2="240" y2="40" stroke="var(--soft-violet)" stroke-width="1" opacity="0.3"/>
                <line x1="150" y1="100" x2="60" y2="160" stroke="var(--soft-violet)" stroke-width="1" opacity="0.3"/>
                <line x1="150" y1="100" x2="240" y2="160" stroke="var(--soft-violet)" stroke-width="1" opacity="0.3"/>
              </svg>
            </div>
          </div>
          <div class="concept-content">
            <span class="label mono">//01</span>
            <h2>${i18n.t('secondbrain.concept.title')}</h2>
            <p>${i18n.t('secondbrain.concept.p1')}</p>
            <p>${i18n.t('secondbrain.concept.p2')}</p>
            <p>${i18n.t('secondbrain.concept.p3')}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//02</span>
          <h2>${i18n.t('secondbrain.features.title')}</h2>
        </div>
        <div class="features-grid features-grid-secondbrain">
          <div class="feature-card feature-card-secondbrain">
            <div class="feature-icon feature-icon-secondbrain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.feature.1.title')}</h4>
            <p>${i18n.t('secondbrain.feature.1.desc')}</p>
          </div>
          <div class="feature-card feature-card-secondbrain">
            <div class="feature-icon feature-icon-secondbrain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.feature.2.title')}</h4>
            <p>${i18n.t('secondbrain.feature.2.desc')}</p>
          </div>
          <div class="feature-card feature-card-secondbrain">
            <div class="feature-icon feature-icon-secondbrain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.feature.3.title')}</h4>
            <p>${i18n.t('secondbrain.feature.3.desc')}</p>
          </div>
          <div class="feature-card feature-card-secondbrain">
            <div class="feature-icon feature-icon-secondbrain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8v3H8v-3c-3-1.5-5-4.5-5-8a9 9 0 0 1 9-9z"/>
                <path d="M12 2v4"/>
                <path d="M4.93 4.93l2.83 2.83"/>
                <path d="M19.07 4.93l-2.83 2.83"/>
              </svg>
            </div>
            <h4>${i18n.t('secondbrain.feature.4.title')}</h4>
            <p>${i18n.t('secondbrain.feature.4.desc')}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//03</span>
          <h2>${i18n.t('secondbrain.roadmap.title')}</h2>
        </div>
        <div class="roadmap roadmap-secondbrain roadmap-6">
          <div class="roadmap-line"></div>
          <div class="roadmap-item" data-status="done">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.secondbrain.1')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.secondbrain.1.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="done">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.secondbrain.2')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.secondbrain.2.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="current">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.secondbrain.3')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.secondbrain.3.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="upcoming">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.secondbrain.4')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.secondbrain.4.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="future">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.secondbrain.5')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.secondbrain.5.desc')}</span>
            </div>
          </div>
          <div class="roadmap-item" data-status="future">
            <div class="roadmap-node"></div>
            <div class="roadmap-content">
              <span class="roadmap-title">${i18n.t('roadmap.secondbrain.6')}</span>
              <span class="roadmap-desc mono">${i18n.t('roadmap.secondbrain.6.desc')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section section-alt">
      <div class="container">
        <div class="cta-content">
          <h2>${i18n.t('secondbrain.cta')}</h2>
          <a href="/contact" class="btn btn-primary-violet btn-lg" data-link>${i18n.t('nav.contact')}</a>
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
  .product-hero-secondbrain .secondbrain-glow {
    position: absolute;
    top: 30%;
    right: 10%;
    width: 400px;
    height: 300px;
    background: radial-gradient(ellipse, rgba(155, 140, 255, 0.1) 0%, transparent 70%);
    filter: blur(60px);
  }

  .product-hero-nodes {
    position: absolute;
    inset: 0;
    opacity: 0.5;
  }

  .nodes-svg {
    width: 100%;
    height: 100%;
  }

  .secondbrain-subtitle {
    color: var(--soft-violet);
  }

  .text-violet {
    color: var(--soft-violet);
  }

  .product-hero-secondbrain .hero-cta-btn {
    margin-top: var(--space-6);
  }

  .concept-grid-reverse {
    direction: rtl;
  }

  .concept-grid-reverse > * {
    direction: ltr;
  }

  /* Brain Preview */
  .brain-preview {
    position: relative;
    aspect-ratio: 3/2;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .brain-connections {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .brain-node {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--soft-violet);
    transition: all var(--transition-fast);
  }

  .brain-node:hover {
    border-color: var(--soft-violet);
    box-shadow: var(--shadow-glow-violet);
  }

  .brain-node svg {
    width: 20px;
    height: 20px;
  }

  .brain-node-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--soft-violet);
    color: var(--polar-black);
    font-size: var(--text-xs);
    font-weight: var(--font-medium);
  }

  .brain-node-1 {
    top: 10%;
    left: 15%;
    width: 44px;
    height: 44px;
  }

  .brain-node-2 {
    top: 10%;
    right: 15%;
    width: 44px;
    height: 44px;
  }

  .brain-node-3 {
    bottom: 10%;
    left: 15%;
    width: 44px;
    height: 44px;
  }

  .brain-node-4 {
    bottom: 10%;
    right: 15%;
    width: 44px;
    height: 44px;
  }

  /* SecondBrain specific styles */
  .feature-icon-secondbrain {
    color: var(--soft-violet);
  }

  .feature-card-secondbrain:hover {
    border-color: var(--soft-violet);
  }

  .features-grid-secondbrain .feature-card:hover {
    box-shadow: var(--shadow-glow-violet);
  }

  /* Roadmap SecondBrain */
  .roadmap-6 {
    grid-template-columns: repeat(6, 1fr);
  }

  .roadmap-secondbrain .roadmap-line::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 100%;
    background: var(--soft-violet);
  }

  .roadmap-secondbrain [data-status="done"] .roadmap-node {
    border-color: var(--soft-violet);
    background: var(--soft-violet);
  }

  .roadmap-secondbrain [data-status="done"] .roadmap-title {
    color: var(--text-muted);
  }

  .roadmap-secondbrain [data-status="current"] .roadmap-node {
    border-color: var(--soft-violet);
    background: var(--soft-violet);
    box-shadow: 0 0 10px var(--soft-violet);
  }

  .roadmap-secondbrain [data-status="upcoming"] .roadmap-node {
    border-color: var(--soft-violet);
  }

  /* Button violet variant */
  .btn-primary-violet {
    background: var(--soft-violet);
    color: var(--polar-black);
    border-color: var(--soft-violet);
  }

  .btn-primary-violet:hover {
    background: transparent;
    color: var(--soft-violet);
    box-shadow: var(--shadow-glow-violet);
  }

  @media (max-width: 768px) {
    .concept-grid-reverse {
      direction: ltr;
    }

    .brain-node-label {
      font-size: 8px;
    }

    .brain-node-center {
      width: 50px;
      height: 50px;
    }

    .brain-node-1,
    .brain-node-2,
    .brain-node-3,
    .brain-node-4 {
      width: 36px;
      height: 36px;
    }

    .brain-node svg {
      width: 16px;
      height: 16px;
    }
  }
`;
