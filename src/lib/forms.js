import { COMPANY } from "../data/site.js";

/* Set this to your form backend (Formspree, Web3Forms, your own API, ...).
   While empty, forms fall back to opening the visitor's mail client (mailto). */
export const FORM_ENDPOINT = "";

/**
 * Submit a form. Returns { ok, fallback } or throws.
 * - Honeypot field `company_url` must stay empty (anti-spam).
 */
export async function submitForm(data, { subject } = {}) {
  // Honeypot: silently "succeed" so bots get no signal.
  if (data.company_url) return { ok: true, fallback: false };

  if (FORM_ENDPOINT) {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: toFormData(data, subject),
    });
    if (!res.ok) throw new Error("submit_failed");
    return { ok: true, fallback: false };
  }

  // No backend configured → mailto fallback.
  const lines = Object.entries(data)
    .filter(([k, v]) => k !== "company_url" && v)
    .map(([k, v]) => `${LABELS[k] || k} : ${v}`);
  const body = encodeURIComponent(lines.join("\n"));
  const subj = encodeURIComponent(subject || "Demande via le site");
  window.location.href = `${COMPANY.emailHref}?subject=${subj}&body=${body}`;
  return { ok: true, fallback: true };
}

function toFormData(data, subject) {
  const fd = new FormData();
  Object.entries(data).forEach(([k, v]) => {
    if (k !== "company_url" && v != null) fd.append(k, v);
  });
  if (subject) fd.append("_subject", subject);
  return fd;
}

const LABELS = {
  name: "Nom",
  company: "Société",
  phone: "Téléphone",
  email: "E-mail",
  message: "Message",
  location: "Localisation du projet",
  need: "Description du besoin",
};
