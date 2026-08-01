import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { NAV } from "../data/site.js";
import { useLang, localizePath, stripLocale } from "../i18n.jsx";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const { lang, t } = useLang();
  const { pathname } = useLocation();
  const basePath = stripLocale(pathname);
  const close = () => setOpen(false);

  /* Opening the burger jumps the page back to the top. Two things matter here:
     `behavior: "instant"` (NOT "auto", which defers to `html { scroll-behavior:
     smooth }` and would get cancelled mid-animation by the overflow lock below),
     and scrolling *before* that lock lands — `overflow: hidden` on body makes it
     a scroll container, which strips the sticky header out of the viewport and
     leaves an empty band above the panel. */
  const toggle = () => {
    if (!open) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setOpen((v) => !v);
  };

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

  /* Publish the header's real height as --nav-h so the mobile panel can sit
     flush under it. Hardcoding 88px left a 1px seam (.nav adds a 1px bottom
     border on top of the 88px .nav__inner) and would drift the moment the
     header's height changes at a breakpoint. */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const apply = () =>
      document.documentElement.style.setProperty("--nav-h", `${el.getBoundingClientRect().height}px`);
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header ref={headerRef} className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
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
          onClick={toggle}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
