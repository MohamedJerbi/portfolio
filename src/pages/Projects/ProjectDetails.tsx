import React, { CSSProperties } from "react";
import CercleShape from "./CercleShape";
import useWindowDimensions from "./useWindowDimensions";

interface Image {
  imageStyles: Object;
  imageSrc: string;
}

interface Props {
  title: string;
  description: string;
  responsabilities: Array<string>;
  image: Image;
  mobile: boolean;
}

interface StyleHTMLAttributes {
  container?: CSSProperties;
  text?: CSSProperties;
  img?: CSSProperties;
  title?: CSSProperties;
}

const generateStyles: (mobile: boolean) => StyleHTMLAttributes = (mobile) => ({
  container: mobile
    ? {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        margin: 16,
      }
    : {
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
    fontSize: 20,
    lineHeight: "31px",
    marginRight: "3vw",
  },
  img: {
    display: "block",
    width: mobile ? "100%" : "39vw",
    objectFit: "cover",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease",
    margin: mobile ? "16px 0" : 0,
  },
});

const randomNumber: Function = (max: number, min: number) => {
  return Math.random() * (max - min) + min;
};

const ProjectDetails: React.FC<Props> = ({
  title,
  description,
  responsabilities,
  image,
  mobile,
}) => {
  const { width, height } = useWindowDimensions();
  const styles = generateStyles(mobile);
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
        {!mobile && (
          <>
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
          </>
        )}
      </div>
      <img
        src={image.imageSrc}
        onMouseMoveCapture={(e) => {
          const img: any = e.currentTarget;
          img.style["box-shadow"] = "1px 1px 10px 1px #000000";
          img.style["zIndex"] = 1;
        }}
        onMouseLeave={(e) => {
          const img: any = e.currentTarget;
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
