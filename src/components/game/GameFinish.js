import React from "react";

const GameFinish = (props) => {
  const loss = (
    <>
      <h3>Game over!</h3>
      <h4>
        Congratulations {props.name}, you won ${props.prize}.
      </h4>
      <p>Would you like to start again?</p>
    </>
  );

  const win = (
    <>
      <h3>Congratulations, {props.name}!</h3>
      <h2 className="millionaire">You just became a MILLIONAIRE!!!</h2>
      <p>Would you like to start again?</p>
    </>
  );

  return (
    <div className="gameOver--container fullscreen">
      <div className="submit--answer">
        <div className="submit quest">{props.gameOver ? loss : win}</div>
      </div>
      <div className="answer--row">
        <div className="answer--box">
          <button onClick={() => props.reset()} className="answer quest">
            Yes
          </button>
        </div>
        <div className="answer--box">
          <a href="/">
            <button className="answer quest">No</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameFinish;
