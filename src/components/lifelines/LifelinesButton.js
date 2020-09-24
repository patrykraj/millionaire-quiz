import React, { useContext } from "react";
import { Context } from "../../context/Context";

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
          ? "toggle--lifelines active--lifelines__btn"
          : "toggle--lifelines"
      }
      onClick={handleLifelinesVisibility}
    >
      <span className="material-icons">contact_support</span>
    </button>
  );
};

export default LifelinesButton;
