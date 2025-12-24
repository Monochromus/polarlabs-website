export type Language = 'de' | 'en';

export interface Translations {
  [key: string]: {
    de: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': {
    de: 'Start',
    en: 'Home',
  },
  'nav.products': {
    de: 'Produkte',
    en: 'Products',
  },
  'nav.services': {
    de: 'Dienstleistungen',
    en: 'Services',
  },
  'nav.mapmind': {
    de: 'mapMind',
    en: 'mapMind',
  },
  'nav.secondbrain': {
    de: 'SecondBrain',
    en: 'SecondBrain',
  },
  'nav.contact': {
    de: 'Kontakt',
    en: 'Contact',
  },
  'nav.impressum': {
    de: 'Impressum',
    en: 'Legal Notice',
  },

  // Hero
  'hero.headline': {
    de: 'See what Matters',
    en: 'See what Matters',
  },
  'hero.subline': {
    de: 'AI Tools for the people',
    en: 'AI Tools for the people',
  },
  'hero.cta': {
    de: 'Produkte entdecken',
    en: 'Discover Products',
  },

  // Products Section
  'products.title': {
    de: 'Was wir bauen',
    en: 'What we build',
  },
  'products.vote.question': {
    de: 'Welches Tool interessiert dich am meisten?',
    en: 'Which tool interests you most?',
  },
  'products.vote.hint': {
    de: 'Dein Vote hilft uns bei der Priorisierung',
    en: 'Your vote helps us prioritize',
  },
  'products.status.development': {
    de: 'In Entwicklung',
    en: 'In Development',
  },
  'products.status.concept': {
    de: 'Konzeptphase',
    en: 'Concept Phase',
  },
  'products.learnmore': {
    de: 'Mehr erfahren',
    en: 'Learn more',
  },

