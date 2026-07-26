import { useLang, localizePath } from "../i18n.jsx";
import { Link } from "react-router-dom";
import "./PageHero.css";

/** Compact hero for inner pages, with breadcrumb. */
export default function PageHero({ eyebrow, title, text, image, current }) {
  const { lang, t } = useLang();
  return (
    <section className="pagehero" style={image ? { "--ph-img": `url(${image})` } : undefined}>
      <div className="pagehero__overlay" />
      <div className="container pagehero__inner">
        <nav className="pagehero__crumb" aria-label={t("Fil d'Ariane", "Breadcrumb")}>
          <Link to={localizePath("/", lang)}>{t("Accueil", "Home")}</Link>
          <span aria-hidden="true">/</span>
          <span>{current}</span>
        </nav>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p className="pagehero__text">{text}</p>}
      </div>
    </section>
  );
}
