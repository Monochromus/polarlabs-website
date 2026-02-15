import { i18n } from '../utils/translations';

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
      <div class="container">
        <!-- Module Navigation -->
        <div class="module-nav-wrapper">
          <nav class="module-nav">
            <button class="module-nav-btn active" data-module="vision">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
              </svg>
              <span>Vision</span>
            </button>
            <button class="module-nav-btn" data-module="brain">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8v3H8v-3c-3-1.5-5-4.5-5-8a9 9 0 0 1 9-9z"></path>
              </svg>
              <span>Brain</span>
            </button>
            <button class="module-nav-btn" data-module="engine">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              <span>Engine</span>
            </button>
            <button class="module-nav-btn" data-module="roadmap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
              <span>Future</span>
            </button>
          </nav>
        </div>

        <!-- Module Content Container -->
        <div class="module-content-viewport">
          
          <!-- Module: Vision (Problem & Solution) -->
          <div class="module-panel active" id="module-vision">
            <div class="panel-header text-center">
              <span class="label mono">// VISION</span>
              <h2>${i18n.t('secondbrain.problem.title')}</h2>
              <p class="section-subtitle">${i18n.t('secondbrain.problem.subtitle')}</p>
            </div>
            
            <div class="problem-grid-compact">
              <div class="problem-item-mini">
                <div class="mini-icon red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg></div>
                <span>${i18n.t('secondbrain.problem.item1')}</span>
              </div>
              <div class="problem-item-mini">
                <div class="mini-icon red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 17l10 5 10-5"/></svg></div>
                <span>${i18n.t('secondbrain.problem.item2')}</span>
              </div>
              <div class="problem-item-mini">
                <div class="mini-icon red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg></div>
                <span>${i18n.t('secondbrain.problem.item3')}</span>
              </div>
              <div class="problem-item-mini">
                <div class="mini-icon red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg></div>
                <span>${i18n.t('secondbrain.problem.item4')}</span>
              </div>
            </div>

            <div class="vision-quote-box">
              <blockquote class="problem-quote-mini">${i18n.t('secondbrain.problem.quote')}</blockquote>
            </div>

            <div class="panel-divider"></div>

            <div class="panel-header text-center">
              <h2>${i18n.t('secondbrain.solution.title')}</h2>
              <p class="section-subtitle">${i18n.t('secondbrain.solution.subtitle')}</p>
            </div>

            <div class="flow-visual-mini">
              <div class="flow-node">
                <div class="flow-circle">Input</div>
              </div>
              <div class="flow-line"></div>
              <div class="flow-node active">
                <div class="flow-circle-main">
                  <img src="/pocket_assistent_logo.svg" alt="Brain" />
                </div>
              </div>
              <div class="flow-line"></div>
              <div class="flow-node">
                <div class="flow-circle">Output</div>
              </div>
            </div>
          </div>

          <!-- Module: Brain (PARA & Utility) -->
          <div class="module-panel" id="module-brain">
             <div class="panel-header text-center">
              <span class="label mono">// THE BRAIN</span>
              <h2>Organisiere dein Wissen</h2>
            </div>
            
            <div class="phases-grid-compact">
              <div class="phase-card-mini">
                <div class="phase-tag">01</div>
                <h3>${i18n.t('secondbrain.phase.1.title')}</h3>
                <p>${i18n.t('secondbrain.phase.1.desc')}</p>
              </div>
              <div class="phase-card-mini">
                <div class="phase-tag">02</div>
                <h3>${i18n.t('secondbrain.phase.2.title')}</h3>
                <p>${i18n.t('secondbrain.phase.2.desc')}</p>
              </div>
              <div class="phase-card-mini">
                <div class="phase-tag">03</div>
                <h3>${i18n.t('secondbrain.phase.3.title')}</h3>
                <p>${i18n.t('secondbrain.phase.3.desc')}</p>
              </div>
            </div>

            <div class="examples-grid-mini">
              <div class="mini-card">
                <div class="card-prompt">"${i18n.t('secondbrain.example.1')}"</div>
                <div class="card-arrow">→</div>
                <div class="card-result">${i18n.t('secondbrain.example.1.result')}</div>
              </div>
              <div class="mini-card">
                <div class="card-prompt">"${i18n.t('secondbrain.example.3')}"</div>
                <div class="card-arrow">→</div>
                <div class="card-result">${i18n.t('secondbrain.example.3.result')}</div>
              </div>
            </div>
          </div>

          <!-- Module: Engine (Automation & Live) -->
          <div class="module-panel" id="module-engine">
            <div class="panel-header text-center">
              <span class="label mono">// ENGINE</span>
              <h2>Automation & Live-Daten</h2>
            </div>

            <div class="engine-grid">
              <div class="engine-features">
                <div class="feature-item-mini">
                  <div class="mini-icon petrol"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/></svg></div>
                  <div>
                    <h4>Emails & Kalender</h4>
                    <p>Sync mit iCloud & Outlook.</p>
                  </div>
                </div>
                <div class="feature-item-mini">
                  <div class="mini-icon petrol"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
                  <div>
                    <h4>Web Research</h4>
                    <p>Deep Research via Perplexity.</p>
                  </div>
                </div>
              </div>

              <div class="live-log-mini">
                <div class="log-header">
                  <span class="mono">${i18n.t('secondbrain.changelog.title')}</span>
                </div>
                <div id="github-changelog-mini" class="mini-changelog-list">
                   <div class="changelog-loading">
                    <div class="loading-spinner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Module: Roadmap & Pricing -->
          <div class="module-panel" id="module-roadmap">
            <div class="panel-header text-center">
              <span class="label mono">// FUTURE</span>
              <h2>Der Weg nach vorn</h2>
            </div>

            <div class="future-grid">
              <div class="roadmap-compact">
                <div class="timeline-mini">
                  <div class="time-item done"><span>PARA-System</span></div>
                  <div class="time-item done"><span>AI Agent</span></div>
                  <div class="time-item active"><span>Final Polishing</span></div>
                  <div class="time-item future"><span>Public Launch</span></div>
                </div>
              </div>

              <div class="pricing-compact pricing-blurred">
                <div class="mini-price-card pro">
                  <div class="price-badge">Popular</div>
                  <h3>Pro</h3>
                  <div class="price-val">9€ <small>/mo</small></div>
                  <button class="btn btn-primary-violet btn-sm">Get Access</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Bereit für dein Second Brain?</h2>
          <div class="cta-btns">
            <a href="https://pocketassistant.polarlabs.de/login" target="_blank" rel="noopener noreferrer" class="btn btn-primary-violet btn-lg">${i18n.t('secondbrain.try')}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initSecondBrainPage(): void {
  // Module Navigation Logic
  const navBtns = document.querySelectorAll('.module-nav-btn');
  const panels = document.querySelectorAll('.module-panel');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-module');
      
      // Update Nav
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update Panels with Animation
      panels.forEach(p => {
        p.classList.remove('active');
        if (p.id === 'module-' + target) {
          p.classList.add('active');
        }
      });
    });
  });

  // Smooth Scroll for Hero Button
  const scrollBtn = document.querySelector('.scroll-to-exp');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Fetch GitHub Commits for the mini log
  fetchLatestCommitsMini();
}