  // mapMind
  'mapmind.tagline': {
    de: 'KI-gestützte Karten für personalisierte Entdeckungen',
    en: 'AI-powered maps for personalized discoveries',
  },
  'mapmind.description': {
    de: 'Stelle Fragen in natürlicher Sprache und erhalte interaktive Karten, die genau zeigen, was du suchst.',
    en: 'Ask questions in natural language and receive interactive maps that show exactly what you\'re looking for.',
  },
  'mapmind.hero.title': {
    de: 'mapMind',
    en: 'mapMind',
  },
  'mapmind.hero.subtitle': {
    de: 'ChatGPT meets Google Maps',
    en: 'ChatGPT meets Google Maps',
  },
  'mapmind.hero.description': {
    de: 'Eine KI-gestützte Kartenanwendung, die natürliche Sprache versteht und personalisierte, fokussierte Karten erstellt.',
    en: 'An AI-powered map application that understands natural language and creates personalized, focused maps.',
  },
  'mapmind.concept.title': {
    de: 'Das Konzept',
    en: 'The Concept',
  },
  'mapmind.concept.p1': {
    de: 'mapMind ist keine Navigations-App für den Straßenverkehr. Es ist ein Werkzeug für personalisierte Kartenvisualisierungen.',
    en: 'mapMind is not a navigation app for traffic. It\'s a tool for personalized map visualizations.',
  },
  'mapmind.concept.p2': {
    de: 'Markiere Orte und Zonen basierend auf deinen Fragen. Die KI recherchiert Zusatzinformationen – Öffnungszeiten, Wikipedia-Einträge, Events – und zeigt sie als kontextuelle Tooltips.',
    en: 'Mark locations and zones based on your questions. The AI researches additional information – opening hours, Wikipedia entries, events – and displays them as contextual tooltips.',
  },
  'mapmind.concept.p3': {
    de: 'Die Karte zeigt nur, wonach du gefragt hast. Keine Ablenkung, nur Relevanz.',
    en: 'The map shows only what you asked for. No distraction, just relevance.',
  },
  'mapmind.examples.title': {
    de: 'Beispielanfragen',
    en: 'Example Queries',
  },
  'mapmind.example.1': {
    de: 'Welche McDonald\'s sind in meiner Nähe? Zeige die drei nächsten mit Öffnungszeiten.',
    en: 'Which McDonald\'s are near me? Show the three closest with opening hours.',
  },
  'mapmind.example.2': {
    de: 'Zeige mir Wikipedia-Ereignisse im Umkreis von 5 km.',
    en: 'Show me Wikipedia events within a 5 km radius.',
  },
  'mapmind.example.3': {
    de: 'Wir gehen heute feiern – zeige alle Clubs der Stadt mit heutigen Events.',
    en: 'We\'re going out tonight – show all clubs in the city with today\'s events.',
  },
  'mapmind.example.4': {
    de: 'Konzerte und Theater diese Woche in Berlin.',
    en: 'Concerts and theaters this week in Berlin.',
  },
  'mapmind.features.title': {
    de: 'Features',
    en: 'Features',
  },
  'mapmind.feature.1.title': {
    de: 'Natürliche Spracheingabe',
    en: 'Natural Language Input',
  },
  'mapmind.feature.1.desc': {
    de: 'Stelle Fragen wie du sie einem Freund stellen würdest.',
    en: 'Ask questions like you would ask a friend.',
  },
  'mapmind.feature.2.title': {
    de: 'Kontextuelle Informationen',
    en: 'Contextual Information',
  },
  'mapmind.feature.2.desc': {
    de: 'Tooltips mit relevanten Details zu jedem Ort.',
    en: 'Tooltips with relevant details for each location.',
  },
  'mapmind.feature.3.title': {
    de: 'Fokussierte Karten',
    en: 'Focused Maps',
  },
  'mapmind.feature.3.desc': {
    de: 'Keine Überladung – nur das, was du suchst.',
    en: 'No clutter – just what you\'re looking for.',
  },
  'mapmind.feature.4.title': {
    de: 'Export & Offline',
    en: 'Export & Offline',
  },
  'mapmind.feature.4.desc': {
    de: 'Speichere und nutze deine Karten auch ohne Internet.',
    en: 'Save and use your maps even without internet.',
  },
  'mapmind.roadmap.title': {
    de: 'Roadmap',
    en: 'Roadmap',
  },
  'mapmind.cta': {
    de: 'Early Access anfragen',
    en: 'Request Early Access',
  },
  'mapmind.try': {
    de: 'App öffnen',
    en: 'Open App',
  },

