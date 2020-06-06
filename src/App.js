import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Main path="/" />
        <About path="/about"/>
      </Router>
      kjndsddssdds kjndsddssdds kjndsddssdds kjndsddssdds kjndsddssdds
      kjndsddssdds kjndsddssdds kjndsddssdds kjndsddssdds kjndsddssdds
      kjndsddssdds kjndsddssdds kjndsddssdds kjndsddssdds kjndsddssdds
      kjndsddssdds kjndsddssdds kjndsddssdds kjndsddssdds kjndsddssdds
      kjndsddssdds
    </div>
  );
};

export default App;
