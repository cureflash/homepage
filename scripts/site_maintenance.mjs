import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const BASE_URL = (process.env.SITE_BASE_URL || 'https://homepage.hikaru0816tsc.workers.dev').replace(/\/$/, '');
const ANALYTICS_TOKEN = process.env.CLOUDFLARE_ANALYTICS_TOKEN || '54c05627bfcb4754ae2cf2c56591f809';
const ANALYTICS_TAG = `<!-- Cloudflare Web Analytics -->\n<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"${ANALYTICS_TOKEN}"}'></script>\n<!-- End Cloudflare Web Analytics -->`;
const EXCLUDED_DIRS = new Set(['.git', '.github', 'docs', 'node_modules']);

function toPosix(value) {
  return value.split(path.sep).join('/');
}

function isVerificationFile(rel) {
  return /^google[a-z0-9_-]+\.html$/i.test(rel);
}

function isPublicHtml(rel) {
  return rel.endsWith('.html') && !rel.startsWith('docs/') && !rel.startsWith('.github/') && !isVerificationFile(rel);
}

async function walk(dir = ROOT) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (EXCLUDED_DIRS.has(entry.name)) continue;
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...await walk(absolute));
    } else {
      out.push(toPosix(path.relative(ROOT, absolute)));
    }
  }
  return out;
}

function getTitle(html) {
  return html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, ' ').trim() || '';
}

function hasDescription(html) {
  return /<meta\b(?=[^>]*\bname\s*=\s*["']description["'])[^>]*\bcontent\s*=\s*["'][^"']+["'][^>]*>/i.test(html)
    || /<meta\b(?=[^>]*\bcontent\s*=\s*["'][^"']+["'])[^>]*\bname\s*=\s*["']description["'][^>]*>/i.test(html);
}

function ensureDescription(html) {
  if (hasDescription(html)) return html;
  const title = getTitle(html).replace(/\s*[｜|]\s*ひかり教材室\s*$/u, '').trim() || 'ひかり教材室';
  const description = `${title}の無料学習教材です。ブラウザで利用できる教材・学習ツールを掲載しています。`;
  const tag = `<meta name="description" content="${description.replace(/"/g, '&quot;')}">`;
  if (/<meta\b[^>]*name\s*=\s*["']viewport["'][^>]*>/i.test(html)) {
    return html.replace(/(<meta\b[^>]*name\s*=\s*["']viewport["'][^>]*>)/i, `$1\n${tag}`);
  }
  return html.replace(/<\/head>/i, `  ${tag}\n</head>`);
}

function ensureAnalytics(html) {
  if (html.includes('static.cloudflareinsights.com/beacon.min.js') || html.includes('data-cf-beacon=')) return html;
  if (!/<\/body>/i.test(html)) return html;
  return html.replace(/<\/body>/i, `${ANALYTICS_TAG}\n</body>`);
}

function urlForHtml(rel) {
  if (rel === 'index.html') return `${BASE_URL}/`;
  if (rel.endsWith('/index.html')) return `${BASE_URL}/${rel.slice(0, -'index.html'.length)}`;
  return `${BASE_URL}/${rel}`;
}

function xmlEscape(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function buildSitemap(htmlFiles) {
  const urls = htmlFiles.map(urlForHtml).sort((a, b) => a.localeCompare(b, 'en'));
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${xmlEscape(url)}</loc></url>`).join('\n')}\n</urlset>\n`;
}

async function writeIfChanged(rel, content, changed) {
  const absolute = path.join(ROOT, rel);
  let current = null;
  try { current = await fs.readFile(absolute, 'utf8'); } catch {}
  if (current !== content) {
    await fs.writeFile(absolute, content, 'utf8');
    changed.push(rel);
  }
}

const allFiles = await walk();
const htmlFiles = allFiles.filter(isPublicHtml).sort();
const changed = [];

for (const rel of htmlFiles) {
  const absolute = path.join(ROOT, rel);
  const original = await fs.readFile(absolute, 'utf8');
  const normalized = ensureAnalytics(ensureDescription(original));
  if (normalized !== original) {
    await fs.writeFile(absolute, normalized, 'utf8');
    changed.push(rel);
  }
}

await writeIfChanged('sitemap.xml', buildSitemap(htmlFiles), changed);
console.log(`Public HTML pages: ${htmlFiles.length}`);
console.log(changed.length ? `Updated: ${changed.join(', ')}` : 'No maintenance changes needed.');
