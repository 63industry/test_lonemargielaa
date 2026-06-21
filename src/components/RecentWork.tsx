import { useParallax } from "@/hooks/use-parallax";
import work4 from "@/assets/work-4.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work5 from "@/assets/work-5.jpg";

export function RecentWork() {
  const p = useParallax(0.06);

  return (
    <section id="recent" className="relative overflow-hidden border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">02 — Latest drops</p>
          <h2
            ref={p.ref as React.Ref<HTMLHeadingElement>}
            style={{ transform: `translateY(${p.offset}px)` }}
            className="display-title text-[clamp(2.4rem,8vw,6rem)]"
          >
            Projets <span className="text-stroke">récents</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-2">
          <Tile className="col-span-2 row-span-2 aspect-square sm:aspect-auto" src={work4} w={1200} h={1500} title="Neon Nights" sub="Série lifestyle urbaine" big />
          <Tile className="aspect-square" src={work3} w={900} h={1200} title="Cold Gaze" sub="Portrait" />
          <Tile className="aspect-square" src={work5} w={1200} h={900} title="Grails" sub="Brand" />
          <Tile className="col-span-2 aspect-[2/1]" src={work2} w={1200} h={900} title="Mainstage" sub="Concert / Clip" />
        </div>
      </div>
    </section>
  );
}

function Tile({
  src,
  title,
  sub,
  className,
  big,
  w,
  h,
}: {
  src: string;
  title: string;
  sub: string;
  className?: string;
  big?: boolean;
  w: number;
  h: number;
}) {
  return (
    <article className={`group relative overflow-hidden border border-border ${className ?? ""}`}>
      <img
        src={src}
        alt={title}
        loading="lazy"
        width={w}
        height={h}
        className="h-full w-full object-cover contrast-125 brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className={`font-display uppercase tracking-tight ${big ? "text-3xl sm:text-5xl" : "text-lg"}`}>
          {title}
        </p>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid">{sub}</p>
      </div>
    </article>
  );
}
