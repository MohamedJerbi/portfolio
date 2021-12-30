import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactBox from "./ContactBox";
import Linkedin from "../../assets/ContactIcons/linkedin.svg";
import Phone from "../../assets/ContactIcons/phone.svg";
import Mail from "../../assets/ContactIcons/mail.svg";
import palette from "../../palette";
import { StyleHTMLAttributes } from "../../utils/interfaces";
import { sendContact } from "../../firebase/firebase.utils";

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
  inputsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  input: {
    width: mobile ? "80vw" : 380,
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
    justifyContent: mobile ? "center" : "space-between",
    width: mobile ? "100%" : "1000px",
    margin: "auto",
    flexWrap: "wrap",
  },
  subContainer: {
    backgroundColor: "white",
    width: mobile ? "calc(100% - 64px)" : "calc(1000px - 10vh)",
    padding: mobile ? 16 : "5vh",
    borderRadius: mobile ? 10 : 20,
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
  alert: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: 50,
    zIndex: 2,
    color: "white",
    textAlign: "center",
    fontSize: 19,
    lineHeight: 0.5,
  },
});

interface Info {
  [prop: string]: string;
}

const contactInfo: Info = {
  email: "mohamed.jerbi2012@gmail.com",
  phone: "+216 54 939 984",
  linkedinId: "mohamed-j-34a510122",
  linkedinUrl: "https://www.linkedin.com/in/mohamed-j-34a510122/",
};

const Contact: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const styles = generateStyles(mobile);
  const handleSubmit = () => {
    if (!(name && email && subject && details)) return;
    sendContact(name, email, subject, details)
      .then(() =>
        setStatus({
          success: true,
          message: "Your message was sent succefully :)",
        })
      )
      .catch(() =>
        setStatus({
          success: false,
          message: "We encountered an error sending your message :/",
        })
      )
      .finally(() => setTimeout(() => setStatus(null), 3000));
  };
  return (
    <div id="contact">
      <motion.div
        animate={{
          backgroundColor: status?.success ? "#00a152" : "#f44336",
          opacity: status ? 1 : 0,
        }}
        style={styles.alert}
      >
        <p>{status?.message}</p>
      </motion.div>
      <div style={styles.container}>
        <p style={styles.title}>Get in touch</p>
        <div style={styles.boxesContainer}>
          <ContactBox
            mobile={mobile}
            text={contactInfo.linkedinId}
            icon={Linkedin}
            url={contactInfo.linkedinUrl}
          />
          <ContactBox
            mobile={mobile}
            text={contactInfo.phone}
            icon={Phone}
            url={"tel:" + contactInfo.phone.trim()}
          />
          <ContactBox
            mobile={mobile}
            text={contactInfo.email}
            icon={Mail}
            url={"mailto:" + contactInfo.email}
          />
        </div>
        <div style={styles.subContainer}>
          <div style={styles.inputsContainer}>
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
            <motion.button
              whileHover={styles.btnHover}
              style={styles.button}
              onClick={handleSubmit}
            >
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
