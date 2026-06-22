"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "./i18n";

type LangCtx = { lang: Lang; toggle: () => void };

const Ctx = createContext<LangCtx>({ lang: "en", toggle: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  // Always start with "en" to match SSR — sync from localStorage after mount
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) setLang(saved);
  }, []);

  const toggle = () =>
    setLang((v) => {
      const next = v === "en" ? "fr" : "en";
      localStorage.setItem("lang", next);
      return next;
    });

  return <Ctx.Provider value={{ lang, toggle }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
