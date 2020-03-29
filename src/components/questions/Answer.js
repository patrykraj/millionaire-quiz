import React from "react";

const Answer = props => {
  return (
    <div className="answer--box">
      <button
        value={props.data.text}
        onClick={props.showConfirmation}
        className={
          props.correctAnswer === props.data.text && props.confirmed
            ? "answer quest correct--answer"
            : props.data.text && props.selectedAnswer === props.data.text
            ? "answer quest selected--answer"
            : !props.data.text
            ? "answer quest disabled--btn"
            : "answer quest"
        }
      >
        <span className="text__orange">{props.data.id}</span>
        {": "}
        {props.data.text}
      </button>
    </div>
  );
};

export default Answer;
