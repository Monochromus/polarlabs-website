import { i18n } from '../utils/translations';

export function renderContactPage(): string {
  return `
    <section class="page-hero-warm">
      <div class="page-hero-bg">
        <div class="page-hero-orb page-hero-orb-1"></div>
        <div class="page-hero-orb page-hero-orb-2"></div>
      </div>
      <div class="container">
        <span class="label mono text-petrol">//contact</span>
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

              <button type="submit" class="btn btn-warm contact-submit">
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
                <a href="mailto:kontakt@polarlabs.de" class="notice-email mono">kontakt@polarlabs.de</a>
              </div>
            </div>
          </div>

          <div class="contact-info">
            <div class="contact-info-card">
              <h3>Polar Labs</h3>
              <p class="mono">kontakt@polarlabs.de</p>
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
  /* Warm utilities */
  .text-petrol {
    color: var(--petrol-soft);
  }

  /* Page Hero - Warm */
  .page-hero-warm {
    position: relative;
    padding: calc(64px + var(--space-16)) 0 var(--space-12);
    background: linear-gradient(
      135deg,
      var(--warm-bg-dark) 0%,
      var(--warm-bg-medium) 50%,
      var(--warm-bg-dark) 100%
    );
    border-bottom: 1px solid rgba(168, 162, 158, 0.1);
    overflow: hidden;
  }

  .page-hero-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .page-hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
  }

  .page-hero-orb-1 {
    top: 20%;
    right: 10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(69, 196, 176, 0.08) 0%, transparent 70%);
    animation: floatOrb 15s ease-in-out infinite;
  }

  .page-hero-orb-2 {
    bottom: 10%;
    left: 5%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(168, 162, 158, 0.06) 0%, transparent 70%);
    animation: floatOrb 20s ease-in-out infinite reverse;
  }

  @keyframes floatOrb {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(20px, -30px) scale(1.05); }
    66% { transform: translate(-15px, 20px) scale(0.95); }
  }

  .page-hero-warm h1 {
    margin-top: var(--space-4);
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
    position: relative;
    z-index: 1;
  }

  .page-hero-description {
    margin-top: var(--space-4);
    font-size: var(--text-lg);
    max-width: 600px;
    color: var(--warm-text-secondary);
    position: relative;
    z-index: 1;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-16);
    align-items: start;
  }

  /* Form Wrapper - Glassmorphism */
  .contact-form-wrapper {
    background: rgba(41, 37, 36, 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(168, 162, 158, 0.1);
    border-radius: var(--radius-lg);
    padding: var(--space-8);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .form-label {
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
    font-size: var(--text-sm);
    margin-bottom: var(--space-2);
    display: block;
  }

  .form-input,
  .form-select,
  .form-textarea {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    background: rgba(28, 25, 23, 0.6);
    border: 1px solid rgba(168, 162, 158, 0.15);
    border-radius: var(--radius-md);
    color: var(--warm-text-primary);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    transition: all var(--transition-fast);
  }

  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    outline: none;
    border-color: var(--petrol-soft);
    box-shadow: 0 0 0 3px rgba(69, 196, 176, 0.1);
  }

  .form-input::placeholder,
  .form-textarea::placeholder {
    color: var(--warm-text-muted);
  }

  .form-select {
    cursor: pointer;
  }

  .form-select option {
    background: var(--warm-bg-dark);
    color: var(--warm-text-primary);
  }

  .form-textarea {
    min-height: 150px;
    resize: vertical;
  }

  .contact-submit {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    min-width: 140px;
    justify-content: center;
  }

  /* btn-warm defined here for contact page */
  .btn-warm {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-6);
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

  .btn-warm:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  /* Contact Notice - Glassmorphism */
  .contact-notice {
    display: flex;
    gap: var(--space-4);
    margin-top: var(--space-8);
    padding: var(--space-6);
    background: rgba(28, 25, 23, 0.5);
    border: 1px solid rgba(168, 162, 158, 0.1);
    border-radius: var(--radius-md);
    border-left: 2px solid var(--petrol-soft);
  }

  .notice-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    color: var(--petrol-soft);
  }

  .notice-icon svg {
    width: 100%;
    height: 100%;
  }

  .notice-content p {
    font-size: var(--text-sm);
    margin-bottom: var(--space-2);
    color: var(--warm-text-secondary);
  }

  .notice-email {
    font-size: var(--text-sm);
    color: var(--petrol-soft);
    transition: opacity var(--transition-fast);
  }

  .notice-email:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  .contact-info {
    position: sticky;
    top: calc(64px + var(--space-8));
  }

  /* Contact Info Card - Glassmorphism */
  .contact-info-card {
    padding: var(--space-8);
    background: rgba(41, 37, 36, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(168, 162, 158, 0.1);
    border-radius: var(--radius-lg);
  }

  .contact-info-card h3 {
    margin-bottom: var(--space-2);
    font-family: var(--font-playful);
    color: var(--warm-text-primary);
  }

  .contact-info-card p {
    color: var(--warm-text-muted);
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
    background: var(--petrol-soft);
    box-shadow: 0 0 10px rgba(69, 196, 176, 0.4);
  }

  .contact-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--petrol-soft), transparent);
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

    .contact-form-wrapper {
      padding: var(--space-6);
    }
  }
`;
