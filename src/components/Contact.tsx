"use client";

import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Magnetic } from "./Magnetic";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";

const socials = [
  { label: "Instagram", href: "https://instagram.com/lonemargielaa", handle: "@lonemargielaa" },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=97lonemargielaa@gmail.com",
    handle: "97lonemargielaa@gmail.com",
  },
];

export function Contact() {
  const [projectType, setProjectType] = useState("");

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLang();

  const projectTypes = t.contact.types[lang];

  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(2, lang === "fr" ? "Nom requis" : "Name is required")
      .max(80),
    email: z
      .string()
      .trim()
      .email(lang === "fr" ? "Email invalide" : "Invalid email")
      .max(160),
    projectType: z
      .string()
      .min(1, lang === "fr" ? "Choisis un type de projet" : "Pick a project type"),

    message: z
      .string()
      .trim()
      .min(10, lang === "fr" ? "Ajoute quelques détails" : "Add a few details")
      .max(1000),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      projectType,

      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    setSending(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...data,
      }).toString(),
    })
      .then(() => {
        setSending(false);
        form.reset();
        setProjectType("");
        setSubmitted(true);
      })
      .catch(() => {
        setSending(false);
        toast.error(lang === "fr" ? "Erreur, réessaie." : "Something went wrong, try again.");
      });
  };

  return (
    <section id="contact" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
            {t.contact.label[lang]}
          </p>
          <h2 className="display-title mt-3 text-[clamp(2.6rem,9vw,7rem)]">
            {t.contact.title1[lang]}
            <br />
            <span className="text-acid">{t.contact.title2[lang]}</span>?
          </h2>
          <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            {t.contact.desc[lang]}
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

        {submitted ? (
          <div className="flex flex-col justify-center border border-border p-10 gap-6">
            <p className="font-display text-5xl uppercase tracking-tight text-acid">
              {lang === "fr" ? "Reçu ✓" : "Received ✓"}
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              {lang === "fr"
                ? "Message bien reçu. Je te réponds dans les 48h."
                : "Your message is in. I'll get back to you within 48h."}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="self-start border border-border px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-acid hover:text-acid"
            >
              {lang === "fr" ? "Nouveau message" : "Send another"}
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            name="contact"
            data-netlify="true"
            className="flex flex-col gap-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="projectType" value={projectType} />
            <Field label={t.contact.name[lang]}>
              <input
                name="name"
                type="text"
                maxLength={80}
                className={inputCls}
                placeholder={t.contact.namePh[lang]}
              />
            </Field>
            <Field label={t.contact.email[lang]}>
              <input
                name="email"
                type="email"
                maxLength={160}
                className={inputCls}
                placeholder="you@email.com"
              />
            </Field>

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.contact.type[lang]}
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                      projectType === type
                        ? "bg-acid text-acid-foreground"
                        : "border border-border text-muted-foreground hover:border-acid"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <Field label={t.contact.message[lang]}>
              <textarea
                name="message"
                rows={4}
                maxLength={1000}
                className={inputCls}
                placeholder={t.contact.msgPh[lang]}
              />
            </Field>

            <Magnetic strength={0.3}>
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-acid px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-acid-foreground transition-shadow hover:shadow-[0_0_40px_-6px_var(--acid)] disabled:opacity-60"
              >
                {sending ? t.contact.sending[lang] : t.contact.send[lang]}
              </button>
            </Magnetic>
          </form>
        )}
      </div>
    </section>
  );
}

const inputCls =
  "mt-3 w-full border border-border bg-card px-4 py-3 font-sans text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-acid";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
