"use client";

import { skillTiers } from "../../data/skills";
import { useLanguage } from "../../context/LanguageContext";

const tierStyles = {
  daily: "border-[var(--bg-buttons)] bg-[var(--bg-buttons)] text-white",
  solid: "border-[var(--socials-buttons)] text-[var(--foreground)]",
  familiar: "border-[var(--bg-hover)] text-[var(--text-secondary)]",
};

export const SkillsLayout = () => {
  const { t } = useLanguage();
  return (
    <section className="u-center w-full" id="skills">
      <div className="w-full pt-4 border-t-2 border-[var(--bg-hover)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)]">
          {t("skills.sectionLabel")}
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {skillTiers.map((tier) => (
          <div key={tier.tier}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">
              {t(`skills.tiers.${tier.tier}`)}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {tier.items.map((skill) => (
                <li
                  key={skill}
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${tierStyles[tier.tier]}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