  // SecondBrainAgent
  'secondbrain.tagline': {
    de: 'Dein KI-Agent für Produktivität',
    en: 'Your AI agent for productivity',
  },
  'secondbrain.description': {
    de: 'Ein KI-Agent, der Projekte, Todos, Notizen und Kalender verknüpft – basierend auf dem Second Brain Prinzip.',
    en: 'An AI agent that connects projects, todos, notes and calendar – based on the Second Brain principle.',
  },
  'secondbrain.hero.title': {
    de: 'SecondBrainAgent',
    en: 'SecondBrainAgent',
  },
  'secondbrain.hero.subtitle': {
    de: 'Das Second Brain Prinzip, automatisiert',
    en: 'The Second Brain Principle, Automated',
  },
  'secondbrain.hero.description': {
    de: 'Eine Produktivitäts-App, die als externes Gedächtnis dient. Ein KI-Agent verwaltet Projekte, Todos, Notizen, Ressourcen und Kalender.',
    en: 'A productivity app that serves as an external memory. An AI agent manages projects, todos, notes, resources and calendar.',
  },
  'secondbrain.concept.title': {
    de: 'Das Konzept',
    en: 'The Concept',
  },
  'secondbrain.concept.p1': {
    de: 'Nach Tiago Forte besteht das Second Brain aus vier Schritten: Erfasse, organisiere, destilliere, teile.',
    en: 'According to Tiago Forte, the Second Brain consists of four steps: Capture, organize, distill, express.',
  },
  'secondbrain.concept.p2': {
    de: 'SecondBrainAgent automatisiert diese Schritte durch KI. Der Nutzer behält die Kontrolle, die KI übernimmt die Arbeit.',
    en: 'SecondBrainAgent automates these steps through AI. The user maintains control, the AI does the work.',
  },
  'secondbrain.concept.p3': {
    de: 'Ein Eingabefeld für natürliche Sprache. Ein KI-Agent, der versteht und handelt.',
    en: 'A natural language input field. An AI agent that understands and acts.',
  },
  'secondbrain.features.title': {
    de: 'Features',
    en: 'Features',
  },
  'secondbrain.feature.1.title': {
    de: 'Kalender-Integration',
    en: 'Calendar Integration',
  },
  'secondbrain.feature.1.desc': {
    de: 'Termine anzeigen, anlegen und verwalten per Sprache.',
    en: 'View, create, and manage appointments via voice.',
  },
  'secondbrain.feature.2.title': {
    de: 'Todo-Management',
    en: 'Todo Management',
  },
  'secondbrain.feature.2.desc': {
    de: 'Aufgaben erfassen und organisieren ohne Friction.',
    en: 'Capture and organize tasks without friction.',
  },
  'secondbrain.feature.3.title': {
    de: 'Verknüpfte Notizen',
    en: 'Connected Notes',
  },
  'secondbrain.feature.3.desc': {
    de: 'Notizen, die mit Projekten und Terminen verbunden sind.',
    en: 'Notes connected to projects and appointments.',
  },
  'secondbrain.feature.4.title': {
    de: 'KI-Agenten-Workflow',
    en: 'AI Agent Workflow',
  },
  'secondbrain.feature.4.desc': {
    de: 'Komplexe Anfragen werden durch intelligente Agenten verarbeitet.',
    en: 'Complex requests are processed by intelligent agents.',
  },
  'secondbrain.roadmap.title': {
    de: 'Roadmap',
    en: 'Roadmap',
  },
  'secondbrain.cta': {
    de: 'Für Updates anmelden',
    en: 'Sign up for Updates',
  },
  'secondbrain.try': {
    de: 'App öffnen',
    en: 'Open App',
  },

  // Roadmap Items - mapMind
  'roadmap.mapmind.1': {
    de: 'OpenStreetMaps Karte',
    en: 'OpenStreetMaps Map',
  },
  'roadmap.mapmind.1.desc': {
    de: 'Konventionelle Suche',
    en: 'Conventional Search',
  },
  'roadmap.mapmind.2': {
    de: 'Styles Menü',
    en: 'Styles Menu',
  },
  'roadmap.mapmind.2.desc': {
    de: 'Karten-Individualisierung',
    en: 'Map Customization',
  },
  'roadmap.mapmind.3': {
    de: 'Annotations Menü',
    en: 'Annotations Menu',
  },
  'roadmap.mapmind.3.desc': {
    de: 'Manuelles Zeichnen',
    en: 'Manual Drawing',
  },
  'roadmap.mapmind.4': {
    de: 'LLM Hintergrundrecherche',
    en: 'LLM Background Research',
  },
  'roadmap.mapmind.4.desc': {
    de: 'KI-gestützte Suche',
    en: 'AI-powered Search',
  },
  'roadmap.mapmind.5': {
    de: 'Satellitenbilder',
    en: 'Satellite Imagery',
  },
  'roadmap.mapmind.5.desc': {
    de: 'Erweiterte Ansicht',
    en: 'Extended View',
  },
  'roadmap.mapmind.6': {
    de: 'LLM Annotationen & Styles',
    en: 'LLM Annotations & Styles',
  },
  'roadmap.mapmind.6.desc': {
    de: 'KI-Integration',
    en: 'AI Integration',
  },
  'roadmap.mapmind.7': {
    de: 'MVP Release',
    en: 'MVP Release',
  },
  'roadmap.mapmind.7.desc': {
    de: 'Erste vollständige Version',
    en: 'First Complete Version',
  },
  'roadmap.mapmind.8': {
    de: 'iOS App',
    en: 'iOS App',
  },
  'roadmap.mapmind.8.desc': {
    de: 'App Store Release',
    en: 'App Store Release',
  },

