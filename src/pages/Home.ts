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
    <section class="hero hero-warm">
      <div class="hero-background">
        <div class="hero-glow-warm"></div>
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
      </div>
      <div class="hero-content container">
        <h1 class="hero-title-warm">${i18n.t('hero.headline')}</h1>
        <p class="hero-subline-warm">${i18n.t('hero.subline')}</p>
        <a href="#products" class="btn btn-warm hero-cta">${i18n.t('hero.cta')}</a>
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

  /* Warm Hero Theme */
  .hero-warm {
    background: linear-gradient(
      145deg,
      var(--warm-bg-dark) 0%,
      #1f1b19 30%,
      #252120 60%,
      var(--warm-bg-medium) 100%
    );
  }

  .hero-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .hero-glow-warm {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 500px;
    background: radial-gradient(
      ellipse,
      rgba(69, 196, 176, 0.15) 0%,
      rgba(20, 145, 155, 0.08) 40%,
      transparent 70%
    );
    filter: blur(60px);
    animation: glowPulse 8s ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
    50% { opacity: 0.8; transform: translateX(-50%) scale(1.05); }
  }

  /* Organic floating orbs for liquid glass feel */
  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
  }

  .hero-orb-1 {
    width: 300px;
    height: 300px;
    top: 15%;
    left: 10%;
    background: radial-gradient(circle, rgba(69, 196, 176, 0.2) 0%, transparent 70%);
    animation: orbFloat1 12s ease-in-out infinite;
  }

  .hero-orb-2 {
    width: 250px;
    height: 250px;
    bottom: 20%;
    right: 15%;
    background: radial-gradient(circle, rgba(20, 145, 155, 0.15) 0%, transparent 70%);
    animation: orbFloat2 10s ease-in-out infinite;
  }

  @keyframes orbFloat1 {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(20px, -30px); }
    66% { transform: translate(-15px, 20px); }
  }

  @keyframes orbFloat2 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-25px, -20px); }
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
  }

  .hero-title-warm {
    font-family: var(--font-playful);
    font-size: clamp(3.5rem, 10vw, 6rem);
    font-weight: 700;
    color: var(--warm-text-primary);
    margin-bottom: var(--space-4);
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .hero-subline-warm {
    font-family: var(--font-playful);
    font-size: clamp(var(--text-lg), 3vw, var(--text-2xl));
    font-weight: 500;
    color: var(--petrol-soft);
    margin-bottom: var(--space-12);
    opacity: 0.9;
  }

  .btn-warm {
    background: linear-gradient(135deg, var(--petrol-main) 0%, var(--petrol-soft) 100%);
    color: white;
    border: none;
    padding: var(--space-4) var(--space-8);
    border-radius: 50px;
    font-family: var(--font-playful);
    font-weight: 600;
    font-size: var(--text-base);
    cursor: pointer;
    transition: all var(--transition-base);
    box-shadow: 0 4px 20px rgba(20, 145, 155, 0.3);
  }

  .btn-warm:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(20, 145, 155, 0.4);
    background: linear-gradient(135deg, var(--petrol-dark) 0%, var(--petrol-main) 100%);
  }

  .hero-cta {
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-base);
  }

  /* Warm Badge Override */
  .products-section .badge {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.08);
    font-family: var(--font-playful);
    color: var(--warm-text-muted);
  }

  .products-section .badge::before {
    background: var(--petrol-soft);
    box-shadow: 0 0 6px rgba(69, 196, 176, 0.4);
  }

  .product-card-mapmind .badge::before {
    background: var(--aurora-cyan);
    box-shadow: 0 0 6px rgba(77, 238, 234, 0.4);
  }

  /* Products Section - Warm Theme */
  .products-section {
    background: linear-gradient(
      180deg,
      var(--warm-bg-medium) 0%,
      var(--warm-bg-dark) 100%
    );
    position: relative;
  }

  .products-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--warm-border), transparent);
  }

  .section-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin-bottom: var(--space-8);
  }

  .section-header h2 {
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
  }

  .section-header .label {
    color: var(--petrol-soft);
  }

  .vote-prompt {
    text-align: center;
    margin-bottom: var(--space-10);
  }

  .vote-question {
    font-family: var(--font-playful);
    font-size: var(--text-lg);
    color: var(--warm-text-primary);
    margin-bottom: var(--space-2);
  }

  .vote-hint {
    font-size: var(--text-sm);
    color: var(--warm-text-muted);
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
  }

  /* Liquid Glass Card Base */
  .product-card {
    background: rgba(41, 37, 36, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(168, 162, 158, 0.12);
    border-radius: var(--radius-xl);
    padding: var(--space-8);
    transition: all var(--transition-slow);
    position: relative;
    overflow: hidden;
    box-shadow:
      0 4px 24px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.03);
  }

  .product-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    opacity: 0;
    transition: opacity var(--transition-base);
  }

  .product-card:hover::before,
  .product-card.voted::before {
    opacity: 1;
  }

  .product-card:hover {
    transform: translateY(-4px);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
    border-color: rgba(168, 162, 158, 0.2);
  }

  /* mapMind Card */
  .product-card-mapmind {
    background: rgba(41, 37, 36, 0.5);
  }

  .product-card-mapmind:hover,
  .product-card-mapmind.glow-cyan {
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.2),
      0 0 40px rgba(77, 238, 234, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  /* Pocket Card already styled separately */
  .product-card.glow-pocket {
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.2),
      0 0 40px rgba(20, 145, 155, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
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
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-lg);
    color: var(--warm-text-secondary);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .product-card-mapmind .product-icon {
    color: var(--aurora-cyan);
    background: rgba(77, 238, 234, 0.1);
    border-color: rgba(77, 238, 234, 0.15);
  }

  .product-icon svg {
    width: 24px;
    height: 24px;
  }

  .product-name {
    font-family: var(--font-playful);
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--warm-text-primary);
    margin-bottom: var(--space-2);
  }

  .product-tagline {
    font-family: var(--font-playful);
    font-size: var(--text-sm);
    color: var(--warm-text-muted);
    margin-bottom: var(--space-4);
  }

  .product-card-mapmind .product-tagline {
    color: var(--aurora-cyan);
    opacity: 0.8;
  }

  .product-description {
    margin-bottom: var(--space-6);
    font-size: var(--text-base);
    color: var(--warm-text-secondary);
    line-height: 1.6;
  }

  .product-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
  }

  .product-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-5);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 50px;
    color: var(--warm-text-secondary);
    font-family: var(--font-playful);
    font-size: var(--text-sm);
    text-decoration: none;
    transition: all var(--transition-base);
  }

  .product-link:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.15);
    color: var(--warm-text-primary);
    transform: translateX(4px);
  }

  .product-card-mapmind .product-link:hover {
    border-color: rgba(77, 238, 234, 0.3);
    color: var(--aurora-cyan);
  }

  .vote-btn {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-lg);
    color: var(--warm-text-muted);
    cursor: pointer;
    transition: all var(--transition-base);
    font-family: var(--font-playful);
    font-size: var(--text-sm);
  }

  .vote-btn:hover {
    border-color: var(--aurora-cyan);
    color: var(--aurora-cyan);
    background: rgba(77, 238, 234, 0.08);
  }

  .vote-btn.voted {
    border-color: var(--aurora-cyan);
    color: var(--aurora-cyan);
    background: rgba(77, 238, 234, 0.12);
  }

  .vote-btn.voted:hover {
    background: rgba(77, 238, 234, 0.18);
  }

  .vote-btn svg {
    width: 18px;
    height: 18px;
    transition: transform var(--transition-fast);
  }

  .vote-btn:hover svg {
    transform: scale(1.1);
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

  /* Philosophy Section - Warm Glassmorphism */
  .philosophy-section {
    position: relative;
    background: linear-gradient(
      180deg,
      var(--warm-bg-dark) 0%,
      #1a1614 50%,
      var(--warm-bg-dark) 100%
    );
  }

  .philosophy-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .philosophy-content .label {
    color: var(--petrol-soft);
  }

  .philosophy-quotes {
    position: relative;
    min-height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: var(--space-10) 0;
    padding: var(--space-8);
    background: rgba(41, 37, 36, 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: var(--radius-xl);
    border: 1px solid rgba(168, 162, 158, 0.08);
    box-shadow:
      0 4px 24px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.02);
    transition: all var(--transition-base);
  }

  .philosophy-quotes:hover {
    background: rgba(41, 37, 36, 0.5);
    border-color: rgba(168, 162, 158, 0.12);
  }

  .philosophy-quote {
    position: absolute;
    font-family: var(--font-playful);
    font-size: clamp(var(--text-xl), 3vw, var(--text-2xl));
    font-weight: 500;
    line-height: 1.5;
    color: var(--warm-text-primary);
    font-style: normal;
    opacity: 0;
    transform: translateY(10px);
    transition: all var(--transition-slow);
    pointer-events: none;
    padding: 0 var(--space-4);
  }

  .philosophy-quote.active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .philosophy-indicators {
    display: flex;
    justify-content: center;
    gap: var(--space-3);
    margin-bottom: var(--space-4);
  }

  .philosophy-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(168, 162, 158, 0.2);
    border: none;
    cursor: pointer;
    transition: all var(--transition-base);
    padding: 0;
  }

  .philosophy-indicator:hover {
    background: rgba(168, 162, 158, 0.4);
    transform: scale(1.1);
  }

  .philosophy-indicator.active {
    background: var(--petrol-soft);
    width: 30px;
    border-radius: 5px;
    box-shadow: 0 0 12px rgba(69, 196, 176, 0.3);
  }

  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: 1fr;
    }

    .hero-glow-warm {
      width: 350px;
      height: 300px;
    }

    .hero-orb-1,
    .hero-orb-2 {
      width: 150px;
      height: 150px;
      opacity: 0.3;
    }

    .hero-title-warm {
      font-size: clamp(2.5rem, 12vw, 4rem);
    }

    .hero-subline-warm {
      font-size: var(--text-lg);
    }

    .product-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .product-link {
      justify-content: center;
    }

    .vote-btn {
      justify-content: center;
    }

    .philosophy-quotes {
      padding: var(--space-6);
      min-height: 120px;
    }

    .philosophy-quote {
      font-size: var(--text-lg);
    }
  }
`;

