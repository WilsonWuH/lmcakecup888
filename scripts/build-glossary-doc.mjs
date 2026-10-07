// Renders the machine-readable glossary (site/i18n/glossary-de-fr.json) into a
// human-reviewable HTML document. The JSON is the single source of truth;
// regenerate this doc after every glossary change:
//   node scripts/build-glossary-doc.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const glossary = JSON.parse(fs.readFileSync(path.join(root, "site/i18n/glossary-de-fr.json"), "utf8"));
const outFile = path.join(root, "docs/glossary-de-fr-v1.html");

const esc = (v) =>
  String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const statusBadge = (status) => {
  if (status === "preferred") return `<span class="badge ok">✅ Preferred</span>`;
  if (status === "context") return `<span class="badge ctx">△ Context</span>`;
  if (status === "forbidden") return `<span class="badge bad">❌ Forbidden</span>`;
  if (status === "compliance") return `<span class="badge comp">⚠️ Compliance</span>`;
  return "";
};

function langCell(entry) {
  if (!entry) return "";
  const parts = [statusBadge(entry.status), `<strong>${esc(entry.value)}</strong>`];
  if (entry.alt?.length) parts.push(`<span class="alt">△ 同义：${entry.alt.map(esc).join("；")}</span>`);
  if (entry.avoid?.length) parts.push(`<span class="avoid">❌ 禁用：${entry.avoid.map(esc).join("；")}</span>`);
  return parts.join(" ");
}

function termRow(t) {
  return `<tr>
  <td class="en"><strong>${esc(t.en)}</strong><div class="id">#${esc(t.id)}</div></td>
  <td>${langCell(t.de)}</td>
  <td>${langCell(t.fr)}</td>
  <td class="note">${esc(t.note || "")}</td>
</tr>`;
}

function seoBlock(locale, label) {
  const s = glossary.seo[locale];
  return `<div class="seo-card">
  <h3>${label}</h3>
  <h4>优先关键词</h4>
  <ul class="kw">${s.priority_keywords.map((k) => `<li>${esc(k)}</li>`).join("")}</ul>
  <h4>Title 模板</h4>
  <p class="pattern">${esc(s.title_pattern)}</p>
  <ul>${s.title_rules.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
  <h4>H1 规则</h4>
  <ul>${s.h1_rules.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
  <h4>Meta Description 规则</h4>
  <ul>${s.meta_description_rules.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
  <h4>FAQ 常用表达</h4>
  <ul class="kw">${s.faq_phrases.map((k) => `<li>${esc(k)}</li>`).join("")}</ul>
  <h4>同义词与长尾词</h4>
  <ul class="kw">${s.synonyms_long_tail.map((k) => `<li>${esc(k)}</li>`).join("")}</ul>
</div>`;
}

const categorySections = glossary.categories
  .filter((c) => ["product", "process", "compliance", "b2b"].includes(c.id))
  .map((c) => {
    const terms = glossary.terms.filter((t) => t.category === c.id);
    return `<section id="${c.id}">
  <h2>${esc(c.no)} ${esc(c.title)} <span class="count">${terms.length} 词条</span></h2>
  <p class="cat-desc">${esc(c.desc)}</p>
  <table>
    <thead><tr><th>EN（母版）</th><th>DE</th><th>FR</th><th>备注</th></tr></thead>
    <tbody>${terms.map(termRow).join("\n")}</tbody>
  </table>
</section>`;
})
  .join("\n");

