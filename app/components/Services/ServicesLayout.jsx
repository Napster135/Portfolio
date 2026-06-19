"use client";

import { useLanguage } from "../../context/LanguageContext";

export const ServicesLayout = () => {
  const { t } = useLanguage();
  const items = t("services.items");

  return (
    <section className="u-center w-full" id="servicios">
      <div className="w-full pt-4 border-t-2 border-[var(--bg-hover)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)]">
          {t("services.sectionLabel")}
        </p>
      </div>

      <ul className="mt-4 grid md:grid-cols-2 gap-2">
        {items.map((service, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg border border-[var(--bg-hover)] hover:border-[var(--bg-buttons)] transition-colors duration-200"
          >
            <span className="text-[var(--bg-buttons)] font-bold text-xs leading-none flex-shrink-0">→</span>
            <span className="text-sm">{service}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
