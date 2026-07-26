import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import PageHero from "../components/PageHero.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { IconCheck, IconRuler, IconShield, IconLeaf } from "../lib/icons.jsx";
import "./content.css";

export default function Structures() {
  const { lang, t } = useLang();
  useSeo({
    lang,
    title: t("Les structures porteuses", "Load-bearing structures"),
    description: t(
      "Structures porteuses des Clés Solaires : ossature légère réglable, galvanisée à chaud, posée sur pieux sans engin de levage. Déclinée pour champs solaires, ombrières, toitures, agrivoltaïsme et ferrovoltaïsme.",
      "Les Clés Solaires load-bearing structures: light adjustable frame, hot-dip galvanised, mounted on piles without lifting equipment. Declined for solar fields, canopies, roofs, agrivoltaics and rail PV."
    ),
    path: "/structures",
  });
  useReveal();

  const FEATURES = [
    { icon: IconRuler, title: t("Légère & réglable", "Light & adjustable"), text: t("Très légère, elle se pose manuellement sans engin de levage et se règle verticalement sans calage.", "Very light, it is fitted by hand without lifting equipment and is vertically adjustable without shimming.") },
    { icon: IconShield, title: t("Galvanisée à chaud", "Hot-dip galvanised"), text: t("Ossature protégée par galvanisation en bande continue, boulonnerie galvanisée à chaud, aucun gousset ajouté.", "Frame protected by continuous strip galvanising, hot-dip galvanised bolting, no added gussets.") },
    { icon: IconLeaf, title: t("Posée sur pieux", "Mounted on piles"), text: t("Les poteaux reposent sur nos pieux : plus de massifs ni de longrines béton encombrants.", "Posts rest on our piles: no more bulky concrete footings or ground beams.") },
  ];

  const DECLINE = [
    { title: t("Champs solaires", "Solar fields"), text: t("Structure conçue exclusivement pour recevoir nos chevrons et pieux ; 2 cours de pannes portées entre les poteaux, stabilisées par diagonales.", "Structure designed exclusively to receive our rafters and piles; 2 purlin runs carried between the posts, stabilised by diagonals.") },
    { title: t("Ombrières", "Canopies"), text: t("Réalisée en profils du commerce (IPE, HEA, PRS) ou avec nos chevrons et pieux, conforme aux normes et charges climatiques locales.", "Built from standard profiles (IPE, HEA, PRS) or with our rafters and piles, compliant with local standards and climatic loads.") },
    { title: t("Toitures hangars & pavillons", "Warehouse & building roofs"), text: t("Seules les attaches reliant les chevrons à la structure du bâtiment sont nécessaires.", "Only the fasteners linking the rafters to the building structure are required.") },
    { title: t("Surfaces agrivoltaïques", "Agrivoltaic surfaces"), text: t("Ossature tubulaire à encombrement minimal, auto-stable, sans massifs ni longrines béton — pour privilégier les cultures.", "Tubular frame with minimal footprint, self-stable, without concrete footings or beams — to favour crops.") },
    { title: t("Ferrovoltaïsme", "Rail PV"), text: t("Entretoises bloquées entre les rails par crapauds réglables et freinées contre le déboulonnage dû aux vibrations.", "Spacers locked between the rails with adjustable clamps and secured against vibration-induced loosening.") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("Produit", "Product")}
        title={t("Les structures porteuses", "Load-bearing structures")}
        text={t(
          "Une ossature légère, réglable et galvanisée à chaud, conçue différemment selon chaque système photovoltaïque et posée sur nos pieux d'ancrage.",
          "A light, adjustable, hot-dip galvanised frame, designed differently for each photovoltaic system and mounted on our anchor piles."
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
                "La structure porteuse est destinée à recevoir exclusivement nos chevrons et nos pieux. Résistante aux actions climatiques selon les normes en vigueur, elle reste très légère et se pose manuellement, sans engin de levage, dans pratiquement toutes les situations.",
                "The load-bearing structure is designed to receive exclusively our rafters and piles. Resistant to climatic actions under applicable standards, it stays very light and is fitted by hand, without lifting equipment, in almost every situation."
              )}
            </p>
            <p>
              {t(
                "Réglable verticalement sans calage et stabilisée par diagonales, elle voit son ossature protégée par galvanisation en bande continue, avec un boulonnage réduit et aucun gousset ajouté. Toute la boulonnerie est galvanisée à chaud.",
                "Vertically adjustable without shimming and stabilised by diagonals, its frame is protected by continuous strip galvanising, with reduced bolting and no added gussets. All bolting is hot-dip galvanised."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t("Caractéristiques", "Characteristics")}</span>
            <h2>{t("Légère, réglable, durable", "Light, adjustable, durable")}</h2>
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
            <h2>{t("Une structure déclinée par domaine", "A structure declined by field")}</h2>
            <p>{t("La conception varie selon l'usage — du champ solaire au ferrovoltaïsme.", "The design varies with the use — from solar fields to rail PV.")}</p>
          </div>
          <ul className="checklist checklist--rich">
            {DECLINE.map((d) => (
              <li key={d.title}>
                <IconCheck />
                <div>
                  <strong>{d.title}</strong>
                  <span>{d.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={t("Besoin d'une structure pour votre projet ?", "Need a structure for your project?")}
        text={t("Envoyez-nous les caractéristiques de votre installation : nous dimensionnons l'ossature adaptée.", "Send us your installation details: we'll size the right frame.")}
      />
    </>
  );
}
