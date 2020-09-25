import React from "react";

import classes from "./Error.module.css";

const Contact = () => {
  return (
    <div className={`${classes.ErrorContainer} page-container`}>
      <h2 className={classes.ErrorHandlerHeader}>Error 404</h2>
      <h3 className={classes.ErrorHandlerCaption}>not found</h3>
    </div>
  );
};

export default Contact;
