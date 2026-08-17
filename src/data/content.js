/* Structured, bilingual content shared across pages.
   Text is stored as { fr, en } pairs; pick with the `t()` helper from i18n. */

import {
  IconSun, IconAnchor, IconRuler, IconBolt, IconLeaf,
  IconBuilding, IconGauge, IconShield, IconClock,
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
    /* Was pieu-acier.jpg — a bundle of galvanised profiles lying on the ground.
       The client drew an arrow to it and wrote "CHEVRONS" (scan of 10/08/2026,
       p. 4): the pile card was illustrated with rafter stock. This shot is a
       real pile head in the ground, with the adjustment collar he named. */
    image: "/media/ref-pieu-ancrage.jpg",
    title: { fr: "Le Pieu d'ancrage", en: "The Anchor Pile" },
    tagline: {
      fr: "Fondation par ancrage mécanique expansif, sans béton coulé.",
      en: "Foundation by expanding mechanical anchoring, no poured concrete.",
    },
    /* Deliberately free of figures: the client asked (e-mail 01/08/2026) that the
       home page sell the savings without values, and that every number live on
       the product page instead. */
    points: [
      { fr: "2 types — tous terrains (TT) et sable (S) — en 3 modèles : L, XL, XXL", en: "2 types — all-terrain (TT) and sand (S) — in 3 models: L, XL, XXL" },
      { fr: "Ni massif ni longrine béton : le terrain reste en l'état", en: "No concrete footing or ground beam: the site stays as it is" },
      { fr: "Résistance à l'arrachement vérifiable par essai sur le site", en: "Pull-out resistance verifiable by an on-site test" },
    ],
  },
  {
    key: "structure",
    to: "/structures",
    icon: IconBuilding,
    /* "Pas la bonne photo" (scan of 10/08/2026, pp. 5 and 24). The carport shot
       he struck out showed a finished ombrière with a scissor lift; the picture
       he pasted over it is this one — the load-bearing frame itself, posts and
       bracing, which is what the card is about. */
    image: "/media/ref-agrivoltaique.jpg",
    title: { fr: "La Structure", en: "The Structure" },
    tagline: {
      fr: "Ossature porteuse galvanisée, réglable, conçue selon le domaine d'application.",
      en: "Galvanised load-bearing frame, adjustable, designed for each field of application.",
    },
    points: [
      { fr: "Réglage vertical sans calage, y compris en terrains meubles", en: "Vertical adjustment without shimming, including on loose ground" },
      { fr: "Immobilisée par les pieux d'ancrage, elle porte les chevrons autobloquants", en: "Held by the anchor piles, it carries the self-locking rafters" },
      { fr: "3 types selon le projet : champs solaires, agrivoltaïsme, ombrières", en: "3 types depending on the project: solar fields, agrivoltaics, canopies" },
    ],
  },
  {
    key: "chevron",
    to: "/chevrons",
    icon: IconBolt,
    image: "/media/chevron-blocage.webp",
    title: { fr: "Le Chevron autobloquant", en: "The Self-locking Rafter" },
    tagline: {
      fr: "Blocage des panneaux photovoltaïques par profils coulissants, sans aucune fixation.",
      en: "Photovoltaic panel locking through sliding profiles, without any fixing.",
    },
    points: [
      { fr: "Blocage des panneaux sans aucune fixation — un écrou bloque l'ensemble", en: "Panels locked without any fixing — one nut locks the whole set" },
      { fr: "Annule presque totalement le temps de pose des panneaux", en: "Almost entirely removes panel installation time" },
      { fr: "Remplace les systèmes d'intégration classiques à crapauds", en: "Replaces classic clamp-based integration systems" },
    ],
  },
];

