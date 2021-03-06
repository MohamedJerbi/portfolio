import React from "react";
import SkillCard from "./SkillCard";
import skillsInfo from "./skillsInfo";
import palette from "../../palette";
import { StyleHTMLAttributes } from "../../utils/interfaces";

const styles: StyleHTMLAttributes = {
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    paddingTop: "7vh",
    paddingBottom: "7vh",
    clipPath: "polygon(0 5vh, 100% 0,100% calc(100% - 5vh), 0 100%)",
    backgroundColor: palette.background.rose,
  },
};

const Skills: React.FC = () => {
  return (
    <div style={styles.container}>
      {skillsInfo.map(({ icon, title, skills: cardSkills }, key) => (
        <SkillCard key={key} icon={icon} title={title} skills={cardSkills} />
      ))}
    </div>
  );
};
export default Skills;
