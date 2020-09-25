import React, { useContext } from "react";
import { Context } from "../../context/Context";

import classes from "./ConfirmAnswer.module.css";

const ConfirmAnswer = () => {
  const [state, setState] = useContext(Context);

  const { selectedAnswer } = state;

  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      setState({
        ...state,
        confirmed,
        userAnswer: selectedAnswer,
      });
    } else {
      setState({
        ...state,
        confirmed,
        selectedAnswer: "",
      });
    }
  };

  return (
    <div className="submit--container fullscreen">
      <div className="submit--answer">
        <p className={`submit ${classes.Quest}`}>Is that your final answer?</p>
      </div>
      <div className={classes.AnswerRow}>
        <div className={`${classes.AnswerBox}`}>
          <button
            onClick={() => handleConfirmation(true)}
            className={`${classes.Answer} ${classes.Quest}`}
          >
            Yes
          </button>
        </div>
        <div className={`${classes.AnswerBox}`}>
          <button
            onClick={() => handleConfirmation(false)}
            className={`${classes.Answer} ${classes.Quest}`}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAnswer;
