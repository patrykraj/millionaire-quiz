import React from "react";
import Menu from "../components/Menu";

import classes from "./Home.module.css";

function Home() {
  return (
    <main className={classes.HomePage}>
      <header className={classes.Header}>
        <h1>Millionaire Quiz</h1>
      </header>
      <nav>
        <Menu />
      </nav>
      <footer>
        <p>2020 created by Patrykraj</p>
      </footer>
    </main>
  );
}

export default Home;
