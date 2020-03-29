import React from "react";
import "../../styles/ActionButtons.css";

const QuitButton = props => {
  return (
    <button className="quit--btn" onClick={props.handleQuitBtn}>
      <span className="material-icons">exit_to_app</span>
    </button>
  );
};

export default QuitButton;
