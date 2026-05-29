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
  markets: "Middle East, North America, Europe, England, South America",
  customers: "Importers, distributors, bakery and confectionery buyers, large supermarkets",
  certificates: ["BSCI", "ISO", "FSC", "FDA", "LFGB", "EUDR", "BRC"],
  contact: "Wilson Wu",
  email: "wh1007209170@gmail.com",
  phone: "+86 13645700210",
  whatsapp: "+86 13645700210",
};

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/langmai.paper", icon: "facebook" },
  { name: "Instagram", url: "https://www.instagram.com/langmai.paper", icon: "instagram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/langmai-paper", icon: "linkedin" },
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
    title: "Paper Cupcake Cup Liners & Custom Cake Cups Wholesale",
    short: "Food grade greaseproof paper cupcake cup liners for bakery and confectionery buyers, large supermarkets, importers and distributors.",
    image: "ai-cake-cups-premium.jpg",
    gallery: ["ai-cake-cups-premium.jpg", "cake-cups-clean.jpg", "ai-quality-export-packaging.jpg"],
    keywords: "paper cupcake cup liner, custom cake cups wholesale, cupcake liner manufacturer, paper baking cups supplier",
    material: "Food grade cake paper and greaseproof paper",
    features: ["Grease-proof", "Heat-resistant", "Easy release", "Soy-ink printing", "Custom colors and patterns"],
    applications: ["Bakeries", "Cupcake brands", "Cafe chains", "Party supply wholesalers", "Retail baking kits"],
    specs: specs.cakeCups,
    headers: ["Model", "Base dia", "Height", "Package"],
  },
  {
    slug: "roll-mouth-cake-cups",
    title: "Roll Mouth Cake Cups for Baking and Dessert Packaging",
    short: "PET coated roll mouth cake cups with rigid shape, colorful finishes, and OEM printing support.",
    image: "ai-cake-cups-premium.jpg",
    gallery: ["roll-mouth-cake-cups-clean.jpg", "ai-cake-cups-premium.jpg", "ai-quality-export-packaging.jpg"],
    keywords: "roll mouth cake cups, PET coated cake cups, custom printed baking cups",
    material: "Food grade PET coated paper and 80 g paper",
    features: ["Grease-proof", "Water-proof", "Heat-resistant", "Moulding baking", "OEM printing"],
    applications: ["Cupcakes", "Muffins", "Dessert cups", "Seasonal food packaging"],
    specs: specs.rollMouth,
    headers: ["Top dia", "Base dia", "Height", "Package"],
  },
  {
    slug: "muffin-baking-cups",
    title: "Muffin Baking Cup Liners for Bakeries, Cafes and Events",
    short: "Tall PET coated muffin baking cup liners for branded bakery displays, cafe counters, supermarkets and event desserts.",
    image: "ai-cake-cups-premium.jpg",
    gallery: ["muffin-baking-cups-clean.jpg", "ai-cake-cups-premium.jpg", "ai-langmai-ip-showroom.jpg"],
    keywords: "muffin baking cup liner, PET coated muffin cups, muffin baking cups wholesale, custom muffin cups",
    material: "Food grade PET paper",
    features: ["Grease-proof", "Water-proof", "Heat-resistant", "Moulding baking", "Custom prints"],
    applications: ["Muffins", "Cupcakes", "Bakery display", "Gift boxes", "Event catering"],
    specs: specs.muffin,
    headers: ["Top dia", "Base dia", "Height", "Package"],
  },
  {
    slug: "air-fryer-paper-liners",
    title: "Air Fryer Paper Liner Bulk Supplier",
    short: "Round and square food grade silicone paper liners for air fryers, ovens, supermarkets and ready-to-cook food packs.",
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
    title: "Biodegradable Paper Straws Wholesale",
    short: "Food grade kraft paper straws in solid, striped, and seasonal designs for beverage and party supply buyers.",
    image: "paper-straws-clean.jpg",
    gallery: ["paper-straws-clean.jpg", "ai-quality-export-packaging.jpg"],
    keywords: "paper straws wholesale, biodegradable paper straws, food grade kraft paper straws",
    material: "Food grade kraft paper",
    features: ["Biodegradable", "Food grade material", "Eco-friendly", "Multiple colors", "Stock designs for 6 x 197 mm"],
    applications: ["Beverage brands", "Restaurants", "Party supply", "Retail packs"],
    specs: specs.straws,
    headers: ["Dia", "Length", "Package"],
  },
  {
    slug: "party-accessories",
    title: "Paper Party Accessories and Cupcake Decorations",
    short: "Cupcake toppers, paper doilies, cake boards, themed cups, straws, plates, and disposable tableware sets.",
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
      "The updated company brief highlights FSC, EUDR and BRC as key certificate signals. Public website pages should show certificate names clearly and add scanned files when approved for publication.",
      "For AI search and procurement teams, certificate information should be written in text, not only embedded inside catalog images.",
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
    description: "Source custom printed paper cupcake cup liners from a China manufacturer with food grade materials, OEM/ODM designs, FSC/EUDR/BRC signals, and bulk packaging.",
    productSlug: "cake-cups",
    focus: "custom cake cups wholesale",
  },
  {
    slug: "air-fryer-paper-liners-bulk",
    title: "Air Fryer Paper Liners Bulk",
    description: "Bulk air fryer paper liner options in round and square shapes with food grade silicone paper, heat resistance, and carton packaging.",
    productSlug: "air-fryer-paper-liners",
    focus: "air fryer paper liners bulk",
  },
  {
    slug: "custom-cupcake-liners-manufacturer",
    title: "Custom Cupcake Liners Manufacturer",
    description: "OEM cupcake liner manufacturer for greaseproof, customized odorless ink printed, colorful baking paper cups.",
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

function renderMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let list = null;
  const closeList = () => {
    if (list) {
      html.push(`</${list}>`);
      list = null;
    }
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      closeList();
      continue;
    }
    if (line.startsWith("### ")) {
      closeList();
      html.push(`<h3>${esc(line.slice(4))}</h3>`);
    } else if (line.startsWith("## ")) {
      closeList();
      html.push(`<h2>${esc(line.slice(3))}</h2>`);
    } else if (line.startsWith("- ")) {
      if (list !== "ul") {
        closeList();
        html.push("<ul>");
        list = "ul";
      }
      html.push(`<li>${esc(line.slice(2))}</li>`);
    } else if (/^\d+\.\s/.test(line)) {
      if (list !== "ol") {
        closeList();
        html.push("<ol>");
        list = "ol";
      }
      html.push(`<li>${esc(line.replace(/^\d+\.\s/, ""))}</li>`);
    } else if (line.startsWith("CTA button:")) {
      closeList();
      const label = line.replace("CTA button:", "").trim();
      html.push(`<p><a class="button primary" href="/inquiry/">${esc(label || "Get a Quote")}</a></p>`);
    } else {
      closeList();
      html.push(`<p>${esc(line)}</p>`);
    }
  }
  closeList();
  return html.join("\n");
}

