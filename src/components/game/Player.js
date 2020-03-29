import React from "react";

import "../../styles/Player.css";

const Player = props => {
  return (
    <div className="player--container">
      <form className="player--form" onSubmit={props.prevent}>
        <label className="player--label" htmlFor="player">
          Set Player Name
        </label>
        <div className="input--container">
          <input
            style={props.wrongInput ? { border: "2px solid crimson" } : null}
            className="player--input"
            id="player"
            type="text"
            placeholder="Player Name"
            value={props.input}
            maxLength={10}
            onChange={props.setPlayerName}
          />
          {props.wrongInput ? (
            <span className="invalid--input">Min. 3 characters</span>
          ) : null}
        </div>
        <button
          className="player--submit main--btn"
          type="submit"
          onClick={props.startGame}
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default Player;
