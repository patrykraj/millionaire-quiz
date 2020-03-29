import React from "react";

import Result from "./Result";
import "../../styles/ResultBoard.css";

const ResultBoard = props => {
  const prizes = [
    { id: 1, value: "500" },
    { id: 2, value: "1000" },
    { id: 3, value: "2000" },
    { id: 4, value: "5000" },
    { id: 5, value: "10 000" },
    { id: 6, value: "20 000" },
    { id: 7, value: "40 000" },
    { id: 8, value: "75 000" },
    { id: 9, value: "125 000" },
    { id: 10, value: "250 000" },
    { id: 11, value: "500 000" },
    { id: 12, value: "1 000 000" }
  ];

  const list = prizes
    .reverse()
    .map(prize => (
      <Result
        key={prize.id}
        id={prize.id}
        value={prize.value}
        questionNumber={props.questionNumber}
      />
    ));

  return (
    <div className="resultBoard board">
      <ul className="resultBoard--list">{list}</ul>
    </div>
  );
};

export default ResultBoard;
