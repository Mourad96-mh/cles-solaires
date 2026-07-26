import { useSeo } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import PageHero from "../components/PageHero.jsx";
import { COMPANY } from "../data/site.js";
import "./content.css";
import "./Legal.css";

export default function Confidentialite() {
  const { lang, t } = useLang();
  useSeo({
    lang,
    title: t("Politique de confidentialité", "Privacy policy"),
    description: t(
      "Politique de confidentialité et gestion des données personnelles (RGPD) du site Les Clés Solaires.",
      "Privacy policy and personal data handling (GDPR) for the Les Clés Solaires website."
    ),
    path: "/confidentialite",
  });

  return (
    <>
      <PageHero eyebrow={t("RGPD", "GDPR")} title={t("Politique de confidentialité", "Privacy policy")} current={t("Politique de confidentialité", "Privacy policy")} />
      <section className="section">
        <div className="container legal">
          <p className="legal__placeholder">
            {t(
              `Modèle indicatif à valider par le client. ${COMPANY.name} s'engage à protéger les données personnelles des visiteurs conformément au RGPD.`,
              `Indicative template to be validated by the client. ${COMPANY.name} is committed to protecting visitors' personal data in accordance with the GDPR.`
            )}
          </p>

          <h2>{t("Données collectées", "Data collected")}</h2>
          <p>
            {t(
              "Les formulaires de contact et de demande de devis collectent les données que vous renseignez : nom, société, téléphone, e-mail, localisation du projet, message et pièces jointes éventuelles.",
              "The contact and quote forms collect the data you provide: name, company, phone, e-mail, project location, message and any attachments."
            )}
          </p>

          <h2>{t("Finalité du traitement", "Purpose of processing")}</h2>
          <p>
            {t(
              "Ces données sont utilisées uniquement pour répondre à votre demande et établir, le cas échéant, un devis. Elles ne sont ni vendues ni cédées à des tiers.",
              "This data is used solely to respond to your request and, where applicable, to prepare a quote. It is never sold or transferred to third parties."
            )}
          </p>

          <h2>{t("Durée de conservation", "Retention period")}</h2>
          <p>{t(
            "Les données sont conservées le temps nécessaire au traitement de votre demande, puis archivées ou supprimées.",
            "Data is kept for as long as necessary to process your request, then archived or deleted."
          )}</p>

          <h2>{t("Vos droits", "Your rights")}</h2>
          <p>
            {t(
              "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition sur vos données. Pour l'exercer, contactez-nous à ",
              "Under the GDPR, you have the right to access, rectify, delete and object to your data. To exercise it, contact us at "
            )}
            <a href={COMPANY.emailHref}>{COMPANY.email}</a>.
          </p>

          <h2>{t("Cookies", "Cookies")}</h2>
          <p>
            {t(
              "Ce site limite l'usage des cookies au strict nécessaire à son fonctionnement. Aucun cookie de suivi publicitaire n'est déposé sans votre consentement.",
              "This website limits cookie use to what is strictly necessary for its operation. No advertising tracking cookie is set without your consent."
            )}
          </p>
        </div>
      </section>
    </>
  );
}
