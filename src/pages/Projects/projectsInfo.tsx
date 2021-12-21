import OneClickMenuImg from "../../assets/OneClickMenu.png";
import AddresstiImg from "../../assets/Addressti.png";

const projectsInfo = [
  {
    title: "One Click Menu",
    description:
      "Developed a Web Application called One Click Menu, providing a unique and new experience of menus browsing.",
    responsabilities: [
      "Design and Implementation of interfaces.",
      "Conception and Implementation of the backend.",
      "Implementation of speech recognition for searching. and menu browsing.",
      "Implementation of Artificial Intelligence for stock. analysis and management.",
    ],
    image: {
      imageSrc: OneClickMenuImg,

      imageStyles: {
        textAlign: "center",
        transform: "rotate(-2deg)",
        borderRadius: 20,
        height: "45vh",
      },
    },
  },
  {
    title: "Addressti",
    description:
      "Developed a React Native Application called Addressti for a Start-Up with the goal of enhancing the delivery System in the Country.",
    responsabilities: [
      "Designed and Implemented the interfaces and functionalities.",
      "Conception and Implementation of the backend and delivery system.",
      "Maintenance of the codebase and continuous implementation of new features.",
      " The project accumulated 331 clients with 53.1% of growth during the fourth week of lunch dated 29/08/2020.",
    ],
    image: {
      imageSrc: AddresstiImg,
      imageStyles: {
        height: "45vh",
        width: "calc(1.67 * 45vh)",
        transform: "rotate(2deg)",
        borderRadius: 20,
      },
    },
  },
];

export default projectsInfo;
