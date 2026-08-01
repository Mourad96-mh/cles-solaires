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
};

/* "Les Clés Solaires" is a brand, not a legal entity: the client's document
   (sommaire p.2, handwritten "évoluent au sein de"; p.3 "au sein") places it
   inside the SAS ENCOME. The legal publisher of the site is therefore ENCOME.
   Registration details below come from the Kbis + Guichet Unique extract the
   client sent on 01/08/2026 (Scan2026-08-01_165057.pdf, pp. 1-2). */
export const PARENT = {
  name: "SAS ENCOME",
  // Short label used in marketing copy (the client's own wording).
  activity: {
    fr: "Société de constructions métalliques",
    en: "Metal construction company",
  },
  legalForm: {
    fr: "Société par actions simplifiée à associé unique (SAS)",
    en: "Simplified joint-stock company with a sole shareholder (SAS)",
  },
  // The Kbis gives the RCS/SIREN number; no SIRET (SIREN + NIC) is stated on it.
  siren: "993 886 712",
  rcs: "993 886 712 R.C.S. Tours",
  gestion: "2025B01932",
  ape: "7112B",
  capital: {
    fr: "500 € — capital variable, minimum 50 €",
    en: "€500 — variable capital, €50 minimum",
  },
  address: "14 rue des Grippeaux, 37270 Montlouis-sur-Loire, France",
  // Kbis spelling: "COTILLON Jean-Louis Alfred Hubert" (single T).
  president: "Jean-Louis Cotillon",
  registered: "14/11/2025",
  /* Objet social, verbatim from the Kbis — quoted in the legal notice. */
  purpose: {
    fr: "Toutes opérations industrielles et commerciales se rapportant à l'activité de bureau d'études et de conseils techniques, démarches administratives, organisation du financement, suivi de chantiers, métrage et vérification ; la fabrication, transformation, commercialisation, montage de toutes structures métalliques ou en bois, soit directement, soit à titre d'entreprise générale, et la menuiserie métallique en général ; la maîtrise d'œuvre en génie civil ; le négoce et l'achat-revente de tous matériaux de constructions et de tous équipements ou matériels industriels divers ; le consulting, le développement, la création, l'acquisition, le négoce, l'exploitation, la concession et la cession de brevets d'invention.",
    en: "All industrial and commercial operations relating to engineering-office and technical-consultancy work, administrative procedures, financing arrangements, site supervision, measurement and inspection; the manufacture, transformation, marketing and assembly of all metal or timber structures, either directly or as a general contractor, and metal joinery in general; civil-engineering project management; the trade and resale of all construction materials and of miscellaneous industrial equipment; consulting, development, creation, acquisition, trade, operation, licensing and assignment of invention patents.",
  },
};

/* Who supplies what, per pages 3 and 4 of the client's document. */
export const PARTNER_ROLES = [
  {
    key: "cles-solaires",
    name: "Les Clés Solaires",
    text: {
      fr: "S'agissant de brevets, Les Clés Solaires interviennent directement dans l'étude, la fabrication et la livraison jusque sur le site de montage des pieux d'ancrages et des chevrons autobloquants.",
      en: "As the patent holder, Les Clés Solaires is directly involved in the design, manufacture and delivery — right to the assembly site — of the anchor piles and the self-locking rafters.",
    },
    photos: [
      { fr: "Pieu d'ancrage", en: "Anchor pile" },
      { fr: "Chevron autobloquant", en: "Self-locking rafter" },
    ],
  },
  {
    key: "encome",
    name: "SAS ENCOME",
    text: {
      fr: "La SAS ENCOME est une société de construction métallique qui intègre la fabrication et la livraison jusque sur le site de montage des structures porteuses situées entre les ancrages au sol et les chevrons porteurs des panneaux photovoltaïques.",
      en: "SAS ENCOME is a metal construction company handling the manufacture and delivery — right to the assembly site — of the load-bearing structures between the ground anchors and the rafters carrying the photovoltaic panels.",
    },
    photos: [
      { fr: "Structures solaires", en: "Solar structures" },
      { fr: "Constructions diverses ENCOME", en: "Other ENCOME constructions" },
    ],
  },
];

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
