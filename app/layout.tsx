import type { Metadata } from "next";
import { Anton, Space_Grotesk, Space_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--next-font-display",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--next-font-sans",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--next-font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LONEMARGIELAA — Streetwear Photographer & Videographer / Rap Visuals",
  description:
    "Creative director, photographer and videographer based in Fribourg (CH). Rap music videos, streetwear lookbooks, artist portraits and urban visuals. Book a shoot or a video.",
  openGraph: {
    title: "LONEMARGIELAA",
    description:
      "Streetwear & rap photographer and videographer. Raw, high-contrast, underground visuals.",
    type: "website",
  },
};

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&d))document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="grain">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