  // Roadmap Items - SecondBrainAgent
  'roadmap.secondbrain.1': {
    de: 'Vision & Konzept',
    en: 'Vision & Concept',
  },
  'roadmap.secondbrain.1.desc': {
    de: 'Grundidee entwickelt',
    en: 'Core Idea Developed',
  },
  'roadmap.secondbrain.2': {
    de: 'Manuelle Verwaltung',
    en: 'Manual Management',
  },
  'roadmap.secondbrain.2.desc': {
    de: 'Projekte, Todos, Notizen, Kalender',
    en: 'Projects, Todos, Notes, Calendar',
  },
  'roadmap.secondbrain.3': {
    de: 'LLM Integration',
    en: 'LLM Integration',
  },
  'roadmap.secondbrain.3.desc': {
    de: 'Erstellen, Löschen, Verknüpfen',
    en: 'Create, Delete, Link',
  },
  'roadmap.secondbrain.4': {
    de: 'Projektmanagement Tools',
    en: 'Project Management Tools',
  },
  'roadmap.secondbrain.4.desc': {
    de: 'Erweiterte Funktionen',
    en: 'Extended Features',
  },
  'roadmap.secondbrain.5': {
    de: 'Siri Kurzbefehle',
    en: 'Siri Shortcuts',
  },
  'roadmap.secondbrain.5.desc': {
    de: 'Sperrbildschirm-Zugriff',
    en: 'Lock Screen Access',
  },
  'roadmap.secondbrain.6': {
    de: 'App Store Release',
    en: 'App Store Release',
  },
  'roadmap.secondbrain.6.desc': {
    de: 'iOS Veröffentlichung',
    en: 'iOS Publication',
  },

  // Philosophy Quotes
  'philosophy.quote.1': {
    de: 'Quiet tools for complex problems.',
    en: 'Quiet tools for complex problems.',
  },
  'philosophy.quote.2': {
    de: 'Powerful tools shouldn\'t require a manual.',
    en: 'Powerful tools shouldn\'t require a manual.',
  },
  'philosophy.click.hint': {
    de: 'Klicken für mehr',
    en: 'Click for more',
  },

  // Services
  'services.description': {
    de: 'Individuelle Lösungen und Beratung für Ihre Projekte.',
    en: 'Custom solutions and consulting for your projects.',
  },
  'services.coming.title': {
    de: 'Demnächst verfügbar',
    en: 'Coming Soon',
  },
  'services.coming.text': {
    de: 'Unsere Dienstleistungen werden bald hier vorgestellt. Kontaktieren Sie uns für individuelle Anfragen.',
    en: 'Our services will be presented here soon. Contact us for custom inquiries.',
  },

