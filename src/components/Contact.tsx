import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Magnetic } from "./Magnetic";

const projectTypes = ["Music Video", "Streetwear Brand", "Event", "Portrait"];
const budgets = ["< $1k", "$1k–3k", "$3k–8k", "$8k +"];

const schema = z.object({
  name: z.string().trim().min(2, "Nom requis").max(80),
  email: z.string().trim().email("Email invalide").max(160),
  projectType: z.string().min(1, "Choisis un type"),
  budget: z.string().min(1, "Choisis un budget"),
  message: z.string().trim().min(10, "Donne quelques détails").max(1000),
});

const socials = [
  { label: "Instagram", href: "https://instagram.com", handle: "@noir.frame" },
  { label: "YouTube", href: "https://youtube.com", handle: "/noirframe" },
  { label: "TikTok", href: "https://tiktok.com", handle: "@noir.frame" },
];

export function Contact() {
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      projectType,
      budget,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      setProjectType("");
      setBudget("");
      toast.success("Message envoyé. Je te recontacte sous 48h.");
    }, 800);
  };

  return (
    <section id="contact" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">04 — Booking</p>
          <h2 className="display-title mt-3 text-[clamp(2.6rem,9vw,7rem)]">
            On
            <br />
            <span className="text-acid">collabore</span>?
          </h2>
          <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            Un clip, un shooting marque ou un événement à immortaliser ? Décris
            ton projet, je reviens vers toi rapidement.
          </p>

          <div className="mt-10 space-y-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover-slide group flex items-center justify-between border-b border-border py-4"
              >
                <span className="hover-slide font-display text-2xl uppercase tracking-tight sm:text-4xl">
                  <span>{s.label}</span>
                  <span data-clone className="text-acid">
                    {s.label}
                  </span>
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-acid">
                  {s.handle} ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Field label="Nom">
            <input name="name" type="text" maxLength={80} className={inputCls} placeholder="Ton nom / projet" />
          </Field>
          <Field label="Email">
            <input name="email" type="email" maxLength={160} className={inputCls} placeholder="toi@email.com" />
          </Field>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Type de projet
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {projectTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setProjectType(t)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                    projectType === t
                      ? "bg-acid text-acid-foreground"
                      : "border border-border text-muted-foreground hover:border-acid"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Budget
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBudget(b)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                    budget === b
                      ? "bg-acid text-acid-foreground"
                      : "border border-border text-muted-foreground hover:border-acid"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <Field label="Message">
            <textarea name="message" rows={4} maxLength={1000} className={inputCls} placeholder="Parle-moi de ton projet..." />
          </Field>

          <Magnetic strength={0.3}>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-acid px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-acid-foreground transition-shadow hover:shadow-[0_0_40px_-6px_var(--acid)] disabled:opacity-60"
            >
              {sending ? "Envoi..." : "Envoyer la demande"}
            </button>
          </Magnetic>
        </form>
      </div>
    </section>
  );
}

const inputCls =
  "mt-3 w-full border border-border bg-card px-4 py-3 font-sans text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-acid";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
