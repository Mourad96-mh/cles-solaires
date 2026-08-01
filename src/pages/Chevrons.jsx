import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import { CHEVRON_LAYOUTS, CHEVRON_TYPES, CHEVRON_FIGURES } from "../data/content.js";
import PageHero from "../components/PageHero.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { IconCheck, IconBolt, IconClock, IconGauge, IconArrowRight } from "../lib/icons.jsx";
import "./content.css";

export default function Chevrons() {
  const { lang, t } = useLang();
  useSeo({
    lang,
    title: t("Le chevron breveté", "The patented rafter"),
    description: t(
      "Le chevron autobloquant breveté des Clés Solaires bloque les panneaux photovoltaïques par deux profils coulissants, sans aucune fixation : un seul écrou bloque l'ensemble des panneaux. Chevron classique et chevron ferrovoltaïque.",
      "Les Clés Solaires' patented self-locking rafter holds photovoltaic panels with two sliding profiles, without any fixing: a single nut locks the whole set of panels. Classic and rail rafter."
    ),
    path: "/chevrons",
  });
  useReveal();

  /* The three advantages the client lists at the end of his CHEVRONS section
     (Scan2026-08-01_165057.pdf, p.5). */
  const ADVANTAGES = [
    { icon: IconClock, title: t("Temps de pose divisé par 10", "Installation time divided by 10"), text: t("Le temps de pose des panneaux est divisé par 10 par rapport aux solutions concurrentes actuelles.", "Panel installation time is divided by 10 compared with current competing solutions.") },
    { icon: IconGauge, title: t("Nombre de pannes réduit", "Fewer purlins"), text: t("2 files de pannes suffisent pour la pose en portrait ; aucune panne n'est nécessaire pour la pose en paysage.", "2 rows of purlins are enough for portrait installation; no purlin at all is required for landscape.") },
    { icon: IconBolt, title: t("Une poutre de structure", "A structural beam"), text: t("La grande portée du chevron classique en fait un élément de structure porteuse, qui remplace les systèmes d'intégration classiques à crapauds.", "The long span of the classic rafter makes it a load-bearing structural element, replacing classic clamp-based integration systems.") },
  ];

  /* Comparison against the current classic installation. Every figure here is
     the client's own, restored on 01/08/2026 after he confirmed them. */
  const SPECS = [
    { key: t("Fixation des panneaux", "Panel fixings"), ours: t("Aucune fixation", "None at all"), theirs: t("Crapauds de blocage de chaque côté de chaque panneau", "Clamps on each side of every panel") },
    { key: t("Rampant de 7 m, 4 panneaux (portrait)", "7 m slope, 4 panels (portrait)"), ours: t("1 seule vis par chevron", "1 single screw per rafter"), theirs: t("8 crapauds de blocage", "8 locking clamps") },
    { key: t("File de 20 m, 12 panneaux (paysage)", "20 m row, 12 panels (landscape)"), ours: t("2 vis par chevron", "2 screws per rafter"), theirs: t("24 crapauds, 2 poutres de rives", "24 clamps, 2 edge beams") },
    { key: t("Files de pannes", "Rows of purlins"), ours: t("2 files en portrait, aucune en paysage", "2 rows in portrait, none in landscape"), theirs: t("8 files en portrait, 24 files en paysage", "8 rows in portrait, 24 rows in landscape") },
    { key: t("Temps de pose d'un panneau", "Time to fit one panel"), ours: t("5 à 10 secondes", "5 to 10 seconds"), theirs: t("Plus de 10 fois plus long", "More than 10 times longer") },
    { key: t("Rôle dans la structure", "Role in the structure"), ours: t("Élément de structure porteuse de grande portée", "A long-span load-bearing structural element"), theirs: t("Accessoire d'intégration rapporté", "An add-on integration accessory") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("Produit breveté", "Patented product")}
        title={t("Le chevron", "The rafter")}
        text={t(
          "Un système d'intégration photovoltaïque breveté : deux profils emboîtés coulissent l'un dans l'autre et bloquent les panneaux sans aucune fixation, déposés entre deux chevrons sans précaution particulière.",
          "A patented photovoltaic integration system: two interlocking profiles slide one inside the other and hold the panels without any fixing, laid between two rafters without special care."
        )}
        image="/media/chevron-blocage.webp"
        current={t("Chevrons", "Rafters")}
      />

      {/* Description */}
      <section className="section">
        <div className="container split">
          <div className="split__text reveal">
            <span className="eyebrow">{t("Le principe", "The principle")}</span>
            <h2>{t("Un blocage par pièces coulissantes", "Clamping through sliding pieces")}</h2>
            <p>
              {t(
                "Le chevron est constitué de deux profils emboîtés, coulissants l'un dans l'autre. Pendant le coulissement, un déplacement relatif vertical entraîne le blocage des panneaux photovoltaïques sans aucune fixation. Le pincement du panneau est important et résiste aux actions d'un vent cyclonique maximal.",
                "The rafter is made of two interlocking profiles sliding one inside the other. During the slide, a relative vertical movement locks the photovoltaic panels without any fixing. The panel is firmly pinched and withstands maximum cyclonic wind actions."
              )}
            </p>
            <p>
              {t(
                "Les panneaux peuvent être glissés depuis l'extrémité haute pour la pose en portrait, ou depuis le côté en poussant le panneau jusqu'à son emplacement pour la pose en paysage — dans tous les cas sans aucune fixation. Une fois tous les panneaux en place, un écrou bloque l'ensemble des panneaux.",
                "Panels can be slid in from the top end for portrait installation, or from the side by pushing the panel to its position for landscape installation — in every case without any fixing. Once all the panels are in place, one nut locks the whole set."
              )}
            </p>
            <ul className="checklist">
              <li><IconCheck /> {t("Blocage sans aucune fixation — un écrou bloque l'ensemble", "Held without any fixing — one nut locks the whole set")}</li>
              <li><IconCheck /> {t("Panneaux déposés par le dessus ou par le dessous, sans précaution particulière", "Panels laid from above or from below, without special care")}</li>
              <li><IconCheck /> {t("Les 2 éléments du chevron sont protégés par galvanisation", "Both rafter elements are protected by galvanising")}</li>
            </ul>
          </div>
          <div className="split__media reveal">
            <img src="/media/chevron-blocage.webp" alt={t("Chevrons de blocage des panneaux photovoltaïques", "Rafters clamping photovoltaic panels")} loading="lazy" />
          </div>
        </div>
        <div className="container">
          <div className="keyfigure reveal" style={{ marginTop: 48 }}>
            <IconClock />
            <span>
              {t(CHEVRON_FIGURES.poseRatio.fr, CHEVRON_FIGURES.poseRatio.en)}{" "}
              {t(CHEVRON_FIGURES.posePanel.fr, CHEVRON_FIGURES.posePanel.en)}
            </span>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Caractéristiques", "Characteristics")}</span>
            <h2>{t("Aucune fixation, moins de pannes, plus vite", "No fixings, fewer purlins, faster")}</h2>
            <p>{t("Là où la pose classique multiplie les fixations par crapauds, le chevron bloque les panneaux par son seul coulissement.", "Where classic installation multiplies clamp fixings, the rafter holds the panels by its sliding action alone.")}</p>
          </div>
          <div className="reveal">
            <table className="spectable spectable--compare">
              <thead>
                <tr>
                  <th scope="col">{t("Critère", "Criterion")}</th>
                  <th scope="col">{t("Chevron autobloquant", "Self-locking rafter")}</th>
                  <th scope="col">{t("Pose classique actuelle", "Current classic installation")}</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map((s) => (
                  <tr key={s.key}>
                    <th scope="row">{s.key}</th>
                    <td className="is-good">{s.ours}</td>
                    <td>{s.theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Installation — summary card, full explanation folded underneath.
          The client wanted his complete text kept but "non visibles
          directement", reachable from the detailed rafter description. */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t("La pose", "Installation")}</span>
            <h2>{t("Deux façons de mettre le panneau en place", "Two ways to put the panel in place")}</h2>
            <p>
              {t(
                "La pose consiste à déposer le panneau sans précaution particulière entre les chevrons, par le dessus ou par le dessous, à son emplacement. Dépliez chaque cas pour le détail complet, chiffres à l'appui.",
                "Installation simply means laying the panel between the rafters at its position, from above or from below, without special care. Unfold each case for the full detail, figures included."
              )}
            </p>
          </div>
          <div className="reveal">
            {CHEVRON_LAYOUTS.map((l) => (
              <details className="disclosure" key={l.key}>
                <summary className="disclosure__summary">{t(l.title.fr, l.title.en)}</summary>
                <div className="disclosure__body">
                  <p>{t(l.intro.fr, l.intro.en)}</p>

                  <h4>{t("À titre d'exemple", "By way of example")} — {t(l.example.fr, l.example.en)}</h4>
                  <div className="versus">
                    <div className="versus__col versus__col--ours">
                      <span className="versus__label">{t("Avec le chevron", "With the rafter")}</span>
                      <p>{t(l.withChevron.fr, l.withChevron.en)}</p>
                    </div>
                    <div className="versus__col">
                      <span className="versus__label">{t("Pose classique actuelle", "Current classic installation")}</span>
                      <p>{t(l.competitor.fr, l.competitor.en)}</p>
                    </div>
                  </div>

                  <h4>{t("Organisation du chantier", "Organising the work")}</h4>
                  <p>{t(l.method.fr, l.method.en)}</p>
                </div>
              </details>
            ))}

            <details className="disclosure">
              <summary className="disclosure__summary">{t("Démontage et remplacement d'un panneau", "Dismantling and replacing a panel")}</summary>
              <div className="disclosure__body">
                <p>{t(CHEVRON_FIGURES.demontage.fr, CHEVRON_FIGURES.demontage.en)}</p>
              </div>
            </details>

            <details className="disclosure">
              <summary className="disclosure__summary">{t("Acier, galvanisation et calculs", "Steel, galvanising and calculations")}</summary>
              <div className="disclosure__body">
                <p>{t(CHEVRON_FIGURES.acier.fr, CHEVRON_FIGURES.acier.en)}</p>
                <p>{t(CHEVRON_FIGURES.calcul.fr, CHEVRON_FIGURES.calcul.en)}</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Two rafter families */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t("Deux versions", "Two versions")}</span>
            <h2>{t("Deux types de chevrons sont proposés", "Two types of rafter are offered")}</h2>
          </div>
          <div className="grid grid-2">
            {CHEVRON_TYPES.map((c, i) => (
              <article className="card reveal" key={c.key}>
                <span className="icon-badge">{i === 0 ? <IconBolt /> : <IconGauge />}</span>
                <h3>{t(c.name.fr, c.name.en)}</h3>
                <p>{t(c.text.fr, c.text.en)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t("Avantages", "Advantages")}</span>
            <h2>{t("Pourquoi choisir le chevron", "Why choose the rafter")}</h2>
          </div>
          <div className="grid grid-3">
            {ADVANTAGES.map((a) => (
              <article className="card reveal" key={a.title}>
                <span className="icon-badge"><a.icon /></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
          <div className="docrow reveal" style={{ marginTop: 28 }}>
            <IconArrowRight />
            <span>{t("Descriptifs et croquis techniques disponibles sur demande — contactez-nous.", "Technical descriptions and drawings available on request — get in touch.")}</span>
          </div>
        </div>
      </section>

      <CtaBand
        title={t("Un projet à intégrer avec le chevron ?", "A project to integrate with the rafter?")}
        text={t("Décrivez-nous votre installation : nous vous indiquons la version et le dimensionnement adaptés.", "Tell us about your installation: we'll advise the right version and sizing.")}
      />
    </>
  );
}