async function fetchLatestCommitsMini(): Promise<void> {
  const container = document.getElementById('github-changelog-mini');
  if (!container) return;

  try {
    const response = await fetch('https://api.github.com/repos/Monochromus/PocketAssistent/commits?per_page=4');
    if (!response.ok) throw new Error('Failed to fetch commits');
    const commits = await response.json();
    
    container.innerHTML = commits.map((c: any) => `
      <div class="mini-log-entry">
        <span class="log-date-mini">${new Date(c.commit.author.date).toLocaleDateString(undefined, {month: 'short', day: 'numeric'})}</span>
        <span class="log-msg-mini">${c.commit.message.split('\n')[0]}</span>
      </div>
    `).join('');
  } catch (error) {
    container.innerHTML = '<div class="log-error-mini">Updates currently offline</div>';
  }
}

export const secondBrainStyles = `
  .experience-section {
    background: var(--warm-bg-dark);
    padding: var(--space-12) 0;
    min-height: 800px;
  }

  /* Module Navigation */
  .module-nav-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: var(--space-10);
    position: sticky;
    top: 80px;
    z-index: 100;
  }

  .module-nav {
    display: flex;
    background: var(--warm-bg-medium);
    border: 1px solid var(--warm-border);
    padding: var(--space-1);
    border-radius: 50px;
    box-shadow: var(--shadow-lg);
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
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .module-nav-btn:hover {
    color: var(--warm-text-primary);
    background: rgba(255, 255, 255, 0.05);
  }

  .module-nav-btn.active {
    background: var(--petrol-soft);
    color: white;
    box-shadow: 0 4px 12px rgba(69, 196, 176, 0.3);
  }

  /* Viewport & Panels */
  .module-content-viewport {
    position: relative;
    background: var(--warm-bg-medium);
    border: 1px solid var(--warm-border);
    border-radius: 32px;
    padding: var(--space-10);
    min-height: 600px;
    overflow: hidden;
  }

  .module-panel {
    display: none;
    animation: slideUp 0.5s ease-out forwards;
  }

  .module-panel.active {
    display: block;
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Compact UI Elements */
  .problem-grid-compact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
    margin: var(--space-8) 0;
  }

  .problem-item-mini {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4);
    background: var(--warm-bg-dark);
    border-radius: 16px;
    font-size: var(--text-sm);
  }

  .mini-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .mini-icon.red { background: rgba(239, 68, 68, 0.1); color: #ef4444; }
  .mini-icon.petrol { background: rgba(69, 196, 176, 0.1); color: var(--petrol-soft); }

  .vision-quote-box {
    margin: var(--space-8) 0;
    padding: var(--space-6);
    background: var(--warm-bg-light);
    border-radius: 20px;
    border-left: 4px solid var(--petrol-soft);
  }

  .problem-quote-mini {
    font-style: italic;
    font-family: var(--font-playful);
    text-align: center;
    color: var(--warm-text-primary);
    margin: 0;
  }

  .panel-divider {
    height: 1px;
    background: var(--warm-border);
    margin: var(--space-12) 0;
  }

  .flow-visual-mini {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-4);
    margin-top: var(--space-8);
  }

  .flow-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid var(--warm-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    text-transform: uppercase;
    color: var(--warm-text-muted);
  }

  .flow-circle-main {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--petrol-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(69, 196, 176, 0.4);
  }

  .flow-circle-main img { width: 40px; }

  .flow-line {
    width: 40px;
    height: 2px;
    background: var(--warm-border);
  }

  /* Brain Module Styles */
  .phases-grid-compact {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-6);
    margin-top: var(--space-8);
  }

  .phase-card-mini {
    background: var(--warm-bg-dark);
    padding: var(--space-6);
    border-radius: 20px;
    position: relative;
  }

  .phase-tag {
    position: absolute;
    top: -10px;
    left: 20px;
    background: var(--petrol-soft);
    color: white;
    font-size: 10px;
    padding: 2px 8px;
    border-radius: 10px;
    font-family: var(--font-mono);
  }

  .examples-grid-mini {
    margin-top: var(--space-8);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .mini-card {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4);
    background: var(--warm-bg-light);
    border-radius: 12px;
  }

  .card-prompt { font-style: italic; color: var(--warm-text-muted); flex: 1; }
  .card-result { color: var(--petrol-soft); font-weight: 600; flex: 1; }

  /* Engine Styles */
  .engine-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
    margin-top: var(--space-8);
  }

  .engine-features {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .feature-item-mini {
    display: flex;
    gap: var(--space-4);
    padding: var(--space-5);
    background: var(--warm-bg-dark);
    border-radius: 16px;
  }

  .live-log-mini {
    background: #1a1a1a;
    border-radius: 20px;
    padding: var(--space-5);
    display: flex;
    flex-direction: column;
  }

  .log-header {
    border-bottom: 1px solid #333;
    padding-bottom: var(--space-3);
    margin-bottom: var(--space-3);
    color: var(--petrol-soft);
    font-size: 12px;
  }

  .mini-log-entry {
    display: flex;
    gap: var(--space-3);
    padding: 6px 0;
    font-size: 11px;
    border-bottom: 1px solid #222;
  }

  .log-date-mini { color: #555; white-space: nowrap; }
  .log-msg-mini { color: #eee; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  /* Future Styles */
  .future-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
    margin-top: var(--space-8);
    align-items: center;
  }

  .timeline-mini {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .time-item {
    padding: var(--space-3) var(--space-5);
    background: var(--warm-bg-dark);
    border-radius: 10px;
    font-size: var(--text-sm);
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }

  .time-item::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--warm-border);
  }

  .time-item.done { opacity: 0.6; }
  .time-item.done::before { background: var(--petrol-soft); }
  .time-item.active { border: 1px solid var(--petrol-soft); }
  .time-item.active::before { background: var(--petrol-soft); box-shadow: 0 0 10px var(--petrol-soft); }

  .mini-price-card {
    background: var(--warm-bg-dark);
    border: 1px solid var(--petrol-soft);
    border-radius: 24px;
    padding: var(--space-6);
    text-align: center;
    position: relative;
  }

  .price-badge {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--petrol-soft);
    color: white;
    font-size: 10px;
    padding: 2px 10px;
    border-radius: 10px;
  }

  .price-val { font-size: 24px; font-weight: 700; margin: 10px 0; }
  .price-val small { font-size: 12px; color: var(--warm-text-muted); }

  .pricing-blurred {
    filter: blur(6px);
    pointer-events: none;
    user-select: none;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    .module-nav-wrapper { top: 60px; }
    .module-nav { transform: scale(0.9); }
    .module-content-viewport { padding: var(--space-6); }
    .problem-grid-compact, .phases-grid-compact, .engine-grid, .future-grid {
      grid-template-columns: 1fr;
    }
    .flow-visual-mini { transform: scale(0.8); }
  }
`;
