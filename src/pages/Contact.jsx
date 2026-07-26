import { useState } from "react";
import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import PageHero from "../components/PageHero.jsx";
import { submitForm } from "../lib/forms.js";
import { COMPANY } from "../data/site.js";
import { IconPhone, IconMail, IconMapPin } from "../lib/icons.jsx";
import "./content.css";
import "./Forms.css";

const EMPTY = { name: "", company: "", phone: "", email: "", message: "", company_url: "" };

export default function Contact() {
  const { lang, t } = useLang();
  useSeo({
    lang,
    title: t("Contact", "Contact"),
    description: t(
      "Contactez Les Clés Solaires pour vos projets photovoltaïques. Téléphone, e-mail et formulaire — les échanges par mail sont à privilégier.",
      "Contact Les Clés Solaires about your photovoltaic projects. Phone, e-mail and form — e-mail is the preferred channel."
    ),
    path: "/contact",
  });
  useReveal();

  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitForm(form, { subject: `Contact — ${form.name || "site"}` });
      setStatus("sent");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow={t("Contact", "Contact")}
        title={t("Parlons de votre projet", "Let's talk about your project")}
        text={t("Une question, un projet photovoltaïque ? Notre équipe vous répond rapidement.", "A question, a photovoltaic project? Our team replies quickly.")}
        image="/media/atelier-equipe.jpg"
        current={t("Contact", "Contact")}
      />

      <section className="section">
        <div className="container form-layout">
          <aside className="form-aside reveal">
            <h2>{t("Coordonnées", "Contact details")}</h2>
            <p className="lead">{t("Contactez-nous directement ou via le formulaire — nous revenons vers vous rapidement.", "Reach us directly or via the form — we get back to you quickly.")}</p>
            <ul className="contact-list">
              <li>
                <span className="icon-badge"><IconPhone /></span>
                <div><strong>{t("Téléphone", "Phone")}</strong><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></div>
              </li>
              <li>
                <span className="icon-badge"><IconMail /></span>
                <div><strong>{t("E-mail (à privilégier)", "E-mail (preferred)")}</strong><a href={COMPANY.emailHref}>{COMPANY.email}</a></div>
              </li>
              <li>
                <span className="icon-badge"><IconMapPin /></span>
                <div><strong>{t("Zone d'intervention", "Service area")}</strong><span>{t(COMPANY.area.fr, COMPANY.area.en)}</span></div>
              </li>
            </ul>
            <p className="form-note">{t(COMPANY.mailFirst.fr, COMPANY.mailFirst.en)}</p>
          </aside>

          <div className="form-card reveal">
            {status === "sent" && (
              <div className="form-success">{t("Merci ! Votre message a bien été pris en compte. Nous vous recontactons rapidement.", "Thank you! Your message has been received. We'll get back to you shortly.")}</div>
            )}
            {status === "error" && (
              <div className="form-success" style={{ background: "#fdeaea", borderColor: "#f3c2c2", color: "#9a2b2b" }}>
                {t("Une erreur est survenue. Réessayez ou écrivez-nous à ", "Something went wrong. Please retry or email us at ")}{COMPANY.email}.
              </div>
            )}
            <form onSubmit={onSubmit} noValidate>
              <div className="field--required field">
                <label htmlFor="c-name">{t("Nom", "Name")}</label>
                <input id="c-name" name="name" value={form.name} onChange={onChange} required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="c-company">{t("Société", "Company")}</label>
                <input id="c-company" name="company" value={form.company} onChange={onChange} autoComplete="organization" />
              </div>
              <div className="form-row">
                <div className="field--required field">
                  <label htmlFor="c-phone">{t("Téléphone", "Phone")}</label>
                  <input id="c-phone" name="phone" type="tel" value={form.phone} onChange={onChange} required autoComplete="tel" />
                </div>
                <div className="field--required field">
                  <label htmlFor="c-email">{t("E-mail", "E-mail")}</label>
                  <input id="c-email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
                </div>
              </div>
              <div className="field--required field">
                <label htmlFor="c-message">{t("Message", "Message")}</label>
                <textarea id="c-message" name="message" value={form.message} onChange={onChange} required />
              </div>

              {/* Honeypot anti-spam */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="c-url">{t("Ne pas remplir", "Do not fill")}</label>
                <input id="c-url" name="company_url" tabIndex={-1} autoComplete="off" value={form.company_url} onChange={onChange} />
              </div>

              <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? t("Envoi…", "Sending…") : t("Envoyer le message", "Send message")}
              </button>
              <p className="form-note">
                {t("En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour traiter votre demande. Voir notre ", "By sending this form, you agree that your data will be used to process your request. See our ")}
                <a href={lang === "en" ? "/en/confidentialite" : "/confidentialite"}>{t("politique de confidentialité", "privacy policy")}</a>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
