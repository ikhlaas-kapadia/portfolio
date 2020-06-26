import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Main from "./components/Main";
import { About } from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="App">
      <Header handleClick={handleClick} click={click} />
      <Router>
        <Main path="/" click={click} />
        <About path="/about" />
        <Projects path="/projects" />
      </Router>
    </div>
  );
};

export default App;
