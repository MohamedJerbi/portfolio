import React, { CSSProperties, useEffect, useState } from "react";
import "./styles.css";

interface Icon {
  iconSrc: string;
  imageStyles: {};
}

interface Props {
  icon: Icon;
  id: number;
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

const perspective: string = "1000px";

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
    transform: `perspective(${perspective})`,
    transformStyle: "preserve-3d",
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

const SkillCard: React.FC<Props> = ({ icon, title, skills, id }) => {
  const [card, setCard] = useState<HTMLElement | null | any>(
    document.querySelector(`.card${id}`)
  );

  useEffect(() => {
    setCard(document.querySelector(`.card${id}`));
  }, [id]);

  const onMouseMove = (e: Element | null | any) => {
    if (!e) return;
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
  const setTransition = () => {
    card.style.transition = `transform 300ms cubic-bezier(.03, .98, .52, .99)`;
    setTimeout(() => {
      card.style.transition = "";
    }, 1000);
  };
  const onMouseLeave = () => {
    setTimeout(() => {
      setTransition();
      card.style.transform = `perspective(${perspective}) rotateX(0deg) rotateY(0deg)`;
    }, 100);
  };

  return (
    <div
      className={"card" + id}
      style={styles.container}
      onMouseMoveCapture={onMouseMove}
      onMouseEnter={setTransition}
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
