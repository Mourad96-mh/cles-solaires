import { useSeo } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import PageHero from "../components/PageHero.jsx";
import { COMPANY, PARENT } from "../data/site.js";
import "./content.css";
import "./Legal.css";

export default function MentionsLegales() {
  const { lang, t } = useLang();
  useSeo({
    lang,
    title: t("Mentions légales", "Legal notice"),
    description: t("Mentions légales du site Les Clés Solaires.", "Legal notice for the Les Clés Solaires website."),
    path: "/mentions-legales",
  });

  return (
    <>
      <PageHero eyebrow={t("Informations", "Information")} title={t("Mentions légales", "Legal notice")} current={t("Mentions légales", "Legal notice")} />
      <section className="section">
        <div className="container legal">
          <h2>{t("Éditeur du site", "Website publisher")}</h2>
          <p>
            {PARENT.name} — {t(PARENT.legalForm.fr, PARENT.legalForm.en)}<br />
            {t("Siège social", "Registered office")} : {PARENT.address}<br />
            {t("Capital social", "Share capital")} : {t(PARENT.capital.fr, PARENT.capital.en)}<br />
            RCS : {PARENT.rcs} — {t("n° de gestion", "management no.")} {PARENT.gestion}<br />
            SIREN : {PARENT.siren} — {t("code APE", "APE code")} : {PARENT.ape}<br />
            {t("Téléphone", "Phone")} : {COMPANY.phone}<br />
            {t("E-mail", "E-mail")} : {COMPANY.email}
          </p>
          <p>
            {t(
              `« ${COMPANY.name} » est le domaine des structures solaires intégré au sein de la ${PARENT.name}. Il s'agit d'une marque et non d'une entité juridique distincte.`,
              `“${COMPANY.name}” is the solar-structures business housed within ${PARENT.name}. It is a brand, not a separate legal entity.`
            )}
          </p>

          <h2>{t("Directeur de la publication", "Publication director")}</h2>
          <p>
            {PARENT.president}, {t("président de la", "chairman of")} {PARENT.name}.
          </p>

          <h2>{t("Objet social", "Corporate purpose")}</h2>
          <p>{t(PARENT.purpose.fr, PARENT.purpose.en)}</p>

          <h2>{t("Hébergement", "Hosting")}</h2>
          <p className="legal__placeholder">
            {t("Le site est hébergé par", "The website is hosted by")} : [{t("nom de l'hébergeur — à compléter à la mise en ligne", "host name — to be completed at go-live")}]<br />
            [{t("adresse de l'hébergeur", "host address")}] — [{t("téléphone", "phone")}].
          </p>

          <h2>{t("Propriété intellectuelle", "Intellectual property")}</h2>
          <p>
            {t(
              `L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos) est la propriété de la ${PARENT.name} ou de ses partenaires, sauf mention contraire. Toute reproduction sans autorisation est interdite.`,
              `All content on this website (text, images, logos, videos) is the property of ${PARENT.name} or its partners, unless otherwise stated. Any reproduction without authorisation is prohibited.`
            )}
          </p>

          <h2>{t("Responsabilité", "Liability")}</h2>
          <p>
            {t(
              `La ${PARENT.name} s'efforce d'assurer l'exactitude des informations diffusées mais ne saurait être tenue responsable d'éventuelles erreurs ou omissions.`,
              `${PARENT.name} strives to ensure the accuracy of the information published but cannot be held liable for any errors or omissions.`
            )}
          </p>
        </div>
      </section>
    </>
  );
}
