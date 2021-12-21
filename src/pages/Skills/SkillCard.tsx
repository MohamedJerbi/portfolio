import React, { CSSProperties, useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

interface Icon {
  iconSrc: string;
  imageStyles: {};
}

interface Props {
  icon: Icon;
  title: string;
  skills: Array<string>;
}

interface StyleHTMLAttributes {
  container?: CSSProperties;
  icon?: CSSProperties;
  title?: CSSProperties;
  text?: CSSProperties;
  textContainer?: CSSProperties;
}

const styles: StyleHTMLAttributes = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 300,
    height: 500,
    borderRadius: 20,
    backgroundColor: "white",
    margin: "3vh",
    boxShadow: "0 5px 202px rgba(0,0,0,0,5)",
    transform: "perspective(800px)",
    transitionDuration: "500ms",
    transformStyle: "preserve-3d",
    cursor: "pointer",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 22,
    alignSelf: "center",
  },
  textContainer: {
    display: "grid",
    placeItems: "start",
    margin: 0,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 20,
    lineHeight: 1.7,
  },
  icon: {
    margin: 16,
    alignSelf: "center",
  },
};

const SkillCard: React.FC<Props> = ({ icon, title, skills }) => {
  const [hovering, setHovering]: any = useState([0, 0]);

  return (
    <motion.div
      animate={
        hovering
          ? {
              transitionProperty:
                "0.6s cubic-bezier(0.23, 1, 0.32, 1),box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1)",
              boxShadow:
                "rgba(white, 0.2) 0 0 40px 5px,rgba(white, 1) 0 0 0 1px,rgba(black, 0.66) 0 30px 60px 0,inset #333 0 0 0 5px,inset white 0 0 0 6px",
              rotateY: 5,
              rotateX: 5,
            }
          : {}
      }
      style={styles.container}
      onMouseMove={(e) => {
        console.log(e);
        setHovering([hovering[0] + e.movementY, hovering[1] + e.movementX]);
      }}
      onMouseLeave={() => setHovering([0, 0])}
    >
      <img style={styles.icon} src={icon.iconSrc} alt={title + " icon"} />
      <p style={styles.title}>{title}</p>
      <div style={styles.textContainer}>
        <ul>
          {skills.map((skill, key) => (
            <li style={styles.text} key={key}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SkillCard;
