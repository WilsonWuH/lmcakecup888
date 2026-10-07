// Convert D:/csv/lm/article-translations.json (route-keyed) into per-locale
// overlay JSONs consumed by readLocale(): site/i18n/core/articles-<locale>.json
// with phrases (EN title -> localized title) and meta (EN meta -> localized meta).
import fs from "node:fs";

const SRC = "D:/csv/lm/article-translations.json";
const ARTICLES = "D:/csv/lm/en-article-meta.json";
const LANGS = ["es", "ru", "ar", "pt"];

const data = JSON.parse(fs.readFileSync(SRC, "utf8"));
const byRoute = Object.fromEntries(
  JSON.parse(fs.readFileSync(ARTICLES, "utf8")).map((a) => [a.route, a]),
);
const overlays = Object.fromEntries(LANGS.map((l) => [l, { phrases: {}, meta: {} }]));
const conflicts = [];

for (const [route, entry] of Object.entries(data)) {
  if (!entry) continue; // attempted-but-failed
  const article = byRoute[route];
  if (!article) continue;
  for (const lang of LANGS) {
    const { title, meta } = entry[lang];
    const o = overlays[lang];
    if (o.phrases[article.title] && o.phrases[article.title] !== title) {
      conflicts.push(`${lang} title conflict: ${article.title}`);
    }
    if (o.meta[article.meta] && o.meta[article.meta] !== meta) {
      conflicts.push(`${lang} meta conflict: ${article.meta.slice(0, 60)}`);
    }
    o.phrases[article.title] = title;
    o.meta[article.meta] = meta;
  }
}

if (conflicts.length) {
  console.error("CONFLICTS (same EN text, different translations):");
  for (const c of conflicts) console.error(" ", c);
  process.exit(1);
}

for (const lang of LANGS) {
  const out = `site/i18n/core/articles-${lang}.json`;
  fs.writeFileSync(out, JSON.stringify(overlays[lang], null, 1) + "\n");
  console.log(lang, "titles:", Object.keys(overlays[lang].phrases).length, "metas:", Object.keys(overlays[lang].meta).length, "->", out);
}
