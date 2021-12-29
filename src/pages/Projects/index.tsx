import React, { CSSProperties, Fragment } from "react";
import ProjectDetails from "./ProjectDetails";
import projectsInfo from "./projectsInfo";
import HelloSVG from "../../assets/Hello.svg";
import palette from "../../palette";

interface StyleHTMLAttributes {
  container?: CSSProperties;
  text?: CSSProperties;
  img?: CSSProperties;
  btnContainer?: CSSProperties;
  btn?: CSSProperties;
  projectsContainer?: CSSProperties;
  title?: CSSProperties;
}

const projectsTemplateRows: Function = (projectsInfo: Array<Object>) => {
  let rows = "27px ";
  projectsInfo.map(() => (rows += "50vh "));
  return rows;
};
const styles: StyleHTMLAttributes = {
  container: {
    display: "grid",
    placeItems: "center",
    position: "relative",
    margin: "auto",
    width: 808,
    height: "calc(100vh - 49px)",
  },
  text: {
    position: "absolute",
    top: "calc(18vh - 37px)",
    left: 0,
    width: 292,
    height: 172,
    fontFamily: "Sahitya",
    fontSize: 28,
    color: " #2F2E41",
  },
  img: {
    position: "absolute",
    top: "18vh",
    left: 0,
  },
  btnContainer: {
    position: "absolute",
    top: "72vh",
    backgroundColor: palette.background.blue,
    width: 175,
    height: 50,
    borderRadius: "0 20px 0 20px",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
  },
  btn: {
    borderRadius: "0 20px 0 20px",
    border: "solid 3px white",
    width: 155,
    fontFamily: "Sahitya",
    fontSize: 19,
    color: "white",
    backgroundColor: palette.background.blue,
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    alignSelf: "center",
  },
  projectsContainer: {
    display: "grid",
    gridTemplateColumns: "10vw auto",
    gridTemplateRows: projectsTemplateRows(projectsInfo),
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 27,
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#9848D7",
  },
};

const Projects: React.FC = () => {
  return (
    <div>
      <div style={styles.container}>
        <p style={styles.text}>
          Hello, I’m Mohamed Jerbi a Full-Stack
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Developer
        </p>
        <img style={styles.img} src={HelloSVG} alt="Hello" />
        <div style={styles.btnContainer}>
          <a style={styles.btn} href="#projects">
            My Projects
          </a>
        </div>
      </div>
      <div id="projects" style={styles.projectsContainer}>
        <div />
        <p style={styles.title}>Featured Projects</p>
        {projectsInfo.map(
          ({ title, description, responsabilities, image }, key) => (
            <Fragment key={key}>
              <div />
              <ProjectDetails
                id={key}
                title={title}
                description={description}
                responsabilities={responsabilities}
                image={image}
              />
            </Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
