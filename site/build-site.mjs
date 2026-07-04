import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteDir = path.join(root, "site");
const distDir = path.join(siteDir, "dist");
const baseUrl = "https://www.lmcakecup.com";
const localeCodes = ["en", "es", "ru", "ar", "fr", "pt"];
const defaultLocale = "en";

fs.rmSync(distDir, { recursive: true, force: true });

const company = {
  name: "Jinhua Langmai Daily-Using Co., Ltd.",
  brand: "LANGMAI",
  city: "Jinhua City, Zhejiang Province, China",
  address: "City, Province, China",
  founded: "2006",
  plant: "30,000+ square meters",
  team: "50+ elite team members",
  position: "Cupcake liner manufacturer / OEM & ODM solution provider",
  markets: "Middle East, North America, Europe, United Kingdom, South America",
  customers: "Importers, distributors, bakery and confectionery buyers, large supermarkets",
  certificates: ["BSCI", "ISO", "FSC", "FDA", "LFGB", "BRC"],
  contact: "Wilson Wu",
  email: "wh1007209170@gmail.com",
  phone: "+86 13645700210",
  whatsapp: "+86 13645700210",
};

const newsItems = JSON.parse(fs.readFileSync(path.join(siteDir, "content", "news.json"), "utf8"));

const heroProofPoints = [
  "Low-Odor Custom Ink",
  "EUDR Traceability Support",
  "PFAS-Free Options",
  "EU / LFGB / BfR Support",
];

const buyerAdvantages = [
  ["Low-odor custom ink", "Specially adjusted food-paper printing inks help reduce odor concerns for baking, takeaway and retail packaging."],
  ["EUDR traceability support", "For applicable paper products, sourcing, species, origin, geolocation and batch records can support an EU buyer's due-diligence review."],
  ["European compliance support", "FDA, EU, LFGB, BfR, DGCCRF and PFAS-free documentation can be reviewed or arranged according to the product and destination market."],
  ["Complete processing capability", "Printing, slitting, die-cutting, perforation, bag making and forming help turn food paper into export-ready finished products."],
];

const solutionCategories = [
  ["PFAS-Free Greaseproof Paper", "Burger wrap, fried chicken paper, fries bags, tray liners and takeaway box liners for foodservice packaging."],
  ["Baking Paper & Cake Cup Liners", "Cupcake liners, muffin cups, baking cups, tray paper and release paper for bakeries and retail baking ranges."],
  ["Air Fryer Paper Liners", "Round, square, perforated and formed air fryer liners with heat resistance, grease resistance and retail pack support."],
  ["Steaming & Dim Sum Paper", "Steamer paper, bun liners and perforated non-stick sheets for high-humidity food applications."],
  ["Custom Printed Food Paper Packaging", "Low-odor custom printing, private-label patterns, carton planning and food-contact document support."],
];

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/langmai.paper", icon: "facebook" },
  { name: "Instagram", url: "https://www.instagram.com/langmai.paper", icon: "instagram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/langmai-paper", icon: "linkedin" },
];

const certificateFiles = [
  {
    name: "BSCI",
    image: "cert-bsci.png",
    text: "amfori BSCI audit extract for social compliance screening.",
  },
  {
    name: "BRC",
    image: "cert-brc.png",
    text: "BRC-related document for importer quality review.",
  },
  {
    name: "ISO",
    image: "cert-iso.png",
    text: "ISO certificate preview for factory management review.",
  },
  {
    name: "LFGB",
    image: "cert-lfgb.png",
    text: "LFGB food contact test report for EU-oriented buyers.",
  },
  {
    name: "DGCCRF",
    image: "cert-dgccrf.png",
    text: "DGCCRF test report for French and EU compliance checks.",
  },
  {
    name: "PFAS",
    image: "cert-pfas.png",
    text: "PFAS-related test report for buyers reviewing food paper safety.",
  },
];

const nav = [
  ["Products", "/products/"],
  ["Customization", "/customization/"],
  ["Applications", "/applications/"],
  ["Cases", "/cases/"],
  ["Factory & Certificates", "/factory-certificates/"],
  ["Resources", "/resources/"],
  ["About", "/about/"],
  ["Contact", "/contact/"],
];

const specs = {
  cakeCups: [
    ["55 mm", "27 mm", "14 mm", "100 rolls x 1000 pcs/ctn"],
    ["60 mm", "27 mm", "16.5 mm", "100 rolls x 1000 pcs/ctn"],
    ["65 mm", "27 mm", "19 mm", "100 rolls x 1000 pcs/ctn"],
    ["70 mm", "32 mm", "19 mm", "100 rolls x 1000 pcs/ctn"],
    ["75 mm", "32 mm", "21.5 mm", "100 rolls x 1000 pcs/ctn"],
    ["80 mm", "32 mm", "24 mm", "100 rolls x 1000 pcs/ctn"],
    ["85 mm", "40 mm", "22.5 mm", "100 rolls x 1000 pcs/ctn"],
    ["90 mm", "40 mm", "25 mm", "50 rolls x 1000 pcs/ctn"],
    ["100 mm", "45 mm", "27.5 mm", "50 rolls x 1000 pcs/ctn"],
    ["120 mm", "50 mm", "35 mm", "40 rolls x 1000 pcs/ctn"],
    ["150 mm", "55 mm", "47.5 mm", "25 rolls x 1000 pcs/ctn"],
  ],
  airFryer: [
    ["Round", "16 mm dia", "30 mm", "150 bags x 50 pcs/ctn"],
    ["Round", "20 mm dia", "35 mm", "100 bags x 50 pcs/ctn"],
    ["Round", "23 mm dia", "40 mm", "80 bags x 50 pcs/ctn"],
    ["Square", "16 x 16 mm", "40 mm", "150 bags x 50 pcs/ctn"],
    ["Square", "20 x 20 mm", "22.5 mm", "100 bags x 50 pcs/ctn"],
  ],
  rollMouth: [
    ["50 mm", "38 mm", "30 mm", "30 rolls x 100 pcs/ctn"],
    ["60 mm", "44 mm", "35 mm", "30 rolls x 100 pcs/ctn"],
    ["70 mm", "50 mm", "40 mm", "30 rolls x 100 pcs/ctn"],
    ["80 mm", "60 mm", "40 mm", "30 rolls x 100 pcs/ctn"],
    ["36 mm", "24.5 mm", "22.5 mm", "20 bags x 250 pcs/ctn"],
    ["72 mm", "57 mm", "41 mm", "20 bags x 250 pcs/ctn"],
  ],
  muffin: [
    ["60 mm", "50 mm", "45 mm", "96 bags x 50 pcs/ctn"],
    ["70 mm", "60 mm", "55 mm", "60 bags x 50 pcs/ctn"],
  ],
  straws: [
    ["5 mm", "197 mm", "400 bags x 25 pcs/ctn"],
    ["6 mm", "197 mm", "400 bags x 25 pcs/ctn"],
    ["8 mm", "197 mm", "400 bags x 25 pcs/ctn"],
    ["10 mm", "197 mm", "200 bags x 25 pcs/ctn"],
    ["12 mm", "197 mm", "200 bags x 25 pcs/ctn"],
  ],
};

const products = [
  {
    slug: "cake-cups",
    title: "Custom Cupcake Liners & Paper Baking Cups Wholesale",
    short: "Food-grade greaseproof cupcake liners and paper baking cups for bakeries, importers, distributors and supermarket private-label programs.",
    image: "real-cake-cups-assortment.jpg",
    gallery: ["real-cake-cups-assortment.jpg", "real-cake-cups-stacked.jpg", "cake-cups-clean.jpg"],
    keywords: "paper cupcake cup liner, custom cake cups wholesale, cupcake liner manufacturer, paper baking cups supplier",
    material: "Food grade cake paper and greaseproof paper",
    features: ["Grease-proof", "Heat-resistant", "Easy release", "Soy-ink printing", "Custom colors and patterns"],
    applications: ["Bakeries", "Cupcake brands", "Cafe chains", "Party supply wholesalers", "Retail baking kits"],
    specs: specs.cakeCups,
    headers: ["Model", "Base dia", "Height", "Package"],
  },
  {
    slug: "roll-mouth-cake-cups",
    title: "Roll-Mouth Paper Baking Cups for OEM Dessert Packaging",
    short: "PET-coated roll-mouth baking cups with a rigid shape, colorful finishes and OEM printing support for desserts, muffins and retail bakery displays.",
    image: "real-roll-mouth-cups.jpg",
    gallery: ["real-roll-mouth-cups.jpg", "roll-mouth-cake-cups-clean.jpg", "real-cake-cups-stacked.jpg"],
    keywords: "roll mouth cake cups, PET coated cake cups, custom printed baking cups",
    material: "Food grade PET coated paper and 80 g paper",
    features: ["Grease-proof", "Water-proof", "Heat-resistant", "Moulding baking", "OEM printing"],
    applications: ["Cupcakes", "Muffins", "Dessert cups", "Seasonal food packaging"],
    specs: specs.rollMouth,
    headers: ["Top dia", "Base dia", "Height", "Package"],
  },
  {
    slug: "muffin-baking-cups",
    title: "Muffin Cup Liners for Bakeries, Cafes and Events",
    short: "Tall PET-coated muffin cup liners for branded bakery displays, cafe counters, supermarkets and event dessert programs.",
    image: "real-cake-cups-stacked.jpg",
    gallery: ["real-cake-cups-stacked.jpg", "muffin-baking-cups-clean.jpg", "real-cake-cups-assortment.jpg"],
    keywords: "muffin baking cup liner, PET coated muffin cups, muffin baking cups wholesale, custom muffin cups",
    material: "Food grade PET paper",
    features: ["Grease-proof", "Water-proof", "Heat-resistant", "Moulding baking", "Custom prints"],
    applications: ["Muffins", "Cupcakes", "Bakery display", "Gift boxes", "Event catering"],
    specs: specs.muffin,
    headers: ["Top dia", "Base dia", "Height", "Package"],
  },
  {
    slug: "air-fryer-paper-liners",
    title: "Air Fryer Paper Liners in Bulk for Retail & Foodservice",
    short: "Round and square food-grade silicone paper liners for air fryers, ovens, supermarkets and ready-to-cook food packs.",
    image: "ai-air-fryer-liners-premium.jpg",
    gallery: ["ai-air-fryer-liners-premium.jpg", "air-fryer-liners-clean.jpg", "ai-quality-export-packaging.jpg"],
    keywords: "air fryer paper liner, air fryer paper liners bulk, air fryer parchment liners supplier, silicone paper liner wholesale",
    material: "Food grade silicone paper and greaseproof paper",
    features: ["Grease-proof", "Water-proof", "Heat-resistant", "Non-stick", "Round and square shapes"],
    applications: ["Air fryers", "Frozen food packs", "Homeware retail", "Kitchen supply distributors"],
    specs: specs.airFryer,
    headers: ["Shape", "Base", "Height", "Package"],
  },
  {
    slug: "paper-straws",
    title: "Biodegradable Paper Straws for Wholesale Beverage Buyers",
    short: "Food-grade kraft paper straws in solid, striped and seasonal designs for beverage brands, restaurants, party supply buyers and retail packs.",
    image: "real-paper-straws.jpg",
    gallery: ["real-paper-straws.jpg", "paper-straws-clean.jpg", "ai-quality-export-packaging.jpg"],
    keywords: "paper straws wholesale, biodegradable paper straws, food grade kraft paper straws",
    material: "Food grade kraft paper",
    features: ["Biodegradable", "Food grade material", "Eco-friendly", "Multiple colors", "Stock designs for 6 x 197 mm"],
    applications: ["Beverage brands", "Restaurants", "Party supply", "Retail packs"],
    specs: specs.straws,
    headers: ["Dia", "Length", "Package"],
  },
  {
    slug: "party-accessories",
    title: "Paper Party Accessories for Retail and Event Supply",
    short: "Cupcake toppers, paper doilies, cake boards, themed cups, straws, plates and disposable tableware sets for retail and event channels.",
    image: "party-accessories-clean.jpg",
    gallery: ["party-accessories-clean.jpg", "ai-langmai-ip-showroom.jpg", "ai-quality-export-packaging.jpg"],
    keywords: "paper party accessories supplier, cupcake decorations wholesale, disposable party tableware",
    material: "Food grade paper, kraft paper, foil paper, and decorative paper",
    features: ["Birthday themes", "Seasonal themes", "Mixed party sets", "Custom patterns", "Retail pack support"],
    applications: ["Party brands", "Online retailers", "Event suppliers", "Bakery add-ons"],
    specs: [],
    headers: [],
  },
];

const resources = [
  {
    slug: "choose-custom-cupcake-liners",
    title: "How to Choose Custom Cupcake Liners for Bakery Wholesale",
    description: "A practical buying guide for importers comparing size, grease resistance, printing, packaging, and sample checks.",
    body: [
      "Start with the cake size and baking temperature, then confirm whether you need flat paper liners, roll mouth cake cups, or tall muffin cups.",
      "For bakery wholesale, buyers should request real size samples, check grease resistance after baking, and confirm package count per carton before bulk production.",
      "Custom printed cupcake liners need artwork confirmation, food safe ink discussion, color proofing, and carton marking that matches the purchase order.",
    ],
  },
  {
    slug: "greaseproof-vs-pet-coated-paper",
    title: "Greaseproof Paper vs PET Coated Paper for Baking Cups",
    description: "Compare paper materials for cupcake liners, roll mouth cake cups, and muffin baking cups.",
    body: [
      "Greaseproof paper is a strong option for standard cupcake liners because it resists oil, releases cleanly, and supports colorful printing.",
      "PET coated paper is often used when the cup needs a stronger body, water resistance, brighter finishes, or moulding baking performance.",
      "For OEM orders, the best material depends on baking temperature, dessert moisture, print coverage, display requirement, and destination market rules.",
    ],
  },
  {
    slug: "food-paper-certificates",
    title: "FSC, EUDR and BRC for Food Paper Packaging Buyers",
    description: "What importers should confirm before ordering food contact paper baking products from an OEM supplier.",
    body: [
      "Food contact paper packaging buyers should ask for relevant certificates, product test reports, and material declarations before placing a bulk order.",
      "The company profile highlights FSC and BRC documents alongside EUDR traceability support. Buyers should confirm document scope, validity and product applicability before placing orders.",
      "Buyers should be able to review certificate names and document previews without relying only on catalog images.",
    ],
  },
  {
    slug: "custom-printed-cake-cups-process",
    title: "Custom Printed Cake Cups: Size, Pattern, MOQ and Lead Time",
    description: "The OEM workflow for buyers planning custom printed baking cups.",
    body: [
      "A typical OEM workflow includes product selection, size confirmation, artwork review, material confirmation, sample approval, mass production, inspection, and shipping.",
      "Buyers should provide Pantone references or print files when possible. For seasonal designs, confirm production windows early because color proofing and packaging design can affect lead time.",
      "Requesting samples before mass production reduces color, fit, and baking performance risk.",
    ],
  },
  {
    slug: "baking-cups-for-bakeries-cafes-events",
    title: "Best Baking Cups for Bakeries, Cafes, Parties and Food Brands",
    description: "Match baking paper products to common B2B use cases.",
    body: [
      "Bakeries usually need reliable release, consistent size, and carton quantities that fit daily production.",
      "Food brands often care more about custom printing, retail packaging, shelf display, and repeatable color control.",
      "Event and party supply buyers can combine cupcake liners, toppers, straws, plates, and cake boards into themed product sets.",
    ],
  },
];