const blogImageMap = {
  "how-to-choose-custom-cupcake-liners-wholesale": ["ai-cake-cups-premium.jpg", "ai-quality-export-packaging.jpg"],
  "greaseproof-paper-vs-pet-coated-paper-baking-cups": ["ai-cake-cups-premium.jpg", "ai-quality-export-packaging.jpg"],
  "air-fryer-paper-liners-bulk-buying-guide": ["ai-air-fryer-liners-premium.jpg", "ai-quality-export-packaging.jpg"],
};

function loadBlogArticles() {
  const file = path.join(siteDir, "content", "blog", "langmai-seo-aio-blog-pack.md");
  if (!fs.existsSync(file)) return [];
  const text = fs.readFileSync(file, "utf8");
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
        keywords: field(section, "Target Keywords"),
        intent: field(section, "Search Intent"),
        html: renderMarkdown(bodyMarkdown),
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
        ["Paper Cupcake Cup Liners", "/products/cake-cups/", "Main wholesale line for bakeries and supermarkets"],
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
        ["Certificates", "/factory-certificates/", "BSCI, ISO, FSC, FDA, LFGB, EUDR and BRC"],
        ["Export Markets", "/#market-map-title", "China to key overseas buying regions"],
      ], "Verify factory")}
      ${megaNavItem("Resources", "/resources/", [
        ["Buying Guides", "/resources/", "SEO buyer guides for food paper products"],
        ["Certificate Guide", "/resources/food-paper-certificates/", "Compliance notes for import buyers"],
        ["Cupcake Liner Selection", "/resources/choose-custom-cupcake-liners/", "How to choose baking cup specs"],
      ], "Read resources")}
      <a class="nav-link simple" href="/about/">About</a>
      <a class="nav-link simple" href="/contact/">Contact</a>
    </nav>
    <a class="header-cta" href="/contact/">Request Quote</a>
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
          <h2>${label === "Products" ? "Wholesale product architecture" : label}</h2>
          <p>Fast paths for overseas B2B buyers to review product fit, factory trust and quote-ready information.</p>
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
      <p>${company.brand} supplies custom cake cups, cupcake liners, air fryer paper liners, paper straws and paper party accessories for B2B buyers.</p>
    </div>
    <div>
      <h2>Buyer Actions</h2>
      <a href="/contact/">Request a Quote</a>
      <a href="/contact/#sample">Get Free Sample</a>
      <a href="/assets/catalog-preview-clean.jpg" download>Download Catalog Preview</a>
    </div>
    <div>
      <h2>Trust</h2>
      <p>Founded in ${company.founded}. ${company.plant} factory capacity. ${company.team}. Key certificate signals: ${company.certificates.join(", ")}.</p>
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
      <p>Share product type, size, quantity, target market and custom print needs. LANGMAI can support stock designs, OEM artwork and sample checks.</p>
    </div>
    <div class="cta-actions">
      <a class="button primary" href="/contact/">Request a Quote</a>
      <a class="button secondary" href="/contact/#sample">Get Free Sample</a>
    </div>
  </section>`;
}

function leadForm(defaultProduct = "Custom cake cups") {
  return `<form class="lead-form" data-lead-form>
  <label>Name<input name="name" placeholder="Your name" required></label>
  <label>Email<input type="email" name="email" placeholder="buyer@example.com" required></label>
  <label>Country<input name="country" placeholder="USA, UAE, Germany..." required></label>
  <label>Product requirement<input name="product" value="${esc(defaultProduct)}" required></label>
  <label>Quantity / target order<input name="quantity" placeholder="Example: 100 cartons"></label>
  <label>WhatsApp<input name="whatsapp" placeholder="+1 ..."></label>
  <label>Message<textarea name="message" placeholder="Tell us the size, material, custom print, packaging and delivery needs." rows="4"></textarea></label>
  <button class="button primary" type="submit">Send Inquiry</button>
  <p class="form-note" data-form-note>Thank you. Our sales team will contact you soon. Static demo note: connect this form to ${esc(company.email)} before launch.</p>
