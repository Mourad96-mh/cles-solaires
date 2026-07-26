import { useSeo } from "../lib/hooks.js";
import { useLang, L } from "../i18n.jsx";
import { IconArrowRight } from "../lib/icons.jsx";

export default function NotFound() {
  const { lang, t } = useLang();
  useSeo({ lang, title: t("Page introuvable", "Page not found"), description: t("La page demandée n'existe pas.", "The requested page does not exist."), path: "/404" });
  return (
    <section className="section" style={{ textAlign: "center", paddingTop: 120, paddingBottom: 120 }}>
      <div className="container">
        <span className="eyebrow">{t("Erreur 404", "Error 404")}</span>
        <h1>{t("Cette page n'existe pas", "This page does not exist")}</h1>
        <p className="lead" style={{ maxWidth: 480, margin: "0 auto 28px" }}>
          {t("La page que vous cherchez a peut-être été déplacée ou supprimée.", "The page you are looking for may have been moved or deleted.")}
        </p>
        <L to="/" className="btn btn--primary">
          {t("Retour à l'accueil", "Back to home")} <IconArrowRight />
        </L>
      </div>
    </section>
  );
}
