import { i18n } from '../utils/translations';

export function renderImpressumPage(): string {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="label mono">//legal</span>
        <h1>${i18n.t('impressum.title')}</h1>
      </div>
    </section>

    <section class="section legal-section">
      <div class="container">
        <div class="legal-content">
          <article class="legal-block">
            <h2>${i18n.t('impressum.tmg')}</h2>
            <address class="legal-address">
              <p><strong>[Name / Firma]</strong></p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ Ort]</p>
              <p>[Land]</p>
            </address>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('impressum.contact')}</h2>
            <p>E-Mail: <a href="mailto:contact@polarlabs.art" class="legal-link">contact@polarlabs.art</a></p>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('impressum.responsible')}</h2>
            <address class="legal-address">
              <p><strong>[Name]</strong></p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ Ort]</p>
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
  .legal-section {
    background: var(--background);
  }

  .legal-content {
    max-width: 700px;
  }

  .legal-block {
    margin-bottom: var(--space-12);
    padding-bottom: var(--space-8);
    border-bottom: 1px solid var(--border);
  }

  .legal-block:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .legal-block h2 {
    font-size: var(--text-xl);
    margin-bottom: var(--space-4);
  }

  .legal-address {
    font-style: normal;
    line-height: 1.8;
  }

  .legal-address p {
    color: var(--text-secondary);
  }

  .legal-link {
    color: var(--aurora-cyan);
    text-decoration: none;
  }

  .legal-link:hover {
    text-decoration: underline;
  }

  .legal-subsection {
    margin-top: var(--space-6);
  }

  .legal-subsection h3 {
    font-size: var(--text-base);
    margin-bottom: var(--space-2);
  }

  .legal-subsection p {
    font-size: var(--text-sm);
    line-height: 1.7;
  }
`;
