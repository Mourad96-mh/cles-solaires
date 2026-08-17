import { Link } from "react-router-dom";
import { useLang, localizePath } from "../i18n.jsx";
import { IconArrowRight } from "../lib/icons.jsx";
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
        {/* Phone number struck out of this band on every page it appears
            (scans of 10/08/2026, pp. 7, 21, 36, 41 and the accueil supplement).
            The quote button stays; the number is still on Contact and Devis. */}
        <div className="ctaband__actions">
          <Link to={localizePath("/devis", lang)} className="btn btn--primary">
            {t("Demander un devis", "Request a quote")} <IconArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
