export const en = {
  nav: {
    about: "About",
    projects: "Projects",
    stack: "Stack",
    services: "Services",
    contact: "Contact",
  },

  leftPanel: {
    role: "Full Stack Engineer",
    tagline: "I build complete web applications: frontend, backend, integrations, and production deployment.",
    available: "Available for remote projects",
    downloadCV: "Download CV",
  },

  hero: {
    role: "Full Stack Engineer.",
    available: "Available for remote projects",
    tagline:
      "I build web applications for real businesses — frontend, backend, third-party integrations, and production deployment.",
    viewProjects: "View projects",
    downloadCV: "Download CV",
  },

  about: {
    sectionLabel: "About",
    para1: "Full Stack Engineer focused on building complete web applications for real businesses.",
    para2: "I work across frontend, backend, databases, external APIs, automations and production deployments.",
    trajectoryHeading: "Experience Highlights",
    experienceLabel: "Experience",
    educationLabel: "Education",
  },

  experience: {
    work: [
      { role: "Freelance Full Stack Developer", org: null, date: null },
      { role: "Lead Full Stack Developer", org: "Freeze The Heat", date: null },
      { role: "Full Stack Developer", org: "Burbujas Naturales", date: null },
    ],
    education: [
      {
        role: "Business & International Commerce",
        org: "Universidad de la Marina Mercante",
        date: null,
      },
    ],
  },

  projects: {
    sectionLabel: "Projects",
    clientWorkLabel: "Client Work",
    productsLabel: "Products",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultLabel: "Result",
    problemShort: "Problem",
    solutionShort: "Solution",
    viewOnGithub: "View on GitHub",
    viewInProduction: "View in production",
    items: [
      {
        id: 1,
        title: "Freeze The Heat",
        subtitle: "Lead Capture & Notification System",
        type: "Client Project",
        role: "Lead Full Stack Developer",
        problem:
          "No structured system to capture, persist or follow up inbound leads.",
        solution:
          "Built a full-stack lead system with Next.js, Node.js, Firebase, AWS SES and Google Sheets sync.",
        impact:
          "Live production workflow for lead capture, notifications and sales team access.",
      },
      {
        id: 2,
        title: "Folio",
        subtitle: "E-Commerce Platform",
        type: "Product",
        role: "Full Stack Developer",
        problem:
          "Build an e-commerce where wrong choices cause real integrity issues: overselling, broken checkouts, unauthorized access.",
        solution:
          "Server-side inventory validation on every checkout. Stripe, guest checkout, JWT auth with role-based access.",
        impact:
          "Complete purchase flow: guest and authenticated checkout, Stripe payments, inventory management and admin panel.",
      },
      {
        id: 3,
        title: "Burbujas Naturales",
        subtitle: "Business Website",
        type: "Client Project",
        role: "Full Stack Developer",
        problem:
          "Natural products company needed a website that ranks and converts visitors into inquiries.",
        solution:
          "Next.js SSR for SEO, mobile-first responsive design, Core Web Vitals and structured data.",
        impact:
          "Operational business website with SEO-ready architecture and production deployment.",
      },
    ],
  },

  skills: {
    sectionLabel: "Tech Stack",
    tiers: {
      daily: "Daily use",
      solid: "Solid experience",
      familiar: "Familiar with",
    },
  },

  services: {
    sectionLabel: "Areas of Expertise",
    items: [
      "Full-Stack Development",
      "Business Platforms",
      "E-Commerce Systems",
      "API Integrations",
      "Automation & Workflows",
      "Technical SEO",
    ],
  },

  contact: {
    sectionLabel: "Contact",
    copy: "Available for selected freelance projects, technical consulting and long-term partnerships.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
  },
};
