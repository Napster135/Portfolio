import { IconFolder, IconBrandGithub, IconWorld } from "@tabler/icons";
const othersProjects = [
  
  {
    id: 1,
    proyecto_title: "Calculator App",
    proyecto_description:
      "Aplicación web para realizar operaciones matemáticas, con un diseño minimalista y moderno.",
    proyecto_url_github:      "",
    proyecto_url_web: "https://calculadora-psi-ten.vercel.app/",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "HTML & CSS",
      },
      {
        id: 2,
        tecnologia: "JavaScript",
      },
      {
        id: 3,
        tecnologia: "ReactJS",
      },
    ],
  },
  {
    id: 2,
    proyecto_title: "Counter App",
    proyecto_description:
      "Cuenta con un contador que aumenta la cantidad de clicks que se realizan en el botón, y un botón para reiniciar el contador.",
    proyecto_url_github:     "",
    proyecto_url_web: "https://contador-six-teal.vercel.app/",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "HTML & CSS",
      },
      {
        id: 2,
        tecnologia: "JavaScript",
      },
      {
        id: 3,
        tecnologia: "ReactJS",
      },
    ],
  },

];

export const OthersProjects = () => {
  return (
    <section>
      <div className="w-full flex flex-col justify-center items-center mt-8 ">
        <h1 className="text-4xl font-bold">Otros proyectos interesantes</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 bg">
        {othersProjects.map((project) => (
          <div
            key={project.id}
            className="border mt-5 rounded-lg border-[var(--hover-nav)] shadow-2xl shadow-[var(--nav-shadow)] p-5 hover:backdrop-filter backdrop-blur-lg hover:bg-[var(--bg-hover)] hover:bg-opacity-10 transition-all ease-in-out hover:border-[var(--bg-hover)] cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <IconFolder className="w-14 h-14 text-[var(--bg-buttons)]" />
              <div className="flex gap-3">
                <a
                  href={project.proyecto_url_github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <IconBrandGithub className="h-10 w-10 text-[var(--text-secondary)] hover:scale-125 hover:text-[var(--bg-buttons)] cursor-pointer" />
                </a>
                {project.proyecto_url_web && (
                  <a
                    href={project.proyecto_url_web}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="web"
                  >
                    <IconWorld className="h-10 w-10 text-[var(--text-secondary)] hover:scale-125 hover:text-[var(--bg-buttons)] cursor-pointer" />
                  </a>
                ) }
              </div>
            </div>
            <h1 className="text-3xl font-bold mt-4 text-center">
              {project.proyecto_title}
            </h1>
            <p className="text-lg mt-3">{project.proyecto_description}</p>
            <div className="flex flex-row justify-center items-center mt-4 gap-4 font-bold flex-wrap">
              {project.proyecto_tecnologias.map((tecnologia) => (
                <div
                  key={tecnologia.id}
                  className="bg-[var(--bg-buttons)] text-white rounded-lg px-3 py-1"
                >
                  {tecnologia.tecnologia}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};