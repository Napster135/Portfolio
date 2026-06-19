"use client";

import { useEffect, useState } from "react";
import { IconArrowBarToDown, IconCode } from "@tabler/icons";
import { SocialsIcons } from "./SocialsIcons";
import { useLanguage } from "../context/LanguageContext";

export const PanelHero = () => {
  const { t } = useLanguage();
  const role = t("hero.role");
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
  }, [role]);

  useEffect(() => {
    if (displayed.length >= role.length) return;
    const timeout = setTimeout(
      () => setDisplayed(role.slice(0, displayed.length + 1)),
      70
    );
    return () => clearTimeout(timeout);
  }, [displayed, role]);

  return (
    <section
      id="panelHero"
      className="lg:hidden u-center h-screen w-full flex items-center justify-center relative"
    >
      <div className="flex flex-col-reverse justify-center items-center h-full">
        <ul className="absolute lg:left-10 bottom-10 lg:flex-col flex gap-5 lg:gap-3 lg:bottom-0">
          <SocialsIcons />
        </ul>

        <div className="flex flex-col sm:flex-row gap-3 mt-10 w-full items-center justify-center">
          <a
            href="#misProyectos"
            className="bg-[var(--bg-buttons)] text-[var(--text-buttons)] rounded-lg flex items-center gap-2 justify-center h-12 px-6 font-semibold hover:opacity-90 transition-opacity duration-150"
          >
            <IconCode className="h-4 w-4" />
            {t("hero.viewProjects")}
          </a>
          <a
            href="https://drive.google.com/file/d/1ZUEV4H0dpKoODMpbP6tLbgkOOLszx4uK/view?usp=drive_link"
            className="border border-[var(--text-secondary)] text-[var(--foreground)] rounded-lg flex items-center gap-2 justify-center h-12 px-6 font-semibold hover:border-[var(--bg-buttons)] transition-colors duration-150"
            target="_blank"
            rel="noreferrer"
          >
            <IconArrowBarToDown className="h-4 w-4" />
            {t("hero.downloadCV")}
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] border border-[var(--bg-hover)] rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t("hero.available")}
          </span>

          <h1 className="text-6xl md:text-9xl font-bold flex flex-col items-center text-[var(--foreground)] leading-none tracking-tight mb-3">
            Victor
            <span>Pacheco.</span>
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-[var(--foreground)] min-h-[2.5rem] mb-8">
            {displayed}
            {displayed.length < role.length && (
              <span className="opacity-60">|</span>
            )}
          </p>

          <p className="text-base md:text-lg text-[var(--text-secondary)] text-center max-w-lg leading-relaxed">
            {t("hero.tagline")}
          </p>
        </div>
      </div>
    </section>
  );
};
