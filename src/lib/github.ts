import type { Locale } from '../data/site';

const repository = 'ChangNoi79/NextGenCapture';
const apiUrl = `https://api.github.com/repos/${repository}`;
type Release = { tag_name: string; name: string | null; body: string | null; published_at: string | null; html_url: string };
type Issue = { number: number; title: string; body: string | null; html_url: string; labels: Array<{ name: string }>; pull_request?: unknown };
type TranslatedItem = { title?: string; body?: string };

// Add reviewed translations here when a release or roadmap issue needs localized copy.
const releaseTranslations: Partial<Record<string, Partial<Record<Locale, TranslatedItem>>>> = {};
const issueTranslations: Partial<Record<number, Partial<Record<Locale, TranslatedItem>>>> = {};

async function request<T>(path: string, fallback: T): Promise<T> {
  try {
    const token = import.meta.env.NEXTGEN_CAPTURE_READ_TOKEN;
    const response = await fetch(`${apiUrl}${path}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'nextgencapture.app static build',
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      }
    });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return await response.json() as T;
  } catch {
    console.warn(`GitHub content could not be refreshed (${path}); the last static fallback was used.`);
    return fallback;
  }
}

export async function getReleases(locale: Locale) {
  const releases = await request<Release[]>('/releases?per_page=100', []);
  return releases.map((release) => ({ ...release, ...releaseTranslations[release.tag_name]?.[locale] }));
}

export async function getRoadmapIssues(locale: Locale) {
  const issues = await request<Issue[]>('/issues?state=all&labels=public-roadmap&per_page=100', []);
  return issues.filter((issue) => !issue.pull_request).map((issue) => ({ ...issue, ...issueTranslations[issue.number]?.[locale] }));
}

export function roadmapStatus(labels: Array<{ name: string }>) {
  const names = labels.map(({ name }) => name);
  if (names.includes('roadmap:shipped')) return 'shipped';
  if (names.includes('roadmap:in-progress')) return 'progress';
  return 'planned';
}

export function roadmapType(labels: Array<{ name: string }>) {
  return labels.some(({ name }) => name === 'type:bug') ? 'bug' : 'feature';
}
