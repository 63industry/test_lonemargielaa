"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  // Start with true (dark) for SSR, then sync with DOM after mount
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // The inline script in layout.tsx already set the correct class —
    // read it directly from the DOM instead of duplicating localStorage logic
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, toggle: () => setDark((v) => !v) };
}
