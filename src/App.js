import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Main from "./components/Main";
import { About } from "./components/About";
import Projects from "./components/Projects";
import ContactPage from "./components/Contact";

class App extends Component {
  state = {
    click: false,
    toggle: false,
    normalMode: {
      color: "#030303",
      background: "#dbfcff",
      textBackground: "#f2feff",
      border: "#0303037a"
    },
    darkMode: {
      color: "#ddfbff",
      background: "#030303",
      textBackground: "#131313",
      border: "#ddfbff"
    },
  };

  handleClick = () => {
    this.setState((currentState) => {
      return { click: !currentState.click };
    });
  };

  handleToggle = (e) => {
    this.setState((currentState) => {
      return { toggle: !currentState.toggle };
    });
  };
  render() {
    const { click, toggle, normalMode, darkMode } = this.state;
    return (
      <div className="App">
        <Header
          handleClick={this.handleClick}
          click={click ? 1 : 0}
          handleToggle={this.handleToggle}
          toggle={toggle}
        />
        <Router primary={false}>
          <Main
            path="/"
            click={click ? 1 : 0}
            theme={click ? darkMode : normalMode}
          />
          <About path="/about" theme={click ? darkMode : normalMode} />
          <Projects path="/projects" theme={click ? darkMode : normalMode} />
          <ContactPage
            path="contact"
            theme={click ? darkMode : normalMode}
          ></ContactPage>
        </Router>
      </div>
    );
  }
}

export default App;
