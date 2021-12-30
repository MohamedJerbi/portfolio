import React from "react";
import { StyleHTMLAttributes } from "../../../utils/interfaces";

interface Props {
  icon: string;
  text: String;
  mobile: boolean;
}

const generateStyles: (mobile: boolean) => StyleHTMLAttributes = (mobile) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 20,
    width: 300,
    height: 140,
    paddingTop: 12,
    transitionDuration: "600ms",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
  },
  icon: { margin: "auto" },
  text: {
    fontFamily: "Poppins",
    fontSize: 16,
    textTransform: "lowercase",
    color: "#2F2E41",
  },
});

const ContactBox: React.FC<Props> = ({ icon, text, mobile }) => {
  const styles = generateStyles(mobile);
  return (
    <div
      className="box"
      onMouseMoveCapture={(e) => {
        const box: any = e.currentTarget;
        box.style["background-color"] = "white";
      }}
      onMouseLeave={(e) => {
        const box: any = e.currentTarget;
        box.style["background-color"] = "transparent";
      }}
      style={styles.container}
    >
      <img style={styles.icon} src={icon} alt="icon" />
      <p style={styles.text}>{text}</p>
    </div>
  );
};

export default ContactBox;
