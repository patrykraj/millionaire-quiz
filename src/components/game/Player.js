import React, { useContext } from "react";
import { Context } from "../../context/Context";

import classes from "./Player.module.css";

const Player = ({ startGame }) => {
  const [state, setState] = useContext(Context);

  const { input, wrongInput } = state;

  const prevent = (e) => {
    e.preventDefault();
  };

  const setPlayerName = (e) => {
    setState({
      ...state,
      input: e.target.value,
    });
  };

  return (
    <div className={classes.PlayerContainer}>
      <form className={classes.PlayerForm} onSubmit={prevent}>
        <label className={classes.PlayerLabel} htmlFor="player">
          Set Player Name
        </label>
        <div className={classes.InputContainer}>
          <input
            style={wrongInput ? { border: "2px solid crimson" } : null}
            className={classes.PlayerInput}
            id="player"
            type="text"
            placeholder="Player Name"
            value={input}
            maxLength={10}
            onChange={setPlayerName}
          />
          {wrongInput ? (
            <span className={classes.InvalidInput}>Min. 3 characters</span>
          ) : null}
        </div>
        <button
          className="player--submit main--btn"
          type="submit"
          onClick={startGame}
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default Player;
