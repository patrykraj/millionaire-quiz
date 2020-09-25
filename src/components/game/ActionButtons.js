import React from "react";

import QuitButton from "./QuitButton";
import LifelinesButton from "../lifelines/LifelinesButton";

import classes from "./QuitButton.module.css";

const ActionButtons = () => {
  return (
    <div className={classes.ButtonsContainer}>
      <QuitButton />
      <LifelinesButton />
    </div>
  );
};

export default ActionButtons;
