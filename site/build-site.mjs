import fs from "node:fs";
import path from "node:path";

import { buildMarketSites } from "./market-sites.mjs";

const root = process.cwd();
const siteDir = path.join(root, "site");
const distDir = path.join(siteDir, "dist");
const baseUrl = "https://www.lmcakecup.com";
const localeCodes = ["es", "ru", "ar", "pt"];
const defaultLocale = "en";

fs.rmSync(distDir, { recursive: true, force: true });

const company = {
  name: "Jinhua Langmai Daily-Using Co., Ltd.",
  brand: "LANGMAI",
  city: "Jinhua City, Zhejiang Province, China",
  address: "City, Province, China",
  founded: "2006",
  plant: "30,000+ square meters",
  team: "team of 50+",
  position: "Baking paper & food paper packaging manufacturer / custom printing & OEM partner",
  markets: "Middle East, North America, Europe, United Kingdom, South America",
  customers: "Importers, distributors, bakery and confectionery buyers, large supermarkets",
  certificates: ["BSCI", "ISO", "FSC", "LFGB", "DGCCRF", "PFAS-related review"],
  contact: "Wilson Wu",
  email: "wh1007209170@gmail.com",
  phone: "+86 13645700210",
  whatsapp: "+86 13645700210",
};

const newsItems = JSON.parse(fs.readFileSync(path.join(siteDir, "content", "news.json"), "utf8"));

const heroProofPoints = [
  "Low-Odor Custom Printing",
  "EUDR Documentation Support",
  "PFAS-Free Material Options",
  "EU / LFGB / BfR Documentation Support",
];

const buyerAdvantages = [
  ["Low-odor custom ink", "Specially adjusted food-paper printing inks help reduce odor concerns for baking, takeaway and retail packaging."],
  ["EUDR traceability support", "For applicable paper products, sourcing, species, origin, geolocation and batch records can support an EU buyer's due-diligence review."],
  ["European compliance support", "FDA, EU, LFGB, BfR, DGCCRF and PFAS-free documentation can be reviewed or arranged according to the product and destination market."],
  ["Complete processing capability", "Printing, slitting, die-cutting, perforation, bag making and forming help turn food paper into export-ready finished products."],
];

