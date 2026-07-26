import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import { PILE_RANGES } from "../data/content.js";
import PageHero from "../components/PageHero.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { IconCheck, IconArrowRight } from "../lib/icons.jsx";
import "./content.css";

export default function Pieux() {
  const { lang, t } = useLang();
  useSeo({
    lang,
    title: t("Les pieux d'ancrage", "Anchor piles"),
    description: t(
      "Pieux d'ancrage des Clés Solaires : gammes L, XL et XXL jusqu'à 50 t de portance en roche, ancrage mécanique par pelles pivotantes, essais de traction contrôlés, démontage réversible. Sans béton coulé.",
      "Les Clés Solaires anchor piles: L, XL and XXL ranges up to 50 t of bearing capacity in rock, mechanical anchoring by pivoting blades, controlled pull-out tests, reversible dismantling. No poured concrete."
    ),
    path: "/pieux",
  });
  useReveal();

  /* Three-line summary of the installation principle. */
  const PRINCIPE_STEPS = [
    { n: "01", text: t("Réalisation d'un trou foré à la profondeur requise.",
                       "A hole is bored to the required depth.") },
    { n: "02", text: t("Le pieu métallique est positionné verticalement dans le trou.",
                       "The steel pile is positioned vertically in the hole.") },
    { n: "03", text: t("Au fond du trou, le système expansif s'ouvre et vient s'ancrer dans le terrain pour assurer la stabilité.",
                       "At the bottom of the hole, the expanding system opens and anchors into the ground to secure stability.") },
  ];

  const GEAR = [
    t("Minipelle de forage — matériel léger", "Drilling mini-excavator — light equipment"),
    t("Vérin hydraulique (de 15 à 50 tonnes)", "Hydraulic jack (15 to 50 tonnes)"),
    t("Pompe manuelle ou électrique compatible avec le vérin", "Manual or electric pump compatible with the jack"),
    t("Manomètre installé sur la pompe", "Pressure gauge fitted on the pump"),
    t("Comparateur pour le contrôle des déplacements (essais)", "Dial gauge to monitor displacements (tests)"),
  ];

  const BENEFITS = [
    t("Forage rapide : 10 à 20 minutes selon la nature du terrain", "Fast drilling: 10 to 20 minutes depending on soil"),
    t("Réglage vertical de plusieurs centimètres, sans calage", "Vertical adjustment of several centimetres, without shimming"),
    t("Forte tenue aux actions climatiques : séisme, neige, vent", "Strong resistance to climatic actions: earthquake, snow, wind"),
    t("Éléments en acier galvanisé à chaud", "Hot-dip galvanised steel components"),
    t("Démontage réversible — le terrain retrouve son aspect d'origine", "Reversible dismantling — the site returns to its original state"),
    t("Portance vérifiable par essai de traction à la pose", "Bearing capacity verified by pull-out test at installation"),
  ];

  return (
    <>
      <PageHero
        eyebrow={t("Produit", "Product")}
        title={t("Les pieux d'ancrage", "Anchor piles")}
        text={t(
          "Un pieu acier enfoncé dans un trou foré, ancré mécaniquement par des pelles qui pivotent sous l'effort d'un vérin. Il immobilise la structure face à la neige et au vent — sans béton coulé.",
          "A steel pile driven into a bored hole, mechanically anchored by blades that pivot under a jack's effort. It holds the structure against snow and wind — without poured concrete."
        )}
        image="/media/essai-pression.jpg"
        current={t("Pieux d'ancrage", "Anchor piles")}
      />

      {/* Description */}
      <section className="section">
        <div className="container split">
          <div className="split__text reveal">
            <span className="eyebrow">{t("Description technique", "Technical description")}</span>
            <h2>{t("Qu'est-ce qu'un pieu d'ancrage ?", "What is an anchor pile?")}</h2>
            <p>
              {t(
                "Le pieu a pour fonction d'immobiliser la structure sous les actions climatiques exercées sur les panneaux, en particulier la neige et le vent. Il est enfoncé dans un trou foré selon ses dimensions.",
                "The pile's role is to hold the structure against the climatic actions on the panels, in particular snow and wind. It is driven into a hole bored to its dimensions."
              )}
            </p>
            <p>
              {t(
                "Un vérin creux le met en traction : à sa base, des pelles pivotent et s'écartent dans le sol pour l'ancrer. La charge appliquée vaut elle-même essai de portance. Selon la nature et la compacité des terres, plusieurs gammes de capacités sont disponibles ; un pieu personnalisé peut être réalisé sur demande.",
                "A hollow jack puts it in tension: at its base, blades pivot and spread into the soil to anchor it. The applied load doubles as a bearing test. Depending on soil nature and compactness, several capacity ranges are available; a custom pile can be made on request."
              )}
            </p>
            <ul className="checklist">
              {BENEFITS.slice(0, 3).map((b) => <li key={b}><IconCheck /> {b}</li>)}
            </ul>
          </div>
          <div className="split__media split__media--tall reveal">
            <img src="/media/pieu-ancrage.webp" alt={t("Mise en traction d'un pieu d'ancrage : vérin creux hydraulique, manomètre et comparateur sur le chantier", "Anchor pile being tensioned: hollow hydraulic jack, pressure gauge and dial indicator on site")} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Ranges */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head reveal">
            <h2>{t("Les gammes les plus courantes", "Our most common ranges")}</h2>
            <p>{t("Valeurs indicatives de portance, confirmées après étude de sol.", "Indicative bearing values, confirmed after soil study.")}</p>
          </div>
          <div className="grid grid-3 reveal">
            {PILE_RANGES.map((r) => (
              <article className="card pilecard" key={r.name}>
                <span className="pilecard__name">{r.name}</span>
                <p className="pilecard__dim">{r.diameter} · {t(r.depth.fr, r.depth.en)}</p>
                <ul className="pilecard__caps">
                  <li><span>{t("Terre", "Soil")}</span><strong>{t(r.terre.fr, r.terre.en)}</strong></li>
                  <li><span>{t("Roche", "Rock")}</span><strong>{t(r.roche.fr, r.roche.en)}</strong></li>
                </ul>
              </article>
            ))}
          </div>
          <table className="spectable spectable--wide reveal" style={{ marginTop: 32 }}>
            <thead>
              <tr>
                <th scope="col">{t("Gamme", "Range")}</th>
                <th scope="col">{t("Diamètre", "Diameter")}</th>
                <th scope="col">{t("Profondeur", "Depth")}</th>
                <th scope="col">{t("Portance en terre", "Bearing in soil")}</th>
                <th scope="col">{t("Portance en roche", "Bearing in rock")}</th>
              </tr>
            </thead>
            <tbody>
              {PILE_RANGES.map((r) => (
                <tr key={r.name}>
                  <th scope="row">{r.name}</th>
                  <td>{r.diameter}</td>
                  <td>{t(r.depth.fr, r.depth.en)}</td>
                  <td>{t(r.terre.fr, r.terre.en)}</td>
                  <td>{t(r.roche.fr, r.roche.en)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Installation method */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Méthode de pose", "Installation method")}</span>
            <h2>{t("La pose sur chantier, étape par étape", "On-site installation, step by step")}</h2>
            <ol className="ministeps">
              {PRINCIPE_STEPS.map((s) => (
                <li key={s.n}>
                  <span className="ministeps__n">{s.n}</span>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="split reveal" style={{ marginBottom: 56 }}>
            <div className="split__text">
              <ul className="checklist">
                <li><IconCheck /> {t("Ancrage mécanique par pelles pivotantes", "Mechanical anchoring by pivoting blades")}</li>
                <li><IconCheck /> {t("Mise en traction au vérin creux", "Tensioning with a hollow jack")}</li>
                <li><IconCheck /> {t("Portance contrôlée à la pose sur chaise d'essai", "Bearing capacity checked at installation on a test frame")}</li>
                <li><IconCheck /> {t("Positionnement suivant les coordonnées théoriques", "Positioning according to the theoretical coordinates")}</li>
              </ul>
            </div>
            <div className="split__media">
              <img src="/media/methode/methode-hero.webp" alt={t("Vue d'ensemble de la pose : vérin creux, pompe et pieu", "Overview of installation: hollow jack, pump and pile")} loading="lazy" />
            </div>
          </div>

        </div>
      </section>

      {/* Gear + benefits */}
      <section className="section section--soft">
        <div className="container split split--reverse">
          <div className="split__media split__media--tall reveal">
            <img src="/media/pose-pieu.webp" alt={t("Pieu métallique positionné verticalement dans le trou foré par un opérateur", "Steel pile held vertically in the bored hole by an operator")} loading="lazy" />
          </div>
          <div className="split__text reveal">
            <span className="eyebrow">{t("Matériel léger", "Light equipment")}</span>
            <h2>{t("Une pose sans gros engins", "Installation without heavy machinery")}</h2>
            <ul className="checklist">
              {GEAR.map((g) => <li key={g}><IconCheck /> {g}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t("Avantages", "Advantages")}</span>
            <h2>{t("Pourquoi choisir le pieu d'ancrage", "Why choose the anchor pile")}</h2>
          </div>
          <div className="grid grid-3">
            {BENEFITS.map((b) => (
              <article className="card reveal" key={b}>
                <span className="icon-badge"><IconCheck /></span>
                <p style={{ margin: 0 }}>{b}</p>
              </article>
            ))}
          </div>
          <div className="docrow reveal" style={{ marginTop: 28 }}>
            <IconArrowRight />
            <span>{t("Descriptions des essais et de la pose (croquis) disponibles sur demande.", "Test and installation descriptions (drawings) available on request.")}</span>
          </div>
        </div>
      </section>

      <CtaBand
        title={t("Besoin d'un dimensionnement pour votre projet ?", "Need sizing for your project?")}
        text={t("Envoyez-nous la nature de votre sol et les charges à reprendre : nous proposons la gamme adaptée.", "Send us your soil type and the loads to carry: we'll propose the right range.")}
      />
    </>
  );
}
