"use client";

import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Showcase } from "@/components/Showcase";
import { RecentWork } from "@/components/RecentWork";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";

export default function Home() {
  const { lang } = useLang();

  return (
    <main className="relative">
      <SiteNav />
      <Hero />
      <Marquee items={t.marquee[lang]} className="border-y border-border py-6" />
      <Showcase />
      <RecentWork />
      <About />
      <Contact />
      <Footer />
      <Toaster position="top-center" theme="dark" />
    </main>
  );
}
