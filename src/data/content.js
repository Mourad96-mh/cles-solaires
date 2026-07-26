/* Structured, bilingual content shared across pages.
   Text is stored as { fr, en } pairs; pick with the `t()` helper from i18n. */

import {
  IconSun, IconAnchor, IconRuler, IconBolt, IconLeaf,
  IconBuilding, IconGauge, IconFence, IconShield, IconClock,
} from "../lib/icons.jsx";

export const TAGLINE = {
  fr: "Pieu · Structure · Chevron",
  en: "Pile · Structure · Rafter",
};

/* ---------------- 3 products ----------------
   Order follows the build sequence — pile, then structure, then rafter —
   and matches the "Pieu · Structure · Chevron" headings. */
export const PRODUCTS = [
  {
    key: "pieu",
    to: "/pieux",
    icon: IconAnchor,
    image: "/media/pieu-acier.jpg",
    title: { fr: "Le Pieu d'ancrage", en: "The Anchor Pile" },
    tagline: {
      fr: "Fondation par ancrage mécanique expansif, sans béton coulé.",
      en: "Foundation by expanding mechanical anchoring, no poured concrete.",
    },
    points: [
      { fr: "3 gammes : L, XL, XXL selon les charges", en: "3 ranges: L, XL, XXL depending on loads" },
      { fr: "Jusqu'à 50 tonnes de portance en roche", en: "Up to 50 tonnes of bearing capacity in rock" },
      { fr: "Grâce à nos partenaires, nous vous assistons aux essais de traction contrôlés à la pose", en: "Through our partners, we assist you with controlled pull-out tests during installation" },
    ],
  },
  {
    key: "structure",
    to: "/structures",
    icon: IconBuilding,
    image: "/media/hero-carport.jpg",
    title: { fr: "La Structure", en: "The Structure" },
    tagline: {
      fr: "Ossature porteuse légère, réglable, galvanisée à chaud.",
      en: "Lightweight load-bearing frame, adjustable, hot-dip galvanised.",
    },
    points: [
      { fr: "Réglable verticalement, stabilisée par diagonales", en: "Vertically adjustable, stabilised by diagonals" },
      { fr: "Boulonnage réduit, aucun gousset ajouté", en: "Reduced bolting, no added gussets" },
      { fr: "Adaptée à chaque domaine d'application", en: "Tailored to each field of application" },
    ],
  },
  {
    key: "chevron",
    to: "/chevrons",
    icon: IconBolt,
    image: "/media/chevron-blocage.webp",
    title: { fr: "Le Chevron", en: "The Rafter" },
    tagline: {
      fr: "Blocage des panneaux photovoltaïques par pièces coulissantes.",
      en: "Photovoltaic panel clamping through sliding pieces.",
    },
    points: [
      { fr: "1 seule vis par chevron en portrait, 2 en paysage", en: "Just 1 screw per rafter in portrait, 2 in landscape" },
      { fr: "Temps de pose divisé par 10 face aux solutions actuelles", en: "Installation time divided by 10 vs. current solutions" },
      { fr: "Démontage d'un panneau en quelques secondes", en: "A panel can be removed in seconds" },
    ],
  },
];

/* ---------------- Home key figures ---------------- */
export const STATS = [
  { value: { fr: "3 produits", en: "3 products" }, label: { fr: "Pieu · Structure · Chevron", en: "Pile · Structure · Rafter" } },
  { value: { fr: "Pose ÷ 10", en: "Install ÷ 10" }, label: { fr: "Temps de pose des chevrons", en: "Rafter installation time" } },
  { value: { fr: "50 t", en: "50 t" }, label: { fr: "Portance pieu XXL en roche", en: "XXL pile capacity in rock" } },
  { value: { fr: "Réversible", en: "Reversible" }, label: { fr: "Démontage & dépose", en: "Dismantling & removal" } },
];

