import fs from "node:fs";
import path from "node:path";

const BASE = "https://www.lmcakecup.com";
const company = "Jinhua Langmai Daily-Using Co., Ltd.";
const locales = {
  de: {
    home: "/de/",
    products: "/de/produkte/",
    apps: "/de/anwendungen/",
    guides: "/de/ratgeber/",
    contact: "/de/kontakt/",
    sample: "/de/muster-anfordern/",
    nav: [
      ["Produkte", "/de/produkte/"],
      ["Anwendungen", "/de/anwendungen/"],
      ["Individuelle Verpackungen", "/de/individuelle-verpackungen/"],
      ["Qualität", "/de/qualitaetskontrolle/"],
      ["Ratgeber", "/de/ratgeber/"],
      ["Über uns", "/de/ueber-uns/"],
    ],
    quote: "Angebot anfordern",
    sampleLabel: "Muster anfordern",
    productLabel: "Produkte",
    guideLabel: "Ratgeber",
  },
  fr: {
    home: "/fr/",
    products: "/fr/produits/",
    apps: "/fr/applications/",
    guides: "/fr/guides/",
    contact: "/fr/contact/",
    sample: "/fr/demande-echantillons/",
    nav: [
      ["Produits", "/fr/produits/"],
      ["Applications", "/fr/applications/"],
      ["Emballages personnalisés", "/fr/emballages-personnalises/"],
      ["Qualité", "/fr/controle-qualite/"],
      ["Guides", "/fr/guides/"],
      ["À propos", "/fr/a-propos/"],
    ],
    quote: "Demander un devis",
    sampleLabel: "Demander des échantillons",
    productLabel: "Produits",
    guideLabel: "Guides",
  },
};

const products = [
  [
    "baking-cups",
    "real-cake-cups-assortment.jpg",
    [
      "backfoermchen",
      "Backförmchen",
      "Lebensmittelechte Backförmchen für professionelle Backlinien, Bäckereien und Handelsmarken. Form, Papier, Farbe, Druck und Verpackung werden auf Anwendung und Zielmarkt abgestimmt.",
    ],
    [
      "caissettes-de-cuisson",
      "Caissettes de cuisson",
      "Caissettes de cuisson conçues pour une présentation régulière et un démoulage adapté. Formats, papier, couleurs, impression et conditionnement sont définis selon votre utilisation.",
    ],
  ],
  [
    "muffin-cups",
    "real-cake-cups-stacked.jpg",
    [
      "muffin-backfoermchen",
      "Muffin-Backförmchen",
      "Muffin-Backförmchen für gleichmäßige Produktionsabläufe und eine saubere Warenpräsentation. Abmessungen, Papier, Druckbild und Packeinheit werden projektspezifisch gewählt.",
    ],
    [
      "caissettes-a-muffins",
      "Caissettes à muffins",
      "Caissettes à muffins pour productions régulières et présentations soignées. La structure est ajustée au moule, à la recette et au conditionnement.",
    ],
  ],
  [
    "tulip-cups",
    "muffin-baking-cups-clean.jpg",
    [
      "tulpen-backfoermchen",
      "Tulpen-Backförmchen",
      "Tulpen-Backförmchen geben Muffins und Feingebäck eine hochwertige Optik. Höhe, Faltung, Farbe und Papier können auf Produkt und Präsentation abgestimmt werden.",
    ],
    [
      "caissettes-tulipe",
      "Caissettes tulipe",
      "Les caissettes tulipe valorisent muffins et pâtisseries par une silhouette haute. Pliage, hauteur, couleur et papier sont adaptés au rendu recherché.",
    ],
  ],
  [
    "free-standing",
    "real-roll-mouth-cups.jpg",
    [
      "freistehende-papierbackformen",
      "Freistehende Papierbackformen",
      "Formstabile Papierbackformen können je nach Ausführung ohne separates Metallblech befüllt und gebacken werden. Sie unterstützen standardisierte Abläufe und direkte Präsentation.",
    ],
    [
      "moules-de-cuisson-autoportants",
      "Moules de cuisson autoportants",
      "Les moules autoportants conservent leur forme pendant le remplissage et la cuisson selon le modèle retenu. Ils facilitent production et présentation du produit fini.",
    ],
  ],
  [
    "baking-paper",
    "blog-baking-paper-quality-control.webp",
    [
      "backpapier",
      "Backpapier",
      "Backpapier als Rolle oder Zuschnitt für industrielle und handwerkliche Anwendungen. Grammatur, Beschichtung, Abmessung und Verpackung werden nach Prozess gewählt.",
    ],
    [
      "papier-cuisson",
      "Papier cuisson",
      "Papier cuisson en rouleaux, feuilles ou formats découpés. Grammage, traitement de surface et dimensions sont choisis selon le procédé professionnel.",
    ],
  ],
  [
    "air-fryer",
    "ai-air-fryer-liners-premium.jpg",
    [
      "airfryer-backpapier",
      "Airfryer-Backpapier",
      "Airfryer-Backpapier für Retail- und Foodservice-Sortimente. Runde, eckige, flache, geformte oder perforierte Varianten werden an Korbgröße und Luftzirkulation angepasst.",
    ],
    [
      "papier-pour-air-fryer",
      "Papier pour air fryer",
      "Papier cuisson pour air fryer destiné aux gammes retail et professionnelles. Versions rondes, carrées, plates, formées ou perforées selon le panier.",
    ],
  ],
  [
    "greaseproof",
    "blog-custom-printed-food-paper-packaging.webp",
    [
      "fettdichtes-papier",
      "Fettdichtes Papier",
      "Fettdichtes Papier für Verpackung, Zwischenlagen und Auskleidungen. Die erforderliche Barriere hängt von Lebensmittel, Kontaktzeit, Temperatur und Präsentation ab.",
    ],
    [
      "papier-ingraissable",
      "Papier ingraissable",
      "Papier ingraissable pour emballages, intercalaires et fonds de boîtes. La barrière est choisie selon l’aliment, la durée de contact et la température.",
    ],
  ],
  [
    "paper-straws",
    "real-paper-straws.jpg",
    [
      "papierstrohhalme",
      "Papierstrohhalme",
      "Papierstrohhalme für Gastronomie und Handel. Durchmesser, Länge, Farben, Biegung, Einzelverpackung und Druck können projektspezifisch gewählt werden.",
    ],
    [
      "pailles-en-papier",
      "Pailles en papier",
      "Pailles en papier pour restauration et boissons. Diamètre, longueur, couleur, flexibilité, impression et emballage individuel sont configurables.",
    ],
  ],
];

