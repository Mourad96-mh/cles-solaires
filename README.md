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
src/data/site.js     ⭐ Contenu éditable : coordonnées, navigation, partenaires, chiffres
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

## Contenu à compléter / brancher

- **Coordonnées réelles** (tél., e-mail, SIRET, adresse) dans `src/data/site.js`.
- **Logos partenaires** : ajouter un champ `logo: "/media/xxx.svg"` dans `PARTNERS` (`src/data/site.js`).
- **Mentions légales & confidentialité** : textes à valider par le client.
- **Fiches techniques PDF** : à déposer dans `public/` et à lier depuis la page produit.

## Déploiement (HTTPS, SPA)

Build statique (`/dist`) déployable sur Netlify, Vercel, ou tout hébergement statique.
Les redirections SPA sont fournies : `public/_redirects` (Netlify) et `vercel.json` (Vercel).
Pour un autre hébergeur (Apache/Nginx), rediriger toutes les routes vers `index.html`.

> CMS : le cahier des charges recommande WordPress. Ici le contenu principal est
> centralisé dans `src/data/site.js` et dans les pages. Pour une administration
> autonome par le client, prévoir un CMS headless (Decap/Sanity) ou une version WordPress.
