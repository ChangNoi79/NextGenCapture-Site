export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string | undefined): value is Locale =>
  Boolean(value && locales.includes(value as Locale));

type Copy = {
  localeName: string;
  switchLanguage: string;
  nav: { home: string; roadmap: string; changelog: string; support: string };
  meta: { home: string; roadmap: string; changelog: string; privacy: string; imprint: string };
  hero: { eyebrow: string; title: string; lead: string; download: string; roadmap: string; points: string[]; imageAlt: string };
  features: { title: string; lead: string; items: Array<{ title: string; body: string }> };
  product: { title: string; lead: string; capture: string; editor: string; privacy: string; captureTools: string[]; editorTools: string[]; imageAlt: string };
  support: { title: string; lead: string; emailAction: string; trackerAction: string; note: string };
  roadmap: { title: string; lead: string; empty: string; planned: string; progress: string; shipped: string; feature: string; bug: string };
  changelog: { title: string; lead: string; empty: string; published: string; original: string };
  legal: { privacyTitle: string; imprintTitle: string; updated: string; privacy: string[]; imprint: Array<{ heading: string; lines: string[] }>; back: string };
  footer: { privacy: string; imprint: string; github: string; copyright: string };
};

export const copy: Record<Locale, Copy> = {
  de: {
    localeName: 'Deutsch', switchLanguage: 'Sprache wechseln',
    nav: { home: 'Start', roadmap: 'Tracker', changelog: 'Changelog', support: 'Support' },
    meta: { home: 'Screenshots und Bildschirmaufnahmen in Chrome', roadmap: 'Öffentlicher Feature- und Bug-Tracker', changelog: 'Changelog und Updates', privacy: 'Datenschutzerklärung', imprint: 'Impressum' },
    hero: { eyebrow: 'Chrome-Erweiterung', title: 'Erfassen. Erklären. Teilen.', lead: 'Erstelle Screenshots und Bildschirmaufnahmen direkt in Chrome. Bearbeite Details mit einem leistungsstarken, lokalen Editor.', download: 'Im Chrome Web Store installieren', roadmap: 'Entwicklung verfolgen', points: ['Screenshots & Aufnahmen', 'Profi-Editor inklusive', 'Lokal statt Cloud'], imageAlt: 'NextGen-Capture-Popup mit Aufnahmearten' },
    features: { title: 'Für klare Kommunikation gebaut', lead: 'Vom schnellen Ausschnitt bis zur kommentierten Aufnahme bleibt alles dort, wo es hingehört: in deinem Browser.', items: [
      { title: 'Gezielt erfassen', body: 'Sichtbarer Bereich, Auswahl, Element, ganze Seite, Fenster oder Bildschirm – nur auf deine Aktion.' },
      { title: 'Direkt annotieren', body: 'Pfeile, Formen, Text, Markierungen, Unschärfen und Nummerierungen machen Inhalte verständlich.' },
      { title: 'Lokal behalten', body: 'Aufnahmen, Bearbeitungsstände und Einstellungen bleiben auf deinem Gerät, bis du selbst exportierst.' }
    ] },
    product: { title: 'Aufnehmen ohne Umwege', lead: 'Wähle exakt aus, was du erfassen möchtest, und bringe dein Ergebnis ohne Toolwechsel auf den Punkt.', capture: 'Flexible Aufnahmearten', editor: 'Integrierter Profi-Editor', privacy: 'Keine Telemetrie für deine Inhalte', captureTools: ['Sichtbarer Bereich', 'Ganze Seite', 'Element', 'Fenster', 'Aufnahme'], editorTools: ['Pfeil', 'Text', 'Unschärfe', 'Hervorheben', 'Export'], imageAlt: 'NextGen-Capture-Editor mit Werkzeugleiste' },
    support: { title: 'Hilfe, Fehler und Ideen', lead: 'Für private Fragen erreichst du uns direkt per E-Mail. Reproduzierbare Fehler und Ideen können im öffentlichen Tracker landen.', emailAction: 'E-Mail an den Support', trackerAction: 'Fehler oder Idee melden', note: 'Bitte veröffentliche keine Zugangsdaten, vertraulichen Aufnahmen oder personenbezogenen Daten. Kundenmeldungen werden zuerst geprüft; nur freigegebene Entwicklungstickets erscheinen im öffentlichen Tracker.' },
    roadmap: { title: 'Feature- & Bug-Tracker', lead: 'Verfolge die öffentlich freigegebenen Arbeiten an NextGen Capture.', empty: 'Zurzeit sind keine öffentlichen Entwicklungstickets geplant.', planned: 'Geplant', progress: 'In Entwicklung', shipped: 'Ausgeliefert', feature: 'Feature', bug: 'Fehlerbehebung' },
    changelog: { title: 'Changelog & Updates', lead: 'Neue Funktionen, Verbesserungen und Fehlerbehebungen aus den offiziellen Extension-Releases.', empty: 'Noch keine veröffentlichten Release Notes verfügbar.', published: 'Veröffentlicht', original: 'Originale Release Notes' },
    legal: { privacyTitle: 'Datenschutzerklärung', imprintTitle: 'Impressum', updated: 'Letzte Aktualisierung: 13. August 2026', privacy: ['NextGen Capture speichert Screenshots, Bildschirmaufnahmen, Bearbeitungsstände, Seitentitel, Domains und Einstellungen lokal im Browser. Inhalte verlassen die Erweiterung erst nach einer von dir ausgelösten Exportaktion.', 'Die Erweiterung überträgt keine Telemetrie, Fehlerberichte oder Aufnahmeinhalte an einen Telemetrie-Dienst. Diese Website verwendet keine Analyse- oder Marketing-Tracker und setzt keine Cookies.', 'Für Support und Fehlerberichte entscheidest du selbst, ob du ein öffentliches GitHub-Issue erstellst. Veröffentliche dort keine personenbezogenen Daten, Zugangsdaten oder vertraulichen Aufnahmen.', 'Fragen zum Datenschutz kannst du an contact@nextgencapture.app richten.'], imprint: [{ heading: 'Angaben gemäß § 5 DDG', lines: ['Christian Hofmann', 'Schönerbergweg 9', '86929 Penzing', 'Deutschland'] }, { heading: 'Kontakt', lines: ['Telefon: +49 173 7597034', 'E-Mail: contact@nextgencapture.app', 'Website: www.hofmann-christian.de'] }, { heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV', lines: ['Christian Hofmann', 'Schönerbergweg 9', '86929 Penzing'] }], back: 'Zur Website' },
    footer: { privacy: 'Datenschutz', imprint: 'Impressum', github: 'GitHub', copyright: '© 2026 NextGen Capture' }
  },
  en: {
    localeName: 'English', switchLanguage: 'Switch language',
    nav: { home: 'Home', roadmap: 'Tracker', changelog: 'Changelog', support: 'Support' },
    meta: { home: 'Screenshots and screen recordings in Chrome', roadmap: 'Public feature and bug tracker', changelog: 'Changelog and updates', privacy: 'Privacy policy', imprint: 'Legal notice' },
    hero: { eyebrow: 'Chrome extension', title: 'Capture. Explain. Share.', lead: 'Create screenshots and screen recordings directly in Chrome. Edit every detail with a powerful local editor.', download: 'Install from the Chrome Web Store', roadmap: 'Follow development', points: ['Screenshots & recordings', 'Professional editor included', 'Local, not cloud-based'], imageAlt: 'NextGen Capture popup with capture modes' },
    features: { title: 'Built for clear communication', lead: 'From a quick crop to an annotated recording, everything stays where it belongs: in your browser.', items: [
      { title: 'Capture precisely', body: 'Visible area, selection, element, full page, window, or screen — only when you choose to capture.' },
      { title: 'Annotate immediately', body: 'Arrows, shapes, text, highlights, blur, and numbering make every detail easy to understand.' },
      { title: 'Keep it local', body: 'Captures, editing states, and settings stay on your device until you choose to export.' }
    ] },
    product: { title: 'Capture without detours', lead: 'Choose exactly what to capture, then turn the result into a clear explanation without changing tools.', capture: 'Flexible capture modes', editor: 'Built-in professional editor', privacy: 'No telemetry for your content', captureTools: ['Visible area', 'Full page', 'Element', 'Window', 'Recording'], editorTools: ['Arrow', 'Text', 'Blur', 'Highlight', 'Export'], imageAlt: 'NextGen Capture editor with tool bar' },
    support: { title: 'Help, bugs, and ideas', lead: 'For private questions, contact us directly by email. Reproducible bugs and ideas may belong in the public tracker.', emailAction: 'Email support', trackerAction: 'Report a bug or idea', note: 'Do not publish credentials, confidential captures, or personal data. Customer reports are reviewed first; only approved engineering tickets appear in the public tracker.' },
    roadmap: { title: 'Feature & bug tracker', lead: 'Follow the publicly approved work on NextGen Capture.', empty: 'There are currently no public engineering tickets planned.', planned: 'Planned', progress: 'In progress', shipped: 'Shipped', feature: 'Feature', bug: 'Bug fix' },
    changelog: { title: 'Changelog & updates', lead: 'New features, improvements, and fixes from the official extension releases.', empty: 'No published release notes are available yet.', published: 'Published', original: 'Original release notes' },
    legal: { privacyTitle: 'Privacy policy', imprintTitle: 'Legal notice', updated: 'Last updated: August 13, 2026', privacy: ['NextGen Capture stores screenshots, screen recordings, editing states, page titles, domains, and settings locally in the browser. Content leaves the extension only after an export action you initiate.', 'The extension does not transmit telemetry, error reports, or capture contents to a telemetry service. This website uses no analytics or marketing trackers and sets no cookies.', 'For support and bug reports, you decide whether to create a public GitHub issue. Do not publish personal data, credentials, or confidential captures there.', 'For privacy questions, contact contact@nextgencapture.app.'], imprint: [{ heading: 'Information pursuant to Section 5 DDG', lines: ['Christian Hofmann', 'Schönerbergweg 9', '86929 Penzing', 'Germany'] }, { heading: 'Contact', lines: ['Phone: +49 173 7597034', 'Email: contact@nextgencapture.app', 'Website: www.hofmann-christian.de'] }, { heading: 'Responsible for content pursuant to Section 18 (2) MStV', lines: ['Christian Hofmann', 'Schönerbergweg 9', '86929 Penzing'] }], back: 'Back to website' },
    footer: { privacy: 'Privacy', imprint: 'Legal notice', github: 'GitHub', copyright: '© 2026 NextGen Capture' }
  }
};

export const chromeWebStoreUrl = 'https://chromewebstore.google.com/detail/nextgen-capture/mgkoodddcmelbnomkkoejfniomnpkagi';
export const siteIssuesUrl = 'https://github.com/ChangNoi79/NextGenCapture-Site/issues/new/choose';
export const extensionRepositoryUrl = 'https://github.com/ChangNoi79/NextGenCapture';
