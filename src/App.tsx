import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import palette from "./palette";
import useWindowDimensions from "./pages/Projects/useWindowDimensions";
import { StyleHTMLAttributes } from "./utils/interfaces";

const generateStyles: (mobile: boolean) => StyleHTMLAttributes = (
  mobile: boolean
) => ({
  container: {
    display: "grid",
    gridTemplateColumns: mobile ? " auto " : "auto 808px auto",
    gridTemplateRows: "49px",
  },

  nav: mobile
    ? {
        display: "grid",
        gridTemplateColumns: "50% auto auto",
        gridTemplateRows: "49px",
        paddingLeft: 49,
        backgroundColor: palette.background.blue,
      }
    : {
        display: "grid",
        gridTemplateColumns: "auto 108px 60px",
        gridTemplateRows: "49px",
        backgroundColor: palette.background.blue,
      },
  text: {
    fontFamily: "Lato",
    fontSize: 17,
    lineHeight: 20,
    display: "flex",
    alignItems: "center",
    alignText: "center",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  logo: { fontFamily: "Sawarabi Gothic", fontSize: 19, lineHeight: 29 },
  navBackground: { backgroundColor: palette.background.blue },
});

function App() {
  const { width } = useWindowDimensions();
  const mobile = width < 850;
  const styles = generateStyles(mobile);

  return (
    <div>
      <div style={styles.container}>
        {!mobile && <div style={styles.navBackground} />}
        <div style={styles.nav}>
          <p
            style={{
              ...styles.text,
              ...styles.logo,
            }}
          >
            Mohamed Jerbi
          </p>
          <a style={styles.text} href="#projects">
            Projects
          </a>
          <a style={styles.text} href="#contact">
            Contact
          </a>
        </div>
        {!mobile && <div style={styles.navBackground} />}
      </div>
      <Projects mobile={mobile} />
      <Skills />
      <Contact mobile={mobile} />
    </div>
  );
}

export default App;
