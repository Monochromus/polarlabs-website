import { i18n } from '../utils/translations';

export function renderContactPage(): string {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="label mono">//contact</span>
        <h1>${i18n.t('contact.title')}</h1>
        <p class="page-hero-description">${i18n.t('contact.description')}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-wrapper">
            <form class="contact-form" id="contact-form">
              <div class="form-group">
                <label class="form-label" for="name">${i18n.t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-input"
                  required
                  autocomplete="name"
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="email">${i18n.t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-input"
                  required
                  autocomplete="email"
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="subject">${i18n.t('contact.form.subject')}</label>
                <select id="subject" name="subject" class="form-select" required>
                  <option value="general">${i18n.t('contact.form.subject.general')}</option>
                  <option value="mapmind">${i18n.t('contact.form.subject.mapmind')}</option>
                  <option value="secondbrain">${i18n.t('contact.form.subject.secondbrain')}</option>
                  <option value="collaboration">${i18n.t('contact.form.subject.collaboration')}</option>
                  <option value="other">${i18n.t('contact.form.subject.other')}</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="message">${i18n.t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  class="form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary contact-submit">
                ${i18n.t('contact.form.submit')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>

            <div class="contact-notice">
              <div class="notice-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <div class="notice-content">
                <p>${i18n.t('contact.form.notice')}</p>
                <a href="mailto:contact@polarlabs.art" class="notice-email mono">contact@polarlabs.art</a>
              </div>
            </div>
          </div>

          <div class="contact-info">
            <div class="contact-info-card">
              <h3>Polar Labs</h3>
              <p class="mono">contact@polarlabs.art</p>
              <div class="contact-decoration">
                <div class="contact-dot"></div>
                <div class="contact-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function initContactPage(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement;

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data: ContactFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      };

      // Log form data (ready for backend integration)
      console.log('Contact form submitted:', data);

      // Show submission feedback
      const submitBtn = form.querySelector('.contact-submit') as HTMLButtonElement;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      `;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        form.reset();
      }, 2000);
    });
  }
}

export const contactStyles = `
  .page-hero {
    padding: calc(64px + var(--space-16)) 0 var(--space-12);
    background: var(--surface);
    border-bottom: 1px solid var(--border);
  }

  .page-hero h1 {
    margin-top: var(--space-4);
  }

  .page-hero-description {
    margin-top: var(--space-4);
    font-size: var(--text-lg);
    max-width: 600px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-16);
    align-items: start;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .contact-submit {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    min-width: 140px;
    justify-content: center;
  }

  .contact-notice {
    display: flex;
    gap: var(--space-4);
    margin-top: var(--space-8);
    padding: var(--space-6);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    border-left: 2px solid var(--aurora-cyan);
  }

  .notice-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    color: var(--aurora-cyan);
  }

  .notice-icon svg {
    width: 100%;
    height: 100%;
  }

  .notice-content p {
    font-size: var(--text-sm);
    margin-bottom: var(--space-2);
  }

  .notice-email {
    font-size: var(--text-sm);
    color: var(--aurora-cyan);
  }

  .notice-email:hover {
    text-decoration: underline;
  }

  .contact-info {
    position: sticky;
    top: calc(64px + var(--space-8));
  }

  .contact-info-card {
    padding: var(--space-8);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
  }

  .contact-info-card h3 {
    margin-bottom: var(--space-2);
  }

  .contact-info-card p {
    color: var(--text-muted);
    font-size: var(--text-sm);
  }

  .contact-decoration {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    margin-top: var(--space-6);
  }

  .contact-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--aurora-cyan);
  }

  .contact-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--aurora-cyan), transparent);
  }

  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }

    .contact-info {
      position: static;
      order: -1;
    }
  }
`;
