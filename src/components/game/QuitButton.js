import React, { useContext } from "react";
import { Context } from "../../context/Context";

import classes from "./QuitButton.module.css";

const QuitButton = () => {
  const [state, setState] = useContext(Context);

  const { confirmed } = state;

  const handleQuitBtn = () => {
    if (confirmed) return;
    setState({
      ...state,
      quitGame: true,
    });
  };

  return (
    <button className={classes.QuitBtn} onClick={handleQuitBtn}>
      <span className={`${classes.MaterialIcon} material-icons`}>
        exit_to_app
      </span>
    </button>
  );
};

export default QuitButton;