</form>`;
}

function ipStickyCard(productTitle = "Custom cake cups") {
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
      <a class="button primary" href="/contact/">Request Quote</a>
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
        <a class="text-link" href="/products/${p.slug}/">View specifications</a>
      </div>
    </article>`,
    )
    .join("")}</div>`;
}

function marketMapSection() {
  return `<section class="market-map section" aria-labelledby="market-map-title">
    <div class="section-heading">
      <p class="eyebrow">Export markets</p>
      <h2 id="market-map-title">From China to key overseas buying regions</h2>
      <p>LANGMAI supports importers, distributors, bakery and confectionery buyers, and large supermarkets across the Middle East, Europe, England, North America and South America.</p>
    </div>
    <div class="map-panel" role="img" aria-label="World map showing export arrows from China to Middle East, Europe, England, North America and South America">
      <svg viewBox="0 0 1200 620" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L7,3 z" fill="#c9342c"/>
          </marker>
          <radialGradient id="dotBlue" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#b8e9ff"/>
            <stop offset="42%" stop-color="#62bee7"/>
            <stop offset="100%" stop-color="#2d9cd0"/>
          </radialGradient>
          <linearGradient id="mapBg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="58%" stop-color="#f8fcff"/>
            <stop offset="100%" stop-color="#eef7fb"/>
          </linearGradient>
          <filter id="dotLift" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1.2" dy="2.2" stdDeviation="1.2" flood-color="#1f6f95" flood-opacity=".22"/>
          </filter>
          <filter id="lineLift" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.4" flood-color="#7b1b18" flood-opacity=".18"/>
          </filter>
          <pattern id="dotMap" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="3.25" fill="url(#dotBlue)" filter="url(#dotLift)"/>
          </pattern>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#1f2f29" flood-opacity=".18"/>
          </filter>
        </defs>
        <rect width="1200" height="620" rx="18" fill="url(#mapBg)"/>
        <ellipse cx="620" cy="596" rx="500" ry="22" fill="#b8d7e7" opacity=".22"/>
        <g class="world-land" fill="url(#dotMap)" stroke="none">
          <path d="M86 174l35-38 58-22 75-11 67 12 39 30 42 8 34 36-13 31-50 26-61 12-46 18-50 46-57-2-54-24-48-17-28-45 8-35Z"/>
          <path d="M360 92l50-28 64 3 34 25-11 35-39 23-58-4-39-18-1-36Z"/>
          <path d="M324 338l48-11 45 24 23 47-18 61-40 71-44 23-29-38-16-55-30-48 14-50 47-24Z"/>
          <path d="M520 170l38-28 64-10 52 19 22 32-28 24-45 5-34 29-48-8-36-25 15-38Z"/>
          <path d="M563 238l67 5 54 35 27 55 39 35-12 54-42 52-68 22-54-22-31-49-1-70-31-45 18-48 34-24Z"/>
          <path d="M671 195l53-36 90-27 112 8 93 32 74 55 43 72-32 50-85 28-103-4-83-24-91 18-73-32-41-55 13-48 30-37Z"/>
          <path d="M768 146l29-41 59-15 48 10 11 30-47 16-58 13-42-13Z"/>
          <path d="M858 382l53-9 45 30 25 48-16 52-55 28-67-13-35-44 11-52 39-40Z"/>
          <path d="M965 430l50-12 54 21 35 42-13 38-51 21-58-13-37-38 20-59Z"/>
          <path d="M1042 165l39-11 38 16 14 32-30 19-44-8-30-24 13-24Z"/>
          <path d="M160 512l64 6 75 23 86 9 118-3 123 13 101-7 128 12 126-8 86-22 34 18-47 33-194 17-213-10-184 12-173-11-112-22-18-29Z" opacity=".52"/>
        </g>
        <g class="market-lines" filter="url(#lineLift)">
          <path d="M858 259 C766 254 697 239 637 226"/>
          <path d="M858 259 C752 199 686 177 626 181"/>
          <path d="M858 259 C730 171 650 145 586 160"/>
          <path d="M858 259 C641 122 386 118 238 189"/>
          <path d="M858 259 C619 288 425 349 336 404"/>
          <path d="M858 259 C780 302 735 344 716 399"/>
          <path d="M858 259 C883 290 895 331 890 383"/>
          <path d="M858 259 C914 211 970 202 1028 219"/>
        </g>
        <g class="map-tags" filter="url(#shadow)">
          <g transform="translate(833 246)"><rect width="62" height="22"/><text x="31" y="15">China</text></g>
          <g transform="translate(565 214)"><rect width="92" height="22"/><text x="46" y="15">Middle East</text></g>
          <g transform="translate(596 166)"><rect width="62" height="22"/><text x="31" y="15">Europe</text></g>
          <g transform="translate(552 145)"><rect width="68" height="22"/><text x="34" y="15">Britain</text></g>
          <g transform="translate(170 174)"><rect width="118" height="22"/><text x="59" y="15">North America</text></g>
          <g transform="translate(274 392)"><rect width="118" height="22"/><text x="59" y="15">South America</text></g>
          <g transform="translate(673 392)"><rect width="50" height="22"/><text x="25" y="15">India</text></g>
          <g transform="translate(858 382)"><rect width="72" height="22"/><text x="36" y="15">Thailand</text></g>
          <g transform="translate(988 207)"><rect width="88" height="22"/><text x="44" y="15">South Korea</text></g>
          <g transform="translate(1014 245)"><rect width="54" height="22"/><text x="27" y="15">Japan</text></g>
          <g transform="translate(902 440)"><rect width="76" height="22"/><text x="38" y="15">Indonesia</text></g>
          <g transform="translate(955 472)"><rect width="74" height="22"/><text x="37" y="15">Australia</text></g>
        </g>
      </svg>
    </div>
  </section>`;
}

function homeVideoSection() {
  return `<section class="home-video-section section" aria-labelledby="home-video-title">
    <div class="video-copy">
      <p class="eyebrow">Factory video</p>
      <h2 id="home-video-title">A closer look at LANGMAI products and export-ready presentation</h2>
      <p>This vertical video area is designed for mobile-first B2B buyers. It keeps the original portrait ratio, shows visible controls, and works responsively on desktop and mobile.</p>
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

