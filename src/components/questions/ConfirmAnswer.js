import React, { useContext } from "react";
import { Context } from "../../context/Context";

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
        <p className="submit quest">Is that your final answer?</p>
      </div>
      <div className="answer--row">
        <div className="answer--box">
          <button
            onClick={() => handleConfirmation(true)}
            className="answer quest"
          >
            Yes
          </button>
        </div>
        <div className="answer--box">
          <button
            onClick={() => handleConfirmation(false)}
            className="answer quest"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAnswer;
