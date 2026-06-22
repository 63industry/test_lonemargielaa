"use client";

import Image from "next/image";
import { Magnetic } from "./Magnetic";
import { useParallax } from "@/hooks/use-parallax";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import chromeLens from "@/assets/chrome-lens.png";
import vinyl from "@/assets/vinyl.png";
import lonemLogo from "@/assets/lonem-logo.png";
import heroPoster from "@/assets/tk-2.webp";

export function Hero() {
  const lens = useParallax(0.08);
  const disc = useParallax(0.12);
  const { lang } = useLang();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <div
        ref={lens.ref as React.Ref<HTMLDivElement>}
        aria-hidden
        style={{ transform: `translateY(${lens.offset}px)` }}
        className="float-slow pointer-events-none absolute -right-10 top-24 w-48 opacity-90 sm:right-10 sm:w-72 lg:w-96"
      >
        <Image src={chromeLens} alt="" className="h-auto w-full" />
      </div>
      <div
        ref={disc.ref as React.Ref<HTMLDivElement>}
        aria-hidden
        style={{ transform: `translateY(${disc.offset}px)` }}
        className="spin-vinyl pointer-events-none absolute -left-16 bottom-10 w-44 opacity-40 sm:left-2 sm:w-64"
      >
        <Image src={vinyl} alt="" className="h-auto w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-acid">
          {t.hero.tagline[lang]}
        </p>

        <Image
          src={lonemLogo}
          alt="LONEMARGIELAA"
          className="mt-7 block h-auto w-[min(44rem,88%)] invert dark:invert-0"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-md font-sans text-base text-muted-foreground sm:text-lg">
            {t.hero.desc[lang]}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Magnetic strength={0.45}>
              <a
                href="#contact"
                className="inline-block bg-acid px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-acid-foreground"
              >
                {t.hero.cta1[lang]}
              </a>
            </Magnetic>
            <Magnetic strength={0.45}>
              <a
                href="#showcase"
                className="inline-block border border-border px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-acid hover:text-acid"
              >
                {t.hero.cta2[lang]}
              </a>
            </Magnetic>
          </div>
        </div>

        <a
          href="#showcase"
          className="mt-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-acid"
        >
          <span className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5">
            <span className="h-2 w-0.5 animate-bounce bg-acid" />
          </span>
          Scroll
        </a>

        <div className="relative mt-8 overflow-hidden border border-border">
          <video
            src="/shanks-freestyle.webm"
            autoPlay
            muted
            loop
            playsInline
            poster={heroPoster.src}
            className="block h-[42vh] w-full object-cover object-[center_25%] sm:h-[55vh]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 to-transparent to-45%" />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="font-display text-3xl uppercase tracking-tight">Shanks</p>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid">
              Freestyle Armageddon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
