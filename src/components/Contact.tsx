import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Magnetic } from "./Magnetic";

const projectTypes = ["Music Video", "Streetwear Brand", "Event", "Portrait"];
const budgets = ["< $1k", "$1k–3k", "$3k–8k", "$8k +"];

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  projectType: z.string().min(1, "Pick a project type"),
  budget: z.string().min(1, "Pick a budget"),
  message: z.string().trim().min(10, "Add a few details").max(1000),
});

const socials = [
  { label: "Instagram", href: "https://instagram.com/lonemargielaa", handle: "@lonemargielaa" },
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
      toast.success("Message sent. I'll get back to you within 48h.");
    }, 800);
  };

  return (
    <section id="contact" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">04 — Booking</p>
          <h2 className="display-title mt-3 text-[clamp(2.6rem,9vw,7rem)]">
            Let's
            <br />
            <span className="text-acid">collaborate</span>?
          </h2>
          <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            A music video, a brand shoot or an event to immortalize? Describe
            your project and I'll get back to you fast.
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
          <Field label="Name">
            <input name="name" type="text" maxLength={80} className={inputCls} placeholder="Your name / project" />
          </Field>
          <Field label="Email">
            <input name="email" type="email" maxLength={160} className={inputCls} placeholder="you@email.com" />
          </Field>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Project type
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
            <textarea name="message" rows={4} maxLength={1000} className={inputCls} placeholder="Tell me about your project..." />
          </Field>

          <Magnetic strength={0.3}>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-acid px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-acid-foreground transition-shadow hover:shadow-[0_0_40px_-6px_var(--acid)] disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send request"}
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
