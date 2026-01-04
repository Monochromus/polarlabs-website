# Pocket Assistant

## Über die App

Pocket Assistant ist dein KI-gestützter Produktivitäts-Assistent, der dir hilft, dein Leben zu organisieren - ganz natürlich per Sprache. Basierend auf der bewährten PARA-Methode von Tiago Forte strukturiert die App deine Aufgaben, Projekte und Wissen so, wie du denkst.

**Das Besondere:** Eine einzige Anfrage kann komplexe Workflows auslösen. Sag zum Beispiel *"Suche Techno-Events in Berlin nächstes Wochenende, trag die besten in meinen Kalender ein und erstelle Todos für Tickets kaufen"* - und der AI-Agent recherchiert im Web, erstellt die Kalendereinträge und legt die passenden Aufgaben an. Alles in einem Schritt.

### iPhone Kurzbefehl - Dein Assistent auf dem Sperrbildschirm

Mit dem iOS Kurzbefehl hast du Pocket Assistant immer griffbereit - direkt vom Sperrbildschirm oder per Siri. Kein App-Öffnen, kein Einloggen. Einfach antippen, sprechen oder tippen, fertig. Der Kurzbefehl sendet deine Anfrage an den AI-Agent, der sofort im Hintergrund arbeitet: Termine anlegen, Aufgaben erstellen, Emails durchsuchen oder Web-Recherchen starten.

**So funktioniert's:**
- Kurzbefehl als Widget auf dem Sperrbildschirm platzieren
- Antippen → Spracheingabe oder Text
- Der Agent führt alle nötigen Aktionen aus
- Beim nächsten Öffnen der App ist alles erledigt

Vergiss komplizierte Menüs und endlose Klicks. Der integrierte AI-Agent versteht komplexe Anfragen und kombiniert automatisch die richtigen Tools: Web-Recherche, Kalender, Todos, Notizen und Emails - alles in einer Konversation.

### Weitere Features

Mit Multi-Account-Unterstützung für Email und Kalender hast du alle wichtigen Informationen an einem Ort. Die intelligente Bildanalyse erkennt Termine aus Screenshots, extrahiert Aufgaben aus Fotos und digitalisiert Visitenkarten automatisch. Für Power-User bietet der Custom Tool Designer die Möglichkeit, eigene Widgets per natürlicher Beschreibung zu erstellen - die KI generiert den Code.

Pocket Assistant ist mehr als eine To-Do-App: Es ist dein persönlicher Assistent, der deine Arbeitsweise versteht und sich ihr anpasst.

### Beispiel-Anfragen

| Anfrage | Was passiert |
|---------|--------------|
| *"Suche Jazz-Konzerte in München im Januar und trag sie ein"* | Web-Recherche → Kalendereinträge |
| *"Fasse meine ungelesenen Emails zusammen und erstelle Todos für alles Wichtige"* | Email-Analyse → Todo-Erstellung |
| *"Plane einen Wochenendtrip nach Hamburg"* | Recherche → Projekt + Todos + Kalender |
| *"Was steht morgen an und welche Emails muss ich beantworten?"* | Kontext aus Kalender + Email-Analyse |
| *"Erstelle eine Notiz aus diesem Screenshot"* | Bildanalyse → Notiz mit extrahiertem Text |

### Hauptfunktionen

- **Ein Befehl, viele Aktionen**: Komplexe Workflows in einer natürlichen Anfrage
- **iPhone Kurzbefehl**: Zugriff vom Sperrbildschirm - kein App-Öffnen nötig
- **AI-Steuerung**: 37 Tools die der Agent intelligent kombiniert
- **Web Research**: Aktuelle Informationen recherchieren und direkt verarbeiten
- **PARA-Organisation**: Projekte, Areas, Ressourcen und Archiv nach bewährter Methode
- **Multi-Account Email**: Alle Postfächer (iCloud, Gmail, Outlook, GMX) in einer Oberfläche
- **Kalender-Integration**: Synchronisation mit iCloud und Outlook Calendar
- **Bildanalyse**: Termine und Aufgaben aus Screenshots extrahieren
- **Custom Tools**: Eigene interaktive Widgets per Beschreibung erstellen lassen

---

## Technische Übersicht

### Tech Stack

| Komponente | Technologie |
|------------|-------------|
| Frontend | React 18, Vite 6, Tailwind CSS, TipTap Editor |
| Backend | Node.js, Express.js, Socket.io |
| Datenbank | SQLite (better-sqlite3, WAL Mode) |
| AI | OpenAI GPT-4o/4o-mini, Perplexity API |
| Auth | JWT + Session, bcrypt, API-Keys |
| Kalender | CalDAV (tsdav) |
| Email | IMAP (imap), SMTP (nodemailer) |

