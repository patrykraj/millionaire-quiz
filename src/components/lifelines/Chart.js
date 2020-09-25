import React from "react";

import classes from "./Chart.module.css";

const Chart = ({ height }) => {
  return (
    <div
      className={classes.Chart}
      style={{
        display: height ? "block" : "none",
        height: `${height * 2.3}px`,
      }}
    ></div>
  );
};

export default Chart;
