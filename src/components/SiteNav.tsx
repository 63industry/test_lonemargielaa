"use client";

import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";
import { useTheme } from "@/hooks/use-theme";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();
  const { lang, toggle: toggleLang } = useLang();

  const links = [
    { label: t.nav.work[lang], href: "#showcase" },
    { label: t.nav.recent[lang], href: "#recent" },
    { label: t.nav.about[lang], href: "#about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between sm:px-8">
        <a href="#top" className="min-w-0 font-display text-xl uppercase tracking-tight">
          LONEMARGIELAA
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-acid"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-acid"
          >
            {dark ? "☾ Dark" : "☀ Light"}
          </button>
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="text-base transition-opacity hover:opacity-70"
          >
            {lang === "en" ? "🇬🇧" : "🇫🇷"}
          </button>
          <Magnetic strength={0.5}>
            <a
              href="#contact"
              className="inline-block bg-acid px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid-foreground transition-shadow hover:shadow-[0_0_30px_-4px_var(--acid)]"
            >
              {t.nav.book[lang]}
            </a>
          </Magnetic>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="justify-self-end font-mono text-xs uppercase tracking-[0.2em] text-foreground sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4 sm:hidden">
          {[...links, { label: t.nav.book[lang], href: "#contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-display text-3xl uppercase tracking-tight text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
