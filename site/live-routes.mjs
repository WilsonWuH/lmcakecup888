// Shared live-route helper (2026-10-07)
//
// vercel.json permanently redirects the locale paths that were never translated
// back to their English equivalent (e.g. /ru/products/ -> /products/). hreflang,
// the language switcher, the sitemap and internal links must never point at
// those redirecting URLs, otherwise Google drops the whole hreflang cluster and
// crawl budget is spent on 308s.
//
// Only exact redirect sources count: pattern sources ("/xx/:path*") are dead
// config on the live deployment (verified 2026-10-07: they return 404 instead of
// redirecting) and must not blacklist a whole language.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.dirname(siteDir);

export function normalizeRoute(route) {
  if (!route) return "/";
  let r = String(route).split("?")[0].split("#")[0];
  if (!r.startsWith("/")) r = "/" + r;
  if (r.length > 1) r = r.replace(/\/+$/, "");
  return r.toLowerCase();
}

function loadRedirectedPaths() {
  const configPath = path.join(repoRoot, "vercel.json");
  const redirected = new Set();
  if (!fs.existsSync(configPath)) return redirected;
  let config;
  try {
    config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  } catch (error) {
    console.warn(`[warn] vercel.json unreadable, skipping live-route filter: ${error.message}`);
    return redirected;
  }
  for (const rule of config.redirects || []) {
    const source = rule && rule.source;
    if (typeof source !== "string") continue;
    if (source.includes(":") || source.includes("*") || source.includes("(")) continue;
    redirected.add(normalizeRoute(source));
  }
  return redirected;
}

export const redirectedPaths = loadRedirectedPaths();

export function isLiveRoute(route) {
  return !redirectedPaths.has(normalizeRoute(route));
}
