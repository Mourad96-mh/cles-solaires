# Les Clés Solaires — site vitrine

Site vitrine **bilingue (FR / EN)** de **Les Clés Solaires**, fournisseur de **pieux d'ancrage,
structures porteuses et chevrons brevetés** pour installations photovoltaïques (champs solaires,
ombrières, agrivoltaïsme, ferrovoltaïsme), avec plans, notices d'essais et accompagnement de la
conception à la mise en œuvre.

Stack : **React + Vite**, **CSS pur** (aucun framework UI), **React Router**.

## Bilingue (FR / EN)

Le français est servi à la racine (`/`), l'anglais sous le préfixe `/en/*` (mêmes slugs).
La langue est déduite de l'URL par `src/i18n.jsx` (`LangProvider` + `useLang()`), un sélecteur
FR / EN est présent dans la barre de navigation, et les balises `hreflang` + `<html lang>` sont
gérées par `useSeo` (`src/lib/hooks.js`). Les textes sont stockés en paires `{ fr, en }` :
prose dans les pages, contenu structuré (produits, domaines, références, gammes de pieux) dans
`src/data/content.js`.

## Démarrage

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans /dist
npm run preview  # prévisualiser le build
```

## Structure

```
public/media/        Photos & vidéos du client (hero, produit, références…)
public/sitemap.xml   Plan du site (SEO)
public/robots.txt    Directives robots
src/data/site.js     ⭐ Contenu éditable : coordonnées, navigation, société mère & partenaires
src/lib/forms.js     ⭐ Configuration de l'envoi des formulaires (voir ci-dessous)
src/lib/hooks.js     SEO par page (titre/meta) + animations au scroll
src/lib/icons.jsx    Icônes SVG inline
src/i18n.jsx         ⭐ Couche bilingue (LangProvider, useLang, liens localisés)
src/data/content.js  ⭐ Contenu structuré bilingue (produits, domaines, références, gammes)
src/components/       Navbar (menu Produits + sélecteur FR/EN), Footer, CtaBand, PageHero…
src/pages/            Accueil, Produits, Chevrons, Structures, Pieux,
                      Références, Contact, Devis, Mentions légales, Confidentialité
```

## Pages

- `/` Accueil
- Produits : `/produits` — `/chevrons` — `/structures` — `/pieux`
- `/references` (galerie + lightbox) — `/contact` — `/devis`
- `/mentions-legales` — `/confidentialite`
- Version anglaise : mêmes routes préfixées par `/en` (ex. `/en/chevrons`)

## Formulaires (Contact & Devis)

Par défaut, sans backend configuré, l'envoi ouvre le client mail du visiteur (fallback `mailto`).

Pour recevoir les demandes par e-mail automatiquement, renseignez un endpoint dans
`src/lib/forms.js` :

```js
export const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxx"; // ou Web3Forms, ou votre API
```

Services compatibles sans serveur : **Formspree**, **Web3Forms**, **Getform**…
Un **honeypot anti-spam** (`company_url`) est déjà intégré.
L'adresse de réception affichée est définie dans `src/data/site.js` (`COMPANY.email`).

## Source du contenu produit

Les textes produits (pieux, structures, chevrons) suivent deux documents fournis par
le client, plus son courriel de validation :

| Source | Contenu |
| --- | --- |
| `Scan2026-08-01_105630.pdf` (22 p.) | Document principal : pieux, structures, chevrons |
| `Scan2026-08-01_165057.pdf` (5 p.) | Kbis + extrait Guichet Unique ENCOME ; texte CHEVRONS complet |
| Courriel du 01/08/2026 | Validation des chiffres retirés, 3 types de structures, ferrovoltaïsme |

Règle appliquée : **ne rien affirmer qu'une de ces sources n'établit pas.**

### Arbitrages du client (courriel du 01/08/2026)

- **Ligne éditoriale** : la page d'accueil vend l'économie **sans aucune valeur
  chiffrée** ; tout le détail vit sur les pages produit. Aucun formulaire ne doit
  conditionner l'accès à l'information — le client a explicitement écarté l'idée de
  faire donner ses coordonnées au visiteur pour « en savoir plus ».
- **Textes longs** : conservés en entier, mais repliés (`<details class="disclosure">`)
  dans la description détaillée du produit, à sa demande.
- **Galvanisation — 3 types de structures distincts** (`STRUCTURE_TYPES`) :
  champs solaires = profils minces, galvanisation **SENZIMIR** en bandes continues,
  350 à 600 g/m², montage manuel ; agrivoltaïsme = arbalétriers en profils minces,
  poteaux **tubulaires galvanisés à chaud**, montage manuel ou engin léger ;
  ombrières = profils du commerce, **galvanisation à chaud**, engin de levage.
  Ne jamais aplatir ces trois cas en un seul « galvanisé à chaud ».
- **Pieux — galvanisation optionnelle** : la rouille est traitée comme couche
  protectrice, les épaisseurs sont calculées pour 20 ans (`PILE_PROTECTION`).
- **Pieux — temps de pose** : fonction du **diamètre et de la profondeur de forage**,
  jamais du terrain (`PILE_TIMING`).
- **Pieux — charges** : charges d'**arrachage** (kgf), déduites d'essais sur un seul
  modèle, indicatives, à confirmer par essais sur site (`PILE_CAVEAT`). Le modèle
  réellement testé reste à trancher : le document dit TT XL, le courriel dit TT XXL —
  la formulation actuelle est vraie dans les deux cas.

## Contenu à compléter / brancher

Voir `questions-client.md` pour la liste courante adressée au client.

- **Photos client** : les `<PhotoFrame>` (`src/components/PhotoFrame.jsx`) marquent les
  emplacements réservés, comme demandé par le client. Remplacer par un `<img>` à
  réception de chaque cliché.
- **Témoignage** : celui de la page Références a été retiré (non sourcé) ; en remettre
  un dès qu'un vrai client accepte d'être cité.
- **Hébergeur** : seule mention encore en attente dans les mentions légales.
- **Adresse e-mail** : `COMPANY.email` pointe vers une adresse Gmail personnelle — à
  remplacer par une adresse professionnelle avant la mise en ligne.
- **Fiches techniques PDF** : à déposer dans `public/` et à lier depuis la page produit.

## Déploiement (HTTPS, SPA)

Build statique (`/dist`) déployable sur Netlify, Vercel, ou tout hébergement statique.
Les redirections SPA sont fournies : `public/_redirects` (Netlify) et `vercel.json` (Vercel).
Pour un autre hébergeur (Apache/Nginx), rediriger toutes les routes vers `index.html`.

> CMS : le cahier des charges recommande WordPress. Ici le contenu principal est
> centralisé dans `src/data/site.js` et dans les pages. Pour une administration
> autonome par le client, prévoir un CMS headless (Decap/Sanity) ou une version WordPress.
