import { IconBrandGithub, IconWorld } from "@tabler/icons";
import Image from "next/image";

const projectsInfo = [
  {
    id: 1,
    proyecto_title: "E-commerce",
    proyecto_description:"Permite visualizar y adquirir los libros disponibles según el stock, filtrarlos por categoría y precio. También facilita la creación de usuarios, asignación de roles y gestión del inventario desde la plataforma web. Además, ofrece la posibilidad de realizar compras utilizando Stripe como pasarela de pagos.",
    proyecto_url_github: "https://github.com/Napster135/Final-project-Backend",
    proyecto_url_web: "https://final-project-backend-main.vercel.app/",
    proyecto_tecnologias: [
      "NextJS",
      "TypeScript",
      "Material UI",
      "Node Js",
      "MongoDB",
      "React Hook Form",
    ],
  },
  {
    id: 2,
    proyecto_title: "The Food Truck",
    proyecto_description:
    "Sitio web para una empresa de comida rápida, con un diseño moderno y minimalista, con un menú interactivo y un carrito de compras.",
    proyecto_url_github: "https://github.com/Napster135/Vercel-ProyectoFinal-React",
    proyecto_url_web: "https://vercel-proyecto-final-react.vercel.app/",
    proyecto_tecnologias: [
      "ReactJS",
      "TypeScript",
      "Styled Components",
      "Material UI",
      "React Hook Form",
    ],
  },{
    id: 3,
    proyecto_title: "The Turtle's Corner",
    proyecto_description:"Sitio web para la venta de cuadernos cosidos a mano y pulseras de macramé. Los usuarios pueden explorar productos, agregar al carrito y hacer pedidos por WhatsApp. Implementé un sistema de administración para gestionar productos, usuarios y pedidos. El sitio ofrece una experiencia fluida y segura tanto para compradores como administradores.",
    proyecto_url_github: "",
    proyecto_url_web: "",
    proyecto_tecnologias: [
      "ReactJS", 
      "Redux", 
      "TypeScript",  
      "MongoDB",
      "Material UI",
 ,    "JSDoc"],
  },
  
];

export const ProjectCard = () => {
  return (
    <section id="projects">
      {projectsInfo.map((project, index) => (
        <div
          key={project.id}
          className="flex flex-col items-center mt-10 justify-center border-2 border-[var(--bg-hover)]
          rounded-lg shadow-lg md:flex-row md:border-none md:shadow-none md:relative md:h-96"
        >
          <Image
            src={`/images/project-${project.id}.webp`}
            alt={project.proyecto_title}
            className={`rounded-t md:w-3/5 w-auto object-cover md:absolute ${
              index % 2 === 0 ? "md:right-0" : "md:left-0"
            }  md:rounded`}
            priority
            width={1000}
            height={1000}
          />
          <div
            className={`flex flex-col items-center mt-2 md:absolute md:left-0 md:w-full ${
              index % 2 === 0
                ? "md:items-start md:text-start"
                : "md:items-end md:text-end"
            } last:border-red-500`}
          >
            <h1
              className={`text-3xl font-bold text-start md:w-2/5 md:text-4xl ${
                index % 2 === 0 ? "md:text-start" : "md:text-end"
              } 
            `}
            >
              {project.proyecto_title}
            </h1>
            <p
              className={`p-4 md:bg-[var(--bg-buttons)] md:rounded-lg md:text-lg md:w-1/2 md:mt-3 font-bold md:text-white md:shadow-xl md:shadow-[var(--nav-shadow)] 
             ${index % 2 === 0 ? "md:text-start" : "md:text-end"} 
            
            `}
            >
              {project.proyecto_description}
            </p>
            <ul
              className={`flex flex-wrap gap-2 mt-3 md:w-2/5 md:mt-3 justify-center p-2
            ${index % 2 === 0 ? "md:justify-start md:pl-0" : "md:justify-end md:pr-0"}
            `}
            >
              {project.proyecto_tecnologias.map((tecnologia) => (
                <li
                  key={tecnologia}
                  className="bg-gray-500 p-1 rounded font-bold text-white text-sm"
                >
                  {tecnologia}
                </li>
              ))}
            </ul>
            <div
              className={`flex justify-center gap-5 pt-4  md:w-2/5  mb-5 md:mb-0
            ${
              index % 2 === 0
                ? "md:justify-start md:pr-5"
                : "md:justify-end md:pl-5"
            }
            `}
            >
              <a
                href={project.proyecto_url_github}
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <IconBrandGithub className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>
              <a
                href={project.proyecto_url_web}
                target="_blank"
                rel="noreferrer"
                aria-label="web"
              >
                <IconWorld className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default ProjectCard;