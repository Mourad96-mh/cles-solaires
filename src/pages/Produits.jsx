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
      "Les trois produits des Clés Solaires : le chevron autobloquant qui bloque les panneaux photovoltaïques sans fixation, la structure porteuse galvanisée, et le pieu d'ancrage mécanique sans béton coulé. Chaque poste est livrable séparément.",
      "The three Les Clés Solaires products: the self-locking rafter that holds photovoltaic panels without any fixing, the galvanised load-bearing structure, and the mechanical anchor pile without poured concrete. Each item can be supplied separately."
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
                <span>{t("Ancrage mécanique à pelles pivotantes : plus de massifs béton, et une résistance à l'arrachement vérifiable par essai de traction sur le site.", "Mechanical anchoring with pivoting blades: no concrete footings, and a pull-out resistance that can be verified by a tension test on site.")}</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>{t("La structure repose sur les pieux", "The structure rests on the piles")}</strong>
                <span>{t("Ossature galvanisée, réglable verticalement sans calage. En champ solaire, elle est assez légère pour être montée manuellement dans la majorité des cas ; les ombrières et les structures agrivoltaïques sont posées à l'aide d'engins de levage.", "Galvanised frame, vertically adjustable without shimming. On solar fields it is light enough to be erected by hand in most cases; canopies and agrivoltaic structures are erected with lifting equipment.")}</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>{t("Le chevron bloque les panneaux", "The rafter clamps the panels")}</strong>
                <span>{t("Deux profils coulissants bloquent les panneaux sans aucune fixation ; un seul écrou bloque ensuite l'ensemble des panneaux.", "Two sliding profiles hold the panels without any fixing; a single nut then locks the whole set of panels.")}</span>
              </div>
            </li>
          </ul>
          {/* "Nos réalisations →" struck out here (scan of 10/08/2026, p. 7),
              as was the reference marquee it led into. The Références page is
              still one click away in the main navigation. */}
        </div>
      </section>

      <CtaBand
        title={t("Un projet photovoltaïque en cours ?", "A photovoltaic project under way?")}
        text={t("Décrivez-nous votre installation : nous dimensionnons les pieux, la structure et les chevrons adaptés.", "Tell us about your installation: we'll size the right piles, structure and rafters.")}
      />
    </>
  );
}