function homePage() {
  const content = `<section class="hero">
    <div class="hero-slider" aria-label="LANGMAI product banner carousel">
      <img class="hero-slide" src="/assets/banner-cake-cups.png" alt="LANGMAI colorful cupcake liners and cake cups">
      <img class="hero-slide" src="/assets/banner-air-fryer-paper.png" alt="LANGMAI air fryer paper liners in round and square shapes">
      <img class="hero-slide" src="/assets/banner-paper-straws.png" alt="LANGMAI colorful paper straws for beverage and party buyers">
    </div>
    <div class="hero-copy">
      <p class="eyebrow">China manufacturer for B2B baking paper buyers</p>
      <h1>Wholesale Custom Cake Cups & Baking Paper Products Manufacturer in China</h1>
      <p>LANGMAI helps importers, distributors, bakery and confectionery buyers, and large supermarkets source paper cupcake cup liners, air fryer paper liner, muffin baking cup liner, paper straws and party paper accessories with OEM/ODM design support.</p>
      <div class="hero-actions">
        <a class="button primary" href="/products/cake-cups/">Explore Cake Cups</a>
        <a class="button secondary" href="/contact/">Request Quote</a>
      </div>
    </div>
  </section>
  <section class="trust-strip" aria-label="Factory trust points">
      <span>Founded in ${company.founded}</span><span>${company.plant} factory</span><span>${company.team}</span><span>${company.certificates.join(" / ")}</span>
  </section>
  ${homeVideoSection()}
  ${marketMapSection()}
  <section class="section">
    <div class="section-heading">
      <p class="eyebrow">Product architecture</p>
      <h2>Built for wholesale discovery, SEO and quote conversion</h2>
      <p>Each product category includes visible specifications, material notes, applications, FAQ, internal links and quote actions for buyers in ${company.markets}.</p>
    </div>
    ${productCards()}
  </section>
  <section class="split-section">
    <img src="/assets/ai-langmai-ip-showroom.jpg" alt="LANGMAI showroom with branded product samples">
    <div>
      <p class="eyebrow">Factory trust</p>
      <h2>Real people, real factory, export-ready product pages</h2>
      <p>${company.name} was founded in ${company.founded} and positions itself as a ${company.position}. The updated company brief highlights ${company.plant} factory capacity, ${company.team}, OEM/ODM customization and customized odorless ink support.</p>
      <ul class="check-list">
        <li>Main markets include ${company.markets}.</li>
        <li>Target customers include ${company.customers}.</li>
        <li>FSC, EUDR and BRC certificate names are written as crawlable text for SEO, AIO and GEO.</li>
      </ul>
      <a class="button secondary" href="/factory-certificates/">View Factory & Certificates</a>
    </div>
  </section>
  ${ctaBand()}`;
  return layout({
    route: "/",
    title: "LANGMAI | Custom Cake Cups & Baking Paper Products Manufacturer",
    description: "Wholesale custom cake cups, cupcake liners, baking paper cups, air fryer paper liners and paper straws from Jinhua Langmai Daily-Using Co., Ltd.",
    content,
    schema: [websiteSchema()],
  });
}

