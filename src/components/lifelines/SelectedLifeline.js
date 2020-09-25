import React from "react";

import Chart from "./Chart";

import classes from "./SelectedLifeline.module.css";

const SelectedLifeline = ({ hint, answers }) => {
  let results, data;

  if (typeof hint === "number") {
    results = (
      <div className={classes.PhoneContainer}>
        {" "}
        <h2 className={classes.Lifeline50Logo}>50|50</h2>
      </div>
    );
  } else if (typeof hint === "string") {
    results = (
      <div className={classes.PhoneContainer}>
        <span className={`${classes.MaterialIcons} material-icons`}>
          local_phone
        </span>
        <div className={classes.PhoneDotsContainer}>
          <div className={classes.PhoneDot}></div>
          <div className={classes.PhoneDot}></div>
          <div className={classes.PhoneDot}></div>
        </div>
      </div>
    );
    data = <span>{hint}</span>;
  } else {
    const result = [];

    for (let [key, value] of Object.entries(hint)) {
      answers.map((answer) => {
        if (key === answer.text) {
          const obj = {
            [answer.id]: value,
          };
          result.push(obj);
        }
        return null;
      });
    }

    function compare(a, b) {
      const aID = Object.keys(a);
      const bID = Object.keys(b);

      if (aID > bID) return 1;
      else if (aID < bID) return -1;
      else return 0;
    }

    result.sort(compare);

    results = result.map((item) => (
      <Chart key={Object.keys(item)} height={Object.values(item)} />
    ));

    data = result.map((item) => (
      <span className="chart--data" key={Object.keys(item)}>
        {Object.keys(item)}: {Object.values(item)}%
      </span>
    ));
  }

  return (
    <>
      <div className={classes.LifelineChart}>{results}</div>
      <div className={classes.LifelineResult}>{data}</div>
    </>
  );
};

export default SelectedLifeline;