const applications = [
  [
    "bakeries",
    [
      "baeckereien-und-konditoreien",
      "Bäckereien und Konditoreien",
      "Backförmchen, Tulpenformen und Backpapier für tägliche Produktion, saisonale Kollektionen und konsistente Warenpräsentation.",
    ],
    [
      "boulangeries-patisseries",
      "Boulangeries et pâtisseries",
      "Caissettes, moules tulipe et papier cuisson pour production quotidienne, collections saisonnières et présentation cohérente.",
    ],
  ],
  [
    "manufacturers",
    [
      "lebensmittelhersteller",
      "Lebensmittelhersteller",
      "Spezifikationsbasierte Lösungen für wiederholbare Produktionsabläufe, Chargenrückverfolgbarkeit, Prüfungen und Exportverpackung.",
    ],
    [
      "fabricants-alimentaires",
      "Fabricants alimentaires",
      "Solutions définies par spécification pour productions répétables, traçabilité des lots, contrôles et conditionnement export.",
    ],
  ],
  [
    "foodservice",
    [
      "gastronomie-und-catering",
      "Gastronomie und Catering",
      "Backpapier, fettdichtes Papier und Papierstrohhalme für Küchen, Cafés, Hotels und Veranstaltungen.",
    ],
    [
      "restauration-et-traiteurs",
      "Restauration et traiteurs",
      "Papier cuisson, papier ingraissable et pailles en papier pour cuisines, cafés, hôtels et événements.",
    ],
  ],
  [
    "wholesale",
    [
      "grosshaendler-und-importeure",
      "Großhändler und Importeure",
      "Produktmix, stabile Spezifikationen, Private-Label-Verpackung und Dokumentenprüfung für regionale Vertriebsprogramme.",
    ],
    [
      "grossistes-et-importateurs",
      "Grossistes et importateurs",
      "Assortiments, spécifications stables, emballages de marque distributeur et revue documentaire pour réseaux régionaux.",
    ],
  ],
  [
    "private-label",
    [
      "private-label",
      "Private Label",
      "Von Abmessungen und Material über Druckfreigabe bis zur Verkaufsverpackung: ein klarer OEM-Ablauf für Marken.",
    ],
    [
      "marque-distributeur",
      "Marque distributeur",
      "Des dimensions et matières jusqu’au BAT et au conditionnement : un processus OEM clair pour les marques.",
    ],
  ],
];

const guides = [
  [
    "industrial-cups",
    [
      "welche-backfoermchen-fuer-industrielle-backlinien",
      "Welche Backförmchen für industrielle Backlinien?",
      "Maße, Papier, Entstapelung und Freigabe für industrielle Backlinien.",
    ],
    [
      "choisir-caissettes-cuisson-professionnelles",
      "Choisir des caissettes de cuisson professionnelles",
      "Dimensions, papier, résistance aux graisses et essais pour production régulière.",
    ],
  ],
  [
    "cup-vs-mold",
    [
      "muffinfoermchen-oder-freistehende-backformen",
      "Muffinförmchen oder freistehende Backformen?",
      "Stützform, Stabilität, Prozess und Gesamtkosten vergleichen.",
    ],
    [
      "caissettes-avec-ou-sans-moule-metallique",
      "Caissettes avec ou sans moule métallique",
      "Comparer support, stabilité, processus, présentation et coût global.",
    ],
  ],
  [
    "paper-selection",
    [
      "lebensmittelechtes-backpapier-auswaehlen",
      "Lebensmittelechtes Backpapier auswählen",
      "Grammatur, Temperatur, Antihaftwirkung, Format und Unterlagen bewerten.",
    ],
    [
      "papier-cuisson-grammage-temperature-revetement",
      "Papier cuisson : grammage, température et revêtement",
      "Choisir grammage, antiadhérence, format et documents adaptés.",
    ],
  ],
  [
    "pfas",
    [
      "pfas-freies-backpapier",
      "PFAS-freies Backpapier",
      "Produktspezifikation, Barriereleistung, Testumfang und Zielmarkt prüfen.",
    ],
    [
      "papier-cuisson-sans-pfas",
      "Papier cuisson sans PFAS",
      "Vérifier spécification, barrière, portée des essais et marché cible.",
    ],
  ],
  [
    "air-tulip",
    [
      "airfryer-backpapier-groessen-und-temperatur",
      "Airfryer-Backpapier: Größen und Temperatur",
      "Korbmaß, Luftstrom, Temperatur und sichere Anwendung abstimmen.",
    ],
    [
      "caissettes-tulipe-pour-muffins",
      "Caissettes tulipe pour muffins",
      "Dimensions, hauteur, couleur, cuisson et présentation professionnelle.",
    ],
  ],
  [
    "straws",
    [
      "papierstrohhalme-fuer-gastronomie",
      "Papierstrohhalme für Gastronomie",
      "Durchmesser, Länge, Standzeit, Einzelverpackung und Druck auswählen.",
    ],
    [
      "pailles-en-papier-emballees-individuellement",
      "Pailles en papier emballées individuellement",
      "Choisir diamètre, longueur, tenue, impression et conditionnement.",
    ],
  ],
  [
    "printed",
    [
      "bedruckte-backfoermchen-fuer-private-label",
      "Bedruckte Backförmchen für Private Label",
      "Stanzkontur, Druckdaten, Farben, Musterfreigabe und Verpackung planen.",
    ],
    [
      "caissettes-personnalisees-pour-marques",
      "Caissettes personnalisées pour les marques",
      "Planifier gabarit, fichiers, couleurs, BAT et emballage de vente.",
    ],
  ],
  [
    "control",
    [
      "lebensmittelkontaktmaterialien-eu-importeure",
      "Lebensmittelkontaktmaterialien für EU-Importeure",
      "Spezifikation, GMP, Prüfberichte, Rückverfolgbarkeit und Lieferfreigabe.",
    ],
    [
      "controle-des-odeurs-emballages-alimentaires",
      "Contrôle des odeurs des emballages alimentaires",
      "Matières, encres, colles, stockage, critères et contrôle par lot.",
    ],
  ],
];

const esc = (v) =>
  String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
