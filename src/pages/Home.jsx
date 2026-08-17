import { useEffect, useState } from "react";
import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang, L } from "../i18n.jsx";
import { DOMAINES } from "../data/content.js";
import { PARENT, PARTNER_ROLES } from "../data/site.js";
import CtaBand from "../components/CtaBand.jsx";
import PhotoFrame from "../components/PhotoFrame.jsx";
import { IconArrowRight, IconCheck } from "../lib/icons.jsx";
import "./Home.css";

/**
 * Pick the hero video cut that matches the viewport: a 16:9 composite (portrait
 * footage on a blurred fill) on desktop, the raw portrait cut on narrow screens.
 * Only the chosen file is ever mounted, so the other one is never downloaded.
 * Returns null until measured on the client — avoids fetching the wrong cut first.
 */
function useHeroVideoCut() {
  const [cut, setCut] = useState(null);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const apply = () => setCut(mq.matches ? "wide" : "tall");
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return cut;
}

export default function Home() {
  const { lang, t } = useLang();
  const cut = useHeroVideoCut();
  useSeo({
    lang,
    title: t("Pieux, structures & chevrons pour le photovoltaïque",
             "Anchor piles, structures & rafters for solar"),
    description: t(
      "Les Clés Solaires fournit pieux d'ancrage, structures porteuses et chevrons pour installations photovoltaïques : champs solaires, ombrières, agrivoltaïsme, ferrovoltaïsme.",
      "Les Clés Solaires supplies anchor piles, load-bearing structures and rafters for photovoltaic installations: solar fields, canopies, agrivoltaics, rail PV."
    ),
    path: "/",
  });
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          <div className="hero__bg" />
          {cut && (
            <video
              key={cut}
              className="hero__video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={`/media/hero-process-${cut}-poster.webp`}
              aria-hidden="true"
              tabIndex={-1}
            >
              <source src={`/media/hero-process-${cut}.webm`} type="video/webm" />
              <source src={`/media/hero-process-${cut}.mp4`} type="video/mp4" />
            </video>
          )}
          <div className="hero__scrim" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <h1>
              {t("Pieu, structure, chevron : ", "Pile, structure, rafter: ")}
              <span>{t("nos 3 clés du solaire.", "our 3 keys to solar.")}</span>
            </h1>
            <p className="hero__sub">
              {t(
                "Nous fournissons les structures porteuses, les pieux d'ancrage et le chevron qui bloque les panneaux photovoltaïques, destinés aux champs solaires, ombrières, agrivoltaïsme et ferrovoltaïsme.",
                "We supply the load-bearing structures, anchor piles and the rafter that clamps photovoltaic panels, intended for solar fields, canopies, agrivoltaics and rail PV."
              )}
            </p>
            <div className="hero__actions">
              <L to="/produits" className="btn btn--primary">
                {t("Découvrir nos produits", "Discover our products")} <IconArrowRight />
              </L>
              <L to="/devis" className="btn btn--light">{t("Demander un devis", "Request a quote")}</L>
              <L to="/contact" className="btn btn--outline-light">{t("Nous contacter", "Contact us")}</L>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container intro">
          <div className="reveal">
            <span className="eyebrow">{t("L'entreprise", "The company")}</span>
            <h2>{t("Votre fournisseur de solutions photovoltaïques", "Your supplier of photovoltaic solutions")}</h2>
            <p className="lead">
              {t(
                "Notre engagement est de vous fournir des solutions fiables, performantes et adaptées à vos besoins.",
                "Our commitment is to supply you with reliable, high-performance solutions tailored to your needs."
              )}
            </p>
            {/* "temps de pose" → "temps de fixation" (scan of 10/08/2026, p. C):
                the rafter removes the fixing work, not the whole installation. */}
            <p>
              {t(
                "Notre chevron autobloquant annule presque totalement le temps de fixation des panneaux, tandis que nos pieux d'ancrage expansifs remplacent le béton coulé par un ancrage mécanique dont la tenue peut être vérifiée par essai sur site, et notre structure est dimensionnée en fonction de votre site et de votre situation géographique.",
                "Our self-locking rafter almost entirely removes the panel fixing time, while our expanding anchor piles replace poured concrete with mechanical anchoring whose hold can be verified by on-site testing, and our structure is sized according to your site and its geographic location."
              )}
            </p>
          </div>
          {/* The client's arrows swap the first two lines only (scan of
              10/08/2026, p. C): the pile comes up to first, the chevron drops to
              second. The structures line stays where it was. */}
          <ul className="intro__list reveal">
            {[
              t("Pieux tous terrains et pieux sable, en L, XL et XXL", "All-terrain and sand piles, in L, XL and XXL"),
              t("Chevron — blocage des panneaux sans aucune fixation", "Rafter — panels held without any fixing"),
              t("Structures porteuses réglables, galvanisées", "Adjustable, galvanised structures"),
              t("Plans, notices d'essais et notes de calculs", "Drawings, test notices and calculation notes"),
            ].map((t2) => (
              <li key={t2}><IconCheck /> {t2}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PARTENAIRE — section 1 of the client's document (pp. 2-5). The photo
          frames stand in for the four captioned boxes he laid out there. */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t("Partenaire", "Partner")}</span>
            {/* The client struck out the previous headline, "Les Clés Solaires
                au sein de la SAS ENCOME" (scan of 10/08/2026, p. 3), while
                leaving the paragraph under it — which already states the
                relationship — untouched. The heading now just names the two. */}
            <h2>{t("Les Clés Solaires & la SAS ENCOME", "Les Clés Solaires & SAS ENCOME")}</h2>
            <p>
              {t(
                `La ${PARENT.name}, ${PARENT.activity.fr.toLowerCase()}, intègre en son sein le domaine des structures solaires nommé « Les Clés Solaires ».`,
                `${PARENT.name}, a ${PARENT.activity.en.toLowerCase()}, houses within it the solar-structures business named “Les Clés Solaires”.`
              )}
            </p>
          </div>
          <div className="grid grid-2">
            {PARTNER_ROLES.map((p) => (
              <article className="card reveal" key={p.key}>
                <h3>{p.name}</h3>
                <p>{t(p.text.fr, p.text.en)}</p>
              </article>
            ))}
          </div>
          <div className="grid grid-4" style={{ marginTop: 28 }}>
            {PARTNER_ROLES.flatMap((p) => p.photos).map((ph) => (
              <PhotoFrame
                key={ph.fr}
                caption={t(ph.fr, ph.en)}
                src={ph.image}
                alt={ph.alt && t(ph.alt.fr, ph.alt.en)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The "Pieu · Structure · Chevron" card row that stood here was crossed
          out wholesale by the client (scan of 10/08/2026, accueil supplement
          p. A). The three cards are unchanged on /produits, which the hero's
          "Découvrir nos produits" button already points at; PRODUCTS therefore
          has no consumer on this page any more. */}

      {/* CHEVRON HIGHLIGHT */}
      <section className="section section--soft">
        <div className="container refprev">
          <div className="refprev__media reveal">
            <img src="/media/chevron-blocage.webp" alt={t("Chevron de blocage des panneaux photovoltaïques", "Rafter clamping photovoltaic panels")} loading="lazy" />
          </div>
          {/* Three corrections from the scan of 10/08/2026, p. D: the "Produit
              phare" eyebrow struck out and marked "NON" — the pile is patented
              too, so neither product is the flagship; "le chevron ~~qui~~
              bloque"; and "un seul ~~écrou~~ → vis bloque l'ensemble". */}
          <div className="refprev__text reveal">
            <h2>{t("Le chevron bloque les panneaux sans aucune fixation", "The rafter holds panels without any fixing")}</h2>
            <p className="lead">
              {t(
                "Deux profils coulissants bloquent les panneaux sans aucune fixation : une fois tous les panneaux en place, une seule vis bloque l'ensemble. Ces profils sont eux-mêmes des éléments de la structure porteuse et remplacent les systèmes d'intégration classiques à crapauds.",
                "Two sliding profiles lock the panels without any fixing: once every panel is in place, a single screw locks the whole set. Those profiles are themselves part of the load-bearing structure and replace classic clamp-based integration systems."
              )}
            </p>
            <L to="/chevrons" className="btn btn--primary">
              {t("Voir le chevron", "See the rafter")} <IconArrowRight />
            </L>
          </div>
        </div>
      </section>

      {/* DOMAINES */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Domaines d'intervention", "Fields of application")}</span>
            <h2>{t("Des panneaux photovoltaïques de tout type", "Photovoltaic panels of every kind")}</h2>
            <p>{t("Champs solaires, ombrières, agrivoltaïsme et ferrovoltaïsme — de la conception à la mise en œuvre.", "Solar fields, canopies, agrivoltaics and rail photovoltaics — from design through to implementation.")}</p>
          </div>
          <div className="grid grid-4">
            {DOMAINES.map((d) => (
              <div className="appcard reveal" key={d.key}>
                <span className="appcard__icon"><d.icon /></span>
                <span className="appcard__title">{t(d.title.fr, d.title.en)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCES PREVIEW */}
      <section className="section">
        <div className="container refprev">
          <div className="refprev__media reveal">
            <img src="/media/ref-structure-pieux.webp" alt={t("Structure photovoltaïque portée par des pieux d'ancrage galvanisés", "Photovoltaic structure carried by galvanised anchor piles")} loading="lazy" />
          </div>
          <div className="refprev__text reveal">
            <span className="eyebrow">{t("Réalisations", "Projects")}</span>
            <h2>{t("Des projets menés avec succès à l'international", "Projects successfully delivered internationally")}</h2>
            <p className="lead">
              {t(
                "Champ solaire en Espagne, surface agrivoltaïque à l'île de la Réunion, ombrière en Bretagne, etc.",
                "Solar field in Spain, agrivoltaic surface on Réunion Island, canopy in Brittany, etc."
              )}
            </p>
            <L to="/references" className="btn btn--primary">
              {t("Voir les références", "See our references")} <IconArrowRight />
            </L>
          </div>
        </div>
      </section>

      <CtaBand
        title={t(
          "Et si nous discutions de votre projet photovoltaïque ?",
          "Shall we talk about your photovoltaic project?"
        )}
      />
    </>
  );
}
