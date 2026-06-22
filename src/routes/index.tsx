import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Showcase } from "@/components/Showcase";
import { RecentWork } from "@/components/RecentWork";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LangProvider, useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LONEMARGIELAA — Streetwear Photographer & Videographer / Rap Visuals" },
      {
        name: "description",
        content:
          "Creative director, photographer and videographer based in Fribourg (CH). Rap music videos, streetwear lookbooks, artist portraits and urban visuals. Book a shoot or a video.",
      },
      { property: "og:title", content: "LONEMARGIELAA" },
      {
        property: "og:description",
        content:
          "Streetwear & rap photographer and videographer. Raw, high-contrast, underground visuals.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function IndexInner() {
  const { lang } = useLang();
  return (
    <main className="relative">
      <SiteNav />
      <Hero />
      <Marquee
        items={t.marquee[lang]}
        className="border-y border-border py-6"
      />
      <Showcase />
      <RecentWork />
      <About />
      <Contact />
      <Footer />
      <Toaster position="top-center" theme="dark" />
    </main>
  );
}

function Index() {
  return (
    <LangProvider>
      <IndexInner />
    </LangProvider>
  );
}
