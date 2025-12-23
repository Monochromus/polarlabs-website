import { i18n } from '../utils/translations';
import { router, Route } from '../utils/router';

export function renderHomePage(): string {
  return `
    <section class="hero">
      <div class="hero-background">
        <div class="hero-glow"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="hero-content container">
        <span class="label label-accent mono">Polar Labs</span>
        <h1 class="hero-title">${i18n.t('hero.headline')}</h1>
        <p class="hero-description">${i18n.t('hero.description')}</p>
        <a href="#products" class="btn btn-primary hero-cta">${i18n.t('hero.cta')}</a>
      </div>
    </section>

    <section id="products" class="section products-section">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//01</span>
          <h2>${i18n.t('products.title')}</h2>
        </div>

        <div class="products-grid">
          <article class="product-card product-card-mapmind" data-product="mapmind">
            <div class="product-card-header">
              <div class="product-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <circle cx="12" cy="10" r="3"/>
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/>
                </svg>
              </div>
              <div class="product-status">
                <span class="badge">${i18n.t('products.status.development')}</span>
              </div>
            </div>
            <h3 class="product-name">mapMind</h3>
            <p class="product-tagline">${i18n.t('mapmind.tagline')}</p>
            <p class="product-description">${i18n.t('mapmind.description')}</p>
            <a href="/mapmind" class="btn btn-secondary product-link" data-link>
              ${i18n.t('products.learnmore')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </article>

          <article class="product-card product-card-secondbrain" data-product="secondbrain">
            <div class="product-card-header">
              <div class="product-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8v3H8v-3c-3-1.5-5-4.5-5-8a9 9 0 0 1 9-9z"/>
                  <path d="M12 2v4"/>
                  <path d="M4.93 4.93l2.83 2.83"/>
                  <path d="M2 12h4"/>
                  <path d="M19.07 4.93l-2.83 2.83"/>
                  <path d="M22 12h-4"/>
                </svg>
              </div>
              <div class="product-status">
                <span class="badge">${i18n.t('products.status.concept')}</span>
              </div>
            </div>
            <h3 class="product-name">SecondBrain</h3>
            <p class="product-tagline">${i18n.t('secondbrain.tagline')}</p>
            <p class="product-description">${i18n.t('secondbrain.description')}</p>
            <a href="/secondbrain" class="btn btn-secondary product-link" data-link>
              ${i18n.t('products.learnmore')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>

    <section class="section philosophy-section">
      <div class="container">
        <div class="philosophy-content">
          <span class="label mono">//02</span>
          <blockquote class="philosophy-quote">
            ${i18n.t('philosophy.quote')}
          </blockquote>
          <div class="philosophy-decoration">
            <div class="philosophy-line"></div>
            <div class="philosophy-dot"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHomePage(): void {
  // Handle navigation links
  document.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href') as Route;
      router.navigate(href);
    });
  });

  // Handle smooth scroll for anchor links
  document.querySelector('.hero-cta')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Animate product cards on hover
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const product = card.getAttribute('data-product');
      if (product === 'mapmind') {
        card.classList.add('glow-cyan');
      } else if (product === 'secondbrain') {
        card.classList.add('glow-violet');
      }
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('glow-cyan', 'glow-violet');
    });
  });
}

export const homeStyles = `
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding-top: 64px;
  }

  .hero-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .hero-glow {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(77, 238, 234, 0.08) 0%, transparent 70%);
    filter: blur(40px);
  }

  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, var(--border) 1px, transparent 1px),
      linear-gradient(to bottom, var(--border) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.3;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
  }

  .hero-title {
    margin-top: var(--space-6);
    margin-bottom: var(--space-6);
    font-size: clamp(var(--text-3xl), 5vw, var(--text-6xl));
    font-weight: var(--font-light);
    line-height: 1.1;
    letter-spacing: -0.03em;
  }

  .hero-description {
    font-size: var(--text-lg);
    max-width: 600px;
    margin: 0 auto var(--space-10);
    line-height: 1.7;
  }

  .hero-cta {
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-base);
  }

  /* Products Section */
  .products-section {
    background: var(--surface);
  }

  .section-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin-bottom: var(--space-12);
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
  }

  .product-card {
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-8);
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
  }

  .product-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: transparent;
    transition: background var(--transition-fast);
  }

  .product-card-mapmind::before {
    background: linear-gradient(90deg, transparent, var(--aurora-cyan), transparent);
    opacity: 0;
    transition: opacity var(--transition-fast);
  }

  .product-card-secondbrain::before {
    background: linear-gradient(90deg, transparent, var(--soft-violet), transparent);
    opacity: 0;
    transition: opacity var(--transition-fast);
  }

  .product-card:hover::before {
    opacity: 1;
  }

  .product-card.glow-cyan {
    box-shadow: var(--shadow-glow-cyan);
  }

  .product-card.glow-violet {
    box-shadow: var(--shadow-glow-violet);
  }

  .product-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--space-6);
  }

  .product-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
  }

  .product-card-mapmind .product-icon {
    color: var(--aurora-cyan);
  }

  .product-card-secondbrain .product-icon {
    color: var(--soft-violet);
  }

  .product-icon svg {
    width: 24px;
    height: 24px;
  }

  .product-name {
    font-size: var(--text-2xl);
    margin-bottom: var(--space-2);
  }

  .product-tagline {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin-bottom: var(--space-4);
  }

  .product-description {
    margin-bottom: var(--space-6);
    font-size: var(--text-base);
  }

  .product-link {
    display: inline-flex;
    gap: var(--space-2);
  }

  /* Philosophy Section */
  .philosophy-section {
    position: relative;
  }

  .philosophy-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .philosophy-quote {
    font-size: clamp(var(--text-xl), 3vw, var(--text-3xl));
    font-weight: var(--font-light);
    line-height: 1.4;
    color: var(--text-primary);
    margin: var(--space-8) 0;
    font-style: normal;
  }

  .philosophy-decoration {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-4);
    margin-top: var(--space-8);
  }

  .philosophy-line {
    width: 60px;
    height: 1px;
    background: var(--border);
  }

  .philosophy-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--aurora-cyan);
  }

  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: 1fr;
    }

    .hero-glow {
      width: 300px;
      height: 200px;
    }
  }
`;