/* ---------------- 4 domaines ---------------- */
export const DOMAINES = [
  {
    key: "champs",
    icon: IconSun,
    image: "/media/hero-carport.jpg",
    title: { fr: "Champs photovoltaïques", en: "Photovoltaic fields" },
    text: {
      fr: "Structure entièrement réalisée en profils minces, galvanisés en bandes continues. Très légère, elle est manipulable et montée manuellement, sans engin de levage, avec un boulonnage très réduit.",
      en: "A structure built entirely from thin profiles, galvanised in continuous strips. Very light, it can be handled and erected by hand, without lifting equipment, with very reduced bolting.",
    },
  },
  {
    key: "ombrieres",
    icon: IconBuilding,
    image: "/media/ombriere-parking.jpg",
    title: { fr: "Ombrières de parking & de stades", en: "Car-park & stadium canopies" },
    text: {
      fr: "Ombrières généralement conçues à l'aide de profils du commerce. Structure lourde, galvanisée à chaud, nécessitant un engin de levage. Immobilisée par des pieux modèles « L » à « XXL » selon les actions climatiques locales.",
      en: "Canopies generally built from standard commercial profiles. A heavy, hot-dip galvanised structure requiring lifting equipment. Held by piles from model “L” to “XXL” according to local climatic actions.",
    },
  },
  {
    key: "agrivoltaisme",
    icon: IconLeaf,
    image: "/media/ref-agrivoltaique.jpg",
    title: { fr: "Surfaces agrivoltaïques", en: "Agrivoltaic surfaces" },
    text: {
      fr: "Arbalétriers en profils minces galvanisés, poteaux tubulaires galvanisés à chaud. Selon les dimensions, l'ensemble se pose manuellement ou à l'aide d'un engin léger. Immobilisée par nos pieux, la structure supporte les chevrons autobloquants.",
      en: "Thin galvanised profiles for the rafters, hot-dip galvanised tubular posts. Depending on the dimensions, the whole is erected by hand or with light equipment. Held by our piles, the structure carries the self-locking rafters.",
    },
  },
  {
    key: "ferrovoltaisme",
    icon: IconGauge,
    image: "/media/foreuse-grizzly.jpg",
    title: { fr: "Ferrovoltaïsme", en: "Rail photovoltaics" },
    /* Restored at the client's request (e-mail 01/08/2026): "il faut reprendre
       le texte précédent, il y a peu de choses à dire sur ce sujet", plus the
       sentence he dictated on the installation principle. */
    text: {
      fr: "Cadres ferrovoltaïques : entretoises posées et bloquées entre les rails par crapauds réglables, freinées contre le déboulonnage dû aux vibrations. Un cadre de 10 m se pose en 2 minutes. Le principe de pose des panneaux est le même que pour les chevrons classiques, avec les mêmes avantages de rapidité à la pose comme à la dépose.",
      en: "Rail PV frames: spacers fitted and locked between the rails with adjustable clamps, secured against vibration-induced loosening. A 10 m frame is installed in 2 minutes. Panels are fitted on the same principle as with the classic rafters, with the same speed advantages for installation and removal alike.",
    },
  },
];

/* Where the piles are documented as usable (p.13). Deliberately narrower than
   DOMAINES: roofs and rail frames do not rest on piles. */
export const PILE_USES = [
  { fr: "Les champs solaires", en: "Solar fields" },
  { fr: "Les ombrières", en: "Canopies" },
  { fr: "Les structures agrivoltaïques", en: "Agrivoltaic structures" },
];

/* ---------------- Pieu ranges ----------------
   Charges d'ARRACHAGE (pull-out), not bearing capacity — the client's document
   tabulates these in kgf, "en terre limoneuse" and "dans la roche".
   Only one model was actually tested; the other two are deduced from it, and
   every value must be confirmed by site-specific tests. Any copy that renders
   this table has to carry that caveat (see PILE_CAVEAT).
   Drilling dimensions: the document states only the TT L (Ø120 × 1600). The
   client confirmed on 01/08/2026 that the XL and XXL figures may be shown here
   too, but "sans éclat particulier" — so they stay in this detail table and
   never on the home page. */
