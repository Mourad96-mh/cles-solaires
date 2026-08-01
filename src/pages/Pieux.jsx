import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import {
  PILE_RANGES, SAND_PILE_RANGES, PILE_USES,
  PILE_CAVEAT, PILE_PROTECTION, PILE_TIMING,
} from "../data/content.js";
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
      "Pieux d'ancrage des Clés Solaires : pieux tous terrains (TT) posés en trou foré et pieux sable (S) posés par battage, en modèles L, XL et XXL. Ancrage mécanique par pelles, essais d'arrachement sur site, dépose réversible. Sans béton coulé.",
      "Les Clés Solaires anchor piles: all-terrain piles (TT) set in a bored hole and sand piles (S) driven in, in L, XL and XXL models. Mechanical anchoring by blades, on-site pull-out tests, reversible removal. No poured concrete."
    ),
    path: "/pieux",
  });
  useReveal();

  /* Three-line summary of the installation principle. */
  const PRINCIPE_STEPS = [
    { n: "01", text: t("Le pieu, pourvu de ses poutres d'assises, est positionné dans le trou foré.",
                       "The pile, fitted with its bearing beams, is positioned in the bored hole.") },
    { n: "02", text: t("La tige d'allonge, l'entretoise et le vérin muni de la pompe sont mis en place.",
                       "The extension rod, the spacer and the jack fitted with its pump are set in place.") },
    { n: "03", text: t("Le pompage exerce une traction sur la tige du pieu, écartant les pelles qui pèsent alors fortement sur les parois en fond de trou.",
                       "Pumping applies tension to the pile's rod, spreading the blades so they press firmly against the walls at the bottom of the hole.") },
  ];

  const GEAR = [
    t("Machine de forage légère portée sur remorque, automobile ou tractée par une voiture", "Light drilling machine on a trailer, self-propelled or towed by a car"),
    t("Forets courants à béton, le forage s'exécutant à sec ; système de percussion en option", "Standard concrete drill bits, drilling done dry; percussion system optional"),
    t("Vérin creux de puissance définie selon le pieu, et entretoise de montage fournie", "Hollow jack sized for the pile, and the mounting spacer supplied"),
    t("Pompe manuelle ou électrique avec manomètre, compatible avec le vérin", "Manual or electric pump with a pressure gauge, compatible with the jack"),
    t("Comparateur de mesure des déplacements pour les essais", "Dial gauge to measure displacements during tests"),
  ];

  const BENEFITS = [
    t("Forage et mise en œuvre rapides : le temps de pose dépend du diamètre et de la profondeur de forage, pas du terrain", "Fast drilling and installation: time depends on borehole diameter and depth, not on the ground"),
    t("Matériel de forage courant, utilisé partout dans le monde par les entreprises de forage de puits", "Standard drilling equipment, used worldwide by well-drilling companies"),
    t("Forte tenue aux actions climatiques : neige, vent jusqu'au vent cyclonique, séisme", "Strong resistance to climatic actions: snow, wind up to cyclonic wind, earthquake"),
    t("Rallonge disponible pour atteindre une terre plus compacte en profondeur", "Extension available to reach more compact soil deeper down"),
    t("Dépose réversible — le terrain retrouve son aspect d'origine", "Reversible removal — the site returns to its original state"),
    t("Résistance à l'arrachement vérifiable par essai sur le site", "Pull-out resistance that can be verified by an on-site test"),
  ];

  return (
    <>
      <PageHero
        eyebrow={t("Produit", "Product")}
        title={t("Les pieux d'ancrage", "Anchor piles")}
        text={t(
          "Deux types de pieux : le pieu tous terrains, positionné dans un trou foré, et le pieu sable, posé par battage sans aucun forage. Dans les deux cas, des pelles se déploient à la base pour ancrer le pieu — sans béton coulé.",
          "Two types of pile: the all-terrain pile, set in a bored hole, and the sand pile, driven in without any drilling. In both cases, blades deploy at the base to anchor the pile — without poured concrete."
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
                "Un vérin creux exerce une charge de précontrainte définie, qui entraîne le déploiement de deux pelles situées à la base du pieu. Ces pelles s'opposent directement aux charges de traction et de pression exercées sur le pieu. Trois modèles couvrent les charges légères, moyennes et lourdes ; des modèles personnalisés peuvent être étudiés.",
                "A hollow jack applies a defined preload, which deploys two blades at the base of the pile. Those blades directly oppose the tension and compression loads applied to the pile. Three models cover light, medium and heavy loads; custom models can be studied."
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
            <span className="eyebrow">{t("Pieu tous terrains (TT)", "All-terrain pile (TT)")}</span>
            <h2>{t("Trois modèles selon les charges", "Three models, by load class")}</h2>
            <p>{t(PILE_CAVEAT.fr, PILE_CAVEAT.en)}</p>
          </div>
          <div className="grid grid-3 reveal">
            {PILE_RANGES.map((r) => (
              <article className="card pilecard" key={r.name}>
                <span className="pilecard__name">{r.name}</span>
                <p className="pilecard__dim">{t(r.load.fr, r.load.en)}</p>
                <ul className="pilecard__caps">
                  <li><span>{t("Terre limoneuse", "Silty soil")}</span><strong>{t(r.terre.fr, r.terre.en)}</strong></li>
                  <li><span>{t("Roche", "Rock")}</span><strong>{t(r.roche.fr, r.roche.en)}</strong></li>
                </ul>
              </article>
            ))}
          </div>
          <table className="spectable spectable--wide reveal" style={{ marginTop: 32 }}>
            <thead>
              <tr>
                <th scope="col">{t("Modèle", "Model")}</th>
                <th scope="col">{t("Charges", "Loads")}</th>
                <th scope="col">{t("Forage", "Borehole")}</th>
                <th scope="col">{t("Arrachage en terre limoneuse", "Pull-out in silty soil")}</th>
                <th scope="col">{t("Arrachage dans la roche", "Pull-out in rock")}</th>
              </tr>
            </thead>
            <tbody>
              {PILE_RANGES.map((r) => (
                <tr key={r.name}>
                  <th scope="row">{r.name}</th>
                  <td>{t(r.load.fr, r.load.en)}</td>
                  <td>{t(r.drilling.fr, r.drilling.en)}</td>
                  <td>{t(r.terre.fr, r.terre.en)}</td>
                  <td>{t(r.roche.fr, r.roche.en)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="docrow reveal" style={{ marginTop: 28 }}>
            <IconArrowRight />
            <span>{t(PILE_TIMING.fr, PILE_TIMING.en)}</span>
          </div>
          <div className="docrow reveal" style={{ marginTop: 14 }}>
            <IconArrowRight />
            <span>{t(PILE_PROTECTION.fr, PILE_PROTECTION.en)}</span>
          </div>
          <div className="docrow reveal" style={{ marginTop: 14 }}>
            <IconArrowRight />
            <span>
              {t(
                "Des modèles personnalisés peuvent être étudiés. Une rallonge permet de multiplier par 2, 3… la longueur du pieu en sous-sol lorsque le terrain n'offre pas la résistance requise ; une plaque E.T. peut être ajoutée pour s'opposer aux efforts horizontaux.",
                "Custom models can be studied. An extension can multiply the pile's underground length by 2, 3… where the ground does not offer the required resistance; an E.T. plate can be added to resist horizontal forces."
              )}
            </span>
          </div>
        </div>
      </section>

      {/* Second pile family: no drilling at all */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Pieu sable (S)", "Sand pile (S)")}</span>
            <h2>{t("Un pieu posé sans aucun forage", "A pile installed without any drilling")}</h2>
            <p>
              {t(
                "Le pieu sable ne nécessite aucun forage. Il est présenté à son emplacement, puis un engin de battage l'enfonce à la profondeur requise en frappant un chapeau placé en tête. Le chapeau retiré, le battage reprend sur un élément intérieur qui déploie les pelles en pied de pieu. Il s'utilise efficacement dans des sables mouillés stabilisés de longue date ; des essais en confirment la tenue.",
                "The sand pile requires no drilling at all. It is presented at its position, then a driving rig sinks it to the required depth by striking a cap fitted on its head. Once the cap is removed, driving resumes on an inner element that deploys the blades at the foot of the pile. It is effective in long-stabilised wet sands; tests confirm its hold."
              )}
            </p>
          </div>
          <div className="grid grid-3 reveal">
            {SAND_PILE_RANGES.map((r) => (
              <article className="card pilecard" key={r.name}>
                <span className="pilecard__name">{r.name}</span>
                <p className="pilecard__dim">{t(r.load.fr, r.load.en)}</p>
              </article>
            ))}
          </div>
          <div className="docrow reveal" style={{ marginTop: 28 }}>
            <IconArrowRight />
            <span>
              {t(
                "Le retrait du pieu sable est aisé : il suffit de tirer l'élément intérieur tout en battant légèrement la face du pieu.",
                "Removing the sand pile is straightforward: pull the inner element while lightly driving the face of the pile."
              )}
            </span>
          </div>
        </div>
      </section>

      {/* Documented scope of use — narrower than the site's five domains */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Utilisation", "Use")}</span>
            <h2>{t("Où les pieux sont utilisés", "Where the piles are used")}</h2>
            <p>{t("Les pieux peuvent être utilisés efficacement pour :", "The piles can be used effectively for:")}</p>
          </div>
          <ul className="checklist reveal">
            {PILE_USES.map((u) => (
              <li key={u.fr}><IconCheck /> {t(u.fr, u.en)}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Installation method */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Méthode de pose", "Installation method")}</span>
            <h2>{t("La pose du pieu tous terrains, étape par étape", "Installing the all-terrain pile, step by step")}</h2>
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
                <li><IconCheck /> {t("Essai d'arrachement éventuel : poutres d'assises dévissées, comparateur en place, pompage repris jusqu'au déplacement maximal admis", "Optional pull-out test: bearing beams unscrewed, dial gauge in place, pumping resumed up to the maximum admitted displacement")}</li>
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
            <h2>{t("Le matériel de forage et de pose", "Drilling and installation equipment")}</h2>
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