const landingPages = [
  {
    slug: "custom-cake-cups-wholesale",
    title: "Custom Cake Cups Wholesale",
    description: "Source custom printed cupcake liners and paper cake cups from a China manufacturer with food-grade materials, OEM/ODM design support and bulk export packaging.",
    productSlug: "cake-cups",
    focus: "custom cake cups wholesale",
  },
  {
    slug: "air-fryer-paper-liners-bulk",
    title: "Air Fryer Paper Liners Bulk",
    description: "Bulk air fryer paper liner options in round and square shapes with food-grade silicone paper, heat resistance and carton packaging.",
    productSlug: "air-fryer-paper-liners",
    focus: "air fryer paper liners bulk",
  },
  {
    slug: "custom-cupcake-liners-manufacturer",
    title: "Custom Cupcake Liners Manufacturer",
    description: "OEM cupcake liner manufacturer for greaseproof, colorful paper baking cups with low-odor food-contact printing and sample confirmation.",
    productSlug: "cake-cups",
    focus: "custom cupcake liners manufacturer",
  },
];

const pages = [];

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function field(text, label) {
  const match = text.match(new RegExp(`^${label}:\\s*(.+)$`, "m"));
  return match ? match[1].trim() : "";
}

function renderInline(text) {
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

function isTableDivider(line) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line);
}

function parseTableRow(line) {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function renderMarkdown(markdown) {
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
      html.push(`<p><a class="button primary" href="/inquiry/">${esc(label || "Get a Quote")}</a></p>`);
    } else {
      closeList();
      html.push(`<p>${renderInline(line)}</p>`);
    }
  }
  closeList();
  closeTable();
  return html.join("\n");
}

