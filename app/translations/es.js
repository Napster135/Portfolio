export const es = {
  nav: {
    about: "Sobre mí",
    projects: "Proyectos",
    stack: "Stack",
    services: "Servicios",
    contact: "Contacto",
  },

  leftPanel: {
    role: "Full Stack Engineer",
    tagline:
      "Construyo aplicaciones web completas: frontend, backend, integraciones y deploy en producción.",
    available: "Disponible para proyectos remotos",
    downloadCV: "Descargar CV",
  },

  hero: {
    role: "Full Stack Engineer.",
    available: "Disponible para proyectos remotos",
    tagline:
      "Construyo aplicaciones web para negocios reales — frontend, backend, integraciones con APIs externas y deploy en producción.",
    viewProjects: "Ver proyectos",
    downloadCV: "Descargar CV",
  },

  about: {
    sectionLabel: "Sobre mí",
    para1: "Ingeniero Full Stack enfocado en construir aplicaciones web completas para negocios reales.",
    para2: "Trabajo en frontend, backend, bases de datos, APIs externas, automatizaciones y despliegues en producción.",
    trajectoryHeading: "Experiencia destacada",
    experienceLabel: "Experiencia",
    educationLabel: "Educación",
  },

  experience: {
    work: [
      { role: "Freelance Full Stack Developer", org: null, date: null },
      { role: "Lead Full Stack Developer", org: "Freeze The Heat", date: null },
      { role: "Full Stack Developer", org: "Burbujas Naturales", date: null },
    ],
    education: [
      {
        role: "Lic. en Comercio y Negocios Internacionales",
        org: "Universidad de la Marina Mercante",
        date: null,
      },
    ],
  },

  projects: {
    sectionLabel: "Proyectos",
    clientWorkLabel: "Proyectos de cliente",
    productsLabel: "Productos",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    resultLabel: "Resultado",
    problemShort: "Problema",
    solutionShort: "Solución",
    viewOnGithub: "Ver en GitHub",
    viewInProduction: "Ver en producción",
    items: [
      {
        id: 1,
        title: "Freeze The Heat",
        subtitle: "Sistema de Captura y Notificación de Leads",
        type: "Proyecto de cliente",
        role: "Lead Full Stack Developer",
        problem:
          "Sin sistema estructurado para capturar, persistir o hacer seguimiento de leads entrantes.",
        solution:
          "Construí un sistema full-stack de leads con Next.js, Node.js, Firebase, AWS SES y sincronización con Google Sheets.",
        impact:
          "Flujo en producción para captura de leads, notificaciones y acceso del equipo de ventas.",
      },
      {
        id: 2,
        title: "Folio",
        subtitle: "Plataforma E-Commerce",
        type: "Producto",
        role: "Full Stack Developer",
        problem:
          "Construir un e-commerce donde las decisiones incorrectas generan problemas reales: sobreventas, checkouts rotos, accesos no autorizados.",
        solution:
          "Validación de inventario en el servidor en cada checkout. Stripe, checkout como invitado, JWT con control de acceso por rol.",
        impact:
          "Flujo de compra completo: checkout autenticado y como invitado, pagos Stripe, gestión de inventario y panel de administración.",
      },
      {
        id: 3,
        title: "Burbujas Naturales",
        subtitle: "Sitio Web Empresarial",
        type: "Proyecto de cliente",
        role: "Full Stack Developer",
        problem:
          "Empresa de productos naturales sin presencia digital, necesitaba un sitio que posicionara y convirtiera visitas en consultas.",
        solution:
          "Next.js con SSR para SEO, diseño responsive mobile-first, Core Web Vitals y datos estructurados.",
        impact:
          "Sitio empresarial operativo con arquitectura SEO-ready y deploy en producción.",
      },
    ],
  },

  skills: {
    sectionLabel: "Stack tecnológico",
    tiers: {
      daily: "Uso diario",
      solid: "Experiencia sólida",
      familiar: "Familiarizado con",
    },
  },

  services: {
    sectionLabel: "Áreas de experiencia",
    items: [
      "Desarrollo Full-Stack",
      "Plataformas empresariales",
      "Sistemas E-Commerce",
      "Integraciones de API",
      "Automatización y flujos de trabajo",
      "SEO Técnico",
    ],
  },

  contact: {
    sectionLabel: "Contacto",
    copy: "Disponible para proyectos freelance seleccionados, consultoría técnica y alianzas a largo plazo.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
  },
};
