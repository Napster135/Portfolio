"use client";

import { TimeLine } from "./TimeLine";
import { useLanguage } from "../../context/LanguageContext";

export const AboutMe = () => {
  const { t } = useLanguage();
  return (
    <section className="u-center w-full" id="sobreMi">
      <div className="w-full flex flex-col justify-center items-center border-t-2 border-[var(--bg-hover)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] pt-4">
          {t("about.sectionLabel")}
        </p>
      </div>

      <p className="mt-5 text-base text-start leading-relaxed">{t("about.para1")}</p>
      <p className="mt-3 text-base text-[var(--text-secondary)] text-start leading-relaxed">{t("about.para2")}</p>

      <div className="mt-6">
        <TimeLine />
      </div>
    </section>
  );
};