export const PILE_RANGES = [
  {
    name: "TT L",
    load: { fr: "Charges légères", en: "Light loads" },
    drilling: { fr: "Ø 120 × 1 600 mm", en: "Ø 120 × 1,600 mm" },
    terre: { fr: "3 500 à 5 000 kgf", en: "3,500 to 5,000 kgf" },
    roche: { fr: "12 000 kgf", en: "12,000 kgf" },
  },
  {
    name: "TT XL",
    load: { fr: "Charges moyennes", en: "Medium loads" },
    drilling: { fr: "Ø 150 × 2 500 mm", en: "Ø 150 × 2,500 mm" },
    terre: { fr: "7 000 à 10 000 kgf", en: "7,000 to 10,000 kgf" },
    roche: { fr: "25 000 kgf", en: "25,000 kgf" },
  },
  {
    name: "TT XXL",
    load: { fr: "Charges lourdes", en: "Heavy loads" },
    drilling: { fr: "Ø 200 × 3 000 mm", en: "Ø 200 × 3,000 mm" },
    terre: { fr: "14 000 à 20 000 kgf", en: "14,000 to 20,000 kgf" },
    roche: { fr: "50 000 kgf", en: "50,000 kgf" },
  },
];

/* Wording kept model-agnostic on purpose: the client's document attributes the
   test to "un pieu semblable au modèle TT XL", his 01/08/2026 e-mail to the
   TT XXL. Pending his arbitration, this sentence is true either way. */
export const PILE_CAVEAT = {
  fr: "Ces charges d'arrachage proviennent d'essais réels menés sur un pieu de la gamme ; les valeurs des autres modèles en sont déduites. Elles restent indicatives et doivent être confirmées par des essais spécifiques sur le futur site d'installation.",
  en: "These pull-out loads come from real tests carried out on one pile of the range; the figures for the other models are deduced from it. They remain indicative and must be confirmed by specific tests on the future installation site.",
};

/* Client's answer of 01/08/2026, question 8: galvanising is an option, not the
   standard. Rust is treated as a protective layer and the steel thicknesses are
   sized so that the pile still performs after 20 years of it. */
export const PILE_PROTECTION = {
  fr: "La galvanisation du pieu est une option. L'expérience montre que la rouille forme une couche protectrice de l'acier : les épaisseurs sont calculées pour que, rouille comprise, les éléments du pieu tiennent 20 ans.",
  en: "Galvanising the pile is an option. Experience shows that rust forms a protective layer on the steel: thicknesses are calculated so that, rust included, the pile components last 20 years.",
};

/* Client's answer of 01/08/2026, question 7: installation time may be quoted,
   but it is governed by borehole diameter and depth — NOT by the type of ground.
   Any copy on installation speed must keep that attribution straight. */
export const PILE_TIMING = {
  fr: "Le forage et la mise en œuvre sont rapides. Le temps de pose dépend du diamètre et de la profondeur de forage — c'est-à-dire du modèle de pieu retenu — et non de la nature du terrain.",
  en: "Drilling and installation are fast. Installation time depends on the borehole diameter and depth — that is, on the pile model chosen — and not on the type of ground.",
};

/* Second pile family: no drilling at all, driven in by battage. Same 3 load
   classes as the TT range; the document gives no dimensions or load figures. */
export const SAND_PILE_RANGES = [
  { name: "S L", load: { fr: "Charges légères", en: "Light loads" } },
  { name: "S XL", load: { fr: "Charges moyennes", en: "Medium loads" } },
  { name: "S XXL", load: { fr: "Charges lourdes", en: "Heavy loads" } },
];

/* ---------------- Structures : 3 types ----------------
   Dictated by the client on 01/08/2026 (question 9). The three differ by profile
   family, galvanising process and erection method — that distinction is the
   whole point, so never flatten them into one "galvanisée à chaud" claim. */
