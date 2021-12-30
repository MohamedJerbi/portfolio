import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactBox from "./ContactBox";
import Linkedin from "../../assets/ContactIcons/linkedin.svg";
import Phone from "../../assets/ContactIcons/phone.svg";
import Mail from "../../assets/ContactIcons/mail.svg";
import palette from "../../palette";
import { StyleHTMLAttributes } from "../../utils/interfaces";

interface MyStyleHTMLAttributes extends StyleHTMLAttributes {
  btnHover?: any;
}

const generateStyles: (mobile: boolean) => MyStyleHTMLAttributes = (
  mobile
) => ({
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
    width: mobile ? "auto" : 380,
    lineHeight: 1.5,
    border: "2px solid #CCCCCC",
    boxSizing: "border-box",
    borderRadius: 10,
    fontSize: 20,
    marginLeft: -4,
    color: palette.text.grey,
    outlineColor: "#9848D7",
  },
  boxesContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: mobile ? "auto" : "1000px",
    margin: "auto",
  },
  subContainer: {
    backgroundColor: "white",
    width: mobile ? "100%" : "calc(1000px - 10vh)",
    padding: "5vh",
    borderRadius: 20,
    margin: "auto",
    marginTop: "10vh",
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 19,
    letterSpacing: "0.02em",
    color: palette.text.grey,
  },
  button: {
    width: 150,
    height: 36,
    fontFamily: "Poppins",
    fontSize: 21,
    letterSpacing: "0.02em",
    color: "#FFFFFF",
    backgroundColor: "#9848D7",
    borderRadius: 18,
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
  btnHover: { border: "2px solid #CCCCCC" },
});

const Contact: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const styles = generateStyles(mobile);
  return (
    <div id="contact">
      <div style={styles.container}>
        <p style={styles.title}>Get in touch</p>
        <div style={styles.boxesContainer}>
          <ContactBox
            mobile={mobile}
            text="mohamed-j-34a510122"
            icon={Linkedin}
          />
          <ContactBox mobile={mobile} text="+216 54 939 984" icon={Phone} />
          <ContactBox
            mobile={mobile}
            text="mohamed.jerbi2012@gmail.com"
            icon={Mail}
          />
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
                minLength={3}
              />
            </div>
            <div>
              <p style={styles.text}>Email:</p>
              <input
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
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
              style={{ ...styles.input, width: "calc(100% + 4px)" }}
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
