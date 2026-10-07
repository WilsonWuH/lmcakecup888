// Glossary consistency check for the de/fr market sites.
// Runs the machine_checks patterns from site/i18n/glossary-de-fr.json against
// every de/fr page in site/dist, plus a set of glossary sanity rules.
//   node scripts/glossary-check.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(root, "site/dist");
const glossary = JSON.parse(fs.readFileSync(path.join(root, "site/i18n/glossary-de-fr.json"), "utf8"));

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === "index.html") out.push(p);
  }
  return out;
}

const files = [
  ...walk(path.join(DIST, "de")),
  ...walk(path.join(DIST, "fr")),
];

let errors = 0;
let warnings = 0;
const hits = [];

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const rel = "/" + path.relative(DIST, file).replaceAll("\\", "/");
  const locale = rel.startsWith("/de/") ? "de" : "fr";
  // strip JSON-LD blocks and tags: check visible text + meta/alt/title
  const text = html
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
  for (const check of glossary.rules.machine_checks) {
    const re = new RegExp(check.pattern, "gi");
    const found = text.match(re);
    if (found) {
      for (const f of found) {
        hits.push({ severity: check.severity, file: rel, rule: check.id, match: f, message: check.message });
        if (check.severity === "error") errors++;
        else warnings++;
      }
    }
  }
  // lang attribute sanity
  if (!new RegExp(`<html lang="${locale}"`).test(html)) {
    hits.push({ severity: "error", file: rel, rule: "html-lang", match: `<html lang> not "${locale}"`, message: "页面 lang 属性与目录语言不符" });
    errors++;
  }
}

// sitemap coverage: every de/fr page must be in its sitemap
for (const lg of ["de", "fr"]) {
  const smFile = path.join(DIST, `sitemap-${lg}.xml`);
  if (!fs.existsSync(smFile)) {
    console.log(`sitemap-${lg}.xml missing (build may not include market sitemaps)`);
    continue;
  }
  const sm = fs.readFileSync(smFile, "utf8");
  const locs = new Set([...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace("https://www.lmcakecup.com", "").replace(/\/$/, "")));
  const pages = walk(path.join(DIST, lg)).map((f) => "/" + path.relative(DIST, path.dirname(f)).replaceAll("\\", "/"));
  const missing = pages.filter((p) => !locs.has(p.replace(/\/$/, "")));
  if (missing.length) {
    console.log(`sitemap-${lg}.xml: ${missing.length} pages missing from sitemap:`);
    missing.slice(0, 10).forEach((m) => console.log("  " + m));
    errors += missing.length;
  } else {
    console.log(`sitemap-${lg}.xml: all ${pages.length} pages covered`);
  }
}

console.log(`\nde/fr pages checked : ${files.length}`);
console.log(`glossary errors     : ${errors}`);
console.log(`glossary warnings   : ${warnings}`);
if (hits.length) {
  console.log("\n--- findings ---");
  for (const h of hits.slice(0, 40)) {
    console.log(`[${h.severity.toUpperCase()}] ${h.file}`);
    console.log(`  ${h.match}  (${h.rule}) ${h.message}`);
  }
  if (hits.length > 40) console.log(`  ... and ${hits.length - 40} more`);
}
process.exit(errors ? 1 : 0);
