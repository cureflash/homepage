import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const BASE_URL = (process.env.SITE_BASE_URL || 'https://homepage.hikaru0816tsc.workers.dev').replace(/\/$/, '');
const EXCLUDED_DIRS = new Set(['.git', '.github', 'docs', 'node_modules']);
const errors = [];
const warnings = [];

function toPosix(value) { return value.split(path.sep).join('/'); }
function isVerificationFile(rel) { return /^google[a-z0-9_-]+\.html$/i.test(rel); }
function isPublicHtml(rel) { return rel.endsWith('.html') && !rel.startsWith('docs/') && !rel.startsWith('.github/') && !isVerificationFile(rel); }

async function walk(dir = ROOT) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (EXCLUDED_DIRS.has(entry.name)) continue;
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(absolute));
    else out.push(toPosix(path.relative(ROOT, absolute)));
  }
  return out;
}

function attr(tag, name) {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i'))?.[1] ?? null;
}

function getDescription(html) {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = match[0];
    if ((attr(tag, 'name') || '').toLowerCase() === 'description') return (attr(tag, 'content') || '').trim();
  }
  return '';
}

function urlForHtml(rel) {
  if (rel === 'index.html') return `${BASE_URL}/`;
  if (rel.endsWith('/index.html')) return `${BASE_URL}/${rel.slice(0, -'index.html'.length)}`;
  return `${BASE_URL}/${rel}`;
}

async function existsAsTarget(abs) {
  try {
    const stat = await fs.stat(abs);
    if (stat.isDirectory()) return fs.access(path.join(abs, 'index.html')).then(() => true, () => false);
    return stat.isFile();
  } catch {
    return false;
  }
}

function localRefs(html) {
  const refs = [];
  for (const match of html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)) refs.push(match[1]);
  return refs;
}

function shouldSkipRef(ref) {
  return !ref || ref.startsWith('#') || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(ref) || ref.includes('${') || ref.includes('{{') || ref.includes('<%');
}

const allFiles = await walk();
const htmlFiles = allFiles.filter(isPublicHtml).sort();

for (const rel of htmlFiles) {
  const absolute = path.join(ROOT, rel);
  const html = await fs.readFile(absolute, 'utf8');
  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, ' ').trim() || '';
  const description = getDescription(html);

  if (!/<html\b[^>]*\blang\s*=\s*["']ja["']/i.test(html)) errors.push(`${rel}: <html lang="ja"> is required`);
  if (!title) errors.push(`${rel}: non-empty <title> is required`);
  if (!description) errors.push(`${rel}: meta description is required`);
  if (!html.includes('static.cloudflareinsights.com/beacon.min.js') || !html.includes('data-cf-beacon=')) errors.push(`${rel}: Cloudflare Web Analytics tag is required`);
  if (title && (title.length < 8 || title.length > 65)) warnings.push(`${rel}: title length ${title.length}`);
  if (description && (description.length < 30 || description.length > 160)) warnings.push(`${rel}: description length ${description.length}`);

  for (const ref of localRefs(html)) {
    if (shouldSkipRef(ref)) continue;
    const clean = ref.split('#')[0].split('?')[0];
    if (!clean) continue;
    let target;
    try { target = decodeURIComponent(clean); } catch { target = clean; }
    const resolved = target.startsWith('/') ? path.join(ROOT, target.slice(1)) : path.resolve(path.dirname(absolute), target);
    if (!resolved.startsWith(ROOT)) {
      errors.push(`${rel}: link escapes repository root: ${ref}`);
      continue;
    }
    if (!await existsAsTarget(resolved)) errors.push(`${rel}: broken local reference: ${ref}`);
  }
}

const expectedUrls = htmlFiles.map(urlForHtml).sort();
let sitemap = '';
try { sitemap = await fs.readFile(path.join(ROOT, 'sitemap.xml'), 'utf8'); }
catch { errors.push('sitemap.xml: file is required'); }
if (sitemap) {
  const actualUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(/&amp;/g, '&')).sort();
  if (JSON.stringify(actualUrls) !== JSON.stringify(expectedUrls)) errors.push(`sitemap.xml: expected ${expectedUrls.length} public URLs, found ${actualUrls.length} or URL set differs`);
}

let robots = '';
try { robots = await fs.readFile(path.join(ROOT, 'robots.txt'), 'utf8'); }
catch { errors.push('robots.txt: file is required'); }
if (robots && !robots.includes(`Sitemap: ${BASE_URL}/sitemap.xml`)) errors.push('robots.txt: sitemap declaration is missing or incorrect');

for (const warning of warnings) console.warn(`WARNING: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  console.error(`Site validation failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log(`Site validation passed: ${htmlFiles.length} public HTML pages, ${warnings.length} warning(s).`);
