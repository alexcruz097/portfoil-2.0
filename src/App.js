import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./sectionsLayout/Home";
import About from "./sectionsLayout/About";
import Projects from "./sectionsLayout/Projects";
import ButtonTop from "./sectionsLayout/ButtonTop";
import Contact from "./sectionsLayout/Contact";
import Footer from "./sectionsLayout/Footer";
import ScrollButton from "./ScrollButton";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <ButtonTop />
      <Contact />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
