import { useLang } from "../i18n.jsx";
import { COMPANY } from "../data/site.js";
import "./WhatsAppFab.css";

/* Brand glyph — filled, unlike the stroke icons in lib/icons.jsx. */
const IconWhatsApp = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43l-.48-.01c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.21.89 2.39 1.01 2.55.12.17 1.74 2.67 4.22 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.14-1.19-.06-.11-.22-.17-.47-.29Z" />
  </svg>
);

/**
 * Floating WhatsApp button, mounted once in App so it shows on every page.
 * The label expands on hover/focus at desktop widths; icon-only on phones.
 */
export default function WhatsAppFab() {
  const { t } = useLang();
  const message = t(
    "Bonjour Les Clés Solaires, je souhaite des informations sur vos pieux, structures et chevrons.",
    "Hello Les Clés Solaires, I would like information about your piles, structures and rafters."
  );
  const href = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
  const label = t("Écrire sur WhatsApp", "Message us on WhatsApp");

  return (
    <a
      className="wa-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <IconWhatsApp className="wa-fab__icon" />
      <span className="wa-fab__label">{t("WhatsApp", "WhatsApp")}</span>
    </a>
  );
}
