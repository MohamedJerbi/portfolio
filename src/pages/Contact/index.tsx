import React, { useState, CSSProperties } from "react";
import { motion } from "framer-motion";
import ContactBox from "./ContactBox";
import Linkedin from "../../assets/ContactIcons/linkedin.svg";
import Phone from "../../assets/ContactIcons/phone.svg";
import Mail from "../../assets/ContactIcons/mail.svg";
import palette from "../../palette";

interface StyleHTMLAttributes {
  container?: CSSProperties;
  title?: CSSProperties;
  text?: CSSProperties;
  input?: CSSProperties;
  boxesContainer?: CSSProperties;
  subContainer?: CSSProperties;
  button?: CSSProperties;
  btnContainer?: CSSProperties;
  block?: CSSProperties;
  btnHover?: any;
}

const styles: StyleHTMLAttributes = {
  container: {
    backgroundColor: "#FFD8D8",
    clipPath: "polygon(0 5vh, 100% 0,100% 100% , 0 100%)",
    paddingTop: "5vh",
    transform: `translate(0, -5vh)`,
    display: "grid",
    placeItems: "center",
    paddingBottom: "5vh",
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 28,
    alignItems: "center",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#9848D7",
    textAlign: "center",
    padding: 24,
    paddingTop: "calc(5vh + 24px)",
  },
  input: {
    width: 380,
    lineHeight: 1.5,
    border: "3px solid #CCCCCC",
    boxSizing: "border-box",
    borderRadius: 15,
    fontSize: 26,
    marginLeft: -2,
    color: palette.text.grey,
  },
  boxesContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "1000px",
    margin: "auto",
  },
  subContainer: {
    backgroundColor: "white",
    width: "calc(1000px - 10vh)",
    padding: "5vh",
    borderRadius: 20,
    margin: "auto",
    marginTop: "10vh",
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 26,
    letterSpacing: "0.02em",
    color: palette.text.grey,
  },
  button: {
    width: 209,
    height: 48,
    fontFamily: "Poppins",
    fontSize: 26,
    letterSpacing: "0.02em",
    color: "#FFFFFF",
    backgroundColor: "#9848D7",
    borderRadius: 20,
    border: "none",
    cursor: "pointer",
  },
  btnContainer: { display: "grid", placeItems: "center", marginTop: "5vh" },
  block: {
    backgroundColor: "#FFD8D8",
    height: "5vh",
    width: "100%",
    marginTop: "-5vh",
  },
  btnHover: { border: "3px solid #CCCCCC" },
};

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div id="contact">
      <div style={styles.container}>
        <p style={styles.title}>Get in touch</p>
        <div style={styles.boxesContainer}>
          <ContactBox text="mohamed-j-34a510122" icon={Linkedin} />
          <ContactBox text="+216 54 939 984" icon={Phone} />
          <ContactBox text="mohamed.jerbi2012@gmail.com" icon={Mail} />
        </div>
        <div style={styles.subContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={styles.text}>Full Name:</p>
              <input
                style={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <p style={styles.text}>Email:</p>
              <input
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p style={styles.text}>Subject:</p>
            <input
              style={{ ...styles.input, width: "calc(100% + 2px)" }}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <p style={styles.text}>Details:</p>
            <textarea
              rows={4}
              minLength={10}
              style={{ ...styles.input, width: "calc(100% + 2px)" }}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div style={styles.btnContainer}>
            <motion.button whileHover={styles.btnHover} style={styles.button}>
              Submit
            </motion.button>
          </div>
        </div>
      </div>
      <div style={styles.block} />
    </div>
  );
};

export default Contact;
