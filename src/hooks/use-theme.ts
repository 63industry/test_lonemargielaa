"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  // null = not yet initialized (prevents writing localStorage before reading DOM)
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (dark === null) return;
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark: dark ?? true, toggle: () => setDark((v) => !(v ?? true)) };
}
