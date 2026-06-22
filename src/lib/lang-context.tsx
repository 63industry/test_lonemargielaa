"use client";

import { createContext, useContext, useState } from "react";
import type { Lang } from "./i18n";

type LangCtx = { lang: Lang; toggle: () => void };

const Ctx = createContext<LangCtx>({ lang: "en", toggle: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem("lang") as Lang) ?? "en";
  });

  const toggle = () =>
    setLang((v) => {
      const next = v === "en" ? "fr" : "en";
      localStorage.setItem("lang", next);
      return next;
    });

  return <Ctx.Provider value={{ lang, toggle }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
