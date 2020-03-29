import React from "react";

const Lifeline = props => {
  let icon = "50|50";
  if (props.value === "call")
    icon = <span className="material-icons">local_phone</span>;
  else if (props.value === "audience")
    icon = <span className="material-icons">person</span>;

  return (
    <div className="lifeline">
      <button
        onClick={!props.used ? () => props.handleLifeline(props.value) : null}
        className={props.used ? "lifeline--btn disabled--btn" : "lifeline--btn"}
        value={props.value}
      >
        {icon}
      </button>
    </div>
  );
};

export default Lifeline;
