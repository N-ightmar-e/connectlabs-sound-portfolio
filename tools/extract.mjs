// Pulls the facts out of the old single-file index.html into v2/src/extracted.json
// and writes its embedded images to v2/img/. Run once: node tools/extract.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const html = readFileSync(root + 'index.html', 'utf8');
const imgDir = root + 'v2/img/';
mkdirSync(imgDir, { recursive: true });

const text = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const ext = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/svg+xml': 'svg' };

// Saves a data: URI, shrinking rasters to `max` px on the long side with macOS sips.
function saveImage(dataUri, name, max) {
  const m = dataUri.match(/^data:([a-z/+]+);base64,(.*)$/);
  if (!m) return null;
  const file = `${name}.${ext[m[1]]}`;
  writeFileSync(imgDir + file, Buffer.from(m[2], 'base64'));
  if (max && m[1] !== 'image/svg+xml' && m[1] !== 'image/webp') {
    execFileSync('sips', ['-Z', String(max), imgDir + file], { stdio: 'ignore' });
  }
  return 'img/' + file;
}

const out = {};

// Creators: the full table, in the page's own order (largest public channel first).
const table = html.match(/<table class="creator-table[\s\S]*?<\/table>/)[0];
out.creators = [...table.matchAll(/<tr data-creator="([^"]+)">([\s\S]*?)<\/tr>/g)].map(([, name, row]) => {
  const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((c) => text(c[1]));
  const clean = (v) => (!v || v === '—' ? null : v);
  return { name, youtube: clean(cells[0]), chzzk: clean(cells[1]), soop: clean(cells[2]) };
});

// Creator portraits from the cards (the first dozen carry images).
const cards = [...html.matchAll(/<article class="creator-card[^"]*" data-creator="([^"]+)"><img src="(data:[^"]+)"/g)];
const portraits = {};
cards.slice(0, 12).forEach(([, name, uri], i) => { portraits[name] = saveImage(uri, `creator-${i + 1}`, 128); });
out.creators.forEach((c) => { if (portraits[c.name]) c.image = portraits[c.name]; });

// Partners.
out.partners = [...html.matchAll(/<div class="partner-logo([^"]*)"><img src="(data:[^"]+)" alt="([^"]+)"[\s\S]*?<h4>([^<]+)<\/h4>/g)]
  .map(([, mod, uri, alt, name], i) => ({ name, alt, white: mod.includes('white'), image: saveImage(uri, `partner-${i + 1}`, 480) }));

// Portrait of the artist.
const portrait = html.match(/<div class="profile-portrait"><img src="(data:[^"]+)"/);
out.portrait = saveImage(portrait[1], 'profile', 320);

// Videos: YouTube watch links with their captions.
out.videos = [...html.matchAll(/<a class="project-video[^"]*" href="https:\/\/www\.youtube\.com\/watch\?v=([A-Za-z0-9_-]{11})"[^>]*aria-label="([^"]+)"/g)]
  .map(([, id, label]) => ({ id, label: label.replace(/ (YouTube )?영상 보기.*$/, '') }));

// Vocal clips.
out.clips = [...html.matchAll(/<a class="clip-card" href="([^"]+)"[\s\S]*?<img src="(data:[^"]+)"[\s\S]*?<span class="clip-duration">([^<]+)<\/span>[\s\S]*?<strong>([^<]+)<\/strong><span>([^<]+)<\/span><\/div><h4>([^<]+)<\/h4>[\s\S]*?<time datetime="([^"]+)"/g)]
  .map(([, url, uri, duration, creator, source, title, date], i) => ({ url, creator, source, title, date, duration, image: saveImage(uri, `clip-${i + 1}`, 640) }));

// Large server projects.
const servers = html.match(/<div class="server-experience[\s\S]*?(?=<div class="portfolio-talk")/);
out.servers = servers ? [...servers[0].matchAll(/<h4>([^<]+)<\/h4>/g)].map((m) => text(m[1])) : [];

// FAQ.
const faqs = html.match(/<div class="faqs">([\s\S]*?)<\/div>/);
out.faqs = faqs ? [...faqs[1].matchAll(/<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)].map(([, q, a]) => ({ q: text(q), a: text(a) })) : [];

writeFileSync(root + 'v2/src/extracted.json', JSON.stringify(out, null, 2));
console.log({ creators: out.creators.length, portraits: Object.keys(portraits).length, partners: out.partners.length, videos: out.videos.length, clips: out.clips.length, servers: out.servers, faqs: out.faqs.length });
