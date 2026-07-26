import { useEffect } from "react";

const SITE = "Les Clés Solaires";
const BASE_URL = "https://www.les-cles-solaires.fr";

/**
 * Set document <title>, meta description, canonical, <html lang> and
 * hreflang alternates per page.
 * @param {string} path  canonical French app path (e.g. "/pieux"); the EN
 *                       alternate is derived by prefixing "/en".
 * @param {"fr"|"en"} lang current language.
 */
export function useSeo({ title, description, path = "/", lang = "fr" }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : SITE;
    document.documentElement.setAttribute("lang", lang);

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [, name] = selector.match(/\[(?:name|property)="(.+)"\]/) || [];
        if (selector.includes("property")) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
    }
    setMeta('meta[property="og:title"]', "content", title ? `${title} | ${SITE}` : SITE);
    setMeta('meta[property="og:locale"]', "content", lang === "en" ? "en_GB" : "fr_FR");

    const frUrl = `${BASE_URL}${path === "/" ? "" : path}`;
    const enUrl = `${BASE_URL}/en${path === "/" ? "" : path}`;
    const selfUrl = lang === "en" ? enUrl : frUrl;

    const setLink = (rel, href, hreflang) => {
      const sel = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let el = document.head.querySelector(sel);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        if (hreflang) el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setLink("canonical", selfUrl);
    setLink("alternate", frUrl, "fr");
    setLink("alternate", enUrl, "en");
    setLink("alternate", frUrl, "x-default");
  }, [title, description, path, lang]);
}

/** Add `.is-visible` to `.reveal` elements as they scroll into view. */
export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
