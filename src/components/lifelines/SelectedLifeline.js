import React from "react";

import Chart from "./Chart";

const SelectedLifeline = props => {
  let results, data;

  if (typeof props.hint === "number") {
    results = (
      <div className="phone--container">
        {" "}
        <h2 className="lifeline50--logo">50|50</h2>
      </div>
    );
  } else if (typeof props.hint === "string") {
    results = (
      <div className="phone--container">
        <span className="material-icons">local_phone</span>
        <div className="phoneDots--container">
          <div className="phoneDot"></div>
          <div className="phoneDot"></div>
          <div className="phoneDot"></div>
        </div>
      </div>
    );
    data = <span>{props.hint}</span>;
  } else {
    const result = [];

    for (let [key, value] of Object.entries(props.hint)) {
      props.answers.map(answer => {
        if (key === answer.text) {
          const obj = {
            [answer.id]: value
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

    results = result.map(item => (
      <Chart key={Object.keys(item)} height={Object.values(item)} />
    ));

    data = result.map(item => (
      <span className="chart--data" key={Object.keys(item)}>
        {Object.keys(item)}: {Object.values(item)}%
      </span>
    ));
  }

  return (
    <>
      <div className="lifeline--chart">{results}</div>
      <div className="lifeline--result">{data}</div>
    </>
  );
};

export default SelectedLifeline;