  // Contact
  'contact.title': {
    de: 'Kontakt',
    en: 'Contact',
  },
  'contact.description': {
    de: 'Haben Sie Fragen oder möchten Sie mit uns zusammenarbeiten? Wir freuen uns auf Ihre Nachricht.',
    en: 'Have questions or want to work with us? We look forward to hearing from you.',
  },
  'contact.form.name': {
    de: 'Name',
    en: 'Name',
  },
  'contact.form.email': {
    de: 'E-Mail',
    en: 'Email',
  },
  'contact.form.subject': {
    de: 'Betreff',
    en: 'Subject',
  },
  'contact.form.subject.general': {
    de: 'Allgemeine Anfrage',
    en: 'General Inquiry',
  },
  'contact.form.subject.mapmind': {
    de: 'mapMind Early Access',
    en: 'mapMind Early Access',
  },
  'contact.form.subject.secondbrain': {
    de: 'SecondBrain Updates',
    en: 'SecondBrain Updates',
  },
  'contact.form.subject.collaboration': {
    de: 'Zusammenarbeit',
    en: 'Collaboration',
  },
  'contact.form.subject.other': {
    de: 'Sonstiges',
    en: 'Other',
  },
  'contact.form.message': {
    de: 'Nachricht',
    en: 'Message',
  },
  'contact.form.submit': {
    de: 'Absenden',
    en: 'Send',
  },
  'contact.form.notice': {
    de: 'Das Kontaktformular ist derzeit noch nicht aktiv. Bitte kontaktieren Sie uns alternativ per E-Mail:',
    en: 'The contact form is not yet active. Please contact us alternatively via email:',
  },

  // Impressum
  'impressum.title': {
    de: 'Impressum',
    en: 'Legal Notice',
  },
  'impressum.tmg': {
    de: 'Angaben gemäß § 5 TMG',
    en: 'Information according to § 5 TMG',
  },
  'impressum.contact': {
    de: 'Kontakt',
    en: 'Contact',
  },
  'impressum.responsible': {
    de: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
    en: 'Responsible for content according to § 55 Abs. 2 RStV',
  },
  'impressum.disclaimer.title': {
    de: 'Haftungsausschluss',
    en: 'Disclaimer',
  },
  'impressum.disclaimer.content.title': {
    de: 'Haftung für Inhalte',
    en: 'Liability for Content',
  },
  'impressum.disclaimer.content.text': {
    de: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.',
    en: 'The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content.',
  },
  'impressum.disclaimer.links.title': {
    de: 'Haftung für Links',
    en: 'Liability for Links',
  },
  'impressum.disclaimer.links.text': {
    de: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.',
    en: 'Our website contains links to external third-party websites over whose content we have no influence. The respective provider is always responsible for the content of the linked pages.',
  },
  'impressum.copyright.title': {
    de: 'Urheberrecht',
    en: 'Copyright',
  },
  'impressum.copyright.text': {
    de: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.',
    en: 'The content and works created by the site operators on these pages are subject to German copyright law.',
  },

  // Footer
  'footer.copyright': {
    de: '© 2024 Polar Labs. Alle Rechte vorbehalten.',
    en: '© 2024 Polar Labs. All rights reserved.',
  },

  // Misc
  'theme.toggle': {
    de: 'Design wechseln',
    en: 'Toggle theme',
  },
  'language.toggle': {
    de: 'Sprache wechseln',
    en: 'Change language',
  },
  'menu.open': {
    de: 'Menü öffnen',
    en: 'Open menu',
  },
  'menu.close': {
    de: 'Menü schließen',
    en: 'Close menu',
  },
};

class I18n {
  private currentLanguage: Language;
  private listeners: ((lang: Language) => void)[] = [];

  constructor() {
    this.currentLanguage = this.getInitialLanguage();
    this.updateDocumentLanguage();
  }

  private getInitialLanguage(): Language {
    const stored = localStorage.getItem('polarlabs-language');
    if (stored === 'de' || stored === 'en') {
      return stored;
    }
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'de' ? 'de' : 'en';
  }

  private updateDocumentLanguage(): void {
    document.documentElement.lang = this.currentLanguage;
  }

  get language(): Language {
    return this.currentLanguage;
  }

  setLanguage(lang: Language): void {
    this.currentLanguage = lang;
    localStorage.setItem('polarlabs-language', lang);
    this.updateDocumentLanguage();
    this.listeners.forEach(callback => callback(lang));
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLanguage === 'de' ? 'en' : 'de');
  }

  t(key: string): string {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return translation[this.currentLanguage];
  }

  onLanguageChange(callback: (lang: Language) => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }
}

export const i18n = new I18n();
