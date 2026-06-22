"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import aboutPortrait from "@/assets/tk-3.webp";

export function About() {
  const { lang } = useLang();

  const stats = [{ num: "100+", label: t.about.stat1[lang] }];

  return (
    <section id="about" className="relative border-t border-border py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden border border-border">
            <Image
              src={aboutPortrait}
              alt="Portrait of the creative director"
              width={1000}
              height={1200}
              className="w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-4 -right-4 hidden bg-acid px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid-foreground sm:block">
            Est. 2017
          </span>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
            {t.about.label[lang]}
          </p>
          <h2 className="display-title mt-3 text-[clamp(2.2rem,7vw,5rem)]">
            {t.about.title1[lang]}
            <br />
            <span className="text-stroke-acid">{t.about.title2[lang]}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            {t.about.desc[lang]}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-acid sm:text-5xl">{s.num}</p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
