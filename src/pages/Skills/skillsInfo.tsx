import design from "../../assets/design.svg";
import fontend from "../../assets/front-end.svg";
import backend from "../../assets/backend.svg";

const projectsInfo = [
  {
    title: "Front-end",
    skills: [
      "ReactJS",
      "React Native",
      "Redux",
      "JavaScript(ES6+)",
      "HTML",
      "CSS",
      "GraphQL",
    ],
    icon: {
      iconSrc: fontend,
      imageStyles: {
        height: "45vh",
        textAlign: "center",
        paddingBottom: 100,
      },
    },
  },

  {
    title: "Back-end",
    skills: [
      "NodeJs",
      "ExpressJS",
      "MongoDB",
      "SQL (MySQL)",
      "Firebase Functions",
      "Firebase Firestore",
      "Firebase RealtimeDB",
    ],
    icon: {
      iconSrc: backend,
      imageStyles: {
        height: "45vh",
        textAlign: "center",
        paddingBottom: 100,
      },
    },
  },
  {
    title: "UI/UX",
    skills: [
      "Figma",
      "Adobe XD",
      "Research",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Visual Communication",
    ],
    icon: {
      iconSrc: design,
      imageStyles: {
        height: "45vh",
        textAlign: "center",
        paddingBottom: 100,
      },
    },
  },
];

export default projectsInfo;
