import { i18n } from '../utils/translations';
import { router, Route } from '../utils/router';

// Get votes from localStorage
function getVotes(): { mapmind: number; secondbrain: number } {
  const stored = localStorage.getItem('polarlabs-votes');
  if (stored) {
    return JSON.parse(stored);
  }
  return { mapmind: 0, secondbrain: 0 };
}

// Get user's votes (which products they voted for)
function getUserVotes(): { mapmind: boolean; secondbrain: boolean } {
  const stored = localStorage.getItem('polarlabs-user-votes');
  if (stored) {
    return JSON.parse(stored);
  }
  return { mapmind: false, secondbrain: false };
}

// Toggle vote for a product
function toggleVote(product: 'mapmind' | 'secondbrain'): boolean {
  const votes = getVotes();
  const userVotes = getUserVotes();

  if (userVotes[product]) {
    // Remove vote
    votes[product] = Math.max(0, votes[product] - 1);
    userVotes[product] = false;
  } else {
    // Add vote
    votes[product]++;
    userVotes[product] = true;
  }

  localStorage.setItem('polarlabs-votes', JSON.stringify(votes));
  localStorage.setItem('polarlabs-user-votes', JSON.stringify(userVotes));

  return userVotes[product];
}

export function renderHomePage(): string {
  const votes = getVotes();
  const userVotes = getUserVotes();

  return `
    <section class="hero">
      <div class="hero-background">
        <div class="hero-glow"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="hero-content container">
        <span class="label label-accent mono">Polar Labs</span>
        <h1 class="hero-title">${i18n.t('hero.headline')}</h1>
        <p class="hero-subline mono">${i18n.t('hero.subline')}</p>
        <a href="#products" class="btn btn-primary hero-cta">${i18n.t('hero.cta')}</a>
      </div>
    </section>

    <section id="products" class="section products-section">
      <div class="container">
        <div class="section-header">
          <span class="label mono">//01</span>
          <h2>${i18n.t('products.title')}</h2>
        </div>

        <div class="vote-prompt">
          <p class="vote-question">${i18n.t('products.vote.question')}</p>
          <p class="vote-hint mono">${i18n.t('products.vote.hint')}</p>
        </div>

        <div class="products-grid">
          <article class="product-card product-card-mapmind ${userVotes.mapmind ? 'voted' : ''}" data-product="mapmind">
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
            <div class="product-actions">
              <a href="/mapmind" class="btn btn-secondary product-link" data-link>
                ${i18n.t('products.learnmore')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <button class="vote-btn ${userVotes.mapmind ? 'voted' : ''}" data-vote="mapmind">
                <svg viewBox="0 0 24 24" fill="${userVotes.mapmind ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
                <span class="vote-count">${votes.mapmind}</span>
              </button>
            </div>
          </article>

          <article class="product-card product-card-secondbrain product-card-pocket ${userVotes.secondbrain ? 'voted' : ''}" data-product="secondbrain">
            <div class="product-card-header">
              <div class="product-icon product-icon-pocket">
                <img src="/pocket_assistent_logo.svg" alt="Pocket Assistant" class="pocket-logo" />
              </div>
              <div class="product-status">
                <span class="badge badge-pocket">${i18n.t('products.status.development')}</span>
              </div>
            </div>
            <h3 class="product-name product-name-pocket">Pocket Assistant</h3>
            <p class="product-tagline product-tagline-pocket">${i18n.t('secondbrain.tagline')}</p>
            <p class="product-description">${i18n.t('secondbrain.description')}</p>
            <div class="product-actions">
              <a href="/secondbrain" class="btn btn-secondary-pocket product-link" data-link>
                ${i18n.t('products.learnmore')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <button class="vote-btn vote-btn-pocket ${userVotes.secondbrain ? 'voted' : ''}" data-vote="secondbrain">
                <svg viewBox="0 0 24 24" fill="${userVotes.secondbrain ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
                <span class="vote-count">${votes.secondbrain}</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section philosophy-section">
      <div class="container">
        <div class="philosophy-content">
          <span class="label mono">//02</span>
          <div class="philosophy-quotes" id="philosophy-quotes">
            <blockquote class="philosophy-quote active" data-quote="0">
              "${i18n.t('philosophy.quote.1')}"
            </blockquote>
            <blockquote class="philosophy-quote" data-quote="1">
              "${i18n.t('philosophy.quote.2')}"
            </blockquote>
          </div>
          <div class="philosophy-indicators">
            <button class="philosophy-indicator active" data-index="0" aria-label="Quote 1"></button>
            <button class="philosophy-indicator" data-index="1" aria-label="Quote 2"></button>
          </div>
          <p class="philosophy-hint mono">${i18n.t('philosophy.click.hint')}</p>
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
        card.classList.add('glow-pocket');
      }
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('glow-cyan', 'glow-pocket');
    });
  });

  // Voting functionality (toggle)
  document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const button = e.currentTarget as HTMLButtonElement;
      const product = button.getAttribute('data-vote') as 'mapmind' | 'secondbrain';

      // Toggle vote and get new state
      const isNowVoted = toggleVote(product);

      // Update count
      const countEl = button.querySelector('.vote-count');
      if (countEl) {
        const currentCount = parseInt(countEl.textContent || '0');
        countEl.textContent = (isNowVoted ? currentCount + 1 : Math.max(0, currentCount - 1)).toString();
      }

      // Update button state
      button.classList.toggle('voted', isNowVoted);
      const svg = button.querySelector('svg');
      if (svg) svg.setAttribute('fill', isNowVoted ? 'currentColor' : 'none');

      // Update card state
      const card = button.closest('.product-card');
      if (card) card.classList.toggle('voted', isNowVoted);
    });
  });

  // Rotating quotes
  let currentQuote = 0;
  const quotes = document.querySelectorAll('.philosophy-quote');
  const indicators = document.querySelectorAll('.philosophy-indicator');

  function showQuote(index: number) {
    quotes.forEach((q, i) => {
      q.classList.toggle('active', i === index);
    });
    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === index);
    });
    currentQuote = index;
  }

  // Click on quotes container to cycle
  document.getElementById('philosophy-quotes')?.addEventListener('click', () => {
    const nextQuote = (currentQuote + 1) % quotes.length;
    showQuote(nextQuote);
  });

  // Click on indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', (e) => {
      e.stopPropagation();
      showQuote(index);
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
    margin-bottom: var(--space-4);
    font-size: clamp(var(--text-3xl), 6vw, 4.5rem);
    font-weight: var(--font-medium);
    line-height: 1.1;
    letter-spacing: -0.03em;
  }

  .hero-subline {
    font-size: var(--text-xl);
    color: var(--aurora-cyan);
    margin-bottom: var(--space-10);
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
    margin-bottom: var(--space-8);
  }

  .vote-prompt {
    text-align: center;
    margin-bottom: var(--space-10);
  }

  .vote-question {
    font-size: var(--text-lg);
    color: var(--text-primary);
    margin-bottom: var(--space-2);
  }

  .vote-hint {
    font-size: var(--text-sm);
    color: var(--text-muted);
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

  .product-card:hover::before,
  .product-card.voted::before {
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

  .product-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
  }

  .product-link {
    display: inline-flex;
    gap: var(--space-2);
  }

  .vote-btn {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: transparent;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all var(--transition-fast);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
  }

  .vote-btn:hover {
    border-color: var(--aurora-cyan);
    color: var(--aurora-cyan);
  }

  .vote-btn.voted {
    border-color: var(--aurora-cyan);
    color: var(--aurora-cyan);
    background: rgba(77, 238, 234, 0.1);
  }

  .vote-btn.voted:hover {
    background: rgba(77, 238, 234, 0.2);
  }

  .vote-btn svg {
    width: 18px;
    height: 18px;
    transition: transform var(--transition-fast);
  }

  .vote-btn:hover svg {
    transform: scale(1.1);
  }

  .vote-btn-violet:hover {
    border-color: var(--soft-violet);
    color: var(--soft-violet);
  }

  .vote-btn-violet.voted {
    border-color: var(--soft-violet);
    color: var(--soft-violet);
    background: rgba(155, 140, 255, 0.1);
  }

  .vote-btn-violet.voted:hover {
    background: rgba(155, 140, 255, 0.2);
  }

  /* Pocket Assistant Card - Warm brown theme with Petrol accent */
  .product-card-pocket {
    background: var(--warm-bg-dark, #1C1917);
    border-color: var(--warm-border, rgba(168, 162, 158, 0.15));
    font-family: var(--font-playful, 'Nunito', sans-serif);
  }

  .product-card-pocket::before {
    background: linear-gradient(90deg, transparent, var(--petrol-soft, #45C4B0), transparent);
  }

  .product-card-pocket.glow-pocket {
    box-shadow: 0 0 20px rgba(20, 145, 155, 0.25);
  }

  .product-icon-pocket {
    background: linear-gradient(135deg, rgba(20, 145, 155, 0.1) 0%, rgba(69, 196, 176, 0.15) 100%);
    border-radius: 16px;
  }

  .pocket-logo {
    width: 28px;
    height: 28px;
  }

  .product-name-pocket {
    font-family: var(--font-playful, 'Nunito', sans-serif);
    font-weight: 700;
    color: var(--warm-text-primary, #FAFAF9);
  }

  .product-tagline-pocket {
    color: var(--petrol-soft, #45C4B0);
    font-family: var(--font-playful, 'Nunito', sans-serif);
  }

  .product-card-pocket .product-description {
    color: var(--warm-text-secondary, #D6D3D1);
  }

  .badge-pocket {
    background: var(--warm-bg-medium, #292524);
    border-color: var(--warm-border, rgba(168, 162, 158, 0.15));
  }

  .badge-pocket::before {
    background: var(--petrol-soft, #45C4B0);
  }

  .btn-secondary-pocket {
    background: transparent;
    color: var(--warm-text-secondary, #D6D3D1);
    border: 1px solid var(--warm-border, rgba(168, 162, 158, 0.15));
    border-radius: 50px;
    font-family: var(--font-playful, 'Nunito', sans-serif);
  }

  .btn-secondary-pocket:hover {
    background: var(--warm-bg-medium, #292524);
    border-color: var(--petrol-soft, #45C4B0);
    color: var(--petrol-soft, #45C4B0);
  }

  .vote-btn-pocket {
    border-color: var(--warm-border, rgba(168, 162, 158, 0.15));
    color: var(--warm-text-muted, #A8A29E);
  }

  .vote-btn-pocket:hover {
    border-color: var(--petrol-soft, #45C4B0);
    color: var(--petrol-soft, #45C4B0);
  }

  .vote-btn-pocket.voted {
    border-color: var(--petrol-soft, #45C4B0);
    color: var(--petrol-soft, #45C4B0);
    background: rgba(20, 145, 155, 0.1);
  }

  .vote-btn-pocket.voted:hover {
    background: rgba(20, 145, 155, 0.2);
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

  .philosophy-quotes {
    position: relative;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: var(--space-8) 0;
  }

  .philosophy-quote {
    position: absolute;
    font-size: clamp(var(--text-xl), 3vw, var(--text-3xl));
    font-weight: var(--font-light);
    line-height: 1.4;
    color: var(--text-primary);
    font-style: normal;
    opacity: 0;
    transform: translateY(10px);
    transition: all var(--transition-slow);
    pointer-events: none;
  }

  .philosophy-quote.active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .philosophy-indicators {
    display: flex;
    justify-content: center;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
  }

  .philosophy-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--border);
    border: none;
    cursor: pointer;
    transition: all var(--transition-fast);
    padding: 0;
  }

  .philosophy-indicator:hover {
    background: var(--text-muted);
  }

  .philosophy-indicator.active {
    background: var(--aurora-cyan);
    width: 24px;
    border-radius: 4px;
  }

  .philosophy-hint {
    font-size: var(--text-xs);
    color: var(--text-muted);
  }

  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: 1fr;
    }

    .hero-glow {
      width: 300px;
      height: 200px;
    }

    .product-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .vote-btn {
      justify-content: center;
    }
  }
`;
