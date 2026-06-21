import { useState } from "react";
import tk11 from "@/assets/tk-11.jpg";
import tk10 from "@/assets/tk-10.jpg";
import tk12 from "@/assets/tk-12.jpg";
import tk13 from "@/assets/tk-13.jpg";
import tk1 from "@/assets/tk-1.jpg";
import tk6 from "@/assets/tk-6.jpg";

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
  { src: tk11, title: "After Hours", tag: "Portrait", kind: "photo", w: 900, h: 1200, span: "row-span-2" },
  { src: tk10, title: "Yokochō", tag: "Night Street", kind: "video", w: 1200, h: 900 },
  { src: tk12, title: "Wu-World", tag: "Streetwear", kind: "photo", w: 900, h: 1200 },
  { src: tk13, title: "Backstreets", tag: "Night Visual", kind: "video", w: 1200, h: 1200, span: "row-span-2" },
  { src: tk1, title: "Lowered", tag: "Car Culture", kind: "photo", w: 1200, h: 900 },
  { src: tk6, title: "Karaoke-Kan", tag: "Cityscape", kind: "video", w: 1200, h: 1500 },
];

const filters: { id: Kind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "photo", label: "Photo" },
  { id: "video", label: "Video" },
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
