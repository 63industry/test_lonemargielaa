"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/use-parallax";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import tk8 from "@/assets/tk-8.webp";
import tk5 from "@/assets/tk-5.webp";
import tk7 from "@/assets/tk-7.webp";
import tk4 from "@/assets/tk-4.webp";
import type { StaticImageData } from "next/image";

export function RecentWork() {
  const p = useParallax(0.06);
  const { lang } = useLang();

  return (
    <section id="recent" className="relative overflow-hidden border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
            {t.recent.label[lang]}
          </p>
          <h2
            ref={p.ref as React.Ref<HTMLHeadingElement>}
            style={{ transform: `translateY(${p.offset}px)` }}
            className="display-title text-[clamp(2.4rem,8vw,6rem)]"
          >
            {t.recent.title[lang]} <span className="text-stroke">{t.recent.title2[lang]}</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-3">
          {/* Housmatikee — video, big */}
          <article className="group relative col-span-2 row-span-3 overflow-hidden border border-border aspect-square sm:aspect-auto">
            <video
              src="/extr1.webm"
              autoPlay
              muted
              loop
              playsInline
              poster={tk7.src}
              className="block h-full w-full object-cover contrast-125 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-display text-3xl uppercase tracking-tight sm:text-5xl">
                Housmatikee
              </p>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid">
                12 (feat. HaitienBourgeois)
              </p>
            </div>
          </article>

          {/* Shanks — video, wide */}
          <article className="group relative col-span-2 overflow-hidden border border-border aspect-[2/1]">
            <video
              src="/extr3.webm"
              autoPlay
              muted
              loop
              playsInline
              poster={tk4.src}
              className="block h-full w-full object-cover contrast-125 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-display text-lg uppercase tracking-tight">Shanks</p>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid">
                À La Télé
              </p>
            </div>
          </article>

          {/* Expressway — photo, wide */}
          <article className="group relative col-span-2 overflow-hidden border border-border aspect-[2/1]">
            <Image
              src={tk8}
              alt="Expressway"
              width={1200}
              height={600}
              className="h-full w-full object-cover contrast-125 brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-display text-lg uppercase tracking-tight">Expressway</p>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid">
                Cityscape
              </p>
            </div>
          </article>

          {/* Shutokō — photo, wide */}
          <article className="group relative col-span-2 overflow-hidden border border-border aspect-[2/1]">
            <Image
              src={tk5}
              alt="Shutokō"
              width={1200}
              height={600}
              className="h-full w-full object-cover contrast-125 brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-display text-lg uppercase tracking-tight">Shutokō</p>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid">
                Aerial / Night
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
