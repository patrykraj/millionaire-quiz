import React from "react";

import classes from "./Question.module.css";

const Answer = (props) => {
  return (
    <div className={classes.AnswerBox}>
      <button
        value={props.data.text}
        onClick={props.showConfirmation}
        className={
          props.correctAnswer === props.data.text && props.confirmed
            ? `${classes.Answer} ${classes.Quest} ${classes.CorrectAnswer}`
            : props.data.text && props.selectedAnswer === props.data.text
            ? `${classes.Answer} ${classes.Quest} ${classes.SelectedAnswer}`
            : !props.data.text
            ? `${classes.Answer} ${classes.Quest} disabled--btn`
            : `${classes.Answer} ${classes.Quest}`
        }
      >
        <span className={classes.TextOrange}>{props.data.id}</span>
        {": "}
        {props.data.text}
      </button>
    </div>
  );
};

export default Answer;