### Wichtige API-Endpunkte

**PARA-System**
| Endpunkt | Funktion |
|----------|----------|
| `GET/POST /api/projects` | Projekte verwalten |
| `GET/POST /api/todos` | Aufgaben mit Prioritäten |
| `GET/POST /api/notes` | Rich-Text Notizen |
| `GET/POST /api/areas` | Lebensbereiche (dauerhaft) |
| `GET/POST /api/resources` | Wissensdatenbank |
| `GET /api/archive` | Archivierte Elemente |
| `GET /api/search?q=` | Globale Suche |

**Kalender & Email**
| Endpunkt | Funktion |
|----------|----------|
| `GET/POST /api/calendar/events` | Termine verwalten |
| `POST /api/calendar/sync` | Kalender synchronisieren |
| `GET/POST /api/email-accounts` | Email-Konten |
| `GET /api/emails` | Emails abrufen (Filter, Pagination) |
| `POST /api/email-drafts/:id/send` | Email versenden |

**AI Agent**
| Endpunkt | Funktion |
|----------|----------|
| `POST /api/agent/chat` | AI-Chat mit Tool-Ausführung |
| `POST /api/vision/analyze` | Bildanalyse |
| `POST /api/custom-tools/generate` | Tool-Code generieren |
| `POST /api/custom-tools/:id/execute` | Tool ausführen (Sandbox) |

### AI Agent Tools

Der Agent verfügt über 37 Tools in folgenden Kategorien:

**Produktivität**: Todos, Notizen, Projekte, Areas und Ressourcen erstellen/bearbeiten/durchsuchen

**Kalender**: Events abrufen, erstellen, aktualisieren, löschen

**Email**: Emails durchsuchen, Inhalte abrufen, Threads zusammenfassen, Entwürfe erstellen

**Research**: Web-Recherche mit aktuellen Quellen (Perplexity)

**Custom Tools**: Eigene Widgets verwalten

**System**: Kontext abrufen, Items verknüpfen, archivieren/wiederherstellen

### Datenbank

Die Datenbank folgt der PARA-Struktur:

```
Users
├── Projects (mit Area-Zuordnung, Status, Deadline)
│   ├── Todos (Priorität 1-5, Status, Fälligkeit)
│   ├── Notes (Rich-Text, Tags, Farben)
│   └── Calendar Events (lokal + synchronisiert)
├── Areas (dauerhafte Verantwortungsbereiche)
├── Resources (Wissenssammlung, n:m mit Projects)
├── Email Accounts (verschlüsselte Credentials)
│   ├── Emails (Header-Cache)
│   └── Drafts
├── Calendar Connections (CalDAV)
└── Custom Tools (generierter Code, Parameter, Ergebnisse)
```

**Besonderheiten:**
- Automatische Projekt-Completion wenn alle Todos erledigt
- Exclusive Container: Notiz gehört zu Project ODER Area ODER Resource
- Email-Passwörter mit AES-256-GCM verschlüsselt
- Item-Links für Querverweise (Todo ↔ Note ↔ Event)

### Umgebungsvariablen

```env
# Erforderlich
PORT=3001
SESSION_SECRET=min-32-zeichen-secret
OPENAI_API_KEY=sk-...

# Optional
DATABASE_PATH=./data/secondbrain.db  # Standard
NODE_ENV=development|production
```

User können eigene API-Keys in den Einstellungen hinterlegen:
- OpenAI API Key + Modell-Wahl
- Perplexity API Key (für Web Research)

### Projektstruktur

```
pocket-assistant/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/        # 50+ Komponenten (agent, calendar, email, ...)
│   │   ├── pages/             # 14 Seiten (Dashboard, Projects, Calendar, ...)
│   │   ├── context/           # Auth, Theme, Agent Context
│   │   ├── hooks/             # 16 Custom Hooks (useTodos, useEmails, ...)
│   │   └── lib/               # API Client, Utilities
│   └── package.json
├── server/                    # Express Backend
│   ├── routes/                # API-Routen (todos, projects, agent, ...)
│   ├── services/              # OpenAI, CalDAV, IMAP, Perplexity, Sandbox
│   ├── middleware/            # Auth, Upload, Error Handler
│   ├── config/                # Database, Email Provider
│   └── index.js
├── data/                      # SQLite Datenbank
└── .env                       # Konfiguration
```
