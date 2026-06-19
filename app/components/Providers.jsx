"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../context/LanguageContext";

export const Providers = ({ children }) => (
  <ThemeProvider attribute="data-theme">
    <LanguageProvider>{children}</LanguageProvider>
  </ThemeProvider>
);