const solutionCategories = [
  ["Baking Cups & Cupcake Liners", "Grease-resistant paper liners in standard, decorative and custom printed formats for bakery, foodservice and retail programs."],
  ["Tulip Muffin Cups", "Tall folded cups for muffins, premium bakery presentation and private-label packs."],
  ["Baking Parchment Paper", "Sheets, rolls and die-cut formats selected around release, grease resistance, temperature and food-contact requirements."],
  ["Air Fryer Paper Liners", "Round, square, flat, perforated and formed liners with retail-pack and private-label support."],
  ["Custom Printed Baking Paper", "Low-odor printing options, artwork control, sample approval and packaging coordination for branded programs."],
  ["Baking Accessories", "Selected paper cake boards, doilies, toppers and related bakery presentation items as supporting categories."],
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
    slug: "baking-parchment-paper",
    title: "Baking Parchment Paper for Wholesale and Private Label",
    short: "Food-contact baking parchment in sheet, roll and die-cut formats for bakery, foodservice, retail and private-label programs.",
    image: "factory-real-roll-line-1600.webp",
    gallery: ["factory-real-roll-line-1600.webp", "factory-real-printing-process-1600.webp", "factory-real-production-team-1600.webp"],
    keywords: "baking parchment paper manufacturer, parchment paper wholesale, private label baking paper",
    material: "Food-contact parchment or silicone-treated baking paper selected for the approved application",
    features: ["Sheet and roll options", "Grease-resistant options", "Release performance review", "Custom dimensions", "Retail packaging support"],
    applications: ["Commercial bakeries", "Foodservice distributors", "Retail baking aisles", "Private-label kitchen products"],
    specs: [],
    headers: [],
  },
  {
    slug: "tulip-muffin-cups",
    title: "Tulip Muffin Cups for Bakery and Retail Programs",
    short: "Tall tulip-style paper baking cups for premium muffins, bakery display, foodservice and custom retail packs.",
    image: "real-cake-cups-stacked.jpg",
    gallery: ["real-cake-cups-stacked.jpg", "muffin-baking-cups-clean.jpg", "real-cake-cups-assortment.jpg"],
    keywords: "tulip muffin cups wholesale, tulip baking cups manufacturer, custom muffin cups",
    material: "Food-contact grease-resistant baking paper selected for the approved size and baking conditions",
    features: ["Tall tulip profile", "Grease-resistant options", "Custom colors and prints", "Bakery display format", "Private-label packing"],
    applications: ["Muffins", "Premium bakery displays", "Cafe counters", "Retail baking packs"],
    specs: [],
    headers: [],
  },
  {
    slug: "custom-printed-baking-paper",
    title: "Custom Printed Baking Paper for Private-Label Buyers",
    short: "Printed baking paper, liners and bakery paper formats with artwork review, low-odor ink options, sampling and export packaging support.",
    image: "factory-real-printing-process-1600.webp",
    gallery: ["factory-real-printing-process-1600.webp", "factory-real-printing-wide-1600.webp", "real-cake-cups-assortment.jpg"],
    keywords: "custom printed baking paper, branded parchment paper, private label baking paper manufacturer",
    material: "Food-contact paper and ink system selected for the approved product, print coverage and destination market",
    features: ["Low-odor ink options", "Artwork and color proofing", "Custom dimensions", "Private-label packaging", "Pre-production sample approval"],
    applications: ["Bakery brands", "Foodservice distributors", "Retail private label", "Promotional and seasonal programs"],
    specs: [],
    headers: [],
  },
  {
    slug: "greaseproof-paper",
    group: "food-wrapping",
    template: "food-wrapping",
    title: "Custom Greaseproof Paper Manufacturer",
    cardTitle: "Greaseproof Paper",
    seoTitle: "Custom Greaseproof Paper Manufacturer & Supplier | LANGMAI",
    short: "Custom greaseproof paper sheets and rolls for bakeries, restaurants, foodservice and private-label brands, with product-specific PFAS and food-contact document review.",
    meta: "Custom greaseproof paper sheets and rolls for bakeries, restaurants, foodservice and private-label brands. PFAS-free material options, printing and food-contact documentation are available.",
    image: "food-wrap-greaseproof.webp",
    keywords: "greaseproof paper manufacturer, custom greaseproof paper, printed greaseproof paper, PFAS-free greaseproof paper, greaseproof paper sheets, greaseproof paper rolls",
    material: "White or natural brown grease-resistant paper, subject to the selected grade and approved specification",
    features: ["Grease-resistant paper", "PFAS-free material options", "Low-odor custom printing", "Custom sheets and rolls", "White and brown paper options", "Private-label packaging"],
    formats: ["White greaseproof paper", "Brown greaseproof paper", "Printed greaseproof paper", "PFAS-free material options", "Greaseproof paper sheets", "Greaseproof paper rolls", "Food basket liners", "Bakery wrapping paper"],
    applications: ["Bakery and pastry wrapping", "Bread and sandwich wrapping", "Burger and fast-food packaging", "Fried chicken and fries", "Food basket and tray liners", "Restaurant presentation", "Custom branded food wrapping"],
    status: "confirmed",
  },
  {
    slug: "burger-wrapping-paper",
    group: "food-wrapping",
    template: "food-wrapping",
    pageType: "application",
    title: "Custom Printed Burger Wrapping Paper",
    cardTitle: "Burger Wrapping Paper",
    seoTitle: "Custom Burger Wrapping Paper Manufacturer | Food-Safe Printing",
    short: "Custom printed burger wrapping paper for hamburgers, sandwiches, burritos, fried chicken, food baskets and takeaway packaging programs.",
    meta: "Custom printed burger wrapping paper for hamburgers, sandwiches, burritos, fried chicken and takeaway food. Low-odor printing, PFAS-free options and private-label packaging are available.",
    image: "food-wrap-burger.webp",
    keywords: "burger wrapping paper manufacturer, custom printed burger paper, hamburger wrapping paper, fast food wrapping paper, sandwich wrapping paper, burger paper sheets",
    material: "Grease-resistant white or natural brown paper developed against the approved food application, print and destination-market requirements",
    features: ["Custom logo printing", "Low-odor food-paper printing", "Grease-resistant paper", "PFAS-free material options", "Custom sheet sizes", "Private-label packaging"],
    formats: ["White printed sheets", "Natural brown printed sheets", "One-color printing", "Two-color printing", "Multicolor printing", "Flat burger paper sheets", "Food basket liner sheets", "Custom repeat patterns"],
    applications: ["Burgers and cheeseburgers", "Sandwiches", "Burritos and wraps", "Fried chicken", "French fries", "Food baskets", "Deli and takeaway packaging"],
    status: "confirmed",
  },
  {
    slug: "wax-paper",
    group: "food-wrapping",
    template: "food-wrapping",
    title: "Food-Grade Wax Paper Manufacturer",
    cardTitle: "Wax Paper",
    seoTitle: "Food-Grade Wax Paper Sheets & Rolls Manufacturer | LANGMAI",
    short: "Wax paper sheets, rolls and interfolded formats for food wrapping, handling, separation, deli counters and private-label retail programs.",
    meta: "Food-grade wax paper sheets, rolls and interfolded paper for bakeries, delis, food separation, wrapping and retail programs. Custom sizes and private-label packaging are available.",
    image: "food-wrap-wax.webp",
    keywords: "food-grade wax paper manufacturer, wax paper sheets, wax paper rolls, interfolded wax paper, deli wax paper, wax paper for food separation, private label wax paper",
    material: "Food-contact paper with a selected single-side or double-side wax coating, subject to the intended use and approved specification",
    features: ["Sheet and roll formats", "Interfolded paper options", "Single-side coating options", "Double-side coating options", "Custom printed options", "Private-label packaging"],
    formats: ["Wax paper sheets", "Wax paper rolls", "Interfolded wax paper", "Single-side wax-coated paper", "Double-side wax-coated paper", "Custom printed wax paper"],
    applications: ["Bakery handling", "Deli food wrapping", "Food separation", "Burger patty separation", "Fruit and vegetable wrapping", "Cheese and cold-food wrapping", "Retail household packs", "Foodservice dispenser boxes"],
    comparison: true,
    status: "confirmed-with-usage-disclaimer",
  },
  {
    slug: "butcher-paper",
    group: "food-wrapping",
    template: "food-wrapping",
    title: "Food-Grade Butcher Paper Manufacturer",
    cardTitle: "Butcher Paper",
    seoTitle: "Food-Grade Butcher Paper Rolls & Sheets Manufacturer | LANGMAI",
    short: "Butcher paper rolls and sheets for meat, seafood, deli, food preparation and custom wrapping projects, with specifications confirmed before approval.",
    meta: "Food-grade butcher paper rolls and sheets for meat, seafood, deli, food preparation and custom packaging. White, brown, printed and other specifications are available upon confirmation.",
    image: "food-wrap-butcher.webp",
    keywords: "butcher paper manufacturer, food-grade butcher paper, butcher paper rolls, butcher paper sheets, white butcher paper, brown butcher paper, printed butcher paper, meat wrapping paper",
    material: "Butcher paper construction to be confirmed by color, grammage, wet strength, coating, food-contact use and destination-market requirements",
    features: ["Roll and sheet development", "White and brown options for confirmation", "Printed options for confirmation", "Custom dimensions", "Private-label packaging", "Product-specific document review"],
    formats: ["Pink butcher paper - verify availability", "White butcher paper - verify availability", "Brown butcher paper - verify availability", "Printed butcher paper - verify availability", "Butcher paper rolls", "Butcher paper sheets"],
    applications: ["Fresh meat wrapping - confirm direct-contact suitability", "Seafood wrapping - confirm intended conditions", "Deli counters", "Food preparation surfaces", "Restaurant and foodservice use", "Custom branded wrapping", "BBQ or smoked-meat use - requires product verification"],
    status: "requires-product-verification",
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

const blogImageMap = {
  "bpa-free-paper-baking-cups": ["blog-bpa-free-paper-baking-cups.webp", "ai-quality-export-packaging.jpg"],
  "how-to-choose-custom-cupcake-liners-wholesale": ["ai-cake-cups-premium.jpg", "ai-quality-export-packaging.jpg"],
  "greaseproof-paper-vs-pet-coated-paper-baking-cups": ["ai-cake-cups-premium.jpg", "ai-quality-export-packaging.jpg"],
  "air-fryer-paper-liners-bulk-buying-guide": ["ai-air-fryer-liners-premium.jpg", "ai-quality-export-packaging.jpg"],
  "paper-straws-wholesale-foodservice-retail-buyers": ["real-paper-straws.jpg", "ai-quality-export-packaging.jpg"],
  "paper-straw-sizes-wholesale-guide": ["real-paper-straws.jpg", "ai-quality-export-packaging.jpg"],
  "private-label-paper-straws-wholesale": ["real-paper-straws.jpg", "ai-quality-export-packaging.jpg"],
  "air-fryer-paper-liners-wholesale-private-label": ["ai-air-fryer-liners-premium.jpg", "ai-quality-export-packaging.jpg"],
  "custom-printed-food-paper-packaging-low-odor-ink": ["blog-custom-printed-food-paper-packaging.webp", "ai-quality-export-packaging.jpg"],
  "eudr-paper-baking-cups-traceability-checklist": ["blog-eudr-paper-traceability.webp", "ai-quality-export-packaging.jpg"],
  "baking-paper-products-quality-control-inspection": ["blog-baking-paper-quality-control.webp", "ai-quality-export-packaging.jpg"],
  "food-contact-testing-paper-baking-cups": ["blog-baking-paper-quality-control.webp", "ai-quality-export-packaging.jpg"],
  "party-paper-supplies-wholesale-retail-range": ["blog-party-paper-supplies-wholesale.webp", "ai-quality-export-packaging.jpg"],
  "cupcake-toppers-wholesale-buyer-guide": ["party-accessories-clean.jpg", "ai-quality-export-packaging.jpg"],
  "private-label-cupcake-liners-retail-packaging": ["blog-private-label-cupcake-liners.webp", "ai-quality-export-packaging.jpg"],
  "muffin-baking-cups-commercial-bakery-guide": ["blog-muffin-baking-cups-commercial-bakery.webp", "ai-quality-export-packaging.jpg"],
  "tulip-baking-cups-vs-standard-muffin-liners": ["ai-cake-cups-premium.jpg", "ai-quality-export-packaging.jpg"],
  "greaseproof-paper-sheets-wholesale-buyer-guide": ["blog-custom-printed-food-paper-packaging.webp", "ai-quality-export-packaging.jpg"],
  "food-grade-wax-paper-wholesale-buyer-guide": ["food-wrap-wax.webp", "ai-quality-export-packaging.jpg"],
  "self-supporting-baking-cups-wholesale-guide": ["real-roll-mouth-cups.jpg", "ai-quality-export-packaging.jpg"],
  "roll-mouth-cake-cups-wholesale": ["real-roll-mouth-cups.jpg", "ai-quality-export-packaging.jpg"],
  "bleached-vs-unbleached-baking-paper": ["blog-bleached-vs-unbleached-baking-paper.webp", "ai-quality-export-packaging.jpg"],
  "baking-parchment-paper-rolls-wholesale": ["blog-bleached-vs-unbleached-baking-paper.webp", "ai-quality-export-packaging.jpg"],
  "paper-baking-cup-manufacturer-audit": ["blog-paper-baking-cup-manufacturer-audit.webp", "ai-quality-export-packaging.jpg"],
  "oven-safe-cupcake-liners-wholesale": ["ai-cake-cups-premium.jpg", "ai-quality-export-packaging.jpg"],
  "non-stick-cupcake-liners-wholesale": ["real-cake-cups-assortment.jpg", "ai-quality-export-packaging.jpg"],
  "silicone-coated-baking-paper-buyer-guide": ["blog-silicone-coated-baking-paper.webp", "ai-quality-export-packaging.jpg"],
  "cake-boards-wholesale-bakery-buyers": ["party-accessories-clean.jpg", "ai-quality-export-packaging.jpg"],
  "burger-wrapping-paper-wholesale-greaseproof-guide": ["blog-custom-printed-food-paper-packaging.webp", "ai-quality-export-packaging.jpg"],
  "parchment-paper-rounds-wholesale-buyer-guide": ["blog-precut-parchment-paper-sheets-wholesale.webp", "ai-quality-export-packaging.jpg"],
  "greaseproof-paper-rolls-wholesale-buyer-guide": ["blog-custom-printed-food-paper-packaging.webp", "ai-quality-export-packaging.jpg"],
  "individually-wrapped-paper-straws-wholesale-guide": ["real-paper-straws.jpg", "ai-quality-export-packaging.jpg"],
  "cupcake-liner-grease-resistance-testing-guide": ["blog-baking-paper-quality-control.webp", "ai-quality-export-packaging.jpg"],
  "custom-printed-greaseproof-paper-wholesale-guide": ["blog-custom-printed-food-paper-packaging.webp", "ai-quality-export-packaging.jpg"],
  "food-paper-packaging-supplier-audit-checklist": ["blog-baking-paper-quality-control.webp", "ai-quality-export-packaging.jpg"],
  "parchment-paper-vs-wax-paper-wholesale-guide": ["blog-precut-parchment-paper-sheets-wholesale.webp", "ai-quality-export-packaging.jpg"],
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
        images: blogImageMap[slug] || [field(section, "Image 1 File"), field(section, "Image 2 File")].filter(Boolean),
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

function marketLocalePath(locale, route) {
  const routes = {
    de: {
      "/": "/de/", "/products/": "/de/produkte/", "/applications/": "/de/anwendungen/", "/customization/": "/de/individuelle-verpackungen/", "/factory-certificates/": "/de/qualitaetskontrolle/", "/compliance/": "/de/lebensmittelkontakt-konformitaet/", "/about/": "/de/ueber-uns/", "/contact/": "/de/kontakt/", "/inquiry/": "/de/muster-anfordern/", "/resources/": "/de/ratgeber/", "/eudr-traceability/": "/de/eudr-rueckverfolgbarkeit/", "/applications/bakery/": "/de/anwendungen/baeckereien-und-konditoreien/", "/applications/food-service/": "/de/anwendungen/gastronomie-und-catering/", "/products/cake-cups/": "/de/produkte/backfoermchen/", "/products/muffin-baking-cups/": "/de/produkte/muffin-backfoermchen/", "/products/roll-mouth-cake-cups/": "/de/produkte/freistehende-papierbackformen/", "/products/baking-parchment-paper/": "/de/produkte/backpapier/", "/products/tulip-muffin-cups/": "/de/produkte/tulpen-backfoermchen/", "/products/air-fryer-paper-liners/": "/de/produkte/airfryer-backpapier/", "/products/greaseproof-paper/": "/de/produkte/fettdichtes-papier/", "/products/paper-straws/": "/de/produkte/papierstrohhalme/",
    },
    fr: {
      "/": "/fr/", "/products/": "/fr/produits/", "/applications/": "/fr/applications/", "/customization/": "/fr/emballages-personnalises/", "/factory-certificates/": "/fr/controle-qualite/", "/compliance/": "/fr/conformite-contact-alimentaire/", "/about/": "/fr/a-propos/", "/contact/": "/fr/contact/", "/inquiry/": "/fr/demande-echantillons/", "/resources/": "/fr/guides/", "/eudr-traceability/": "/fr/tracabilite-eudr/", "/applications/bakery/": "/fr/applications/boulangeries-patisseries/", "/applications/food-service/": "/fr/applications/restauration-et-traiteurs/", "/products/cake-cups/": "/fr/produits/caissettes-de-cuisson/", "/products/muffin-baking-cups/": "/fr/produits/caissettes-a-muffins/", "/products/roll-mouth-cake-cups/": "/fr/produits/moules-de-cuisson-autoportants/", "/products/baking-parchment-paper/": "/fr/produits/papier-cuisson/", "/products/tulip-muffin-cups/": "/fr/produits/caissettes-tulipe/", "/products/air-fryer-paper-liners/": "/fr/produits/papier-pour-air-fryer/", "/products/greaseproof-paper/": "/fr/produits/papier-ingraissable/", "/products/paper-straws/": "/fr/produits/pailles-en-papier/",
    },
  };
  return routes[locale]?.[route] || null;
}

function hreflangTags(route, currentLocale = "") {
  const links = localeCodes
    .map((locale) => `  <link rel="alternate" hreflang="${locale}" href="${baseUrl}${localizedPath(locale, route)}">`)
    .join("\n");
  const markets = ["de", "fr"].map((locale) => {
    const mapped = marketLocalePath(locale, route);
    return mapped ? `  <link rel="alternate" hreflang="${locale}" href="${baseUrl}${mapped}">` : "";
  }).filter(Boolean).join("\n");
  return `  <link rel="alternate" hreflang="en" href="${urlFor(route)}">\n${links}${markets ? `\n${markets}` : ""}\n  <link rel="alternate" hreflang="x-default" href="${urlFor(route)}">`;
}

function languageSwitcher(route = "/") {
  const items = [
    ["en", "English"],
    ["es", "Español"],
    ["ru", "Русский"],
    ["ar", "العربية"],
    ["fr", "Français"],
    ["de", "Deutsch"],
    ["pt", "Português"],
  ];
  return `<div class="language-switcher">
    <button class="language-current" type="button" aria-label="Select language">EN</button>
    <div class="language-menu">
      ${items.map(([code, label]) => {
        const href = code === "en"
          ? route
          : ["de", "fr"].includes(code)
            ? marketLocalePath(code, route) || localizedPath(code, "/")
            : localizedPath(code, route);
        return `<a data-locale-link="${code}" href="${href}">${label}</a>`;
      }).join("")}
    </div>
  </div>`;
}

function layout({ route, title, description, content, schema = [], bodyClass = "" }) {
  const canonical = urlFor(route);
  const performanceHints = route === "/"
    ? `  <link rel="preload" as="image" type="image/webp" href="/assets/home-bakery-banner-1600.webp" imagesrcset="/assets/home-bakery-banner-800.webp 800w, /assets/home-bakery-banner-1600.webp 1600w" imagesizes="100vw" fetchpriority="high">\n`
    : "";
  const schemaText = JSON.stringify(
    [
      organizationSchema(),
      breadcrumbSchema(route, title),
      imageSchema("og.png", "LANGMAI sustainable food paper packaging solutions"),
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
  <meta property="og:image" content="${baseUrl}${relAsset("og.png")}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="${baseUrl}${relAsset("og.png")}">
${performanceHints}  <link rel="stylesheet" href="/styles.css">
  <script type="application/ld+json">${schemaText}</script>
</head>
<body class="${bodyClass}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${siteHeader(route)}
  <main id="main">${content}</main>
  ${siteFooter()}
  <a class="whatsapp-float" href="https://wa.me/8613645700210" aria-label="Chat on WhatsApp">WhatsApp</a>
  ${socialIconLinks("social-float")}
  <script src="/site.js" defer></script>
</body>
</html>`;
}

function siteHeader(route = "/") {
  return `<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="/" aria-label="LANGMAI home">
      <img src="/assets/logo.jpg" width="136" height="46" decoding="async" alt="LANGMAI logo">
    </a>
    <button class="mobile-menu-toggle" type="button" aria-expanded="false" aria-controls="main-navigation">Menu</button>
    <nav id="main-navigation" class="main-nav" aria-label="Main navigation">
      <a class="nav-link simple" href="/products/">Solutions</a>
      <a class="nav-link simple" href="/applications/">Applications</a>
      <a class="nav-link simple" href="/custom-oem/">Custom OEM</a>
      <a class="nav-link simple" href="/compliance/">Compliance</a>
      <a class="nav-link simple" href="/resources/">Resources</a>
      <a class="nav-link simple" href="/about/">About</a>
      <a class="nav-link simple" href="/contact/">Contact</a>
    </nav>
    <a class="header-cta" href="/inquiry/">Request a Quote</a>
    ${languageSwitcher(route)}
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
      <p>${company.brand} manufactures baking paper and food paper packaging for importers, distributors, foodservice operators and private-label brands.</p>
    </div>
    <div>
      <h2>Start Here</h2>
      <a href="/contact/">Request a Quote</a>
      <a href="/contact/#sample">Get Free Sample</a>
      <a href="/products/food-wrapping-paper/">Explore Food Wrapping Paper</a>
      <a href="/custom-oem/">Custom Printing & OEM</a>
      <a href="/factory-certificates/">Factory & Quality</a>
      <a href="/assets/catalog-preview-clean.jpg" target="_blank" rel="noopener">View Catalogue Preview</a>
    </div>
    <div>
      <h2>Factory Facts</h2>
      <p>Founded in ${company.founded}. ${company.plant} manufacturing site. ${company.team}. Document review is product-, scope- and validity-specific; ask for the applicable ${company.certificates.join(", ")} or FDA-related support documents.</p>
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
  return `<section class="cta-band reference-cta">
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
  return `<form id="sample" class="lead-form" data-lead-form>
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

function productCards(items = products) {
  return `<div class="product-grid">${items
    .map(
      (p) => `<article class="product-card">
      <img src="${relAsset(p.image)}" loading="lazy" decoding="async" alt="${esc(p.title)}">
      <div>
        <h3><a href="/products/${p.slug}/">${esc(p.cardTitle || p.title)}</a></h3>
        <p>${esc(p.short)}</p>
        <a class="text-link" href="/products/${p.slug}/">View specs and options</a>
      </div>
    </article>`,
    )
    .join("")}</div>`;
}

function foodWrappingCategoryCard() {
  return `<article class="product-card category-card">
    <img src="/assets/food-wrap-greaseproof.webp" width="1440" height="768" loading="lazy" decoding="async" alt="Greaseproof and food wrapping paper sheets, rolls and basket liners">
    <div>
      <p class="eyebrow">Secondary product line</p>
      <h3><a href="/products/food-wrapping-paper/">Greaseproof & Food Wrapping Paper</a></h3>
      <p>Greaseproof paper, burger wrapping paper, wax paper and butcher paper for bakeries, restaurants, foodservice distributors and private-label packaging programs.</p>
      <a class="text-link" href="/products/food-wrapping-paper/">Explore food wrapping paper</a>
    </div>
  </article>`;
}

function certificateCards(limit = certificateFiles.length) {
  return `<div class="certificate-grid">${certificateFiles
    .slice(0, limit)
    .map(
      (item) => `<article class="certificate-card">
        <a href="/assets/${item.image}" target="_blank" rel="noopener">
          <img src="/assets/${item.image}" loading="lazy" decoding="async" alt="LANGMAI ${esc(item.name)} certificate or test report preview">
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
      <img src="/assets/world-market-map-1200.webp" width="1200" height="800" loading="lazy" decoding="async" alt="LANGMAI export market map from China to North America, Europe, Middle East, South America and Asia">
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
      <video class="home-video" controls loop muted playsinline preload="none" poster="/assets/ai-quality-export-packaging-960.webp" aria-label="LANGMAI vertical product and factory video">
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
  const knowledge = [
    ["PFAS-Free Baking Paper Buyer Guide", "/pfas-free-baking-paper/", "Match material choices and available evidence to the finished food-contact product."],
    ["How to Choose Custom Cupcake Liners", "/resources/choose-custom-cupcake-liners/", "Compare size, material, print, packing and approval requirements."],
    ["Food Paper Certificate Guide", "/resources/food-paper-certificates/", "Understand which documents to review for a product and destination market."],
  ];
  const content = `<section class="home-hero">
    <div class="home-hero-copy">
      <p class="eyebrow">Baking paper & food paper packaging manufacturer</p>
      <h1>Baking paper & food paper packaging manufacturer for global B2B buyers.</h1>
      <p>LANGMAI supplies baking paper, food wrapping paper and paper beverage accessories for importers, distributors, bakeries, cafes and private-label brands. Start with a product brief, sample or drawing; we will confirm the construction before quotation.</p>
      <div class="hero-proof"><span>Food-contact paper formats</span><span>Custom printing & OEM</span><span>PFAS-free options</span><span>Market-specific document review</span></div>
      <div class="hero-actions"><a class="button primary" href="/inquiry/#sample">Request Free Sample</a><a class="button secondary" href="/assets/catalog-preview-clean.jpg" target="_blank" rel="noopener">View Catalogue Preview</a></div>
      <p class="hero-microcopy">Established in ${company.founded} · ${company.plant} site · ${company.team}</p>
    </div>
    <figure class="home-hero-media"><img src="/assets/home-bakery-banner-1600.webp" srcset="/assets/home-bakery-banner-800.webp 800w, /assets/home-bakery-banner-1600.webp 1600w" sizes="100vw" width="1600" height="900" fetchpriority="high" decoding="async" alt="Baking paper, cupcake liners and parchment prepared in a bakery kitchen"><figcaption>Paper formats selected around real baking workflows</figcaption></figure>
  </section>
  <section class="trust-strip" aria-label="LANGMAI trust advantages"><span>Founded in ${company.founded}</span><span>${company.plant} manufacturing site</span><span>Product-specific document support</span><span>OEM and private-label programs</span></section>
  <section class="reference-solutions section"><div class="section-heading"><p class="eyebrow">Solutions for every baking need</p><h2>One-stop paper solutions for bakery production, foodservice and retail.</h2></div><div class="reference-product-grid">
    <a href="/products/cake-cups/"><img src="/assets/home-generated-cups.png" alt="Colorful paper baking cups"><h3>Baking Cups</h3><p>Standard, tulip, muffin and custom shapes</p><strong>Explore →</strong></a>
    <a href="/products/baking-parchment-paper/"><img src="/assets/home-generated-parchment.png" alt="Baking parchment paper"><h3>Baking Parchment Paper</h3><p>Sheets, rolls and die-cut sizes</p><strong>Explore →</strong></a>
    <a href="/products/air-fryer-paper-liners/"><img src="/assets/home-generated-air-fryer.png" alt="Air fryer paper liners"><h3>Air Fryer Liners</h3><p>Round, square and custom shapes</p><strong>Explore →</strong></a>
    <a href="/applications/food-service/"><img src="/assets/home-generated-wrapping.png" alt="Food wrapping paper"><h3>Food Wrapping Paper</h3><p>Greaseproof, wax paper and custom printing</p><strong>Explore →</strong></a>
  </div></section>
  <section class="reference-story split-section"><div><p class="eyebrow">Supporting a better bakery industry</p><h2>Practical paper for real businesses</h2><p>Our baking paper products help bakeries, food manufacturers and foodservice operators improve efficiency, ensure food safety and deliver a better experience.</p><a class="button primary" href="/applications/bakery/">Learn more about our solutions</a></div><figure><img src="/assets/home-generated-story.png" alt="Bakery worker preparing cupcakes"><figcaption>Designed around dependable production and presentation.</figcaption></figure></section>
  <section class="reference-process section"><div class="section-heading"><p class="eyebrow">How we support your business</p><h2>From idea to shelf, we make custom paper solutions simple.</h2></div><div class="reference-steps"><article><span>01</span><img src="/assets/home-generated-needs.png" alt="Buyer reviewing paper samples"><h3>Understand your needs</h3><p>Tell us your product, process and market requirements.</p></article><article><span>02</span><img src="/assets/home-generated-develop.png" alt="Paper cup samples"><h3>Develop the solution</h3><p>Recommend the right paper, structure, printing and packaging.</p></article><article><span>03</span><img src="/assets/home-generated-approve.png" alt="Approved paper packaging sample"><h3>Sample approval</h3><p>Physical samples for your test and confirmation.</p></article><article><span>04</span><img src="/assets/factory-real-converting-1600.webp" alt="LANGMAI real paper converting production line"><h3>Mass production</h3><p>Printing, slitting, die-cutting, forming and packing.</p></article><article><span>05</span><img src="/assets/home-generated-delivery.png" alt="Export cartons ready for delivery"><h3>On-time delivery</h3><p>Careful packing and reliable shipping support.</p></article></div></section>
  <section class="reference-projects section"><div class="section-heading"><p class="eyebrow">Real projects, real results</p><h2>We help global customers bring their baking ideas to life.</h2></div><div class="reference-case-grid"><a href="/cases/"><img src="/assets/home-generated-case-cups.png" alt="Printed cupcake assortment"><span>Europe</span><h3>Custom Printed Baking Cups</h3><p>Private label baking cups for a European retail brand.</p></a><a href="/cases/"><img src="/assets/home-generated-case-parchment.png" alt="Baking parchment on sheet pans"><span>North America</span><h3>Baking Parchment for Foodservice</h3><p>Customized sheet size and packaging for a chain bakery.</p></a><a href="/cases/"><img src="/assets/home-generated-case-air-fryer.png" alt="Air fryer liners"><span>Middle East</span><h3>Air Fryer Liners</h3><p>Private label air fryer liners for a leading household distributor.</p></a></div></section>
  <section class="reference-factory split-section"><div class="factory-photo-stack"><img src="/assets/factory-real-printing-wide-1600.webp" alt="LANGMAI real printing workshop and paper rolls"><img src="/assets/factory-real-roll-line-1600.webp" alt="LANGMAI real slitting and paper roll processing equipment"></div><div><p class="eyebrow">Made in our factory</p><h2>From quality paper to reliable supply</h2><p>Fully integrated production with printing, slitting, die-cutting, forming and packing at our Jinhua factory.</p><div class="reference-stats"><strong>30,000+ m²<small>Factory area</small></strong><strong>20+ years<small>Production experience</small></strong><strong>100+ countries<small>Exported worldwide</small></strong></div><a class="button primary" href="/factory-certificates/">Visit our factory</a></div></section>
  ${ctaBand("Ready to review your next food paper packaging program?")}`;
  return layout({
    route: "/",
    title: "Baking Paper & Food Paper Packaging Manufacturer | LANGMAI",
    description: "LANGMAI manufactures baking paper, food wrapping paper and paper beverage accessories for global B2B buyers, with custom printing, OEM development and product-specific document support.",
    content,
    schema: [websiteSchema()],
    bodyClass: "preview-home",
  });
}

function productsIndex() {
  const bakingProducts = products.filter((product) => product.group !== "food-wrapping" && !["paper-straws", "party-accessories"].includes(product.slug));
  const foodWrappingProducts = products.filter((product) => product.group === "food-wrapping");
  const supportingProducts = products.filter((product) => ["paper-straws", "party-accessories"].includes(product.slug));
  const content = `<section class="products-hero">
    <div><p class="eyebrow">Solutions</p><h1>Baking paper and food paper packaging products.</h1><p>Browse formats by food application, then confirm the material, dimensions, print, pack configuration and destination-market documents with the LANGMAI team.</p><div class="hero-actions"><a class="button primary" href="/inquiry/">Request Product Review</a><a class="button secondary" href="/custom-oem/">Discuss Custom OEM</a></div></div>
    <img src="/assets/real-cake-cups-assortment.jpg" width="1200" height="900" fetchpriority="high" decoding="async" alt="LANGMAI paper baking cups and food packaging formats">
  </section>
  <section class="trust-strip" aria-label="Product range highlights"><span>Bakery paper</span><span>Food wrapping</span><span>Paper straws</span><span>OEM printing</span></section>
  <section class="section" id="baking-paper-products"><div class="section-heading"><p class="eyebrow">Bakery Packaging</p><h2>Cups, liners, parchment and cooking paper</h2><p>Core formats for bakeries, dessert brands, foodservice distributors and private-label retail programs.</p><a class="text-link" href="/products/baking-paper/">Explore all baking paper solutions →</a></div>${productCards(bakingProducts)}</section>
  <section class="section food-wrapping-range"><div class="section-heading"><p class="eyebrow">Food Wrapping</p><h2>Greaseproof paper for takeaway and service</h2><p>Greaseproof, burger, wax and butcher paper formats selected around the approved food application and print requirement.</p><a class="text-link" href="/products/food-wrapping-paper/">View the food wrapping category →</a></div>${productCards(foodWrappingProducts)}</section>
  <section class="section supporting-products"><div class="section-heading"><p class="eyebrow">Beverage & supporting formats</p><h2>Paper straws and selected paper accessories</h2><p>Straight or flexible bendable paper straws and related paper items for beverage, event and seasonal retail programs.</p></div>${productCards(supportingProducts)}</section>
  ${ctaBand("Need a mixed product program or custom printed set?")}`;
  return layout({
    route: "/products/",
    title: "Baking Paper & Food Paper Products | LANGMAI",
    description: "Browse LANGMAI baking cups, parchment, air fryer liners, food wrapping paper and paper straws for B2B buyers, with custom printing and OEM support.",
    content,
  });
}

function foodWrappingLeadForm(product) {
  return `<form class="lead-form wrapping-inquiry-form" data-lead-form>
    <input class="hp-field" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
    <label>Email *<input type="email" name="email" placeholder="buyer@example.com" required></label>
    <label>Product type *<input name="product" value="${esc(product.cardTitle || product.title)}" required></label>
    <label>Food application<input name="foodApplication" placeholder="Bakery wrap, burger, deli, meat..."></label>
    <label>Paper color<input name="paperColor" placeholder="White, natural brown, other"></label>
    <label>Paper grammage<input name="grammage" placeholder="Target gsm or ask us to recommend"></label>
    <label>Sheet or roll<select name="format"><option value="">Select</option><option>Sheet</option><option>Roll</option><option>Interfolded</option><option>Not sure</option></select></label>
    <label>Sheet size / roll dimensions<input name="dimensions" placeholder="Sheet L x W or roll width x length"></label>
    <label>Printing colors<input name="printingColors" placeholder="Unprinted, 1 color, 2 colors, multicolor"></label>
    <label>Food type<input name="foodType" placeholder="Pastry, fried food, burger, fresh meat..."></label>
    <label>Use temperature<input name="useTemperature" placeholder="Expected minimum / maximum"></label>
    <label>Food contact<select name="foodContact"><option value="">Select</option><option>Direct</option><option>Indirect</option><option>Not sure</option></select></label>
    <label>Required documents<input name="documents" placeholder="PFAS, food-contact report, FSC, EUDR..."></label>
    <label>PFAS requirement<input name="pfasRequirement" placeholder="Buyer protocol or destination requirement"></label>
    <label>Destination country *<input name="country" placeholder="United States, Germany, UAE..." required></label>
    <label>Order quantity *<input name="quantity" placeholder="Sheets, rolls, cartons or annual forecast" required></label>
    <label>Retail / master carton requirements<input name="packaging" placeholder="Pack count, dispenser box, labels, cartons..."></label>
    <label>Additional message<textarea name="message" rows="4" placeholder="Artwork, target timing and other requirements"></textarea></label>
    <button class="button primary" type="submit">Request Product Review & Quote</button>
    <p class="form-note" data-form-note>Required: product, destination country, order quantity and email. Technical claims are confirmed against the selected specification.</p>
  </form>`;
}

function foodWrappingCategoryPage() {
  const wrappingProducts = products.filter((product) => product.group === "food-wrapping");
  const faq = [
    ["Which food wrapping paper formats are available?", "The planned range includes greaseproof paper, burger wrapping paper, wax paper and butcher paper in sheet, roll, printed, interfolded or private-label formats where applicable. The exact construction and supply format are confirmed for each inquiry."],
    ["Can food wrapping paper use custom printing?", "Custom printing can be discussed for greaseproof, burger wrapping, wax and butcher paper projects. Artwork, colors, paper grade, ink system, odor expectations and destination-market documents are reviewed before approval."],
    ["Are PFAS-free options available?", "PFAS-free material options can be discussed for applicable constructions. The intended claim and evidence must be matched to the selected paper, coating, print system and finished product."],
    ["Is wax paper suitable for oven baking?", "Wax paper is generally intended for wrapping, handling and separation. It should not replace baking parchment in direct high-temperature oven use unless the selected specification is explicitly confirmed for that application."],
    ["Are all butcher paper colors and performance claims confirmed?", "No. Color, grammage, wet strength, coating, direct food contact, freezer, heat and BBQ suitability must be verified before a product specification or claim is approved."],
  ];
  const content = `<section class="product-hero wrapping-category-hero">
    <div>
      <p class="eyebrow">Secondary product line</p>
      <h1>Food Wrapping Paper for Bakeries, Restaurants and Foodservice</h1>
      <p>LANGMAI manufactures greaseproof paper, custom burger wrapping paper, food-grade wax paper and specification-led butcher paper for bakeries, restaurant chains, foodservice distributors and private-label packaging programs.</p>
      <p>Custom sizes, sheets, rolls, printing and retail packaging can be developed according to the food application and destination-market requirements.</p>
      <div class="hero-actions"><a class="button primary" href="#wrapping-products">Explore Wrapping Papers</a><a class="button secondary" href="/inquiry/">Request Samples & Documents</a></div>
    </div>
    <img src="/assets/food-wrap-greaseproof.webp" width="1440" height="768" decoding="async" alt="Greaseproof and food wrapping paper sheets, rolls and food basket liners">
  </section>
  <section class="trust-strip" aria-label="Food wrapping paper capabilities"><span>Low-Odor Custom Printing</span><span>PFAS-Free Material Options</span><span>Custom Sheets & Rolls</span><span>Private-Label Packaging</span><span>Food-Contact Documentation Support</span></section>
  <section class="section" id="wrapping-products">
    <div class="section-heading"><p class="eyebrow">Product categories</p><h2>Choose by material and food application</h2><p>Greaseproof paper is a material-led category; burger paper is an application and print-led category; wax paper is for wrapping and separation; butcher paper remains specification-led until technical requirements are verified.</p></div>
    ${productCards(wrappingProducts)}
  </section>
  <section class="section evidence-grid">
    <article><h3>Custom converting</h3><p>Confirm flat sheets, rolls, interfolded formats, dispenser packs, food basket liners or custom die-cut requirements.</p></article>
    <article><h3>Printing and private label</h3><p>Coordinate artwork, repeat pattern, colors, proofing, pack count, labels and master cartons against one approved specification.</p></article>
    <article><h3>Product-specific evidence</h3><p>PFAS and food-contact documents are reviewed against the exact paper, coating, ink, finished format and destination market.</p></article>
  </section>
  <section class="section faq"><p class="eyebrow">FAQ</p><h2>Food wrapping paper FAQ</h2>${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
  ${ctaBand("Plan a greaseproof or food wrapping paper program")}`;
  return layout({
    route: "/products/food-wrapping-paper/",
    title: "Food Wrapping Paper Manufacturer for Bakery & Foodservice | LANGMAI",
    description: "Source greaseproof paper, custom burger wrapping paper, food-grade wax paper and butcher paper from LANGMAI. Custom sizes, printing, sheets, rolls and private-label packaging are available.",
    content,
    schema: [faqSchema(faq)],
  });
}

function foodWrappingProductPage(product) {
  const wrappingProducts = products.filter((item) => item.group === "food-wrapping" && item.slug !== product.slug);
  const isButcher = product.slug === "butcher-paper";
  const isBurger = product.slug === "burger-wrapping-paper";
  const isWax = product.slug === "wax-paper";
  const faq = [
    [`Which formats are available for ${product.cardTitle}?`, `Available specifications may include ${product.formats.slice(0, 4).join(", ").toLowerCase()}. Final paper grade, construction, dimensions and packaging are subject to confirmation.`],
    ["Can LANGMAI provide custom sizes and printing?", "Yes, for applicable specifications. Send the sheet or roll dimensions, artwork, colors, food use, order quantity and packaging requirements for review and sample planning."],
    ["How are PFAS and food-contact documents confirmed?", "Documents and any third-party testing are reviewed against the selected paper, coating, ink system, finished format, intended food contact and destination market. One report should not be assumed to cover every construction."],
    ["What information is required for a quote?", "Send the product, food application, paper color and grammage if known, sheet or roll dimensions, printing, destination country, order quantity, food-contact conditions and required documents."],
  ];
  if (isWax) faq.splice(1, 0, ["Can wax paper replace baking parchment?", "Wax paper is generally used for wrapping, handling, separation and moisture resistance. It should not be used as a substitute for baking parchment in direct high-temperature oven applications unless the selected specification is confirmed for that use."]);
  if (isButcher) faq.splice(1, 0, ["Is this butcher paper confirmed for BBQ, freezer or direct fresh-meat contact?", "Not yet as a blanket claim. Color, grammage, wet strength, coating, direct-contact suitability, freezer conditions, heat resistance, PFAS status and available reports must be verified for the selected specification before approval."]);
  const statusLabel = isButcher ? "Requires product verification" : isWax ? "Confirmed with usage disclaimer" : "Confirmed product category";
  const content = `<section class="product-hero wrapping-product-hero">
    <div>
      <p class="eyebrow">Food wrapping paper · ${esc(statusLabel)}</p>
      <h1>${esc(product.title)}</h1>
      <p>${esc(product.short)}</p>
      <div class="hero-actions"><a class="button primary" href="#quote">Request a Quote</a><a class="button secondary" href="/products/food-wrapping-paper/">View Wrapping Paper Range</a></div>
    </div>
    <img src="/assets/${product.image}" width="1440" height="${product.slug === "greaseproof-paper" ? "768" : "960"}" decoding="async" alt="${esc(product.cardTitle)} sheets, rolls and food wrapping applications">
  </section>
  <section class="trust-strip">${product.features.map((item) => `<span>${esc(item)}</span>`).join("")}</section>
  ${isButcher ? `<section class="section verification-alert"><p class="eyebrow">Specification gate</p><h2>Performance claims remain subject to product verification</h2><p>Before production or marketing approval, confirm available colors, grammage, wet strength, coating status, food-contact suitability, freezer conditions, direct fresh-meat contact, BBQ or smoker suitability, heat resistance, PFAS status, reports, roll widths and sheet sizes. The catalogue is a visual reference and does not replace product-level confirmation.</p></section>` : ""}
  <section class="section two-col wrapping-overview">
    <div><p class="eyebrow">${isBurger ? "Application and printing" : "Materials and formats"}</p><h2>${isBurger ? "Build the wrap around the restaurant program" : "Available formats may include"}</h2><p><strong>Material:</strong> ${esc(product.material)}.</p><div class="badge-grid">${product.formats.map((item) => `<span>${esc(item)}</span>`).join("")}</div></div>
    <div><p class="eyebrow">Applications</p><h2>Intended uses to confirm</h2><ul class="check-list">${product.applications.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></div>
  </section>
  ${isWax ? `<section class="section wax-comparison"><div class="section-heading"><p class="eyebrow">Material selection</p><h2>Wax Paper vs. Baking Parchment</h2></div><div class="two-col"><article><h3>Wax paper</h3><p>Wax paper is generally used for wrapping, separation and moisture resistance.</p></article><article><h3>Baking parchment</h3><p>Baking parchment is designed for nonstick baking and higher-temperature cooking applications.</p></article></div><p class="note"><strong>Use reminder:</strong> Wax paper is intended for food wrapping, handling and separation applications. It should not be used as a substitute for baking parchment in direct high-temperature oven applications unless the selected specification has been confirmed for that use.</p><a class="text-link" href="/products/baking-parchment-paper/">Review baking parchment</a></section>` : ""}
  <section class="section specification-review">
    <div class="section-heading"><p class="eyebrow">Technical specification</p><h2>Confirm requirements before ordering</h2><p>Available specifications may include custom sizes, colors, coatings, printing and packaging. All performance data remains subject to the selected paper grade and approved finished construction.</p></div>
    <div class="table-wrap"><table><thead><tr><th>Parameter</th><th>Buyer input</th><th>Approval status</th></tr></thead><tbody>
      <tr><td>Paper construction</td><td>Color, grade, coating or treatment, grammage</td><td>Confirm by selected specification</td></tr>
      <tr><td>Format</td><td>Sheet size or roll width and length</td><td>Confirm by quotation and sample</td></tr>
      <tr><td>Food use</td><td>Food type, contact time, temperature, direct or indirect contact</td><td>Product-specific review</td></tr>
      <tr><td>Printing</td><td>Artwork, colors, coverage and odor expectations</td><td>Proof and sample approval</td></tr>
      <tr><td>Compliance</td><td>Destination country, buyer protocol and required reports</td><td>Document-scope review</td></tr>
      <tr><td>Packaging</td><td>Pack count, dispenser or retail pack, label and master carton</td><td>Approved packing specification</td></tr>
    </tbody></table></div>
  </section>
  <section class="section pfas-product-module"><div><p class="eyebrow">PFAS information</p><h2>PFAS-Free Material Options</h2><p>Applicable PFAS-free material options are confirmed for the exact paper, coating, print system and finished construction. Available supplier declarations or product-specific third-party testing can be discussed according to the buyer protocol.</p><a class="text-link" href="/pfas-free-baking-paper/">Review the PFAS evidence process</a></div><div class="buyer-checklist"><h3>Food-contact documentation</h3><p>Confirm the intended food, contact conditions, destination market and exact tested sample. Document availability and scope are reviewed before an order claim is approved.</p><a class="button secondary" href="/factory-certificates/#food-contact">Review compliance workflow</a></div></section>
  <section class="section two-col"><div><p class="eyebrow">OEM and private label</p><h2>From artwork to export carton</h2><ol class="process-list"><li>Define material, application and dimensions</li><li>Review artwork, colors and print coverage</li><li>Approve a representative product and packaging sample</li><li>Confirm pack count, labels and master cartons</li><li>Link the final order to the approved specification</li></ol></div><div><p class="eyebrow">Packaging options</p><h2>Plan the selling format</h2><ul class="check-list"><li>Bulk sheets or rolls</li><li>Interfolded or dispenser formats where applicable</li><li>Retail pack counts and private-label artwork</li><li>Inner packs, labels and master cartons</li><li>Pallet and container information upon request</li></ul></div></section>
  <section class="section two-col" id="quote"><div><p class="eyebrow">Quote request</p><h2>Send a product-level brief</h2><p>Please confirm technical requirements before ordering. The detailed form helps LANGMAI check material, converting, printing, documents and packaging together.</p></div>${foodWrappingLeadForm(product)}</section>
  <section class="section faq"><p class="eyebrow">FAQ</p><h2>${esc(product.cardTitle)} FAQ</h2>${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
  <section class="section"><h2>Related food wrapping paper</h2><div class="link-grid">${wrappingProducts.map((item) => `<a href="/products/${item.slug}/">${esc(item.cardTitle)}</a>`).join("")}<a href="/products/food-wrapping-paper/">Food Wrapping Paper Overview</a><a href="/contact/">Contact LANGMAI</a></div></section>`;
  return layout({
    route: `/products/${product.slug}/`,
    title: product.seoTitle,
    description: product.meta,
    content,
    schema: [productSchema(product), faqSchema(faq)],
  });
}

function premiumSpecTable(headers, rows) {
  return `<div class="table-wrap premium-spec-table"><table><thead><tr>${headers.map((heading) => `<th>${esc(heading)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function premiumFeatureGrid(items) {
  return `<div class="premium-feature-grid">${items.map(([number, title, text]) => `<article><span>${esc(number)}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div>`;
}

function premiumApplicationGrid(items) {
  return `<div class="premium-application-grid">${items.map(([title, text]) => `<article><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div>`;
}

function cakeCupsProductPage(product) {
  const title = "Custom Cake Cups Manufacturer for Global Bakery Brands";
  const faq = [
    ["Are LANGMAI cake cups food safe?", "LANGMAI can provide cake cups made with food-contact paper selected for the approved bakery application. The exact paper, print system, use conditions and available documents are confirmed for each specification before order approval."],
    ["Can cake cup sizes be customized?", "Yes. Buyers can select a reference size or send a drawing, sample or target dimensions. Top diameter, base diameter, height, paper construction and packing are reviewed together."],
    ["Can you print our logo or pattern?", "Yes. Custom colors, patterns and brand artwork can be developed after artwork review, color proofing and pre-production sample approval."],
    ["Are PFAS-free options available?", "Intentionally added PFAS-free paper options can be discussed for the selected cake cup construction. Any declaration or test evidence must be matched to the exact material and finished product supplied."],
    ["What information is needed for a quote?", "Please send the cup dimensions, intended baked product, oven conditions, print artwork, pack count, destination market and estimated order quantity."],
  ];
  const content = `<section class="premium-product-hero cake-cups-premium">
    <div class="premium-hero-copy">
      <p class="eyebrow">Bakery packaging · OEM manufacturing</p>
      <h1>${title}</h1>
      <p>LANGMAI develops food-contact paper cake cups and cupcake liners for bakeries, dessert brands, food manufacturers and private-label programs worldwide.</p>
      <div class="premium-trust"><span>Food-contact paper options</span><span>11 reference sizes</span><span>Custom colors & prints</span><span>Private-label packing</span></div>
      <div class="hero-actions"><a class="button primary" href="#quote">Request Product Sample</a><a class="button secondary" href="#quote">Get Factory Quote</a></div>
    </div>
    <div class="premium-hero-media"><img src="/assets/ai-cake-cups-premium.jpg" width="1200" height="800" fetchpriority="high" decoding="async" alt="Premium cupcakes and muffins presented in LANGMAI paper cake cups"><span>Bakery-ready presentation</span></div>
  </section>
  <section class="section premium-overview">
    <div class="section-heading"><p class="eyebrow">Product overview</p><h2>Food-Grade Cake Cups Designed for Professional Baking</h2><p>Cake cups support baking performance, handling and final product presentation. LANGMAI reviews paper selection, grease resistance, dimensions, printing and packing as one approved specification.</p></div>
    ${premiumFeatureGrid([
      ["01", "Food-Contact Paper Selection", "Paper and print systems are selected against the intended cake, baking conditions and destination-market review."],
      ["02", "Heat & Grease Performance", "Cup geometry and material construction are sampled for shape retention, release and visible grease performance."],
      ["03", "Custom Brand Presentation", "Logo, patterns, brand colors and seasonal artwork are supported with proofing before mass production."],
      ["04", "Flexible Size & Packing", "Reference sizes, custom dimensions, inner packs, retail formats and export cartons can be quoted together."],
    ])}
  </section>
  <section class="section premium-applications">
    <div class="section-heading"><p class="eyebrow">Applications</p><h2>Packaging Built Around Bakery Workflows</h2></div>
    ${premiumApplicationGrid([
      ["Bakeries", "Cupcake and muffin formats for artisan bakeries, central kitchens and multi-site bakery chains."],
      ["Dessert Brands", "Consistent presentation for premium cakes, sweet products and seasonal collections."],
      ["Cafes", "Counter-ready formats for coffee shops, takeaway desserts and branded service programs."],
      ["Food Manufacturers", "Repeatable specifications, carton planning and inspection support for larger production programs."],
    ])}
  </section>
  <section class="section premium-split premium-oem-section">
    <img src="/assets/real-cake-cups-assortment.jpg" loading="lazy" decoding="async" alt="Custom colors and patterns available for LANGMAI cake cups">
    <div><p class="eyebrow">Customization</p><h2>Create Your Own Branded Cake Cups</h2><p>Every bakery program starts with a different product, line speed and selling format. LANGMAI connects the cup specification with artwork and packing from the beginning.</p>
      <ul class="check-list"><li>Top, base and height customization</li><li>Paper construction selected for the intended use</li><li>Logo, pattern and color development</li><li>Bulk, inner-pack or private-label retail packing</li><li>Pre-production sample and bulk inspection planning</li></ul>
      <a class="text-link" href="/custom-oem/">Review the five-step OEM process</a>
    </div>
  </section>
  <section class="section premium-specifications">
    <div class="section-heading"><p class="eyebrow">Technical specifications</p><h2>Reference Cake Cup Sizes for RFQ Planning</h2><p>Use these rows to shortlist a format. Final tolerances, material, color, print, pack count and oven performance are confirmed by quotation and approved sample.</p></div>
    ${premiumSpecTable(["Top Diameter", "Base Diameter", "Height", "Reference Packing"], product.specs)}
    <p class="note">Reference packing is not a universal order promise. Carton configuration can change with paper, print, pack count and destination requirements.</p>
  </section>
  <section class="section premium-compliance">
    <div><p class="eyebrow">Compliance & sustainability</p><h2>Evidence Matched to the Approved Construction</h2><p>Food-contact and PFAS-related support is reviewed for the exact paper, ink, finished cup and destination market. Certificate names shown on the website do not mean every cake cup carries every certification.</p><div class="hero-actions"><a class="button secondary" href="/compliance/">Visit Compliance Center</a><a class="button secondary" href="/pfas-free-baking-paper/">Review PFAS-Free Options</a></div></div>
    <div class="premium-evidence"><h3>Buyer review checklist</h3><ul class="check-list"><li>Intended food and contact conditions</li><li>Baking temperature and duration</li><li>Paper, coating and print system</li><li>EU, LFGB, BfR or other requested scope</li><li>Report identity, validity and tested sample</li></ul></div>
  </section>
  <section class="section premium-split premium-factory">
    <div><p class="eyebrow">Production capability</p><h2>A Reliable Cake Cup Manufacturing Partner</h2><p>From incoming paper and artwork checks to forming, packing and final inspection, production records are tied to the approved product specification.</p><ol class="compact-process"><li>Material review</li><li>Print proofing</li><li>Cup forming</li><li>Quality inspection</li><li>Export packing</li></ol></div>
    <img src="/assets/factory-workshop.jpg" loading="lazy" decoding="async" alt="LANGMAI food paper packaging production workshop">
  </section>
  <section class="section premium-rfq" id="quote">
    <div><p class="eyebrow">Sample & quotation</p><h2>Tell Us What You Need to Bake and Sell</h2><p>For a useful sample and quote, include cup dimensions, bakery application, oven conditions, print coverage, pack count, destination and estimated quantity.</p></div>
    ${leadForm("Custom Cake Cups")}
  </section>
  <section class="section faq"><p class="eyebrow">FAQ</p><h2>Cake Cups Buyer FAQ</h2>${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
  <section class="section"><h2>Related Bakery Packaging</h2><div class="link-grid"><a href="/products/muffin-baking-cups/">Muffin Baking Cups</a><a href="/products/tulip-muffin-cups/">Tulip Muffin Cups</a><a href="/products/custom-printed-baking-paper/">Custom Printed Baking Paper</a><a href="/applications/bakery/">Bakery Packaging Solutions</a></div></section>`;
  return layout({
    route: "/products/cake-cups/",
    title: "Custom Cake Cups Manufacturer | Cupcake Liners Supplier | LANGMAI",
    description: "LANGMAI manufactures custom food-contact paper cake cups and cupcake liners for bakeries, dessert brands and food manufacturers, with OEM sizes, printing and packing.",
    content,
    schema: [productSchema({ ...product, title, short: "Custom food-contact paper cake cups and cupcake liners with OEM size, print and packing support." }), faqSchema(faq)],
    bodyClass: "premium-product-page",
  });
}

function bakingPaperHubPage() {
  const faq = [
    ["Is every LANGMAI baking paper PFAS-free?", "No blanket claim is made for every construction. Intentionally added PFAS-free options can be discussed and supporting declarations or product-specific evidence reviewed for the exact paper, coating, print and finished format."],
    ["Can baking paper sizes be customized?", "Yes. Sheets, rolls, die-cut liners and retail pack dimensions can be developed around trays, ovens, air fryers, foodservice use and private-label requirements."],
    ["Can LANGMAI provide private-label packaging?", "Yes. Retail boxes, roll packaging, inner packs, labels and export cartons can be developed after format, artwork, pack count and destination requirements are confirmed."],
    ["What temperature can the baking paper withstand?", "Temperature performance depends on the selected paper, coating, contact conditions and duration. LANGMAI confirms the intended use and product-specific evidence instead of publishing one temperature for every format."],
    ["Which markets can LANGMAI support?", "LANGMAI works with international buyers. Food-contact, PFAS and labeling requirements are reviewed against the exact destination market and approved product specification."],
  ];
  const content = `<section class="premium-product-hero baking-paper-premium">
    <div class="premium-hero-copy">
      <p class="eyebrow">Baking paper product family</p>
      <h1>PFAS-Free Baking Paper Solutions for Global Food Brands</h1>
      <p>LANGMAI supplies parchment, air fryer liners, pre-cut sheets and custom printed baking paper for bakery, foodservice, food manufacturing and private-label programs.</p>
      <div class="premium-trust"><span>PFAS-free options</span><span>Food-contact material review</span><span>Custom sizes & packing</span><span>Global OEM support</span></div>
      <div class="hero-actions"><a class="button primary" href="#quote">Request Product Sample</a><a class="button secondary" href="#quote">Get Factory Quote</a></div>
    </div>
    <div class="premium-hero-media"><img src="/assets/blog-baking-paper-quality-control.webp" width="1200" height="800" fetchpriority="high" decoding="async" alt="Baking paper quality review for professional food preparation"><span>Specification-led supply</span></div>
  </section>
  <section class="section premium-overview">
    <div class="section-heading"><p class="eyebrow">Product overview</p><h2>High-Performance Baking Paper for Modern Food Preparation</h2><p>The right baking paper depends on food, temperature, contact duration, release expectations and selling format. LANGMAI turns those requirements into a sample-ready paper, coating, size and pack specification.</p></div>
    ${premiumFeatureGrid([
      ["01", "Release Performance", "Material options are reviewed for the intended cakes, cookies, bread, pastries or prepared foods."],
      ["02", "Heat-Use Review", "Oven, air fryer and preparation conditions are confirmed for the exact construction and contact duration."],
      ["03", "Grease Management", "Paper grade and surface treatment are selected to support product appearance and handling cleanliness."],
      ["04", "PFAS-Free Options", "Intentionally added PFAS-free options and available evidence can be matched to the selected finished product."],
    ])}
  </section>
  <section class="section baking-family-section" id="product-types">
    <div class="section-heading"><p class="eyebrow">Product types</p><h2>Complete Baking Paper Solutions</h2><p>Use this page to select a family, then open the format-specific page for detailed sourcing information.</p></div>
    <div class="baking-family-grid">
      <a href="/products/baking-parchment-paper/"><img src="/assets/blog-silicone-coated-baking-paper.webp" loading="lazy" decoding="async" alt="Baking parchment paper sheets and rolls"><div><span>01</span><h3>Baking Parchment Paper</h3><p>Sheet and roll options for cakes, cookies, bread and pastry production.</p><strong>View parchment paper →</strong></div></a>
      <a href="/products/air-fryer-paper-liners/"><img src="/assets/ai-air-fryer-liners-premium.jpg" loading="lazy" decoding="async" alt="Round and square air fryer paper liners"><div><span>02</span><h3>Air Fryer Paper Liners</h3><p>Round and square formats for foodservice, retail and private-label programs.</p><strong>View air fryer liners →</strong></div></a>
      <a href="/products/baking-parchment-paper/"><img src="/assets/blog-precut-parchment-paper-sheets-wholesale.webp" loading="lazy" decoding="async" alt="Pre-cut parchment paper sheets for commercial bakeries"><div><span>03</span><h3>Pre-Cut Baking Sheets</h3><p>Ready-to-use dimensions for repeat trays, bakery lines and food preparation.</p><strong>Plan pre-cut sheets →</strong></div></a>
      <a href="/products/custom-printed-baking-paper/"><img src="/assets/blog-custom-printed-food-paper-packaging.webp" loading="lazy" decoding="async" alt="Custom printed baking paper for branded food packaging"><div><span>04</span><h3>Custom Printed Baking Paper</h3><p>Artwork, pattern and private-label development for brand-led programs.</p><strong>View printed paper →</strong></div></a>
    </div>
  </section>
  <section class="section premium-applications">
    <div class="section-heading"><p class="eyebrow">Applications</p><h2>Designed for Professional Food Applications</h2></div>
    ${premiumApplicationGrid([
      ["Bakeries", "Tray lining, cake production, bread, cookies, pastries and repeat commercial workflows."],
      ["Restaurants", "Oven cooking, food preparation, takeaway and back-of-house foodservice use."],
      ["Food Manufacturers", "Specification-led sheets and liners for industrial baking and prepared-food programs."],
      ["Retail Brands", "Consumer rolls, sheets and air fryer packs with private-label artwork and carton planning."],
    ])}
  </section>
  <section class="section premium-split premium-oem-section">
    <img src="/assets/ai-quality-export-packaging.jpg" loading="lazy" decoding="async" alt="Private-label baking paper packing and export preparation">
    <div><p class="eyebrow">Customization</p><h2>Build the Format Around Your Product and Market</h2><p>Send a current item, target drawing or buying specification. LANGMAI will review the paper and converting requirements before sampling.</p><ul class="check-list"><li>Paper grade and surface construction</li><li>Sheet, roll, die-cut or liner format</li><li>Tray, oven, air fryer or retail dimensions</li><li>Print artwork and brand presentation</li><li>Retail pack, inner pack and export carton</li></ul><a class="text-link" href="/custom-oem/">Explore Custom OEM</a></div>
  </section>
  <section class="section premium-specifications">
    <div class="section-heading"><p class="eyebrow">Technical specification</p><h2>Five Inputs Needed for a Quote-Ready Baking Paper Brief</h2></div>
    ${premiumFeatureGrid([
      ["01", "Construction", "White or natural paper, coating or treatment, grammage and requested evidence."],
      ["02", "Format", "Roll, sheet, pre-cut, round, square, die-cut or another approved shape."],
      ["03", "Dimensions", "Width, length, diameter, wall height, roll core and dimensional tolerances."],
      ["04", "Use Conditions", "Food type, direct contact, temperature, duration, grease and release expectations."],
      ["05", "Selling Pack", "Bulk carton, retail box, dispenser, label, pack count, pallet and destination."],
    ])}
  </section>
  <section class="section premium-compliance" id="pfas-options">
    <div><p class="eyebrow">Food safety & sustainability</p><h2>PFAS and Food-Contact Support at Product Level</h2><p>PFAS-free, FDA-market, EU, LFGB or BfR support must be checked against the finished construction and requested use. LANGMAI can organize available declarations and reports for buyer review without treating one document as universal coverage.</p><div class="hero-actions"><a class="button secondary" href="/pfas-free-baking-paper/">PFAS-Free Program</a><a class="button secondary" href="/compliance/">Compliance Center</a></div></div>
    <div class="premium-evidence"><h3>Evidence alignment</h3><ul class="check-list"><li>Exact paper and coating identity</li><li>Printed or unprinted finished format</li><li>Food, temperature and contact duration</li><li>Destination-market protocol</li><li>Report date and sample linkage</li></ul></div>
  </section>
  <section class="section premium-split premium-factory">
    <div><p class="eyebrow">Manufacturing capability</p><h2>From Paper Selection to Finished Packing</h2><p>Converting, cutting, forming, packing and inspection are planned around an approved sample and order specification.</p><ol class="compact-process"><li>Material review</li><li>Sample conversion</li><li>Cutting & forming</li><li>Quality inspection</li><li>Export packing</li></ol></div>
    <img src="/assets/factory-clean.jpg" loading="lazy" decoding="async" alt="LANGMAI clean food paper packaging production area">
  </section>
  <section class="section premium-rfq" id="quote"><div><p class="eyebrow">Sample & quotation</p><h2>Start with the Food, Format and Destination</h2><p>Tell us what you are cooking or baking, the required size, use conditions, packing format, destination and order estimate. We will route the inquiry to the correct product family.</p></div>${leadForm("Baking Paper Solutions")}</section>
  <section class="section faq"><p class="eyebrow">FAQ</p><h2>Baking Paper Buyer FAQ</h2>${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
  <section class="section"><h2>Continue Your Product Review</h2><div class="link-grid"><a href="/products/baking-parchment-paper/">Baking Parchment Paper</a><a href="/products/air-fryer-paper-liners/">Air Fryer Paper Liners</a><a href="/products/custom-printed-baking-paper/">Custom Printed Baking Paper</a><a href="/applications/bakery/">Bakery Applications</a></div></section>`;
  return layout({
    route: "/products/baking-paper/",
    title: "Baking Paper Manufacturer | Parchment & PFAS-Free Options | LANGMAI",
    description: "Explore LANGMAI baking paper solutions including parchment, air fryer liners, pre-cut sheets and custom printed formats, with PFAS-free options and OEM support.",
    content,
    schema: [faqSchema(faq)],
    bodyClass: "premium-product-page",
  });
}

function paperStrawsProductPage(product) {
  const title = "Custom Paper Straw Solutions for Global Beverage Brands";
  const faq = [
    ["Are LANGMAI paper straws suitable for food contact?", "Food-contact paper and print systems can be selected for the approved beverage application. Buyers should confirm the drink, temperature, contact duration, destination and required documents before approval."],
    ["Can paper straw printing be customized?", "Yes. Logo, patterns and brand colors can be reviewed for straight, bendable and selected larger-diameter formats, subject to artwork and sample approval."],
    ["Do you produce bendable paper straws?", "Yes. Flexible bendable paper straw constructions are available. Confirm diameter, length, beverage, packing and order quantity so LANGMAI can prepare the appropriate sample."],
    ["Are individual wrapping and retail packs available?", "Packing options can be discussed for each project. Bulk packs, wrapping format, retail presentation, labels and cartons must be confirmed in the quotation rather than assumed for every size."],
    ["How long do the straws remain firm in a drink?", "Performance depends on the beverage, temperature, acidity, ice, diameter and contact time. Share the intended drink and target use duration so the selected construction can be sampled under relevant conditions."],
  ];
  const content = `<section class="premium-product-hero paper-straws-premium">
    <div class="premium-hero-copy">
      <p class="eyebrow">Beverage packaging · OEM manufacturing</p>
      <h1>${title}</h1>
      <p>LANGMAI supplies straight, flexible bendable, jumbo and custom printed paper straw options for cafes, restaurants, beverage brands and foodservice programs.</p>
      <div class="premium-trust"><span>Food-contact paper options</span><span>Straight & bendable styles</span><span>Custom print review</span><span>OEM packaging</span></div>
      <div class="hero-actions"><a class="button primary" href="#quote">Request Product Sample</a><a class="button secondary" href="#quote">Get Factory Quote</a></div>
    </div>
    <div class="premium-hero-media"><img src="/assets/banner-paper-straws-1448.webp" width="1448" height="1086" fetchpriority="high" decoding="async" alt="Colorful custom paper straws for beverage brands and cafes"><span>Plastic-reduction option</span></div>
  </section>
  <section class="section premium-overview">
    <div class="section-heading"><p class="eyebrow">Product overview</p><h2>Paper Straw Programs Built Around the Beverage</h2><p>A reliable paper straw specification starts with the drink, cup, use duration and customer experience. LANGMAI reviews those conditions before recommending structure, diameter, length, print and packing.</p></div>
    ${premiumFeatureGrid([
      ["01", "Food-Contact Material Review", "Paper, adhesive and print choices are reviewed against the approved beverage application and destination."],
      ["02", "Performance Sampling", "The drink, temperature, acidity, ice and target duration are used to select and test the construction."],
      ["03", "Custom Brand Capability", "Patterns, colors and logo concepts can be developed with artwork review and pre-production approval."],
      ["04", "Plastic-Reduction Support", "Paper-based formats can support a brand's plastic-reduction program while performance is verified for actual use."],
    ])}
  </section>
  <section class="section straw-types-section">
    <div class="section-heading"><p class="eyebrow">Paper straw types</p><h2>Straight, Bendable, Jumbo and Printed Options</h2></div>
    <div class="straw-type-grid">
      <article><span>01</span><h3>Straight Paper Straws</h3><p>Standard formats for water, soft drinks, juice and cafe beverage programs.</p></article>
      <article class="featured"><span>02</span><h3>Flexible Bendable Paper Straws</h3><p>Confirmed bendable capability for milk drinks, children's beverages and convenient drinking angles.</p></article>
      <article><span>03</span><h3>Jumbo Paper Straws</h3><p>Larger-diameter options for smoothies and thicker beverages, subject to drink-flow sampling.</p></article>
      <article><span>04</span><h3>Custom Printed Paper Straws</h3><p>Brand colors and patterns for promotions, premium beverage launches and private-label packs.</p></article>
    </div>
  </section>
  <section class="section premium-applications">
    <div class="section-heading"><p class="eyebrow">Applications</p><h2>Designed for Beverage and Foodservice Programs</h2></div>
    ${premiumApplicationGrid([
      ["Coffee Shops", "Cafe chains and independent brands ordering service straws or custom-branded beverage accessories."],
      ["Beverage Brands", "Juice, soft drink and functional beverage programs needing repeat print and pack specifications."],
      ["Restaurants", "Dine-in and takeaway paper straw formats for foodservice operations and distributors."],
      ["Events & Promotions", "Custom patterns and campaign artwork for launches, events and seasonal programs."],
    ])}
  </section>
  <section class="section premium-split premium-oem-section">
    <img src="/assets/real-paper-straws.jpg" loading="lazy" decoding="async" alt="LANGMAI straight and custom colored paper straw assortment">
    <div><p class="eyebrow">Customization</p><h2>Create a Paper Straw Specification for Your Brand</h2><p>The best result comes from reviewing the drink and the selling format together. Flexible bendable designs can be included in the sampling brief.</p><ul class="check-list"><li>Straight or flexible bendable construction</li><li>Diameter and length</li><li>Drink type and target use duration</li><li>Logo, pattern and color review</li><li>Bulk, wrapped or retail packing discussion</li></ul><a class="text-link" href="/custom-oem/">Review Custom OEM</a></div>
  </section>
  <section class="section premium-specifications">
    <div class="section-heading"><p class="eyebrow">Technical specifications</p><h2>Reference Straight Straw Sizes</h2><p>These are current reference straight-straw rows. Flexible bendable, printed and other formats are quoted after drink, dimensions and packing are confirmed.</p></div>
    ${premiumSpecTable(["Diameter", "Length", "Reference Packing"], product.specs)}
    <p class="note">Reference dimensions and packing are planning information. Finished structure, tolerances, print, wrapping and carton configuration require an approved quotation and sample.</p>
  </section>
  <section class="section premium-compliance">
    <div><p class="eyebrow">Food safety & sustainability</p><h2>Support Plastic Reduction Without Blanket Claims</h2><p>Paper straws can support a brand's plastic-reduction strategy. Material origin, recyclability, biodegradability or compostability should only be claimed when the exact finished construction and destination rules support that statement.</p><div class="hero-actions"><a class="button secondary" href="/compliance/">Visit Compliance Center</a><a class="button secondary" href="/applications/cafe/">Cafe Packaging Solutions</a></div></div>
    <div class="premium-evidence"><h3>Confirm for sampling</h3><ul class="check-list"><li>Beverage and serving temperature</li><li>Target contact duration</li><li>Straight or bendable structure</li><li>Paper, adhesive and print requirements</li><li>Destination and requested documents</li></ul></div>
  </section>
  <section class="section premium-split premium-factory">
    <div><p class="eyebrow">Production capability</p><h2>A Repeatable Paper Straw Supply Process</h2><p>Material preparation, printing, forming, packing and inspection are planned against the approved sample and order specification.</p><ol class="compact-process"><li>Material review</li><li>Artwork proof</li><li>Straw forming</li><li>Performance check</li><li>Export packing</li></ol></div>
    <img src="/assets/ai-quality-export-packaging.jpg" loading="lazy" decoding="async" alt="LANGMAI quality inspection and export packaging preparation">
  </section>
  <section class="section premium-rfq" id="quote"><div><p class="eyebrow">Sample & quotation</p><h2>Start with Your Beverage and Target Use Duration</h2><p>Include straight or bendable style, diameter, length, drink, temperature, use duration, artwork, packing, destination and estimated quantity.</p></div>${leadForm("Custom Paper Straws")}</section>
  <section class="section faq"><p class="eyebrow">FAQ</p><h2>Paper Straws Buyer FAQ</h2>${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
  <section class="section"><h2>Related Beverage Packaging Paths</h2><div class="link-grid"><a href="/applications/cafe/">Cafe & Beverage Applications</a><a href="/custom-oem/">Custom OEM Process</a><a href="/compliance/">Compliance Center</a><a href="/products/party-accessories/">Party Paper Accessories</a></div></section>`;
  return layout({
    route: "/products/paper-straws/",
    title: "Custom Paper Straws Manufacturer | Bendable & Printed Straws | LANGMAI",
    description: "LANGMAI supplies straight, flexible bendable and custom printed paper straws for beverage brands, cafes and foodservice buyers, with OEM sizes and packing.",
    content,
    schema: [productSchema({ ...product, title, short: "Straight, flexible bendable and custom printed paper straws for beverage and foodservice programs.", features: ["Straight paper straws", "Flexible bendable paper straws", "Custom printing", "OEM packaging"] }), faqSchema(faq)],
    bodyClass: "premium-product-page",
  });
}

function productPage(product) {
  if (product.template === "food-wrapping") return foodWrappingProductPage(product);
  if (product.slug === "cake-cups") return cakeCupsProductPage(product);
  if (product.slug === "paper-straws") return paperStrawsProductPage(product);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const isBakingPaperProduct = product.group !== "food-wrapping" && !["paper-straws", "party-accessories"].includes(product.slug);
  const specTable = product.specs.length
    ? `<div class="table-wrap"><table><thead><tr>${product.headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${product.specs
        .map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`)
        .join("")}</tbody></table></div>`
    : `<p class="note">Dimensions, paper construction, pack count and minimum order are confirmed against the intended use, destination market and approved sample. Send a target size, product photo or drawing for a quote-ready specification.</p>`;
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
      ${isBakingPaperProduct ? `<section class="product-block pfas-product-module" aria-labelledby="product-pfas-title">
        <div>
          <p class="eyebrow">Material and compliance option</p>
          <h2 id="product-pfas-title">PFAS-Free Material Options</h2>
          <p>PFAS-related requirements should be confirmed for the exact paper, coating, print system and finished construction. LANGMAI can discuss intentionally added PFAS-free material options and provide available supplier declarations or product-specific test evidence for buyer review.</p>
          <a class="button secondary" href="/pfas-free-baking-paper/">Review the PFAS-Free Program</a>
        </div>
        <div class="buyer-checklist">
          <h3>Confirm before approval</h3>
          <ul class="check-list">
            <li>Exact product and paper construction</li>
            <li>Intended food, temperature and contact conditions</li>
            <li>Destination market and buyer test protocol</li>
            <li>Declaration, report date and tested sample identity</li>
            <li>Change-control requirements for repeat orders</li>
          </ul>
          <a class="button primary" href="/inquiry/">Request PFAS Documents & Samples</a>
        </div>
      </section>` : ""}
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

function applicationLandingPage(type) {
  const pages = {
    bakery: {
      route: "/applications/bakery/",
      seoTitle: "Bakery Packaging Solutions | Cake Cups & Baking Paper | LANGMAI",
      meta: "LANGMAI provides bakery packaging solutions including custom cake cups, cupcake liners and baking paper for bakeries, dessert brands and food manufacturers.",
      eyebrow: "Bakery packaging solutions",
      title: "Complete Bakery Packaging Solutions for Global Brands",
      description: "From artisan bakeries to food manufacturers, LANGMAI develops paper packaging around baking performance, product presentation, food-contact review and brand growth.",
      image: "ai-cake-cups-premium.jpg",
      alt: "Premium cupcakes presented in LANGMAI paper baking cups",
      sampleLabel: "Request Bakery Packaging Sample",
      trust: ["Cake cups & cupcake liners", "Baking paper formats", "Custom print & packing", "Product-specific compliance"],
      challenges: [
        ["Food Safety", "Select food-contact paper and print systems around the intended recipe, temperature, contact time and destination market."],
        ["Product Presentation", "Coordinate cup profile, paper color, release and grease performance with the finished cake or pastry."],
        ["Brand Differentiation", "Use custom colors, patterns, logo printing and private-label packing to create a recognizable bakery range."],
        ["Supply Reliability", "Approve dimensions, artwork, pack count, inspection points and repeat-order controls before bulk production."],
      ],
      products: [
        ["Cake Cups", "/products/cake-cups/", "real-cake-cups-assortment.jpg", "Cupcake, muffin, dessert and mini-cake formats with reference sizes, custom printing and packing."],
        ["Baking Paper", "/products/baking-paper/", "blog-baking-paper-quality-control.webp", "Parchment, pre-cut sheets, air fryer liners and custom printed formats with PFAS-free options."],
        ["Custom Bakery Packaging", "/custom-oem/", "ai-quality-export-packaging.jpg", "OEM artwork, sample development, private-label packing and export-carton planning."],
      ],
      scenarios: [
        ["Artisan Bakeries", "Flexible formats for premium counters, seasonal products and smaller branded ranges."],
        ["Bakery Chains", "Approved specifications, consistent presentation and repeat packing for multi-site programs."],
        ["Dessert Brands", "Distinctive cake cups and printed paper for premium, social-first and takeaway presentation."],
        ["Industrial Bakeries", "Quote-ready dimensions, volume forecasts, inspection criteria and production planning."],
      ],
      customization: ["Cup dimensions around the baked product", "Paper construction and grease-performance review", "Logo, brand colors and pattern development", "Bulk, retail and private-label packing", "Pre-production sample and repeat-order control"],
      complianceTitle: "Safe and Responsible Bakery Packaging",
      complianceText: "Food-contact and PFAS requirements are reviewed for the exact paper, coating, ink, finished format and destination market. Available evidence supports only the product and scope it clearly represents.",
      faq: [
        ["Can LANGMAI customize cake cups for our bakery brand?", "Yes. Size, paper construction, colors, patterns, artwork and packing can be developed after the bakery application and order requirements are confirmed."],
        ["Can we request samples before bulk production?", "Yes. Send the product, dimensions, food use, baking conditions, artwork, destination and estimated quantity so the sample represents the intended order."],
        ["Can LANGMAI support bakery-chain programs?", "LANGMAI can review forecast volume, approved specifications, pack counts, inspection requirements and delivery planning for multi-site or repeat-order programs."],
        ["Are PFAS-free baking paper options available?", "Intentionally added PFAS-free options can be discussed for the selected baking paper construction. Declarations or test evidence must be matched to the exact finished product."],
      ],
    },
    cafe: {
      route: "/applications/cafe/",
      seoTitle: "Cafe Packaging Solutions | Paper Straws & Food Paper | LANGMAI",
      meta: "Explore LANGMAI cafe packaging solutions including bendable paper straws, bakery cups and greaseproof paper with custom printing and OEM packing support.",
      eyebrow: "Cafe packaging solutions",
      title: "Sustainable Packaging Solutions for Modern Cafes",
      description: "Build a coordinated cafe and beverage program with straight or bendable paper straws, bakery cups and greaseproof paper selected for counter service, takeaway and brand presentation.",
      image: "banner-paper-straws-1448.webp",
      alt: "Colorful paper straws for cafe and beverage packaging programs",
      sampleLabel: "Request Cafe Packaging Sample",
      trust: ["Straight & bendable straws", "Cafe bakery formats", "Custom brand printing", "Plastic-reduction support"],
      challenges: [
        ["Brand Experience", "Coordinate beverage accessories, pastry liners and wrapping paper so every counter touchpoint feels consistent."],
        ["Beverage Performance", "Confirm drink type, temperature, acidity, ice and target use duration before selecting a paper straw."],
        ["Sustainable Choice", "Use paper-based formats to support plastic-reduction goals without making unsupported recyclability or biodegradability claims."],
        ["Custom Identity", "Review colors, pattern repeat, artwork, pack count and foodservice or retail packing at sample stage."],
      ],
      products: [
        ["Paper Straws", "/products/paper-straws/", "real-paper-straws.jpg", "Straight, flexible bendable, jumbo and custom printed options selected around the beverage."],
        ["Cafe Bakery Cups", "/products/cake-cups/", "real-cake-cups-stacked.jpg", "Cupcake and muffin formats for counter display, takeaway desserts and seasonal launches."],
        ["Greaseproof Paper", "/products/greaseproof-paper/", "food-wrap-greaseproof.webp", "Sheets and printed formats for pastries, sandwiches, tray liners and cafe takeaway."],
      ],
      scenarios: [
        ["Independent Coffee Shops", "Flexible branded formats for drinks, pastries, counter display and takeaway."],
        ["Cafe Chains", "Repeat specifications, consistent artwork and pack planning across multiple locations."],
        ["Beverage Brands", "Printed straw and packing programs for juice, soft drinks and promotional launches."],
        ["Foodservice Distributors", "Coordinated paper-product assortments for cafe and beverage customers."],
      ],
      customization: ["Straight or flexible bendable straw structure", "Diameter, length, drink and target duration", "Cake cup sizes and grease-performance review", "Logo, pattern and brand color development", "Bulk, wrapped or retail packing discussion"],
      complianceTitle: "Paper-Based Options with Product-Level Evidence",
      complianceText: "Food-contact suitability and performance depend on the exact paper, adhesive, ink, drink or food, use duration and destination. Environmental claims are made only when evidence supports the finished construction.",
      faq: [
        ["Can LANGMAI produce bendable paper straws?", "Yes. Flexible bendable paper straw constructions are available. Confirm diameter, length, beverage, packing and quantity for sampling."],
        ["Can cafe packaging carry our brand artwork?", "Yes. Paper straw patterns, cake cup artwork and selected printed wrapping formats can be developed after artwork and food-contact review."],
        ["How do we select the right straw?", "Share the beverage, temperature, acidity, ice, cup height and target drinking duration. LANGMAI can then recommend a sample-ready structure and dimensions."],
        ["Can one inquiry include several cafe products?", "Yes. Buyers can combine paper straws, bakery cups and greaseproof paper in one sourcing brief, while each product keeps its own approved specification and packing."],
      ],
    },
    "food-service": {
      route: "/applications/food-service/",
      seoTitle: "Food Service Packaging Solutions | Greaseproof Paper | LANGMAI",
      meta: "LANGMAI supplies greaseproof paper, burger wrapping paper and food wrapping solutions for restaurants, takeaway brands, chains and food manufacturers.",
      eyebrow: "Food service packaging solutions",
      title: "Reliable Food Packaging Solutions for Restaurants & Food Brands",
      description: "Select greaseproof paper, burger sheets and food wrapping formats around oil resistance, serving conditions, kitchen workflow, brand printing and destination-market requirements.",
      image: "food-wrap-burger.webp",
      alt: "Burger and takeaway food presented in greaseproof wrapping paper",
      sampleLabel: "Request Food Service Sample",
      trust: ["Grease-resistant options", "Custom sheet & roll sizes", "Brand printing review", "Food-contact support"],
      challenges: [
        ["Oil Resistance", "Define the burger, fried food, pastry or deli application, fat level, temperature and contact time before paper selection."],
        ["Food Safety", "Match paper, treatment and ink evidence to the exact direct-food-contact use and destination market."],
        ["Operational Speed", "Confirm sheet size, roll width, folding, dispensing method and pack count for the kitchen workflow."],
        ["Custom Branding", "Align print coverage, artwork repeat, food-contact ink review and carton configuration before approval."],
      ],
      products: [
        ["Greaseproof Paper", "/products/greaseproof-paper/", "food-wrap-greaseproof.webp", "White, natural and printed options in sheets or rolls for bakery and foodservice use."],
        ["Burger Wrapping Paper", "/products/burger-wrapping-paper/", "food-wrap-burger.webp", "Custom printed sheets for burgers, sandwiches, deli products and takeaway programs."],
        ["Food Wrapping Range", "/products/food-wrapping-paper/", "food-wrap-wax.webp", "Compare greaseproof, burger, wax and specification-led butcher paper formats."],
      ],
      scenarios: [
        ["Restaurants", "Application-led sheets and rolls for kitchen preparation, serving and takeaway."],
        ["Fast Food Chains", "Repeat sizes, approved artwork, pack counts and operational consistency across locations."],
        ["Takeaway Brands", "Printed wrapping formats that support presentation, handling and brand recognition."],
        ["Food Manufacturers", "Specification, volume, inspection and packing review for repeat industrial programs."],
      ],
      customization: ["Paper grade, color and grammage", "Sheet, roll, interfolded or approved format", "Food type, grease level and contact conditions", "Logo printing, colors and artwork repeat", "Inner pack, master carton and pallet requirements"],
      complianceTitle: "Food-Contact Review for the Actual Use",
      complianceText: "Grease, temperature, moisture, print and direct-contact conditions affect material selection. FDA-market, EU, LFGB, BfR, PFAS or other support is reviewed only for the exact proposed construction and scope.",
      faq: [
        ["Which paper is suitable for burgers or fried food?", "The correct specification depends on fat level, temperature, contact time, moisture, presentation and whether the contact is direct. Send the food and workflow so the paper can be sampled appropriately."],
        ["Can food wrapping paper use custom printing?", "Yes. Artwork, print coverage, paper grade, ink system, odor expectations and food-contact scope are reviewed before sample approval."],
        ["Are sheets and rolls both available?", "Sheets, rolls and selected interfolded or dispenser formats can be discussed according to the product and converting specification."],
        ["Can LANGMAI support restaurant-chain packing?", "LANGMAI can review repeat sizes, location or distributor pack counts, labels, cartons, inspection requirements and shipment planning for chain programs."],
      ],
    },
  };
  const page = pages[type];
  const content = `<section class="industry-application-hero">
    <div><p class="eyebrow">${page.eyebrow}</p><h1>${page.title}</h1><p>${page.description}</p><div class="application-trust">${page.trust.map((item) => `<span>${esc(item)}</span>`).join("")}</div><div class="hero-actions"><a class="button primary" href="#application-quote">${page.sampleLabel}</a><a class="button secondary" href="/contact/">Talk to a Packaging Expert</a></div></div>
    <div class="industry-hero-image"><img src="/assets/${page.image}" width="1200" height="800" fetchpriority="high" decoding="async" alt="${page.alt}"><span>Application-led product selection</span></div>
  </section>
  <section class="section industry-challenges"><div class="section-heading"><p class="eyebrow">Industry challenges</p><h2>Turn Operating Requirements into a Clear Packaging Specification</h2><p>Good packaging is not selected by appearance alone. Product use, performance, brand presentation and supply controls must be approved together.</p></div><div class="industry-challenge-grid">${page.challenges.map(([title, text], index) => `<article><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
  <section class="section industry-products"><div class="section-heading"><p class="eyebrow">Complete solutions</p><h2>Relevant Products for This Application</h2><p>Open a product page for technical detail, or send one combined application brief for coordinated sampling.</p></div><div class="industry-product-grid">${page.products.map(([title, href, image, text], index) => `<a href="${href}"><img src="/assets/${image}" loading="lazy" decoding="async" alt="${esc(title)} for ${esc(page.eyebrow)}"><div><span>0${index + 1}</span><h3>${esc(title)}</h3><p>${esc(text)}</p><strong>Explore solution →</strong></div></a>`).join("")}</div></section>
  <section class="section industry-scenarios"><div class="section-heading"><p class="eyebrow">Business scenarios</p><h2>Designed for Different Operating Models</h2></div><div class="industry-scenario-grid">${page.scenarios.map(([title, text]) => `<article><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div></section>
  <section class="section industry-customization"><div class="industry-custom-copy"><p class="eyebrow">Custom OEM</p><h2>Build the Packaging Around Your Brand and Workflow</h2><p>LANGMAI connects product selection, artwork, sampling, production, inspection and delivery through one approved specification.</p><a class="button secondary" href="/custom-oem/">Review the Five-Step OEM Process</a></div><div class="industry-custom-list">${page.customization.map((item, index) => `<div><span>0${index + 1}</span><p>${esc(item)}</p></div>`).join("")}</div></section>
  <section class="section industry-compliance"><div><p class="eyebrow">Food safety & sustainability</p><h2>${page.complianceTitle}</h2><p>${page.complianceText}</p><div class="hero-actions"><a class="button secondary" href="/compliance/">Visit Compliance Center</a><a class="button secondary" href="/factory-certificates/">View Document Previews</a></div></div><div class="industry-evidence"><h3>Confirm before approval</h3><ul class="check-list"><li>Exact product, material and finished construction</li><li>Food or beverage and real use conditions</li><li>Print, packaging and destination market</li><li>Required declarations, tests or sourcing records</li><li>Approved sample and repeat-order change control</li></ul></div></section>
  <section class="section industry-why"><div class="section-heading"><p class="eyebrow">Why LANGMAI</p><h2>A Practical Manufacturing Partner for Global Buyers</h2></div><div class="industry-why-grid"><article><h3>Professional Manufacturing</h3><p>Material, converting and packing are aligned to an approved product specification.</p></article><article><h3>Flexible OEM</h3><p>Sizes, artwork, samples and packing can be developed for the target channel.</p></article><article><h3>Quality Control</h3><p>Inspection points can cover dimensions, appearance, print, pack count and shipment preparation.</p></article><article><h3>Global Service</h3><p>Destination, documents, carton planning and buyer communication are reviewed before production.</p></article></div></section>
  <section class="section industry-quote" id="application-quote"><div><p class="eyebrow">Sample & inquiry</p><h2>Share the Conditions That Affect Product Fit</h2><p>Include the food or beverage, dimensions, use conditions, artwork, packing, destination, required documents and estimated quantity.</p></div>${leadForm(page.title)}</section>
  <section class="section faq"><p class="eyebrow">FAQ</p><h2>${esc(page.eyebrow)} FAQ</h2>${page.faq.map(([question, answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join("")}</section>
  ${ctaBand("Discuss the right packaging construction for your application")}`;
  return layout({
    route: page.route,
    title: page.seoTitle,
    description: page.meta,
    content,
    schema: [faqSchema(page.faq)],
    bodyClass: "industry-application-page",
  });
}

function complianceCenterPage() {
  const content = `<section class="landing-hero compliance-hero">
    <div><p class="eyebrow">Compliance center</p><h1>Food-Contact and Material Evidence for Buyer Review</h1><p>Review available PFAS, food-contact, sourcing and factory-quality support by product construction and destination market. A document supports only the sample or scope it clearly represents.</p><div class="hero-actions"><a class="button primary" href="/inquiry/">Request Relevant Documents</a><a class="button secondary" href="/factory-certificates/">View Document Previews</a></div></div>
    <img src="/assets/cert-lfgb.png" alt="Preview of an available LANGMAI LFGB food-contact test report">
  </section>
  <section class="trust-strip"><span>Product-specific scope</span><span>Destination-market review</span><span>Sample identity matching</span><span>Repeat-order change control</span></section>
  <section class="section compliance-preview-grid">
    <article id="pfas-free"><p class="eyebrow">PFAS-free options</p><h2>Match the claim to the finished construction</h2><p>Applicable PFAS-free paper options can be discussed after the base paper, treatment, coating, ink, converting method and intended use are defined. Available declarations or testing should be checked against the exact approved specification.</p><a class="text-link" href="/pfas-free-baking-paper/">Review the PFAS-free program →</a></article>
    <article id="food-contact"><p class="eyebrow">Food-contact safety</p><h2>Review available support by market and product</h2><p>Available FDA-related, EU food-contact, LFGB, BfR or DGCCRF documentation may support buyer review when its sample, material, test conditions and validity align with the proposed product. Availability is not a blanket certification of every item.</p><a class="text-link" href="/factory-certificates/#food-contact">View available document previews →</a></article>
    <article><p class="eyebrow">Sourcing & traceability</p><h2>Connect paper records to the finished order</h2><p>For applicable paper products, sourcing information and internal production-lot records may help EU buyers prepare their own EUDR due-diligence review.</p><a class="text-link" href="/eudr-traceability/">Review EUDR support →</a></article>
    <article><p class="eyebrow">Factory quality</p><h2>Control the approved specification</h2><p>Incoming material, dimensions, appearance, print, pack count and shipment preparation can be checked at relevant points. Required controls should be agreed for the order.</p><a class="text-link" href="/factory-certificates/#quality-management">Explore quality management →</a></article>
  </section>
  <section class="section buyer-checklist"><div class="section-heading"><p class="eyebrow">Buyer checklist</p><h2>Information needed for a useful document review</h2></div><div class="badge-grid"><span>Exact product and construction</span><span>Intended food-contact conditions</span><span>Destination market</span><span>Required claim or protocol</span><span>Current sample identity</span></div></section>
  ${ctaBand("Request documents matched to your product and market")}`;
  return layout({
    route: "/compliance/",
    title: "Food Paper Packaging Compliance Center | LANGMAI",
    description: "Review LANGMAI food-contact, PFAS-free, LFGB, BfR, FDA-related, EUDR and factory-quality support by product construction and destination market.",
    content,
    bodyClass: "preview-landing",
  });
}

function customOemPage() {
  const steps = [
    ["01", "Requirement confirmation", "Share the food application, size, material performance, quantity, destination market, artwork and pack requirements."],
    ["02", "Sample development", "Confirm construction, artwork, color, dimensions and pack presentation through an agreed sample route."],
    ["03", "Approved production", "Manufacture against the approved material, artwork, sample and packing instruction."],
    ["04", "Quality inspection", "Review relevant material, dimensions, appearance, print, pack count and shipment preparation checkpoints."],
    ["05", "Global delivery", "Coordinate export cartons, shipping marks, documents and the agreed delivery plan."],
  ];
  const content = `<section class="oem-hero-new">
    <div><p class="eyebrow">Custom printing & OEM</p><h1>Turn your paper packaging brief into an approved sample.</h1><p>LANGMAI connects product selection, artwork, printing, sampling, production, inspection and export packing for branded food paper programs.</p><div class="hero-actions"><a class="button primary" href="/inquiry/">Start Your OEM Project</a><a class="button secondary" href="/assets/catalog-preview-clean.jpg" target="_blank" rel="noopener">View Catalogue Preview</a></div><p class="hero-microcopy">Bring a logo, target drawing, current item or reference sample.</p></div>
    <figure><img src="/assets/factory-real-printing-process-1600.webp" width="1600" height="900" fetchpriority="high" decoding="async" alt="Printed food paper web moving through LANGMAI production equipment"><figcaption>Real printing line in the LANGMAI factory</figcaption></figure>
  </section>
  <section class="section oem-printing-note"><div class="section-heading"><p class="eyebrow">Printing workflow</p><h2>Artwork and paper construction are approved together.</h2><p>We review print coverage, colors, artwork repeat, paper surface and intended food use before sampling. “Printing first. Silicone coating after.” applies only to selected approved printed parchment constructions where that sequence is part of the agreed specification; it is not a blanket claim for every product.</p></div><div class="home-capability-list"><article><h3>Artwork & color review</h3><p>Confirm files, print colors, repeat, coverage and the reference sample before production.</p></article><article><h3>Material & treatment review</h3><p>Match paper, coating or treatment to the required release, grease, temperature and food-contact conditions.</p></article><article><h3>Pack presentation</h3><p>Plan bulk, foodservice, retail or private-label packs with labels, counts and export cartons.</p></article></div></section>
  <section class="section"><div class="section-heading"><p class="eyebrow">Five-stage OEM process</p><h2>A clear path from requirement to repeat order.</h2></div><div class="oem-process">${steps.map(([number, title, text]) => `<article><span>${number}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join("")}</div></section>
  <section class="split-section oem-brief"><div><p class="eyebrow">Project brief</p><h2>The more specific the brief, the more useful the first sample.</h2><ul class="check-list"><li>Product type, size or reference sample</li><li>Food application and use conditions</li><li>Artwork, print colors and packaging format</li><li>Estimated quantity and destination market</li><li>Required documents and target timing</li></ul></div><div>${leadForm("Custom printed food paper packaging")}</div></section>
  ${ctaBand("Ready to turn your packaging idea into a sample-ready specification?")}`;
  return layout({
    route: "/custom-oem/",
    title: "Custom Printing & OEM Food Paper Packaging | LANGMAI",
    description: "Develop custom printed baking paper, food wrapping and paper packaging with LANGMAI through artwork review, sampling, production, inspection and global delivery.",
    content,
    bodyClass: "preview-landing",
  });
}

function pfasFreePage() {
  const faq = [
    ["Does PFAS-free mean the same thing in every market?", "No. Definitions, thresholds and buyer protocols can differ. The intended claim, destination market, product construction and agreed test method should be confirmed before approval."],
    ["Which products can use PFAS-free material options?", "Applicable options can be discussed for baking cups, cupcake liners, baking parchment, air fryer paper liners, custom printed baking paper and selected greaseproof or food wrapping paper constructions. Availability depends on the paper, coating, ink, converting method and performance requirement."],
    ["What evidence can buyers request?", "Depending on the selected material and order, buyers can request available supplier declarations, material statements or product-specific third-party test evidence. Every document should be checked against the exact tested sample and current specification."],
    ["Can one report cover every product?", "Not automatically. A report only supports the tested or clearly represented construction. Changes in paper, coating, ink, supplier or manufacturing route may require a new technical review or additional testing."],
    ["How are repeat orders controlled?", "The approved specification, material identity, artwork and supporting evidence should remain linked to the order. Material or supplier changes that may affect the claim should be reviewed before production."],
  ];
  const content = `<section class="page-hero">
    <p class="eyebrow">PFAS-free material program</p>
    <h1>PFAS-Free Baking Paper Solutions for Global Buyers</h1>
    <p>LANGMAI supports product-specific PFAS review for baking cups, cupcake liners, baking parchment, air fryer paper liners and printed baking paper. Claims are matched to the exact material construction, intended use, buyer protocol and available evidence.</p>
    <div class="hero-actions"><a class="button primary" href="/inquiry/">Request PFAS Documents & Samples</a><a class="button secondary" href="#buyer-checklist">View Buyer Checklist</a></div>
  </section>
  <section class="trust-strip"><span>Product-specific scope</span><span>Material and supplier review</span><span>Test-evidence matching</span><span>Repeat-order change control</span></section>
  <section class="section">
    <div class="section-heading"><p class="eyebrow">What the claim means</p><h2>Define “PFAS-free” before selecting a paper</h2><p>PFAS is a broad group of substances, and market rules or customer protocols may use different definitions, methods and reporting thresholds. A useful sourcing program begins with the intended claim and the finished product—not a blanket statement about every paper item.</p></div>
    <div class="evidence-grid">
      <article><h3>Intended use</h3><p>Record the food type, temperature, contact time, baking or cooking conditions and expected grease or moisture performance.</p></article>
      <article><h3>Product construction</h3><p>Identify the base paper, coating or treatment, ink system, adhesive where relevant, forming process and finished format.</p></article>
      <article><h3>Market protocol</h3><p>Confirm the destination market, buyer restricted-substance requirements, test method and acceptable reporting threshold.</p></article>
    </div>
  </section>
  <section class="section">
    <div class="section-heading"><p class="eyebrow">Applicable product families</p><h2>PFAS-free options across baking and wrapping paper</h2></div>
    <div class="solution-grid">
      <article><h3>Baking cups and cupcake liners</h3><p>Paper, print and grease-resistance performance are reviewed together for the approved liner construction.</p><a class="text-link" href="/products/cake-cups/">View baking cups</a></article>
      <article><h3>Baking parchment paper</h3><p>Sheet, roll or die-cut paper is evaluated around release performance, temperature and the intended packaging format.</p><a class="text-link" href="/products/baking-parchment-paper/">View parchment</a></article>
      <article><h3>Air fryer paper liners</h3><p>Flat, perforated or formed liners are matched to use conditions, grease resistance and retail-pack needs.</p><a class="text-link" href="/products/air-fryer-paper-liners/">View air fryer liners</a></article>
      <article><h3>Custom printed baking paper</h3><p>The paper, ink coverage and print system are included in the evidence review rather than assessing the base paper alone.</p><a class="text-link" href="/products/custom-printed-baking-paper/">View printed paper</a></article>
      <article><h3>Greaseproof and food wrapping paper</h3><p>Paper grade, treatment, printing and finished format are reviewed together for applicable bakery, restaurant and foodservice projects.</p><a class="text-link" href="/products/food-wrapping-paper/">View food wrapping paper</a></article>
    </div>
  </section>
  <section class="split-section">
    <img src="/assets/ai-quality-export-packaging.jpg" loading="lazy" decoding="async" alt="Baking paper material evidence and quality review">
    <div>
      <p class="eyebrow">Documents and testing</p>
      <h2>Connect each document to the sample it represents</h2>
      <p>Available evidence may include a supplier statement, material declaration or third-party report. Buyers should check the issuer, date, test method, analyte scope, reporting limit, sample description and relationship to the finished product.</p>
      <p>If the selected construction is not adequately represented, product-specific testing can be discussed before the commercial claim or packaging statement is finalized.</p>
      <a class="button secondary" href="/factory-certificates/#pfas-evidence">Review PFAS Evidence Process</a>
    </div>
  </section>
  <section class="section" id="buyer-checklist">
    <div class="section-heading"><p class="eyebrow">Buyer approval checklist</p><h2>Information to confirm before ordering</h2></div>
    <div class="process-grid">${[
      ["01", "Define the claim", "Share the destination market, buyer protocol and wording expected on specifications or packaging."],
      ["02", "Approve the material", "Confirm paper, coating, print, finished format and intended food-contact conditions."],
      ["03", "Review evidence", "Match declarations or reports to the material and finished sample, including method and reporting limits."],
      ["04", "Check performance", "Evaluate release, grease resistance, heat conditions, forming and print quality using the intended application."],
      ["05", "Lock the specification", "Record the approved construction, supplier or material identity, artwork and evidence references."],
      ["06", "Control changes", "Review relevant paper, coating, ink or supplier changes before repeat production."],
    ].map(([number, title, text]) => `<article><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
  </section>
  <section class="section faq"><p class="eyebrow">FAQ</p><h2>PFAS-free baking paper FAQ</h2>${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
  ${ctaBand("Discuss a PFAS-free baking paper construction")}`;
  return layout({
    route: "/pfas-free-baking-paper/",
    title: "PFAS-Free Baking Paper Solutions | LANGMAI",
    description: "Review PFAS-free material options, evidence, testing, buyer approval and change control for baking cups, parchment and air fryer paper products.",
    content,
    schema: [faqSchema(faq)],
  });
}

function marketsIndexPage() {
  const content = `<section class="page-hero"><p class="eyebrow">Markets</p><h1>Baking Paper Supply Support by Destination Market</h1><p>Review market-focused product, packaging and documentation considerations for U.S. and European baking paper programs.</p></section>
  <section class="section"><div class="product-grid">
    <article class="product-card"><img src="/assets/ai-cake-cups-premium.jpg" loading="lazy" decoding="async" alt="Baking paper products for the United States market"><div><h2>United States</h2><p>PFAS review, food-contact evidence, inch and Fahrenheit references, private label, retail packs and importer support.</p><a class="text-link" href="/markets/united-states/">View U.S. market support</a></div></article>
    <article class="product-card"><img src="/assets/ai-air-fryer-liners-premium.jpg" loading="lazy" decoding="async" alt="Baking paper products for the European market"><div><h2>Europe</h2><p>EU food-contact, LFGB, BfR, DGCCRF, FSC, EUDR, metric specifications and multilingual packaging coordination.</p><a class="text-link" href="/markets/europe/">View European market support</a></div></article>
  </div></section>${marketMapSection()}${ctaBand("Tell us your destination market and document list")}`;
  return layout({ route: "/markets/", title: "Global Markets | Baking Paper Supply Support | LANGMAI", description: "Market-focused baking paper supply support for U.S. and European buyers, including packaging, food-contact evidence, PFAS and EUDR considerations.", content });
}

function marketPage(region) {
  const isUs = region === "united-states";
  const route = `/markets/${region}/`;
  const name = isUs ? "U.S." : "European";
  const h1 = isUs ? "Baking Paper Supplier for the U.S. Market" : "Baking Paper Supplier for the European Market";
  const intro = isUs
    ? "LANGMAI supports U.S. importers, distributors, foodservice suppliers and private-label brands with baking cups, parchment, air fryer liners and printed baking paper planned around product-specific evidence, retail packaging and import workflows."
    : "LANGMAI supports European importers, distributors and private-label brands with baking cups, parchment, air fryer liners and printed baking paper planned around food-contact documentation, PFAS review, EUDR traceability and multilingual retail requirements.";
  const points = isUs ? [
    ["PFAS and material review", "Confirm state, retailer or buyer protocols; match the exact paper, coating and finished construction to declarations or testing."],
    ["Food-contact documentation", "Review product-specific materials, intended use and available supporting files rather than applying one document to every SKU."],
    ["U.S.-friendly specifications", "Quotes and approvals can include inch conversions, Fahrenheit use references and buyer pack-count conventions."],
    ["Private-label retail packs", "Coordinate artwork, UPC placement, labels, consumer pack counts, master cartons and ecommerce or shelf presentation."],
    ["Logistics planning", "Confirm carton dimensions, pallet expectations, container planning, port and importer documentation before shipment."],
    ["Importer support", "Organize samples, specifications and available evidence for supplier onboarding and internal product review."],
  ] : [
    ["EU food-contact review", "Confirm the exact paper construction, intended use and supporting documents relevant to the destination market."],
    ["LFGB, BfR and DGCCRF", "Available reports or references are reviewed by product, test scope, sample identity and market applicability."],
    ["FSC and paper sourcing", "Discuss chain-of-custody documentation and certified paper requirements for the selected material and claim."],
    ["EUDR traceability", "For applicable products, connect upstream paper, species, origin and geolocation data to LANGMAI production and shipment lots."],
    ["PFAS requirements", "Match product-specific material evidence or testing to current buyer and destination-market requirements."],
    ["European retail readiness", "Use metric specifications and coordinate multilingual artwork, labels, private-label packs and master cartons."],
  ];
  const faq = [
    [`Can LANGMAI prepare documents for ${name} buyers?`, "LANGMAI can organize available product, material, test, sourcing and factory documents for review. The buyer should confirm the current legal and customer-specific requirements for the exact product."],
    ["Can packaging be customized for retail?", "Yes. Artwork, language, labels, pack counts, barcode placement and master cartons can be coordinated against an approved packaging specification."],
    ["Can I request samples before a bulk order?", "Yes. Send the target product, size, use conditions, quantity, destination market and required documents so the sample represents the intended order."],
  ];
  const content = `<section class="page-hero"><p class="eyebrow">${name} market support</p><h1>${h1}</h1><p>${intro}</p><div class="hero-actions"><a class="button primary" href="/inquiry/">Request Samples & Documents</a><a class="button secondary" href="/products/">Explore Products</a></div></section>
  <section class="section"><div class="section-heading"><p class="eyebrow">Buyer priorities</p><h2>Prepare the product and evidence for the destination market</h2><p>Requirements vary by product, use, jurisdiction and customer. The following workstreams help buyers structure a review before artwork and mass production are approved.</p></div><div class="solution-grid">${points.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
  <section class="split-section"><img src="/assets/ai-quality-export-packaging.jpg" loading="lazy" decoding="async" alt="${name} private-label baking paper packaging review"><div><p class="eyebrow">Quote-ready request</p><h2>Send one clear product brief</h2><ul class="check-list"><li>Product, dimensions and intended food use</li><li>Temperature, contact time and performance expectations</li><li>Estimated order and pack count</li><li>Artwork, language, barcode and retail format</li><li>Destination country, customer protocol and document list</li><li>Carton, pallet, port and target delivery timing</li></ul><a class="button primary" href="/inquiry/">Send Your Market Brief</a></div></section>
  <section class="section"><div class="section-heading"><p class="eyebrow">Relevant programs</p><h2>Continue the technical review</h2></div><div class="link-grid"><a href="/pfas-free-baking-paper/">PFAS-Free Baking Paper</a><a href="/factory-certificates/">Compliance Documents</a><a href="/eudr-traceability/">EUDR Traceability</a><a href="/customization/">Private-Label Process</a></div></section>
  <section class="section faq"><p class="eyebrow">FAQ</p><h2>${name} market FAQ</h2>${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
  ${ctaBand(`Plan a baking paper program for the ${name} market`)}`;
  return layout({
    route,
    title: `${h1} | LANGMAI`,
    description: isUs ? "Baking paper supply support for U.S. buyers: PFAS review, food-contact documents, inch and Fahrenheit specs, private label, retail packs and logistics." : "Baking paper supply support for Europe: EU food-contact, LFGB, BfR, DGCCRF, FSC, EUDR, PFAS and multilingual private-label packaging.",
    content,
    schema: [faqSchema(faq)],
  });
}

function applicationsPage() {
  const applications = [
    ["Bakery Packaging", "/applications/bakery/", "ai-cake-cups-premium.jpg", "Cake cups, cupcake liners, baking paper and custom bakery packaging for artisan bakeries, chains, dessert brands and food manufacturers.", ["Cake cups", "Baking paper", "Custom OEM"]],
    ["Cafe Packaging", "/applications/cafe/", "banner-paper-straws-1448.webp", "Straight and bendable paper straws, bakery cups and greaseproof paper for coffee shops, cafe chains and beverage brands.", ["Paper straws", "Cafe bakery cups", "Greaseproof paper"]],
    ["Food Service Packaging", "/applications/food-service/", "food-wrap-burger.webp", "Greaseproof sheets, burger paper and food wrapping formats for restaurants, takeaway brands, chains and food manufacturers.", ["Greaseproof paper", "Burger wrapping", "Food wrapping"]],
  ];
  const content = `<section class="applications-hub-hero">
    <p class="eyebrow">Packaging applications</p>
    <h1>Food Paper Packaging Solutions Built Around Your Industry</h1>
    <p>Start with the way the packaging will be used. LANGMAI connects bakery, cafe and foodservice requirements with the right paper construction, format, OEM process and buyer evidence.</p>
    <div class="hero-actions"><a class="button primary" href="#application-paths">Explore Industry Solutions</a><a class="button secondary" href="/inquiry/">Request Relevant Samples</a></div>
  </section>
  <section class="section applications-hub-intro"><div><p class="eyebrow">Why application-led sourcing</p><h2>One Paper Product Can Perform Differently in Every Use</h2></div><p>Food, beverage, temperature, grease, contact time, equipment and selling format affect the final specification. These industry paths help buyers reach the relevant products and prepare a useful sample request faster.</p></section>
  <section class="section applications-hub-grid" id="application-paths">${applications.map(([title, href, image, text, products], index) => `<a href="${href}" class="applications-hub-card"><img src="/assets/${image}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async" alt="${esc(title)} solution from LANGMAI"><div><span>0${index + 1}</span><h2>${esc(title)}</h2><p>${esc(text)}</p><ul>${products.map((item) => `<li>${esc(item)}</li>`).join("")}</ul><strong>Explore ${esc(title)} →</strong></div></a>`).join("")}</section>
  <section class="section application-conversion-flow"><div class="section-heading"><p class="eyebrow">From use case to approved order</p><h2>A Clear Path for B2B Packaging Buyers</h2></div><ol><li><span>01</span><h3>Choose an industry</h3><p>Start from the bakery, cafe or foodservice application.</p></li><li><span>02</span><h3>Review relevant products</h3><p>Compare formats that fit the food, beverage and workflow.</p></li><li><span>03</span><h3>Define the specification</h3><p>Confirm dimensions, performance, artwork, packing and evidence.</p></li><li><span>04</span><h3>Request samples</h3><p>Approve a representative product before bulk production.</p></li></ol></section>
  <section class="section applications-hub-links"><div><p class="eyebrow">Buyer support</p><h2>Continue from Application to Approval</h2></div><div class="link-grid"><a href="/products/">Browse All Products</a><a href="/custom-oem/">Review Custom OEM</a><a href="/compliance/">Visit Compliance Center</a><a href="/inquiry/">Request Samples & Quote</a></div>
  </section>
  ${ctaBand("Tell us the application, destination and expected order")}`;
  return layout({
    route: "/applications/",
    title: "Food Paper Packaging Applications | Bakery, Cafe & Food Service",
    description: "Explore LANGMAI bakery, cafe and foodservice paper packaging solutions, with relevant products, custom OEM support, compliance review and sample inquiry paths.",
    content,
    bodyClass: "applications-hub-page",
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
  const content = `<section class="factory-hero-new"><div><p class="eyebrow">Factory & process evidence</p><h1>See how food paper moves from roll to finished pack.</h1><p>LANGMAI combines printing, roll processing, converting and packing in a ${company.plant} site supported by a ${company.team}. The exact process depends on the approved paper construction and product format.</p><div class="hero-actions"><a class="button primary" href="/inquiry/">Ask for a Factory Review</a><a class="button secondary" href="#document-library">View Document Library</a></div></div><figure><img src="/assets/factory-real-overview-1600.webp" width="1600" height="1200" fetchpriority="high" decoding="async" alt="LANGMAI paper packaging production floor with roll-processing equipment"><figcaption>Real production view from LANGMAI</figcaption></figure></section>
  <section class="trust-strip" aria-label="Factory facts"><span>Founded in ${company.founded}</span><span>${company.plant} site</span><span>${company.team}</span><span>Export-ready packing support</span></section>
  <section class="section factory-process-section"><div class="section-heading"><p class="eyebrow">Production capability</p><h2>Four visible stages behind the finished product.</h2><p>These photos document the factory environment and equipment. They do not replace an order-specific process review or product certificate.</p></div><div class="factory-process-grid"><article><img src="/assets/factory-real-printing-wide-1600.webp" loading="lazy" decoding="async" alt="LANGMAI printing line with large paper rolls"><div><span>01</span><h3>Printing</h3><p>Artwork, print coverage and ink options are reviewed against the selected food-paper construction before a sample is approved.</p></div></article><article><img src="/assets/factory-real-roll-line-1600.webp" loading="lazy" decoding="async" alt="LANGMAI roll-processing equipment in a clean production area"><div><span>02</span><h3>Coating & roll processing</h3><p>Where the approved construction calls for coating or treatment, roll processing is arranged against its material, food-contact and performance specification.</p></div></article><article><img src="/assets/factory-real-converting-1600.webp" loading="lazy" decoding="async" alt="LANGMAI paper converting equipment for finished food packaging formats"><div><span>03</span><h3>Converting</h3><p>Slitting, sheets, perforation, die-cutting, forming and bag making are selected for the required finished format.</p></div></article><article><img src="/assets/factory-real-production-team-1600.webp" loading="lazy" decoding="async" alt="LANGMAI production team working in the paper packaging workshop"><div><span>04</span><h3>Production team & packing</h3><p>People, packing instructions, lot identification and shipment preparation keep the approved version connected to the export carton.</p></div></article></div></section>
  <section class="split-section factory-quality-note"><div><p class="eyebrow">Quality management</p><h2>Use factory evidence to ask better approval questions.</h2><p>A useful buyer review connects each declaration, report or certificate to the correct company, site, material, tested construction, intended use and validity period.</p><ul class="check-list"><li>Confirm whether a file covers the factory, management system, raw material or finished product.</li><li>Check sample description, test method, date, issuing body and destination-market relevance.</li><li>Record the approved material, dimensions, artwork, production lot, pack count and shipment checks.</li></ul></div><img src="/assets/factory-real-printing-process-1600.webp" loading="lazy" decoding="async" alt="Printed paper web moving through LANGMAI production equipment"></section>
  <section class="section compliance-groups"><article id="food-contact"><p class="eyebrow">01 · Food-contact documents</p><h2>Product and intended-use evidence</h2><p>Available LFGB, DGCCRF and related food-contact reports can support buyer review when the tested paper or finished construction represents the proposed order. Confirm food type, contact conditions, temperature and test scope.</p><div class="badge-grid"><span>LFGB</span><span>BfR review</span><span>DGCCRF</span><span>Product-specific scope</span></div></article><article id="pfas-evidence"><p class="eyebrow">02 · PFAS evidence</p><h2>Declarations and testing matched to construction</h2><p>PFAS-related evidence may include supplier declarations, material statements or product-specific reports. Review analyte scope, method, reporting limits and sample identity before using a commercial claim.</p><a class="text-link" href="/pfas-free-baking-paper/">Review PFAS-free options →</a></article><article id="sustainability-sourcing"><p class="eyebrow">03 · Sustainability and paper sourcing</p><h2>FSC and EUDR are separate workstreams</h2><p>FSC documentation can support certified sourcing claims for the applicable paper and chain-of-custody route. EUDR requires product-scope analysis and due-diligence data such as origin, species and geolocation; it is not a product certificate.</p><div class="hero-actions"><a class="button secondary" href="/assets/cert-fsc.pdf" target="_blank" rel="noopener">View FSC PDF</a><a class="button secondary" href="/eudr-traceability/">Review EUDR Support</a></div></article><article id="quality-management"><p class="eyebrow">04 · Factory and quality management</p><h2>Site, process and shipment controls</h2><p>Available BSCI, BRC and ISO-related files support supplier screening. Order-level control should still cover approved materials, dimensions, artwork, production lots, pack counts and shipment preparation.</p><div class="badge-grid"><span>BSCI</span><span>BRC</span><span>ISO</span><span>Incoming material</span><span>Production lot</span><span>Final packing</span></div></article></section>
  <section class="section" id="document-library"><p class="eyebrow">Document previews</p><h2>Files available for initial buyer screening.</h2><p class="note">These previews help buyers identify the available evidence. Current validity, issuing party, exact report number, tested construction and order applicability should be confirmed during the RFQ and approval process.</p>${certificateCards()}</section>
  ${ctaBand("Need factory or product documents for importer approval?")}`;
  return layout({
    route: "/factory-certificates/",
    title: "Food Paper Packaging Factory & Quality Evidence | LANGMAI",
    description: "See LANGMAI printing, roll processing, converting and packing capability, then review available food-contact, PFAS, sourcing and factory-quality documents.",
    content,
  });
}

function aboutPage() {
  const content = `<section class="about-hero-new"><div><p class="eyebrow">About LANGMAI</p><h1>A paper packaging partner for practical B2B programs.</h1><p>${company.name} has supplied food paper products from ${company.city} since ${company.founded}. We work with importers, distributors, bakeries, foodservice buyers and private-label brands that need clear specifications, responsive sampling and export-ready packing.</p><div class="hero-actions"><a class="button primary" href="/contact/">Contact ${company.contact}</a><a class="button secondary" href="/factory-certificates/">Review Factory Evidence</a></div></div><figure><img src="/assets/factory-real-production-team-1600.webp" width="1600" height="900" fetchpriority="high" decoding="async" alt="LANGMAI production team working in the paper packaging workshop"><figcaption>People and process behind the finished paper format</figcaption></figure></section>
  <section class="trust-strip about-facts" aria-label="LANGMAI company facts"><span><strong>${company.founded}</strong> founded</span><span><strong>${company.plant}</strong> site</span><span><strong>${company.team}</strong></span><span><strong>Global B2B</strong> export support</span></section>
  <section class="split-section about-profile"><img src="/assets/factory-real-overview-1600.webp" loading="lazy" decoding="async" alt="LANGMAI paper packaging production floor"><div><p class="eyebrow">Company profile</p><h2>Clear product decisions make repeat orders easier.</h2><p>The product range covers cake cups, cupcake liners, muffin and tulip cups, baking parchment, air fryer liners, greaseproof wrapping paper, paper straws and selected paper accessories.</p><p>Buyers can discuss paper type, dimensions, forming, printing, color, pack count, retail presentation and export-carton requirements as one controlled specification rather than sourcing each step separately.</p><p>${company.contact} is the named contact for overseas inquiries, helping connect product requirements with samples, document review and quotation follow-up.</p></div></section>
  <section class="section"><div class="section-heading"><p class="eyebrow">How we support a project</p><h2>From first brief to repeat supply.</h2></div><div class="process-grid">${[["01", "Define the application", "Confirm the food, dimensions, use conditions, destination market and quantity."],["02", "Select the construction", "Match paper, treatment, shape, print, color and pack format to the approved use."],["03", "Review samples", "Check appearance, dimensions, forming, odor, grease resistance and packing."],["04", "Approve the specification", "Record accepted material, size, artwork, pack count, carton details and inspection points."],["05", "Produce and inspect", "Manufacture against the approved version and review lot and shipment preparation."],["06", "Support repeat supply", "Use the approved specification as the reference for reorders and controlled changes."]].map(([number, title, text]) => `<article><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
  <section class="section about-capabilities"><div class="section-heading"><p class="eyebrow">Factory capability</p><h2>Printing, converting and packing for food paper formats.</h2><p>The exact process depends on the approved construction and intended use.</p></div><div class="home-capability-list"><article><h3>Printing</h3><p>Artwork, colors and low-odor ink options are reviewed against the selected paper.</p></article><article><h3>Roll processing</h3><p>Paper rolls can be processed for the selected coating, treatment, width and downstream format.</p></article><article><h3>Converting</h3><p>Slitting, sheets, perforation, die-cutting, forming and bag making support finished formats.</p></article><article><h3>Packing</h3><p>Bulk, foodservice, retail and private-label packs can be planned with export cartons.</p></article></div></section>
  <section class="image-band about-gallery"><img src="/assets/factory-real-printing-wide-1600.webp" loading="lazy" decoding="async" alt="LANGMAI printing line with paper rolls"><img src="/assets/factory-real-roll-line-1600.webp" loading="lazy" decoding="async" alt="LANGMAI roll processing equipment"><img src="/assets/factory-real-converting-1600.webp" loading="lazy" decoding="async" alt="LANGMAI paper converting equipment"></section>
  <section class="section two-col"><div><p class="eyebrow">Markets and buyer types</p><h2>Built for international purchasing workflows.</h2><p>LANGMAI serves buyers in ${company.markets}. Typical customers include ${company.customers}. Support can cover mixed-product inquiries, private-label artwork, samples, target-market documents, retail packing and export cartons.</p></div><div><p class="eyebrow">Start a conversation</p><h2>Send the details that matter.</h2><ul class="check-list"><li>Product photo, drawing or reference size</li><li>Material, food use and operating conditions</li><li>Estimated quantity and pack format</li><li>Custom print or private-label requirements</li><li>Destination country and required documents</li><li>Target delivery timing and port</li></ul><a class="button primary" href="/inquiry/">Send Your Requirements</a></div></section>
  <section class="split-section about-evidence"><div><p class="eyebrow">Quality and documentation</p><h2>Evidence is reviewed against the product and market.</h2><p>Available files include previews or documents associated with BSCI, BRC, ISO, FSC, LFGB, DGCCRF and PFAS-related review. Buyers should confirm current validity, issuing party, tested construction, intended use and market applicability for the exact item being ordered.</p><div class="badge-grid">${["BSCI", "BRC", "ISO", "FSC", "LFGB", "DGCCRF", "PFAS review", "EUDR support"].map((item) => `<span>${item}</span>`).join("")}</div></div><img src="/assets/cert-lfgb.png" loading="lazy" decoding="async" alt="Preview of an available LANGMAI LFGB food-contact test document"></section>
  ${ctaBand("Looking for a paper packaging manufacturer for your next program?")}`;
  return layout({
    route: "/about/",
    title: "About LANGMAI | Food Paper Packaging Manufacturer Since 2006",
    description: "Learn about LANGMAI in Jinhua, China: a food paper packaging manufacturer supporting product development, custom printing, OEM sampling, quality review and export supply.",
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
           <span>Available document review may include BSCI, ISO, FSC, LFGB and FDA-related support; verify product, scope and validity.</span>
          <span>WhatsApp quick reply</span>
        </div>
        <div class="inquiry-contact">
          <strong>${company.contact}</strong>
          <a href="mailto:${company.email}">${company.email}</a>
          <a href="https://wa.me/8613645700210">${company.whatsapp}</a>
        </div>
      </div>
      <form id="sample" class="inquiry-form" data-inquiry-form novalidate>
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
  const eudrArticleNote = `<aside class="eudr-article-note" aria-labelledby="eudr-article-note-title">
      <p class="eyebrow">EUDR paper sourcing</p>
      <h2 id="eudr-article-note-title">Verify traceability for applicable paper products</h2>
      <p>LANGMAI supports buyer review of available paper-origin, species, geolocation and batch records for products within EUDR scope. EUDR is due diligence, not a product certificate: buyers should confirm scope and evidence for the selected paper and complete their own operator or trader obligations.</p>
      <a class="text-link" href="/resources/eudr-paper-baking-cups-traceability-checklist/">Use the EUDR traceability checklist</a>
    </aside>`;
  const content = resource.isLongForm ? `<article class="article longform-article">
    <p class="eyebrow">Buyer guide</p>
    <h1>${esc(resource.title)}</h1>
    ${resource.date ? `<p class="note">Published ${esc(resource.date)}</p>` : ""}
    <p class="lede">${esc(resource.description)}</p>
    <div class="badge-grid"><span>${esc(resource.intent || "Procurement research")}</span><span>Practical supplier selection</span></div>
    ${eudrArticleNote}
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
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/assets/logo.jpg`,
      contentUrl: `${baseUrl}/assets/logo.jpg`,
      width: 600,
      height: 600,
      caption: "LANGMAI company logo",
    },
    image: `${baseUrl}/assets/logo.jpg`,
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
  const iconLinks = `  <link rel="icon" type="image/jpeg" sizes="600x600" href="/assets/logo.jpg">\n  <link rel="shortcut icon" type="image/jpeg" href="/assets/logo.jpg">\n  <link rel="apple-touch-icon" href="/assets/logo.jpg">\n`;
  fs.writeFileSync(path.join(dir, "index.html"), html.replace("</head>", `${iconLinks}</head>`));
}

function readLocale(locale) {
  const file = path.join(siteDir, "i18n", `${locale}.json`);
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function translateHtml(html, localeData) {
  const schemaBlocks = [];
  let output = html.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, (block) => {
    const token = `__LANGMAI_SCHEMA_BLOCK_${schemaBlocks.length}__`;
    schemaBlocks.push([token, block]);
    return token;
  });
  const entries = Object.entries(localeData.phrases || {}).sort((a, b) => b[0].length - a[0].length);
  for (const [source, target] of entries) {
    if (!source || source === target) continue;
    output = output.replace(new RegExp(escapeRegExp(source), "g"), target);
  }
  for (const [token, block] of schemaBlocks) output = output.replace(token, block);
  return output;
}

function prefixInternalLinks(html, locale) {
  const reserved = new Set(["assets", "en", "es", "ru", "ar", "fr", "de", "pt"]);
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
  const switcherCodes = ["en", "es", "ru", "ar", "fr", "de", "pt"];
  localeNames.de = "Deutsch";
  return `<div class="language-switcher">
    <button class="language-current" type="button" aria-label="Select language">${currentLocale.toUpperCase()}</button>
    <div class="language-menu">
      ${switcherCodes.map((code) => {
        const href = code === "en"
          ? route
          : ["de", "fr"].includes(code)
            ? marketLocalePath(code, route) || localizedPath(code, "/")
            : localizedPath(code, route);
        return `<a data-locale-link="${code}" href="${href}">${localeNames[code]}</a>`;
      }).join("")}
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
  fs.writeFileSync(
    path.join(distDir, "google0eca82ffed8a2570.html"),
    "google-site-verification: google0eca82ffed8a2570.html"
  );
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
    "ai-air-fryer-liners-premium.png",
    "ai-cake-cups-premium.png",
    "ai-langmai-ip-showroom.png",
    "ai-quality-export-packaging.png",
    "banner-air-fryer-paper.png",
    "banner-cake-cups.png",
    "banner-paper-straws.png",
    "world-market-map.png",
  ]);
  for (const file of fs.readdirSync(assetSource)) {
    if (hiddenCatalogPages.has(file)) continue;
    fs.cpSync(path.join(assetSource, file), path.join(assetTarget, file), { recursive: true });
  }
  fs.writeFileSync(path.join(distDir, "styles.css"), css + productTemplateCss + warmThemeCss + redesignCss);
  fs.writeFileSync(path.join(distDir, "site.js"), js);
  fs.writeFileSync(path.join(distDir, "social-links.example.json"), JSON.stringify({ socialLinks }, null, 2));
  fs.writeFileSync(path.join(distDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`);
  localizePages();
  const marketRoutes = buildMarketSites(distDir);
  const translatedRoutes = pages.flatMap((route) => localeCodes.map((locale) => localizedPath(locale, route)));
  const sitemapRoutes = [...pages, ...translatedRoutes, ...marketRoutes];
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes.map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`).join("\n")}\n</urlset>\n`);
  const perLanguage = { en: pages, de: marketRoutes.filter((route) => route.startsWith("/de/")), fr: marketRoutes.filter((route) => route.startsWith("/fr/")) };
  for (const [locale, routes] of Object.entries(perLanguage)) {
    fs.writeFileSync(path.join(distDir, `sitemap-${locale}.xml`), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`).join("\n")}\n</urlset>\n`);
  }
  const customPagesDir = path.join(siteDir, "custom-pages");
  if (fs.existsSync(customPagesDir)) {
    for (const entry of fs.readdirSync(customPagesDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const target = path.join(distDir, entry.name.replace(/--/g, "/"));
      fs.rmSync(target, { recursive: true, force: true });
      fs.cpSync(path.join(customPagesDir, entry.name), target, { recursive: true });
      console.log(`custom page override: ${entry.name.replace(/--/g, "/")}`);
    }
  }
}

const css = `
:root{--ink:#221b18;--muted:#6d625b;--line:#e7dccb;--paper:#fff9ef;--soft:#f3ebdd;--green:#1f3a31;--deep:#0e1110;--copper:#a45a32;--gold:#d8b45a;--gold-soft:#f5df9a;--charcoal:#111513;--pink:#f7dce7;--blue:#e8f0ed}
*{box-sizing:border-box}body{margin:0;background:linear-gradient(180deg,#fff9ef 0%,#f7f0e4 52%,#fff9ef 100%);color:var(--ink);font-family:Inter,Arial,sans-serif;line-height:1.6}img{max-width:100%;display:block}a{color:inherit}.skip-link{position:absolute;left:-999px}.skip-link:focus{left:1rem;top:1rem;background:#fff;padding:.75rem;z-index:10}.site-header{position:sticky;top:0;z-index:5;background:rgba(255,249,239,.86);border-bottom:1px solid rgba(216,180,90,.28);backdrop-filter:blur(18px) saturate(1.25);box-shadow:0 12px 34px rgba(17,21,19,.08)}.header-inner{max-width:1180px;margin:auto;display:flex;align-items:center;gap:1.4rem;padding:.8rem 1rem}.brand img{width:136px;height:46px;object-fit:contain}.main-nav{display:flex;gap:.25rem;flex:1;justify-content:center;align-items:center;flex-wrap:wrap}.nav-item{position:relative}.nav-link{display:inline-flex;align-items:center;min-height:42px;padding:.55rem .75rem;border-radius:6px;text-decoration:none;color:var(--green);font-weight:800}.nav-link:hover,.nav-item:focus-within .nav-link{background:rgba(17,21,19,.92);color:var(--gold);box-shadow:0 10px 24px rgba(17,21,19,.16),inset 0 0 0 1px rgba(216,180,90,.34)}.mega-menu{position:fixed;left:50%;top:76px;width:min(980px,calc(100vw - 2rem));transform:translateX(-50%) translateY(10px);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s ease,transform .18s ease,visibility .18s ease;z-index:20}.nav-item:hover .mega-menu,.nav-item:focus-within .mega-menu{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0)}.mega-inner{display:grid;grid-template-columns:310px 1fr;gap:1rem;padding:1rem;background:linear-gradient(135deg,rgba(17,21,19,.9),rgba(31,58,49,.82));border:1px solid rgba(216,180,90,.34);border-radius:8px;box-shadow:0 28px 78px rgba(17,21,19,.28),inset 0 1px 0 rgba(255,255,255,.14);backdrop-filter:blur(24px) saturate(1.25)}.mega-intro{padding:1rem;border-radius:8px;background:linear-gradient(145deg,rgba(216,180,90,.2),rgba(255,249,239,.08));color:#fff}.mega-intro h2{margin:.25rem 0 .75rem;font-size:1.55rem;line-height:1.15}.mega-intro p{color:rgba(255,255,255,.78)}.mega-links{display:grid;grid-template-columns:repeat(2,1fr);gap:.65rem}.mega-links a{display:grid;gap:.25rem;min-height:86px;padding:.85rem;border-radius:8px;text-decoration:none;color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(216,180,90,.22);transition:transform .16s ease,background .16s ease,box-shadow .16s ease}.mega-links a:hover{transform:translateY(-2px);background:rgba(216,180,90,.16);box-shadow:0 12px 28px rgba(0,0,0,.22)}.mega-links span{color:rgba(255,255,255,.72);font-size:.92rem}.site-footer a{text-decoration:none;color:var(--deep);font-weight:650}.header-cta,.button{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:.75rem 1rem;border-radius:6px;text-decoration:none;font-weight:800;border:1px solid transparent}.primary{background:linear-gradient(135deg,var(--charcoal),var(--green));color:#fff;border-color:rgba(216,180,90,.45);box-shadow:0 12px 28px rgba(17,21,19,.18)}.primary:hover{background:var(--gold);color:#0e1110}.secondary{background:rgba(255,249,239,.9);color:var(--green);border-color:rgba(31,58,49,.62)}.secondary:hover{background:#111513;color:var(--gold);border-color:var(--gold)}.hero{min-height:calc(100vh - 76px);position:relative;display:grid;align-items:center;overflow:hidden;background:#120f0d}.hero-slider{position:absolute;inset:0;overflow:hidden}.hero-slide{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(70%);opacity:0;transform:scale(1.05);animation:heroSlide 18s infinite}.hero-slide:nth-child(1){animation-delay:0s}.hero-slide:nth-child(2){animation-delay:6s}.hero-slide:nth-child(3){animation-delay:12s}.hero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.54),rgba(0,0,0,.3));pointer-events:none}.hero-copy{position:relative;z-index:1;max-width:760px;padding:5rem 1rem;margin-left:max(1rem,calc((100vw - 1180px)/2));color:#fff}.hero .eyebrow{color:var(--gold-soft);text-shadow:0 2px 16px rgba(0,0,0,.28)}.hero .hero-copy p{color:rgba(255,255,255,.9)}@keyframes heroSlide{0%{opacity:0;transform:scale(1.05) translateX(1.5%)}6%{opacity:1}30%{opacity:1}38%{opacity:0;transform:scale(1.12) translateX(-1.5%)}100%{opacity:0}}@media (prefers-reduced-motion:reduce){.hero-slide{animation:none}.hero-slide:first-child{opacity:1}}.eyebrow{text-transform:uppercase;letter-spacing:.08em;color:var(--copper);font-size:.78rem;font-weight:900}.hero h1,.page-hero h1,.product-hero h1,.landing-hero h1{font-size:clamp(2rem,5vw,4.9rem);line-height:1.04;margin:.25rem 0 1rem;letter-spacing:0}.hero p,.page-hero p,.landing-hero p{font-size:1.12rem;color:var(--muted);max-width:760px}.hero-actions,.cta-actions{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1.5rem}.trust-strip{display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center;padding:1rem;background:linear-gradient(135deg,#0e1110,#1f3a31);color:#fff;border-top:1px solid rgba(216,180,90,.25);border-bottom:1px solid rgba(216,180,90,.25)}.trust-strip span{border:1px solid rgba(216,180,90,.38);border-radius:999px;padding:.35rem .7rem;font-weight:700;background:rgba(255,255,255,.06);box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}.market-map{padding-top:3rem}.map-panel{background:linear-gradient(145deg,#fffdf8,#fff4dc);border:1px solid rgba(216,180,90,.28);border-radius:8px;padding:1rem;box-shadow:0 22px 55px rgba(17,21,19,.14), inset 0 1px 0 rgba(255,255,255,.9);overflow:hidden}.map-panel svg,.map-panel img{width:100%;height:auto;display:block}.map-image-panel img{border-radius:6px;object-fit:contain;background:#fff}.market-lines path{stroke:#c9342c;stroke-width:1.45;fill:none;opacity:.76;marker-end:url(#arrow)}.map-tags rect{fill:#cf2f2f;rx:7;ry:7;filter:drop-shadow(0 3px 3px rgba(95,18,18,.24))}.map-tags text{font:800 12px Inter,Arial,sans-serif;fill:#fff;text-anchor:middle;dominant-baseline:middle}.world-land{opacity:.95}.section,.page-hero,.product-hero,.landing-hero,.split-section,.cta-band,.article{max-width:1180px;margin:auto;padding:4.5rem 1rem}.section-heading{max-width:760px;margin-bottom:2rem}.section h2,.split-section h2,.cta-band h2,.article h2{font-size:clamp(1.45rem,3vw,2.5rem);line-height:1.15;margin:.2rem 0 1rem}.product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.product-card,.resource-grid article,.process-grid article{background:linear-gradient(180deg,#fffdf8,#fff7ea);border:1px solid rgba(216,180,90,.22);border-radius:8px;overflow:hidden;box-shadow:0 16px 34px rgba(17,21,19,.08)}.product-card img{height:240px;width:100%;object-fit:cover}.product-card div,.resource-grid article,.process-grid article{padding:1rem}.product-card h3{font-size:1.1rem;line-height:1.25}.text-link{font-weight:850;color:var(--copper)}.split-section,.product-hero,.landing-hero,.two-col,.footer-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center}.split-section img,.product-hero img,.landing-hero img{border-radius:8px;border:1px solid var(--line);background:#fff;max-height:680px;width:100%;object-fit:cover}.check-list{padding-left:1.1rem}.check-list li{margin:.45rem 0}.process-list li{margin:.5rem 0}.table-wrap{overflow:auto;border:1px solid var(--line);border-radius:8px;background:#fff}table{width:100%;border-collapse:collapse;min-width:620px}th,td{text-align:left;padding:.8rem;border-bottom:1px solid var(--line)}th{background:#111513;color:var(--gold)}.image-band{max-width:1180px;margin:0 auto;padding:1rem;display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.image-band img{height:330px;width:100%;object-fit:cover;border-radius:8px;border:1px solid var(--line);background:#fff}.lead-form{background:linear-gradient(180deg,#fffdf8,#fff7ea);border:1px solid rgba(216,180,90,.28);border-radius:8px;padding:1rem;display:grid;gap:.8rem;box-shadow:0 18px 40px rgba(17,21,19,.09)}.lead-form label{display:grid;gap:.25rem;font-weight:800;color:var(--deep)}input,select,textarea{width:100%;min-height:44px;border:1px solid #cfc4bc;border-radius:6px;padding:.65rem;font:inherit;background:#fff}textarea{resize:vertical}.form-note,.note{color:var(--muted);font-size:.93rem}.faq details{background:#fff;border:1px solid var(--line);border-radius:8px;padding:1rem;margin:.75rem 0}.faq summary{cursor:pointer;font-weight:850}.link-grid,.badge-grid{display:flex;flex-wrap:wrap;gap:.7rem}.link-grid a,.badge-grid span{background:#fffaf0;border:1px solid rgba(216,180,90,.32);border-radius:999px;padding:.55rem .85rem;text-decoration:none;font-weight:800;color:var(--green)}.cta-band{background:linear-gradient(135deg,#0e1110,#1f3a31 62%,#a45a32);border-top:1px solid rgba(216,180,90,.28);border-bottom:1px solid rgba(216,180,90,.28);max-width:none;display:flex;justify-content:center;gap:3rem;color:#fff}.cta-band>div{max-width:580px}.cta-band p{color:rgba(255,255,255,.82)}.certificate-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:1.5rem 0}.certificate-card{background:linear-gradient(180deg,#fffdf8,#fff7ea);border:1px solid rgba(216,180,90,.28);border-radius:8px;overflow:hidden;box-shadow:0 18px 38px rgba(17,21,19,.1)}.certificate-card a{display:block;background:#fff}.certificate-card img{width:100%;height:260px;object-fit:cover;object-position:top;border-bottom:1px solid rgba(216,180,90,.22)}.certificate-card div{padding:1rem}.certificate-card h3{margin:.1rem 0 .35rem;color:var(--green)}.certificate-card p{margin:0;color:var(--muted);font-size:.95rem}.trust-evidence{background:linear-gradient(135deg,rgba(17,21,19,.04),rgba(216,180,90,.08));border-top:1px solid rgba(216,180,90,.18);border-bottom:1px solid rgba(216,180,90,.18)}.resource-grid,.process-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.process-grid span{display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;background:var(--gold);color:#0e1110;border-radius:50%;font-weight:900}.article{max-width:860px}.article .lede{font-size:1.2rem;color:var(--muted)}.article p{font-size:1.05rem}.article-links{margin-top:2rem;display:grid;gap:.75rem}.sample-box{margin-top:1.5rem;padding:1rem;background:#fff4dc;border:1px solid rgba(216,180,90,.25);border-radius:8px}.site-footer{background:linear-gradient(135deg,#0e1110,#1f3a31);color:#fff;margin-top:3rem;border-top:1px solid rgba(216,180,90,.35)}.footer-grid{max-width:1180px;margin:auto;padding:2.5rem 1rem;align-items:start}.site-footer a{display:block;color:#fff;margin:.35rem 0}.site-footer p{color:rgba(255,255,255,.72)}.whatsapp-float{position:fixed;right:1rem;bottom:1rem;background:linear-gradient(135deg,#1f8f51,#1f3a31);color:#fff;padding:.8rem 1rem;border-radius:999px;text-decoration:none;font-weight:900;box-shadow:0 14px 34px rgba(0,0,0,.26),0 0 0 1px rgba(216,180,90,.28)}.landing-page .site-header{position:relative}
@media (max-width:900px){.map-panel{padding:.35rem}.map-tags text{font-size:15px}.header-inner{align-items:flex-start;flex-direction:column}.main-nav{justify-content:flex-start}.mega-menu{position:static;width:100%;transform:none;opacity:1;visibility:visible;pointer-events:auto;display:none}.nav-item:focus-within .mega-menu,.nav-item:hover .mega-menu{display:block;transform:none}.mega-inner{grid-template-columns:1fr}.mega-links{grid-template-columns:1fr}.hero{min-height:720px}.product-grid,.resource-grid,.process-grid,.image-band,.certificate-grid{grid-template-columns:1fr}.split-section,.product-hero,.landing-hero,.two-col,.footer-grid{grid-template-columns:1fr}.cta-band{display:block}.product-card img,.image-band img,.certificate-card img{height:auto}.header-cta{display:none}}
 .reference-cta{position:relative;max-width:none;min-height:320px;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:linear-gradient(90deg,rgba(35,25,18,.88),rgba(35,25,18,.52) 55%,rgba(35,25,18,.18)),url('/assets/home-generated-cta.png') center/cover no-repeat;color:#fff}.reference-cta h2{color:#fff}.reference-cta p{color:rgba(255,255,255,.86)}
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
.eudr-article-note{margin:1.5rem 0;padding:1.15rem 1.2rem;border:1px solid rgba(69,107,85,.28);border-left:5px solid var(--green);border-radius:8px;background:linear-gradient(135deg,rgba(238,246,239,.92),rgba(255,247,235,.92))}.eudr-article-note h2{margin:.2rem 0 .55rem;font-size:1.45rem}.eudr-article-note p{margin:.35rem 0 .65rem}.eudr-article-note .eyebrow{color:var(--green)}
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
.header-inner{max-width:1400px;gap:.65rem}.nav-link{padding:.5rem .52rem;font-size:.9rem}.header-cta{padding:.7rem .78rem;white-space:nowrap}
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
.hero{background:#38271f}.hero-slide{filter:brightness(78%) saturate(1.02);opacity:0;transform:translateZ(0) scale(1.035);animation:none;transition:opacity 1.15s cubic-bezier(.4,0,.2,1),transform 6s ease-out;will-change:opacity,transform;backface-visibility:hidden}.hero-slide.is-active{opacity:1;transform:translateZ(0) scale(1)}.hero:after{background:linear-gradient(90deg,rgba(62,39,28,.74),rgba(92,59,42,.44),rgba(255,245,232,.12))}.hero .eyebrow{color:#ffe1aa}.hero .hero-copy p{color:rgba(255,250,244,.92)}
@media (prefers-reduced-motion:reduce){.hero-slide{transition:none}.hero-slide:not(:first-child){display:none}}
.hero-proof{display:flex;gap:.55rem;flex-wrap:wrap;margin:1.2rem 0 .2rem}.hero-proof span{padding:.42rem .72rem;border-radius:999px;background:rgba(255,248,238,.18);border:1px solid rgba(255,225,170,.5);color:#fff4df;font-weight:850;box-shadow:inset 0 1px 0 rgba(255,255,255,.16)}
.trust-strip{background:linear-gradient(135deg,#77503b,#6f8b65);border-color:rgba(255,225,170,.35)}.trust-strip span{background:rgba(255,250,244,.16);border-color:rgba(255,231,187,.45)}
.advantage-section,.solution-section{background:linear-gradient(135deg,rgba(255,244,228,.78),rgba(241,248,236,.68));border-top:1px solid rgba(217,168,92,.18);border-bottom:1px solid rgba(217,168,92,.18);max-width:none}.advantage-section>.section-heading,.solution-section>.section-heading,.advantage-grid,.solution-grid{max-width:1180px;margin-left:auto;margin-right:auto}.advantage-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}.solution-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem}.advantage-grid article,.solution-grid article{background:rgba(255,255,255,.72);border:1px solid rgba(217,168,92,.24);border-radius:8px;padding:1rem;box-shadow:0 16px 34px rgba(111,75,48,.08)}.advantage-grid h3,.solution-grid h3{margin:.1rem 0 .55rem;color:#385945;line-height:1.2}.advantage-grid p,.solution-grid p{margin:0;color:var(--muted)}
.product-card,.resource-grid article,.process-grid article,.lead-form,.certificate-card{background:linear-gradient(180deg,#fffdf8,#fff4e8);border-color:rgba(217,168,92,.24);box-shadow:0 16px 34px rgba(111,75,48,.08)}.trust-evidence{background:linear-gradient(135deg,rgba(255,244,228,.7),rgba(241,248,236,.58))}.map-panel{background:linear-gradient(145deg,#fffdf8,#f7ead8);box-shadow:0 22px 55px rgba(111,75,48,.12),inset 0 1px 0 rgba(255,255,255,.9)}
.evidence-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.evidence-grid article,.compliance-groups>article{padding:1.2rem;border:1px solid rgba(217,168,92,.24);border-radius:8px;background:rgba(255,255,255,.72);box-shadow:0 16px 34px rgba(111,75,48,.08)}.evidence-grid h3{margin:.1rem 0 .5rem;color:#385945}.evidence-grid p{margin:0;color:var(--muted)}.pfas-home-section{background:linear-gradient(135deg,rgba(241,248,236,.8),rgba(255,244,228,.72));border-top:1px solid rgba(217,168,92,.18);border-bottom:1px solid rgba(217,168,92,.18);max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2))}.pfas-product-module{display:grid;grid-template-columns:1fr 1fr;gap:1.4rem;padding:1.35rem!important;border:1px solid rgba(69,107,85,.25);border-radius:8px;background:linear-gradient(135deg,rgba(241,248,236,.9),rgba(255,244,228,.88))}.buyer-checklist{padding:1rem;border-radius:8px;background:rgba(255,255,255,.7);border:1px solid rgba(217,168,92,.2)}.buyer-checklist h3{margin-top:0}.compliance-groups{display:grid;gap:1rem}.compliance-groups>article{scroll-margin-top:120px}.supporting-products{padding-top:1rem}
.food-wrapping-range{background:linear-gradient(135deg,rgba(255,244,228,.72),rgba(241,248,236,.62));max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));border-top:1px solid rgba(217,168,92,.18);border-bottom:1px solid rgba(217,168,92,.18)}.category-card{border-color:rgba(69,107,85,.36)}.wrapping-category-hero,.wrapping-product-hero{background:radial-gradient(circle at 12% 12%,rgba(217,168,92,.16),transparent 30%),linear-gradient(135deg,#fff8ed,#eef5eb);max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2))}.wrapping-category-hero>*,.wrapping-product-hero>*{max-width:720px}.wrapping-category-hero img,.wrapping-product-hero img{max-height:620px;aspect-ratio:3/2}.wrapping-overview{align-items:start}.verification-alert{margin-top:2rem;background:#fff1dc;border:1px solid rgba(179,111,75,.36);border-left:5px solid #b36f4b;border-radius:8px;padding:1.4rem}.verification-alert h2{font-size:clamp(1.4rem,2.5vw,2.1rem)}.wax-comparison{background:linear-gradient(135deg,rgba(255,244,228,.72),rgba(241,248,236,.62));border-radius:8px}.wax-comparison article{padding:1rem;background:rgba(255,255,255,.68);border:1px solid rgba(217,168,92,.2);border-radius:8px}.specification-review{padding-top:2.5rem}.wrapping-inquiry-form{grid-template-columns:repeat(2,minmax(0,1fr))}.wrapping-inquiry-form label:nth-last-of-type(-n+3),.wrapping-inquiry-form button,.wrapping-inquiry-form .form-note{grid-column:1/-1}
th{background:#6f4b38;color:#fff4df}.link-grid a,.badge-grid span{background:#fff4e4;border-color:rgba(217,168,92,.3);color:#456b55}.process-grid span{background:#e8bd75;color:#2f211b}.sample-box{background:#fff1dc}
.cta-band{background:linear-gradient(135deg,#77503b,#6f8b65 72%,#d9a85c);border-color:rgba(255,225,170,.35)}.site-footer{background:linear-gradient(135deg,#5e4031,#496c55);border-top-color:rgba(255,225,170,.35)}.site-footer p{color:rgba(255,250,244,.78)}
.whatsapp-float{background:linear-gradient(135deg,#4f9c68,#456b55);box-shadow:0 14px 34px rgba(69,107,85,.24),0 0 0 1px rgba(255,225,170,.35)}
.preview-home{background:#fbfaf5}.preview-home .hero{min-height:760px}.preview-home .hero:after{background:linear-gradient(90deg,rgba(27,48,39,.88) 0%,rgba(27,48,39,.68) 46%,rgba(27,48,39,.14) 78%)}.preview-home .hero-copy{max-width:840px}.preview-home .hero h1{font-size:clamp(2.7rem,5.4vw,5.4rem);max-width:830px}.preview-home .hero-copy>p:not(.eyebrow){max-width:720px;font-size:1.18rem}.preview-home .hero-actions .button{min-width:190px}.preview-home .trust-strip{background:#28493b}
.preview-solutions{padding-top:6rem;padding-bottom:6rem}.preview-solution-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.1rem}.preview-solution-card{position:relative;display:flex;min-height:480px;overflow:hidden;border-radius:14px;padding:1.25rem;color:#fff;text-decoration:none;align-items:flex-end;background-position:center;background-size:cover;box-shadow:0 24px 52px rgba(33,50,42,.15);isolation:isolate}.preview-solution-card:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(20,37,30,.05),rgba(20,37,30,.88));z-index:-1}.preview-solution-card:after{content:"";position:absolute;inset:0;background:rgba(255,255,255,.08);opacity:0;transition:opacity .25s}.preview-solution-card:hover:after{opacity:1}.preview-solution-card.bakery{background-image:url("/assets/ai-cake-cups-premium.jpg")}.preview-solution-card.wrapping{background-image:url("/assets/food-wrap-burger.webp")}.preview-solution-card.beverage{background-image:url("/assets/banner-paper-straws-1448.webp")}.preview-solution-card>span{position:absolute;top:1.2rem;right:1.2rem;color:rgba(255,255,255,.8);font-size:.88rem;font-weight:900}.preview-solution-card p{margin:0 0 .35rem;color:#f4dca9;text-transform:uppercase;letter-spacing:.08em;font-size:.8rem;font-weight:900}.preview-solution-card h3{font-size:clamp(1.4rem,2.4vw,2.1rem);line-height:1.1;margin:.2rem 0 .9rem;color:#fff}.preview-solution-card small{font-weight:850;font-size:.92rem}
.preview-advantages{max-width:none;background:#eaf0e8;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2))}.preview-advantage-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}.preview-advantage-grid article{padding:1.35rem;border-top:3px solid #6f8b65;background:rgba(255,255,255,.75);box-shadow:0 14px 34px rgba(33,50,42,.07)}.preview-advantage-grid article>span{display:block;margin-bottom:1.3rem;color:#b48548;font-size:.8rem;font-weight:950}.preview-advantage-grid h3{color:#294b3d;margin:.2rem 0 .65rem}.preview-advantage-grid p{color:var(--muted);margin:0}
.preview-applications{padding-top:6rem;padding-bottom:6rem}.application-paths{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #cfd8ce;border-bottom:1px solid #cfd8ce}.application-paths a{display:grid;gap:.35rem;padding:1.7rem;text-decoration:none;color:var(--ink);border-right:1px solid #cfd8ce;transition:background .2s}.application-paths a:last-child{border-right:0}.application-paths a:hover{background:#eef3ec}.application-paths strong{font-family:Georgia,"Times New Roman",serif;font-size:1.45rem;color:#294b3d}.application-paths span{color:var(--muted)}
.preview-oem{padding-top:6rem;padding-bottom:6rem}.preview-oem img,.preview-factory img{min-height:520px}.compact-process{display:grid;grid-template-columns:repeat(5,1fr);gap:.5rem;list-style:none;padding:0;counter-reset:compact}.compact-process li{position:relative;padding-top:2.4rem;color:#294b3d;font-size:.82rem;font-weight:850}.compact-process li:before{counter-increment:compact;content:"0" counter(compact);position:absolute;top:0;left:0;color:#b48548;font-size:.72rem}.compact-process li:not(:last-child):after{content:"";position:absolute;top:.55rem;left:1.8rem;width:calc(100% - 2rem);height:1px;background:#c7d2c6}
.preview-compliance{display:grid;grid-template-columns:1.2fr .8fr;gap:3rem;align-items:center;max-width:none;padding:6rem max(1rem,calc((100vw - 1180px)/2));background:#254638;color:#fff}.preview-compliance h2{color:#fff}.preview-compliance>div>p:not(.eyebrow){color:rgba(255,255,255,.75)}.preview-compliance .eyebrow{color:#efd29d}.preview-compliance .badge-grid span{background:rgba(255,255,255,.08);border-color:rgba(239,210,157,.28);color:#fff}.preview-compliance img{display:block;width:100%;max-height:420px;object-fit:cover;object-position:top;border-radius:12px;box-shadow:0 25px 60px rgba(0,0,0,.25)}
.preview-factory{padding-top:6rem;padding-bottom:6rem}.factory-stats{display:flex;gap:1.8rem;flex-wrap:wrap;margin:1.7rem 0}.factory-stats span{display:grid;color:var(--muted);font-size:.85rem}.factory-stats strong{color:#294b3d;font-family:Georgia,"Times New Roman",serif;font-size:1.85rem;line-height:1.1}
.preview-knowledge{max-width:none;background:#f3ecdf;padding:6rem max(1rem,calc((100vw - 1180px)/2))}.knowledge-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}.knowledge-grid>a{display:block;min-height:270px;padding:1.45rem;background:#fffdf8;border:1px solid rgba(86,112,91,.18);color:var(--ink);text-decoration:none;box-shadow:0 18px 38px rgba(43,59,49,.07);transition:transform .2s,box-shadow .2s}.knowledge-grid>a:hover{transform:translateY(-4px);box-shadow:0 24px 48px rgba(43,59,49,.12)}.knowledge-grid>a>span{display:block;color:#b48548;font-size:.8rem;font-weight:950}.knowledge-grid h3{margin:2.6rem 0 .7rem;font-family:Georgia,"Times New Roman",serif;font-size:1.35rem;color:#294b3d}.knowledge-grid p{color:var(--muted)}.knowledge-grid strong{display:block;margin-top:1.2rem;color:#456b55}
.preview-landing{background:#fbfaf5}.preview-landing .landing-hero{max-width:none;padding:5rem max(1rem,calc((100vw - 1180px)/2));background:linear-gradient(135deg,#eef3eb,#f6ead8)}.preview-landing .landing-hero h1{max-width:760px;font-size:clamp(2.6rem,5vw,4.7rem);color:#294b3d}.preview-landing .landing-hero img{max-height:560px;min-height:460px}.application-products{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:#edf2e9}.application-checklist{align-items:start}.application-checklist .lead-form{margin:0}.compliance-preview-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.compliance-preview-grid>article{padding:1.7rem;background:#fff;border:1px solid rgba(86,112,91,.19);box-shadow:0 18px 38px rgba(43,59,49,.07);scroll-margin-top:120px}.compliance-preview-grid h2{font-size:1.55rem}.oem-process{display:grid;grid-template-columns:1fr;max-width:880px;margin:auto}.oem-process article{display:grid;grid-template-columns:80px 1fr;gap:1.4rem;padding:1.5rem 0;border-bottom:1px solid #d4ddd2}.oem-process article>span{font-family:Georgia,"Times New Roman",serif;font-size:2.2rem;color:#b48548}.oem-process h3{margin:.1rem 0 .4rem;color:#294b3d;font-size:1.35rem}.oem-process p{margin:0;color:var(--muted)}
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
.premium-product-page{background:#fbfaf5}.premium-product-hero{display:grid;grid-template-columns:minmax(0,1.04fr) minmax(380px,.96fr);gap:3.2rem;align-items:center;max-width:none;padding:5.5rem max(1rem,calc((100vw - 1180px)/2));background:radial-gradient(circle at 8% 12%,rgba(217,168,92,.18),transparent 28%),linear-gradient(135deg,#f6ead8 0%,#eef3eb 100%);border-bottom:1px solid rgba(86,112,91,.18)}.premium-hero-copy{min-width:0}.premium-hero-copy h1{max-width:780px;margin:.45rem 0 1.15rem;font-size:clamp(2.55rem,5vw,4.9rem);line-height:1.02;color:#294b3d}.premium-hero-copy>p:not(.eyebrow){max-width:720px;font-size:1.12rem;color:#655448}.premium-trust{display:flex;gap:.55rem;flex-wrap:wrap;margin:1.4rem 0}.premium-trust span{padding:.46rem .7rem;border:1px solid rgba(69,107,85,.25);border-radius:999px;background:rgba(255,255,255,.62);color:#385945;font-size:.82rem;font-weight:850}.premium-hero-media{position:relative;overflow:hidden;border-radius:16px;box-shadow:0 28px 65px rgba(43,59,49,.18)}.premium-hero-media img{display:block;width:100%;height:560px;object-fit:cover}.premium-hero-media:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 62%,rgba(26,44,36,.62))}.premium-hero-media>span{position:absolute;z-index:1;left:1.2rem;bottom:1.1rem;color:#fff;font-weight:900;letter-spacing:.04em}.paper-straws-premium .premium-hero-media img{object-position:center}.premium-overview,.premium-applications,.premium-specifications,.straw-types-section,.baking-family-section{padding-top:5.5rem;padding-bottom:5.5rem}.premium-feature-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}.premium-feature-grid article{padding:1.35rem;border-top:3px solid #6f8b65;background:#fff;border-radius:6px;box-shadow:0 16px 38px rgba(43,59,49,.08)}.premium-feature-grid article>span,.straw-type-grid article>span,.baking-family-grid a div>span{display:block;margin-bottom:1.5rem;color:#b48548;font-size:.78rem;font-weight:950}.premium-feature-grid h3,.straw-type-grid h3{margin:.2rem 0 .6rem;color:#294b3d}.premium-feature-grid p,.straw-type-grid p{margin:0;color:var(--muted)}.premium-application-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;border-top:1px solid #ccd7cc;border-bottom:1px solid #ccd7cc}.premium-application-grid article{padding:1.55rem;border-right:1px solid #ccd7cc}.premium-application-grid article:last-child{border-right:0}.premium-application-grid h3{margin:.1rem 0 .55rem;font-family:Georgia,"Times New Roman",serif;font-size:1.35rem;color:#294b3d}.premium-application-grid p{margin:0;color:var(--muted)}.premium-split{display:grid;grid-template-columns:1fr 1fr;gap:3.2rem;align-items:center;padding-top:5.5rem;padding-bottom:5.5rem}.premium-split>img{display:block;width:100%;height:520px;object-fit:cover;border-radius:14px;box-shadow:0 24px 58px rgba(43,59,49,.14)}.premium-oem-section{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:#edf2e9}.premium-oem-section .check-list{margin:1.3rem 0}.premium-spec-table table{min-width:760px}.premium-spec-table th{background:#294b3d;color:#fff}.premium-spec-table tr:nth-child(even) td{background:rgba(237,242,233,.7)}.premium-specifications .note{margin-top:1rem}.premium-compliance{display:grid;grid-template-columns:1.12fr .88fr;gap:3rem;align-items:center;max-width:none;padding:5.5rem max(1rem,calc((100vw - 1180px)/2));background:#254638;color:#fff}.premium-compliance h2,.premium-compliance h3{color:#fff}.premium-compliance p{color:rgba(255,255,255,.76)}.premium-compliance .eyebrow{color:#efd29d}.premium-evidence{padding:1.35rem;border:1px solid rgba(239,210,157,.24);border-radius:10px;background:rgba(255,255,255,.08)}.premium-evidence .check-list li{color:rgba(255,255,255,.86)}.premium-factory{max-width:1180px}.premium-rfq{display:grid;grid-template-columns:.85fr 1.15fr;gap:2.5rem;align-items:start;scroll-margin-top:120px}.premium-rfq .lead-form{margin:0}.baking-family-section{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:#f3ecdf}.baking-family-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.baking-family-grid>a{display:grid;grid-template-columns:180px 1fr;min-height:240px;overflow:hidden;border:1px solid rgba(86,112,91,.18);background:#fff;text-decoration:none;color:var(--ink);box-shadow:0 18px 40px rgba(43,59,49,.08);transition:transform .2s,box-shadow .2s}.baking-family-grid>a:hover{transform:translateY(-4px);box-shadow:0 24px 50px rgba(43,59,49,.13)}.baking-family-grid img{width:100%;height:100%;object-fit:cover}.baking-family-grid a>div{padding:1.25rem}.baking-family-grid h3{margin:.15rem 0 .65rem;font-family:Georgia,"Times New Roman",serif;font-size:1.35rem;color:#294b3d}.baking-family-grid p{color:var(--muted)}.baking-family-grid strong{color:#456b55}.straw-type-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}.straw-type-grid article{padding:1.35rem;border:1px solid rgba(86,112,91,.18);background:#fff;box-shadow:0 16px 38px rgba(43,59,49,.08)}.straw-type-grid article.featured{background:linear-gradient(145deg,#294b3d,#456b55);border-color:#294b3d}.straw-type-grid article.featured h3{color:#fff}.straw-type-grid article.featured p{color:rgba(255,255,255,.76)}.straw-type-grid article.featured>span{color:#efd29d}
@media (max-width:900px){.advantage-grid,.solution-grid,.evidence-grid,.pfas-product-module,.wrapping-inquiry-form,.preview-solution-grid,.preview-advantage-grid,.knowledge-grid,.compliance-preview-grid{grid-template-columns:1fr}.advantage-section>.section-heading,.solution-section>.section-heading,.advantage-grid,.solution-grid{margin-left:0;margin-right:0}.wrapping-inquiry-form label,.wrapping-inquiry-form button,.wrapping-inquiry-form .form-note{grid-column:1}.wrapping-category-hero,.wrapping-product-hero{padding:3.2rem 1rem}.wrapping-category-hero img,.wrapping-product-hero img{max-height:none}.preview-home .hero{min-height:720px}.preview-home .hero h1{font-size:clamp(2.35rem,11vw,3.6rem)}.preview-home .hero:after{background:linear-gradient(90deg,rgba(27,48,39,.88),rgba(27,48,39,.62))}.preview-solution-card{min-height:390px}.application-paths{grid-template-columns:1fr}.application-paths a{border-right:0;border-bottom:1px solid #cfd8ce}.application-paths a:last-child{border-bottom:0}.preview-compliance{grid-template-columns:1fr;padding:4rem 1rem}.compact-process{grid-template-columns:1fr}.compact-process li{padding:.4rem 0 .4rem 2.4rem}.compact-process li:before{top:.4rem}.compact-process li:after{display:none}.preview-oem img,.preview-factory img,.preview-landing .landing-hero img{min-height:0}.factory-stats{gap:1.2rem}.preview-knowledge{padding:4rem 1rem}.knowledge-grid>a{min-height:0}.knowledge-grid h3{margin-top:1.5rem}}
@media (max-width:900px){.premium-product-hero,.premium-feature-grid,.premium-application-grid,.premium-split,.premium-compliance,.premium-rfq,.baking-family-grid,.straw-type-grid{grid-template-columns:1fr}.premium-product-hero{padding:3.4rem 1rem;gap:2rem}.premium-hero-copy h1{font-size:clamp(2.25rem,11vw,3.4rem)}.premium-hero-media img{height:auto;max-height:470px}.premium-overview,.premium-applications,.premium-specifications,.straw-types-section,.baking-family-section,.premium-split{padding-top:4rem;padding-bottom:4rem}.premium-feature-grid,.straw-type-grid{gap:.75rem}.premium-application-grid article{border-right:0;border-bottom:1px solid #ccd7cc}.premium-application-grid article:last-child{border-bottom:0}.premium-split>img{height:auto;max-height:440px}.premium-oem-section,.baking-family-section,.premium-compliance{padding-left:1rem;padding-right:1rem}.premium-compliance{padding-top:4rem;padding-bottom:4rem}.premium-rfq{gap:1.5rem}.baking-family-grid>a{grid-template-columns:120px 1fr;min-height:220px}.baking-family-grid a>div{padding:1rem}.premium-trust{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.premium-trust span{display:flex;align-items:center;border-radius:8px;font-size:.74rem}.premium-spec-table{max-width:100%;overflow-x:auto}}
@media (max-width:900px){.eudr-home,.product-eudr-support{grid-template-columns:1fr}.eudr-flow,.eudr-data-grid,.eudr-chain ol{grid-template-columns:1fr}.eudr-chain li:after{display:none}.eudr-home{padding-left:1rem;padding-right:1rem}.eudr-hero{width:100%;padding:3.2rem 1rem}.eudr-hero h1{font-size:2rem;line-height:1.08;word-break:normal}.eudr-hero p{font-size:1rem}.eudr-hero .hero-actions{display:grid;grid-template-columns:1fr}.eudr-hero .button{width:100%;max-width:100%;white-space:normal;text-align:center}.trust-strip span{max-width:100%;text-align:center}.eudr-flow article{min-width:0}.eudr-flow p,.eudr-data-grid p{overflow-wrap:anywhere}}
@media (max-width:900px){.brand img{width:116px;height:40px}.brand{padding:.28rem .4rem}.header-inner{position:relative;width:100%;max-width:100%;min-width:0;overflow:hidden;padding:.55rem .7rem;gap:.35rem}.main-nav{width:100%;min-width:0;flex:0 1 auto;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.08rem}.nav-item{min-width:0}.nav-link{width:100%;min-width:0;min-height:34px;padding:.3rem .2rem;font-size:.76rem;line-height:1.12;white-space:normal;overflow-wrap:anywhere}.language-switcher{position:absolute;right:.7rem;top:.75rem;margin:0}.language-menu{right:0;left:auto}.mega-menu{top:auto;padding-top:0}.nav-item:after{display:none!important}.hero-copy{padding:2.8rem 1rem}.hero-proof{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.4rem}.hero-proof span{display:flex;align-items:center;padding:.35rem .48rem;font-size:.72rem;line-height:1.2}.news-grid{grid-template-columns:1fr}.article,.longform-article{width:100%;min-width:0;overflow:hidden;padding:3.5rem 1rem}.article h1{font-size:clamp(1.9rem,9vw,2.5rem);overflow-wrap:anywhere}.article-body{min-width:0}.article-body table{display:block;max-width:100%;min-width:0;overflow-x:auto}.badge-grid{max-width:100%;min-width:0}.badge-grid span{max-width:100%;min-width:0;border-radius:8px;overflow-wrap:anywhere}.whatsapp-float{max-width:calc(100vw - 2rem)}}
.premium-product-hero{padding-top:4.5rem;padding-bottom:4.5rem}.premium-hero-copy h1{font-size:clamp(2.55rem,4.35vw,4.25rem);line-height:1.04}
@media (max-width:900px){.premium-product-hero{padding:3.4rem 1rem}.premium-hero-copy h1{font-size:clamp(2.25rem,11vw,3.4rem)}}
.industry-application-page,.applications-hub-page{background:#fbfaf5}.industry-application-hero{display:grid;grid-template-columns:minmax(0,1.04fr) minmax(380px,.96fr);gap:3.1rem;align-items:center;max-width:none;padding:4.5rem max(1rem,calc((100vw - 1180px)/2));background:radial-gradient(circle at 10% 10%,rgba(217,168,92,.18),transparent 28%),linear-gradient(135deg,#f6ead8,#eef3eb);border-bottom:1px solid rgba(86,112,91,.18)}.industry-application-hero h1{max-width:790px;margin:.45rem 0 1.1rem;font-size:clamp(2.55rem,4.35vw,4.25rem);line-height:1.04;color:#294b3d}.industry-application-hero>div>p:not(.eyebrow){max-width:720px;font-size:1.1rem;color:#655448}.application-trust{display:flex;gap:.5rem;flex-wrap:wrap;margin:1.35rem 0}.application-trust span{padding:.45rem .68rem;border:1px solid rgba(69,107,85,.25);border-radius:999px;background:rgba(255,255,255,.62);color:#385945;font-size:.8rem;font-weight:850}.industry-hero-image{position:relative;overflow:hidden;border-radius:16px;box-shadow:0 28px 65px rgba(43,59,49,.18)}.industry-hero-image img{display:block;width:100%;height:540px;object-fit:cover}.industry-hero-image:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 62%,rgba(26,44,36,.62))}.industry-hero-image>span{position:absolute;z-index:1;left:1.2rem;bottom:1.1rem;color:#fff;font-weight:900}.industry-challenges,.industry-products,.industry-scenarios,.industry-why{padding-top:5.5rem;padding-bottom:5.5rem}.industry-challenge-grid,.industry-why-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}.industry-challenge-grid article,.industry-why-grid article{padding:1.35rem;border-top:3px solid #6f8b65;background:#fff;box-shadow:0 16px 38px rgba(43,59,49,.08)}.industry-challenge-grid article>span{display:block;margin-bottom:1.5rem;color:#b48548;font-size:.78rem;font-weight:950}.industry-challenge-grid h3,.industry-why-grid h3{margin:.15rem 0 .6rem;color:#294b3d}.industry-challenge-grid p,.industry-why-grid p{margin:0;color:var(--muted)}.industry-products{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:#f3ecdf}.industry-product-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}.industry-product-grid>a{display:block;overflow:hidden;background:#fff;color:var(--ink);text-decoration:none;box-shadow:0 18px 40px rgba(43,59,49,.08);transition:transform .2s,box-shadow .2s}.industry-product-grid>a:hover{transform:translateY(-4px);box-shadow:0 24px 50px rgba(43,59,49,.13)}.industry-product-grid img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}.industry-product-grid a>div{padding:1.25rem}.industry-product-grid a span{color:#b48548;font-size:.78rem;font-weight:950}.industry-product-grid h3{margin:.8rem 0 .6rem;font-family:Georgia,"Times New Roman",serif;font-size:1.4rem;color:#294b3d}.industry-product-grid p{color:var(--muted)}.industry-product-grid strong{color:#456b55}.industry-scenario-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid #ccd7cc;border-bottom:1px solid #ccd7cc}.industry-scenario-grid article{padding:1.5rem;border-right:1px solid #ccd7cc}.industry-scenario-grid article:last-child{border-right:0}.industry-scenario-grid h3{margin:.1rem 0 .55rem;font-family:Georgia,"Times New Roman",serif;font-size:1.3rem;color:#294b3d}.industry-scenario-grid p{margin:0;color:var(--muted)}.industry-customization{display:grid;grid-template-columns:.9fr 1.1fr;gap:3rem;align-items:start;max-width:none;padding:5.5rem max(1rem,calc((100vw - 1180px)/2));background:#edf2e9}.industry-custom-copy{position:sticky;top:125px}.industry-custom-list{display:grid;gap:.55rem}.industry-custom-list>div{display:grid;grid-template-columns:54px 1fr;gap:1rem;align-items:center;padding:1rem;border-bottom:1px solid #c9d5c8;background:rgba(255,255,255,.56)}.industry-custom-list span{color:#b48548;font-weight:950}.industry-custom-list p{margin:0;color:#294b3d;font-weight:850}.industry-compliance{display:grid;grid-template-columns:1.12fr .88fr;gap:3rem;align-items:center;max-width:none;padding:5.5rem max(1rem,calc((100vw - 1180px)/2));background:#254638;color:#fff}.industry-compliance h2,.industry-compliance h3{color:#fff}.industry-compliance p{color:rgba(255,255,255,.76)}.industry-compliance .eyebrow{color:#efd29d}.industry-evidence{padding:1.35rem;border:1px solid rgba(239,210,157,.24);border-radius:10px;background:rgba(255,255,255,.08)}.industry-evidence .check-list li{color:rgba(255,255,255,.86)}.industry-quote{display:grid;grid-template-columns:.85fr 1.15fr;gap:2.5rem;align-items:start;scroll-margin-top:120px}.industry-quote .lead-form{margin:0}.applications-hub-hero{max-width:none;padding:6rem max(1rem,calc((100vw - 1180px)/2));background:radial-gradient(circle at 82% 20%,rgba(217,168,92,.2),transparent 24%),linear-gradient(135deg,#eef3eb,#f6ead8)}.applications-hub-hero h1{max-width:930px;margin:.45rem 0 1rem;font-size:clamp(2.7rem,5vw,5rem);line-height:1.02;color:#294b3d}.applications-hub-hero>p:not(.eyebrow){max-width:780px;font-size:1.12rem;color:#655448}.applications-hub-intro{display:grid;grid-template-columns:.9fr 1.1fr;gap:3rem;align-items:end;padding-top:4.5rem;padding-bottom:3rem}.applications-hub-intro>p{font-size:1.08rem;color:var(--muted)}.applications-hub-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;padding-top:1rem;padding-bottom:5.5rem}.applications-hub-card{display:block;overflow:hidden;background:#fff;color:var(--ink);text-decoration:none;box-shadow:0 20px 44px rgba(43,59,49,.1);transition:transform .2s,box-shadow .2s}.applications-hub-card:hover{transform:translateY(-5px);box-shadow:0 28px 58px rgba(43,59,49,.15)}.applications-hub-card>img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}.applications-hub-card>div{padding:1.35rem}.applications-hub-card span{color:#b48548;font-size:.78rem;font-weight:950}.applications-hub-card h2{margin:.8rem 0 .6rem;font-family:Georgia,"Times New Roman",serif;font-size:1.55rem;color:#294b3d}.applications-hub-card p{color:var(--muted)}.applications-hub-card ul{display:flex;gap:.35rem;flex-wrap:wrap;padding:0;list-style:none}.applications-hub-card li{padding:.3rem .5rem;border-radius:999px;background:#edf2e9;color:#385945;font-size:.75rem;font-weight:850}.applications-hub-card strong{display:block;margin-top:1rem;color:#456b55}.application-conversion-flow{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:#f3ecdf}.application-conversion-flow ol{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;padding:0;list-style:none}.application-conversion-flow li{padding:1.2rem;border-top:3px solid #6f8b65;background:#fff}.application-conversion-flow span{color:#b48548;font-size:.78rem;font-weight:950}.application-conversion-flow h3{margin:1rem 0 .5rem;color:#294b3d}.application-conversion-flow p{margin:0;color:var(--muted)}.applications-hub-links{display:grid;grid-template-columns:.8fr 1.2fr;gap:2rem;align-items:end}
@media (max-width:900px){.industry-application-hero,.industry-challenge-grid,.industry-product-grid,.industry-scenario-grid,.industry-customization,.industry-compliance,.industry-why-grid,.industry-quote,.applications-hub-intro,.applications-hub-grid,.application-conversion-flow ol,.applications-hub-links{grid-template-columns:1fr}.industry-application-hero{padding:3.4rem 1rem;gap:2rem}.industry-application-hero h1{font-size:clamp(2.25rem,11vw,3.4rem)}.industry-hero-image img{height:auto;max-height:470px}.application-trust{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.application-trust span{display:flex;align-items:center;border-radius:8px;font-size:.74rem}.industry-application-hero .hero-actions,.applications-hub-hero .hero-actions{display:grid;grid-template-columns:1fr}.industry-application-hero .button,.applications-hub-hero .button{width:100%;white-space:normal;text-align:center}.industry-challenges,.industry-products,.industry-scenarios,.industry-why{padding-top:4rem;padding-bottom:4rem}.industry-products,.industry-customization,.industry-compliance{padding-left:1rem;padding-right:1rem}.industry-scenario-grid article{border-right:0;border-bottom:1px solid #ccd7cc}.industry-scenario-grid article:last-child{border-bottom:0}.industry-customization,.industry-compliance{padding-top:4rem;padding-bottom:4rem}.industry-custom-copy{position:static}.industry-quote{gap:1.5rem}.applications-hub-hero{padding:4rem 1rem}.applications-hub-hero h1{font-size:clamp(2.35rem,11vw,3.5rem)}.applications-hub-intro{padding-top:3.5rem}.applications-hub-grid{padding-bottom:4rem}.application-conversion-flow{padding-left:1rem;padding-right:1rem}.whatsapp-float{display:flex;align-items:center;justify-content:center;width:52px;height:52px;padding:0;border-radius:50%;font-size:0}.whatsapp-float:after{content:"WA";font-size:.78rem;font-weight:950}}
`;

const js = `
const startHeroCarousel = () => {
  const slides = [...document.querySelectorAll(".hero-slide")];
  if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let activeIndex = 0;
  window.setInterval(() => {
    slides[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add("is-active");
  }, 6000);
};
const loadDeferredHeroSlides = async () => {
  const images = [...document.querySelectorAll(".hero-slide[data-src]")];
  await Promise.all(images.map(async (image) => {
    if (image.dataset.srcset) image.srcset = image.dataset.srcset;
    image.src = image.dataset.src;
    image.removeAttribute("data-src");
    image.removeAttribute("data-srcset");
    try {
      await image.decode();
    } catch {
      await new Promise((resolve) => {
        if (image.complete) resolve();
        else {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        }
      });
    }
  }));
  startHeroCarousel();
};
const queueDeferredHeroSlides = () => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadDeferredHeroSlides, { timeout: 1200 });
  } else {
    window.setTimeout(loadDeferredHeroSlides, 0);
  }
};
if (document.readyState === "complete") queueDeferredHeroSlides();
else window.addEventListener("load", queueDeferredHeroSlides, { once: true });

document.querySelectorAll(".mobile-menu-toggle").forEach((toggle)=>{
  const targetId = toggle.getAttribute("aria-controls");
  const target = targetId ? document.getElementById(targetId) : null;
  if (!target) return;
  toggle.addEventListener("click",()=>{
    const isOpen = target.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "Close" : "Menu";
  });
});

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

const redesignCss = `
.home-hero,.products-hero,.oem-hero-new,.factory-hero-new,.about-hero-new{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(360px,.95fr);gap:3rem;align-items:center;max-width:none;padding:5.6rem max(1rem,calc((100vw - 1180px)/2));background:radial-gradient(circle at 8% 12%,rgba(217,168,92,.18),transparent 27%),linear-gradient(135deg,#eef3eb,#f6ead8);border-bottom:1px solid rgba(86,112,91,.18)}
.home-hero-copy,.products-hero>div,.oem-hero-new>div,.factory-hero-new>div,.about-hero-new>div{min-width:0}.home-hero h1,.products-hero h1,.oem-hero-new h1,.factory-hero-new h1,.about-hero-new h1{max-width:780px;margin:.45rem 0 1.1rem;font-size:clamp(2.55rem,5vw,4.9rem);line-height:1.02;color:#294b3d}.home-hero p:not(.eyebrow),.products-hero p:not(.eyebrow),.oem-hero-new p:not(.eyebrow),.factory-hero-new p:not(.eyebrow),.about-hero-new p:not(.eyebrow){max-width:720px;font-size:1.1rem;color:#655448}.hero-microcopy{margin-top:1.25rem!important;font-size:.9rem!important;color:#6e806e!important;font-weight:800}
.home-hero-media,.oem-hero-new figure,.factory-hero-new figure,.about-hero-new figure,.home-oem figure{position:relative;margin:0;overflow:hidden;border-radius:16px;background:#fff;box-shadow:0 28px 65px rgba(43,59,49,.18)}.home-hero-media img,.oem-hero-new figure img,.factory-hero-new figure img,.about-hero-new figure img{display:block;width:100%;height:540px;object-fit:cover}.home-hero-media figcaption,.oem-hero-new figcaption,.factory-hero-new figcaption,.about-hero-new figcaption,.home-oem figcaption{position:absolute;left:1.2rem;right:1.2rem;bottom:1rem;color:#fff;font-size:.88rem;font-weight:900;text-shadow:0 2px 12px rgba(0,0,0,.55)}
.home-solutions,.home-applications,.home-knowledge{padding-top:6rem;padding-bottom:6rem}.home-solution-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.1rem}.home-solution-grid>a{display:block;overflow:hidden;background:#fff;color:var(--ink);text-decoration:none;box-shadow:0 20px 44px rgba(43,59,49,.1);transition:transform .2s,box-shadow .2s}.home-solution-grid>a:hover{transform:translateY(-5px);box-shadow:0 28px 58px rgba(43,59,49,.15)}.home-solution-grid img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}.home-solution-grid a>div{padding:1.3rem}.home-solution-grid span{color:#b48548;font-size:.78rem;font-weight:950}.home-solution-grid h3{margin:.65rem 0 .45rem;font-family:Georgia,"Times New Roman",serif;font-size:1.45rem;color:#294b3d}.home-solution-grid p{margin:0;color:var(--muted)}.home-solution-grid strong{display:block;margin-top:1rem;color:#456b55}
.home-capabilities{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:#eaf0e8}.home-capability-list{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;max-width:1180px;margin:0 auto}.home-capability-list article{padding:1.35rem;border-top:3px solid #6f8b65;background:rgba(255,255,255,.76);box-shadow:0 14px 34px rgba(33,50,42,.07)}.home-capability-list h3{margin:.2rem 0 .65rem;color:#294b3d}.home-capability-list p{margin:0;color:var(--muted)}.home-oem{padding-top:6rem;padding-bottom:6rem}.home-oem figure{height:100%;min-height:470px}.home-oem figure img{display:block;width:100%;height:100%;min-height:470px;object-fit:cover}
.home-compliance{display:grid;grid-template-columns:1.2fr .8fr;gap:3rem;align-items:center;max-width:none;padding:6rem max(1rem,calc((100vw - 1180px)/2));background:#254638;color:#fff}.home-compliance h2{color:#fff}.home-compliance>div>p:not(.eyebrow){color:rgba(255,255,255,.76)}.home-compliance .eyebrow{color:#efd29d}.home-compliance .badge-grid span{background:rgba(255,255,255,.08);border-color:rgba(239,210,157,.28);color:#fff}.home-compliance>img{display:block;width:100%;max-height:420px;object-fit:cover;object-position:top;border-radius:12px;box-shadow:0 25px 60px rgba(0,0,0,.25)}.home-factory{padding-top:6rem;padding-bottom:6rem}.factory-photo-stack{display:grid;grid-template-columns:1.2fr .8fr;gap:.8rem;align-items:stretch}.factory-photo-stack img{display:block;width:100%;height:100%;min-height:245px;object-fit:cover;border-radius:12px;border:1px solid var(--line)}.factory-process-section{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:#f3ecdf}.factory-process-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;max-width:1180px;margin:auto}.factory-process-grid article{overflow:hidden;background:#fff;box-shadow:0 18px 38px rgba(43,59,49,.08)}.factory-process-grid article img{display:block;width:100%;height:260px;object-fit:cover}.factory-process-grid article>div{padding:1.2rem}.factory-process-grid article span{color:#b48548;font-size:.8rem;font-weight:950}.factory-process-grid h3{margin:.35rem 0 .55rem;color:#294b3d;font-size:1.35rem}.factory-process-grid p{margin:0;color:var(--muted)}.factory-quality-note,.about-profile,.about-evidence{padding-top:5.5rem;padding-bottom:5.5rem}.factory-quality-note img,.about-profile img,.about-evidence img{display:block;width:100%;max-height:520px;object-fit:cover;border-radius:14px;box-shadow:0 24px 58px rgba(43,59,49,.14)}.about-hero-new{background:radial-gradient(circle at 85% 20%,rgba(217,168,92,.2),transparent 24%),linear-gradient(135deg,#f6ead8,#eef3eb)}.about-capabilities{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:#edf2e9}.about-gallery img{height:300px}.products-hero{background:radial-gradient(circle at 82% 20%,rgba(217,168,92,.2),transparent 24%),linear-gradient(135deg,#f6ead8,#eef3eb)}.products-hero>img{display:block;width:100%;height:520px;object-fit:cover;border-radius:16px;box-shadow:0 28px 65px rgba(43,59,49,.18)}.oem-hero-new{background:radial-gradient(circle at 8% 12%,rgba(217,168,92,.2),transparent 27%),linear-gradient(135deg,#eef3eb,#f6ead8)}.oem-printing-note{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:#f3ecdf}.oem-printing-note>.section-heading,.oem-printing-note>.home-capability-list{max-width:1180px}.oem-brief{padding-top:5.5rem;padding-bottom:5.5rem}.factory-hero-new{background:radial-gradient(circle at 85% 15%,rgba(217,168,92,.2),transparent 24%),linear-gradient(135deg,#eef3eb,#f6ead8)}
@media (max-width:900px){.home-hero,.products-hero,.oem-hero-new,.factory-hero-new,.about-hero-new{grid-template-columns:1fr;padding:3.6rem 1rem;gap:2rem}.home-hero h1,.products-hero h1,.oem-hero-new h1,.factory-hero-new h1,.about-hero-new h1{font-size:clamp(2.25rem,11vw,3.5rem)}.home-hero-media img,.oem-hero-new figure img,.factory-hero-new figure img,.about-hero-new figure img{height:auto;max-height:470px}.home-solution-grid,.home-capability-list,.factory-process-grid,.home-compliance,.factory-photo-stack{grid-template-columns:1fr}.home-solutions,.home-applications,.home-knowledge,.home-oem,.home-factory,.factory-quality-note,.about-profile,.about-evidence{padding-top:4rem;padding-bottom:4rem}.home-compliance{padding:4rem 1rem}.home-oem figure,.home-oem figure img{min-height:0;height:auto}.factory-process-grid article img{height:auto;max-height:300px}.products-hero>img{height:auto;max-height:440px}.factory-photo-stack img{min-height:0;height:auto}.home-capability-list{gap:.75rem}.home-factory .factory-stats{gap:1.2rem}}
 .home-hero .hero-proof span{background:#fff7eb;color:#294b3d;border-color:#d8c5a6;box-shadow:none}.mobile-menu-toggle{display:none}
@media (max-width:900px){.header-inner{flex-direction:row;flex-wrap:wrap;align-items:center;width:100%;padding:.62rem .7rem;gap:.5rem;overflow:visible}.brand{flex:0 0 auto}.brand img{width:112px;height:40px}.mobile-menu-toggle{display:inline-flex;align-items:center;justify-content:center;min-height:38px;margin-left:auto;padding:.42rem .68rem;border:1px solid rgba(69,107,85,.42);border-radius:6px;background:#fff7eb;color:#294b3d;font-weight:900;cursor:pointer}.main-nav{display:none;width:100%;flex:1 0 100%;flex-direction:column;align-items:stretch;gap:.15rem;padding:.55rem 0 .15rem;border-top:1px solid rgba(69,107,85,.18)}.main-nav.is-open{display:flex}.main-nav .nav-link{width:100%;min-height:40px;padding:.55rem .65rem;font-size:.9rem;text-align:left}.language-switcher{position:static;flex:0 0 auto;margin:0}.language-current{min-height:38px;min-width:46px}.header-cta{display:none}.home-hero .hero-proof span{font-size:.76rem}}
.home-hero{position:relative;display:block;aspect-ratio:16/9;min-height:620px;padding:0 max(1rem,calc((100vw - 1180px)/2));overflow:hidden;background:#f6ead8}
.home-hero-media{position:absolute;inset:0;height:100%;border-radius:0;box-shadow:none;background:#f6ead8;z-index:0}.home-hero-media img{width:100%;height:100%;object-fit:contain;object-position:center}.home-hero-media:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,248,238,.94) 0%,rgba(255,248,238,.82) 40%,rgba(255,248,238,.2) 72%,rgba(255,248,238,.04) 100%);pointer-events:none}.home-hero-media figcaption{color:#fff;text-shadow:0 2px 14px rgba(27,48,39,.7)}.home-hero-copy{position:relative;z-index:1;max-width:700px;padding:5.3rem 0 4.8rem}.home-hero-copy h1{max-width:700px;font-size:clamp(2.3rem,3.2vw,3.65rem);line-height:1.06;color:#294b3d}.home-hero-copy>p:not(.eyebrow){max-width:650px;color:#4f4a3f}.home-hero-copy .hero-proof span{background:rgba(255,253,248,.82);color:#294b3d;border-color:rgba(69,107,85,.35);box-shadow:0 5px 18px rgba(43,59,49,.08)}
@media (max-width:900px){.home-hero{display:flex;min-height:0;aspect-ratio:auto;padding:0;flex-direction:column}.home-hero-copy{max-width:100%;padding:3.2rem 1rem 2.6rem;background:#fff8ee}.home-hero-copy h1{font-size:clamp(2.05rem,9vw,2.8rem);line-height:1.08}.home-hero-copy>p:not(.eyebrow){max-width:34rem}.home-hero .hero-proof{max-width:28rem}.home-hero-media{position:relative;inset:auto;width:100%;height:auto;aspect-ratio:16/9;order:2}.home-hero-media img{object-fit:contain;object-position:center}.home-hero-media:after{display:none}.home-hero-media figcaption{font-size:.78rem}}
.reference-solutions,.reference-process,.reference-projects{background:#fff}.reference-solutions{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));}.reference-product-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;max-width:1180px;margin:auto}.reference-product-grid a,.reference-case-grid a{display:block;color:var(--ink);text-decoration:none;background:#fff;border:1px solid #e5e0d8;box-shadow:0 8px 24px rgba(36,47,41,.08);transition:transform .2s,box-shadow .2s}.reference-product-grid a:hover,.reference-case-grid a:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(36,47,41,.14)}.reference-product-grid img{display:block;width:100%;aspect-ratio:1.35;object-fit:cover}.reference-product-grid h3,.reference-product-grid p,.reference-product-grid strong{margin-left:1rem;margin-right:1rem}.reference-product-grid h3{margin-top:.9rem;margin-bottom:.25rem;color:#1e2f26}.reference-product-grid p{margin-top:0;color:#6d756d;font-size:.92rem;min-height:2.5em}.reference-product-grid strong{display:block;margin-bottom:1rem;color:#456b55}.reference-story{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:#f3ece2}.reference-story>div,.reference-story>figure,.reference-factory>div{max-width:580px}.reference-story figure{position:relative;margin:0;overflow:hidden}.reference-story figure img{width:100%;height:380px;object-fit:cover}.reference-story figcaption{position:absolute;left:1rem;bottom:1rem;color:#fff;font-weight:800;text-shadow:0 2px 8px #000}.reference-process{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));}.reference-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;max-width:1180px;margin:auto}.reference-steps article{text-align:center}.reference-steps span{display:flex;align-items:center;justify-content:center;width:56px;height:56px;margin:0 auto .65rem;border:2px solid #68816d;border-radius:50%;color:#294b3d;font-weight:900;background:#fff}.reference-steps img{width:112px;height:112px;border-radius:50%;object-fit:cover;border:2px solid #d6d0c7}.reference-steps h3{font-size:1rem;margin:.7rem 0 .35rem}.reference-steps p{font-size:.86rem;color:#6d756d;margin:0}.reference-projects{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));}.reference-case-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;max-width:1180px;margin:auto}.reference-case-grid img{width:100%;height:220px;object-fit:cover}.reference-case-grid span,.reference-case-grid h3,.reference-case-grid p{display:block;margin-left:1rem;margin-right:1rem}.reference-case-grid span{margin-top:.8rem;color:#607563;font-size:.75rem;font-weight:900}.reference-case-grid h3{margin-top:.35rem;margin-bottom:.3rem}.reference-case-grid p{margin-top:0;color:#6d756d}.reference-factory{max-width:none;padding-left:max(1rem,calc((100vw - 1180px)/2));padding-right:max(1rem,calc((100vw - 1180px)/2));background:#f3ece2}.reference-factory .factory-photo-stack{max-width:580px}.reference-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:1.5rem 0}.reference-stats strong{font-size:1.2rem;color:#294b3d}.reference-stats small{display:block;margin-top:.3rem;color:#6d756d;font-size:.76rem;font-weight:500}@media(max-width:900px){.reference-product-grid,.reference-steps,.reference-case-grid{grid-template-columns:1fr 1fr}.reference-story,.reference-factory{grid-template-columns:1fr}.reference-steps{gap:1.5rem}.reference-factory .factory-photo-stack{grid-row:2}.reference-stats{grid-template-columns:1fr}.reference-product-grid img{aspect-ratio:1.5}.reference-case-grid img{height:180px}}@media(max-width:560px){.reference-product-grid,.reference-steps,.reference-case-grid{grid-template-columns:1fr}.reference-story figure img{height:280px}}
`;

writePage("/", homePage());
writePage("/products/", productsIndex());
writePage("/products/baking-paper/", bakingPaperHubPage());
writePage("/products/food-wrapping-paper/", foodWrappingCategoryPage());
products.forEach((product) => writePage(`/products/${product.slug}/`, productPage(product)));
writePage("/applications/", applicationsPage());
writePage("/applications/bakery/", applicationLandingPage("bakery"));
writePage("/applications/cafe/", applicationLandingPage("cafe"));
writePage("/applications/food-service/", applicationLandingPage("food-service"));
writePage("/cases/", casesPage());
writePage("/customization/", customizationPage());
writePage("/custom-oem/", customOemPage());
writePage("/compliance/", complianceCenterPage());
writePage("/factory-certificates/", factoryPage());
writePage("/eudr-traceability/", eudrTraceabilityPage());
writePage("/pfas-free-baking-paper/", pfasFreePage());
writePage("/markets/", marketsIndexPage());
writePage("/markets/united-states/", marketPage("united-states"));
writePage("/markets/europe/", marketPage("europe"));
writePage("/about/", aboutPage());
writePage("/contact/", contactPage());
writePage("/inquiry/", contactPage("/inquiry/"));
writePage("/news/", newsPage());
writePage("/resources/", resourcesIndex());
resourcePages.forEach((resource) => writePage(`/resources/${resource.slug}/`, resourcePage(resource)));
landingPages.forEach((lp) => writePage(`/landing/${lp.slug}/`, landingPage(lp)));
writeStatic();
console.log(`Built ${pages.length} pages in ${distDir}`);
















