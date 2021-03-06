import React from "react";

import classes from "./Ranking.module.css";

const Contact = () => {
  const arr = JSON.parse(localStorage.getItem("arr")) || [];
  const ranking = arr.map((rank, id) => (
    <li key={id}>
      <span>{id + 1}.</span>
      {rank.player} - ${rank.prize}
    </li>
  ));

  return (
    <div className={`${classes.RankingContainer} page-container`}>
      <ul className={classes.Ranking}>
        <h2>TOP 5 RANK</h2>
        {ranking}
      </ul>
    </div>
  );
};

export default Contact;
