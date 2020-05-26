import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Main path="/" />
      </Router>
    </div>
  );
};

export default App;
