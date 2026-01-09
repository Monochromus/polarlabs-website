import { i18n } from '../utils/translations';

export function renderImpressumPage(): string {
  return `
    <section class="page-hero-warm impressum-hero">
      <div class="container">
        <span class="label mono text-petrol">//legal</span>
        <h1>${i18n.t('impressum.title')}</h1>
      </div>
    </section>

    <section class="section legal-section">
      <div class="container">
        <div class="legal-content">
          <article class="legal-block">
            <h2>${i18n.t('impressum.tmg')}</h2>
            <address class="legal-address">
              <p><strong>Polarlabs</strong></p>
              <p>Daniel Sauer</p>
              <p>Holtenauer Strasse</p>
              <p>24106 Kiel</p>
              <p>Deutschland</p>
            </address>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('impressum.contact')}</h2>
            <p>E-Mail: <a href="mailto:kontakt@polarlabs.de" class="legal-link">kontakt@polarlabs.de</a></p>
            <p>Telefon: <a href="tel:+4915229964144" class="legal-link">+49 152 29964144</a></p>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('impressum.responsible')}</h2>
            <address class="legal-address">
              <p><strong>Daniel Sauer</strong></p>
              <p>Holtenauer Strasse</p>
              <p>24106 Kiel</p>
            </address>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('impressum.disclaimer.title')}</h2>

            <section class="legal-subsection">
              <h3>${i18n.t('impressum.disclaimer.content.title')}</h3>
              <p>${i18n.t('impressum.disclaimer.content.text')}</p>
            </section>

            <section class="legal-subsection">
              <h3>${i18n.t('impressum.disclaimer.links.title')}</h3>
              <p>${i18n.t('impressum.disclaimer.links.text')}</p>
            </section>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('impressum.copyright.title')}</h2>
            <p>${i18n.t('impressum.copyright.text')}</p>
          </article>
        </div>
      </div>
    </section>
  `;
}

export function initImpressumPage(): void {
  // No special initialization needed for static content
}

export const impressumStyles = `
  /* Text utility */
  .text-petrol {
    color: var(--petrol-soft);
  }

  /* Impressum Hero - Warm */
  .impressum-hero {
    position: relative;
    padding: calc(64px + var(--space-16)) 0 var(--space-12);
    background: linear-gradient(
      135deg,
      var(--warm-bg-dark) 0%,
      var(--warm-bg-medium) 50%,
      var(--warm-bg-dark) 100%
    );
    border-bottom: 1px solid rgba(168, 162, 158, 0.1);
  }

  .impressum-hero h1 {
    margin-top: var(--space-4);
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
  }

  .legal-section {
    background: var(--warm-bg-dark);
  }

  .legal-content {
    max-width: 700px;
  }

  .legal-block {
    margin-bottom: var(--space-12);
    padding-bottom: var(--space-8);
    border-bottom: 1px solid rgba(168, 162, 158, 0.1);
  }

  .legal-block:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .legal-block h2 {
    font-size: var(--text-xl);
    margin-bottom: var(--space-4);
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
  }

  .legal-address {
    font-style: normal;
    line-height: 1.8;
  }

  .legal-address p {
    color: var(--warm-text-secondary);
  }

  .legal-link {
    color: var(--petrol-soft);
    text-decoration: none;
    transition: opacity var(--transition-fast);
  }

  .legal-link:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  .legal-subsection {
    margin-top: var(--space-6);
  }

  .legal-subsection h3 {
    font-size: var(--text-base);
    margin-bottom: var(--space-2);
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
  }

  .legal-subsection p {
    font-size: var(--text-sm);
    line-height: 1.7;
    color: var(--warm-text-secondary);
  }

  .legal-block p {
    color: var(--warm-text-secondary);
  }
`;
