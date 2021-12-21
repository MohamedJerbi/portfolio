import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

interface Props {
  icon: string;
  text: String;
}

interface StyleHTMLAttributes {
  container?: CSSProperties;
  icon?: CSSProperties;
  boxHover?: any;
  text?: CSSProperties;
}

const styles: StyleHTMLAttributes = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 20,
    width: 300,
    height: 140,
    paddingTop: 12,
  },
  icon: { margin: "auto" },
  text: {
    fontFamily: "Poppins",
    fontSize: 16,
    textTransform: "lowercase",
    color: "#2F2E41",
  },
  boxHover: { cursor: "pointer", backgroundColor: "white" },
};

const ContactBox: React.FC<Props> = ({ icon, text }) => {
  return (
    <motion.div style={styles.container} whileHover={styles.boxHover}>
      <img style={styles.icon} src={icon} alt="icon" />
      <p style={styles.text}>{text}</p>
    </motion.div>
  );
};

export default ContactBox;