function productsIndex() {
  const content = `<section class="page-hero">
    <p class="eyebrow">Products</p>
    <h1>Wholesale baking paper products for importers and distributors</h1>
    <p>Start with cake cups and cupcake liners, then add air fryer paper liners, paper straws and party accessories to build cross-sell product sets.</p>
  </section>
  <section class="section">${productCards()}</section>
  ${ctaBand("Need a mixed container or custom printed set?")}`;
  return layout({
    route: "/products/",
    title: "Products | LANGMAI Baking Paper Manufacturer",
    description: "Browse LANGMAI cake cups, roll mouth cake cups, muffin baking cups, air fryer paper liners, paper straws and party accessories.",
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
    [`What material is used for ${product.title}?`, `${product.material}. The catalog highlights food grade materials and export-friendly paper product options.`],
    ["Can LANGMAI make custom printed designs?", "Yes. Custom colors, sizes, stock designs and OEM artwork are supported. Buyers should confirm artwork, size, packaging and sample approval before mass production."],
    ["Which certificates should buyers confirm?", "The updated brief highlights FSC, EUDR and BRC. Public certificate scans should be added after approval from the factory team."],
    ["How do I request a quote?", "Send product type, size, quantity, target market, custom print needs, email and WhatsApp through the inquiry form."],
  ];
  const content = `<section class="product-hero">
    <div>
      <p class="eyebrow">Product category</p>
      <h1>${esc(product.title)}</h1>
      <p>${esc(product.short)}</p>
      <div class="hero-actions">
        <a class="button primary" href="#quote">Request Quote</a>
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
          <h2>Buyer-ready product information</h2>
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
          <h2>Visible specifications for buyers and search engines</h2>
          <p>These specification rows are written as HTML text so procurement teams, search engines and AI answer systems can read them directly.</p>
        </div>
        ${specTable}
      </section>
      <section class="image-band product-gallery">${product.gallery.map((img) => `<img src="${relAsset(img)}" alt="${esc(product.title)} product gallery">`).join("")}</section>
      <section class="two-col product-block" id="quote">
        <div>
          <p class="eyebrow">OEM / ODM</p>
          <h2>Custom design, sampling and bulk cartons</h2>
          <p>LANGMAI supports size selection, pattern design, color matching, custom packaging and production confirmation for overseas buyers.</p>
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
    title: `${product.title} | LANGMAI Wholesale Supplier`,
    description: product.short,
    content,
    schema: [productSchema(product), faqSchema(faq)],
  });
}

function customizationPage() {
  const content = `<section class="page-hero">
    <p class="eyebrow">Customization</p>
    <h1>OEM custom printed baking paper products</h1>
    <p>Build custom cake cups, cupcake liners, muffin cups, paper straws and party sets around your brand artwork, seasonal theme and target market.</p>
  </section>
  <section class="section process-grid">
    ${["Product and size", "Material and print", "Sample approval", "Bulk production", "Packing and shipping"].map((step, i) => `<article><span>${i + 1}</span><h2>${step}</h2><p>${customStepText(i)}</p></article>`).join("")}
  </section>
  ${ctaBand("Send artwork, size and quantity for an OEM quote")}`;
  return layout({
    route: "/customization/",
    title: "Custom Printed Cake Cups & Baking Paper OEM | LANGMAI",
    description: "OEM custom printed cake cups, cupcake liners, muffin cups, paper straws and party paper accessories with size, pattern and packaging support.",
    content,
  });
}

function applicationsPage() {
  const applications = [
    ["Bakery and confectionery", "Paper cupcake liners, roll mouth cake cups and muffin baking cup liners for daily production, seasonal launches and branded displays.", "cake-cups-clean.jpg"],
    ["Large supermarkets", "Bulk carton packaging, retail-ready designs and repeatable product specifications for supermarket baking and party aisles.", "product-gallery.jpg"],
    ["Importers and distributors", "Mixed categories including cupcake liners, air fryer paper liner, paper straws and party accessories for regional wholesale channels.", "air-fryer-liners-clean.jpg"],
    ["Party and event supply", "Themed cups, toppers, straws, cake boards and disposable tableware sets for birthday, holiday and celebration ranges.", "party-accessories-clean.jpg"],
  ];
  const content = `<section class="page-hero">
    <p class="eyebrow">Applications</p>
    <h1>Baking paper products for bakeries, supermarkets, importers and party supply buyers</h1>
    <p>Use this page to connect product categories with buyer scenarios in ${company.markets}, improving both SEO relevance and quote quality.</p>
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
  ${ctaBand("Tell us your product channel and target country")}`;
  return layout({
    route: "/applications/",
    title: "Applications | LANGMAI Cupcake Liners and Baking Paper Products",
    description: "Application scenarios for LANGMAI cupcake liners, air fryer paper liner, muffin baking cup liner, paper straws and party accessories.",
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
    <h1>Export project references for B2B paper packaging buyers</h1>
    <p>Use these project-style examples to understand how LANGMAI supports bakeries, importers, distributors, supermarkets and ecommerce buyers from sample planning to shipment inspection.</p>
  </section>
  <section class="section"><div class="product-grid">${cases.map(([title, text, image]) => `<article class="product-card">
    <img src="/assets/${image}" alt="${esc(title)} for LANGMAI overseas buyers">
    <div><h2>${esc(title)}</h2><p>${esc(text)}</p><a class="text-link" href="/inquiry/">Discuss a similar project</a></div>
  </article>`).join("")}</div></section>
  ${ctaBand("Planning a private-label paper packaging project?")}`;
  return layout({
    route: "/cases/",
    title: "Cases and Projects | LANGMAI Export Paper Packaging",
    description: "Project-style examples for LANGMAI cupcake liners, air fryer paper liners, OEM export packaging, sample planning and shipment inspection.",
    content,
  });
}

function customStepText(i) {
  return [
    "Choose cake cups, roll mouth cups, muffin cups, air fryer liners, paper straws or party accessories.",
    "Confirm greaseproof paper, PET coated paper, silicone paper, kraft paper, soy ink printing and color requirements.",
    "Review physical samples to check size, color, baking performance and packaging before mass production.",
    "Produce according to approved samples, carton packaging and buyer purchase order requirements.",
    "Prepare export cartons and documents for distributors, bakery brands and retail supply chains.",
  ][i];
}

function factoryPage() {
  const content = `<section class="page-hero">
    <p class="eyebrow">Factory & Certificates</p>
    <h1>Jinhua factory trust for food paper packaging buyers</h1>
    <p>${company.name} was founded in ${company.founded}. The company brief lists ${company.plant} factory capacity and ${company.team} for overseas B2B buyers.</p>
  </section>
  <section class="split-section">
    <img src="/assets/ai-quality-export-packaging.jpg" alt="LANGMAI quality control and export packaging">
    <div>
      <h2>Factory profile</h2>
      <p>The updated positioning is ${company.position}, serving ${company.customers} across ${company.markets}.</p>
      <ul class="check-list"><li>OEM/ODM customization for product, size, print and packaging.</li><li>FSC and EUDR certified signals for compliance-minded buyers.</li><li>Industrial-grade quality control and customized odorless ink.</li></ul>
    </div>
  </section>
  <section class="image-band"><img src="/assets/factory-workshop.jpg" alt="LANGMAI workshop"><img src="/assets/ai-langmai-ip-showroom.jpg" alt="LANGMAI branded showroom and product samples"><img src="/assets/showroom.jpg" alt="LANGMAI showroom"></section>
  <section class="section">
    <p class="eyebrow">Certificate names from catalog</p>
    <h2>Compliance signals to prepare for public release</h2>
    <div class="badge-grid">${company.certificates.map((item) => `<span>${item}</span>`).join("")}</div>
    <p class="note">Before final launch, add approved certificate scans, expiry dates or report numbers if the factory team agrees to publish them.</p>
  </section>
  ${ctaBand("Need documents for importer approval?")}`;
  return layout({
    route: "/factory-certificates/",
    title: "Factory & Certificates | LANGMAI Baking Paper Supplier",
    description: "LANGMAI factory profile, 30,000+ square meters capacity, 50+ team members and certificate signals for BSCI, ISO, FSC, FDA, LFGB, EUDR and BRC.",
    content,
  });
}

function aboutPage() {
  const content = `<section class="page-hero">
    <p class="eyebrow">About LANGMAI</p>
    <h1>Paper baking product supplier serving domestic and overseas buyers</h1>
    <p>LANGMAI manufactures cake cups, air fryer paper liners, paper straws, muffin cups and related paper products with various colors, sizes and styles.</p>
  </section>
  <section class="split-section">
    <img src="/assets/founder.jpg" alt="LANGMAI founder photo">
    <div>
      <h2>A practical export story buyers can verify</h2>
      <p>For B2B independent-site trust, the founder image should support a real company narrative: factory capacity, catalog clarity, product quality and fast buyer response.</p>
      <p>Use this page for founder notes, trade show photos, customer visits and shipment examples as they become available.</p>
    </div>
  </section>`;
  return layout({
    route: "/about/",
    title: "About LANGMAI | Jinhua Langmai Daily-Using Co., Ltd.",
    description: "Learn about Jinhua Langmai Daily-Using Co., Ltd., a China supplier of cake cups, cupcake liners, paper straws and baking paper products.",
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
  <label>Product Requirement<input name="product" placeholder="Cake cups, cupcake liners, air fryer paper liners..."></label>
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
        <h1>Request a wholesale quote from LANGMAI</h1>
        <p>Send your contact information and product requirement. Wilson's team can reply with price, sample route, catalog details and OEM/ODM options.</p>
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
          <label>Product Requirement<input name="product" placeholder="Cake cups, cupcake liners, air fryer paper liners..."><small></small></label>
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
      <p class="eyebrow">Integration template</p>
      <h2>HTML / React component ready for developers</h2>
      <p>The static demo validates fields in the browser. For launch, connect <code>/api/inquiry</code> to email delivery, CRM, or database storage.</p>
    </div>
    <details open><summary>HTML form template</summary><pre><code>${esc(htmlTemplate)}</code></pre></details>
    <details><summary>React component template</summary><pre><code>${esc(reactTemplate)}</code></pre></details>
    <div class="backend-note">
      <h2>Backend options</h2>
      <p>Email: send the payload to ${company.email} through Resend, SendGrid, SMTP, or your CRM webhook. Database: store name, email, phone, company, country, product, message, source page, UTM and timestamp. Anti-spam: keep the hidden honeypot field and add Turnstile or reCAPTCHA for paid traffic pages.</p>
    </div>
  </section>`;
  return layout({
    route,
    title: "B2B Inquiry Form | Contact LANGMAI",
    description: "Submit a B2B inquiry to LANGMAI with name, email, phone, company, country, product requirement and message fields.",
    content,
  });
}

function resourcesIndex() {
  const content = `<section class="page-hero">
    <p class="eyebrow">Resources</p>
    <h1>Buyer guides for baking paper products</h1>
    <p>These pages create the SEO, AIO and GEO knowledge base around cake cups, cupcake liners, food paper materials, certificates and custom printing.</p>
  </section>
  <section class="section"><div class="resource-grid">${resourcePages.map((r) => `<article><h2><a href="/resources/${r.slug}/">${esc(r.title)}</a></h2><p>${esc(r.description)}</p>${r.isLongForm ? `<p class="note">Long-form SEO / AIO guide</p>` : ""}</article>`).join("")}</div></section>`;
  return layout({
    route: "/resources/",
    title: "Resources | Baking Paper Product Buying Guides",
    description: "Buying guides for custom cupcake liners, food paper packaging certificates, greaseproof paper, PET coated paper and baking cup selection.",
    content,
  });
}

function resourcePage(resource) {
  const imageBlock = resource.images?.length ? `<figure class="article-image"><img src="${relAsset(resource.images[0])}" alt="${esc(resource.title)}"><figcaption>${esc(resource.title)}</figcaption></figure>` : "";
  const secondImage = resource.images?.[1] ? `<figure class="article-image"><img src="${relAsset(resource.images[1])}" alt="${esc(resource.title)} factory testing and shipment inspection"><figcaption>Factory testing and shipment inspection help B2B buyers reduce order risk.</figcaption></figure>` : "";
  const content = resource.isLongForm ? `<article class="article longform-article">
    <p class="eyebrow">SEO / AIO buyer guide</p>
    <h1>${esc(resource.title)}</h1>
    <p class="lede">${esc(resource.description)}</p>
    <div class="badge-grid"><span>${esc(resource.intent || "Procurement research")}</span><span>${esc(resource.keywords || "B2B buyer keywords")}</span></div>
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
      <a href="/products/cake-cups/">View custom cake cups</a>
      <a href="/customization/">Review OEM customization process</a>
      <a href="/contact/">Request a quote</a>
    </section>
  </article>`;
  return layout({
    route: `/resources/${resource.slug}/`,
    title: `${resource.seoTitle || resource.title} | LANGMAI Guide`,
    description: resource.description,
    content,
    schema: [articleSchema(resource)],
  });
}

function landingPage(lp) {
  const product = products.find((p) => p.slug === lp.productSlug);
  const content = `<section class="landing-hero">
    <div>
      <p class="eyebrow">Paid traffic landing page</p>
      <h1>${esc(lp.title)}</h1>
      <p>${esc(lp.description)}</p>
      <ul class="check-list"><li>Food grade materials for import buyers.</li><li>Custom sizes, colors, artwork and carton packaging.</li><li>FSC, EUDR and BRC certificate signals from the updated company brief.</li></ul>
      <div class="hero-actions"><a class="button primary" href="#quote">Request Bulk Price</a><a class="button secondary" href="/products/${product.slug}/">View Product Details</a></div>
    </div>
    <img src="${relAsset(product.image)}" alt="${esc(lp.title)} product details">
  </section>
  <section class="trust-strip"><span>Single keyword focus: ${esc(lp.focus)}</span><span>Quote-ready fields</span><span>GA4 / Ads / Pixel placeholders</span></section>
  <section class="section two-col" id="quote">
    <div>
      <h2>Why buyers use this page</h2>
      <p>This landing page has one ad intent, one product category and one primary CTA, so paid traffic can be tracked and optimized without mixing buyer messages.</p>
      <div class="badge-grid">${product.features.slice(0, 5).map((item) => `<span>${esc(item)}</span>`).join("")}</div>
    </div>
    ${leadForm(lp.title)}
  </section>`;
  return layout({
    route: `/landing/${lp.slug}/`,
    title: `${lp.title} | LANGMAI Wholesale Landing Page`,
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
  return { "@context": "https://schema.org", "@type": "Article", headline: resource.title, description: resource.description, author: { "@type": "Organization", name: company.name } };
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
  fs.writeFileSync(path.join(distDir, "styles.css"), css + productTemplateCss);
  fs.writeFileSync(path.join(distDir, "site.js"), js);
  fs.writeFileSync(path.join(distDir, "social-links.example.json"), JSON.stringify({ socialLinks }, null, 2));
  fs.writeFileSync(path.join(distDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`);
  localizePages();
  const sitemapRoutes = pages.flatMap((route) => localeCodes.map((locale) => localizedPath(locale, route)));
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes.map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`).join("\n")}\n</urlset>\n`);
}

const css = `
:root{--ink:#241b18;--muted:#6f625d;--line:#e5ddd5;--paper:#fffdf8;--soft:#f5efe6;--green:#67b944;--deep:#28473b;--copper:#a45a32;--pink:#f7dce7;--blue:#dceaf4}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,Arial,sans-serif;line-height:1.6}img{max-width:100%;display:block}a{color:inherit}.skip-link{position:absolute;left:-999px}.skip-link:focus{left:1rem;top:1rem;background:#fff;padding:.75rem;z-index:10}.site-header{position:sticky;top:0;z-index:5;background:rgba(255,253,248,.96);border-bottom:1px solid var(--line);backdrop-filter:blur(12px)}.header-inner{max-width:1180px;margin:auto;display:flex;align-items:center;gap:1.4rem;padding:.8rem 1rem}.brand img{width:136px;height:46px;object-fit:contain}.main-nav{display:flex;gap:.25rem;flex:1;justify-content:center;align-items:center;flex-wrap:wrap}.nav-item{position:relative}.nav-link{display:inline-flex;align-items:center;min-height:42px;padding:.55rem .75rem;border-radius:6px;text-decoration:none;color:var(--deep);font-weight:800}.nav-link:hover,.nav-item:focus-within .nav-link{background:rgba(255,255,255,.72);box-shadow:inset 0 0 0 1px rgba(40,71,59,.08)}.mega-menu{position:fixed;left:50%;top:76px;width:min(980px,calc(100vw - 2rem));transform:translateX(-50%) translateY(10px);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s ease,transform .18s ease,visibility .18s ease;z-index:20}.nav-item:hover .mega-menu,.nav-item:focus-within .mega-menu{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0)}.mega-inner{display:grid;grid-template-columns:310px 1fr;gap:1rem;padding:1rem;background:rgba(255,253,248,.82);border:1px solid rgba(255,255,255,.72);border-radius:8px;box-shadow:0 24px 70px rgba(31,47,41,.2),inset 0 1px 0 rgba(255,255,255,.86);backdrop-filter:blur(22px) saturate(1.35)}.mega-intro{padding:1rem;border-radius:8px;background:linear-gradient(145deg,rgba(245,239,230,.86),rgba(220,234,244,.72))}.mega-intro h2{margin:.25rem 0 .75rem;font-size:1.55rem;line-height:1.15}.mega-intro p{color:var(--muted)}.mega-links{display:grid;grid-template-columns:repeat(2,1fr);gap:.65rem}.mega-links a{display:grid;gap:.25rem;min-height:86px;padding:.85rem;border-radius:8px;text-decoration:none;color:var(--deep);background:rgba(255,255,255,.68);border:1px solid rgba(40,71,59,.08);transition:transform .16s ease,background .16s ease,box-shadow .16s ease}.mega-links a:hover{transform:translateY(-2px);background:#fff;box-shadow:0 12px 28px rgba(31,47,41,.12)}.mega-links span{color:var(--muted);font-size:.92rem}.site-footer a{text-decoration:none;color:var(--deep);font-weight:650}.header-cta,.button{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:.75rem 1rem;border-radius:6px;text-decoration:none;font-weight:800;border:1px solid transparent}.primary{background:var(--deep);color:#fff}.secondary{background:#fff;color:var(--deep);border-color:var(--deep)}.hero{min-height:calc(100vh - 76px);position:relative;display:grid;align-items:center;overflow:hidden;background:#120f0d}.hero-slider{position:absolute;inset:0;overflow:hidden}.hero-slide{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(70%);opacity:0;transform:scale(1.05);animation:heroSlide 18s infinite}.hero-slide:nth-child(1){animation-delay:0s}.hero-slide:nth-child(2){animation-delay:6s}.hero-slide:nth-child(3){animation-delay:12s}.hero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.54),rgba(0,0,0,.3));pointer-events:none}.hero-copy{position:relative;z-index:1;max-width:760px;padding:5rem 1rem;margin-left:max(1rem,calc((100vw - 1180px)/2));color:#fff}.hero .eyebrow{color:#ffd35a}.hero .hero-copy p{color:rgba(255,255,255,.9)}@keyframes heroSlide{0%{opacity:0;transform:scale(1.05) translateX(1.5%)}6%{opacity:1}30%{opacity:1}38%{opacity:0;transform:scale(1.12) translateX(-1.5%)}100%{opacity:0}}@media (prefers-reduced-motion:reduce){.hero-slide{animation:none}.hero-slide:first-child{opacity:1}}.eyebrow{text-transform:uppercase;letter-spacing:.08em;color:var(--copper);font-size:.78rem;font-weight:900}.hero h1,.page-hero h1,.product-hero h1,.landing-hero h1{font-size:clamp(2rem,5vw,4.9rem);line-height:1.04;margin:.25rem 0 1rem;letter-spacing:0}.hero p,.page-hero p,.landing-hero p{font-size:1.12rem;color:var(--muted);max-width:760px}.hero-actions,.cta-actions{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1.5rem}.trust-strip{display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center;padding:1rem;background:var(--deep);color:#fff}.trust-strip span{border:1px solid rgba(255,255,255,.25);border-radius:999px;padding:.35rem .7rem;font-weight:700}.market-map{padding-top:3rem}.map-panel{background:linear-gradient(145deg,#fff,#eef8fd);border:1px solid rgba(88,184,226,.28);border-radius:8px;padding:1rem;box-shadow:0 22px 55px rgba(31,47,41,.14), inset 0 1px 0 rgba(255,255,255,.9);overflow:hidden}.map-panel svg{width:100%;height:auto;display:block}.market-lines path{stroke:#c9342c;stroke-width:1.45;fill:none;opacity:.76;marker-end:url(#arrow)}.map-tags rect{fill:#cf2f2f;rx:7;ry:7;filter:drop-shadow(0 3px 3px rgba(95,18,18,.24))}.map-tags text{font:800 12px Inter,Arial,sans-serif;fill:#fff;text-anchor:middle;dominant-baseline:middle}.world-land{opacity:.95}.section,.page-hero,.product-hero,.landing-hero,.split-section,.cta-band,.article{max-width:1180px;margin:auto;padding:4.5rem 1rem}.section-heading{max-width:760px;margin-bottom:2rem}.section h2,.split-section h2,.cta-band h2,.article h2{font-size:clamp(1.45rem,3vw,2.5rem);line-height:1.15;margin:.2rem 0 1rem}.product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.product-card,.resource-grid article,.process-grid article{background:#fff;border:1px solid var(--line);border-radius:8px;overflow:hidden}.product-card img{height:240px;width:100%;object-fit:cover}.product-card div,.resource-grid article,.process-grid article{padding:1rem}.product-card h3{font-size:1.1rem;line-height:1.25}.text-link{font-weight:850;color:var(--copper)}.split-section,.product-hero,.landing-hero,.two-col,.footer-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center}.split-section img,.product-hero img,.landing-hero img{border-radius:8px;border:1px solid var(--line);background:#fff;max-height:680px;width:100%;object-fit:cover}.check-list{padding-left:1.1rem}.check-list li{margin:.45rem 0}.process-list li{margin:.5rem 0}.table-wrap{overflow:auto;border:1px solid var(--line);border-radius:8px;background:#fff}table{width:100%;border-collapse:collapse;min-width:620px}th,td{text-align:left;padding:.8rem;border-bottom:1px solid var(--line)}th{background:var(--soft);color:var(--deep)}.image-band{max-width:1180px;margin:0 auto;padding:1rem;display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.image-band img{height:330px;width:100%;object-fit:cover;border-radius:8px;border:1px solid var(--line);background:#fff}.lead-form{background:#fff;border:1px solid var(--line);border-radius:8px;padding:1rem;display:grid;gap:.8rem}.lead-form label{display:grid;gap:.25rem;font-weight:800;color:var(--deep)}input,select,textarea{width:100%;min-height:44px;border:1px solid #cfc4bc;border-radius:6px;padding:.65rem;font:inherit;background:#fff}textarea{resize:vertical}.form-note,.note{color:var(--muted);font-size:.93rem}.faq details{background:#fff;border:1px solid var(--line);border-radius:8px;padding:1rem;margin:.75rem 0}.faq summary{cursor:pointer;font-weight:850}.link-grid,.badge-grid{display:flex;flex-wrap:wrap;gap:.7rem}.link-grid a,.badge-grid span{background:#fff;border:1px solid var(--line);border-radius:999px;padding:.55rem .85rem;text-decoration:none;font-weight:800}.cta-band{background:linear-gradient(135deg,var(--soft),var(--blue));border-top:1px solid var(--line);border-bottom:1px solid var(--line);max-width:none;display:flex;justify-content:center;gap:3rem}.cta-band>div{max-width:580px}.resource-grid,.process-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.process-grid span{display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;background:var(--green);color:#fff;border-radius:50%;font-weight:900}.article{max-width:860px}.article .lede{font-size:1.2rem;color:var(--muted)}.article p{font-size:1.05rem}.article-links{margin-top:2rem;display:grid;gap:.75rem}.sample-box{margin-top:1.5rem;padding:1rem;background:var(--soft);border-radius:8px}.site-footer{background:#1f2f29;color:#fff;margin-top:3rem}.footer-grid{max-width:1180px;margin:auto;padding:2.5rem 1rem;align-items:start}.site-footer a{display:block;color:#fff;margin:.35rem 0}.site-footer p{color:#d9e2dc}.whatsapp-float{position:fixed;right:1rem;bottom:1rem;background:#1f8f51;color:#fff;padding:.8rem 1rem;border-radius:999px;text-decoration:none;font-weight:900;box-shadow:0 10px 30px rgba(0,0,0,.22)}.landing-page .site-header{position:relative}
@media (max-width:900px){.map-panel{padding:.35rem}.map-tags text{font-size:15px}.header-inner{align-items:flex-start;flex-direction:column}.main-nav{justify-content:flex-start}.mega-menu{position:static;width:100%;transform:none;opacity:1;visibility:visible;pointer-events:auto;display:none}.nav-item:focus-within .mega-menu,.nav-item:hover .mega-menu{display:block;transform:none}.mega-inner{grid-template-columns:1fr}.mega-links{grid-template-columns:1fr}.hero{min-height:720px}.product-grid,.resource-grid,.process-grid,.image-band{grid-template-columns:1fr}.split-section,.product-hero,.landing-hero,.two-col,.footer-grid{grid-template-columns:1fr}.cta-band{display:block}.product-card img,.image-band img{height:auto}.header-cta{display:none}}
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
@media (max-width:900px){.inquiry-shell,.form-row{grid-template-columns:1fr}.inquiry-page{padding:3rem 1rem}.inquiry-form{padding:1rem}.language-switcher{margin-left:0}.language-menu{left:0;right:auto}.social-float{grid-template-columns:repeat(3,38px);right:1rem;bottom:4.6rem}.footer-social a,.social-float a{width:38px;height:38px}}
`;

const js = `
document.querySelectorAll("[data-lead-form]").forEach((form)=>{
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event:"lead_form_submit",product:data.product,country:data.country,quantity:data.quantity});
    const note = form.querySelector("[data-form-note]");
    note.textContent = "Inquiry captured in this demo. Connect this form to email, CRM or marketing automation before launch.";
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
      await new Promise((resolve)=>setTimeout(resolve, 650));
      status.textContent = "Submitted successfully. Please connect /api/inquiry to email, CRM or database before launch.";
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
writePage("/about/", aboutPage());
writePage("/contact/", contactPage());
writePage("/inquiry/", contactPage("/inquiry/"));
writePage("/resources/", resourcesIndex());
resourcePages.forEach((resource) => writePage(`/resources/${resource.slug}/`, resourcePage(resource)));
landingPages.forEach((lp) => writePage(`/landing/${lp.slug}/`, landingPage(lp)));
writeStatic();
console.log(`Built ${pages.length} pages in ${distDir}`);










