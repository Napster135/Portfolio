"use client";

import { useLanguage } from "../../context/LanguageContext";

const HighlightItem = ({ role, org, date }) => (
  <li className="flex flex-col gap-0.5">
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-sm font-semibold text-[var(--foreground)]">{role}</span>
      {date && (
        <span className="text-xs text-[var(--text-secondary)] whitespace-nowrap flex-shrink-0">
          {date}
        </span>
      )}
    </div>
    {org && <span className="text-xs text-[var(--text-secondary)]">{org}</span>}
  </li>
);

export const TimeLine = () => {
  const { t } = useLanguage();
  const workHighlights = t("experience.work");
  const educationHighlights = t("experience.education");

  return (
    <div className="grid sm:grid-cols-2 gap-6 mt-0">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
          {t("about.experienceLabel")}
        </p>
        <ul className="flex flex-col gap-2">
          {workHighlights.map((item) => (
            <HighlightItem key={item.role} {...item} />
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
          {t("about.educationLabel")}
        </p>
        <ul className="flex flex-col gap-2">
          {educationHighlights.map((item) => (
            <HighlightItem key={item.role} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
