"use client";

import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../../context/LanguageContext";

export const ProjectsLayout = () => {
  const { t } = useLanguage();
  return (
    <section id="misProyectos" className="u-center">
      <div className="w-full pt-4 border-t-2 border-[var(--bg-hover)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)]">
          {t("projects.sectionLabel")}
        </p>
      </div>
      <ProjectCard />
    </section>
  );
};
