import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Game from "./Game";
import Ranking from "./Ranking";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

import "../styles/Quiz.css";

const Quiz = () => {
  return (
    <BrowserRouter basename={"/millionaire-quiz"}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Quiz;