export const STRUCTURE_TYPES = [
  {
    key: "champs",
    title: { fr: "Structures de champs solaires", en: "Solar-field structures" },
    text: {
      fr: "Entièrement réalisées en profils minces. Très légères, elles sont manipulables manuellement.",
      en: "Built entirely from thin profiles. Very light, they can be handled by hand.",
    },
    galva: {
      fr: "Galvanisation en bandes continues, dite galvanisation SENZIMIR, avec un revêtement de 350 à 600 g/m².",
      en: "Galvanised in continuous strips — the SENZIMIR process — with a 350 to 600 g/m² coating.",
    },
    pose: { fr: "Montage manuel", en: "Erected by hand" },
  },
  {
    key: "agrivoltaisme",
    title: { fr: "Structures agrivoltaïques", en: "Agrivoltaic structures" },
    text: {
      fr: "Les arbalétriers sont généralement conçus en profils minces ; les poteaux sont généralement tubulaires.",
      en: "The rafters are generally made from thin profiles; the posts are generally tubular.",
    },
    galva: {
      fr: "Arbalétriers galvanisés comme les structures de champs solaires ; poteaux tubulaires galvanisés à chaud.",
      en: "Rafters galvanised as on solar-field structures; tubular posts hot-dip galvanised.",
    },
    pose: {
      fr: "Montage manuel ou à l'aide d'un engin léger, selon les dimensions",
      en: "Erected by hand or with light equipment, depending on the dimensions",
    },
  },
  {
    key: "ombrieres",
    title: { fr: "Structures d'ombrières", en: "Canopy structures" },
    text: {
      fr: "Généralement conçues à l'aide de profils du commerce. Il s'agit d'une structure lourde.",
      en: "Generally built from standard commercial profiles. This is a heavy structure.",
    },
    galva: { fr: "Galvanisation exécutée à chaud.", en: "Hot-dip galvanised." },
    pose: { fr: "Engin de levage nécessaire", en: "Lifting equipment required" },
  },
];

/* ---------------- Chevron : figures & comparison ----------------
   Restored in full at the client's request (e-mail 01/08/2026, questions 5-7):
   "Le texte complet que j'ai établi doit être copié entièrement". Source is the
   CHEVRONS section of Scan2026-08-01_165057.pdf, pp. 3-5. */
export const CHEVRON_LAYOUTS = [
  {
    key: "portrait",
    title: { fr: "Pose en portrait", en: "Portrait installation" },
    intro: {
      fr: "Les chevrons sont posés en portrait suivant le rampant de la toiture, sur 2 uniques files de pannes. Une seule vis par chevron suffit pour bloquer toute la file de panneaux.",
      en: "The rafters are laid in portrait along the roof slope, on just 2 rows of purlins. A single screw per rafter is enough to lock the whole row of panels.",
    },
    example: { fr: "Rampant de 7 m environ, 4 panneaux", en: "Roof slope of about 7 m, 4 panels" },
    withChevron: {
      fr: "1 seule vis par chevron ; le chevron repose sur 2 files de pannes.",
      en: "1 single screw per rafter; the rafter rests on 2 rows of purlins.",
    },
    competitor: {
      fr: "8 crapauds de blocage de chaque côté des panneaux ; en champ photovoltaïque, 8 files de pannes sont nécessaires.",
      en: "8 clamps on each side of the panels; on a photovoltaic field, 8 rows of purlins are required.",
    },
    method: {
      fr: "La pose peut être organisée depuis le haut de pente : il suffit de laisser les panneaux coulisser entre les chevrons et s'aligner seuls l'un derrière l'autre. Il reste possible de les présenter par le dessus ou par le dessous, directement à leur emplacement définitif.",
      en: "Installation can be run from the top of the slope: simply let the panels slide between the rafters and line themselves up one behind the other. They can still be presented from above or below, straight at their final position.",
    },
  },
  {
    key: "paysage",
    title: { fr: "Pose en paysage", en: "Landscape installation" },
    intro: {
      fr: "Les chevrons sont posés horizontalement dans le sens des pannes. Ils franchissent la travée et reposent directement sur les arbalétriers de portiques — aucune panne n'est nécessaire.",
      en: "The rafters are laid horizontally, in the direction of the purlins. They span the bay and rest directly on the portal-frame rafters — no purlin is required.",
    },
    example: { fr: "Longueur de 2 × 10 m environ, 12 panneaux", en: "Length of about 2 × 10 m, 12 panels" },
    withChevron: {
      fr: "2 vis par chevron ; le chevron repose directement sur les portiques.",
      en: "2 screws per rafter; the rafter rests directly on the portal frames.",
    },
    competitor: {
      fr: "Pour une file de 20 m et 12 panneaux : 24 crapauds de blocage de chaque côté des panneaux, 2 poutres de rives et 24 files de pannes.",
      en: "For a 20 m row of 12 panels: 24 clamps on each side of the panels, 2 edge beams and 24 rows of purlins.",
    },
    method: {
      fr: "La pose peut être organisée depuis une extrémité de la toiture, les panneaux étant poussés l'un derrière l'autre jusqu'à leur emplacement. Il reste possible de les présenter par le dessus ou par le dessous, directement à leur emplacement définitif.",
      en: "Installation can be run from one end of the roof, the panels being pushed one behind the other to their position. They can still be presented from above or below, straight at their final position.",
    },
  },
];

