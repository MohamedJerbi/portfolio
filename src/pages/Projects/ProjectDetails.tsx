import React, { CSSProperties, useEffect, useState } from "react";
import CercleShape from "./CercleShape";
import useWindowDimensions from "./useWindowDimensions";

interface Image {
  imageStyles: Object;
  imageSrc: string;
}

interface Props {
  id: number;
  title: string;
  description: string;
  responsabilities: Array<string>;
  image: Image;
}

interface StyleHTMLAttributes {
  container?: CSSProperties;
  text?: CSSProperties;
  img?: CSSProperties;
  title?: CSSProperties;
}

const styles: StyleHTMLAttributes = {
  container: {
    display: "grid",
    gridTemplateColumns: "auto 40vw",
    position: "relative",
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    alignItems: "center",
    letterSpacing: "0.02em",
    marginTop: 12,
  },
  text: {
    fontFamily: "Sahitya",
    fontSize: "20px",
    lineHeight: "31px",
    marginRight: "3vw",
  },
  img: {
    display: "block",
    width: "39vw",
    objectFit: "cover",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease",
  },
};

const randomNumber: Function = (max: number, min: number) => {
  return Math.random() * (max - min) + min;
};

const ProjectDetails: React.FC<Props> = ({
  id,
  title,
  description,
  responsabilities,
  image,
}) => {
  const { height, width } = useWindowDimensions();
  const [img, setImg] = useState<HTMLElement | null | any>(
    document.querySelector(`.img${id}`)
  );

  useEffect(() => {
    setImg(document.querySelector(`.img${id}`));
  }, [id]);

  return (
    <div style={styles.container}>
      <div>
        <p style={styles.title}>{title}</p>
        <p style={styles.text}>{description}</p>
        <ul style={styles.text}>
          {responsabilities.map((resp, key) => (
            <li key={key}> {resp}</li>
          ))}
        </ul>
        <CercleShape
          size={randomNumber(100, 200)}
          left={randomNumber(width / 100, width / 50)}
        />
        <CercleShape
          size={randomNumber(50, 100)}
          top={randomNumber(height / 10, height / 9)}
          left={randomNumber(width / 5, width / 3)}
        />
        <CercleShape
          size={randomNumber(75, 175)}
          top={randomNumber(height / 7, height / 4)}
          left={randomNumber(width / 7, width / 3)}
        />
        <CercleShape
          size={randomNumber(125, 175)}
          top={randomNumber(height / 5, height / 2.5)}
          left={randomNumber(width / 4, width / 1.5)}
        />
      </div>
      <img
        className={"img" + id}
        src={image.imageSrc}
        onMouseMoveCapture={() => {
          if (!img) return;
          img.style["box-shadow"] = "1px 1px 10px 1px #000000";
          img.style["zIndex"] = 1;
        }}
        onMouseLeave={() => {
          if (!img) return;
          img.style["box-shadow"] = "0px 0px 0px 0px #000000";
          img.style["zIndex"] = 0;
        }}
        style={{ ...image.imageStyles, ...styles.img }}
        alt={`Project ${title}`}
      />
    </div>
  );
};

export default ProjectDetails;
