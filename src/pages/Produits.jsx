import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang, L } from "../i18n.jsx";
import { PRODUCTS } from "../data/content.js";
import PageHero from "../components/PageHero.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { IconArrowRight, IconCheck } from "../lib/icons.jsx";
import "./content.css";

export default function Produits() {
  const { lang, t } = useLang();
  useSeo({
    lang,
    title: t("Nos produits : pieu, structure, chevron", "Our products: pile, structure, rafter"),
    description: t(
      "Les trois produits des Clés Solaires : le chevron qui bloque les panneaux photovoltaïques, la structure porteuse légère et galvanisée, et le pieu d'ancrage mécanique sans béton coulé. Chaque poste est livrable séparément.",
      "The three Les Clés Solaires products: the rafter that clamps photovoltaic panels, the light galvanised load-bearing structure, and the mechanical anchor pile without poured concrete. Each item can be supplied separately."
    ),
    path: "/produits",
  });
  useReveal();

  return (
    <>
      <PageHero
        eyebrow={t("Nos produits", "Our products")}
        title={t("Pieu · Structure · Chevron", "Pile · Structure · Rafter")}
        text={t(
          "Trois produits complémentaires qui forment un système d'intégration photovoltaïque complet : le pieu maintient l'ensemble dans le sol, la structure porte les panneaux, le chevron les bloque. Chaque poste est livrable séparément.",
          "Three complementary products forming a complete photovoltaic integration system: the pile holds everything in the ground, the structure carries the panels, the rafter clamps them. Each item can be supplied separately."
        )}
        image="/media/chevron-blocage.webp"
        current={t("Produits", "Products")}
      />

      <section className="section">
        <div className="container">
          {PRODUCTS.map((p, i) => (
            <div
              className={`split domaine-row ${i % 2 === 1 ? "split--reverse" : ""}`}
              key={p.key}
            >
              <div className="split__media reveal">
                <img src={p.image} alt={t(p.title.fr, p.title.en)} loading="lazy" />
              </div>
              <div className="split__text reveal">
                <span className="eyebrow">{t("Produit", "Product")} {String(i + 1).padStart(2, "0")}</span>
                <h2>{t(p.title.fr, p.title.en)}</h2>
                <p className="lead">{t(p.tagline.fr, p.tagline.en)}</p>
                <ul className="checklist">
                  {p.points.map((pt) => (
                    <li key={pt.fr}><IconCheck /> {t(pt.fr, pt.en)}</li>
                  ))}
                </ul>
                <L to={p.to} className="link-arrow" style={{ marginTop: 20 }}>
                  {t("En savoir plus", "Learn more")} <IconArrowRight />
                </L>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t("Un système cohérent", "One coherent system")}</span>
            <h2>{t("Les trois produits fonctionnent ensemble", "The three products work together")}</h2>
            <p>{t("Ils se commandent séparément, mais sont conçus pour s'assembler sans pièce intermédiaire.", "They can be ordered separately, but are designed to assemble without intermediate parts.")}</p>
          </div>
          <ul className="checklist checklist--rich">
            <li>
              <IconCheck />
              <div>
                <strong>{t("Le pieu ancre l'installation", "The pile anchors the installation")}</strong>
                <span>{t("Ancrage mécanique à pelles pivotantes : plus de massifs béton, une portance contrôlée par essai de traction à la pose.", "Mechanical anchoring with pivoting blades: no concrete footings, bearing capacity verified by a pull-out test during installation.")}</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>{t("La structure repose sur les pieux", "The structure rests on the piles")}</strong>
                <span>{t("Ossature légère, réglable verticalement sans calage et galvanisée à chaud, posée manuellement sans engin de levage.", "Light frame, vertically adjustable without shimming and hot-dip galvanised, fitted by hand without lifting equipment.")}</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>{t("Le chevron bloque les panneaux", "The rafter clamps the panels")}</strong>
                <span>{t("Des pièces coulissantes bloquent les panneaux sur toute leur longueur : 1 vis par chevron en portrait, 2 en paysage, démontage en quelques secondes.", "Sliding pieces clamp the panels along their full length: 1 screw per rafter in portrait, 2 in landscape, removal in seconds.")}</span>
              </div>
            </li>
          </ul>
          <div className="domaine-links reveal" style={{ marginTop: 32 }}>
            <L to="/references" className="btn btn--outline">{t("Nos réalisations", "Our projects")} <IconArrowRight /></L>
          </div>
        </div>
      </section>

      <CtaBand
        title={t("Un projet photovoltaïque en cours ?", "A photovoltaic project under way?")}
        text={t("Décrivez-nous votre installation : nous dimensionnons les pieux, la structure et les chevrons adaptés.", "Tell us about your installation: we'll size the right piles, structure and rafters.")}
      />
    </>
  );
}
