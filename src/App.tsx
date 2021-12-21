import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import palette from "./palette";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "auto 808px auto",
    gridTemplateRows: "49px",
  },
  nav: {
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
};

function App() {
  return (
    <div style={{ scale: 0.4 }}>
      <div style={styles.container}>
        <div style={styles.navBackground} />
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
        <div style={styles.navBackground} />
      </div>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
