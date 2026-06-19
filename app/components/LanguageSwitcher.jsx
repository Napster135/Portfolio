"use client";

import { useLanguage } from "../context/LanguageContext";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-1 text-xs font-semibold">
      <button
        onClick={() => setLang("en")}
        aria-label="Switch to English"
        className={`transition-colors duration-150 ${
          lang === "en"
            ? "text-[var(--foreground)]"
            : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
        }`}
      >
        EN
      </button>
      <span className="text-[var(--text-secondary)] opacity-40">/</span>
      <button
        onClick={() => setLang("es")}
        aria-label="Cambiar a Español"
        className={`transition-colors duration-150 ${
          lang === "es"
            ? "text-[var(--foreground)]"
            : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
        }`}
      >
        ES
      </button>
    </div>
  );
};
