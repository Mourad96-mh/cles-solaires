import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import { STRUCTURE_TYPES } from "../data/content.js";
import PageHero from "../components/PageHero.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { IconRuler, IconShield, IconLeaf } from "../lib/icons.jsx";
import "./content.css";

export default function Structures() {
  const { lang, t } = useLang();
  useSeo({
    lang,
    title: t("Les structures porteuses", "Load-bearing structures"),
    description: t(
      "Structures porteuses des Clés Solaires : trois types selon le projet — champs solaires en profils minces galvanisés SENZIMIR, agrivoltaïsme en profils minces et poteaux tubulaires, ombrières en profils du commerce galvanisés à chaud. Ossature réglable sans calage, immobilisée par nos pieux d'ancrage.",
      "Les Clés Solaires load-bearing structures: three types depending on the project — solar fields in SENZIMIR-galvanised thin profiles, agrivoltaics in thin profiles with tubular posts, canopies in hot-dip galvanised standard profiles. Frame adjustable without shimming, held by our anchor piles."
    ),
    path: "/structures",
  });
  useReveal();

  const FEATURES = [
    { icon: IconRuler, title: t("Réglable sans calage", "Adjustable without shimming"), text: t("Le réglage vertical s'effectue sans calage, par réglage mécanique variable : de −10 à +10 cm en cas courant, et de −50 à +50 cm pour les terrains meubles.", "Vertical adjustment is done without shimming, by variable mechanical adjustment: −10 to +10 cm in the standard case, and −50 to +50 cm on loose ground.") },
    { icon: IconShield, title: t("Galvanisée selon le type", "Galvanised to suit the type"), text: t("Galvanisation SENZIMIR en bandes continues pour les profils minces, galvanisation à chaud pour les profils du commerce et les poteaux tubulaires.", "SENZIMIR galvanising in continuous strips for thin profiles, hot-dip galvanising for standard profiles and tubular posts.") },
    { icon: IconLeaf, title: t("Posée sur pieux", "Mounted on piles"), text: t("Les poteaux reposent sur nos pieux : plus de massifs ni de longrines béton encombrants.", "Posts rest on our piles: no more bulky concrete footings or ground beams.") },
  ];

  /* Extra detail per structure type, kept beside the client's three definitions:
     these come from his earlier document and are unaffected by the 01/08/2026
     corrections (which only re-scoped the profiles, galvanising and erection). */
  const EXTRAS = {
    champs: t("Elle comprend 2 files de pannes pour la pose des panneaux en portrait, ou aucune panne pour la pose en paysage ; la solution la plus économique est étudiée selon le projet.", "It has 2 rows of purlins for portrait panel installation, or no purlin at all for landscape; the most economical solution is studied per project."),
    agrivoltaisme: t("La pose des panneaux se fait en portrait ou en paysage, selon qu'une étanchéité de toiture est utile ou non.", "Panels are laid in portrait or landscape, depending on whether roof watertightness is needed."),
    ombrieres: t("Pour les structures à poteau central unique, une poutre d'écartement des pieux est incluse. Le sens de pose est retenu pour l'écoulement des eaux de pluie.", "For single-central-post structures, a pile spacing beam is included. The laying direction is chosen for rainwater run-off."),
  };

  return (
    <>
      <PageHero
        eyebrow={t("Produit", "Product")}
        title={t("Les structures porteuses", "Load-bearing structures")}
        text={t(
          "Une ossature galvanisée et réglable sans calage, conçue différemment selon chaque système photovoltaïque et immobilisée par nos pieux d'ancrage.",
          "A galvanised frame, adjustable without shimming, designed differently for each photovoltaic system and held by our anchor piles."
        )}
        image="/media/hero-carport.jpg"
        current={t("Structures", "Structures")}
      />

      <section className="section">
        <div className="container split">
          <div className="split__media reveal">
            <img src="/media/structure-detail.jpg" alt={t("Structure porteuse photovoltaïque", "Photovoltaic load-bearing structure")} loading="lazy" />
          </div>
          <div className="split__text reveal">
            <span className="eyebrow">{t("La structure", "The structure")}</span>
            <h2>{t("Une ossature pensée pour chaque système", "A frame designed for each system")}</h2>
            <p>
              {t(
                "La structure porteuse est immobilisée par les pieux d'ancrage en sous-sol et supporte les chevrons autobloquants des panneaux photovoltaïques. Elle est calculée pour résister aux actions normalisées de neige, de vent — jusqu'au vent cyclonique — et de séisme, le cas échéant.",
                "The load-bearing structure is held in the subsoil by the anchor piles and carries the self-locking rafters of the photovoltaic panels. It is calculated to resist standardised snow, wind — up to cyclonic wind — and seismic actions where applicable."
              )}
            </p>
            <p>
              {t(
                "Sa constitution varie selon le type de projet. Il existe trois types de structures, qui se distinguent par leurs profils, leur mode de galvanisation et leur mode de pose : les structures de champs solaires, les structures agrivoltaïques et les structures d'ombrières.",
                "Its make-up varies with the type of project. There are three types of structure, distinguished by their profiles, their galvanising process and their erection method: solar-field structures, agrivoltaic structures and canopy structures."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t("Caractéristiques", "Characteristics")}</span>
            <h2>{t("Galvanisée, réglable, durable", "Galvanised, adjustable, durable")}</h2>
          </div>
          <div className="grid grid-3">
            {FEATURES.map((f) => (
              <article className="card reveal" key={f.title}>
                <span className="icon-badge"><f.icon /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Conçue selon le système", "Designed per system")}</span>
            <h2>{t("Trois types de structures", "Three types of structure")}</h2>
            <p>{t("La conception, les profils, la galvanisation et le mode de pose varient d'un type à l'autre.", "The design, the profiles, the galvanising and the erection method vary from one type to the next.")}</p>
          </div>
          <div className="reveal">
            {STRUCTURE_TYPES.map((s) => (
              <details className="disclosure" key={s.key}>
                <summary className="disclosure__summary">{t(s.title.fr, s.title.en)}</summary>
                <div className="disclosure__body">
                  <p>{t(s.text.fr, s.text.en)}</p>
                  <h4>{t("Galvanisation", "Galvanising")}</h4>
                  <p>{t(s.galva.fr, s.galva.en)}</p>
                  <h4>{t("Mise en œuvre", "Erection")}</h4>
                  <p>{t(s.pose.fr, s.pose.en)}.</p>
                  {EXTRAS[s.key] && (
                    <>
                      <h4>{t("Pose des panneaux", "Fitting the panels")}</h4>
                      <p>{EXTRAS[s.key]}</p>
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={t("Besoin d'une structure pour votre projet ?", "Need a structure for your project?")}
        text={t("Envoyez-nous les caractéristiques de votre installation : nous dimensionnons l'ossature adaptée.", "Send us your installation details: we'll size the right frame.")}
      />
    </>
  );
}
