import React from "react";
import Menu from "../components/Menu";
import "../styles/Home.css";

function Home() {
  return (
    <main className="homePage">
      <header className="header">
        <h1>Millionaire Quiz</h1>
      </header>
      <nav className="nav">
        <Menu />
      </nav>
      <footer className="footer">
        <p>2020 created by Patrykraj</p>
      </footer>
    </main>
  );
}

export default Home;
