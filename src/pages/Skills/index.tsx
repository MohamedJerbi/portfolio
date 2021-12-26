import React, { CSSProperties } from "react";
import SkillCard from "./SkillCard";
import skillsInfo from "./skillsInfo";
import palette from "../../palette";

interface StyleHTMLAttributes {
  container?: CSSProperties;
  text?: CSSProperties;
  img?: CSSProperties;
  title?: CSSProperties;
}

const styles: StyleHTMLAttributes = {
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    clipPath: "polygon(0 5vh, 100% 0,100% calc(100% - 5vh), 0 100%)",
    backgroundColor: palette.background.rose,
  },
};

const Skills: React.FC = () => {
  return (
    <div style={styles.container}>
      {skillsInfo.map(({ icon, title, skills: cardSkills }, key) => (
        <SkillCard
          key={key}
          id={key}
          icon={icon}
          title={title}
          skills={cardSkills}
        />
      ))}
    </div>
  );
};
export default Skills;
