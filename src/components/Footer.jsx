import { Link } from "react-router-dom";
import { COMPANY, NAV_FLAT } from "../data/site.js";
import { TAGLINE } from "../data/content.js";
import { useLang, localizePath } from "../i18n.jsx";
import { IconMail, IconMapPin } from "../lib/icons.jsx";
import "./Footer.css";

/* The "Ils nous font confiance — nos réalisations" marquee that used to sit on
   top of this footer was struck out by the client on every page it appeared
   (scans of 10/08/2026, pp. 8, 21, 36, 44 and the accueil/devis supplement).
   It rolled the reference list — Espagne, La Réunion, Bretagne — under a
   "trusted by" claim on all 12 pages; the Références page carries them now. */
export default function Footer() {
  const { lang, t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
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
            {/* Phone struck out here and in every CTA band (scans of 10/08/2026).
                It stays on Contact and Devis, where the client left it alone. */}
            <ul className="footer__contact">
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
