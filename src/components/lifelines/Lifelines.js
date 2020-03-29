import React from "react";

import "../../styles/Lifelines.css";
import Lifeline from "./Lifeline";
import SelectedLifeline from "./SelectedLifeline";

const Lifelines = props => {
  const lifelines = props.availableLifelines.map(lifeline => (
    <Lifeline
      handleLifeline={props.handleLifeline}
      key={lifeline.value}
      value={lifeline.value}
      used={lifeline.used}
    />
  ));

  return (
    <div
      className={
        props.lifelinesVisible
          ? "lifelines--container board lifelines--visible"
          : "lifelines--container board"
      }
    >
      <div className="lifelines">{lifelines}</div>
      {props.hint ? (
        <SelectedLifeline hint={props.hint} answers={props.answers} />
      ) : null}
    </div>
  );
};

export default Lifelines;
