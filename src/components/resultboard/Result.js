import React from "react";

const Result = props => {
  return (
    <li
      className={
        props.questionNumber === props.id
          ? "result currentQuestion"
          : props.id === 2 || props.id === 7 || props.id === 12
          ? "result guaranteed"
          : "result"
      }
    >
      <span className="result--number">
        {props.questionNumber > props.id ? `${props.id} \u25C6` : props.id}
      </span>{" "}
      {props.value}
    </li>
  );
};

export default Result;
