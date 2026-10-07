// Verify the rebuilt site: no hreflang / canonical / internal link may point at a
// path that vercel.json redirects away. Mirrors what Screaming Frog reported.
const fs = require('fs');
const path = require('path');

const ROOT = 'D:/Projects/lmcakecup888';
const DIST = path.join(ROOT, 'site/dist');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));

const norm = (r) => {
  if (!r) return '/';
  let s = String(r).split('?')[0].split('#')[0];
  if (!s.startsWith('/')) s = '/' + s;
  if (s.length > 1) s = s.replace(/\/+$/, '');
  return s.toLowerCase();
};
const redirected = new Set();
for (const r of cfg.redirects || []) {
  if (r.source.includes(':') || r.source.includes('*') || r.source.includes('(')) continue;
  redirected.add(norm(r.source));
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

const files = walk(DIST);
let hreflangBad = [], canonicalBad = [], linkBad = new Map(), switcherBad = [];
let totalHreflang = 0, totalLinks = 0;

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const rel = '/' + path.relative(DIST, path.dirname(f)).replace(/\\/g, '/') + '/';
  const pagePath = rel === '/./' ? '/' : rel;

  for (const m of html.matchAll(/<link[^>]+rel="alternate"[^>]+href="([^"]+)"/g)) {
    totalHreflang++;
    const u = m[1].replace('https://www.lmcakecup.com', '');
    if (redirected.has(norm(u))) hreflangBad.push(pagePath + ' -> ' + u);
  }
  for (const m of html.matchAll(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/g)) {
    const u = m[1].replace('https://www.lmcakecup.com', '');
    if (redirected.has(norm(u))) canonicalBad.push(pagePath + ' -> ' + u);
  }
  for (const m of html.matchAll(/<a[^>]+data-locale-link="([^"]*)"[^>]+href="([^"]+)"|<a[^>]+href="([^"]+)"[^>]+data-locale-link=/g)) {
    const u = (m[2] || m[3] || '').replace('https://www.lmcakecup.com', '');
    if (u.startsWith('/') && redirected.has(norm(u))) switcherBad.push(pagePath + ' -> ' + u);
  }
  for (const m of html.matchAll(/(?:href|action)="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const u = m[1];
    if (/\.(css|js|xml|txt|jpg|jpeg|png|webp|svg|ico|pdf)$/i.test(u)) continue;
    totalLinks++;
    if (redirected.has(norm(u))) linkBad.set(u, (linkBad.get(u) || 0) + 1);
  }
}

const top = [...linkBad.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15);
console.log('pages checked            : ' + files.length);
console.log('hreflang tags checked    : ' + totalHreflang);
console.log('hreflang -> redirect     : ' + hreflangBad.length);
console.log('canonical -> redirect    : ' + canonicalBad.length);
console.log('locale switcher -> redir : ' + switcherBad.length);
console.log('internal links checked   : ' + totalLinks);
console.log('internal links -> redir  : ' + [...linkBad.values()].reduce((a, b) => a + b, 0) + ' (distinct targets: ' + linkBad.size + ')');
console.log('--- worst link targets ---');
for (const [u, n] of top) console.log('  ' + n + 'x  ' + u);
console.log('--- sample bad hreflang ---');
hreflangBad.slice(0, 5).forEach((x) => console.log('  ' + x));
console.log('--- sample bad canonical ---');
canonicalBad.slice(0, 5).forEach((x) => console.log('  ' + x));

// sitemap check
const sm = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace('https://www.lmcakecup.com', ''));
const smBad = locs.filter((u) => redirected.has(norm(u)));
console.log('sitemap urls             : ' + locs.length);
console.log('sitemap -> redirect      : ' + smBad.length);
smBad.slice(0, 10).forEach((x) => console.log('  ' + x));
for (const lg of ['en', 'de', 'fr']) {
  const p = path.join(DIST, `sitemap-${lg}.xml`);
  if (!fs.existsSync(p)) continue;
  const l = [...fs.readFileSync(p, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace('https://www.lmcakecup.com', ''));
  console.log(`sitemap-${lg}.xml          : ${l.length} urls, ${l.filter((u) => redirected.has(norm(u))).length} redirecting`);
}
