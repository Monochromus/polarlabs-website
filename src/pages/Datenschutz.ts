import { i18n } from '../utils/translations';

export function renderDatenschutzPage(): string {
  return `
    <section class="page-hero-warm datenschutz-hero">
      <div class="container">
        <span class="label mono text-petrol">//privacy</span>
        <h1>${i18n.t('datenschutz.title')}</h1>
      </div>
    </section>

    <section class="section legal-section">
      <div class="container">
        <div class="legal-content">
          <article class="legal-block">
            <h2>${i18n.t('datenschutz.overview.title')}</h2>
            <p>${i18n.t('datenschutz.overview.text')}</p>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('datenschutz.responsible.title')}</h2>
            <p>${i18n.t('datenschutz.responsible.text')}</p>
            <address class="legal-address">
              <p>E-Mail: <a href="mailto:contact@polarlabs.art" class="legal-link">contact@polarlabs.art</a></p>
            </address>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('datenschutz.hosting.title')}</h2>
            <p>${i18n.t('datenschutz.hosting.text')}</p>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('datenschutz.data.title')}</h2>

            <section class="legal-subsection">
              <h3>${i18n.t('datenschutz.data.visit.title')}</h3>
              <p>${i18n.t('datenschutz.data.visit.text')}</p>
            </section>

            <section class="legal-subsection">
              <h3>${i18n.t('datenschutz.data.storage.title')}</h3>
              <p>${i18n.t('datenschutz.data.storage.text')}</p>
              <ul class="legal-list">
                <li>${i18n.t('datenschutz.data.storage.item1')}</li>
                <li>${i18n.t('datenschutz.data.storage.item2')}</li>
                <li>${i18n.t('datenschutz.data.storage.item3')}</li>
              </ul>
            </section>

            <section class="legal-subsection">
              <h3>${i18n.t('datenschutz.data.contact.title')}</h3>
              <p>${i18n.t('datenschutz.data.contact.text')}</p>
            </section>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('datenschutz.cookies.title')}</h2>
            <p>${i18n.t('datenschutz.cookies.text')}</p>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('datenschutz.thirdparty.title')}</h2>

            <section class="legal-subsection">
              <h3>${i18n.t('datenschutz.thirdparty.fonts.title')}</h3>
              <p>${i18n.t('datenschutz.thirdparty.fonts.text')}</p>
            </section>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('datenschutz.rights.title')}</h2>
            <p>${i18n.t('datenschutz.rights.text')}</p>
            <ul class="legal-list">
              <li>${i18n.t('datenschutz.rights.item1')}</li>
              <li>${i18n.t('datenschutz.rights.item2')}</li>
              <li>${i18n.t('datenschutz.rights.item3')}</li>
              <li>${i18n.t('datenschutz.rights.item4')}</li>
              <li>${i18n.t('datenschutz.rights.item5')}</li>
            </ul>
          </article>

          <article class="legal-block">
            <h2>${i18n.t('datenschutz.changes.title')}</h2>
            <p>${i18n.t('datenschutz.changes.text')}</p>
          </article>
        </div>
      </div>
    </section>
  `;
}

export function initDatenschutzPage(): void {
  // No special initialization needed for static content
}

export const datenschutzStyles = `
  /* Datenschutz Hero - Warm */
  .datenschutz-hero {
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

  .datenschutz-hero h1 {
    margin-top: var(--space-4);
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
  }

  .legal-list {
    margin: var(--space-4) 0;
    padding-left: var(--space-6);
    color: var(--warm-text-secondary);
  }

  .legal-list li {
    margin-bottom: var(--space-2);
    line-height: 1.6;
  }
`;
