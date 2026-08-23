import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, "scripts", "langmai-backfill-image-manifest.json"), "utf8"));
const dist = path.join(root, "site", "dist");
const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
const rows = manifest.map((item) => {
  const file = path.join(dist, "resources", item.slug, "index.html");
  const html = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  const count = (pattern) => (html.match(pattern) || []).length;
  return {
    slug: item.slug,
    exists: Boolean(html),
    h1: count(/<h1\b/gi),
    title: count(/<title>/gi),
    meta: count(/<meta name="description"/gi),
    canonical: html.includes('rel="canonical"'),
    date: html.includes(item.date),
    article: html.includes('"@type": "Article"'),
    breadcrumb: html.includes('"@type": "BreadcrumbList"'),
    faq: html.includes('"@type": "FAQPage"'),
    images: count(/<figure class="article-image">/g),
    cta: html.includes("Send Your Requirements"),
    internalLinks: count(/href="\/resources\//g),
    inSitemap: sitemap.includes(`/resources/${item.slug}/`),
    localized: ["es", "fr", "pt", "ru", "ar"].filter((locale) => fs.existsSync(path.join(dist, locale, "resources", item.slug, "index.html"))),
  };
});

const failures = rows.filter((row) => !row.exists || row.h1 !== 1 || row.title !== 1 || row.meta !== 1 || !row.canonical || !row.date || !row.article || !row.breadcrumb || !row.faq || row.images !== 2 || !row.cta || row.internalLinks < 2 || !row.inSitemap);
console.log(JSON.stringify({ count: rows.length, failures, localizedPages: rows.reduce((sum, row) => sum + row.localized.length, 0) }, null, 2));
if (failures.length) process.exitCode = 1;
