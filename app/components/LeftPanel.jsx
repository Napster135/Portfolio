"use client";

import { useEffect, useState } from "react";
import { IconArrowBarToDown } from "@tabler/icons";
import { SocialsIcons } from "./SocialsIcons";
import { ThemeToggler } from "./ThemeToggler/ThemeToggler";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const navIds = [
  { key: "nav.about", href: "#sobreMi", id: "sobreMi" },
  { key: "nav.projects", href: "#misProyectos", id: "misProyectos" },
  { key: "nav.stack", href: "#skills", id: "skills" },
  { key: "nav.services", href: "#servicios", id: "servicios" },
];

export const LeftPanel = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("sobreMi");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -65% 0px" }
    );

    navIds.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex flex-col justify-between sticky top-0 h-screen py-12 px-8 xl:px-14">
      <div>
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-[var(--foreground)] leading-none tracking-tight">
            Victor
          </h1>
          <h1 className="text-4xl font-bold text-[var(--foreground)] leading-none tracking-tight mb-2">
            Pacheco.
          </h1>
          <p className="text-base font-semibold text-[var(--foreground)] mb-3">
            {t("leftPanel.role")}
          </p>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[240px]">
            {t("leftPanel.tagline")}
          </p>
        </div>

        <span className="inline-flex items-center gap-2 text-xs text-[var(--text-secondary)] border border-[var(--bg-hover)] rounded-full px-3 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {t("leftPanel.available")}
        </span>

        <nav aria-label="Portfolio sections">
          <ul className="flex flex-col gap-0.5">
            {navIds.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href} className="flex items-center gap-3">
                  <span
                    className={`flex-shrink-0 w-0.5 h-3.5 rounded-full transition-all duration-200 ${
                      isActive ? "bg-[var(--bg-buttons)]" : "bg-transparent"
                    }`}
                  />
                  <a
                    href={link.href}
                    className={`py-1.5 text-sm font-semibold transition-colors duration-150 ${
                      isActive
                        ? "text-[var(--foreground)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {t(link.key)}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <a
          href="https://drive.google.com/file/d/1ZUEV4H0dpKoODMpbP6tLbgkOOLszx4uK/view?usp=drive_link"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-150"
          target="_blank"
          rel="noreferrer"
        >
          <IconArrowBarToDown className="h-3.5 w-3.5" />
          {t("leftPanel.downloadCV")}
        </a>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            <SocialsIcons />
          </ul>
          <ThemeToggler />
          <LanguageSwitcher />
        </div>
      </div>
    </aside>
  );
};
