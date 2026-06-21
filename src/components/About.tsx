import aboutPortrait from "@/assets/about-portrait.jpg";

const stats = [
  { num: "120+", label: "Clips réalisés" },
  { num: "60+", label: "Marques" },
  { num: "8 ans", label: "Sur le terrain" },
];

const collabs = ["Corteiz", "Trapland", "Booska-P", "Wrung", "Sneakers FR", "Hood Sessions"];

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden border border-border">
            <img
              src={aboutPortrait}
              alt="Portrait du directeur créatif"
              loading="lazy"
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
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">03 — About</p>
          <h2 className="display-title mt-3 text-[clamp(2.2rem,7vw,5rem)]">
            L'œil derrière
            <br />
            <span className="text-stroke-acid">le chaos</span>
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Basé à Paris, je travaille avec des rappeurs émergents, des labels
            indépendants et des marques streetwear pour donner une image à leur
            son. Lumière dure, contrastes profonds, mouvement — chaque frame
            raconte la rue.
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

          <div className="mt-8 flex flex-wrap gap-2">
            {collabs.map((c) => (
              <span
                key={c}
                className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:border-acid hover:text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
