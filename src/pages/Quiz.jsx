import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Game from "./Game.jsx";
import Ranking from "./Ranking.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Error from "./Error.jsx";
import "../styles/Quiz.css";

const Quiz = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  window.addEventListener("orientationchange", function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default Quiz;
