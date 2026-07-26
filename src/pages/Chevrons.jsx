import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
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
      "Le chevron breveté des Clés Solaires bloque les panneaux photovoltaïques par pièces coulissantes : 1 vis par chevron en portrait, 2 en paysage, temps de pose divisé par 10, démontage en secondes. Chevron classique et chevron ferrovoltaïque.",
      "Les Clés Solaires' patented rafter clamps photovoltaic panels through sliding pieces: 1 screw per rafter in portrait, 2 in landscape, install time divided by 10, removal in seconds. Classic and rail rafter."
    ),
    path: "/chevrons",
  });
  useReveal();

  const ADVANTAGES = [
    { icon: IconClock, title: t("Temps de pose ÷ 10", "Install time ÷ 10"), text: t("Le temps de pose des panneaux est divisé par 10 par rapport aux solutions concurrentes actuelles.", "Panel installation time is divided by 10 compared with current competing solutions.") },
    { icon: IconGauge, title: t("Nombre de pannes réduit", "Fewer purlins"), text: t("2 seules pannes suffisent en portrait ; aucune panne n'est nécessaire pour la pose en paysage.", "Only 2 purlins are needed in portrait; none are required for landscape installation.") },
    { icon: IconBolt, title: t("Grande portée", "Long span"), text: t("La grande portée du chevron classique lui permet de constituer une poutre de structure à part entière.", "The classic rafter's long span lets it act as a structural beam in its own right.") },
  ];

  const COMPARE = [
    { key: t("Vis par chevron — portrait", "Screws per rafter — portrait"), ours: t("1 seule vis", "just 1 screw"), other: t("8 crapauds / rampant de 7 m", "8 clamps / 7 m slope") },
    { key: t("Vis par chevron — paysage", "Screws per rafter — landscape"), ours: t("2 vis", "2 screws"), other: t("24 crapauds / rampant de 20 m", "24 clamps / 20 m slope") },
    { key: t("Files de pannes", "Rows of purlins"), ours: t("2 files (portrait), 0 (paysage)", "2 rows (portrait), 0 (landscape)"), other: t("jusqu'à 24 files", "up to 24 rows") },
    { key: t("Démontage d'un panneau", "Removing a panel"), ours: t("Dévisser 1 à 2 vis — quelques secondes", "Undo 1–2 screws — a few seconds"), other: t("Plusieurs dizaines de secondes", "Several dozen seconds") },
    { key: t("Matière", "Material"), ours: t("Acier galvanisé 350 g/m² min.", "Galvanised steel, 350 g/m² min."), other: "—" },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("Produit breveté", "Patented product")}
        title={t("Le chevron", "The rafter")}
        text={t(
          "Un système d'intégration photovoltaïque breveté : des pièces coulissantes bloquent les panneaux sans réglage ni précaution particulière, posés entre deux chevrons dans le sens de la longueur.",
          "A patented photovoltaic integration system: sliding pieces clamp the panels without adjustment or special care, laid lengthwise between two rafters."
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
                "Le système, breveté, est constitué de pièces coulissantes qui bloquent les panneaux photovoltaïques sur toute leur longueur. Les panneaux sont simplement déposés entre deux chevrons, sans réglage ni précaution particulière.",
                "The patented system consists of sliding pieces that clamp the photovoltaic panels along their whole length. Panels are simply laid between two rafters, without adjustment or special care."
              )}
            </p>
            <p>
              {t(
                "En pose portrait, une seule vis par chevron suffit à bloquer toute la file de panneaux. En pose paysage, deux vis suffisent. Les profils, en acier galvanisé (350 g/m² minimum), sont calculés pour résister aux charges climatiques locales et aux règlements en vigueur.",
                "In portrait, a single screw per rafter locks the whole row of panels. In landscape, two screws are enough. The profiles, in galvanised steel (350 g/m² minimum), are calculated to withstand local climatic loads and applicable regulations."
              )}
            </p>
            <ul className="checklist">
              <li><IconCheck /> {t("1 vis par chevron en portrait, 2 en paysage", "1 screw per rafter in portrait, 2 in landscape")}</li>
              <li><IconCheck /> {t("Panneaux posés sans réglage, dans le sens de la longueur", "Panels laid lengthwise, without adjustment")}</li>
              <li><IconCheck /> {t("Acier galvanisé, calculé aux charges climatiques", "Galvanised steel, sized for climatic loads")}</li>
            </ul>
          </div>
          <div className="split__media reveal">
            <img src="/media/chevron-blocage.webp" alt={t("Chevrons de blocage des panneaux photovoltaïques", "Rafters clamping photovoltaic panels")} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Face aux solutions actuelles", "Versus current solutions")}</span>
            <h2>{t("Moins de vis, moins de pannes, plus vite", "Fewer screws, fewer purlins, faster")}</h2>
            <p>{t("Là où la pose classique multiplie crapauds et files de pannes, le chevron simplifie radicalement le blocage.", "Where classic installation multiplies clamps and purlin rows, the rafter radically simplifies clamping.")}</p>
          </div>
          <div className="reveal">
            <table className="spectable spectable--compare">
              <thead>
                <tr>
                  <th scope="col">{t("Critère", "Criterion")}</th>
                  <th scope="col">{t("Chevron Les Clés Solaires", "Les Clés Solaires rafter")}</th>
                  <th scope="col">{t("Pose classique concurrente", "Competing classic install")}</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((c) => (
                  <tr key={c.key}>
                    <th scope="row">{c.key}</th>
                    <td className="is-good">{c.ours}</td>
                    <td>{c.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Two types */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t("Deux versions", "Two versions")}</span>
            <h2>{t("Un chevron pour chaque usage", "A rafter for every use")}</h2>
          </div>
          <div className="grid grid-2">
            <article className="card reveal">
              <span className="icon-badge"><IconBolt /></span>
              <h3>{t("Chevron classique", "Classic rafter")}</h3>
              <p>
                {t(
                  "Destiné aux toitures de champs, aux ombrières, aux surfaces agrivoltaïques, aux hangars et aux pavillons. Sa grande portée lui permet de constituer une poutre de structure.",
                  "For field roofs, canopies, agrivoltaic surfaces, warehouses and buildings. Its long span lets it act as a structural beam."
                )}
              </p>
            </article>
            <article className="card reveal">
              <span className="icon-badge"><IconGauge /></span>
              <h3>{t("Chevron particulier (ferrovoltaïque)", "Special rafter (rail PV)")}</h3>
              <p>
                {t(
                  "Destiné au blocage des panneaux reposant sur les cadres de structure ferrovoltaïques, posés et bloqués entre les rails.",
                  "Designed to clamp panels resting on rail PV structure frames, fitted and locked between the rails."
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section section--soft">
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
