"use client";

import { IconBrandGithub, IconWorld } from "@tabler/icons";
import { projects } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";

const ProjectLinks = ({ githubUrl, webUrl, title, githubLabel, webLabel }) => (
  <div className="flex gap-4 mt-3">
    {githubUrl && (
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${githubLabel}: ${title}`}
        className="text-[var(--text-secondary)] hover:text-[var(--bg-buttons)] transition-colors duration-150"
      >
        <IconBrandGithub className="h-4 w-4" />
      </a>
    )}
    {webUrl && (
      <a
        href={webUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${webLabel}: ${title}`}
        className="text-[var(--text-secondary)] hover:text-[var(--bg-buttons)] transition-colors duration-150"
      >
        <IconWorld className="h-4 w-4" />
      </a>
    )}
  </div>
);

export const ProjectCard = () => {
  const { t } = useLanguage();
  const projectItems = t("projects.items");
  const githubLabel = t("projects.viewOnGithub");
  const webLabel = t("projects.viewInProduction");

  const enriched = projects.map((p) => ({
    ...p,
    ...(projectItems?.find((pt) => pt.id === p.id) ?? {}),
  }));

  return (
    <div className="grid md:grid-cols-3 gap-4 mt-5">
      {enriched.map((project) => (
        <div
          key={project.id}
          className="border border-[var(--bg-hover)] rounded-xl p-5 flex flex-col hover:border-[var(--bg-buttons)] transition-colors duration-200"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1">
            {project.type}
          </span>
          <h3 className="text-sm font-bold mb-0.5">{project.title}</h3>
          <p className="text-xs text-[var(--text-secondary)] mb-3">{project.subtitle}</p>

          <div className="flex flex-col gap-2 flex-1 text-xs leading-relaxed">
            <p>
              <span className="font-semibold text-[var(--text-secondary)] uppercase tracking-widest text-[10px]">
                {t("projects.problemShort")} &nbsp;
              </span>
              {project.problem}
            </p>
            <p>
              <span className="font-semibold text-[var(--text-secondary)] uppercase tracking-widest text-[10px]">
                {t("projects.solutionShort")} &nbsp;
              </span>
              {project.solution}
            </p>
            <p>
              <span className="font-semibold text-[var(--text-secondary)] uppercase tracking-widest text-[10px]">
                {t("projects.resultLabel")} &nbsp;
              </span>
              {project.impact}
            </p>
          </div>

          <p className="text-xs text-[var(--text-secondary)] mt-3">
            {project.technologies.join(" · ")}
          </p>
          <ProjectLinks
            githubLabel={githubLabel}
            webLabel={webLabel}
            githubUrl={project.githubUrl}
            webUrl={project.webUrl}
            title={project.title}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
