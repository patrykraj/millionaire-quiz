import React from "react";

const QuitGame = props => {
  const win = [
    0,
    500,
    1000,
    2000,
    5000,
    10000,
    20000,
    40000,
    75000,
    125000,
    250000,
    500000
  ];

  return (
    <div className="submit--container fullscreen">
      <div className="submit--answer">
        <p className="submit quest">
          Are you sure to leave the game with ${win[props.questionNumber - 1]}?
        </p>
      </div>
      <div className="answer--row">
        <div className="answer--box">
          <button
            onClick={() => props.quit(true, win[props.questionNumber - 1])}
            className="answer quest"
          >
            Yes
          </button>
        </div>
        <div className="answer--box">
          <button onClick={() => props.quit(false)} className="answer quest">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuitGame;
