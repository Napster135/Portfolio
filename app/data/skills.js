/**
 * Skill tier items. Labels are in app/translations/ (keyed by tier).
 *
 * @typedef {Object} SkillTier
 * @property {string} tier
 * @property {string[]} items
 */

/** @type {SkillTier[]} */
export const skillTiers = [
  {
    tier: "daily",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Tailwind CSS", "Git", "Vercel"],
  },
  {
    tier: "solid",
    items: ["MongoDB", "Firebase", "Express.js", "REST APIs", "AWS SES", "Google Sheets API", "Stripe", "Authentication / JWT", "SEO técnico"],
  },
  {
    tier: "familiar",
    items: ["Docker", "PostgreSQL", "MySQL", "CI/CD", "NestJS", "Laravel", "PHP"],
  },
];
