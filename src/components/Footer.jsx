import { Link } from "react-router-dom";
import { COMPANY, NAV_FLAT } from "../data/site.js";
import { REFERENCES, TAGLINE } from "../data/content.js";
import { useLang, localizePath } from "../i18n.jsx";
import { IconPhone, IconMail, IconMapPin } from "../lib/icons.jsx";
import "./Footer.css";

export default function Footer() {
  const { lang, t } = useLang();
  const year = new Date().getFullYear();
  // Repeat the list so one copy is wider than the viewport, then duplicate it
  // so the marquee (translateX -50%) loops seamlessly.
  const base = REFERENCES.length >= 8 ? REFERENCES : [...REFERENCES, ...REFERENCES];
  const marquee = [...base, ...base];

  return (
    <footer className="footer">
      {/* References banner */}
      <section className="partners" aria-label={t("Nos réalisations", "Our projects")}>
        <div className="container">
          <p className="partners__title">{t("Ils nous font confiance — nos réalisations", "Trusted by our clients — our projects")}</p>
        </div>
        <div className="partners__track-wrap">
          <div className="partners__track">
            {marquee.map((r, i) => (
              <span className="partners__item" key={i} aria-hidden={i >= base.length}>
                {t(r.type.fr, r.type.en)} — {t(r.place.fr, r.place.en)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__col footer__brandcol">
            <Link to={localizePath("/", lang)} className="brand brand--footer">
              <img
                src="/media/logo-light.png"
                className="brand__logo"
                alt={t("Les Clés Solaires — accueil", "Les Clés Solaires — home")}
              />
            </Link>
            <p className="footer__tag">
              {t(
                "Fournisseur de pieux d'ancrage, de structures et de chevrons brevetés pour installations photovoltaïques. De la conception à la mise en œuvre.",
                "Supplier of anchor piles, structures and patented rafters for photovoltaic installations. From design to implementation."
              )}
            </p>
            <p className="footer__tagline">{t(TAGLINE.fr, TAGLINE.en)}</p>
          </div>

          <div className="footer__col">
            <h4>{t("Navigation", "Navigation")}</h4>
            <ul className="footer__links">
              {NAV_FLAT.map((n) => (
                <li key={n.to}><Link to={localizePath(n.to, lang)}>{t(n.fr, n.en)}</Link></li>
              ))}
              <li><Link to={localizePath("/devis", lang)}>{t("Demande de devis", "Request a quote")}</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>{t("Contact", "Contact")}</h4>
            <ul className="footer__contact">
              <li><IconPhone /><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></li>
              <li><IconMail /><a href={COMPANY.emailHref}>{COMPANY.email}</a></li>
              <li><IconMapPin /><span>{t(COMPANY.area.fr, COMPANY.area.en)}</span></li>
            </ul>
            <p className="footer__note">{t(COMPANY.mailFirst.fr, COMPANY.mailFirst.en)}</p>
            <Link to={localizePath("/devis", lang)} className="btn btn--primary footer__cta">{t("Obtenir un devis", "Get a quote")}</Link>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>© {year} {COMPANY.name}. {t("Tous droits réservés.", "All rights reserved.")}</span>
          <span className="footer__legal">
            <Link to={localizePath("/mentions-legales", lang)}>{t("Mentions légales", "Legal notice")}</Link>
            <Link to={localizePath("/confidentialite", lang)}>{t("Politique de confidentialité", "Privacy policy")}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
