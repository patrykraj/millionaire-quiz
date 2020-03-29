import React from "react";

const ConfirmAnswer = props => {
  return (
    <div className="submit--container fullscreen">
      <div className="submit--answer">
        <p className="submit quest">Is that your final answer?</p>
      </div>
      <div className="answer--row">
        <div className="answer--box">
          <button
            onClick={() => props.handleConfirmation(true)}
            className="answer quest"
          >
            Yes
          </button>
        </div>
        <div className="answer--box">
          <button
            onClick={() => props.handleConfirmation(false)}
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
