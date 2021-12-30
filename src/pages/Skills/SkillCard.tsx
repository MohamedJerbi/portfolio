import React, { CSSProperties } from "react";
import { StyleHTMLAttributes } from "../../utils/interfaces";
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

const perspective: string = "1000px";

const styles: StyleHTMLAttributes = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 250,
    height: 400,
    borderRadius: 20,
    backgroundColor: "white",
    margin: "3vh",
    boxShadow: "0 5px 202px rgba(0,0,0,0,5)",
    transform: `perspective(${perspective})`,
    transformStyle: "preserve-3d",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 19,
    alignSelf: "center",
    lineHeight: 0,
  },
  textContainer: {
    display: "grid",
    placeItems: "start",
    margin: 0,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 17,
    lineHeight: 1.7,
  },
  icon: {
    margin: 16,
    alignSelf: "center",
  },
};

const SkillCard: React.FC<Props> = ({ icon, title, skills }) => {
  const onMouseMove = (e: Element | null | any) => {
    const card: any = e.currentTarget;
    const rotationDegree = 25;
    // the lower the rotationIntensity value is the higher the rotation value
    const rotationIntensity = 2;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth / 2;
    const centerY = card.offsetTop + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = (
      (-1 * (rotationDegree * mouseY)) /
      (cardHeight / 2) /
      rotationIntensity
    ).toFixed(2);
    const rotateY = (
      (rotationDegree * mouseX) /
      (cardWidth / 2) /
      rotationIntensity
    ).toFixed(2);
    card.style.transform = `perspective(${perspective}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const setTransition = (card: any) => {
    card.style.transition = `transform 300ms cubic-bezier(.03, .98, .52, .99)`;
    setTimeout(() => {
      card.style.transition = "";
    }, 1000);
  };
  const onMouseLeave = (e: any) => {
    const card: any = e.currentTarget;
    setTimeout(() => {
      setTransition(card);
      card.style.transform = `perspective(${perspective}) rotateX(0deg) rotateY(0deg)`;
    }, 100);
  };

  return (
    <div
      style={styles.container}
      onMouseMoveCapture={onMouseMove}
      onMouseEnter={(e) => setTransition(e.currentTarget)}
      onMouseLeave={onMouseLeave}
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
    </div>
  );
};

export default SkillCard;