const side = (locale) => (locale === "de" ? 2 : 3);
const other = (locale) => (locale === "de" ? "fr" : "de");
function pairRoute(locale, kind, key) {
  const o = other(locale),
    c = locales[o];
  if (kind === "home") return c.home;
  if (kind === "products") return c.products;
  if (kind === "apps") return c.apps;
  if (kind === "guides") return c.guides;
  if (kind === "product") {
    const x = products.find((p) => p[0] === key);
    return `${c.products}${x[side(o)][0]}/`;
  }
  if (kind === "app") {
    const x = applications.find((p) => p[0] === key);
    return `${c.apps}${x[side(o) - 1][0]}/`;
  }
  if (kind === "guide") {
    const x = guides.find((p) => p[0] === key);
    return `${c.guides}${x[side(o) - 1][0]}/`;
  }
  const core = {
    custom: {
      de: "/de/individuelle-verpackungen/",
      fr: "/fr/emballages-personnalises/",
    },
    quality: { de: "/de/qualitaetskontrolle/", fr: "/fr/controle-qualite/" },
    compliance: {
      de: "/de/lebensmittelkontakt-konformitaet/",
      fr: "/fr/conformite-contact-alimentaire/",
    },
    eudr: {
      de: "/de/eudr-rueckverfolgbarkeit/",
      fr: "/fr/tracabilite-eudr/",
    },
    about: { de: "/de/ueber-uns/", fr: "/fr/a-propos/" },
    contact: { de: "/de/kontakt/", fr: "/fr/contact/" },
    sample: { de: "/de/muster-anfordern/", fr: "/fr/demande-echantillons/" },
  };
  return core[kind]?.[o] || c.home;
}
function enRoute(kind, key) {
  if (kind === "home") return "/";
  if (kind === "product")
    return (
      {
        "baking-cups": "/products/cake-cups/",
        "muffin-cups": "/products/muffin-baking-cups/",
        "air-fryer": "/products/air-fryer-paper-liners/",
        "paper-straws": "/products/paper-straws/",
      }[key] || "/products/"
    );
  return (
    {
      products: "/products/",
      apps: "/applications/",
      guides: "/resources/",
      custom: "/customization/",
      quality: "/factory-certificates/",
      compliance: "/factory-certificates/",
      eudr: "/eudr-traceability/",
      about: "/about/",
      contact: "/contact/",
      sample: "/contact/",
      app: "/applications/",
      guide: "/resources/",
    }[kind] || "/"
  );
}
function layout(
  locale,
  route,
  kind,
  key,
  title,
  description,
  content,
  schemaType = "WebPage",
) {
  const c = locales[locale],
    alt = pairRoute(locale, kind, key),
    en = enRoute(kind, key),
    de = locale === "de" ? route : alt,
    fr = locale === "fr" ? route : alt;
  const schema = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: company,
      alternateName: "LANGMAI",
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/assets/logo.jpg`,
        contentUrl: `${BASE}/assets/logo.jpg`,
        width: 600,
        height: 600,
      },
      image: `${BASE}/assets/logo.jpg`,
      email: "wh1007209170@gmail.com",
      telephone: "+86 13645700210",
    },
    {
      "@context": "https://schema.org",
      "@type": schemaType,
      inLanguage: locale,
      name: title,
      description,
      url: `${BASE}${route}`,
      brand: { "@type": "Brand", name: "LANGMAI" },
    },
  ]).replaceAll("</", "<\\/");
  return `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${BASE}${route}"><link rel="alternate" hreflang="en" href="${BASE}${en}"><link rel="alternate" hreflang="de" href="${BASE}${de}"><link rel="alternate" hreflang="fr" href="${BASE}${fr}"><link rel="alternate" hreflang="x-default" href="${BASE}${en}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:image" content="${BASE}/assets/banner.jpg"><link rel="stylesheet" href="/styles.css"><script type="application/ld+json">${schema}</script></head><body class="localized-site localized-${locale}"><a class="skip-link" href="#main">${locale === "de" ? "Zum Inhalt" : "Aller au contenu"}</a><header class="site-header"><div class="header-inner"><a class="brand" href="${c.home}"><img src="/assets/logo.jpg" alt="Logo LANGMAI"><span><strong>LANGMAI</strong><small>${locale === "de" ? "Papierverpackungen für Lebensmittel" : "Emballages alimentaires en papier"}</small></span></a><nav class="main-nav">${c.nav.map(([a, b]) => `<a href="${b}">${a}</a>`).join("")}</nav><div class="header-actions"><a class="button primary" href="${c.contact}">${c.quote}</a><div class="language-switcher"><button class="language-current" type="button">${locale.toUpperCase()}</button><div class="language-menu"><a href="${en}">English</a><a href="${de}">Deutsch</a><a href="${fr}">Français</a></div></div></div></div></header><main id="main">${content}</main><footer class="site-footer"><div><strong>LANGMAI</strong><p>${locale === "de" ? "Lebensmittelechte Papierverpackungen für Bäckerei, Industrie und Gastronomie." : "Emballages alimentaires en papier pour boulangerie, pâtisserie et restauration."}</p></div><div><a href="${c.products}">${c.productLabel}</a><a href="${c.guides}">${c.guideLabel}</a><a href="${c.contact}">Contact</a></div><div><a href="mailto:wh1007209170@gmail.com">wh1007209170@gmail.com</a><a href="https://wa.me/8613645700210">WhatsApp +86 136 4570 0210</a></div></footer><a class="whatsapp-float" href="https://wa.me/8613645700210">WhatsApp</a><script src="/site.js" defer></script></body></html>`;
}
function form(locale, sample = false) {
  const de = locale === "de";
  const labels = de
    ? [
        "Produkt",
        "Abmessungen",
        "Papiergrammatur",
        "Bestellmenge",
        "Verwendungszweck",
        "Individueller Druck",
        "Verpackungsanforderungen",
        "Zielmarkt",
        "Benötigte Prüfberichte",
        "Lieferhafen",
        "Name",
        "Unternehmen",
        "E-Mail",
        "Telefon",
        "Nachricht",
      ]
    : [
        "Produit",
        "Dimensions",
        "Grammage du papier",
        "Quantité souhaitée",
        "Utilisation prévue",
        "Impression personnalisée",
        "Type d’emballage",
        "Marché de destination",
        "Documents requis",
        "Port de destination",
        "Nom",
        "Entreprise",
        "E-mail",
        "Téléphone",
        "Message",
      ];
  const names = [
    "product",
    "dimensions",
    "gsm",
    "quantity",
    "application",
    "printing",
    "packaging",
    "market",
    "documents",
    "port",
    "name",
    "company",
    "email",
    "phone",
    "message",
  ];
  return `<form class="b2b-inquiry-form" method="post" action="/api/inquiry"><input type="hidden" name="locale" value="${locale}"><input type="hidden" name="requestType" value="${sample ? "sample" : "quote"}">${labels.map((x, i) => `<label>${x}${[0, 3, 10, 12, 13].includes(i) ? " *" : ""}${i === 14 ? `<textarea name="${names[i]}" rows="5"></textarea>` : `<input ${i === 12 ? 'type="email"' : i === 13 ? 'type="tel"' : ""} name="${names[i]}" ${[0, 3, 10, 12, 13].includes(i) ? "required" : ""}>`}</label>`).join("")}<input class="hp-field" name="website" tabindex="-1"><button type="submit" data-submit-text="${sample ? (de ? "Muster anfordern" : "Demander des échantillons") : de ? "Anfrage senden" : "Envoyer la demande"}">${sample ? (de ? "Muster anfordern" : "Demander des échantillons") : de ? "Anfrage senden" : "Envoyer la demande"}</button></form>`;
}
function cta(locale, text) {
  const c = locales[locale];
  return `<section class="cta-band"><div><p class="eyebrow">LANGMAI OEM / ODM</p><h2>${text}</h2></div><div class="hero-actions"><a class="button primary" href="${c.contact}">${c.quote}</a><a class="button secondary" href="${c.sample}">${c.sampleLabel}</a></div></section>`;
}
function home(locale) {
  const de = locale === "de",
    c = locales[locale],
    title = de
      ? "Lebensmittelechte Papierverpackungen | Hersteller | LANGMAI"
      : "Fabricant d’emballages alimentaires en papier | LANGMAI",
    desc = de
      ? "Backförmchen, Backpapier und Papierstrohhalme vom Hersteller – individuell gefertigt, qualitätsgeprüft und für europäische B2B-Märkte entwickelt."
      : "Caissettes de cuisson, papier cuisson et pailles en papier fabriqués sur mesure pour professionnels, distributeurs et marques.";
  const content = `<section class="home-hero"><div><p class="eyebrow">${de ? "Hersteller seit 2006 · OEM / ODM" : "Fabricant depuis 2006 · OEM / ODM"}</p><h1>${de ? "Lebensmittelechte Papierverpackungen für Bäckerei, Industrie und Gastronomie" : "Emballages alimentaires en papier pour la boulangerie, la pâtisserie et la restauration"}</h1><p>${desc}</p><div class="hero-actions"><a class="button primary" href="${c.products}">${de ? "Produktkatalog ansehen" : "Découvrir nos produits"}</a><a class="button secondary" href="${c.sample}">${c.sampleLabel}</a></div></div><img src="/assets/${de ? "blog-baking-paper-quality-control.webp" : "ai-cake-cups-premium.jpg"}" alt="${de ? "Backförmchen und Backpapier" : "Caissettes de cuisson professionnelles"}"></section><section class="trust-strip"><span>${de ? "Lebensmittelkontakt-Unterlagen" : "Documents de contact alimentaire"}</span><span>${de ? "Chargenrückverfolgbarkeit" : "Traçabilité des lots"}</span><span>${de ? "PFAS-freie Optionen auf Anfrage" : "Options sans PFAS sur demande"}</span><span>Private Label</span></section><section class="section"><div class="section-heading"><h2>${de ? "Papierprodukte für professionelle Beschaffung" : "Solutions papier pour les professionnels"}</h2></div><div class="product-grid">${products
    .slice(0, 4)
    .map((p) => {
      const x = p[side(locale)];
      return `<article class="product-card"><img src="/assets/${p[1]}" alt="${esc(x[1])}"><div><h3>${esc(x[1])}</h3><p>${esc(x[2])}</p><a class="text-link" href="${c.products}${x[0]}/">${de ? "Produkt ansehen" : "Voir le produit"}</a></div></article>`;
    })
    .join(
      "",
    )}</div></section><section class="split-section"><img src="/assets/ai-quality-export-packaging.jpg" alt="${de ? "Qualitätskontrolle" : "Contrôle qualité"}"><div><h2>${de ? "Spezifikation, Qualität und Dokumente" : "Spécification, qualité et documents"}</h2><p>${de ? "Rohstoffe, Grammatur, Maße, Druck, Geruch, Fettbeständigkeit und Verpackung werden nach bestätigter Spezifikation kontrolliert. Unterlagen werden je nach Produkt, Material und Zielmarkt bereitgestellt." : "Matières, grammage, dimensions, impression, odeur, résistance aux graisses et emballage sont contrôlés selon la spécification. Les documents dépendent du produit, de la matière et du marché."}</p></div></section><section class="section two-col"><div><h2>Private Label</h2><ol class="process-list">${(de ? ["Produkt und Maße bestätigen", "Material, Farbe und Druck festlegen", "Muster und Verpackung freigeben", "Produktion, Prüfung und Versand"] : ["Valider produit et dimensions", "Définir matière, couleur et impression", "Approuver échantillon et emballage", "Production, contrôle et expédition"]).map((x) => `<li>${x}</li>`).join("")}</ol></div><div><h2>${de ? "Teilen Sie uns Ihre Spezifikation mit" : "Partagez votre cahier des charges"}</h2>${form(locale)}</div></section>${cta(locale, de ? "Muster und Angebot für Ihr Projekt anfordern" : "Demandez des échantillons et un devis")}`;
  return layout(locale, c.home, "home", "", title, desc, content);
}
function productIndex(locale) {
  const de = locale === "de",
    c = locales[locale],
    desc = de
      ? "Backförmchen, Papierbackformen, Backpapier, Airfryer-Papier, fettdichtes Papier und Papierstrohhalme für B2B-Einkäufer."
      : "Caissettes, moules papier, papier cuisson, papier air fryer, papier ingraissable et pailles pour acheteurs professionnels.";
  return layout(
    locale,
    c.products,
    "products",
    "",
    de
      ? "Papierverpackungen für Lebensmittel | Produkte | LANGMAI"
      : "Emballages alimentaires en papier | Produits | LANGMAI",
    desc,
    `<section class="page-hero"><p class="eyebrow">${c.productLabel}</p><h1>${de ? "Papierverpackungen für professionelle Anwendungen" : "Emballages papier pour applications professionnelles"}</h1><p>${desc}</p></section><section class="section"><div class="product-grid">${products
      .map((p) => {
        const x = p[side(locale)];
        return `<article class="product-card"><img src="/assets/${p[1]}" alt="${esc(x[1])}"><div><h2>${esc(x[1])}</h2><p>${esc(x[2])}</p><a class="text-link" href="${c.products}${x[0]}/">${de ? "Spezifikationen ansehen" : "Voir les spécifications"}</a></div></article>`;
      })
      .join(
        "",
      )}</div></section>${cta(locale, de ? "Individuelle Abmessungen oder Druck anfragen" : "Demander dimensions ou impression personnalisées")}`,
  );
}
function productPage(locale, p) {
  const de = locale === "de",
    c = locales[locale],
    x = p[side(locale)],
    route = `${c.products}${x[0]}/`,
    title = `${x[1]} ${de ? "Hersteller" : "fabricant"} | OEM & Private Label | LANGMAI`,
    faq = de
      ? [
          [
            "Sind individuelle Größen möglich?",
            "Ja. Machbarkeit, Werkzeug und Mindestmenge werden anhand Ihrer Spezifikation geprüft.",
          ],
          [
            "Welche Unterlagen sind verfügbar?",
            "Unterlagen werden je nach Produkt, Material und Zielmarkt bereitgestellt.",
          ],
          [
            "Kann ich Muster erhalten?",
            "Ja. Standard- oder kundenspezifische Muster werden nach Projektprüfung vereinbart.",
          ],
        ]
      : [
          [
            "Les dimensions sont-elles personnalisables ?",
            "Oui. Faisabilité, outillage et quantité minimale sont étudiés selon votre cahier des charges.",
          ],
          [
            "Quels documents sont disponibles ?",
            "Les documents sont fournis selon le produit, la matière et le marché.",
          ],
          [
            "Puis-je recevoir des échantillons ?",
            "Oui. Des échantillons standards ou personnalisés sont définis après étude.",
          ],
        ];
  const content = `<section class="product-hero"><div><p class="eyebrow">${de ? "Produktkategorie" : "Catégorie"}</p><h1>${esc(x[1])}</h1><p>${esc(x[2])}</p><div class="hero-actions"><a class="button primary" href="#anfrage">${c.quote}</a><a class="button secondary" href="${c.sample}">${c.sampleLabel}</a></div></div><img src="/assets/${p[1]}" alt="${esc(x[1])}"></section><section class="product-template section"><div class="product-main"><section class="two-col product-block"><div><h2>${de ? "Produktspezifikation" : "Spécification produit"}</h2><p>${de ? "Abmessungen, Papiergrammatur, Farbe, Druck und Packeinheit werden projektbezogen bestätigt. Temperaturangaben gelten nach Freigabe der Materialausführung." : "Dimensions, grammage, couleur, impression et conditionnement sont confirmés par projet. La température est validée pour la matière retenue."}</p></div><div><h2>${de ? "Einsatzbereiche" : "Utilisations"}</h2><ul class="check-list"><li>${de ? "Bäckerei und Lebensmittelproduktion" : "Boulangerie et production alimentaire"}</li><li>${de ? "Großhandel und Importeure" : "Grossistes et importateurs"}</li><li>Private Label</li></ul></div></section><section class="product-block"><div class="table-wrap"><table><tbody><tr><th>${de ? "Abmessungen" : "Dimensions"}</th><td>${de ? "Nach Zeichnung, Muster oder Standardformat" : "Selon plan, échantillon ou standard"}</td></tr><tr><th>${de ? "Farbe und Druck" : "Couleur et impression"}</th><td>${de ? "Unbedruckt oder individuelles Motiv" : "Neutre ou motif personnalisé"}</td></tr><tr><th>${de ? "Verpackung" : "Conditionnement"}</th><td>${de ? "Großpackung, Retail oder Private Label" : "Vrac, retail ou marque distributeur"}</td></tr><tr><th>MOQ</th><td>${de ? "Abhängig von Material und Ausführung" : "Selon matière et configuration"}</td></tr></tbody></table></div></section><section class="two-col product-block"><div><h2>${de ? "Anpassungsprozess" : "Processus de personnalisation"}</h2><ol class="process-list">${(de ? ["Anwendung und Spezifikation klären", "Material und Druck prüfen", "Muster freigeben", "Produktion und Qualitätskontrolle", "Verpackung und Versand"] : ["Définir usage et spécification", "Vérifier matière et fichiers", "Approuver l’échantillon", "Production et contrôle", "Emballage et expédition"]).map((a) => `<li>${a}</li>`).join("")}</ol></div><div id="anfrage">${form(locale)}</div></section><section class="faq product-block"><h2>FAQ</h2>${faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</section></div></section>${cta(locale, de ? "Passende Muster prüfen" : "Évaluer des échantillons adaptés")}`;
  return layout(
    locale,
    route,
    "product",
    p[0],
    title,
    x[2],
    content,
    "Product",
  );
}
function appIndex(locale) {
  const de = locale === "de",
    c = locales[locale],
    desc = de
      ? "Papierverpackungen für Bäckereien, Lebensmittelhersteller, Gastronomie, Großhandel und Private Label."
      : "Emballages papier pour boulangeries-pâtisseries, fabricants, restauration, grossistes et marques.";
  return layout(
    locale,
    c.apps,
    "apps",
    "",
    de
      ? "Anwendungen für Papierverpackungen | LANGMAI"
      : "Applications des emballages papier | LANGMAI",
    desc,
    `<section class="page-hero"><h1>${de ? "Papierlösungen nach Branche und Beschaffungsmodell" : "Solutions papier par métier et modèle d’achat"}</h1><p>${desc}</p></section><section class="section"><div class="product-grid">${applications
      .map((a) => {
        const x = a[side(locale) - 1];
        return `<article class="product-card"><div><h2>${x[1]}</h2><p>${x[2]}</p><a class="text-link" href="${c.apps}${x[0]}/">${de ? "Anwendung ansehen" : "Voir l’application"}</a></div></article>`;
      })
      .join(
        "",
      )}</div></section>${cta(locale, de ? "Ihre Anwendung besprechen" : "Décrire votre application")}`,
  );
}
function appPage(locale, a) {
  const de = locale === "de",
    c = locales[locale],
    x = a[side(locale) - 1],
    route = `${c.apps}${x[0]}/`,
    title = `${x[1]} | LANGMAI`;
  return layout(
    locale,
    route,
    "app",
    a[0],
    title,
    x[2],
    `<section class="page-hero"><p class="eyebrow">${de ? "Anwendung" : "Application"}</p><h1>${x[1]}</h1><p>${x[2]}</p></section><section class="section two-col"><div><h2>${de ? "Auswahlkriterien" : "Critères de sélection"}</h2><ul class="check-list">${(de ? ["Abmessungen und Prozesskompatibilität", "Fettbarriere, Temperatur und Kontaktzeit", "Druck, Markenwirkung und Packeinheit", "Dokumente für Produkt und Zielmarkt"] : ["Dimensions et compatibilité procédé", "Barrière, température et durée de contact", "Impression, marque et conditionnement", "Documents adaptés au marché"]).map((v) => `<li>${v}</li>`).join("")}</ul></div><div><h2>${de ? "Passende Produkte" : "Produits adaptés"}</h2><div class="link-grid">${products
      .slice(0, 4)
      .map((p) => {
        const y = p[side(locale)];
        return `<a href="${c.products}${y[0]}/">${y[1]}</a>`;
      })
      .join(
        "",
      )}</div></div></section><section class="split-section"><img src="/assets/ai-quality-export-packaging.jpg" alt="${x[1]}"><div><h2>${de ? "Vom Muster zur wiederholbaren Lieferung" : "De l’échantillon à la livraison répétable"}</h2><p>${de ? "Freigegebene Produktausführung, Verpackung und Prüfpunkte werden dokumentiert, damit Nachbestellungen auf derselben Spezifikation basieren." : "La version approuvée, le conditionnement et les contrôles sont documentés pour préparer les réassorts sur la même spécification."}</p></div></section>${cta(locale, de ? "Projektanforderungen besprechen" : "Échanger sur votre projet")}`,
  );
}
function corePage(locale, type) {
  const de = locale === "de",
    c = locales[locale],
    d = {
      custom: [
        de ? "/de/individuelle-verpackungen/" : "/fr/emballages-personnalises/",
        de
          ? "Individuelle Verpackungen und Private Label"
          : "Emballages personnalisés et marque distributeur",
        de
          ? "Größe, Papier, Farbe, Druck und Verkaufsverpackung werden in einem dokumentierten OEM-Prozess entwickelt."
          : "Formats, papier, couleurs, impression et emballage de vente sont développés dans un processus OEM documenté.",
      ],
      quality: [
        de ? "/de/qualitaetskontrolle/" : "/fr/controle-qualite/",
        de
          ? "Qualitätskontrolle vom Rohpapier bis zum Versand"
          : "Contrôle qualité du papier brut à l’expédition",
        de
          ? "Prüfpunkte werden anhand der bestätigten Produktspezifikation und des Zielmarktes festgelegt."
          : "Les points de contrôle sont définis selon la spécification approuvée et le marché.",
      ],
      compliance: [
        de
          ? "/de/lebensmittelkontakt-konformitaet/"
          : "/fr/conformite-contact-alimentaire/",
        de
          ? "Unterlagen für Lebensmittelkontakt und Zielmarkt"
          : "Documents de conformité pour le contact alimentaire",
        de
          ? "Prüfberichte und Konformitätsunterlagen werden je nach Produkt, Material und Zielmarkt bereitgestellt."
          : "Les documents de conformité et rapports d’essai sont fournis selon le produit, la matière et le marché.",
      ],
      eudr: [
        de ? "/de/eudr-rueckverfolgbarkeit/" : "/fr/tracabilite-eudr/",
        de
          ? "EUDR-Rückverfolgbarkeit für Papierprodukte"
          : "Traçabilité EUDR des produits en papier",
        de
          ? "Herkunft, Geolokalisierung, Papierlieferant und Produktionscharge werden für anwendbare Papierprodukte in einer prüfbaren Datenkette verbunden."
          : "L’origine, la géolocalisation, le fournisseur de papier et le lot de production sont reliés dans une chaîne de données vérifiable pour les produits concernés.",
      ],
      about: [
        de ? "/de/ueber-uns/" : "/fr/a-propos/",
        de
          ? "LANGMAI: Hersteller für Papierback- und Foodservice-Produkte"
          : "LANGMAI : fabricant de produits papier pour cuisson et restauration",
        de
          ? "Jinhua Langmai Daily-Using Co., Ltd. wurde 2006 in Jinhua gegründet und unterstützt internationale B2B-Einkäufer mit Papierbackprodukten, OEM/ODM, Qualitätsprüfung und Exportverpackung."
          : "Fondée en 2006 à Jinhua, Jinhua Langmai Daily-Using Co., Ltd. accompagne les acheteurs B2B avec des produits papier, l’OEM/ODM, le contrôle qualité et l’emballage export.",
      ],
      contact: [
        c.contact,
        de
          ? "Angebot für Papierverpackungen anfordern"
          : "Demander un devis pour vos emballages papier",
        de
          ? "Senden Sie Produkt, Abmessungen, Menge, Druckwunsch, Zielmarkt und benötigte Unterlagen."
          : "Indiquez produit, dimensions, quantité, impression, marché et documents requis.",
      ],
      sample: [
        c.sample,
        de
          ? "Produktmuster für Ihre Anwendung anfordern"
          : "Demander des échantillons pour votre application",
        de
          ? "Muster helfen, Abmessungen, Material, Farbe, Geruch, Backverhalten und Verpackung vor einer Bestellung zu prüfen."
          : "Les échantillons permettent d’évaluer dimensions, matière, couleur, odeur, cuisson et emballage avant série.",
      ],
    }[type];
  let body = "";
  if (type === "quality")
    body = `<section class="section"><div class="eudr-data-grid">${(de ? ["Rohstoffprüfung", "Papiergrammatur", "Maßkontrolle", "Formqualität", "Druckprüfung", "Geruchskontrolle", "Fettbeständigkeit", "Temperaturprüfung", "Verpackungsprüfung", "Chargenrückverfolgbarkeit", "Rückstellmuster", "Endkontrolle"] : ["Matières premières", "Grammage", "Contrôle dimensionnel", "Formage", "Impression", "Odeurs", "Résistance aux graisses", "Chaleur", "Emballage", "Traçabilité des lots", "Échantillons conservés", "Inspection finale"]).map((v, i) => `<article><span>${i + 1}</span><h3>${v}</h3><p>${de ? "Prüfung nach freigegebener Spezifikation." : "Contrôle selon la spécification approuvée."}</p></article>`).join("")}</div></section>`;
  else if (type === "compliance")
    body = `<section class="section two-col"><div><h2>${de ? "Prüfrahmen" : "Cadre de vérification"}</h2><ul class="check-list">${(de ? ["EU-Rahmen für Lebensmittelkontakt", "Gute Herstellungspraxis (GMP)", "LFGB-Unterstützung je nach Produkt", "FSC-Papieroptionen auf Anfrage", "PFAS-freie Optionen auf Anfrage", "Rohstoff- und Chargenrückverfolgbarkeit", "Tinten und Klebstoffe"] : ["Cadre européen du contact alimentaire", "Bonnes pratiques de fabrication", "Documents selon le produit", "Options papier FSC sur demande", "Solutions sans PFAS sur demande", "Traçabilité des matières et lots", "Encres et colles"]).map((v) => `<li>${v}</li>`).join("")}</ul></div><aside class="eudr-scope-note"><strong>${de ? "Wichtiger Hinweis" : "Point important"}</strong><p>${d[2]}</p><p>${de ? "Eine pauschale Zertifizierung aller Produkte wird nicht behauptet." : "Aucune certification générale de tous les produits n’est revendiquée."}</p></aside></section>`;
  else if (type === "eudr") {
    const fields = de
      ? ["Produkt und Zolltarif", "Holzart und Herkunft", "Geolokalisierungsdaten", "Papier- und Zellstofflieferant", "Produktionscharge", "Verknüpfung zur Sendung"]
      : ["Produit et classement douanier", "Essence et origine du bois", "Données de géolocalisation", "Fournisseur de papier et de pâte", "Lot de production", "Lien avec l’expédition"];
    body = `<section class="section two-col"><div><h2>${de ? "EUDR ist Sorgfaltspflicht, kein Produktzertifikat" : "L’EUDR relève de la diligence raisonnée, pas d’un certificat produit"}</h2><p>${de ? "LANGMAI kann verfügbare Daten der Papierlieferkette mit der internen Produktionscharge und der fertigen Sendung verbinden. Der EU-Marktteilnehmer bleibt für Geltungsbereich, Risikobewertung und Sorgfaltserklärung verantwortlich." : "LANGMAI peut relier les données disponibles de la chaîne papier au lot de production interne et à l’expédition finale. L’opérateur européen reste responsable du champ d’application, de l’évaluation des risques et de la déclaration de diligence raisonnée."}</p></div><aside class="eudr-scope-note"><strong>${de ? "Geltungsbereich zuerst prüfen" : "Vérifier d’abord le champ d’application"}</strong><p>${de ? "Materialzusammensetzung, CN-/HS-Code, Rolle des Käufers und aktuelle EU-Vorgaben sind für jedes Produkt zu prüfen." : "La composition, le code CN/SH, le rôle de l’acheteur et les règles européennes en vigueur doivent être vérifiés pour chaque produit."}</p></aside></section><section class="section"><div class="section-heading"><h2>${de ? "Datenfelder für die Käuferprüfung" : "Données disponibles pour l’examen de l’acheteur"}</h2></div><div class="eudr-data-grid">${fields.map((field, index) => `<article><span>${index + 1}</span><h3>${field}</h3><p>${de ? "Verfügbarkeit und Nachweisumfang werden für das konkrete Papier und den Auftrag bestätigt." : "La disponibilité et le niveau de preuve sont confirmés pour le papier et la commande concernés."}</p></article>`).join("")}</div></section>`;
  }
  else if (type === "custom")
    body = `<section class="section process-grid">${(de ? ["Produkt und Maße", "Papier und Druck", "Musterfreigabe", "Serienproduktion", "Verpackung und Versand"] : ["Produit et dimensions", "Papier et impression", "Approbation échantillon", "Production série", "Emballage et expédition"]).map((v, i) => `<article><span>${i + 1}</span><h2>${v}</h2><p>${de ? "Spezifikation bestätigen und Prüfpunkte dokumentieren." : "Valider la spécification et documenter les contrôles."}</p></article>`).join("")}</section>`;
  else if (type === "about")
    body = `<section class="trust-strip" aria-label="${de ? "Unternehmensdaten" : "Chiffres clés"}"><span><strong>2006</strong> ${de ? "gegründet" : "année de création"}</span><span><strong>30.000+ m²</strong> ${de ? "Werksfläche" : "site de production"}</span><span><strong>50+</strong> ${de ? "Teammitglieder" : "membres de l’équipe"}</span><span><strong>B2B</strong> ${de ? "Exportbetreuung" : "accompagnement export"}</span></section>
    <section class="split-section"><img src="/assets/founder.jpg" loading="lazy" decoding="async" alt="${de ? "LANGMAI Ansprechpartner für internationale Einkäufer" : "Contact LANGMAI pour les acheteurs internationaux"}"><div><p class="eyebrow">${de ? "Unternehmensprofil" : "Profil de l’entreprise"}</p><h2>${de ? "Papierprodukte und projektbezogene Betreuung aus einer Hand" : "Produits papier et accompagnement de projet réunis"}</h2><p>${d[2]}</p><p>${de ? "Das Sortiment umfasst Backförmchen, Muffin- und Rollrandformen, Backpapier, Airfryer-Papier, fettdichtes Papier, Papierstrohhalme und ausgewählte Partyartikel aus Papier." : "La gamme comprend caissettes, moules à muffins et à bord roulé, papier cuisson, papier pour air fryer, papier ingraissable, pailles en papier et certains articles de fête en papier."}</p><p>${de ? "Internationale Projekte werden von der Produktauswahl über Muster, Druck und Verpackung bis zur Versandvorbereitung begleitet." : "Les projets internationaux sont accompagnés depuis le choix du produit et les échantillons jusqu’à l’impression, au conditionnement et à la préparation de l’expédition."}</p></div></section>
    <section class="section"><div class="section-heading"><p class="eyebrow">${de ? "Fertigung" : "Fabrication"}</p><h2>${de ? "Verarbeitung vom Papier zum fertigen Produkt" : "Transformation du papier en produit fini"}</h2><p>${de ? "Der konkrete Prozess wird an Material, Form, Anwendung und freigegebene Spezifikation angepasst." : "Le procédé est adapté à la matière, à la forme, à l’utilisation et à la spécification approuvée."}</p></div><div class="solution-grid">${(de ? [["Druck", "Farben und Muster für kundenspezifische Projekte."], ["Schneiden und Stanzen", "Abmessungen und Konturen nach Produktspezifikation."], ["Perforation", "Lochbilder für Airfryer-, Dampf- und Zubereitungsanwendungen."], ["Formgebung", "Backförmchen, Rollrandformen und geformte Papierliner."], ["Verpackung", "Innenpackung, Verkaufseinheit und Kartonplanung."], ["Versandvorbereitung", "Stückzahl, Kartonmarkierung und Chargenbezug."]] : [["Impression", "Couleurs et motifs pour les projets personnalisés."], ["Découpe et emporte-pièce", "Dimensions et contours selon la spécification."], ["Perforation", "Motifs de trous pour air fryer, vapeur et préparation."], ["Formage", "Caissettes, moules à bord roulé et liners formés."], ["Conditionnement", "Sachets, unités de vente et configuration carton."], ["Préparation export", "Quantités, marquage carton et identification des lots."]]).map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
    <section class="image-band"><img src="/assets/factory-workshop.jpg" loading="lazy" decoding="async" alt="${de ? "LANGMAI Produktionsbereich" : "Atelier de production LANGMAI"}"><img src="/assets/showroom.jpg" loading="lazy" decoding="async" alt="${de ? "LANGMAI Produktausstellung" : "Showroom des produits LANGMAI"}"><img src="/assets/ai-quality-export-packaging.jpg" loading="lazy" decoding="async" alt="${de ? "Qualitätsprüfung und Exportverpackung" : "Contrôle qualité et emballage export"}"></section>
    <section class="section two-col"><div><p class="eyebrow">${de ? "Qualität und Dokumente" : "Qualité et documents"}</p><h2>${de ? "Nachweise passend zu Produkt und Zielmarkt prüfen" : "Examiner les preuves selon le produit et le marché"}</h2><p>${de ? "Verfügbare Unterlagen umfassen je nach Produkt und Projekt unter anderem BSCI-, BRC-, ISO-, FSC-, LFGB-, DGCCRF- und PFAS-bezogene Dokumente. Gültigkeit, Umfang und Anwendbarkeit werden für den konkreten Artikel bestätigt." : "Selon le produit et le projet, les documents disponibles peuvent concerner BSCI, BRC, ISO, FSC, LFGB, DGCCRF et les options sans PFAS. La validité, la portée et l’applicabilité sont confirmées pour l’article concerné."}</p></div><div><h2>${de ? "Für wen LANGMAI arbeitet" : "Les acheteurs accompagnés"}</h2><ul class="check-list">${(de ? ["Importeure und Großhändler", "Bäckereien und Süßwarenhersteller", "Foodservice- und Gastronomiekunden", "Supermärkte und Handelsmarken", "Marken mit kundenspezifischer Verpackung"] : ["Importateurs et grossistes", "Boulangeries et fabricants de confiserie", "Restauration et foodservice", "Supermarchés et marques distributeur", "Marques avec emballage personnalisé"]).map((item) => `<li>${item}</li>`).join("")}</ul></div></section>`;
  else
    body = `<section class="section two-col"><div><h2>${de ? "Für eine schnelle Prüfung" : "Pour une étude rapide"}</h2><p>${d[2]}</p><ul class="check-list"><li>${de ? "Produktfoto, Zeichnung oder Referenzgröße" : "Photo, plan ou format de référence"}</li><li>${de ? "Bestellmenge und Zieltermin" : "Quantité et délai souhaité"}</li><li>${de ? "Zielmarkt und Dokumente" : "Marché et documents requis"}</li></ul></div><div>${form(locale, type === "sample")}</div></section>`;
  const meta = `${d[2]} ${de ? "Projektbezogene Optionen, Dokumente und nächste Schritte für professionelle Einkäufer direkt mit LANGMAI abstimmen." : "Étudiez avec LANGMAI les options, documents et prochaines étapes adaptés à votre projet professionnel."}`;
  return layout(
    locale,
    d[0],
    type,
    "",
    `${d[1]} | LANGMAI`,
    meta,
    `<section class="page-hero"><p class="eyebrow">LANGMAI</p><h1>${d[1]}</h1><p>${d[2]}</p></section>${body}${["contact", "sample"].includes(type) ? "" : cta(locale, de ? "Spezifikation prüfen lassen" : "Faire étudier votre cahier des charges")}`,
  );
}
function guideIndex(locale) {
  const de = locale === "de",
    c = locales[locale],
    desc = de
      ? "Technische Einkaufsratgeber zu Backförmchen, Backpapier, Papierstrohhalmen, Private Label und Lebensmittelkontakt."
      : "Guides d’achat sur caissettes, papier cuisson, pailles, personnalisation et contact alimentaire.";
  return layout(
    locale,
    c.guides,
    "guides",
    "",
    de
      ? "Ratgeber für Papierbackprodukte | LANGMAI"
      : "Guides sur les emballages papier | LANGMAI",
    desc,
    `<section class="page-hero"><h1>${de ? "Praxiswissen für Einkauf und Produktentwicklung" : "Conseils pour achats et développement produit"}</h1><p>${desc}</p></section><section class="section"><div class="resource-grid">${guides
      .map((g) => {
        const x = g[side(locale) - 1];
        return `<article><p class="eyebrow">${de ? "Einkaufsratgeber" : "Guide d’achat"}</p><h2><a href="${c.guides}${x[0]}/">${x[1]}</a></h2><p>${x[2]}</p></article>`;
      })
      .join("")}</div></section>`,
  );
}
function guidePage(locale, g) {
  const de = locale === "de",
    c = locales[locale],
    x = g[side(locale) - 1],
    route = `${c.guides}${x[0]}/`,
    heads = de
      ? [
          "Anwendung zuerst definieren",
          "Material und Leistung abstimmen",
          "Muster realistisch prüfen",
          "Freigabe dokumentieren",
        ]
      : [
          "Définir l’utilisation",
          "Aligner matière et performance",
          "Tester en conditions réelles",
          "Documenter la validation",
        ],
    paras = de
      ? [
          `Die Auswahl beginnt mit Produkt, Abmessungen, Rezeptur, Temperatur, Kontaktzeit und Produktionsablauf. Allgemeine Produktnamen reichen für eine belastbare Lieferantenanfrage nicht aus.`,
          `Papiergrammatur, Barriere, Formstabilität und Druck müssen gemeinsam betrachtet werden. Ein einzelner Kennwert garantiert kein gutes Ergebnis in jeder Anwendung.`,
          `Muster sollten mit dem tatsächlichen Lebensmittel, der vorgesehenen Anlage und der späteren Verpackung geprüft werden. Maßhaltigkeit, Geruch, Fettbeständigkeit und Optik gehören in die Bewertung.`,
          `Die freigegebene Ausführung sollte mit Material, Toleranzen, Farbe, Packeinheit und Prüfpunkten dokumentiert werden. Zielmarkt und benötigte Unterlagen sind vor Serienstart zu bestätigen.`,
        ]
      : [
          `Le choix commence par le produit, les dimensions, la recette, la température, la durée de contact et le procédé. Une simple désignation ne suffit pas pour une demande fiable.`,
          `Grammage, barrière, tenue de forme et impression doivent être étudiés ensemble. Une valeur isolée ne garantit pas le résultat dans toutes les applications.`,
          `Les échantillons sont testés avec l’aliment, l’équipement et l’emballage prévus. Dimensions, odeur, résistance aux graisses et aspect font partie de l’évaluation.`,
          `La version approuvée doit documenter matière, tolérances, couleur, conditionnement et contrôles. Marché et documents requis sont confirmés avant série.`,
        ];
  const meta = `${x[2]} ${de ? "Praxisleitfaden für professionelle Einkäufer mit Prüfpunkten zu Material, Mustern, Freigabe und Dokumentation." : "Guide pratique pour acheteurs professionnels avec critères sur la matière, les échantillons, la validation et les documents."}`;
  return layout(
    locale,
    route,
    "guide",
    g[0],
    `${x[1]} | LANGMAI`,
    meta,
    `<article class="article-page"><header class="page-hero"><p class="eyebrow">${de ? "Technischer Ratgeber" : "Guide technique"}</p><h1>${x[1]}</h1><p>${x[2]}</p></header><div class="article-shell"><div class="article-content">${heads.map((h, i) => `<section><h2>${h}</h2><p>${paras[i]}</p></section>`).join("")}<section><h2>Checklist</h2><ul class="check-list">${(de ? ["Produkt, Abmessungen und Anwendung", "Material, Temperatur und Kontaktzeit", "Menge, Druck und Verpackung", "Zielmarkt und Dokumente", "Muster- und Freigabekriterien"] : ["Produit, dimensions et utilisation", "Matière, température et contact", "Quantité, impression et conditionnement", "Marché et documents", "Critères d’échantillon et validation"]).map((v) => `<li>${v}</li>`).join("")}</ul></section></div><aside class="article-sidebar"><h2>${de ? "Projekt prüfen" : "Étudier votre projet"}</h2><p>${de ? "Senden Sie Ihre Spezifikation für eine Machbarkeitsprüfung." : "Envoyez votre cahier des charges pour étude."}</p><a class="button primary" href="${c.contact}">${c.quote}</a></aside></div></article>${cta(locale, de ? "Passende Muster anfordern" : "Demander des échantillons adaptés")}`,
    "Article",
  );
}
function write(dist, route, html) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  const iconLinks = `<link rel="icon" type="image/jpeg" sizes="600x600" href="/assets/logo.jpg"><link rel="shortcut icon" type="image/jpeg" href="/assets/logo.jpg"><link rel="apple-touch-icon" href="/assets/logo.jpg">`;
  fs.writeFileSync(path.join(dir, "index.html"), html.replace("</head>", `${iconLinks}</head>`));
}
export function buildMarketSites(dist) {
  const routes = [];
  for (const locale of ["de", "fr"]) {
    const c = locales[locale],
      add = (r, h) => {
        write(dist, r, h);
        routes.push(r);
      };
    add(c.home, home(locale));
    add(c.products, productIndex(locale));
    products.forEach((p) =>
      add(`${c.products}${p[side(locale)][0]}/`, productPage(locale, p)),
    );
    add(c.apps, appIndex(locale));
    applications.forEach((a) =>
      add(`${c.apps}${a[side(locale) - 1][0]}/`, appPage(locale, a)),
    );
    ["custom", "quality", "compliance", "eudr", "about", "contact", "sample"].forEach(
      (t) => {
        const r = {
          custom:
            locale === "de"
              ? "/de/individuelle-verpackungen/"
              : "/fr/emballages-personnalises/",
          quality:
            locale === "de"
              ? "/de/qualitaetskontrolle/"
              : "/fr/controle-qualite/",
          compliance:
            locale === "de"
              ? "/de/lebensmittelkontakt-konformitaet/"
              : "/fr/conformite-contact-alimentaire/",
          eudr:
            locale === "de"
              ? "/de/eudr-rueckverfolgbarkeit/"
              : "/fr/tracabilite-eudr/",
          about: locale === "de" ? "/de/ueber-uns/" : "/fr/a-propos/",
          contact: c.contact,
          sample: c.sample,
        }[t];
        add(r, corePage(locale, t));
      },
    );
    add(c.guides, guideIndex(locale));
    guides.forEach((g) =>
      add(`${c.guides}${g[side(locale) - 1][0]}/`, guidePage(locale, g)),
    );
  }
  return routes;
}
