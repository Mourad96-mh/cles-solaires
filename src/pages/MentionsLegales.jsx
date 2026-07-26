import { useSeo } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import PageHero from "../components/PageHero.jsx";
import { COMPANY } from "../data/site.js";
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
          <p className="legal__placeholder">
            {t(
              `Les éléments ci-dessous sont à compléter ou à valider par le client (contenus juridiques fournis par ${COMPANY.name}).`,
              `The items below are to be completed or validated by the client (legal content provided by ${COMPANY.name}).`
            )}
          </p>

          <h2>{t("Éditeur du site", "Website publisher")}</h2>
          <p>
            {COMPANY.name}<br />
            {t("Adresse", "Address")} : [{t("à compléter", "to be completed")}]<br />
            SIRET : {COMPANY.siret}<br />
            {t("Téléphone", "Phone")} : {COMPANY.phone}<br />
            {t("E-mail", "E-mail")} : {COMPANY.email}
          </p>

          <h2>{t("Directeur de la publication", "Publication director")}</h2>
          <p>[{t("Nom du responsable — à compléter", "Name of the person in charge — to be completed")}]</p>

          <h2>{t("Hébergement", "Hosting")}</h2>
          <p>
            {t("Le site est hébergé par", "The website is hosted by")} : [{t("nom de l'hébergeur", "host name")}]<br />
            [{t("adresse de l'hébergeur", "host address")}] — [{t("téléphone", "phone")}].
          </p>

          <h2>{t("Propriété intellectuelle", "Intellectual property")}</h2>
          <p>
            {t(
              `L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos) est la propriété de ${COMPANY.name} ou de ses partenaires, sauf mention contraire. Toute reproduction sans autorisation est interdite.`,
              `All content on this website (text, images, logos, videos) is the property of ${COMPANY.name} or its partners, unless otherwise stated. Any reproduction without authorisation is prohibited.`
            )}
          </p>

          <h2>{t("Responsabilité", "Liability")}</h2>
          <p>
            {t(
              `${COMPANY.name} s'efforce d'assurer l'exactitude des informations diffusées mais ne saurait être tenue responsable d'éventuelles erreurs ou omissions.`,
              `${COMPANY.name} strives to ensure the accuracy of the information published but cannot be held liable for any errors or omissions.`
            )}
          </p>
        </div>
      </section>
    </>
  );
}
