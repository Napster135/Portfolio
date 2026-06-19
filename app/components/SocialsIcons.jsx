import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons";

const iconsList = [
  {
    id: 1,
    icon: <IconBrandGithub className="h-5 w-5 hover:text-[var(--bg-buttons)]" />,
    href: "https://github.com/Napster135",
    ariaLabel: "github-icon",
    target: "_blank",
  },
  {
    id: 2,
    icon: <IconBrandLinkedin className="h-5 w-5 hover:text-[var(--bg-buttons)]" />,
    href: "https://www.linkedin.com/in/victorpacheco01",
    ariaLabel: "linkedin-icon",
    target: "_blank",
  },
  {
    id: 3,
    icon: <IconMail className="h-5 w-5 hover:text-[var(--bg-buttons)]" />,
    href: "#contactame",
    ariaLabel: "mail-icon",
  },
];

export const SocialsIcons = () => (
  <>
    {iconsList.map((icon) => (
      <li key={icon.id}>
        <a
          href={icon.href}
          className="text-[var(--socials-buttons)] transition-colors duration-150"
          aria-label={icon.ariaLabel}
          target={icon.target}
          rel="noreferrer"
        >
          {icon.icon}
        </a>
      </li>
    ))}
  </>
);
