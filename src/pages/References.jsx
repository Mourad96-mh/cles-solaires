import { useState } from "react";
import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import { REFERENCES } from "../data/content.js";
import PageHero from "../components/PageHero.jsx";
import CtaBand from "../components/CtaBand.jsx";
import "./content.css";
import "./References.css";

export default function References() {
  const { lang, t } = useLang();
  useSeo({
    lang,
    title: t("Références", "References"),
    description: t(
      "Réalisations des Clés Solaires : champ solaire en Espagne, ombrière en Bretagne, surfaces agrivoltaïques, ossatures métalliques et pieux d'ancrage à l'île de la Réunion.",
      "Les Clés Solaires projects: solar field in Spain, canopy in Brittany, agrivoltaic surfaces, steel frames and anchor piles on Réunion Island."
    ),
    path: "/references",
  });
  useReveal();

  const [active, setActive] = useState(null);

  return (
    <>
      <PageHero
        eyebrow={t("Réalisations", "Projects")}
        title={t("Nos références", "Our references")}
        text={t(
          "Champs solaires, ombrières, surfaces agrivoltaïques, ossatures et pieux d'ancrage : quelques projets accompagnés en France et à l'international.",
          "Solar fields, canopies, agrivoltaic surfaces, frames and anchor piles: a selection of projects in France and abroad."
        )}
        image="/media/ref-aerien.jpg"
        current={t("Références", "References")}
      />

      <section className="section">
        <div className="container">
          <div className="gallery">
            {REFERENCES.map((r) => {
              const title = t(r.type.fr, r.type.en);
              const place = t(r.place.fr, r.place.en);
              return (
                <button
                  type="button"
                  className="gallery__item reveal"
                  key={r.key}
                  onClick={() => setActive({ src: r.image, title: `${title} — ${place}` })}
                  aria-label={`${t("Agrandir", "Enlarge")} : ${title} — ${place}`}
                >
                  <img src={r.image} alt={`${title} — ${place}`} loading="lazy" />
                  <span className="gallery__cap">
                    <span className="gallery__cat">{place}</span>
                    <span className="gallery__title">{title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label={t("Fermer", "Close")} onClick={() => setActive(null)}>×</button>
          <figure className="lightbox__fig" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.title} />
            <figcaption>{active.title}</figcaption>
          </figure>
        </div>
      )}

      <CtaBand
        title={t("Votre projet rejoindra-t-il nos références ?", "Will your project join our references?")}
        text={t("Confiez-nous votre installation photovoltaïque et ajoutez votre projet à nos réalisations.", "Entrust us with your photovoltaic installation and add your project to our work.")}
      />
    </>
  );
}
