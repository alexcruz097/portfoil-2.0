import React from "react";
import "./App.css";
import Home from "./sectionsLayout/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./sectionsLayout/About";
function App() {
  return (
    <div className="App">
      <Home />
      <About/>
    </div>
  );
}

export default App;
