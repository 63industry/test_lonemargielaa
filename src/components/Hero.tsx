import { Magnetic } from "./Magnetic";
import { useParallax } from "@/hooks/use-parallax";
import chromeLens from "@/assets/chrome-lens.png";
import vinyl from "@/assets/vinyl.png";
import heroMain from "@/assets/hero-main.jpg";

export function Hero() {
  const lens = useParallax(0.08);
  const disc = useParallax(0.12);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      {/* floating 3D objects */}
      <img
        ref={lens.ref as React.Ref<HTMLImageElement>}
        src={chromeLens}
        alt=""
        aria-hidden
        style={{ transform: `translateY(${lens.offset}px)` }}
        className="float-slow pointer-events-none absolute -right-10 top-24 w-48 opacity-90 sm:right-10 sm:w-72 lg:w-96"
      />
      <img
        ref={disc.ref as React.Ref<HTMLImageElement>}
        src={vinyl}
        alt=""
        aria-hidden
        style={{ transform: `translateY(${disc.offset}px)` }}
        className="spin-vinyl pointer-events-none absolute -left-16 bottom-10 w-44 opacity-40 sm:left-2 sm:w-64"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-acid">
          Photographer / Videographer — Paris
        </p>

        <h1 className="display-title mt-6 text-[clamp(3.2rem,14vw,12rem)]">
          Creative
          <br />
          <span className="text-stroke-acid">Director</span>
          <span className="text-acid"> //</span>
          <br />
          Urban Visuals
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-md font-sans text-base text-muted-foreground sm:text-lg">
            Je capture l'énergie brute du streetwear, des clips de rap et de la
            culture urbaine. Des visuels qui frappent fort, pour les artistes et
            les marques qui n'ont pas peur du noir.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Magnetic strength={0.45}>
              <a
                href="#contact"
                className="inline-block bg-acid px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-acid-foreground"
              >
                Réserver un shoot
              </a>
            </Magnetic>
            <Magnetic strength={0.45}>
              <a
                href="#showcase"
                className="inline-block border border-border px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-acid hover:text-acid"
              >
                Voir le portfolio
              </a>
            </Magnetic>
          </div>
        </div>

        {/* dynamic image strip */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { src: heroMain, h: "aspect-[3/4]" },
          ].map((_, i) => null)}
        </div>
      </div>
    </section>
  );
}
