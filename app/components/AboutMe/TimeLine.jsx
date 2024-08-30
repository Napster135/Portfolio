import {  IconSchool, IconBriefcase } from "@tabler/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const educationHistory = [
  
  {
    id: 1,
    title: "Coder House",
    text: "Full Stack Developer",
    date: "enero 2022 - dicimbre 2023",
  },
  {
    id: 2,
    title: "Universidad de la Marina Mercante ",
    text: "Licenciatura en Comercio y Negocios Intenacionales",
    date: "Febrero 2020 - Diciembre 2024",
  },
  {
    id: 3,
    title: "Universidad  de Buenos Aires",
    text: "Ingenieria",
    date: "Marzo 2013 - Novuembre 2019",
  }
];
const workHistory = [
  {
    id: 1,
    title: "Freelance",
    text: "CX  - Full stack Developer",
    date: "Septiembre 2022 - Actualidad",
    description: "",
  },
  {
    id: 2,
    title: "Hipcam S.A ",
    text: " CX Manager",
    date: "Septiembre 2022 - Julio 2024",
    description: "",
  },
  {
    id: 3,
    title: "Tea Connection SA",
    text: "Customer Service",
    date: "Enero 2022 - septimebre 2022",
    description: "",
  },
  {
    id: 4,
    title: "Telecom S.A",
    text: "Customer Service",
    date: "Enero 2013 - Octubre 2021",
    description: "",
  },
];

export const TimeLine = ({ showEducation }) => {
  return (
    <VerticalTimeline>
      {(showEducation ? educationHistory : workHistory).map((item) => (
        <VerticalTimelineElement
          key={item.id}
          date={item.date}
          iconStyle={{
            background: "var(--bg-buttons)",
            color: "#fff",
            border: "none"
           }}
          icon={showEducation ? <IconSchool /> : <IconBriefcase />}
          contentStyle={{
            background: "transparent",
            color: "var(--foreground)",
            border: "1px solid var(--socials-buttons)",
            boxShadow: "unset"
          }}
          contentArrowStyle={{
            borderRight: "7px solid  var(--socials-buttons)",
          }}
           
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.text}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};