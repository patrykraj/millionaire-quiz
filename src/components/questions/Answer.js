import React from "react";

import classes from "./Answer.module.css";

const Answer = ({
  data,
  showConfirmation,
  confirmed,
  selectedAnswer,
  correctAnswer,
}) => {
  return (
    <div className={classes.AnswerBox}>
      <button
        value={data.text}
        onClick={showConfirmation}
        className={
          correctAnswer === data.text && confirmed
            ? `${classes.Answer} ${classes.Quest} ${classes.CorrectAnswer}`
            : data.text && selectedAnswer === data.text
            ? `${classes.Answer} ${classes.Quest} ${classes.SelectedAnswer}`
            : !data.text
            ? `${classes.Answer} ${classes.Quest} disabled--btn`
            : `${classes.Answer} ${classes.Quest}`
        }
      >
        <span className={classes.TextOrange}>{data.id}</span>
        {": "}
        {data.text}
      </button>
    </div>
  );
};

export default Answer;
