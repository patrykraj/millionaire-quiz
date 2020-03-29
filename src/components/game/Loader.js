import React from "react";
import "../../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="bubble--container">
        <div className="bubble--loader"></div>
        <div className="bubble--loader"></div>
        <div className="bubble--loader"></div>
      </div>
    </div>
  );
};

export default Loader;
