import React, { useContext } from "react";
import { Context } from "../../context/Context";

import "../../styles/Player.css";

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
    <div className="player--container">
      <form className="player--form" onSubmit={prevent}>
        <label className="player--label" htmlFor="player">
          Set Player Name
        </label>
        <div className="input--container">
          <input
            style={wrongInput ? { border: "2px solid crimson" } : null}
            className="player--input"
            id="player"
            type="text"
            placeholder="Player Name"
            value={input}
            maxLength={10}
            onChange={setPlayerName}
          />
          {wrongInput ? (
            <span className="invalid--input">Min. 3 characters</span>
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
