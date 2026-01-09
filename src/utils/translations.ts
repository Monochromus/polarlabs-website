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
  'nav.datenschutz': {
    de: 'Datenschutz',
    en: 'Privacy Policy',
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
    de: 'Dein automatisiertes Second Brain nach dem PARA-Prinzip',
    en: 'Your automated Second Brain using the PARA method',
  },
  'secondbrain.description': {
    de: 'Nie wieder Rezepte, Tech-Reviews oder Side-Project-Ideen vergessen – der Pocket Assistant speichert alles und erinnert dich zum richtigen Zeitpunkt.',
    en: 'Never forget recipes, tech reviews or side project ideas again – Pocket Assistant saves everything and reminds you at the right moment.',
  },
  'secondbrain.hero.title': {
    de: 'Pocket Assistant',
    en: 'Pocket Assistant',
  },
  'secondbrain.hero.subtitle': {
    de: 'AI powered Second Brain',
    en: 'AI powered Second Brain',
  },
  'secondbrain.hero.description': {
    de: 'Basierend auf dem PARA-Prinzip von Tiago Forte – automatisiert. Speichere Webclips, verwalte Todos, lass Webrecherchen durchführen. Der KI-Agent organisiert alles und erinnert dich, wenn es relevant wird.',
    en: 'Based on the PARA method by Tiago Forte – automated. Save webclips, manage todos, have web research done. The AI agent organizes everything and reminds you when relevant.',
  },
  'secondbrain.problem.title': {
    de: 'Das Gedächtnis-Problem',
    en: 'The Memory Problem',
  },
  'secondbrain.problem.subtitle': {
    de: 'Unser Gehirn ist noch nicht an das digitale Zeitalter angepasst',
    en: 'Our brain hasn\'t adapted to the digital age yet',
  },
  'secondbrain.problem.item1': {
    de: 'Rezepte aus Reels, die du nie nachkochst',
    en: 'Recipes from reels you never cook',
  },
  'secondbrain.problem.item2': {
    de: 'Geschenkideen, die du wieder vergisst',
    en: 'Gift ideas you forget again',
  },
  'secondbrain.problem.item3': {
    de: 'Partyspiele, an die du dich nicht im richtigen Moment erinnerst',
    en: 'Party games you can\'t remember at the right moment',
  },
  'secondbrain.problem.item4': {
    de: 'Artikel, die ungelesen bleiben',
    en: 'Articles that remain unread',
  },
  'secondbrain.problem.quote': {
    de: '"Gespeicherte Posts sind ein Friedhof von \'Das mach ich später\'-Momenten."',
    en: '"Saved posts are a graveyard of \'I\'ll do this later\' moments."',
  },
  'secondbrain.solution.title': {
    de: 'Die Lösung: Dein Second Brain',
    en: 'The Solution: Your Second Brain',
  },
  'secondbrain.solution.subtitle': {
    de: 'Ein digitales Gedächtnis, das für dich arbeitet',
    en: 'A digital memory that works for you',
  },
  'secondbrain.concept.title': {
    de: 'Wie es funktioniert',
    en: 'How it works',
  },
  'secondbrain.concept.p1': {
    de: 'Mit Webclips speicherst du alles, was einen Link hat: Ein Instagram-Post, ein YouTube-Video, ein Artikel bei SPIEGEL Online – direkt über den Teilen-Button landet alles in Sekunden in deinem Second Brain. Über den Sperrbildschirm-Kurzbefehl kannst du außerdem blitzschnell jede Anfrage an den Assistenten senden – ob nur Text oder auch mit Foto.',
    en: 'With webclips, you save anything with a link: an Instagram post, a YouTube video, any article – via the share button, everything lands in your Second Brain in seconds. Via the lock screen shortcut, you can also quickly send any request to the assistant – text only or with a photo.',
  },
  'secondbrain.concept.p2': {
    de: 'In der App oder per Sprachbefehl findest du alles sofort wieder: "Welche Coding-Tutorials hatte ich mir gemerkt?" oder "Zeig mir die Tech-Reviews zu Smartphones". Der Agent durchsucht dein Second Brain und präsentiert die passenden Inhalte – genau dann, wenn du sie brauchst.',
    en: 'In the app or via voice command, you instantly find everything again: "Which coding tutorials did I save?" or "Show me the tech reviews about smartphones". The agent searches your Second Brain and presents the matching content – exactly when you need it.',
  },
  'secondbrain.concept.p3': {
    de: 'Beispiel: Fotografiere deinen Schichtplan oder handgeschriebene Notizen ab, schicke sie an den Pocket Assistant – und alle Schichten werden automatisch in deinen Kalender eingetragen. Mit dem iPhone Kurzbefehl geht das direkt vom Sperrbildschirm.',
    en: 'Example: Take a photo of your work schedule or handwritten notes, send them to Pocket Assistant – and all shifts are automatically added to your calendar. With the iPhone shortcut, this works directly from the lock screen.',
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
    de: 'Email lesen & senden',
    en: 'Read & Send Email',
  },
  'secondbrain.feature.2.desc': {
    de: 'Alle Postfächer in einer Oberfläche. Emails zusammenfassen, beantworten oder neue verfassen lassen.',
    en: 'All mailboxes in one interface. Have emails summarized, answered, or composed for you.',
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
    de: 'Second Brain (PARA)',
    en: 'Second Brain (PARA)',
  },
  'secondbrain.feature.5.desc': {
    de: 'Dein digitales Gedächtnis nach Tiago Fortes PARA-Methode – nie wieder wichtige Inhalte vergessen.',
    en: 'Your digital memory using Tiago Forte\'s PARA method – never forget important content again.',
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
    de: 'So funktioniert\'s',
    en: 'How it works',
  },
  'secondbrain.example.1': {
    de: '[Link teilen]',
    en: '[Share link]',
  },
  'secondbrain.example.1.result': {
    de: 'Webclip → PARA-Einordnung → Projekt-Verknüpfung',
    en: 'Webclip → PARA organization → Project linking',
  },
  'secondbrain.example.2': {
    de: 'Ich plane einen Trip nach Berlin – recherchiere alle Konzerte am Wochenende und trag sie in einen neuen Kalender ein',
    en: 'I\'m planning a trip to Berlin – research all concerts on the weekend and add them to a new calendar',
  },
  'secondbrain.example.2.result': {
    de: 'Web-Recherche → Neuer Kalender → Events',
    en: 'Web research → New calendar → Events',
  },
  'secondbrain.example.3': {
    de: 'Fasse meine ungelesenen Emails zusammen und erstelle Todos für alles Wichtige',
    en: 'Summarize my unread emails and create todos for everything important',
  },
  'secondbrain.example.3.result': {
    de: 'Email-Analyse → Todo-Erstellung',
    en: 'Email analysis → Todo creation',
  },
  'secondbrain.example.4': {
    de: 'Fasse alle Artikel zusammen, die ich über das Thema Heizung gelesen habe',
    en: 'Summarize all articles I read about heating systems',
  },
  'secondbrain.example.4.result': {
    de: 'Second Brain Recherche → KI-Zusammenfassung',
    en: 'Second Brain research → AI summary',
  },

  // Morning Briefing Section
  'secondbrain.briefing.title': {
    de: 'Morning Briefing',
    en: 'Morning Briefing',
  },
  'secondbrain.briefing.subtitle': {
    de: 'Dein personalisierter Start in den Tag',
    en: 'Your personalized start to the day',
  },
  'secondbrain.briefing.desc': {
    de: 'Jeden Morgen stellt der Pocket Assistant dein individuelles Briefing zusammen – basierend auf deinem Standort, deinen Interessen und deinem Kalender.',
    en: 'Every morning, Pocket Assistant compiles your individual briefing – based on your location, interests, and calendar.',
  },
  'secondbrain.briefing.weather': {
    de: 'Lokales Wetter',
    en: 'Local Weather',
  },
  'secondbrain.briefing.weather.desc': {
    de: 'Wettervorhersage für deinen Standort mit Empfehlungen für den Tag.',
    en: 'Weather forecast for your location with recommendations for the day.',
  },
  'secondbrain.briefing.events': {
    de: 'Events in deiner Nähe',
    en: 'Events Near You',
  },
  'secondbrain.briefing.events.desc': {
    de: 'Konzerte, Ausstellungen und Veranstaltungen, die zu deinen Interessen passen.',
    en: 'Concerts, exhibitions and events that match your interests.',
  },
  'secondbrain.briefing.news': {
    de: 'Personalisierte News',
    en: 'Personalized News',
  },
  'secondbrain.briefing.news.desc': {
    de: 'Nachrichten zu Politik, Sport, Börse oder anderen Themen, die dich interessieren.',
    en: 'News on politics, sports, stocks or other topics that interest you.',
  },
  'secondbrain.briefing.calendar': {
    de: 'Tagesübersicht',
    en: 'Daily Overview',
  },
  'secondbrain.briefing.calendar.desc': {
    de: 'Deine Termine und Aufgaben für heute – kompakt zusammengefasst.',
    en: 'Your appointments and tasks for today – summarized compactly.',
  },

  // Daily Updates / Usecase Section
  'secondbrain.usecase.title': {
    de: 'Tägliche Updates – Automatisch informiert',
    en: 'Daily Updates – Automatically Informed',
  },
  'secondbrain.usecase.subtitle': {
    de: 'Der Agent recherchiert täglich für dich – zu jedem Thema',
    en: 'The agent researches daily for you – on any topic',
  },
  'secondbrain.usecase.desc': {
    de: 'Richte einmalig ein, worüber du informiert bleiben willst. Der Pocket Assistant recherchiert jeden Tag automatisch im Internet und fasst die wichtigsten Neuigkeiten für dich zusammen.',
    en: 'Set up once what you want to stay informed about. Pocket Assistant automatically researches the internet every day and summarizes the most important news for you.',
  },
  'secondbrain.usecase.example.title': {
    de: 'Beispiel: Wohnungssuche',
    en: 'Example: Apartment Search',
  },
  'secondbrain.usecase.example.desc': {
    de: '"Informiere mich täglich über neue 2-Zimmer-Wohnungen in München unter 1.200€ Kaltmiete" – Der Agent durchsucht Immobilienportale und schickt dir jeden Morgen eine Zusammenfassung neuer Angebote, die deinen Kriterien entsprechen.',
    en: '"Inform me daily about new 2-room apartments in Munich under €1,200 cold rent" – The agent searches real estate portals and sends you a summary of new listings matching your criteria every morning.',
  },
  'secondbrain.usecase.more': {
    de: 'Weitere Ideen für tägliche Updates',
    en: 'More ideas for daily updates',
  },
  'secondbrain.usecase.idea1': {
    de: 'Aktienkurse und Marktanalysen für dein Portfolio',
    en: 'Stock prices and market analysis for your portfolio',
  },
  'secondbrain.usecase.idea2': {
    de: 'Neue Podcast-Episoden deiner Lieblings-Shows',
    en: 'New podcast episodes from your favorite shows',
  },
  'secondbrain.usecase.idea3': {
    de: 'Spielergebnisse und News zu deinem Lieblingsverein',
    en: 'Match results and news about your favorite team',
  },
  'secondbrain.usecase.idea4': {
    de: 'Neue Stellenangebote in deiner Branche',
    en: 'New job offers in your industry',
  },
  'secondbrain.usecase.idea5': {
    de: 'Preisalarme für Produkte auf deiner Wunschliste',
    en: 'Price alerts for products on your wishlist',
  },

  // Power Features Section
  'secondbrain.power.title': {
    de: 'Ein Befehl, viele Aktionen',
    en: 'One Command, Many Actions',
  },
  'secondbrain.power.subtitle': {
    de: 'Dutzende Tools, die der Agent intelligent kombiniert',
    en: 'Dozens of tools the agent intelligently combines',
  },
  'secondbrain.power.desc': {
    de: 'Vergiss komplizierte Menüs und endlose Klicks. Der AI-Agent versteht komplexe Anfragen und führt automatisch die richtigen Aktionen aus – alles in einer Konversation.',
    en: 'Forget complicated menus and endless clicks. The AI agent understands complex requests and automatically executes the right actions – all in one conversation.',
  },
  'secondbrain.power.example': {
    de: '"Suche Techno-Events in Berlin nächstes Wochenende, trag die besten in meinen Kalender ein und erstelle Todos für Tickets kaufen"',
    en: '"Find techno events in Berlin next weekend, add the best ones to my calendar and create todos for buying tickets"',
  },
  'secondbrain.power.result': {
    de: 'Web-Recherche → Kalendereinträge → Todo-Erstellung – alles automatisch',
    en: 'Web research → Calendar entries → Todo creation – all automatic',
  },

  // iPhone Shortcut Section
  'secondbrain.shortcut.title': {
    de: 'iPhone Kurzbefehl',
    en: 'iPhone Shortcut',
  },
  'secondbrain.shortcut.subtitle': {
    de: 'Dein Assistent auf dem Sperrbildschirm',
    en: 'Your assistant on the lock screen',
  },
  'secondbrain.shortcut.desc': {
    de: 'Mit dem iOS Kurzbefehl hast du Pocket Assistant immer griffbereit – direkt vom Sperrbildschirm oder per Siri. Kein App-Öffnen, kein Einloggen. Einfach antippen, sprechen, fertig.',
    en: 'With the iOS shortcut, you always have Pocket Assistant at hand – directly from the lock screen or via Siri. No opening apps, no logging in. Just tap, speak, done.',
  },
  'secondbrain.shortcut.step1': {
    de: 'Kurzbefehl als Widget auf dem Sperrbildschirm platzieren',
    en: 'Place shortcut as widget on lock screen',
  },
  'secondbrain.shortcut.step2': {
    de: 'Antippen → Spracheingabe oder Text',
    en: 'Tap → Voice input or text',
  },
  'secondbrain.shortcut.step3': {
    de: 'Der Agent führt alle Aktionen im Hintergrund aus',
    en: 'The agent executes all actions in the background',
  },
  'secondbrain.shortcut.step4': {
    de: 'Beim nächsten Öffnen der App ist alles erledigt',
    en: 'Next time you open the app, everything is done',
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

  // Datenschutz
  'datenschutz.title': {
    de: 'Datenschutzerklärung',
    en: 'Privacy Policy',
  },
  'datenschutz.overview.title': {
    de: 'Datenschutz auf einen Blick',
    en: 'Privacy at a Glance',
  },
  'datenschutz.overview.text': {
    de: 'Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf unserer Website auf. Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.',
    en: 'This privacy policy explains the nature, scope, and purpose of processing personal data on our website. We take the protection of your personal data very seriously.',
  },
  'datenschutz.responsible.title': {
    de: 'Verantwortliche Stelle',
    en: 'Responsible Party',
  },
  'datenschutz.responsible.text': {
    de: 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
    en: 'The responsible party for data processing on this website is:',
  },
  'datenschutz.hosting.title': {
    de: 'Hosting',
    en: 'Hosting',
  },
  'datenschutz.hosting.text': {
    de: 'Diese Website wird bei Render (Render Services, Inc., 525 Brannan Street, Suite 300, San Francisco, CA 94107, USA) gehostet. Beim Besuch unserer Website werden automatisch Informationen (Server-Logfiles) durch den Hostinganbieter erfasst. Dies dient der Bereitstellung und Sicherheit der Website. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO.',
    en: 'This website is hosted by Render (Render Services, Inc., 525 Brannan Street, Suite 300, San Francisco, CA 94107, USA). When you visit our website, information (server log files) is automatically collected by the hosting provider. This serves the provision and security of the website. The legal basis for this is Art. 6 Para. 1 lit. f GDPR.',
  },
  'datenschutz.data.title': {
    de: 'Datenerfassung auf dieser Website',
    en: 'Data Collection on This Website',
  },
  'datenschutz.data.visit.title': {
    de: 'Beim Besuch der Website',
    en: 'When Visiting the Website',
  },
  'datenschutz.data.visit.text': {
    de: 'Bei der rein informatorischen Nutzung der Website werden automatisch Daten an unseren Hostinganbieter übermittelt. Diese Daten (Server-Logfiles) umfassen z.B. den Browsertyp, das Betriebssystem, die Referrer-URL, den Hostnamen des zugreifenden Rechners sowie die Uhrzeit der Serveranfrage.',
    en: 'When using the website for purely informational purposes, data is automatically transmitted to our hosting provider. This data (server log files) includes, for example, the browser type, operating system, referrer URL, hostname of the accessing computer, and the time of the server request.',
  },
  'datenschutz.data.storage.title': {
    de: 'Lokale Speicherung (LocalStorage)',
    en: 'Local Storage',
  },
  'datenschutz.data.storage.text': {
    de: 'Unsere Website nutzt den LocalStorage Ihres Browsers, um Ihre Einstellungen zu speichern. Diese Daten werden nur lokal auf Ihrem Gerät gespeichert und nicht an uns übermittelt:',
    en: 'Our website uses your browser\'s LocalStorage to save your settings. This data is stored locally on your device only and is not transmitted to us:',
  },
  'datenschutz.data.storage.item1': {
    de: 'Spracheinstellung (Deutsch/Englisch)',
    en: 'Language setting (German/English)',
  },
  'datenschutz.data.storage.item2': {
    de: 'Theme-Einstellung (Hell/Dunkel)',
    en: 'Theme setting (Light/Dark)',
  },
  'datenschutz.data.storage.item3': {
    de: 'Produkt-Votes (welche Produkte Sie interessieren)',
    en: 'Product votes (which products interest you)',
  },
  'datenschutz.data.contact.title': {
    de: 'Kontaktaufnahme',
    en: 'Contact',
  },
  'datenschutz.data.contact.text': {
    de: 'Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben einschließlich der von Ihnen angegebenen Kontaktdaten zur Bearbeitung Ihrer Anfrage und für Rückfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
    en: 'If you contact us by email, your details including the contact information you provide will be stored for processing your request and for follow-up questions. We will not share this data without your consent.',
  },
  'datenschutz.cookies.title': {
    de: 'Cookies',
    en: 'Cookies',
  },
  'datenschutz.cookies.text': {
    de: 'Diese Website verwendet keine Cookies. Wir setzen ausschließlich den LocalStorage für Ihre Präferenzen ein, der keine Tracking-Funktionalität besitzt.',
    en: 'This website does not use cookies. We only use LocalStorage for your preferences, which has no tracking functionality.',
  },
  'datenschutz.thirdparty.title': {
    de: 'Drittanbieter-Dienste',
    en: 'Third-Party Services',
  },
  'datenschutz.thirdparty.fonts.title': {
    de: 'Google Fonts',
    en: 'Google Fonts',
  },
  'datenschutz.thirdparty.fonts.text': {
    de: 'Diese Website nutzt zur Darstellung von Schriftarten Google Fonts. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriften von Google-Servern. Dabei wird Ihre IP-Adresse an Google übermittelt. Weitere Informationen finden Sie in der Datenschutzerklärung von Google: https://policies.google.com/privacy',
    en: 'This website uses Google Fonts for font display. When you access a page, your browser loads the required fonts from Google servers. In doing so, your IP address is transmitted to Google. For more information, see Google\'s privacy policy: https://policies.google.com/privacy',
  },
  'datenschutz.rights.title': {
    de: 'Ihre Rechte',
    en: 'Your Rights',
  },
  'datenschutz.rights.text': {
    de: 'Sie haben gemäß DSGVO folgende Rechte bezüglich Ihrer personenbezogenen Daten:',
    en: 'According to GDPR, you have the following rights regarding your personal data:',
  },
  'datenschutz.rights.item1': {
    de: 'Recht auf Auskunft (Art. 15 DSGVO)',
    en: 'Right to access (Art. 15 GDPR)',
  },
  'datenschutz.rights.item2': {
    de: 'Recht auf Berichtigung (Art. 16 DSGVO)',
    en: 'Right to rectification (Art. 16 GDPR)',
  },
  'datenschutz.rights.item3': {
    de: 'Recht auf Löschung (Art. 17 DSGVO)',
    en: 'Right to erasure (Art. 17 GDPR)',
  },
  'datenschutz.rights.item4': {
    de: 'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
    en: 'Right to restriction of processing (Art. 18 GDPR)',
  },
  'datenschutz.rights.item5': {
    de: 'Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)',
    en: 'Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)',
  },
  'datenschutz.changes.title': {
    de: 'Änderungen dieser Datenschutzerklärung',
    en: 'Changes to This Privacy Policy',
  },
  'datenschutz.changes.text': {
    de: 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen unserer Dienste anzupassen. Die aktuelle Version finden Sie stets auf dieser Seite.',
    en: 'We reserve the right to adapt this privacy policy to accommodate changes in the legal situation or changes to our services. You will always find the current version on this page.',
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
