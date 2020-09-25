import React, { useContext } from "react";
import { Context } from "../../context/Context";

import classes from "../questions/ConfirmAnswer.module.css";

const QuitGame = () => {
  const [state, setState] = useContext(Context);

  const { questionNumber, prize } = state;

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
    500000,
  ];

  const quit = (gameOver, win = prize) => {
    setState({
      ...state,
      quitGame: false,
      prize: win,
      gameOver,
    });
  };

  return (
    <div className="submit--container fullscreen">
      <div className="submit--answer">
        <p className={`submit ${classes.Quest}`}>
          Are you sure to leave the game with ${win[questionNumber - 1]}?
        </p>
      </div>
      <div className={classes.AnswerRow}>
        <div className={classes.AnswerBox}>
          <button
            onClick={() => quit(true, win[questionNumber - 1])}
            className={`${classes.Answer} ${classes.Quest}`}
          >
            Yes
          </button>
        </div>
        <div className={classes.AnswerBox}>
          <button
            onClick={() => quit(false)}
            className={`${classes.Answer} ${classes.Quest}`}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuitGame;
