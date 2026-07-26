import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { NAV } from "../data/site.js";
import { useLang, localizePath, stripLocale } from "../i18n.jsx";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t } = useLang();
  const { pathname } = useLocation();
  const basePath = stripLocale(pathname);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to={localizePath("/", lang)} className="brand" onClick={close}>
          <img
            src="/media/logo.png"
            className="brand__logo"
            alt={t("Les Clés Solaires — accueil", "Les Clés Solaires — home")}
          />
        </Link>

        <nav className={`nav__menu ${open ? "is-open" : ""}`} aria-label={t("Navigation principale", "Main navigation")}>
          {NAV.map((item) =>
            item.children ? (
              <div className="nav__group" key={item.fr}>
                <span className="nav__link nav__grouplabel">{t(item.fr, item.en)}</span>
                <div className="nav__dropdown">
                  {item.children.map((c) => (
                    <NavLink
                      key={c.to}
                      to={localizePath(c.to, lang)}
                      className={({ isActive }) => `nav__drop ${isActive ? "is-active" : ""}`}
                      onClick={close}
                    >
                      {t(c.fr, c.en)}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={localizePath(item.to, lang)}
                end={item.to === "/"}
                className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
                onClick={close}
              >
                {t(item.fr, item.en)}
              </NavLink>
            )
          )}

          <div className="nav__lang" role="group" aria-label={t("Choix de la langue", "Language")}>
            <Link
              to={basePath}
              className={`nav__langbtn ${lang === "fr" ? "is-active" : ""}`}
              onClick={close}
              hrefLang="fr"
            >
              FR
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              to={localizePath(basePath, "en")}
              className={`nav__langbtn ${lang === "en" ? "is-active" : ""}`}
              onClick={close}
              hrefLang="en"
            >
              EN
            </Link>
          </div>

          <Link to={localizePath("/devis", lang)} className="btn btn--primary nav__cta" onClick={close}>
            {t("Demander un devis", "Request a quote")}
          </Link>
        </nav>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label={open ? t("Fermer le menu", "Close menu") : t("Ouvrir le menu", "Open menu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
