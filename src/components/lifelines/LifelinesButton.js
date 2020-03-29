import React from "react";

const LifelinesButton = props => {
  return (
    <button
      className={
        props.lifelinesVisible
          ? "toggle--lifelines active--lifelines__btn"
          : "toggle--lifelines"
      }
      onClick={props.handleLifelinesVisibility}
    >
      <span className="material-icons">contact_support</span>
    </button>
  );
};

export default LifelinesButton;