/* Two rafter families (PDF p.4-5). */
export const CHEVRON_TYPES = [
  {
    key: "classique",
    name: { fr: "Chevron classique", en: "Classic rafter" },
    text: {
      fr: "Destiné aux toitures de champs solaires, d'ombrières, de surfaces agrivoltaïques, de hangars et de pavillons. Sa grande portée en fait une véritable poutre de structure.",
      en: "For the roofs of solar fields, canopies, agrivoltaic surfaces, warehouses and houses. Its long span makes it a genuine structural beam.",
    },
  },
  {
    key: "particulier",
    name: { fr: "Chevron particulier", en: "Special rafter" },
    text: {
      fr: "Destiné au blocage des panneaux reposant sur les cadres de structure ferrovoltaïques.",
      en: "For clamping panels resting on rail-photovoltaic structural frames.",
    },
  },
];

/* Headline figures the client confirmed on 01/08/2026 (questions 5 and 7). */
export const CHEVRON_FIGURES = {
  poseRatio: {
    fr: "Ce système divise par plus de 10 le temps de pose des panneaux.",
    en: "This system divides panel installation time by more than 10.",
  },
  posePanel: {
    fr: "La pose d'un panneau ne demande pas plus de 5 à 10 secondes.",
    en: "Fitting one panel takes no more than 5 to 10 seconds.",
  },
  demontage: {
    fr: "Un panneau défectueux se remplace en quelques dizaines de secondes : il suffit de dévisser les 2 chevrons concernés (2 vis), de sortir le panneau par le dessus ou par le dessous de son emplacement, de le remplacer de la même façon, puis de revisser les 2 chevrons.",
    en: "A faulty panel is replaced in a few tens of seconds: unscrew the 2 rafters concerned (2 screws), slide the panel out of its position from above or below, fit the replacement the same way, then screw the 2 rafters back.",
  },
  acier: {
    fr: "Les chevrons sont profilés en acier galvanisé de 350 g/m² minimum, jusqu'à 600 g/m².",
    en: "The rafters are rolled from galvanised steel, 350 g/m² minimum and up to 600 g/m².",
  },
  calcul: {
    fr: "Les profils sont calculés pour résister aux charges climatiques locales conformément aux règlements en vigueur. Les lèvres de blocage des panneaux sont, elles, calculées pour résister au vent cyclonique normalisé.",
    en: "The profiles are calculated to withstand local climatic loads in accordance with the regulations in force. The panel-clamping lips are calculated to withstand standardised cyclonic wind.",
  },
};

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
  // "avec système de réglage" — the client's addition on this caption (scan of
  // 10/08/2026, p. 40): the shot shows the adjustment collar, not a bare pile.
  { key: "pieu-ancrage", type: { fr: "Pieu d'ancrage avec système de réglage", en: "Anchor pile with adjustment system" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-pieu-ancrage.jpg" },
  { key: "parc-pv", type: { fr: "Parc photovoltaïque", en: "Photovoltaic park" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-parc-pv.jpg" },
  { key: "panneaux-mono", type: { fr: "Panneaux monocristallins", en: "Monocrystalline panels" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-panneaux-mono.jpg" },
  { key: "sous-structure", type: { fr: "Sous-face de structure", en: "Underside of the structure" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-sous-structure.webp" },
  { key: "centrale-coteau", type: { fr: "Centrale au sol en coteau", en: "Hillside ground-mounted plant" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-centrale-coteau.webp" },
  { key: "essai-portance", type: { fr: "Essai d'arrachement sur pieu", en: "Pile pull-out test" }, place: { fr: "La Réunion", en: "Réunion Island" }, image: "/media/ref-essai-portance.webp" },
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
