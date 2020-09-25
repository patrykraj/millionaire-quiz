import React from "react";

import classes from "./Result.module.css";

const Result = ({ questionNumber, id, value }) => {
  return (
    <li
      className={
        questionNumber === id
          ? `${classes.Result} ${classes.CurrentQuestion}`
          : id === 2 || id === 7 || id === 12
          ? `${classes.Result} ${classes.Guaranteed}`
          : `${classes.Result}`
      }
    >
      <span className={classes.ResultNumber}>
        {questionNumber > id ? `${id} \u25C6` : id}
      </span>{" "}
      {value}
    </li>
  );
};

export default Result;