/* ---------------- 5 domaines ---------------- */
export const DOMAINES = [
  {
    key: "champs",
    icon: IconSun,
    image: "/media/hero-carport.jpg",
    title: { fr: "Champs photovoltaïques", en: "Photovoltaic fields" },
    text: {
      fr: "Structure porteuse conçue pour recevoir exclusivement nos chevrons et nos pieux. Résistante aux actions climatiques, très légère, elle se pose manuellement sans engin de levage.",
      en: "A load-bearing structure designed to receive exclusively our rafters and piles. Resistant to climatic loads, very light, it is installed by hand without lifting equipment.",
    },
  },
  {
    key: "ombrieres",
    icon: IconBuilding,
    image: "/media/ombriere-parking.jpg",
    title: { fr: "Ombrières de parking & de stades", en: "Car-park & stadium canopies" },
    text: {
      fr: "Ombrières réalisées en profils du commerce (IPE, HEA, PRS) ou avec nos chevrons et pieux. Réponse aux normes et aux charges climatiques locales.",
      en: "Canopies built from standard profiles (IPE, HEA, PRS) or with our rafters and piles. Compliant with local standards and climatic loads.",
    },
  },
  {
    key: "agrivoltaisme",
    icon: IconLeaf,
    image: "/media/ref-agrivoltaique.jpg",
    title: { fr: "Surfaces agrivoltaïques", en: "Agrivoltaic surfaces" },
    text: {
      fr: "Structure tubulaire à encombrement minimal privilégiant les cultures. Galvanisée à chaud, stable, elle repose sur nos pieux — sans massifs ni longrines béton très encombrants.",
      en: "A tubular structure with minimal footprint that favours crops. Hot-dip galvanised and stable, it rests on our piles — without bulky concrete footings or ground beams.",
    },
  },
  {
    key: "toitures",
    icon: IconFence,
    image: "/media/atelier-equipe.jpg",
    title: { fr: "Toitures hangars & pavillons", en: "Warehouse & building roofs" },
    text: {
      fr: "Sur toitures existantes, seules les attaches reliant les chevrons à la structure du bâtiment sont nécessaires : pose rapide, sans reprise de charpente.",
      en: "On existing roofs, only the fasteners linking the rafters to the building structure are required: fast installation, with no roof reframing.",
    },
  },
  {
    key: "ferrovoltaisme",
    icon: IconGauge,
    image: "/media/foreuse-grizzly.jpg",
    title: { fr: "Ferrovoltaïsme", en: "Rail photovoltaics" },
    text: {
      fr: "Cadres ferrovoltaïques : entretoises posées et bloquées entre les rails par crapauds réglables, freinées contre le déboulonnage dû aux vibrations. Un cadre de 10 m se pose en 2 minutes.",
      en: "Rail PV frames: spacers fitted and locked between the rails with adjustable clamps, secured against vibration-induced loosening. A 10 m frame is installed in 2 minutes.",
    },
  },
];

/* ---------------- Pieu ranges ---------------- */
export const PILE_RANGES = [
  {
    name: "L",
    diameter: "Ø 120 mm",
    depth: { fr: "1 600 mm de profondeur", en: "1,600 mm deep" },
    terre: { fr: "3,5 à 5 tonnes", en: "3.5 to 5 tonnes" },
    roche: { fr: "12 tonnes", en: "12 tonnes" },
  },
  {
    name: "XL",
    diameter: "Ø 150 mm",
    depth: { fr: "2 500 mm de profondeur", en: "2,500 mm deep" },
    terre: { fr: "7 à 10 tonnes", en: "7 to 10 tonnes" },
    roche: { fr: "25 tonnes", en: "25 tonnes" },
  },
  {
    name: "XXL",
    diameter: "Ø 200 mm",
    depth: { fr: "3 000 mm de profondeur", en: "3,000 mm deep" },
    terre: { fr: "14 à 20 tonnes", en: "14 to 20 tonnes" },
    roche: { fr: "50 tonnes", en: "50 tonnes" },
  },
];

