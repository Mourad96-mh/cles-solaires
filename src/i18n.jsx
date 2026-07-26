/* eslint-disable react-refresh/only-export-components -- shared i18n context + helpers live together by design */
import { createContext, useContext } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";

/* ------------------------------------------------------------------ *
 * Lightweight bilingual layer (FR default at "/", EN under "/en/*").
 * No external i18n library — pure React context.
 * ------------------------------------------------------------------ */

const LangContext = createContext("fr");

/** Detect language from the URL and expose it to the tree. */
export function LangProvider({ children }) {
  const { pathname } = useLocation();
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

/** Prefix an app path with the current locale ("/pieux" -> "/en/pieux"). */
export function localizePath(path, lang) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === "en") return clean === "/" ? "/en" : `/en${clean}`;
  return clean;
}

/** Strip the "/en" prefix from a pathname to get the canonical FR path. */
export function stripLocale(pathname) {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname;
}

export function useLang() {
  const lang = useContext(LangContext);
  return {
    lang,
    /** Pick between a French and an English value. */
    t: (fr, en) => (lang === "en" ? en : fr),
    /** Localize an app path for the current language. */
    lp: (path) => localizePath(path, lang),
  };
}

/** <Link> that automatically localizes its `to` for the current language. */
export function L({ to, ...rest }) {
  const lang = useContext(LangContext);
  return <Link to={localizePath(to, lang)} {...rest} />;
}

/** <NavLink> variant that localizes `to`. */
export function LNav({ to, ...rest }) {
  const lang = useContext(LangContext);
  return <NavLink to={localizePath(to, lang)} {...rest} />;
}
