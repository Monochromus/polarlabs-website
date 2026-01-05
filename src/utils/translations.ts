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
    de: 'Polar Labs',
    en: 'Polar Labs',
  },
  'hero.subline': {
    de: 'AI Tools to make things easy',
    en: 'AI Tools to make things easy',
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
    de: 'Dein Vote beeinflusst die Entwicklung',
    en: 'Your vote influences development',
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

  // Pocket Assistant
  'secondbrain.tagline': {
    de: 'Dein Assistent für Produktivität',
    en: 'Your assistant for productivity',
  },
  'secondbrain.description': {
    de: 'Verwaltet per Sprache Projekte, Todos, Notizen, Kalender und Emails – alles in einer Anfrage.',
    en: 'Manages projects, todos, notes, calendar and emails via voice – all in one request.',
  },
  'secondbrain.hero.title': {
    de: 'Pocket Assistant',
    en: 'Pocket Assistant',
  },
  'secondbrain.hero.subtitle': {
    de: 'Der persönliche Assistent für die Hosentasche!',
    en: 'Your personal pocket assistant!',
  },
  'secondbrain.hero.description': {
    de: 'Organisiert deine Notizen, Todos, Kalender, Emails und alles was es sich zu merken lohnt. Per Kurzbefehl über den Sperrbildschirm erledigt er alles im Hintergrund.',
    en: 'Organizes your notes, todos, calendar, emails and everything worth remembering. Via shortcut from the lock screen, it handles everything in the background.',
  },
  'secondbrain.concept.title': {
    de: 'Das Besondere',
    en: 'What makes it special',
  },
  'secondbrain.concept.p1': {
    de: 'Eine einzige Anfrage kann komplexe Workflows auslösen. Sag zum Beispiel "Suche Events in Berlin nächstes Wochenende, trag die besten in meinen Kalender ein und erstelle Todos für Tickets kaufen" – und der Assistent erledigt alles.',
    en: 'A single request can trigger complex workflows. Say "Find events in Berlin next weekend, add the best ones to my calendar and create todos for buying tickets" – and the assistant handles everything.',
  },
  'secondbrain.concept.p2': {
    de: 'Der Agent recherchiert im Web, erstellt Kalendereinträge und legt passende Aufgaben an. Alles in einem Schritt, ohne komplizierte Menüs.',
    en: 'The agent researches the web, creates calendar entries and sets up matching tasks. All in one step, without complicated menus.',
  },
  'secondbrain.concept.p3': {
    de: 'Mit dem iPhone Kurzbefehl hast du den Assistenten immer griffbereit – direkt vom Sperrbildschirm. Kein App-Öffnen, kein Einloggen.',
    en: 'With the iPhone shortcut, you always have the assistant at hand – directly from the lock screen. No app opening, no logging in.',
  },
  'secondbrain.features.title': {
    de: 'Hauptfunktionen',
    en: 'Key Features',
  },
  'secondbrain.feature.1.title': {
    de: 'Viele Tools',
    en: 'Many Tools',
  },
  'secondbrain.feature.1.desc': {
    de: 'Der Agent kombiniert intelligent Tools für Todos, Kalender, Email, Web-Recherche und mehr.',
    en: 'The agent intelligently combines tools for todos, calendar, email, web research and more.',
  },
  'secondbrain.feature.2.title': {
    de: 'Multi-Account Email',
    en: 'Multi-Account Email',
  },
  'secondbrain.feature.2.desc': {
    de: 'Alle Postfächer (iCloud, Gmail, Outlook, GMX) in einer Oberfläche.',
    en: 'All mailboxes (iCloud, Gmail, Outlook, GMX) in one interface.',
  },
  'secondbrain.feature.3.title': {
    de: 'Kalender-Sync',
    en: 'Calendar Sync',
  },
  'secondbrain.feature.3.desc': {
    de: 'Synchronisation mit iCloud und Outlook Calendar.',
    en: 'Synchronization with iCloud and Outlook Calendar.',
  },
  'secondbrain.feature.4.title': {
    de: 'Bildanalyse',
    en: 'Image Analysis',
  },
  'secondbrain.feature.4.desc': {
    de: 'Termine aus Screenshots extrahieren, Visitenkarten digitalisieren.',
    en: 'Extract appointments from screenshots, digitize business cards.',
  },
  'secondbrain.feature.5.title': {
    de: 'PARA-Organisation',
    en: 'PARA Organization',
  },
  'secondbrain.feature.5.desc': {
    de: 'Projekte, Areas, Ressourcen und Archiv nach bewährter Methode.',
    en: 'Projects, Areas, Resources and Archive following the proven method.',
  },
  'secondbrain.feature.6.title': {
    de: 'Custom Tools',
    en: 'Custom Tools',
  },
  'secondbrain.feature.6.desc': {
    de: 'Eigene interaktive Widgets per Beschreibung erstellen lassen.',
    en: 'Create custom interactive widgets via natural description.',
  },
  'secondbrain.examples.title': {
    de: 'Beispiel-Anfragen',
    en: 'Example Requests',
  },
  'secondbrain.example.1': {
    de: 'Suche Jazz-Konzerte in München im Januar und trag sie ein',
    en: 'Find jazz concerts in Munich in January and add them',
  },
  'secondbrain.example.1.result': {
    de: 'Web-Recherche → Kalendereinträge',
    en: 'Web research → Calendar entries',
  },
  'secondbrain.example.2': {
    de: 'Fasse meine ungelesenen Emails zusammen und erstelle Todos für alles Wichtige',
    en: 'Summarize my unread emails and create todos for everything important',
  },
  'secondbrain.example.2.result': {
    de: 'Email-Analyse → Todo-Erstellung',
    en: 'Email analysis → Todo creation',
  },
  'secondbrain.example.3': {
    de: 'Plane einen Wochenendtrip nach Hamburg',
    en: 'Plan a weekend trip to Hamburg',
  },
  'secondbrain.example.3.result': {
    de: 'Recherche → Projekt + Todos + Kalender',
    en: 'Research → Project + Todos + Calendar',
  },
  'secondbrain.example.4': {
    de: 'Was steht morgen an und welche Emails muss ich beantworten?',
    en: 'What\'s on tomorrow and which emails do I need to answer?',
  },
  'secondbrain.example.4.result': {
    de: 'Kontext aus Kalender + Email-Analyse',
    en: 'Context from calendar + email analysis',
  },
  'secondbrain.roadmap.title': {
    de: 'Roadmap',
    en: 'Roadmap',
  },
  'secondbrain.cta': {
    de: 'Jetzt ausprobieren',
    en: 'Try it now',
  },
  'secondbrain.try': {
    de: 'App öffnen',
    en: 'Open App',
  },
  'secondbrain.pricing.title': {
    de: 'Preise',
    en: 'Pricing',
  },
  'secondbrain.pricing.free': {
    de: 'Free',
    en: 'Free',
  },
  'secondbrain.pricing.free.price': {
    de: '0 €',
    en: '€0',
  },
  'secondbrain.pricing.free.period': {
    de: 'für immer',
    en: 'forever',
  },
  'secondbrain.pricing.free.desc': {
    de: 'Einfach nutzen',
    en: 'Just use it',
  },
  'secondbrain.pricing.free.feature.1': {
    de: 'AI Agent mit GPT-4o-mini (10 Anfragen/Tag)',
    en: 'AI Agent with GPT-4o-mini (10 requests/day)',
  },
  'secondbrain.pricing.free.feature.2': {
    de: 'iPhone Kurzbefehl (Sperrbildschirm)',
    en: 'iPhone Shortcut (lock screen)',
  },
  'secondbrain.pricing.free.feature.3': {
    de: 'Web Research',
    en: 'Web Research',
  },
  'secondbrain.pricing.free.feature.4': {
    de: 'Bildanalyse (1x täglich)',
    en: 'Image analysis (1x daily)',
  },
  'secondbrain.pricing.free.feature.5': {
    de: 'PARA-Organisation & Notizen',
    en: 'PARA organization & notes',
  },
  'secondbrain.pricing.free.feature.6': {
    de: '2 Email-Konten & Kalender-Sync',
    en: '2 email accounts & calendar sync',
  },
  'secondbrain.pricing.ownkey': {
    de: 'Pro - OwnKey',
    en: 'Pro - OwnKey',
  },
  'secondbrain.pricing.ownkey.price': {
    de: '2 €',
    en: '€2',
  },
  'secondbrain.pricing.ownkey.period': {
    de: 'pro Monat',
    en: 'per month',
  },
  'secondbrain.pricing.ownkey.desc': {
    de: 'Nutze deine eigenen API Keys',
    en: 'Use your own API keys',
  },
  'secondbrain.pricing.ownkey.includes': {
    de: 'Alles aus Free, plus:',
    en: 'Everything in Free, plus:',
  },
  'secondbrain.pricing.ownkey.feature.1': {
    de: 'Eigener OpenAI API Key',
    en: 'Your own OpenAI API key',
  },
  'secondbrain.pricing.ownkey.feature.2': {
    de: 'Eigener Perplexity API Key',
    en: 'Your own Perplexity API key',
  },
  'secondbrain.pricing.ownkey.feature.3': {
    de: 'Unbegrenzte AI-Anfragen',
    en: 'Unlimited AI requests',
  },
  'secondbrain.pricing.ownkey.feature.4': {
    de: 'Zahle nur nach Nutzung bei OpenAI/Perplexity',
    en: 'Pay only by usage at OpenAI/Perplexity',
  },
  'secondbrain.pricing.ownkey.feature.5': {
    de: 'Volle Kontrolle über Kosten',
    en: 'Full control over costs',
  },
  'secondbrain.pricing.ownkey.feature.6': {
    de: 'Alle Pro Features',
    en: 'All Pro features',
  },
  'secondbrain.pricing.pro': {
    de: 'Pro',
    en: 'Pro',
  },
  'secondbrain.pricing.pro.price': {
    de: '6 €',
    en: '€6',
  },
  'secondbrain.pricing.pro.period': {
    de: 'pro Monat',
    en: 'per month',
  },
  'secondbrain.pricing.pro.desc': {
    de: 'Wir zahlen die API-Kosten und kümmern uns um alles',
    en: 'We pay the API costs and take care of everything',
  },
  'secondbrain.pricing.pro.includes': {
    de: 'Alles aus Free, plus:',
    en: 'Everything in Free, plus:',
  },
  'secondbrain.pricing.pro.feature.1': {
    de: '50 AI-Anfragen pro Tag',
    en: '50 AI requests per day',
  },
  'secondbrain.pricing.pro.feature.2': {
    de: 'Premium-Modelle (GPT-5, Reasoning)',
    en: 'Premium models (GPT-5, Reasoning)',
  },
  'secondbrain.pricing.pro.feature.3': {
    de: 'Unbegrenzte Bildanalyse',
    en: 'Unlimited image analysis',
  },
  'secondbrain.pricing.pro.feature.4': {
    de: 'Unbegrenzte Email-Konten',
    en: 'Unlimited email accounts',
  },
  'secondbrain.pricing.pro.feature.5': {
    de: 'Perplexity Sonar Pro (tiefere Recherche)',
    en: 'Perplexity Sonar Pro (deeper research)',
  },
  'secondbrain.pricing.pro.feature.6': {
    de: 'Custom Tools (Widget-Generator)',
    en: 'Custom Tools (widget generator)',
  },
  'secondbrain.pricing.cta.free': {
    de: 'Kostenlos starten',
    en: 'Start for free',
  },
  'secondbrain.pricing.cta.ownkey': {
    de: 'OwnKey wählen',
    en: 'Choose OwnKey',
  },
  'secondbrain.pricing.cta.pro': {
    de: 'Pro werden',
    en: 'Go Pro',
  },
  'secondbrain.pricing.popular': {
    de: 'Beliebt',
    en: 'Popular',
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
    de: 'Speichern & Teilen',
    en: 'Save & Share',
  },
  'roadmap.mapmind.7.desc': {
    de: 'Projekte exportieren',
    en: 'Export Projects',
  },
  'roadmap.mapmind.8': {
    de: 'Webapp Veröffentlichung',
    en: 'Webapp Release',
  },
  'roadmap.mapmind.8.desc': {
    de: 'Erste öffentliche Version',
    en: 'First Public Version',
  },
  'roadmap.mapmind.9': {
    de: 'Feedbackrunde',
    en: 'Feedback Round',
  },
  'roadmap.mapmind.9.desc': {
    de: 'Nutzerfeedback sammeln',
    en: 'Collect User Feedback',
  },

  // Roadmap Items - Pocket Assistant
  'roadmap.secondbrain.1': {
    de: 'PARA-System',
    en: 'PARA System',
  },
  'roadmap.secondbrain.1.desc': {
    de: 'Projekte, Todos, Notizen',
    en: 'Projects, Todos, Notes',
  },
  'roadmap.secondbrain.2': {
    de: 'AI Agent',
    en: 'AI Agent',
  },
  'roadmap.secondbrain.2.desc': {
    de: 'Viele Tools integriert',
    en: 'Many tools integrated',
  },
  'roadmap.secondbrain.3': {
    de: 'Email & Kalender',
    en: 'Email & Calendar',
  },
  'roadmap.secondbrain.3.desc': {
    de: 'Multi-Account Sync',
    en: 'Multi-Account Sync',
  },
  'roadmap.secondbrain.4': {
    de: 'Web Research',
    en: 'Web Research',
  },
  'roadmap.secondbrain.4.desc': {
    de: 'Perplexity Integration',
    en: 'Perplexity Integration',
  },
  'roadmap.secondbrain.5': {
    de: 'Bildanalyse',
    en: 'Image Analysis',
  },
  'roadmap.secondbrain.5.desc': {
    de: 'Screenshots & Visitenkarten',
    en: 'Screenshots & Business Cards',
  },
  'roadmap.secondbrain.6': {
    de: 'iPhone Kurzbefehl',
    en: 'iPhone Shortcut',
  },
  'roadmap.secondbrain.6.desc': {
    de: 'Sperrbildschirm-Zugriff',
    en: 'Lock Screen Access',
  },
  'roadmap.secondbrain.7': {
    de: 'Custom Tools',
    en: 'Custom Tools',
  },
  'roadmap.secondbrain.7.desc': {
    de: 'Widget-Generator',
    en: 'Widget Generator',
  },
  'roadmap.secondbrain.8': {
    de: 'Letzte Anpassungen',
    en: 'Final Adjustments',
  },
  'roadmap.secondbrain.8.desc': {
    de: 'Feinschliff & Testing',
    en: 'Polish & Testing',
  },
  'roadmap.secondbrain.9': {
    de: 'Web App Launch',
    en: 'Web App Launch',
  },
  'roadmap.secondbrain.9.desc': {
    de: 'Öffentlicher Start',
    en: 'Public Release',
  },
  'roadmap.secondbrain.10': {
    de: 'Feedback-Runde',
    en: 'Feedback Round',
  },
  'roadmap.secondbrain.10.desc': {
    de: 'Community-Feedback',
    en: 'Community Feedback',
  },
  'roadmap.secondbrain.11': {
    de: 'iOS App Launch',
    en: 'iOS App Launch',
  },
  'roadmap.secondbrain.11.desc': {
    de: 'App Store Release',
    en: 'App Store Release',
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
