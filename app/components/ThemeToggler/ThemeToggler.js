"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IconSunHigh, IconMoon } from "@tabler/icons";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
      className="flex items-center justify-center p-2 text-[var(--socials-buttons)] hover:text-[var(--foreground)] transition-colors duration-150 rounded"
    >
      {theme === "light" ? <IconSunHigh className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
    </button>
  );
};