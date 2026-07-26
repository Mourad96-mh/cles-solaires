import { useState } from "react";
import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import PageHero from "../components/PageHero.jsx";
import { submitForm } from "../lib/forms.js";
import { COMPANY } from "../data/site.js";
import { IconCheck } from "../lib/icons.jsx";
import "./content.css";
import "./Forms.css";

const EMPTY = {
  name: "", company: "", phone: "", email: "",
  location: "", need: "", company_url: "",
};

export default function Devis() {
  const { lang, t } = useLang();
  useSeo({
    lang,
    title: t("Demande de devis", "Request a quote"),
    description: t(
      "Demandez votre devis gratuit : pieux d'ancrage, structure ou chevron breveté pour votre installation photovoltaïque. Décrivez votre projet, nous vous répondons rapidement.",
      "Request your free quote: anchor piles, structure or patented rafter for your photovoltaic installation. Describe your project, we'll reply quickly."
    ),
    path: "/devis",
  });
  useReveal();

  const [form, setForm] = useState(EMPTY);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("idle");
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitForm(form, { subject: `Demande de devis — ${form.name || "site"}` });
      setStatus("sent");
      setForm(EMPTY);
      setFileName("");
    } catch {
      setStatus("error");
    }
  };

  const BENEFITS = [
    t("Réponse personnalisée et chiffrée", "A personalised, costed reply"),
    t("Conseil sur le produit adapté : pieu, structure ou chevron", "Advice on the right product: pile, structure or rafter"),
    t("Prise en compte de votre terrain et de votre planning", "Your site and schedule taken into account"),
  ];

  return (
    <>
      <PageHero
        eyebrow={t("Demande de devis", "Request a quote")}
        title={t("Obtenez votre devis gratuit", "Get your free quote")}
        text={t("Décrivez votre projet photovoltaïque : nous vous proposons une solution complète, adaptée et chiffrée.", "Describe your photovoltaic project: we'll propose a complete, tailored and costed solution.")}
        image="/media/essai-pression.jpg"
        current={t("Demande de devis", "Request a quote")}
      />

      <section className="section">
        <div className="container form-layout">
          <aside className="form-aside reveal">
            <h2>{t("Un devis, sans engagement", "A quote, no commitment")}</h2>
            <p className="lead">{t("Plus votre description est précise, plus notre réponse sera juste.", "The more precise your description, the more accurate our reply.")}</p>
            <ul className="checklist">
              {BENEFITS.map((b) => <li key={b}><IconCheck /> {b}</li>)}
            </ul>
            <div className="aside-callout">
              <strong>{t("Vous préférez en parler ?", "Prefer to talk?")}</strong>
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </div>
            <p className="form-note">{t(COMPANY.mailFirst.fr, COMPANY.mailFirst.en)}</p>
          </aside>

          <div className="form-card reveal">
            {status === "sent" && (
              <div className="form-success">{t("Merci ! Votre demande de devis a bien été envoyée. Nous revenons vers vous au plus vite.", "Thank you! Your quote request has been sent. We'll get back to you as soon as possible.")}</div>
            )}
            {status === "error" && (
              <div className="form-success" style={{ background: "#fdeaea", borderColor: "#f3c2c2", color: "#9a2b2b" }}>
                {t("Une erreur est survenue. Réessayez ou écrivez-nous à ", "Something went wrong. Please retry or email us at ")}{COMPANY.email}.
              </div>
            )}
            <form onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="field--required field">
                  <label htmlFor="d-name">{t("Nom", "Name")}</label>
                  <input id="d-name" name="name" value={form.name} onChange={onChange} required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="d-company">{t("Société", "Company")}</label>
                  <input id="d-company" name="company" value={form.company} onChange={onChange} autoComplete="organization" />
                </div>
              </div>
              <div className="form-row">
                <div className="field--required field">
                  <label htmlFor="d-phone">{t("Téléphone", "Phone")}</label>
                  <input id="d-phone" name="phone" type="tel" value={form.phone} onChange={onChange} required autoComplete="tel" />
                </div>
                <div className="field--required field">
                  <label htmlFor="d-email">{t("E-mail", "E-mail")}</label>
                  <input id="d-email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
                </div>
              </div>
              <div className="field--required field">
                <label htmlFor="d-location">{t("Localisation du projet", "Project location")}</label>
                <input id="d-location" name="location" value={form.location} onChange={onChange} required placeholder={t("Ville / pays", "City / country")} />
              </div>
              <div className="field--required field">
                <label htmlFor="d-need">{t("Description du besoin", "Description of your need")}</label>
                <textarea id="d-need" name="need" value={form.need} onChange={onChange} required
                  placeholder={t("Domaine (champ, ombrière, agrivoltaïque…), surface à couvrir, puissance visée, nature du sol si connue…", "Field (solar field, canopy, agrivoltaics…), surface to cover, target power, soil type if known…")} />
              </div>
              <div className="field">
                <label htmlFor="d-file">{t("Pièce jointe (PDF ou image)", "Attachment (PDF or image)")}</label>
                <label className="filedrop">
                  <input id="d-file" name="file" type="file" accept=".pdf,image/*"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
                  <span>{fileName || t("Choisir un fichier…", "Choose a file…")}</span>
                </label>
                <p className="form-note">{t("Plans, photos du terrain, cahier des charges… (facultatif)", "Drawings, site photos, specifications… (optional)")}</p>
              </div>

              {/* Honeypot anti-spam */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="d-url">{t("Ne pas remplir", "Do not fill")}</label>
                <input id="d-url" name="company_url" tabIndex={-1} autoComplete="off" value={form.company_url} onChange={onChange} />
              </div>

              <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? t("Envoi…", "Sending…") : t("Envoyer ma demande de devis", "Send my quote request")}
              </button>
              <p className="form-note">
                {t("Vos données ne servent qu'au traitement de votre demande. Voir notre ", "Your data is only used to process your request. See our ")}
                <a href={lang === "en" ? "/en/confidentialite" : "/confidentialite"}>{t("politique de confidentialité", "privacy policy")}</a>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