/* ---------------- Références (client-provided) ---------------- */
export const REFERENCES = [
  { key: "espagne", type: { fr: "Champ solaire", en: "Solar field" }, place: { fr: "Espagne", en: "Spain" }, image: "/media/ref-aerien.jpg" },
  { key: "reunion-agri", type: { fr: "Surface agrivoltaïque", en: "Agrivoltaic surface" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-agrivoltaique.jpg" },
  { key: "bretagne", type: { fr: "Ombrière", en: "Canopy" }, place: { fr: "Bretagne", en: "Brittany" }, image: "/media/ombriere-parking.jpg" },
  { key: "champ-solaire", type: { fr: "Champ solaire", en: "Solar field" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-champ-solaire.jpg" },
  { key: "centrale-sol", type: { fr: "Centrale au sol", en: "Ground-mounted plant" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-centrale-sol.jpg" },
  { key: "ombriere-pente", type: { fr: "Ombrière photovoltaïque", en: "Photovoltaic canopy" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-ombriere-pente.jpg" },
  { key: "ossature", type: { fr: "Ossature métallique", en: "Steel frame" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-ossature-metallique.jpg" },
  { key: "structure-porteuse", type: { fr: "Structure porteuse", en: "Load-bearing structure" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-structure-porteuse.jpg" },
  { key: "pieu-ancrage", type: { fr: "Pieu d'ancrage", en: "Anchor pile" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-pieu-ancrage.jpg" },
  { key: "parc-pv", type: { fr: "Parc photovoltaïque", en: "Photovoltaic park" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-parc-pv.jpg" },
  { key: "panneaux-mono", type: { fr: "Panneaux monocristallins", en: "Monocrystalline panels" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-panneaux-mono.jpg" },
  { key: "sous-structure", type: { fr: "Sous-face de structure", en: "Underside of the structure" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-sous-structure.webp" },
  { key: "centrale-coteau", type: { fr: "Centrale au sol en coteau", en: "Hillside ground-mounted plant" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-centrale-coteau.webp" },
  { key: "essai-portance", type: { fr: "Essai de portance sur pieu", en: "Pile bearing test" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-essai-portance.webp" },
  { key: "comparateur", type: { fr: "Mesure au comparateur", en: "Dial-gauge measurement" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-comparateur.webp" },
];

/* ---------------- Accompagnement steps ---------------- */
export const STEPS = [
  {
    n: "01",
    icon: IconRuler,
    title: { fr: "Conception & étude", en: "Design & engineering" },
    text: {
      fr: "Nous accompagnons installateurs, développeurs et porteurs de projets, et dimensionnons la solution selon la neige, le vent et les charges.",
      en: "We support installers, developers and project owners, and size the solution for snow, wind and applied loads.",
    },
  },
  {
    n: "02",
    icon: IconBolt,
    title: { fr: "Plans & notes", en: "Drawings & notes" },
    text: {
      fr: "Plans d'assemblage et de montage, notice d'essais et de montage des pieux, notes de calculs justificatives des éléments.",
      en: "Assembly and installation drawings, pile test & installation notice, justifying calculation notes for the components.",
    },
  },
  {
    n: "03",
    icon: IconShield,
    title: { fr: "Fourniture", en: "Supply" },
    text: {
      fr: "Chevrons, structures et pieux — chaque poste est livrable séparément, sauf les cadres ferrovoltaïques qui constituent un ensemble.",
      en: "Rafters, structures and piles — each item can be supplied separately, except rail frames which form a single set.",
    },
  },
  {
    n: "04",
    icon: IconClock,
    title: { fr: "Mise en œuvre", en: "Implementation" },
    text: {
      fr: "Sur demande, nous vous accompagnons dans la recherche et le choix des sous-traitants chargés du forage et de l'installation des pieux.",
      en: "On request, we help you find and select the subcontractors in charge of drilling and pile installation.",
    },
  },
];