function extractFaq(markdown) {
  const faqStart = markdown.indexOf("## FAQ");
  if (faqStart === -1) return [];
  const faqEnd = markdown.indexOf("## CTA", faqStart);
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

const blogImageMap = {
  "how-to-choose-custom-cupcake-liners-wholesale": ["ai-cake-cups-premium.jpg", "ai-quality-export-packaging.jpg"],
  "greaseproof-paper-vs-pet-coated-paper-baking-cups": ["ai-cake-cups-premium.jpg", "ai-quality-export-packaging.jpg"],
  "air-fryer-paper-liners-bulk-buying-guide": ["ai-air-fryer-liners-premium.jpg", "ai-quality-export-packaging.jpg"],
  "paper-straws-wholesale-foodservice-retail-buyers": ["real-paper-straws.jpg", "ai-quality-export-packaging.jpg"],
  "custom-printed-food-paper-packaging-low-odor-ink": ["blog-custom-printed-food-paper-packaging.webp", "ai-quality-export-packaging.jpg"],
  "eudr-paper-baking-cups-traceability-checklist": ["blog-eudr-paper-traceability.webp", "ai-quality-export-packaging.jpg"],
  "baking-paper-products-quality-control-inspection": ["blog-baking-paper-quality-control.webp", "ai-quality-export-packaging.jpg"],
  "food-contact-testing-paper-baking-cups": ["blog-baking-paper-quality-control.webp", "ai-quality-export-packaging.jpg"],
  "party-paper-supplies-wholesale-retail-range": ["blog-party-paper-supplies-wholesale.webp", "ai-quality-export-packaging.jpg"],
  "private-label-cupcake-liners-retail-packaging": ["blog-private-label-cupcake-liners.webp", "ai-quality-export-packaging.jpg"],
  "muffin-baking-cups-commercial-bakery-guide": ["blog-muffin-baking-cups-commercial-bakery.webp", "ai-quality-export-packaging.jpg"],
  "tulip-baking-cups-vs-standard-muffin-liners": ["ai-cake-cups-premium.jpg", "ai-quality-export-packaging.jpg"],
  "greaseproof-paper-sheets-wholesale-buyer-guide": ["blog-custom-printed-food-paper-packaging.webp", "ai-quality-export-packaging.jpg"],
  "self-supporting-baking-cups-wholesale-guide": ["real-roll-mouth-cups.jpg", "ai-quality-export-packaging.jpg"],
};

function loadBlogArticles() {
  const blogDir = path.join(siteDir, "content", "blog");
  const file = path.join(blogDir, "langmai-seo-aio-blog-pack.md");
  if (!fs.existsSync(file)) return [];
  const articleDir = path.join(blogDir, "articles");
  const articleFiles = fs.existsSync(articleDir)
    ? fs.readdirSync(articleDir).filter((name) => name.endsWith(".md")).sort()
    : [];
  const text = [file, ...articleFiles.map((name) => path.join(articleDir, name))]
    .map((source) => fs.readFileSync(source, "utf8"))
    .join("\n\n");
  return text
    .split(/^# Article \d+$/m)
    .slice(1)
    .map((section) => {
      const url = field(section, "URL Slug");
      const slug = url.replace(/^\/resources\//, "").replace(/\/$/, "");
      const title = field(section, "H1") || field(section, "SEO Title");
      const description = field(section, "Meta Description");
      const start = section.indexOf("## Introduction");
      const end = section.indexOf("## Image Plan and AI Prompts");
      const bodyMarkdown = section.slice(start, end > -1 ? end : undefined).trim();
      return {
        slug,
        title,
        description,
        seoTitle: field(section, "SEO Title") || title,
        date: field(section, "Publish Date"),
        keywords: field(section, "Target Keywords"),
        intent: field(section, "Search Intent"),
        html: renderMarkdown(bodyMarkdown),
        faq: extractFaq(bodyMarkdown),
        images: blogImageMap[slug] || ["ai-cake-cups-premium.jpg", "ai-quality-export-packaging.jpg"],
        isLongForm: true,
      };
    })
    .filter((article) => article.slug && article.title && article.html);
}

const blogArticles = loadBlogArticles();
const resourcePages = [...blogArticles, ...resources];

function urlFor(route) {
  return route === "/" ? `${baseUrl}/` : `${baseUrl}${route}`;
}

function relAsset(file) {
  return `/assets/${file}`;
}

function localizedPath(locale, route) {
  return `/${locale}${route === "/" ? "/" : route}`;
}

function hreflangTags(route, currentLocale = "") {
  const prefix = currentLocale ? `/${currentLocale}` : "";
  const links = localeCodes
    .map((locale) => `  <link rel="alternate" hreflang="${locale}" href="${baseUrl}${localizedPath(locale, route)}">`)
    .join("\n");
  return `${links}\n  <link rel="alternate" hreflang="x-default" href="${baseUrl}${localizedPath(defaultLocale, route)}">`;
}

function languageSwitcher(route = "/") {
  const items = [
    ["en", "English"],
    ["es", "Español"],
    ["ru", "Русский"],
    ["ar", "العربية"],
    ["fr", "Français"],
    ["pt", "Português"],
  ];
  return `<div class="language-switcher">
    <button class="language-current" type="button" aria-label="Select language">EN</button>
    <div class="language-menu">
      ${items.map(([code, label]) => `<a data-locale-link="${code}" href="${localizedPath(code, route)}">${label}</a>`).join("")}
    </div>
  </div>`;
}

function layout({ route, title, description, content, schema = [], bodyClass = "" }) {
  const canonical = urlFor(route);
  const schemaText = JSON.stringify(
    [
      organizationSchema(),
      breadcrumbSchema(route, title),
      imageSchema("banner.jpg", "LANGMAI baking paper products banner"),
      ...schema,
    ],
    null,
    2,
  );
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
${hreflangTags(route)}
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${baseUrl}${relAsset("banner.jpg")}">
  <link rel="stylesheet" href="/styles.css">
  <script type="application/ld+json">${schemaText}</script>
</head>
<body class="${bodyClass}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${siteHeader()}
  <main id="main">${content}</main>
  ${siteFooter()}
  <a class="whatsapp-float" href="https://wa.me/8613645700210" aria-label="Chat on WhatsApp">WhatsApp</a>
  ${socialIconLinks("social-float")}
  <script src="/site.js" defer></script>
</body>
</html>`;
}

function siteHeader() {
  return `<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="/" aria-label="LANGMAI home">
      <img src="/assets/logo.jpg" alt="LANGMAI logo">
    </a>
    <nav class="main-nav" aria-label="Main navigation">
      ${megaNavItem("Products", "/products/", [
        ["Cupcake Liners & Baking Cups", "/products/cake-cups/", "Main wholesale line for bakeries and supermarkets"],
        ["Air Fryer Paper Liner", "/products/air-fryer-paper-liners/", "Bulk round and square silicone paper liners"],
        ["Roll Mouth Cake Cups", "/products/roll-mouth-cake-cups/", "PET coated cups for dessert and bakery display"],
        ["Muffin Baking Cup Liners", "/products/muffin-baking-cups/", "Tall cups for cafes, bakeries and food brands"],
        ["Paper Straws", "/products/paper-straws/", "Food grade kraft paper straws"],
        ["Party Accessories", "/products/party-accessories/", "Toppers, doilies, cake boards and sets"],
      ], "Browse all products")}
      ${megaNavItem("Customization", "/customization/", [
        ["OEM / ODM Process", "/customization/", "Size, material, print and packaging workflow"],
        ["Custom Printed Cake Cups", "/resources/custom-printed-cake-cups-process/", "Artwork, sample, MOQ and lead time guide"],
        ["Material Selection", "/resources/greaseproof-vs-pet-coated-paper/", "Greaseproof paper vs PET coated paper"],
      ], "Plan custom order")}
      ${megaNavItem("Applications", "/applications/", [
        ["Bakery and Confectionery", "/applications/", "Daily production and seasonal launches"],
        ["Large Supermarkets", "/applications/", "Retail-ready baking and party aisles"],
        ["Importers and Distributors", "/applications/", "Mixed categories for regional wholesale"],
      ], "View applications")}
      ${megaNavItem("Factory & Certificates", "/factory-certificates/", [
        ["Factory Capacity", "/factory-certificates/", "30,000+ square meters factory and 50+ team members"],
        ["Certificates", "/factory-certificates/", "BSCI, ISO, FSC, FDA, LFGB and BRC documents"],
        ["EUDR Traceability", "/eudr-traceability/", "Origin, geolocation, batch records and optional verification support"],
        ["Global Supply", "/#market-map-title", "Export routes and worldwide buyer support"],
      ], "Verify factory")}
      <a class="nav-link simple nav-eudr" href="/eudr-traceability/">EUDR</a>
      ${megaNavItem("Resources", "/resources/", [
        ["Buying Guides", "/resources/", "Practical guides for food paper product buyers"],
        ["Packaging News", "/news/", "Daily buyer notes on baking paper packaging trends"],
        ["Certificate Guide", "/resources/food-paper-certificates/", "Compliance notes for import buyers"],
        ["Cupcake Liner Selection", "/resources/choose-custom-cupcake-liners/", "How to choose baking cup specs"],
      ], "Read resources")}
      <a class="nav-link simple" href="/news/">News</a>
      <a class="nav-link simple" href="/about/">About</a>
      <a class="nav-link simple" href="/contact/">Contact</a>
    </nav>
    <a class="header-cta" href="/contact/">Request a Quote</a>
    ${languageSwitcher("/")}
  </div>
</header>`;
}

function megaNavItem(label, href, items, ctaLabel) {
  return `<div class="nav-item">
    <a class="nav-link" href="${href}">${label}</a>
    <div class="mega-menu">
      <div class="mega-inner">
        <div class="mega-intro">
          <p class="eyebrow">${label}</p>
          <h2>${label === "Products" ? "Wholesale product categories" : label}</h2>
          <p>Fast paths for overseas B2B buyers to review product fit, certificate evidence and quote-ready details.</p>
          <a class="button primary" href="${href}">${ctaLabel}</a>
        </div>
        <div class="mega-links">
          ${items.map(([title, itemHref, desc]) => `<a href="${itemHref}"><strong>${title}</strong><span>${desc}</span></a>`).join("")}
        </div>
      </div>
    </div>
  </div>`;
}

function siteFooter() {
  return `<footer class="site-footer">
  <div class="footer-grid">
    <div>
      <strong>${company.name}</strong>
      <p>${company.brand} supplies custom cupcake liners, paper baking cups, air fryer paper liners, paper straws and paper party accessories for B2B buyers.</p>
    </div>
    <div>
      <h2>Buyer Actions</h2>
      <a href="/contact/">Request a Quote</a>
      <a href="/contact/#sample">Get Free Sample</a>
      <a href="/eudr-traceability/">Review EUDR Traceability</a>
      <a href="/assets/catalog-preview-clean.jpg" download>Download Catalog Preview</a>
    </div>
    <div>
      <h2>Trust</h2>
      <p>Founded in ${company.founded}. ${company.plant} factory capacity. ${company.team}. Certificate documents: ${company.certificates.join(", ")}.</p>
      <p>Contact: ${company.contact}<br>Email: ${company.email}<br>WhatsApp: ${company.whatsapp}</p>
      ${socialIconLinks("footer-social")}
    </div>
  </div>
</footer>`;
}

function socialIcon(name) {
  const icons = {
    facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.4V6.7c0-.8.2-1.3 1.4-1.3H17V2.2c-.8-.1-1.7-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.4v2H7v3.6h3V22h3.8V12h2.8l.5-3.6H14Z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 2h9.2C19.6 2 22 4.4 22 7.4v9.2c0 3-2.4 5.4-5.4 5.4H7.4C4.4 22 2 19.6 2 16.6V7.4C2 4.4 4.4 2 7.4 2Zm0 3C6 5 5 6 5 7.4v9.2C5 18 6 19 7.4 19h9.2c1.4 0 2.4-1 2.4-2.4V7.4C19 6 18 5 16.6 5H7.4Zm4.6 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm4.4-3.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.7H2V22h3.2V8.7ZM3.6 2A1.9 1.9 0 1 0 3.6 5.8 1.9 1.9 0 0 0 3.6 2Zm7.7 6.7H8.2V22h3.2v-7c0-1.8.8-3.2 2.5-3.2 1.5 0 2.1 1 2.1 3V22h3.2v-7.8c0-3.7-2-5.8-4.8-5.8-1.9 0-2.8 1-3.1 1.7V8.7Z"/></svg>`,
  };
  return icons[name] || "";
}

function socialIconLinks(className = "social-links") {
  return `<div class="${className}" aria-label="LANGMAI social media links">
    ${socialLinks.map((item) => `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(item.name)}">${socialIcon(item.icon)}<span>${esc(item.name)}</span></a>`).join("")}
  </div>`;
}

function ctaBand(title = "Ready to price your next baking paper order?") {
  return `<section class="cta-band">
    <div>
      <p class="eyebrow">Wholesale inquiry</p>
      <h2>${esc(title)}</h2>
      <p>Share product type, size, quantity, destination market and custom print needs. LANGMAI can support stock designs, OEM artwork, samples and export carton planning.</p>
    </div>
    <div class="cta-actions">
      <a class="button primary" href="/contact/">Request a Quote</a>
      <a class="button secondary" href="/contact/#sample">Get Free Sample</a>
    </div>
  </section>`;
}

function leadForm(defaultProduct = "Custom cupcake liners") {
  return `<form class="lead-form" data-lead-form>
  <input class="hp-field" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
  <label>Name<input name="name" placeholder="Your name" required></label>
  <label>Email<input type="email" name="email" placeholder="buyer@example.com" required></label>
  <label>Country<input name="country" placeholder="USA, UAE, Germany..." required></label>
  <label>Product requirement<input name="product" value="${esc(defaultProduct)}" required></label>
  <label>Quantity / target order<input name="quantity" placeholder="Example: 100 cartons"></label>
  <label>Phone / WhatsApp<input type="tel" name="phone" inputmode="tel" pattern="^[+()0-9\\s-]{7,24}$" placeholder="+1 555 123 4567" required></label>
  <label>Message<textarea name="message" placeholder="Tell us the size, material, custom print, packaging and delivery needs." rows="4"></textarea></label>
  <button class="button primary" type="submit">Send Inquiry</button>
  <p class="form-note" data-form-note>Please complete the required fields. Your inquiry will be sent securely to our sales inbox.</p>
</form>`;
}

function ipStickyCard(productTitle = "Custom cupcake liners") {
  return `<aside class="ip-card" aria-label="Wilson Wu contact card">
    <img src="/assets/founder.jpg" alt="Wilson Wu, LANGMAI sales contact">
    <div>
      <p class="eyebrow">Talk to Wilson</p>
      <h2>Get a buyer-ready quote</h2>
      <p>Share your product size, carton quantity, target market and custom print needs. Wilson can help match the right baking paper product and sample route.</p>
      <ul>
        <li>OEM / ODM support</li>
        <li>Sample and catalog request</li>
        <li>WhatsApp quick reply</li>
      </ul>
      <a class="button primary" href="/contact/">Request a Quote</a>
      <a class="button secondary" href="https://wa.me/8613645700210">WhatsApp Wilson</a>
      <span class="ip-note">${esc(productTitle)}</span>
    </div>
  </aside>`;
}

function productCards() {
  return `<div class="product-grid">${products
    .map(
      (p) => `<article class="product-card">
      <img src="${relAsset(p.image)}" alt="${esc(p.title)}">
      <div>
        <h3><a href="/products/${p.slug}/">${esc(p.title)}</a></h3>
        <p>${esc(p.short)}</p>
        <a class="text-link" href="/products/${p.slug}/">View specs and options</a>
      </div>
    </article>`,
    )
    .join("")}</div>`;
}

function certificateCards(limit = certificateFiles.length) {
  return `<div class="certificate-grid">${certificateFiles
    .slice(0, limit)
    .map(
      (item) => `<article class="certificate-card">
        <a href="/assets/${item.image}" target="_blank" rel="noopener">
          <img src="/assets/${item.image}" alt="LANGMAI ${esc(item.name)} certificate or test report preview">
        </a>
        <div>
          <h3>${esc(item.name)}</h3>
          <p>${esc(item.text)}</p>
        </div>
      </article>`,
    )
    .join("")}</div>`;
}

function marketMapSection() {
  return `<section class="market-map section" aria-labelledby="market-map-title">
    <div class="section-heading">
      <p class="eyebrow">Export markets</p>
      <h2 id="market-map-title">From China to global buyers</h2>
      <p>LANGMAI supports importers, distributors, bakery and confectionery buyers, and large supermarkets worldwide.</p>
    </div>
    <div class="map-panel map-image-panel" role="img" aria-label="World map showing LANGMAI export routes from China to overseas markets">
      <img src="/assets/world-market-map.png" alt="LANGMAI export market map from China to North America, Europe, Middle East, South America and Asia">
    </div>
  </section>`;
}

function homeVideoSection() {
  return `<section class="home-video-section section" aria-labelledby="home-video-title">
    <div class="video-copy">
      <p class="eyebrow">Factory video</p>
      <h2 id="home-video-title">A closer look at LANGMAI products and export-ready presentation</h2>
      <p>Use the video to review product appearance, packaging style and factory presentation before requesting samples or a bulk quotation.</p>
      <div class="hero-actions">
        <a class="button primary" href="/inquiry/">Send Your Requirements</a>
        <a class="button secondary" href="/products/">View Products</a>
      </div>
    </div>
    <div class="video-frame">
      <video class="home-video" controls loop muted playsinline preload="metadata" poster="/assets/ai-quality-export-packaging.jpg" aria-label="LANGMAI vertical product and factory video">
        <source src="/assets/langmai-home-vertical-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </section>`;
}

function buyerAdvantageSection() {
  return `<section class="section advantage-section" aria-labelledby="advantage-title">
    <div class="section-heading">
      <p class="eyebrow">Food-contact paper advantages</p>
      <h2 id="advantage-title">Food-grade greaseproof paper solutions buyers can verify</h2>
      <p>LANGMAI combines low-odor custom printing, EUDR system paper sourcing, PFAS-free options and finished-product processing for global food packaging buyers.</p>
    </div>
    <div class="advantage-grid">${buyerAdvantages.map(([title, text]) => `<article><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div>
  </section>`;
}

function solutionCategorySection() {
  return `<section class="section solution-section" aria-labelledby="solution-title">
    <div class="section-heading">
      <p class="eyebrow">Application-based product lines</p>
      <h2 id="solution-title">From paper material to finished food packaging</h2>
      <p>Different food scenes need different paper performance. Buyers can start from the application, then confirm material, coating, printing, perforation, forming and packaging.</p>
    </div>
    <div class="solution-grid">${solutionCategories.map(([title, text]) => `<article><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div>
  </section>`;
}

function eudrHomeSection() {
  const steps = [
    ["01", "Forest origin", "Country, production region and plot-level geolocation data where applicable."],
    ["02", "Species record", "Common and scientific wood-species information supplied through the paper chain."],
    ["03", "Pulp and paper", "Paper mill, grade, supplier documentation and incoming material batch records."],
    ["04", "LANGMAI conversion", "Printing, slitting, forming and packing linked to an internal production lot."],
    ["05", "Finished order", "Finished SKU, carton quantity, inspection record and shipment reference."],
    ["06", "Buyer data support", "A structured document pack for the buyer's own EUDR due-diligence process."],
  ];
  return `<section class="section eudr-home" aria-labelledby="eudr-home-title">
    <div class="eudr-home-copy">
      <p class="eyebrow">EUDR traceability</p>
      <h2 id="eudr-home-title">Trace paper from source records to the finished shipment</h2>
      <p class="eudr-lede">For applicable paper products, LANGMAI can connect upstream paper-sourcing information with internal production lots and finished-order records. This helps EU buyers prepare their own due-diligence review without treating EUDR as a simple certificate.</p>
      <div class="eudr-actions">
        <a class="button primary" href="/eudr-traceability/">Review EUDR Support</a>
        <a class="button secondary" href="/inquiry/">Request a Buyer Data Pack</a>
      </div>
    </div>
    <div class="eudr-flow">${steps.map(([number, title, text]) => `<article><span>${number}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join("")}</div>
    <div class="eudr-verification-note">
      <strong>Optional scientific verification</strong>
      <p>Laboratory-based wood species or origin verification, including genetic testing, can be supported where the sample type, DNA quality and reference database permit. Testing supplements traceability records; it does not replace geolocation, legality evidence, risk assessment or a due diligence statement.</p>
    </div>
  </section>`;
}

function homePage() {
  const content = `<section class="hero">
    <div class="hero-slider" aria-label="LANGMAI product banner carousel">
      <img class="hero-slide" src="/assets/banner-cake-cups.png" alt="LANGMAI colorful cupcake liners and cake cups">
      <img class="hero-slide" src="/assets/banner-air-fryer-paper.png" alt="LANGMAI air fryer paper liners in round and square shapes">
      <img class="hero-slide" src="/assets/banner-paper-straws.png" alt="LANGMAI colorful paper straws for beverage and party buyers">
    </div>
    <div class="hero-copy">
      <p class="eyebrow">Food-grade greaseproof paper packaging manufacturer</p>
      <h1>Low-Odor Printed Food Paper Packaging for Global Buyers</h1>
      <p>LANGMAI helps importers, distributors, bakery brands and foodservice buyers source greaseproof paper products, cupcake liners, baking cups and air fryer liners with EUDR traceability support, PFAS-free options, low-odor custom ink and European food-contact document support.</p>
      <div class="hero-proof">${heroProofPoints.map((item) => `<span>${esc(item)}</span>`).join("")}</div>
      <div class="hero-actions">
        <a class="button primary" href="/products/cake-cups/">Explore Food Paper Products</a>
        <a class="button secondary" href="/contact/">Request a Quote</a>
      </div>
    </div>
  </section>
  <section class="trust-strip" aria-label="Factory trust points">
      <span>Founded in ${company.founded}</span><span>${company.plant} factory</span><span>Low-odor custom ink</span><span>EUDR traceability / PFAS-free / LFGB / BfR support</span>
  </section>
  ${buyerAdvantageSection()}
  ${eudrHomeSection()}
  ${homeVideoSection()}
  ${marketMapSection()}
  <section class="section trust-evidence">
    <div class="section-heading">
      <p class="eyebrow">Buyer trust evidence</p>
      <h2>Visible certificate previews for faster supplier screening</h2>
      <p>Instead of only listing certificate names, LANGMAI shows compliance document previews so overseas buyers can quickly assess social audit, food-contact and factory management evidence before sending an RFQ.</p>
    </div>
    ${certificateCards(3)}
    <p><a class="button secondary" href="/factory-certificates/">View all certificates</a></p>
  </section>
  <section class="section">
    <div class="section-heading">
      <p class="eyebrow">Product categories</p>
      <h2>Find the right product faster</h2>
      <p>Each category shows materials, common sizes, application scenarios and inquiry paths for worldwide buyers.</p>
    </div>
    ${productCards()}
  </section>
  ${solutionCategorySection()}
  <section class="split-section">
    <img src="/assets/ai-langmai-ip-showroom.jpg" alt="LANGMAI showroom with branded product samples">
    <div>
      <p class="eyebrow">Factory trust</p>
      <h2>Real people, real factory, export-ready food paper support</h2>
      <p>${company.name} was founded in ${company.founded} and positions itself as a ${company.position}. The company profile highlights ${company.plant} factory capacity, ${company.team}, OEM/ODM customization, EUDR traceability support for applicable paper products and low-odor food-contact printing support.</p>
      <ul class="check-list">
        <li>LANGMAI supports wholesale buyers, importers and distributors worldwide.</li>
        <li>Target customers include ${company.customers}.</li>
        <li>BSCI, ISO, FSC, FDA, LFGB, BfR, DGCCRF, PFAS and BRC documents support buyer review, with EUDR traceability handled as a separate due-diligence workstream.</li>
      </ul>
      <a class="button secondary" href="/factory-certificates/">View Factory & Certificates</a>
    </div>
  </section>
  ${ctaBand()}`;
  return layout({
    route: "/",
    title: "LANGMAI | Low-Odor Food Paper Packaging Manufacturer",
    description: "Food-grade greaseproof paper packaging, cupcake liners, baking cups and air fryer liners with EUDR traceability support, low-odor custom ink and European compliance documents.",
    content,
    schema: [websiteSchema()],
  });
}

function productsIndex() {
  const content = `<section class="page-hero">
    <p class="eyebrow">Products</p>
    <h1>Wholesale Paper Baking Products for Importers</h1>
    <p>Compare cupcake liners, roll-mouth baking cups, muffin cups, air fryer liners, paper straws and party paper accessories with materials, specifications, use cases and RFQ paths.</p>
  </section>
  <section class="section">${productCards()}</section>
  ${ctaBand("Need a mixed container or custom printed set?")}`;
  return layout({
    route: "/products/",
    title: "Wholesale Paper Baking Products | LANGMAI",
    description: "Browse LANGMAI cupcake liners, paper baking cups, muffin cups, air fryer liners, paper straws and party paper accessories for wholesale and OEM orders.",
    content,
  });
}

function productPage(product) {
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const specTable = product.specs.length
    ? `<div class="table-wrap"><table><thead><tr>${product.headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${product.specs
        .map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`)
        .join("")}</tbody></table></div>`
    : `<p class="note">Party accessories are selected by theme, shape, color and pack configuration. Send target product photos or a mood board for matching options.</p>`;
  const faq = [
    [`What material is used for ${product.title}?`, `${product.material}. Buyers can review the visible material notes, specifications and packaging details before requesting samples.`],
    ["Can LANGMAI make custom printed designs?", "Yes. Custom colors, sizes, stock designs and OEM artwork are supported. Buyers should confirm artwork, material, carton quantity and sample approval before mass production."],
    ["Which compliance documents should buyers confirm?", "The website shows BSCI, ISO, FSC, FDA, LFGB and BRC names or document previews. EUDR traceability is handled separately because it is a due-diligence system rather than a product certificate. Final scope, validity, applicability and report numbers should be checked during order review."],
    ["How do I request a quote?", "Send product type, size, quantity, target market, custom print needs, email and WhatsApp through the inquiry form."],
  ];
  const content = `<section class="product-hero">
    <div>
      <p class="eyebrow">Product category</p>
      <h1>${esc(product.title)}</h1>
      <p>${esc(product.short)}</p>
      <div class="hero-actions">
        <a class="button primary" href="#quote">Request a Quote</a>
        <a class="button secondary" href="/contact/#sample">Get Free Sample</a>
      </div>
    </div>
    <img src="${relAsset(product.image)}" alt="${esc(product.title)} specifications and product examples">
  </section>
  <section class="product-template section">
    <div class="product-main">
      <section class="two-col product-block">
        <div>
          <p class="eyebrow">Materials and features</p>
          <h2>What buyers can confirm on this page</h2>
          <p><strong>Material:</strong> ${esc(product.material)}.</p>
          <ul class="check-list">${product.features.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </div>
        <div>
          <p class="eyebrow">Applications</p>
          <h2>Common B2B use cases</h2>
          <ul class="check-list">${product.applications.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </div>
      </section>
      <section class="product-block">
        <div class="section-heading">
          <p class="eyebrow">Specifications</p>
          <h2>Specifications buyers can quote from</h2>
          <p>These specification rows are easy for procurement teams to copy into RFQ sheets, supplier comparisons and internal approval notes.</p>
        </div>
        ${specTable}
      </section>
      <section class="product-block product-eudr-support" aria-labelledby="product-eudr-title">
        <div>
          <p class="eyebrow">EUDR buyer support</p>
          <h2 id="product-eudr-title">Traceability records for applicable paper products</h2>
          <p>Product scope depends on the material composition, CN/HS classification and how the product is placed on the EU market. When EUDR applies, LANGMAI can help buyers collect and connect available upstream paper information with the finished production lot.</p>
          <a class="text-link" href="/eudr-traceability/">See the complete EUDR traceability process</a>
        </div>
        <ul class="eudr-data-list">
          <li>Paper supplier, mill, grade and material batch</li>
          <li>Wood species and scientific-name data when available</li>
          <li>Country, production region and plot geolocation support</li>
          <li>Internal production lot, finished SKU and shipment linkage</li>
          <li>Optional laboratory verification where technically feasible</li>
        </ul>
      </section>
      <section class="image-band product-gallery">${product.gallery.map((img) => `<img src="${relAsset(img)}" alt="${esc(product.title)} product gallery">`).join("")}</section>
      <section class="two-col product-block" id="quote">
        <div>
          <p class="eyebrow">OEM / ODM</p>
          <h2>OEM design, sampling and export cartons</h2>
          <p>LANGMAI supports size selection, artwork checks, color matching, custom packaging and pre-production sample confirmation for overseas buyers.</p>
          <ol class="process-list"><li>Confirm product and size</li><li>Send artwork or select stock design</li><li>Approve sample and packaging</li><li>Start mass production and inspection</li></ol>
        </div>
        ${leadForm(product.title)}
      </section>
      <section class="product-block faq">
        <p class="eyebrow">FAQ</p>
        <h2>${esc(product.title)} FAQ</h2>
        ${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}
      </section>
      <section class="product-block">
        <h2>Related categories</h2>
        <div class="link-grid">${related.map((p) => `<a href="/products/${p.slug}/">${esc(p.title)}</a>`).join("")}<a href="/customization/">Custom printed baking cups process</a></div>
      </section>
    </div>
    ${ipStickyCard(product.title)}
  </section>`;
  return layout({
    route: `/products/${product.slug}/`,
    title: `${product.title} | LANGMAI Manufacturer`,
    description: product.short,
    content,
    schema: [productSchema(product), faqSchema(faq)],
  });
}

function eudrTraceabilityPage() {
  const faq = [
    ["Is EUDR a product certificate?", "No. EUDR is an EU market-access and due-diligence regulation, not a product certification scheme. Certificates may support a buyer's review, but they do not replace the required sourcing information, risk assessment and due diligence statement."],
    ["Which LANGMAI products are covered by EUDR?", "Coverage must be checked product by product using the material composition, CN or HS classification and the way the product is placed on the EU market. LANGMAI therefore provides traceability support for applicable paper products rather than making a blanket claim for every SKU."],
    ["What traceability information can LANGMAI support?", "Depending on the paper supplier and order, the data pack can include paper grade and batch, species information, country and region of production, plot geolocation, upstream declarations, internal production lot, finished SKU and shipment references."],
    ["Does genetic testing prove EUDR compliance?", "No. Genetic testing can provide supplementary evidence about wood species or origin when the sample and reference database are suitable. It does not replace geolocation, legality evidence, supply-chain records, risk assessment or the buyer's due diligence statement."],
    ["Can buyers request an EUDR data pack before ordering?", "Yes. Send the product, material, destination market and expected quantity. LANGMAI can first confirm scope and then explain which traceability fields and supporting documents are available for that paper and order."],
  ];
  const dataFields = [
    ["Product identity", "SKU, description, CN/HS code, fibre composition and order quantity."],
    ["Wood information", "Common and scientific species name, subject to upstream paper data."],
    ["Origin", "Country, production region, plot coordinates or GeoJSON where applicable."],
    ["Upstream evidence", "Paper supplier, mill, grade, batch, production period and available declaration references."],
    ["LANGMAI lot link", "Incoming paper batch connected to converting, packing and finished-product records."],
    ["Shipment record", "Finished SKU, carton quantity, inspection record and commercial shipment reference."],
  ];
  const content = `<section class="page-hero eudr-hero">
    <p class="eyebrow">EUDR support for paper buyers</p>
    <h1>EUDR-Ready Paper Baking Products with Supply Chain Traceability</h1>
    <p>LANGMAI supports EU buyers of applicable paper products with structured sourcing, species, origin, geolocation and batch information. The objective is a reviewable chain from upstream paper records to the finished order.</p>
    <div class="hero-actions"><a class="button primary" href="/inquiry/">Request an EUDR Data Pack</a><a class="button secondary" href="#data-fields">Review Available Fields</a></div>
  </section>
  <section class="trust-strip" aria-label="EUDR support highlights"><span>Plot-level geolocation support</span><span>Species and origin records</span><span>Lot-to-shipment traceability</span><span>Optional genetic verification</span></section>
  <section class="section eudr-definition">
    <div class="section-heading"><p class="eyebrow">What EUDR means</p><h2>EUDR is due diligence, not a certificate</h2></div>
    <div class="two-col">
      <div><p>Products within the regulation's scope must be deforestation-free, produced in accordance with relevant legislation in the country of production, and covered by the required due-diligence documentation before they are placed on or exported from the EU market.</p><p>The EU operator or trader remains responsible for its legal assessment and submission. LANGMAI's role is to provide accurate supplier and production evidence that supports that review.</p></div>
      <aside class="eudr-scope-note"><strong>Scope check comes first</strong><p>Paper-product coverage depends on the current Annex I wording, material composition, CN/HS classification and product presentation. Recovered or recycled inputs and packaging used only to support another product may require a different analysis.</p></aside>
    </div>
  </section>
  <section class="section eudr-data-section" id="data-fields">
    <div class="section-heading"><p class="eyebrow">Buyer data pack</p><h2>Information buyers can request for an applicable order</h2><p>Availability is confirmed against the selected paper, supplier and production batch before an order claim is finalized.</p></div>
    <div class="eudr-data-grid">${dataFields.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
  </section>
  <section class="section eudr-chain">
    <div class="section-heading"><p class="eyebrow">Chain of evidence</p><h2>From forest-source data to finished cartons</h2></div>
    <ol>
      <li><strong>Source:</strong><span>Forest plot, species, country, production region and harvest or production period.</span></li>
      <li><strong>Material:</strong><span>Pulp and paper mill information, paper grade, supplier and incoming batch.</span></li>
      <li><strong>Conversion:</strong><span>Printing, slitting, die-cutting, forming and packing under a LANGMAI production lot.</span></li>
      <li><strong>Inspection:</strong><span>Approved specification, carton quantity and shipment inspection records.</span></li>
      <li><strong>Handover:</strong><span>Finished SKU and shipment reference linked to the available upstream evidence.</span></li>
    </ol>
  </section>
  <section class="split-section eudr-genetic">
    <div>
      <p class="eyebrow">Scientific verification</p>
      <h2>Genetic testing can strengthen evidence when technically suitable</h2>
      <p>LANGMAI can support optional laboratory-based wood species or origin verification, including genetic testing, where the sample contains usable biological material and the laboratory has a suitable species or geographic reference database.</p>
      <p>Highly processed, bleached, coated or mixed-fibre paper may contain degraded DNA. Testing feasibility and the exact claim must therefore be confirmed by the laboratory before it is included in a buyer file.</p>
    </div>
    <div class="eudr-boundaries"><h3>What testing does not replace</h3><ul class="check-list"><li>Plot geolocation or GeoJSON</li><li>Supply-chain and batch records</li><li>Legality and no-deforestation evidence</li><li>Risk assessment and risk mitigation</li><li>The EU operator's due diligence statement</li></ul></div>
  </section>
  <section class="section eudr-official-sources">
    <div class="section-heading"><p class="eyebrow">Primary references</p><h2>Official information for buyer compliance teams</h2></div>
    <div class="link-grid"><a href="https://eur-lex.europa.eu/legal-content/en/ALL/?uri=CELEX%3A32023R1115" target="_blank" rel="noopener noreferrer">Current EUDR regulation on EUR-Lex</a><a href="https://green-forum.ec.europa.eu/nature-and-biodiversity/deforestation-regulation-implementation_en" target="_blank" rel="noopener noreferrer">European Commission implementation guidance</a><a href="https://green-forum.ec.europa.eu/nature-and-biodiversity/deforestation-regulation-implementation/information-system-deforestation-regulation_en" target="_blank" rel="noopener noreferrer">EUDR Information System</a></div>
  </section>
  <section class="section faq"><p class="eyebrow">Buyer FAQ</p><h2>EUDR traceability questions</h2>${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
  ${ctaBand("Need an EUDR data review for your paper product?")}`;
  return layout({
    route: "/eudr-traceability/",
    title: "EUDR Paper Traceability Support | LANGMAI",
    description: "Review LANGMAI EUDR traceability support for applicable paper baking products, including origin, geolocation, species, batch records and optional genetic verification.",
    content,
    schema: [faqSchema(faq)],
  });
}

function customizationPage() {
  const content = `<section class="page-hero">
    <p class="eyebrow">Customization</p>
    <h1>OEM Custom Printed Cupcake Liners and Baking Cups</h1>
    <p>Build custom cupcake liners, baking cups, muffin cups, paper straws and party sets around your brand artwork, seasonal theme, retail channel and destination market.</p>
  </section>
  <section class="section process-grid">
    ${["Product and size", "Material and print", "Sample approval", "Bulk production", "Packing and shipping"].map((step, i) => `<article><span>${i + 1}</span><h2>${step}</h2><p>${customStepText(i)}</p></article>`).join("")}
  </section>
  ${ctaBand("Send artwork, size and quantity for an OEM quote")}`;
  return layout({
    route: "/customization/",
    title: "OEM Custom Printed Cupcake Liners & Baking Cups | LANGMAI",
    description: "Plan custom printed cupcake liners, paper baking cups, muffin cups, paper straws and party paper products with size, artwork, sample and carton support.",
    content,
  });
}

function applicationsPage() {
  const applications = [
    ["Bakery and confectionery", "Cupcake liners, roll-mouth baking cups and muffin cup liners for daily production, seasonal launches and branded displays.", "cake-cups-clean.jpg"],
    ["Large supermarkets", "Bulk carton packaging, retail-ready designs and repeatable product specifications for supermarket baking and party aisles.", "product-gallery.jpg"],
    ["Importers and distributors", "Mixed categories including cupcake liners, air fryer liners, paper straws and party accessories for regional wholesale channels.", "air-fryer-liners-clean.jpg"],
    ["Party and event supply", "Themed cups, toppers, straws, cake boards and disposable tableware sets for birthday, holiday and celebration ranges.", "party-accessories-clean.jpg"],
  ];
  const content = `<section class="page-hero">
    <p class="eyebrow">Applications</p>
    <h1>Applications for Bakeries, Supermarkets and Importers</h1>
    <p>Match each product category with real buyer scenarios worldwide, from bakery displays and supermarket shelves to mixed wholesale containers.</p>
  </section>
  <section class="section">
    <div class="product-grid">${applications
      .map(
        ([title, text, image]) => `<article class="product-card">
        <img src="/assets/${image}" alt="${esc(title)} application for LANGMAI products">
        <div><h2>${esc(title)}</h2><p>${esc(text)}</p><a class="text-link" href="/contact/">Discuss this application</a></div>
      </article>`,
      )
      .join("")}</div>
  </section>
  ${ctaBand("Tell us your product channel and destination country")}`;
  return layout({
    route: "/applications/",
    title: "Applications | LANGMAI Baking Paper Products",
    description: "Application scenarios for LANGMAI cupcake liners, air fryer liners, muffin cups, paper straws and party accessories for bakeries, supermarkets and importers.",
    content,
  });
}

function casesPage() {
  const cases = [
    ["Bakery wholesale supply", "Custom cupcake liners and muffin baking cups prepared for bakery buyers who need stable size, grease resistance and repeat carton packing.", "ai-cake-cups-premium.jpg"],
    ["Retail air fryer liner program", "Round and square air fryer paper liners planned for supermarket and ecommerce retail packs with sample testing before bulk shipment.", "ai-air-fryer-liners-premium.jpg"],
    ["OEM export packaging", "Product samples, packaging quantity and shipment inspection aligned before export to reduce buyer risk and improve repeat-order stability.", "ai-quality-export-packaging.jpg"],
  ];
  const content = `<section class="page-hero">
    <p class="eyebrow">Cases / Projects</p>
    <h1>Export Project Examples for Paper Packaging Buyers</h1>
    <p>Review how LANGMAI supports bakeries, importers, distributors, supermarkets and ecommerce buyers from sample planning to carton confirmation and shipment inspection.</p>
  </section>
  <section class="section"><div class="product-grid">${cases.map(([title, text, image]) => `<article class="product-card">
    <img src="/assets/${image}" alt="${esc(title)} for LANGMAI overseas buyers">
    <div><h2>${esc(title)}</h2><p>${esc(text)}</p><a class="text-link" href="/inquiry/">Discuss a similar project</a></div>
  </article>`).join("")}</div></section>
  ${ctaBand("Planning a private-label paper packaging project?")}`;
  return layout({
    route: "/cases/",
    title: "Cases | LANGMAI Export Paper Packaging",
    description: "Project-style examples for LANGMAI cupcake liners, air fryer paper liners, OEM export packaging, sample planning and shipment inspection.",
    content,
  });
}

function customStepText(i) {
  return [
    "Choose cupcake liners, roll-mouth baking cups, muffin cups, air fryer liners, paper straws or party accessories.",
    "Confirm greaseproof paper, PET-coated paper, silicone paper, kraft paper, low-odor food-contact printing and color requirements.",
    "Review physical samples to check size, color, baking performance and packaging before mass production.",
    "Produce according to approved samples, carton packaging and buyer purchase order requirements.",
    "Prepare export cartons and documents for distributors, bakery brands and retail supply chains.",
  ][i];
}

function factoryPage() {
  const content = `<section class="page-hero">
    <p class="eyebrow">Factory & Certificates</p>
    <h1>Factory & Certificates for Food Paper Packaging Buyers</h1>
    <p>${company.name} operates a ${company.plant} factory with ${company.team}, serving B2B buyers that need verified product photos, compliance documents and export-ready paper packaging.</p>
  </section>
  <section class="split-section">
    <img src="/assets/ai-quality-export-packaging.jpg" alt="LANGMAI quality control and export packaging">
    <div>
      <h2>Factory profile for overseas procurement</h2>
      <p>LANGMAI focuses on cupcake liners, baking cups, air fryer liners, paper straws and paper party products for ${company.customers} worldwide.</p>
      <ul class="check-list"><li>OEM/ODM customization for size, material, print and retail packaging.</li><li>Visible BSCI, BRC, ISO, LFGB, DGCCRF, PFAS and FSC documents for buyer screening.</li><li>Sample checks, carton confirmation and export documentation before shipment.</li></ul>
    </div>
  </section>
  <section class="image-band"><img src="/assets/factory-workshop.jpg" alt="LANGMAI workshop"><img src="/assets/ai-langmai-ip-showroom.jpg" alt="LANGMAI branded showroom and product samples"><img src="/assets/showroom.jpg" alt="LANGMAI showroom"></section>
  <section class="section">
    <p class="eyebrow">Visible certificates and test reports</p>
    <h2>Compliance documents buyers can review before RFQ</h2>
    <p class="note">For overseas B2B buyers, certificate images reduce uncertainty before sample requests, supplier shortlisting and importer approval. Final validity, scope and report numbers should still be confirmed during order review.</p>
    <div class="badge-grid">${company.certificates.map((item) => `<span>${item}</span>`).join("")}</div>
    ${certificateCards()}
    <p><a class="button secondary" href="/assets/cert-fsc.pdf" target="_blank" rel="noopener">View FSC PDF</a></p>
  </section>
  ${ctaBand("Need documents for importer approval?")}`;
  return layout({
    route: "/factory-certificates/",
    title: "Factory & Certificates | LANGMAI Food Paper Packaging",
    description: "Review LANGMAI factory capacity, product photos and certificate documents including BSCI, BRC, ISO, LFGB, DGCCRF, PFAS and FSC for B2B paper packaging buyers.",
    content,
  });
}

function aboutPage() {
  const content = `<section class="page-hero">
    <p class="eyebrow">About LANGMAI</p>
    <h1>About LANGMAI: Paper Baking Product Manufacturer in China</h1>
    <p>LANGMAI manufactures cupcake liners, paper baking cups, air fryer liners, paper straws and related party paper products for domestic and overseas B2B buyers.</p>
  </section>
  <section class="split-section">
    <img src="/assets/founder.jpg" alt="LANGMAI founder photo">
    <div>
      <h2>A practical export story buyers can verify</h2>
      <p>For overseas buyers, a real founder and factory story helps connect product photos, certificate documents, catalog clarity and fast buyer response.</p>
      <p>This page can continue to grow with trade show photos, customer visits, shipment examples and product inspection records as they become available.</p>
    </div>
  </section>`;
  return layout({
    route: "/about/",
    title: "About LANGMAI | Paper Baking Product Manufacturer",
    description: "Learn about Jinhua Langmai Daily-Using Co., Ltd., a China manufacturer of cupcake liners, paper baking cups, paper straws and air fryer liners.",
    content,
  });
}

function contactPage(route = "/contact/") {
  const htmlTemplate = `<form class="b2b-inquiry-form" method="post" action="/api/inquiry">
  <label>Name *<input name="name" required placeholder="Your full name"></label>
  <label>Email *<input type="email" name="email" required placeholder="buyer@example.com"></label>
  <label>Phone *<input type="tel" name="phone" required pattern="^[+()0-9\\s-]{7,24}$" placeholder="+1 555 123 4567"></label>
  <label>Company<input name="company" placeholder="Company name"></label>
  <label>Country / Region<input name="country" placeholder="United States, Germany, UAE..."></label>
  <label>Product Requirement<input name="product" placeholder="Cupcake liners, paper baking cups, air fryer liners..."></label>
  <label>Message<textarea name="message" placeholder="Size, quantity, custom print, target market..." rows="5"></textarea></label>
  <input class="hp-field" name="website" tabindex="-1" autocomplete="off">
  <button type="submit">Submit Inquiry</button>
</form>`;
  const reactTemplate = `import { useState } from "react";

export function B2BInquiryForm() {
  const [status, setStatus] = useState("idle");
  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("submitting");
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return <form onSubmit={onSubmit}>{/* fields match the HTML template */}</form>;
}`;
  const content = `<section class="inquiry-page">
    <div class="inquiry-shell">
      <div class="inquiry-copy">
        <p class="tech-kicker">B2B Inquiry Gateway</p>
        <h1>Request a Wholesale Quote from LANGMAI</h1>
        <p>Send your contact information and product requirements. Wilson's team can reply with pricing, sample route, catalog details and OEM/ODM options.</p>
        <div class="inquiry-proof">
          <span>30,000+ square meters factory</span>
          <span>BSCI / ISO / FSC / FDA / LFGB</span>
          <span>WhatsApp quick reply</span>
        </div>
        <div class="inquiry-contact">
          <strong>${company.contact}</strong>
          <a href="mailto:${company.email}">${company.email}</a>
          <a href="https://wa.me/8613645700210">${company.whatsapp}</a>
        </div>
      </div>
      <form class="inquiry-form" data-inquiry-form novalidate>
        <input class="hp-field" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="form-row">
          <label>Name <span>*</span><input name="name" required placeholder="Your full name" data-error="Please enter your name."><small></small></label>
          <label>Email <span>*</span><input type="email" name="email" required placeholder="buyer@example.com" data-error="Please enter a valid email address."><small></small></label>
        </div>
        <div class="form-row">
          <label>Phone / WhatsApp <span>*</span><input type="tel" name="phone" required inputmode="tel" pattern="^[+()0-9\\s-]{7,24}$" placeholder="+1 555 123 4567" data-error="Please enter an international phone number."><small></small></label>
          <label>Company<input name="company" placeholder="Company name"><small></small></label>
        </div>
        <div class="form-row">
          <label>Country / Region<input name="country" placeholder="United States, Germany, UAE..."><small></small></label>
          <label>Product Requirement<input name="product" placeholder="Cupcake liners, paper baking cups, air fryer liners..."><small></small></label>
        </div>
        <label>Message<textarea name="message" rows="5" placeholder="Tell us size, quantity, custom print, target market and delivery needs."></textarea><small></small></label>
        <div class="anti-spam">
          <label><input type="checkbox" name="buyerCheck" required data-error="Please confirm this is a business inquiry."> I confirm this is a real business inquiry. <span>*</span><small></small></label>
          <p>Optional production upgrade: add Google reCAPTCHA, Turnstile, or a server-side rate limit before launch.</p>
        </div>
        <button class="inquiry-submit" type="submit" data-submit-text="Submit Inquiry">Submit Inquiry</button>
        <p class="inquiry-status" data-inquiry-status>Required fields are marked with *.</p>
      </form>
    </div>
  </section>
  <section class="section integration-block">
    <div class="section-heading">
      <p class="eyebrow">Inquiry support</p>
      <h2>What happens after you submit</h2>
      <p>Our team reviews your product type, size, quantity, target market and custom print details, then replies with suitable options, sample suggestions and quotation information.</p>
    </div>
    <details><summary>Form field checklist</summary><pre><code>${esc(htmlTemplate)}</code></pre></details>
    <details><summary>Technical form component</summary><pre><code>${esc(reactTemplate)}</code></pre></details>
    <div class="backend-note">
      <h2>Fast response details</h2>
      <p>You can also contact Wilson directly by email at ${company.email} or WhatsApp. Please include size, quantity, packaging format, destination country and whether you need custom printing.</p>
    </div>
  </section>`;
  return layout({
    route,
    title: "Request a Quote | LANGMAI",
    description: "Send product requirements to LANGMAI for cupcake liners, paper baking cups, air fryer liners and paper straws. Include size, quantity, market and custom print needs.",
    content,
  });
}

function resourcesIndex() {
  const content = `<section class="page-hero">
    <p class="eyebrow">Resources</p>
    <h1>Buyer Guides for Cupcake Liners and Baking Paper Products</h1>
    <p>Use these guides to compare materials, certificates, specifications, custom printing, applications and supplier questions before sending an RFQ.</p>
  </section>
  <section class="section"><div class="resource-grid">${resourcePages.map((r) => `<article><h2><a href="/resources/${r.slug}/">${esc(r.title)}</a></h2><p>${esc(r.description)}</p>${r.isLongForm ? `<p class="note">In-depth buyer guide</p>` : ""}</article>`).join("")}</div></section>`;
  return layout({
    route: "/resources/",
    title: "Resources | LANGMAI Buyer Guides",
    description: "Buyer guides for custom cupcake liners, food paper packaging certificates, greaseproof paper, PET-coated paper and baking cup selection.",
    content,
  });
}

function newsPage() {
  const latestItems = newsItems.slice(0, 10);
  const content = `<section class="page-hero news-hero">
    <p class="eyebrow">Industry news</p>
    <h1>Baking Paper Packaging News</h1>
    <p>Daily buyer-focused updates on greaseproof paper, baking cups, air fryer paper liners, food-contact paper packaging, PFAS-free materials and EUDR compliance.</p>
    <div class="hero-actions"><a class="button primary" href="/contact/">Ask for Product Support</a><a class="button secondary" href="/resources/">Read Buyer Guides</a></div>
  </section>
  <section class="section news-intro">
    <div class="section-heading">
      <p class="eyebrow">Market updates</p>
      <h2>Latest Food Paper Packaging Updates</h2>
    </div>
    <div class="news-grid">
      ${latestItems.map((item, index) => `<article class="news-card">
        ${item.imageUrl ? `<a class="news-image" href="${esc(item.sourceUrl)}" target="_blank" rel="noopener noreferrer"><img src="${esc(item.imageUrl)}" alt="${esc(item.imageAlt || item.title)}" loading="lazy" referrerpolicy="no-referrer"></a>` : ""}
        <div class="news-meta"><span>${esc(item.date)}</span><span>${esc(item.category)}</span></div>
        <h2>${index + 1}. <a href="${esc(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(item.title)}</a></h2>
        <p>${esc(item.summary)}</p>
        <a class="news-source" href="${esc(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">Source: ${esc(item.sourceName)}</a>
      </article>`).join("")}
    </div>
  </section>
  <section class="cta-band">
    <div>
      <h2>Turn market news into a quote-ready specification</h2>
      <p>Send your product type, destination market, size, quantity and compliance requirements. LANGMAI can help match paper, coating, printing and packaging details to your buying plan.</p>
    </div>
    <a class="button primary" href="/inquiry/">Send Requirements</a>
  </section>`;
  return layout({
    route: "/news/",
    title: "Baking Paper Packaging News | LANGMAI",
    description: "Daily news and buyer notes on baking paper packaging, greaseproof paper, PFAS-free food paper, EUDR, air fryer liners and food-contact compliance.",
    content,
    schema: [newsSchema(latestItems)],
  });
}

function resourcePage(resource) {
  const imageBlock = resource.images?.length ? `<figure class="article-image"><img src="${relAsset(resource.images[0])}" alt="${esc(resource.title)}"><figcaption>${esc(resource.title)}</figcaption></figure>` : "";
  const secondImage = resource.images?.[1] ? `<figure class="article-image"><img src="${relAsset(resource.images[1])}" alt="${esc(resource.title)} factory testing and shipment inspection"><figcaption>Factory testing and shipment inspection help B2B buyers reduce order risk.</figcaption></figure>` : "";
  const content = resource.isLongForm ? `<article class="article longform-article">
    <p class="eyebrow">Buyer guide</p>
    <h1>${esc(resource.title)}</h1>
    ${resource.date ? `<p class="note">Published ${esc(resource.date)}</p>` : ""}
    <p class="lede">${esc(resource.description)}</p>
    <div class="badge-grid"><span>${esc(resource.intent || "Procurement research")}</span><span>Practical supplier selection</span></div>
    ${imageBlock}
    <div class="article-body">${resource.html.replace("</h2>", `</h2>${secondImage}`)}</div>
    <aside class="article-cta">
      <h2>Send your product requirements</h2>
      <p>Share your product type, size, material, quantity, custom print and destination market. LANGMAI can recommend a sample route and quote-ready specification.</p>
      <a class="button primary" href="/inquiry/">Send Your Requirements</a>
      <a class="button secondary" href="/products/">View Products</a>
    </aside>
  </article>` : `<article class="article">
    <p class="eyebrow">Buyer guide</p>
    <h1>${esc(resource.title)}</h1>
    <p class="lede">${esc(resource.description)}</p>
    ${resource.body.map((p) => `<p>${esc(p)}</p>`).join("")}
    <section class="article-links">
      <h2>Next steps</h2>
      <a href="/products/cake-cups/">View custom cupcake liners</a>
      <a href="/customization/">Review OEM customization process</a>
      <a href="/contact/">Request a quote</a>
    </section>
  </article>`;
  return layout({
    route: `/resources/${resource.slug}/`,
    title: resource.isLongForm ? (resource.seoTitle || resource.title) : `${resource.seoTitle || resource.title} | LANGMAI Guide`,
    description: resource.description,
    content,
    schema: [articleSchema(resource), ...(resource.faq?.length ? [faqSchema(resource.faq)] : [])],
  });
}

function landingPage(lp) {
  const product = products.find((p) => p.slug === lp.productSlug);
  const content = `<section class="landing-hero">
    <div>
      <p class="eyebrow">Wholesale supply</p>
      <h1>${esc(lp.title)}</h1>
      <p>${esc(lp.description)}</p>
      <ul class="check-list"><li>Food-grade materials for import buyers.</li><li>Custom sizes, colors, artwork and carton packaging.</li><li>Certificate documents and buyer verification notes are visible before RFQ.</li></ul>
      <div class="hero-actions"><a class="button primary" href="#quote">Request Bulk Price</a><a class="button secondary" href="/products/${product.slug}/">View Product Details</a></div>
    </div>
    <img src="${relAsset(product.image)}" alt="${esc(lp.title)} product details">
  </section>
  <section class="trust-strip"><span>Focused product request</span><span>Quote-ready details</span><span>Sample and carton support</span></section>
  <section class="section two-col" id="quote">
    <div>
      <h2>Why buyers use this page</h2>
      <p>This page focuses on one product category so buyers can compare materials, packaging options, sample requirements and bulk quotation details quickly.</p>
      <div class="badge-grid">${product.features.slice(0, 5).map((item) => `<span>${esc(item)}</span>`).join("")}</div>
    </div>
    ${leadForm(lp.title)}
  </section>`;
  return layout({
    route: `/landing/${lp.slug}/`,
    title: `${lp.title} | LANGMAI Wholesale Supply`,
    description: lp.description,
    content,
    schema: [productSchema(product)],
    bodyClass: "landing-page",
  });
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    alternateName: company.brand,
    url: baseUrl,
    logo: `${baseUrl}/assets/logo.jpg`,
    address: { "@type": "PostalAddress", addressLocality: "Jinhua", addressRegion: "Zhejiang", addressCountry: "CN" },
    foundingDate: company.founded,
    contactPoint: { "@type": "ContactPoint", contactType: "sales", email: company.email, telephone: company.phone, availableLanguage: ["en"] },
    telephone: company.phone,
  };
}

function websiteSchema() {
  return { "@context": "https://schema.org", "@type": "WebSite", name: "LANGMAI", url: baseUrl };
}

function breadcrumbSchema(route, title) {
  const parts = route.split("/").filter(Boolean);
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` }];
  let current = "";
  parts.forEach((part, i) => {
    current += `/${part}`;
    items.push({ "@type": "ListItem", position: i + 2, name: i === parts.length - 1 ? title : titleCase(part), item: `${baseUrl}${current}/` });
  });
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}

function productSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.short,
    image: `${baseUrl}${relAsset(product.image)}`,
    brand: { "@type": "Brand", name: "LANGMAI" },
    manufacturer: { "@type": "Organization", name: company.name },
    category: "Food paper packaging",
    material: product.material,
    additionalProperty: product.features.map((f) => ({ "@type": "PropertyValue", name: "Feature", value: f })),
  };
}

function faqSchema(faq) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
}

function articleSchema(resource) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    image: resource.images?.[0] ? `${baseUrl}${relAsset(resource.images[0])}` : undefined,
    datePublished: resource.date || undefined,
    dateModified: resource.date || undefined,
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name, logo: { "@type": "ImageObject", url: `${baseUrl}/assets/logo.jpg` } },
  };
}

function newsSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Baking Paper Packaging News",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.sourceUrl,
      item: {
        "@type": "NewsArticle",
        headline: item.title,
        description: item.summary,
        image: item.imageUrl || undefined,
        datePublished: item.date,
        publisher: { "@type": "Organization", name: item.sourceName },
      },
    })),
  };
}

function imageSchema(file, caption) {
  return { "@context": "https://schema.org", "@type": "ImageObject", contentUrl: `${baseUrl}${relAsset(file)}`, caption };
}

function titleCase(slug) {
  return slug.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
}

function writePage(route, html) {
  pages.push(route);
  const dir = route === "/" ? distDir : path.join(distDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

function readLocale(locale) {
  const file = path.join(siteDir, "i18n", `${locale}.json`);
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function translateHtml(html, localeData) {
  let output = html;
  const entries = Object.entries(localeData.phrases || {}).sort((a, b) => b[0].length - a[0].length);
  for (const [source, target] of entries) {
    if (!source || source === target) continue;
    output = output.replace(new RegExp(escapeRegExp(source), "g"), target);
  }
  return output;
}

function prefixInternalLinks(html, locale) {
  const reserved = new Set(["assets", "en", "es", "ru", "ar", "fr", "pt"]);
  return html.replace(/\s(href|action)="\/([^"#?]*)([#?][^"]*)?"/g, (match, attr, pathPart, suffix = "") => {
    const first = pathPart.split("/")[0];
    if (reserved.has(first) || pathPart === "styles.css" || pathPart === "site.js" || pathPart === "sitemap.xml" || pathPart === "robots.txt") return match;
    return ` ${attr}="/${locale}/${pathPart}${suffix}"`;
  });
}

function textOnly(value) {
  return value
    .replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replace(/\s+/g, " ")
    .trim();
}

function setLocalizedSeo(html) {
  const h1 = textOnly((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || "");
  if (!h1) return html;
  const title = `${h1} | LANGMAI`;
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(title)}">`);
}

function localeSwitcherHtml(route, currentLocale) {
  const localeNames = {
    en: "English",
    es: "Español",
    ru: "Русский",
    ar: "العربية",
    fr: "Français",
    pt: "Português",
  };
  return `<div class="language-switcher">
    <button class="language-current" type="button" aria-label="Select language">${currentLocale.toUpperCase()}</button>
    <div class="language-menu">
      ${localeCodes.map((code) => `<a data-locale-link="${code}" href="${localizedPath(code, route)}">${localeNames[code]}</a>`).join("")}
    </div>
  </div>`;
}

function localizeHtml(html, route, locale, localeData) {
  const canonical = `${baseUrl}${localizedPath(locale, route)}`;
  let output = html
    .replace('<html lang="en">', `<html lang="${locale}" dir="${localeData.dir || "ltr"}">`)
    .replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${canonical}">`)
    .replace(/<div class="language-switcher">[\s\S]*?<\/div>\s*<\/div>/, `${localeSwitcherHtml(route, locale)}\n  </div>`);
  output = prefixInternalLinks(output, locale);
  output = translateHtml(output, localeData);
  output = setLocalizedSeo(output);
  return output;
}

function localizePages() {
  for (const route of [...pages]) {
    const sourceFile = route === "/" ? path.join(distDir, "index.html") : path.join(distDir, route, "index.html");
    const html = fs.readFileSync(sourceFile, "utf8");
    for (const locale of localeCodes) {
      const localeData = readLocale(locale);
      const localizedRoute = localizedPath(locale, route);
      const dir = localizedRoute === `/${locale}/` ? path.join(distDir, locale) : path.join(distDir, localizedRoute);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), localizeHtml(html, route, locale, localeData));
    }
  }
}

