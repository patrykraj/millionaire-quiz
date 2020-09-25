import React, { useContext } from "react";
import { Context } from "../../context/Context";

import classes from "./LifelinesButton.module.css";

const LifelinesButton = () => {
  const [state, setState] = useContext(Context);

  const { lifelinesVisible } = state;

  const handleLifelinesVisibility = () => {
    setState((state) => ({
      ...state,
      lifelinesVisible: !state.lifelinesVisible,
    }));
  };

  return (
    <button
      className={
        lifelinesVisible
          ? `${classes.ToggleLifelines} ${classes.ActiveLifelinesBtn}`
          : classes.ToggleLifelines
      }
      onClick={handleLifelinesVisibility}
    >
      <span className={`${classes.MaterialIcons} material-icons`}>
        contact_support
      </span>
    </button>
  );
};

export default LifelinesButton;
