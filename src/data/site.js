/* Central config: real contact details + bilingual navigation.
   Structured page content (products, domaines, références…) lives in content.js. */

export const COMPANY = {
  name: "Les Clés Solaires",
  contactName: "Alexandre",
  phone: "+33 6 07 26 40 47",
  phoneHref: "tel:+33607264047",
  email: "jeanlouiscottillon@gmail.com",
  emailHref: "mailto:jeanlouiscottillon@gmail.com",
  // Same line as `phone`. wa.me wants digits only — no "+", no spaces.
  whatsapp: "33607264047",
  area: { fr: "France & international", en: "France & international" },
  // The client asked that e-mail be the preferred channel.
  mailFirst: { fr: "Les échanges par mail sont à privilégier.", en: "Please contact us by e-mail in priority." },
  // Not yet provided by the client — kept as placeholders for the legal pages.
  siret: "[à compléter]",
};

/* Navigation. `children` renders as a dropdown (Produits). */
export const NAV = [
  { to: "/", fr: "Accueil", en: "Home" },
  {
    fr: "Produits",
    en: "Products",
    children: [
      { to: "/produits", fr: "Tous nos produits", en: "All our products" },
      { to: "/chevrons", fr: "Chevrons (breveté)", en: "Rafters (patented)" },
      { to: "/structures", fr: "Structures", en: "Structures" },
      { to: "/pieux", fr: "Pieux d'ancrage", en: "Anchor piles" },
    ],
  },
  { to: "/references", fr: "Références", en: "References" },
  { to: "/contact", fr: "Contact", en: "Contact" },
];

/* Flat list of every real route, for the footer nav column. */
export const NAV_FLAT = [
  { to: "/", fr: "Accueil", en: "Home" },
  { to: "/produits", fr: "Nos produits", en: "Our products" },
  { to: "/chevrons", fr: "Chevrons", en: "Rafters" },
  { to: "/structures", fr: "Structures", en: "Structures" },
  { to: "/pieux", fr: "Pieux d'ancrage", en: "Anchor piles" },
  { to: "/references", fr: "Références", en: "References" },
  { to: "/contact", fr: "Contact", en: "Contact" },
];