function writeStatic() {
  fs.mkdirSync(distDir, { recursive: true });
  const assetSource = path.join(siteDir, "assets");
  const assetTarget = path.join(distDir, "assets");
  fs.mkdirSync(assetTarget, { recursive: true });
  const hiddenCatalogPages = new Set([
    "brochure-cover.jpg",
    "cake-cups-spec.jpg",
    "air-fryer-liners.jpg",
    "roll-mouth-cake-cups.jpg",
    "muffin-baking-cups.jpg",
    "paper-straws.jpg",
    "party-accessories.jpg",
    "factory-building.jpg",
  ]);
  for (const file of fs.readdirSync(assetSource)) {
    if (hiddenCatalogPages.has(file)) continue;
    fs.copyFileSync(path.join(assetSource, file), path.join(assetTarget, file));
  }
  fs.writeFileSync(path.join(distDir, "styles.css"), css + productTemplateCss + warmThemeCss);
  fs.writeFileSync(path.join(distDir, "site.js"), js);
  fs.writeFileSync(path.join(distDir, "social-links.example.json"), JSON.stringify({ socialLinks }, null, 2));
  fs.writeFileSync(path.join(distDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`);
  localizePages();
  const sitemapRoutes = pages.flatMap((route) => localeCodes.map((locale) => localizedPath(locale, route)));
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes.map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`).join("\n")}\n</urlset>\n`);
}

const css = `
:root{--ink:#221b18;--muted:#6d625b;--line:#e7dccb;--paper:#fff9ef;--soft:#f3ebdd;--green:#1f3a31;--deep:#0e1110;--copper:#a45a32;--gold:#d8b45a;--gold-soft:#f5df9a;--charcoal:#111513;--pink:#f7dce7;--blue:#e8f0ed}
*{box-sizing:border-box}body{margin:0;background:linear-gradient(180deg,#fff9ef 0%,#f7f0e4 52%,#fff9ef 100%);color:var(--ink);font-family:Inter,Arial,sans-serif;line-height:1.6}img{max-width:100%;display:block}a{color:inherit}.skip-link{position:absolute;left:-999px}.skip-link:focus{left:1rem;top:1rem;background:#fff;padding:.75rem;z-index:10}.site-header{position:sticky;top:0;z-index:5;background:rgba(255,249,239,.86);border-bottom:1px solid rgba(216,180,90,.28);backdrop-filter:blur(18px) saturate(1.25);box-shadow:0 12px 34px rgba(17,21,19,.08)}.header-inner{max-width:1180px;margin:auto;display:flex;align-items:center;gap:1.4rem;padding:.8rem 1rem}.brand img{width:136px;height:46px;object-fit:contain}.main-nav{display:flex;gap:.25rem;flex:1;justify-content:center;align-items:center;flex-wrap:wrap}.nav-item{position:relative}.nav-link{display:inline-flex;align-items:center;min-height:42px;padding:.55rem .75rem;border-radius:6px;text-decoration:none;color:var(--green);font-weight:800}.nav-link:hover,.nav-item:focus-within .nav-link{background:rgba(17,21,19,.92);color:var(--gold);box-shadow:0 10px 24px rgba(17,21,19,.16),inset 0 0 0 1px rgba(216,180,90,.34)}.mega-menu{position:fixed;left:50%;top:76px;width:min(980px,calc(100vw - 2rem));transform:translateX(-50%) translateY(10px);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s ease,transform .18s ease,visibility .18s ease;z-index:20}.nav-item:hover .mega-menu,.nav-item:focus-within .mega-menu{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0)}.mega-inner{display:grid;grid-template-columns:310px 1fr;gap:1rem;padding:1rem;background:linear-gradient(135deg,rgba(17,21,19,.9),rgba(31,58,49,.82));border:1px solid rgba(216,180,90,.34);border-radius:8px;box-shadow:0 28px 78px rgba(17,21,19,.28),inset 0 1px 0 rgba(255,255,255,.14);backdrop-filter:blur(24px) saturate(1.25)}.mega-intro{padding:1rem;border-radius:8px;background:linear-gradient(145deg,rgba(216,180,90,.2),rgba(255,249,239,.08));color:#fff}.mega-intro h2{margin:.25rem 0 .75rem;font-size:1.55rem;line-height:1.15}.mega-intro p{color:rgba(255,255,255,.78)}.mega-links{display:grid;grid-template-columns:repeat(2,1fr);gap:.65rem}.mega-links a{display:grid;gap:.25rem;min-height:86px;padding:.85rem;border-radius:8px;text-decoration:none;color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(216,180,90,.22);transition:transform .16s ease,background .16s ease,box-shadow .16s ease}.mega-links a:hover{transform:translateY(-2px);background:rgba(216,180,90,.16);box-shadow:0 12px 28px rgba(0,0,0,.22)}.mega-links span{color:rgba(255,255,255,.72);font-size:.92rem}.site-footer a{text-decoration:none;color:var(--deep);font-weight:650}.header-cta,.button{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:.75rem 1rem;border-radius:6px;text-decoration:none;font-weight:800;border:1px solid transparent}.primary{background:linear-gradient(135deg,var(--charcoal),var(--green));color:#fff;border-color:rgba(216,180,90,.45);box-shadow:0 12px 28px rgba(17,21,19,.18)}.primary:hover{background:var(--gold);color:#0e1110}.secondary{background:rgba(255,249,239,.9);color:var(--green);border-color:rgba(31,58,49,.62)}.secondary:hover{background:#111513;color:var(--gold);border-color:var(--gold)}.hero{min-height:calc(100vh - 76px);position:relative;display:grid;align-items:center;overflow:hidden;background:#120f0d}.hero-slider{position:absolute;inset:0;overflow:hidden}.hero-slide{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(70%);opacity:0;transform:scale(1.05);animation:heroSlide 18s infinite}.hero-slide:nth-child(1){animation-delay:0s}.hero-slide:nth-child(2){animation-delay:6s}.hero-slide:nth-child(3){animation-delay:12s}.hero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.54),rgba(0,0,0,.3));pointer-events:none}.hero-copy{position:relative;z-index:1;max-width:760px;padding:5rem 1rem;margin-left:max(1rem,calc((100vw - 1180px)/2));color:#fff}.hero .eyebrow{color:var(--gold-soft);text-shadow:0 2px 16px rgba(0,0,0,.28)}.hero .hero-copy p{color:rgba(255,255,255,.9)}@keyframes heroSlide{0%{opacity:0;transform:scale(1.05) translateX(1.5%)}6%{opacity:1}30%{opacity:1}38%{opacity:0;transform:scale(1.12) translateX(-1.5%)}100%{opacity:0}}@media (prefers-reduced-motion:reduce){.hero-slide{animation:none}.hero-slide:first-child{opacity:1}}.eyebrow{text-transform:uppercase;letter-spacing:.08em;color:var(--copper);font-size:.78rem;font-weight:900}.hero h1,.page-hero h1,.product-hero h1,.landing-hero h1{font-size:clamp(2rem,5vw,4.9rem);line-height:1.04;margin:.25rem 0 1rem;letter-spacing:0}.hero p,.page-hero p,.landing-hero p{font-size:1.12rem;color:var(--muted);max-width:760px}.hero-actions,.cta-actions{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1.5rem}.trust-strip{display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center;padding:1rem;background:linear-gradient(135deg,#0e1110,#1f3a31);color:#fff;border-top:1px solid rgba(216,180,90,.25);border-bottom:1px solid rgba(216,180,90,.25)}.trust-strip span{border:1px solid rgba(216,180,90,.38);border-radius:999px;padding:.35rem .7rem;font-weight:700;background:rgba(255,255,255,.06);box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}.market-map{padding-top:3rem}.map-panel{background:linear-gradient(145deg,#fffdf8,#fff4dc);border:1px solid rgba(216,180,90,.28);border-radius:8px;padding:1rem;box-shadow:0 22px 55px rgba(17,21,19,.14), inset 0 1px 0 rgba(255,255,255,.9);overflow:hidden}.map-panel svg,.map-panel img{width:100%;height:auto;display:block}.map-image-panel img{border-radius:6px;object-fit:contain;background:#fff}.market-lines path{stroke:#c9342c;stroke-width:1.45;fill:none;opacity:.76;marker-end:url(#arrow)}.map-tags rect{fill:#cf2f2f;rx:7;ry:7;filter:drop-shadow(0 3px 3px rgba(95,18,18,.24))}.map-tags text{font:800 12px Inter,Arial,sans-serif;fill:#fff;text-anchor:middle;dominant-baseline:middle}.world-land{opacity:.95}.section,.page-hero,.product-hero,.landing-hero,.split-section,.cta-band,.article{max-width:1180px;margin:auto;padding:4.5rem 1rem}.section-heading{max-width:760px;margin-bottom:2rem}.section h2,.split-section h2,.cta-band h2,.article h2{font-size:clamp(1.45rem,3vw,2.5rem);line-height:1.15;margin:.2rem 0 1rem}.product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.product-card,.resource-grid article,.process-grid article{background:linear-gradient(180deg,#fffdf8,#fff7ea);border:1px solid rgba(216,180,90,.22);border-radius:8px;overflow:hidden;box-shadow:0 16px 34px rgba(17,21,19,.08)}.product-card img{height:240px;width:100%;object-fit:cover}.product-card div,.resource-grid article,.process-grid article{padding:1rem}.product-card h3{font-size:1.1rem;line-height:1.25}.text-link{font-weight:850;color:var(--copper)}.split-section,.product-hero,.landing-hero,.two-col,.footer-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center}.split-section img,.product-hero img,.landing-hero img{border-radius:8px;border:1px solid var(--line);background:#fff;max-height:680px;width:100%;object-fit:cover}.check-list{padding-left:1.1rem}.check-list li{margin:.45rem 0}.process-list li{margin:.5rem 0}.table-wrap{overflow:auto;border:1px solid var(--line);border-radius:8px;background:#fff}table{width:100%;border-collapse:collapse;min-width:620px}th,td{text-align:left;padding:.8rem;border-bottom:1px solid var(--line)}th{background:#111513;color:var(--gold)}.image-band{max-width:1180px;margin:0 auto;padding:1rem;display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.image-band img{height:330px;width:100%;object-fit:cover;border-radius:8px;border:1px solid var(--line);background:#fff}.lead-form{background:linear-gradient(180deg,#fffdf8,#fff7ea);border:1px solid rgba(216,180,90,.28);border-radius:8px;padding:1rem;display:grid;gap:.8rem;box-shadow:0 18px 40px rgba(17,21,19,.09)}.lead-form label{display:grid;gap:.25rem;font-weight:800;color:var(--deep)}input,select,textarea{width:100%;min-height:44px;border:1px solid #cfc4bc;border-radius:6px;padding:.65rem;font:inherit;background:#fff}textarea{resize:vertical}.form-note,.note{color:var(--muted);font-size:.93rem}.faq details{background:#fff;border:1px solid var(--line);border-radius:8px;padding:1rem;margin:.75rem 0}.faq summary{cursor:pointer;font-weight:850}.link-grid,.badge-grid{display:flex;flex-wrap:wrap;gap:.7rem}.link-grid a,.badge-grid span{background:#fffaf0;border:1px solid rgba(216,180,90,.32);border-radius:999px;padding:.55rem .85rem;text-decoration:none;font-weight:800;color:var(--green)}.cta-band{background:linear-gradient(135deg,#0e1110,#1f3a31 62%,#a45a32);border-top:1px solid rgba(216,180,90,.28);border-bottom:1px solid rgba(216,180,90,.28);max-width:none;display:flex;justify-content:center;gap:3rem;color:#fff}.cta-band>div{max-width:580px}.cta-band p{color:rgba(255,255,255,.82)}.certificate-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:1.5rem 0}.certificate-card{background:linear-gradient(180deg,#fffdf8,#fff7ea);border:1px solid rgba(216,180,90,.28);border-radius:8px;overflow:hidden;box-shadow:0 18px 38px rgba(17,21,19,.1)}.certificate-card a{display:block;background:#fff}.certificate-card img{width:100%;height:260px;object-fit:cover;object-position:top;border-bottom:1px solid rgba(216,180,90,.22)}.certificate-card div{padding:1rem}.certificate-card h3{margin:.1rem 0 .35rem;color:var(--green)}.certificate-card p{margin:0;color:var(--muted);font-size:.95rem}.trust-evidence{background:linear-gradient(135deg,rgba(17,21,19,.04),rgba(216,180,90,.08));border-top:1px solid rgba(216,180,90,.18);border-bottom:1px solid rgba(216,180,90,.18)}.resource-grid,.process-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.process-grid span{display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;background:var(--gold);color:#0e1110;border-radius:50%;font-weight:900}.article{max-width:860px}.article .lede{font-size:1.2rem;color:var(--muted)}.article p{font-size:1.05rem}.article-links{margin-top:2rem;display:grid;gap:.75rem}.sample-box{margin-top:1.5rem;padding:1rem;background:#fff4dc;border:1px solid rgba(216,180,90,.25);border-radius:8px}.site-footer{background:linear-gradient(135deg,#0e1110,#1f3a31);color:#fff;margin-top:3rem;border-top:1px solid rgba(216,180,90,.35)}.footer-grid{max-width:1180px;margin:auto;padding:2.5rem 1rem;align-items:start}.site-footer a{display:block;color:#fff;margin:.35rem 0}.site-footer p{color:rgba(255,255,255,.72)}.whatsapp-float{position:fixed;right:1rem;bottom:1rem;background:linear-gradient(135deg,#1f8f51,#1f3a31);color:#fff;padding:.8rem 1rem;border-radius:999px;text-decoration:none;font-weight:900;box-shadow:0 14px 34px rgba(0,0,0,.26),0 0 0 1px rgba(216,180,90,.28)}.landing-page .site-header{position:relative}
@media (max-width:900px){.map-panel{padding:.35rem}.map-tags text{font-size:15px}.header-inner{align-items:flex-start;flex-direction:column}.main-nav{justify-content:flex-start}.mega-menu{position:static;width:100%;transform:none;opacity:1;visibility:visible;pointer-events:auto;display:none}.nav-item:focus-within .mega-menu,.nav-item:hover .mega-menu{display:block;transform:none}.mega-inner{grid-template-columns:1fr}.mega-links{grid-template-columns:1fr}.hero{min-height:720px}.product-grid,.resource-grid,.process-grid,.image-band,.certificate-grid{grid-template-columns:1fr}.split-section,.product-hero,.landing-hero,.two-col,.footer-grid{grid-template-columns:1fr}.cta-band{display:block}.product-card img,.image-band img,.certificate-card img{height:auto}.header-cta{display:none}}
`;

const productTemplateCss = `
.product-template{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:2rem;align-items:start}
.product-main{display:grid;gap:2rem;min-width:0}
.product-block{padding:0}
.product-gallery{grid-template-columns:repeat(2,1fr);padding:0}
.ip-card{position:sticky;top:104px;display:grid;gap:1rem;padding:1rem;border:1px solid rgba(255,255,255,.72);border-radius:8px;background:linear-gradient(145deg,rgba(255,253,248,.88),rgba(238,248,253,.78));backdrop-filter:blur(20px) saturate(1.25);box-shadow:0 24px 65px rgba(31,47,41,.18),inset 0 1px 0 rgba(255,255,255,.88)}
.ip-card img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:8px;border:1px solid var(--line);background:#fff}
.ip-card h2{font-size:1.35rem;line-height:1.15;margin:.2rem 0 .6rem}
.ip-card p{color:var(--muted);margin:.35rem 0}
.ip-card ul{padding-left:1.1rem;margin:.75rem 0;color:var(--deep);font-weight:700}
.ip-card .button{width:100%;margin-top:.55rem}
.ip-note{display:block;margin-top:.75rem;color:var(--muted);font-size:.82rem;font-weight:800}
.home-video-section{display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,420px);gap:2rem;align-items:center}
.video-copy h2{font-size:clamp(1.8rem,3vw,3rem);line-height:1.08;margin:.25rem 0 1rem}
.video-copy p{color:var(--muted);font-size:1.08rem;max-width:620px}
.video-frame{position:relative;max-width:420px;margin:auto;padding:12px;border-radius:14px;background:linear-gradient(145deg,#050608,#1e1705 62%,#070707);box-shadow:0 26px 80px rgba(0,0,0,.28),0 0 0 1px rgba(255,207,51,.26)}
.video-frame:before{content:"";position:absolute;inset:0;border-radius:14px;background:radial-gradient(circle at 18% 10%,rgba(255,207,51,.26),transparent 34%);pointer-events:none}
.home-video{position:relative;z-index:1;width:100%;aspect-ratio:9/16;max-height:760px;object-fit:cover;border-radius:10px;background:#000;box-shadow:inset 0 0 0 1px rgba(255,255,255,.16)}
.footer-social{display:flex;gap:.55rem;flex-wrap:wrap;margin-top:1rem}
.footer-social a,.social-float a{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:linear-gradient(145deg,#050608,#201706);border:1px solid rgba(255,207,51,.38);color:#ffcf33;box-shadow:0 10px 28px rgba(0,0,0,.22),inset 0 1px 0 rgba(255,255,255,.1);transition:transform .16s ease,box-shadow .16s ease,border-color .16s ease}
.footer-social a:hover,.social-float a:hover{transform:translateY(-2px) scale(1.06);border-color:#ffcf33;box-shadow:0 16px 36px rgba(255,207,51,.22),0 12px 30px rgba(0,0,0,.26)}
.footer-social svg,.social-float svg{width:20px;height:20px;fill:currentColor}
.footer-social span,.social-float span{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.social-float{position:fixed;right:1rem;bottom:5.2rem;z-index:25;display:grid;gap:.5rem}
.language-switcher{position:relative;margin-left:.25rem}
.language-current{min-height:40px;min-width:52px;border:1px solid rgba(40,71,59,.16);border-radius:999px;background:rgba(255,255,255,.72);color:var(--deep);font-weight:950;cursor:pointer;box-shadow:inset 0 1px 0 rgba(255,255,255,.8)}
.language-menu{position:absolute;right:0;top:48px;display:grid;min-width:160px;padding:.45rem;border:1px solid rgba(255,255,255,.72);border-radius:8px;background:rgba(255,253,248,.9);box-shadow:0 18px 50px rgba(31,47,41,.18);backdrop-filter:blur(18px);opacity:0;visibility:hidden;transform:translateY(8px);transition:.16s ease;z-index:30}
.language-switcher:hover .language-menu,.language-switcher:focus-within .language-menu{opacity:1;visibility:visible;transform:translateY(0)}
.language-menu a{padding:.55rem .7rem;border-radius:6px;text-decoration:none;color:var(--deep);font-weight:850}
.language-menu a:hover{background:rgba(40,71,59,.08)}
[dir=rtl] body{direction:rtl}
[dir=rtl] .header-inner,[dir=rtl] .main-nav,[dir=rtl] .hero-actions,[dir=rtl] .cta-actions{direction:rtl}
[dir=rtl] .hero-copy{margin-left:0;margin-right:max(1rem,calc((100vw - 1180px)/2))}
[dir=rtl] .language-menu{right:auto;left:0;text-align:right}
[dir=rtl] .whatsapp-float{right:auto;left:1rem}
[dir=rtl] .social-float{right:auto;left:1rem}
.inquiry-page{min-height:calc(100vh - 76px);padding:4.5rem 1rem;background:radial-gradient(circle at 12% 12%,rgba(255,203,64,.2),transparent 28%),radial-gradient(circle at 88% 18%,rgba(255,203,64,.12),transparent 24%),linear-gradient(135deg,#050608,#15120a 58%,#050608);color:#fff;overflow:hidden}
.inquiry-shell{max-width:1180px;margin:auto;display:grid;grid-template-columns:.9fr 1.1fr;gap:2rem;align-items:center}
.inquiry-copy h1{font-size:clamp(2.2rem,5vw,4.7rem);line-height:1.02;margin:.35rem 0 1rem;letter-spacing:0;color:#fff}
.inquiry-copy p{color:#d8d3c4;font-size:1.08rem;max-width:620px}
.tech-kicker{display:inline-flex;color:#ffcf33!important;text-transform:uppercase;letter-spacing:.12em;font-weight:900;font-size:.78rem}
.inquiry-proof{display:flex;flex-wrap:wrap;gap:.55rem;margin:1.5rem 0}
.inquiry-proof span{border:1px solid rgba(255,207,51,.32);background:rgba(255,207,51,.08);color:#ffe58a;border-radius:999px;padding:.45rem .72rem;font-weight:800}
.inquiry-contact{display:grid;gap:.4rem;margin-top:2rem;color:#fff}
.inquiry-contact a{color:#ffcf33;text-decoration:none;font-weight:800}
.inquiry-form{position:relative;display:grid;gap:1rem;padding:1.25rem;border:1px solid rgba(255,207,51,.28);border-radius:8px;background:linear-gradient(145deg,rgba(20,20,20,.92),rgba(39,31,8,.72));box-shadow:0 28px 80px rgba(0,0,0,.38),inset 0 1px 0 rgba(255,255,255,.12);backdrop-filter:blur(18px)}
.inquiry-form:before{content:"";position:absolute;inset:0;border-radius:8px;padding:1px;background:linear-gradient(135deg,rgba(255,207,51,.8),transparent 30%,rgba(255,207,51,.24));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.inquiry-form label{display:grid;gap:.35rem;color:#fff;font-weight:850}
.inquiry-form label span{color:#ffcf33}
.inquiry-form input,.inquiry-form textarea{background:#0b0d0f;border:1px solid rgba(255,207,51,.24);color:#fff;border-radius:6px}
.inquiry-form input::placeholder,.inquiry-form textarea::placeholder{color:#8d8878}
.inquiry-form input:focus,.inquiry-form textarea:focus{outline:2px solid rgba(255,207,51,.38);border-color:#ffcf33}
.inquiry-form small{min-height:1.1rem;color:#ff7b7b;font-weight:750}
.inquiry-form .invalid input,.inquiry-form .invalid textarea{border-color:#ff7b7b}
.anti-spam{border-top:1px solid rgba(255,207,51,.18);padding-top:.5rem}
.anti-spam label{display:block;font-weight:750;color:#e8e1c9}
.anti-spam input{width:auto;min-height:auto;margin-right:.45rem}
.anti-spam p{margin:.45rem 0 0;color:#9e9888;font-size:.9rem}
.hp-field{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:0!important}
.inquiry-submit{min-height:52px;border:0;border-radius:6px;background:linear-gradient(135deg,#ffcf33,#b98213);color:#090909;font-weight:950;font-size:1rem;cursor:pointer;box-shadow:0 14px 36px rgba(255,207,51,.22)}
.inquiry-submit[disabled]{opacity:.7;cursor:wait}
.inquiry-status{margin:0;color:#d8d3c4;font-weight:800}
.inquiry-status.success{color:#93ffb6}
.inquiry-status.error{color:#ff8f8f}
.integration-block details{background:#fff;border:1px solid var(--line);border-radius:8px;margin:1rem 0;overflow:hidden}
.integration-block summary{cursor:pointer;padding:1rem;font-weight:900;color:var(--deep)}
.integration-block pre{margin:0;padding:1rem;overflow:auto;background:#101214;color:#f4e9bd;font-size:.88rem}
.backend-note{margin-top:1rem;padding:1rem;border:1px solid var(--line);border-radius:8px;background:#fff}
.longform-article{max-width:940px}
.article-body h2{margin-top:2.6rem}
.article-body h3{margin-top:1.7rem;font-size:1.25rem;color:var(--deep)}
.article-body ul,.article-body ol{padding-left:1.25rem}
.article-body li{margin:.45rem 0}
.article-image{margin:2rem 0;border:1px solid var(--line);border-radius:8px;overflow:hidden;background:#fff}
.article-image img{width:100%;max-height:520px;object-fit:cover}
.article-image figcaption{padding:.75rem 1rem;color:var(--muted);font-size:.92rem}
.article-cta{margin-top:2.5rem;padding:1.2rem;border-radius:8px;background:linear-gradient(135deg,var(--deep),#101c18);color:#fff}
.article-cta h2{color:#fff}
.article-cta p{color:#d9e2dc}
.article-cta .button{margin:.35rem .4rem .2rem 0}
@media (max-width:900px){.product-template,.product-gallery,.home-video-section{grid-template-columns:1fr}.ip-card{position:static;order:-1}.video-frame{width:min(100%,360px)}}
@media (max-width:900px){.inquiry-shell,.form-row{grid-template-columns:1fr}.inquiry-page{padding:3rem 1rem}.inquiry-form{padding:1rem}.language-switcher{margin-left:0}.language-menu{left:0;right:auto}.social-float{display:none}.footer-social a,.social-float a{width:38px;height:38px}}
`;

const warmThemeCss = `
:root{--ink:#2f211b;--muted:#7b675b;--line:#ead7c1;--paper:#fff7eb;--soft:#f7ead8;--green:#456b55;--deep:#3a2a20;--copper:#b36f4b;--gold:#d9a85c;--gold-soft:#f7dfb5;--charcoal:#4a3429;--pink:#f8dfe6;--blue:#eef6ef}
body{background:linear-gradient(180deg,#fff8ee 0%,#f7ead9 52%,#fffaf2 100%);color:var(--ink)}
html,body{max-width:100%;overflow-x:hidden}main{min-width:0}.eudr-hero{min-width:0}.eudr-hero h1{max-width:1020px;font-size:clamp(2rem,5vw,4.15rem);overflow-wrap:anywhere}
.site-header{background:rgba(255,248,238,.9);border-bottom:1px solid rgba(210,166,105,.26);box-shadow:0 12px 30px rgba(115,81,51,.08)}
.brand{display:inline-flex;align-items:center;justify-content:center;padding:.42rem .58rem;border-radius:8px;background:rgba(255,255,255,.82);border:1px solid rgba(217,168,92,.22);box-shadow:0 10px 26px rgba(111,75,48,.1),inset 0 1px 0 rgba(255,255,255,.78)}
.brand img{width:168px;height:62px;object-fit:contain}
.nav-item:after{content:"";position:absolute;left:50%;top:100%;width:min(980px,calc(100vw - 2rem));height:34px;transform:translateX(-50%);display:none;z-index:19}
.nav-item:hover:after,.nav-item:focus-within:after{display:block}
.mega-menu{top:98px;padding-top:.6rem}
.nav-item:hover .mega-menu,.nav-item:focus-within .mega-menu{transform:translateX(-50%) translateY(0)}
.nav-link{color:#385945}.nav-link:hover,.nav-item:focus-within .nav-link{background:rgba(255,240,221,.94);color:#8a4f31;box-shadow:0 10px 24px rgba(145,92,52,.12),inset 0 0 0 1px rgba(217,168,92,.34)}
.mega-inner{background:linear-gradient(135deg,rgba(255,250,244,.92),rgba(245,226,204,.86));border-color:rgba(217,168,92,.36);box-shadow:0 26px 70px rgba(119,81,52,.18),inset 0 1px 0 rgba(255,255,255,.72)}
.mega-intro{background:linear-gradient(145deg,rgba(255,239,214,.96),rgba(255,251,246,.72));color:var(--ink)}
.mega-intro p{color:var(--muted)}.mega-links a{color:var(--ink);background:rgba(255,255,255,.62);border-color:rgba(217,168,92,.24)}.mega-links a:hover{background:#fff4e4;box-shadow:0 12px 28px rgba(145,92,52,.14)}.mega-links span{color:var(--muted)}
.primary{background:linear-gradient(135deg,#8b5a3c,#456b55);border-color:rgba(217,168,92,.42);box-shadow:0 12px 28px rgba(111,75,48,.18)}.primary:hover{background:#d9a85c;color:#2f211b}.secondary{background:rgba(255,250,244,.94);color:#456b55;border-color:rgba(69,107,85,.42)}.secondary:hover{background:#fff0db;color:#8a4f31;border-color:#d9a85c}
.hero{background:#38271f}.hero-slide{filter:brightness(78%) saturate(1.02)}.hero:after{background:linear-gradient(90deg,rgba(62,39,28,.74),rgba(92,59,42,.44),rgba(255,245,232,.12))}.hero .eyebrow{color:#ffe1aa}.hero .hero-copy p{color:rgba(255,250,244,.92)}
.hero-proof{display:flex;gap:.55rem;flex-wrap:wrap;margin:1.2rem 0 .2rem}.hero-proof span{padding:.42rem .72rem;border-radius:999px;background:rgba(255,248,238,.18);border:1px solid rgba(255,225,170,.5);color:#fff4df;font-weight:850;box-shadow:inset 0 1px 0 rgba(255,255,255,.16)}
.trust-strip{background:linear-gradient(135deg,#77503b,#6f8b65);border-color:rgba(255,225,170,.35)}.trust-strip span{background:rgba(255,250,244,.16);border-color:rgba(255,231,187,.45)}
.advantage-section,.solution-section{background:linear-gradient(135deg,rgba(255,244,228,.78),rgba(241,248,236,.68));border-top:1px solid rgba(217,168,92,.18);border-bottom:1px solid rgba(217,168,92,.18);max-width:none}.advantage-section>.section-heading,.solution-section>.section-heading,.advantage-grid,.solution-grid{max-width:1180px;margin-left:auto;margin-right:auto}.advantage-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}.solution-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem}.advantage-grid article,.solution-grid article{background:rgba(255,255,255,.72);border:1px solid rgba(217,168,92,.24);border-radius:8px;padding:1rem;box-shadow:0 16px 34px rgba(111,75,48,.08)}.advantage-grid h3,.solution-grid h3{margin:.1rem 0 .55rem;color:#385945;line-height:1.2}.advantage-grid p,.solution-grid p{margin:0;color:var(--muted)}
.product-card,.resource-grid article,.process-grid article,.lead-form,.certificate-card{background:linear-gradient(180deg,#fffdf8,#fff4e8);border-color:rgba(217,168,92,.24);box-shadow:0 16px 34px rgba(111,75,48,.08)}.trust-evidence{background:linear-gradient(135deg,rgba(255,244,228,.7),rgba(241,248,236,.58))}.map-panel{background:linear-gradient(145deg,#fffdf8,#f7ead8);box-shadow:0 22px 55px rgba(111,75,48,.12),inset 0 1px 0 rgba(255,255,255,.9)}
th{background:#6f4b38;color:#fff4df}.link-grid a,.badge-grid span{background:#fff4e4;border-color:rgba(217,168,92,.3);color:#456b55}.process-grid span{background:#e8bd75;color:#2f211b}.sample-box{background:#fff1dc}
.cta-band{background:linear-gradient(135deg,#77503b,#6f8b65 72%,#d9a85c);border-color:rgba(255,225,170,.35)}.site-footer{background:linear-gradient(135deg,#5e4031,#496c55);border-top-color:rgba(255,225,170,.35)}.site-footer p{color:rgba(255,250,244,.78)}
.whatsapp-float{background:linear-gradient(135deg,#4f9c68,#456b55);box-shadow:0 14px 34px rgba(69,107,85,.24),0 0 0 1px rgba(255,225,170,.35)}
.ip-card{background:linear-gradient(145deg,rgba(255,253,248,.92),rgba(244,236,220,.82));box-shadow:0 24px 65px rgba(111,75,48,.14),inset 0 1px 0 rgba(255,255,255,.88)}
.video-frame{background:linear-gradient(145deg,#7b523a,#f4dfbf 62%,#6f8b65);box-shadow:0 26px 70px rgba(111,75,48,.2),0 0 0 1px rgba(217,168,92,.28)}.video-frame:before{background:radial-gradient(circle at 18% 10%,rgba(255,244,220,.4),transparent 34%)}
.footer-social a,.social-float a{background:linear-gradient(145deg,#fff0db,#d9a85c);border-color:rgba(139,90,60,.28);color:#5e4031;box-shadow:0 10px 28px rgba(111,75,48,.16),inset 0 1px 0 rgba(255,255,255,.42)}.footer-social a:hover,.social-float a:hover{border-color:#b36f4b;box-shadow:0 16px 36px rgba(179,111,75,.18),0 12px 30px rgba(111,75,48,.16)}
.inquiry-page{background:radial-gradient(circle at 12% 12%,rgba(255,225,170,.34),transparent 28%),radial-gradient(circle at 88% 18%,rgba(111,139,101,.18),transparent 24%),linear-gradient(135deg,#fff7eb,#f4dfc2 58%,#fffaf2);color:var(--ink)}.inquiry-copy h1{color:var(--ink)}.inquiry-copy p{color:var(--muted)}.tech-kicker{color:#b36f4b!important}.inquiry-proof span{border-color:rgba(217,168,92,.32);background:rgba(255,255,255,.54);color:#5e4031}.inquiry-contact{color:var(--ink)}.inquiry-contact a{color:#8a4f31}.inquiry-form{border-color:rgba(217,168,92,.32);background:linear-gradient(145deg,rgba(255,253,248,.92),rgba(255,244,228,.82));box-shadow:0 28px 70px rgba(111,75,48,.16),inset 0 1px 0 rgba(255,255,255,.72)}.inquiry-form label{color:var(--ink)}.inquiry-form label span{color:#b36f4b}.inquiry-form input,.inquiry-form textarea{background:#fffdf8;border-color:rgba(179,111,75,.24);color:var(--ink)}.inquiry-form input::placeholder,.inquiry-form textarea::placeholder{color:#a58d7d}.inquiry-form input:focus,.inquiry-form textarea:focus{outline:2px solid rgba(217,168,92,.42);border-color:#d9a85c}.anti-spam{border-top-color:rgba(217,168,92,.2)}.anti-spam label{color:var(--ink)}.anti-spam p,.inquiry-status{color:var(--muted)}.inquiry-submit{background:linear-gradient(135deg,#d9a85c,#8b5a3c);color:#fffaf2;box-shadow:0 14px 32px rgba(179,111,75,.18)}.article-cta{background:linear-gradient(135deg,#77503b,#6f8b65)}
.news-hero{background:radial-gradient(circle at 15% 18%,rgba(217,168,92,.2),transparent 28%),linear-gradient(135deg,rgba(255,244,228,.9),rgba(241,248,236,.68));border-bottom:1px solid rgba(217,168,92,.2)}
.news-intro{background:linear-gradient(180deg,rgba(255,250,242,.72),rgba(255,244,228,.42))}
.news-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;margin-top:1.6rem}
.news-card{background:linear-gradient(180deg,#fffdf8,#fff5e8);border:1px solid rgba(217,168,92,.26);border-radius:8px;padding:1.15rem;box-shadow:0 18px 38px rgba(111,75,48,.09)}
.news-image{display:block;margin:-1.15rem -1.15rem .95rem;overflow:hidden;border-radius:8px 8px 0 0;background:#f4dfc2;border-bottom:1px solid rgba(217,168,92,.24)}
.news-image img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;transition:transform .25s ease}.news-image:hover img{transform:scale(1.03)}
.news-card h2{font-size:1.16rem;line-height:1.32;margin:.75rem 0}.news-card h2 a{color:var(--ink);text-decoration:none}.news-card h2 a:hover{color:#8a4f31;text-decoration:underline}
.news-card p{color:var(--muted)}.news-meta{display:flex;gap:.5rem;flex-wrap:wrap}.news-meta span{display:inline-flex;align-items:center;border-radius:999px;padding:.25rem .55rem;background:#fff0db;border:1px solid rgba(217,168,92,.28);color:#6f4b38;font-size:.82rem;font-weight:800}
.buyer-note{margin:1rem 0;padding:.85rem;border-radius:8px;background:rgba(111,139,101,.1);border:1px solid rgba(111,139,101,.2);color:#385945}.buyer-note strong{color:#5e4031}
.news-source{font-weight:850;color:#8a4f31}.news-source:hover{color:#456b55}
.eudr-home{display:grid;grid-template-columns:.82fr 1.18fr;gap:2rem;align-items:start;background:linear-gradient(145deg,#3f2d24,#52715d);max-width:none;color:#fff;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));border-top:1px solid rgba(255,225,170,.3);border-bottom:1px solid rgba(255,225,170,.3)}.eudr-home .eyebrow{color:#f7dfb5}.eudr-home h2{color:#fff}.eudr-lede{color:rgba(255,250,244,.84);font-size:1.08rem}.eudr-actions{display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1.4rem}.eudr-flow{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.7rem}.eudr-flow article{display:grid;grid-template-columns:42px 1fr;gap:.75rem;padding:.9rem;border:1px solid rgba(255,225,170,.24);border-radius:8px;background:rgba(255,255,255,.08)}.eudr-flow span{display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:#e4b76d;color:#3a2a20;font-weight:950}.eudr-flow h3{margin:0;color:#fff;font-size:1rem}.eudr-flow p{margin:.2rem 0 0;color:rgba(255,250,244,.72);font-size:.9rem}.eudr-verification-note{grid-column:1/-1;padding:1rem;border-left:4px solid #e4b76d;background:rgba(255,250,244,.1)}.eudr-verification-note p{margin:.3rem 0 0;color:rgba(255,250,244,.8)}
.product-eudr-support{display:grid;grid-template-columns:1fr 1fr;gap:1.4rem;padding:1.35rem!important;border:1px solid rgba(69,107,85,.25);border-radius:8px;background:linear-gradient(135deg,rgba(241,248,236,.9),rgba(255,244,228,.88))}.product-eudr-support h2{margin-top:.15rem}.eudr-data-list{margin:0;padding:1rem 1rem 1rem 2rem;border-radius:8px;background:rgba(255,255,255,.68);border:1px solid rgba(217,168,92,.2)}.eudr-data-list li{margin:.45rem 0}
.eudr-hero{background:radial-gradient(circle at 88% 12%,rgba(217,168,92,.23),transparent 28%),linear-gradient(135deg,#eef5eb,#fff3df);border-bottom:1px solid rgba(217,168,92,.25)}.eudr-definition,.eudr-data-section{max-width:1180px}.eudr-scope-note,.eudr-boundaries{padding:1.2rem;border-radius:8px;background:#fff4e4;border:1px solid rgba(217,168,92,.3);box-shadow:0 16px 34px rgba(111,75,48,.08)}.eudr-scope-note p{margin:.4rem 0 0}.eudr-data-section{background:linear-gradient(135deg,rgba(255,244,228,.7),rgba(241,248,236,.64))}.eudr-data-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.eudr-data-grid article{padding:1rem;border-radius:8px;background:rgba(255,255,255,.76);border:1px solid rgba(217,168,92,.24);box-shadow:0 14px 30px rgba(111,75,48,.07)}.eudr-data-grid h3{margin:.1rem 0 .5rem;color:#385945}.eudr-data-grid p{margin:0;color:var(--muted)}.eudr-chain ol{display:grid;grid-template-columns:repeat(5,1fr);gap:.8rem;padding:0;list-style:none;counter-reset:eudr}.eudr-chain li{position:relative;padding:1rem;border-top:4px solid #6f8b65;background:#fffdf8;border-radius:8px;box-shadow:0 14px 30px rgba(111,75,48,.08)}.eudr-chain li:after{content:"";position:absolute;right:-.62rem;top:50%;width:.75rem;height:.75rem;border-top:2px solid #d9a85c;border-right:2px solid #d9a85c;transform:rotate(45deg)}.eudr-chain li:last-child:after{display:none}.eudr-chain strong,.eudr-chain span{display:block}.eudr-chain span{margin-top:.4rem;color:var(--muted);font-size:.92rem}.eudr-genetic{align-items:stretch}.eudr-genetic>div{padding:1.2rem}.eudr-official-sources{padding-top:2rem}.eudr-official-sources .link-grid a{border-radius:8px}
@media (max-width:900px){.advantage-grid,.solution-grid{grid-template-columns:1fr}.advantage-section>.section-heading,.solution-section>.section-heading,.advantage-grid,.solution-grid{margin-left:0;margin-right:0}}
@media (max-width:900px){.eudr-home,.product-eudr-support{grid-template-columns:1fr}.eudr-flow,.eudr-data-grid,.eudr-chain ol{grid-template-columns:1fr}.eudr-chain li:after{display:none}.eudr-home{padding-left:1rem;padding-right:1rem}.eudr-hero{width:100%;padding:3.2rem 1rem}.eudr-hero h1{font-size:2rem;line-height:1.08;word-break:normal}.eudr-hero p{font-size:1rem}.eudr-hero .hero-actions{display:grid;grid-template-columns:1fr}.eudr-hero .button{width:100%;max-width:100%;white-space:normal;text-align:center}.trust-strip span{max-width:100%;text-align:center}.eudr-flow article{min-width:0}.eudr-flow p,.eudr-data-grid p{overflow-wrap:anywhere}}
@media (max-width:900px){.brand img{width:142px;height:52px}.brand{padding:.35rem .48rem}.header-inner{width:100%;max-width:100%;min-width:0;overflow:hidden}.main-nav{width:100%;min-width:0;flex:0 1 auto;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.15rem}.nav-item{min-width:0}.nav-link{width:100%;min-width:0;padding:.48rem .35rem;line-height:1.2;white-space:normal;overflow-wrap:anywhere}.mega-menu{top:auto;padding-top:0}.nav-item:after{display:none!important}.news-grid{grid-template-columns:1fr}.article,.longform-article{width:100%;min-width:0;overflow:hidden;padding:3.5rem 1rem}.article h1{font-size:clamp(1.9rem,9vw,2.5rem);overflow-wrap:anywhere}.article-body{min-width:0}.article-body table{display:block;max-width:100%;min-width:0;overflow-x:auto}.badge-grid{max-width:100%;min-width:0}.badge-grid span{max-width:100%;min-width:0;border-radius:8px;overflow-wrap:anywhere}.whatsapp-float{max-width:calc(100vw - 2rem)}}
`;

const js = `
document.querySelectorAll("[data-lead-form]").forEach((form)=>{
  form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const note = form.querySelector("[data-form-note]");
    const button = form.querySelector("button[type='submit']");
    if (form.website?.value) {
      note.textContent = "Submission blocked by spam protection.";
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      note.textContent = "Please complete all required fields correctly.";
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event:"lead_form_submit",product:data.product,country:data.country,quantity:data.quantity});
    button.disabled = true;
    button.textContent = "Sending...";
    note.textContent = "Sending your inquiry securely...";
    try {
      const response = await fetch("https://formsubmit.co/ajax/${company.email}", {
        method: "POST",
        headers: {"Content-Type":"application/json","Accept":"application/json"},
        body: JSON.stringify({...data, _subject:"New LANGMAI product inquiry", _template:"table", _replyto:data.email, page:window.location.href})
      });
      const result = await response.json();
      if (!response.ok || String(result.success).toLowerCase() !== "true") throw new Error(result.message || "Delivery failed");
      note.textContent = "Thank you. Your inquiry has been sent to Wilson's sales inbox.";
      button.textContent = "Sent";
      form.reset();
    } catch (error) {
      note.textContent = "We could not send your inquiry. Please email ${company.email} or contact us on WhatsApp.";
      button.textContent = "Try Again";
    } finally {
      setTimeout(()=>{button.disabled=false;button.textContent="Send Inquiry";},1800);
    }
  });
});

document.querySelectorAll("[data-inquiry-form]").forEach((form)=>{
  const status = form.querySelector("[data-inquiry-status]");
  const button = form.querySelector("button[type='submit']");
  const showError = (field, message) => {
    const label = field.closest("label");
    if (!label) return;
    label.classList.add("invalid");
    const small = label.querySelector("small");
    if (small) small.textContent = message;
  };
  const clearErrors = () => {
    form.querySelectorAll(".invalid").forEach((item)=>item.classList.remove("invalid"));
    form.querySelectorAll("small").forEach((item)=>item.textContent = "");
  };
  form.querySelectorAll("input, textarea").forEach((field)=>{
    field.addEventListener("input",()=> {
      const label = field.closest("label");
      if (label) label.classList.remove("invalid");
      const small = label?.querySelector("small");
      if (small) small.textContent = "";
    });
  });
  form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    clearErrors();
    status.className = "inquiry-status";
    if (form.website?.value) {
      status.textContent = "Submission blocked by spam protection.";
      status.classList.add("error");
      return;
    }
    const required = Array.from(form.querySelectorAll("[required]"));
    const invalid = required.filter((field)=>!field.checkValidity());
    if (invalid.length) {
      invalid.forEach((field)=>showError(field, field.dataset.error || "Please complete this field."));
      status.textContent = "Please complete all required fields before submitting.";
      status.classList.add("error");
      invalid[0].focus();
      return;
    }
    button.disabled = true;
    button.textContent = "Submitting...";
    const data = Object.fromEntries(new FormData(form).entries());
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event:"b2b_inquiry_submit",product:data.product,country:data.country});
    try {
      const response = await fetch("https://formsubmit.co/ajax/${company.email}", {
        method: "POST",
        headers: {"Content-Type":"application/json","Accept":"application/json"},
        body: JSON.stringify({...data, _subject:"New LANGMAI B2B inquiry", _template:"table", _replyto:data.email, page:window.location.href})
      });
      const result = await response.json();
      if (!response.ok || String(result.success).toLowerCase() !== "true") throw new Error(result.message || "Delivery failed");
      status.textContent = "Submitted successfully. Your inquiry has been sent to Wilson's sales inbox.";
      status.classList.add("success");
      button.textContent = "Submitted";
      form.reset();
    } catch (error) {
      status.textContent = "Submit failed. Please email us directly or try again.";
      status.classList.add("error");
      button.disabled = false;
      button.textContent = button.dataset.submitText || "Submit Inquiry";
    }
    setTimeout(()=>{
      button.disabled = false;
      button.textContent = button.dataset.submitText || "Submit Inquiry";
    }, 1400);
  });
});
`;

writePage("/", homePage());
writePage("/products/", productsIndex());
products.forEach((product) => writePage(`/products/${product.slug}/`, productPage(product)));
writePage("/applications/", applicationsPage());
writePage("/cases/", casesPage());
writePage("/customization/", customizationPage());
writePage("/factory-certificates/", factoryPage());
writePage("/eudr-traceability/", eudrTraceabilityPage());
writePage("/about/", aboutPage());
writePage("/contact/", contactPage());
writePage("/inquiry/", contactPage("/inquiry/"));
writePage("/news/", newsPage());
writePage("/resources/", resourcesIndex());
resourcePages.forEach((resource) => writePage(`/resources/${resource.slug}/`, resourcePage(resource)));
landingPages.forEach((lp) => writePage(`/landing/${lp.slug}/`, landingPage(lp)));
writeStatic();
console.log(`Built ${pages.length} pages in ${distDir}`);















