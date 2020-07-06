import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Main from "./components/Main";
import { About } from "./components/About";
import Projects from "./components/Projects";
import "./App.css";
import ContactPage from "./components/Contact";

const App = () => {
  const [click, setClick] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const handleToggle = (e) => {
    console.log(e);
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <Header
        handleClick={handleClick}
        click={click}
        handleToggle={handleToggle}
        toggle={toggle}
      />
      <Router>
        <Main path="/" click={click} />
        <About path="/about" />
        <Projects path="/projects" />
        <ContactPage path="contact"></ContactPage>
      </Router>
    </div>
  );
};

export default App;