const rulesHtml = glossary.rules;
const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>LANGMAI 德/法本地化术语库 V${esc(glossary.meta.version)}</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body { font-family: "Segoe UI", "Microsoft YaHei", system-ui, sans-serif; margin: 0; background: #f6f7f9; color: #1f2933; line-height: 1.65; }
  .wrap { max-width: 1280px; margin: 0 auto; padding: 32px 24px 80px; }
  header.hero { background: #0f2b46; color: #fff; border-radius: 14px; padding: 28px 32px; margin-bottom: 28px; }
  header.hero h1 { margin: 0 0 8px; font-size: 26px; }
  header.hero p { margin: 4px 0; color: #c9d8e8; font-size: 14px; }
  header.hero .v { color: #7ee0a3; font-weight: 600; }
  .legend { display: flex; flex-wrap: wrap; gap: 10px; margin: 16px 0 0; }
  .legend span { font-size: 13px; }
  .badge { display: inline-block; font-size: 11px; padding: 1px 8px; border-radius: 999px; margin-right: 6px; white-space: nowrap; }
  .badge.ok { background: #e3f7e9; color: #136c34; }
  .badge.ctx { background: #fff4dd; color: #8a5a00; }
  .badge.bad { background: #ffe6e4; color: #a4271a; }
  .badge.comp { background: #e5e9ff; color: #3b45c4; }
  h2 { font-size: 20px; margin: 40px 0 6px; border-bottom: 2px solid #dbe2ea; padding-bottom: 8px; }
  h2 .count { font-size: 13px; color: #64748b; font-weight: 500; }
  .cat-desc { color: #52606d; font-size: 14px; margin-top: 0; }
  table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 3px rgba(16,24,40,.08); font-size: 13.5px; }
  th { background: #eef2f6; text-align: left; padding: 10px 12px; font-size: 12.5px; letter-spacing: .03em; color: #3e4c59; }
  td { padding: 10px 12px; border-top: 1px solid #edf0f3; vertical-align: top; }
  td.en strong { font-size: 14px; }
  td .id { color: #9aa5b1; font-size: 11px; margin-top: 3px; font-family: ui-monospace, Consolas, monospace; }
  td .alt, td .avoid { display: block; font-size: 12px; margin-top: 4px; }
  td .alt { color: #8a5a00; }
  td .avoid { color: #a4271a; }
  td.note { color: #52606d; font-size: 12.5px; max-width: 330px; }
  .seo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  @media (max-width: 900px) { .seo-grid { grid-template-columns: 1fr; } td.note { max-width: none; } }
  .seo-card { background: #fff; border-radius: 10px; padding: 18px 22px; box-shadow: 0 1px 3px rgba(16,24,40,.08); }
  .seo-card h3 { margin: 0 0 10px; font-size: 17px; }
  .seo-card h4 { margin: 14px 0 6px; font-size: 13px; color: #3e4c59; text-transform: none; }
  .seo-card ul { margin: 0; padding-left: 18px; font-size: 13.5px; }
  .seo-card .pattern { font-family: ui-monospace, Consolas, monospace; background: #f0f4f8; padding: 8px 12px; border-radius: 8px; font-size: 13px; margin: 6px 0; }
  ul.kw li { margin: 2px 0; }
  .rules card, .rule-card { background: #fff; border-radius: 10px; padding: 18px 22px; box-shadow: 0 1px 3px rgba(16,24,40,.08); margin-bottom: 16px; }
  .rule-card h3 { margin: 0 0 8px; font-size: 15.5px; }
  .rule-card ul { margin: 0; padding-left: 18px; font-size: 13.5px; }
  .check { font-family: ui-monospace, Consolas, monospace; font-size: 12px; background: #f7f9fb; border-left: 3px solid #c8d2dc; padding: 8px 12px; margin: 8px 0; border-radius: 0 6px 6px 0; }
  .check.error { border-left-color: #d9480f; }
  .check.warn { border-left-color: #e8a013; }
  .check b { font-size: 12.5px; }
  footer { margin-top: 48px; color: #7b8794; font-size: 12.5px; }
</style>
</head>
<body>
<div class="wrap">
<header class="hero">
  <h1>LANGMAI 德语/法语本地化术语库 <span class="v">V${esc(glossary.meta.version)}</span></h1>
  <p>工作流：${esc(glossary.meta.workflow)}</p>
  <p>术语来源：${esc(glossary.meta.source)}</p>
  <p>更新日期：${esc(glossary.meta.date)} · 词条总数：${glossary.terms.length} · 机器可读源文件：<code>site/i18n/glossary-de-fr.json</code></p>
  <div class="legend">
    ${Object.entries(glossary.meta.statuses).map(([k, v]) => `<span>${esc(v)}</span>`).join("")}
  </div>
</header>

${categorySections}

<section id="seo">
  <h2>⑤ SEO 关键词与模板</h2>
  <div class="seo-grid">
    ${seoBlock("de", "🇩🇪 德语")}
    ${seoBlock("fr", "🇫🇷 法语")}
  </div>
</section>

<section id="rules">
  <h2>⑥ 全局规则与特别标记</h2>
  <div class="rule-card"><h3>品牌与联系信息</h3><ul>${rulesHtml.brand.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></div>
  <div class="rule-card"><h3>格式与正字法</h3><ul>${rulesHtml.format.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></div>
  <div class="rule-card"><h3>合规表述口径（⚠️ 最高优先级）</h3><ul>${rulesHtml.compliance_hedges.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></div>
  <div class="rule-card">
    <h3>机器可检查的禁用模式（scripts/glossary-check.mjs 执行）</h3>
    ${rulesHtml.machine_checks
      .map(
        (c) => `<div class="check ${esc(c.severity)}"><b>${esc(c.id)} [${esc(c.severity)}]</b><br>正则：<code>${esc(c.pattern)}</code><br>${esc(c.message)}</div>`,
      )
      .join("")}
  </div>
</section>

<footer>
  本文档由 <code>scripts/build-glossary-doc.mjs</code> 从 <code>site/i18n/glossary-de-fr.json</code> 自动生成——改术语请改 JSON 后重新生成，不要直接编辑本文件。
  SEO 一致性检查：<code>node scripts/glossary-check.mjs</code>
</footer>
</div>
</body>
</html>
`;

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, html);
console.log(`written ${outFile} (${(html.length / 1024).toFixed(1)} KB, ${glossary.terms.length} terms)`);
