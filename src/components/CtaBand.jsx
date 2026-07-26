import { Link } from "react-router-dom";
import { COMPANY } from "../data/site.js";
import { useLang, localizePath } from "../i18n.jsx";
import { IconArrowRight, IconPhone } from "../lib/icons.jsx";
import "./CtaBand.css";

export default function CtaBand({ title, text }) {
  const { lang, t } = useLang();
  return (
    <section className="ctaband">
      <div className="container ctaband__inner">
        <div>
          <h2>{title || t("Un projet photovoltaïque ? Parlons-en.", "A photovoltaic project? Let's talk.")}</h2>
          <p>
            {text ||
              t(
                "Décrivez-nous votre projet : nous vous répondons avec une solution complète et chiffrée, adaptée à votre terrain.",
                "Tell us about your project: we reply with a complete, costed solution tailored to your site."
              )}
          </p>
        </div>
        <div className="ctaband__actions">
          <Link to={localizePath("/devis", lang)} className="btn btn--primary">
            {t("Demander un devis", "Request a quote")} <IconArrowRight />
          </Link>
          <a href={COMPANY.phoneHref} className="btn btn--outline-light">
            <IconPhone /> {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
