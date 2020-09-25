import React from "react";

import classes from "./Lifeline.module.css";

const Lifeline = ({ value, used, handleLifeline }) => {
  let icon = "50|50";
  if (value === "call")
    icon = (
      <span className={`${classes.MaterialIcons} material-icons`}>
        local_phone
      </span>
    );
  else if (value === "audience")
    icon = (
      <span className={`${classes.MaterialIcons} material-icons`}>person</span>
    );

  return (
    <div className={classes.Lifeline}>
      <button
        onClick={!used ? () => handleLifeline(value) : null}
        className={
          used
            ? `${classes.LifelineBtn} ${classes.DisabledBtn}`
            : classes.LifelineBtn
        }
        value={value}
      >
        {icon}
      </button>
    </div>
  );
};

export default Lifeline;
