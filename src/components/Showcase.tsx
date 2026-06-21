import { useState } from "react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work4 from "@/assets/work-4.jpg";

type Kind = "all" | "photo" | "video";

interface Item {
  src: string;
  title: string;
  tag: string;
  kind: "photo" | "video";
  span?: string;
  w: number;
  h: number;
}

const items: Item[] = [
  { src: work3, title: "Lil Vyper — Portrait", tag: "Editorial", kind: "photo", w: 900, h: 1200, span: "row-span-2" },
  { src: work2, title: "Live @ Trabendo", tag: "Clip / Live", kind: "video", w: 1200, h: 900 },
  { src: work1, title: "FW Lookbook", tag: "Streetwear", kind: "photo", w: 900, h: 1200 },
  { src: work6, title: "On Set — Music Video", tag: "Clip Rap", kind: "video", w: 1200, h: 1200, span: "row-span-2" },
  { src: work5, title: "Grail Product", tag: "Brand", kind: "photo", w: 1200, h: 900 },
  { src: work4, title: "Nightwalk — Visual", tag: "Lifestyle", kind: "video", w: 1200, h: 1500 },
];

const filters: { id: Kind; label: string }[] = [
  { id: "all", label: "Tout" },
  { id: "photo", label: "Photo" },
  { id: "video", label: "Vidéo" },
];

export function Showcase() {
  const [active, setActive] = useState<Kind>("all");
  const shown = items.filter((i) => active === "all" || i.kind === active);

  return (
    <section id="showcase" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">01 — Portfolio</p>
            <h2 className="display-title mt-3 text-[clamp(2.4rem,8vw,6rem)]">Showcase</h2>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                active === f.id
                  ? "bg-acid text-acid-foreground"
                  : "border border-border text-muted-foreground hover:border-acid hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid auto-rows-[230px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden border border-border ${item.span ?? ""}`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                width={item.w}
                height={item.h}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90" />

              {item.kind === "video" && (
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-acid bg-background/40 text-acid backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor">
                      <path d="M0 0l20 11L0 22z" />
                    </svg>
                  </span>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <p className="font-display text-xl uppercase tracking-tight">{item.title}</p>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid">
                    {item.tag}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
