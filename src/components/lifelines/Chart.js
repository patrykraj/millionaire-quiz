import React from "react";

const Chart = props => {
  const { height } = props;

  return (
    <div
      className="chart"
      style={{
        display: height ? "block" : "none",
        height: `${height * 2.3}px`
      }}
    ></div>
  );
};

export default Chart;
