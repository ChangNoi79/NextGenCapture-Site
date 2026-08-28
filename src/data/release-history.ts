import type { Locale } from './site';

export type HistoricalRelease = {
  tag_name: string;
  name: string;
  body: Record<Locale, string>;
  published_at: string;
  html_url: string;
};

const releaseUrl = (tag: string) => `https://github.com/ChangNoi79/NextGenCapture/releases/tag/${tag}`;

// Curated historic notes mirrored from the extension's CHANGELOG.md.
export const historicalReleases: HistoricalRelease[] = [
  {
    tag_name: '1.0.12', name: 'Version 1.0.12', published_at: '2026-08-17T00:00:00Z', html_url: releaseUrl('1.0.12'),
    body: {
      de: 'Verbessert: Der Textmarker zeigt beim Bearbeiten einen runden, halbtransparenten Cursor mit klarer Kontur. Farbe und Größe folgen der gewählten Marker-Einstellung.',
      en: 'Improved: The highlighter now shows a round, semi-transparent cursor with a clear outline while editing. Its color and size follow the selected highlighter settings.'
    }
  },
  {
    tag_name: '1.0.9', name: 'Version 1.0.9', published_at: '2026-08-14T00:00:00Z', html_url: releaseUrl('1.0.9'),
    body: {
      de: 'Verbessert: Verzögerte Fenster- und Bildschirm-Screenshots starten nach der Chrome-Quellenauswahl und erfassen den maßgeblichen Snapshot erst am Ende des Countdowns. Auswahl- und Zuschnittabläufe öffnen anschließend zuverlässig im Editor; nicht benötigte Screenshots lassen sich vollständig verwerfen.',
      en: 'Improved: Delayed window and screen screenshots now start after Chrome source selection and take the decisive snapshot at the end of the countdown. Selection and crop flows reliably open in the editor, and unwanted screenshots can be discarded completely.'
    }
  },
  {
    tag_name: '1.0.8', name: 'Version 1.0.8', published_at: '2026-08-13T00:00:00Z', html_url: releaseUrl('1.0.8'),
    body: {
      de: 'Neu: Fenster und Bildschirme über den nativen Chrome-Dialog erfassen; lokale Firmen-Wasserzeichen mit Text, Logo und frei wählbarer Position. Verbessert: Einheitlicher Wasserzeichen-Export und direkter PDF-Download ohne Drucker oder Popup-Freigabe.',
      en: 'New: Capture windows and screens through Chrome’s native dialog, plus local company watermarks with text, logo, and flexible placement. Improved: Consistent watermark export and direct PDF download without requiring a printer or popup permission.'
    }
  },
  {
    tag_name: '1.0.7', name: 'Version 1.0.7', published_at: '2026-08-13T00:00:00Z', html_url: releaseUrl('1.0.7'),
    body: {
      de: 'Neu: Optionaler Tab- oder Systemton für Videoaufnahmen, sichtbarer 3–2–1-Countdown sowie „Neuigkeiten & Hilfe“ mit Versionsanzeige. Entfernt: Die unvollständige Telemetrie-Vorbereitung – es werden keine Nutzungs- oder Fehlerdaten übertragen.',
      en: 'New: Optional tab or system audio for video recordings, a visible 3–2–1 countdown, and a News & Help page with version information. Removed: Incomplete telemetry groundwork; no usage or error data is transmitted.'
    }
  },
  {
    tag_name: '1.0.6', name: 'Version 1.0.6', published_at: '2026-08-10T00:00:00Z', html_url: releaseUrl('1.0.6'),
    body: {
      de: 'Verbessert: Aufnahmen werden beim Schließen des Steuerfensters sicher beendet. Downloadfehler bleiben sichtbar und nachvollziehbar.',
      en: 'Improved: Recordings are stopped safely when the control window closes. Download errors remain visible and traceable.'
    }
  },
  {
    tag_name: '1.0.5', name: 'Version 1.0.5', published_at: '2026-08-10T00:00:00Z', html_url: releaseUrl('1.0.5'),
    body: {
      de: 'Verbessert: Der Aufnahmeablauf für Tab, Fenster und Bildschirm wurde vereinheitlicht. Fehler auf geschützten und nicht unterstützten Seiten werden klarer erklärt.',
      en: 'Improved: The recording flow for tabs, windows, and screens is now consistent. Errors on protected and unsupported pages are explained more clearly.'
    }
  }
];
