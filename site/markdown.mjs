// Shared markdown renderer used by both build-site.mjs (English master +
// es/ru/ar/pt locale copies) and market-sites.mjs (de/fr market sites).
// Extracted from build-site.mjs so market-sites can reuse it without a
// circular import. Keep the output markup identical when editing.

export function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function field(text, label) {
  const match = text.match(new RegExp(`^${label}:\\s*(.+)$`, "m"));
  return match ? match[1].trim() : "";
}

export function renderInline(text) {
  const placeholders = [];
  let safe = esc(text).replace(/\[([^\]]+)\]\((\/[^)\s]+|https:\/\/[^)\s]+)\)/g, (_, label, href) => {
    const token = `@@LINK${placeholders.length}@@`;
    const external = href.startsWith("https://") ? ` target="_blank" rel="noopener noreferrer"` : "";
    placeholders.push(`<a href="${esc(href)}"${external}>${label}</a>`);
    return token;
  });
  safe = safe.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  placeholders.forEach((html, index) => {
    safe = safe.replace(`@@LINK${index}@@`, html);
  });
  return safe;
}

export function isTableDivider(line) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line);
}

export function parseTableRow(line) {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

export function renderMarkdown(markdown, options = {}) {
  const ctaHref = options.ctaHref || "/inquiry/";
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let list = null;
  let table = null;
  const closeList = () => {
    if (list) {
      html.push(`</${list}>`);
      list = null;
    }
  };
  const closeTable = () => {
    if (table) {
      html.push("</tbody></table>");
      table = null;
    }
  };
  for (let index = 0; index < lines.length; index += 1) {
    const raw = lines[index];
    const line = raw.trim();
    if (!line) {
      closeList();
      closeTable();
      continue;
    }
    if (line.includes("|") && lines[index + 1] && isTableDivider(lines[index + 1].trim())) {
      closeList();
      closeTable();
      const headers = parseTableRow(line);
      html.push(`<table><thead><tr>${headers.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead><tbody>`);
      table = true;
      continue;
    }
    if (isTableDivider(line)) {
      continue;
    }
    if (table && line.includes("|")) {
      const cells = parseTableRow(line);
      html.push(`<tr>${cells.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`);
      continue;
    }
    closeTable();
    if (line.startsWith("### ")) {
      closeList();
      html.push(`<h3>${renderInline(line.slice(4))}</h3>`);
    } else if (line.startsWith("## ")) {
      closeList();
      html.push(`<h2>${renderInline(line.slice(3))}</h2>`);
    } else if (line.startsWith("- ")) {
      if (list !== "ul") {
        closeList();
        html.push("<ul>");
        list = "ul";
      }
      html.push(`<li>${renderInline(line.slice(2))}</li>`);
    } else if (/^\d+\.\s/.test(line)) {
      if (list !== "ol") {
        closeList();
        html.push("<ol>");
        list = "ol";
      }
      html.push(`<li>${renderInline(line.replace(/^\d+\.\s/, ""))}</li>`);
    } else if (line.startsWith("CTA button:")) {
      closeList();
      const label = line.replace("CTA button:", "").trim();
      html.push(`<p><a class="button primary" href="${ctaHref}">${esc(label || "Get a Quote")}</a></p>`);
    } else {
      closeList();
      html.push(`<p>${renderInline(line)}</p>`);
    }
  }
  closeList();
  closeTable();
  return html.join("\n");
}

export function extractFaq(markdown) {
  const faqStart = markdown.indexOf("## FAQ");
  if (faqStart === -1) return [];
  const faqEnds = ["## Conclusion", "## CTA", "## Sources"]
    .map((heading) => markdown.indexOf(heading, faqStart))
    .filter((index) => index > faqStart);
  const faqEnd = faqEnds.length ? Math.min(...faqEnds) : -1;
  const faqText = markdown.slice(faqStart, faqEnd > -1 ? faqEnd : undefined);
  const items = [];
  const matches = [...faqText.matchAll(/^###\s+(.+?)\s*\n+([\s\S]*?)(?=^###\s+|$)/gm)];
  matches.forEach((match) => {
    const answer = match[2]
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .join(" ");
    if (match[1] && answer) items.push([match[1].trim(), answer]);
  });
  return items;
}
