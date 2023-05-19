import React from "react";
import "./App.css";
import Home from "./sectionsLayout/home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./sectionsLayout/About";
import Projects from "./sectionsLayout/Projects";
import ButtonTop from "./sectionsLayout/ButtonTop"
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <ButtonTop/>
    </div>
  );
}

export default App;
