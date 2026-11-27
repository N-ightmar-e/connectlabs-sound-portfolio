// Builds v2/artmug.js: one file that Artmug loads with a single <script src>.
// It carries the CSS (cl_design theme + components + studio, rewritten for a shadow root) and the data.
// Run: node v2/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('.', import.meta.url));
const read = (p) => readFileSync(dir + p, 'utf8');

// theme.css and components.css are written for a document. Inside a shadow root
// :root is :host, the dark class is a host attribute, and body is the studio's own root.
function forShadow(css) {
  return css
    .replace(/\.dark,\s*\[data-theme="dark"\]/g, ':host([data-theme="dark"])')
    .replace(/:root((?:\[[^\]]*\]|:not\([^)]*\))+)/g, ':host($1)')
    .replace(/:root\b/g, ':host')
    .replace(/(^|\n)body\s*\{/g, '$1.studio-root, .rail {');
}

const css = [forShadow(read('src/vendor/theme.css')), forShadow(read('src/vendor/components.css')), read('src/studio.css')]
  .join('\n')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{};,>])\s*/g, '$1')
  .trim();

const artmugCss = read('src/artmug.css').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{};,])\s*/g, '$1').trim();

const data = { content: JSON.parse(read('src/content.json')), extracted: JSON.parse(read('src/extracted.json')) };

const out = `/* 악몽 · 아트머그 상세 페이지 (built ${new Date().toISOString().slice(0, 10)} from v2/src; edit there, then node v2/build.mjs) */
(() => {
const BASE = new URL('.', document.currentScript ? document.currentScript.src : location.href).href;
const CSS = ${JSON.stringify(css)};
const ARTMUG_CSS = ${JSON.stringify(artmugCss)};
const DATA = ${JSON.stringify(data)};
${read('src/studio.js')}
})();
`;
writeFileSync(dir + 'artmug.js', out);
console.log(`artmug.js ${(out.length / 1024).toFixed(1)} KB (css ${(css.length / 1024).toFixed(1)} KB)`);
