import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.Loader}>
      <div className={classes.BubbleContainer}>
        <div className={classes.BubbleLoader}></div>
        <div className={classes.BubbleLoader}></div>
        <div className={classes.BubbleLoader}></div>
      </div>
    </div>
  );
};

export default Loader;
