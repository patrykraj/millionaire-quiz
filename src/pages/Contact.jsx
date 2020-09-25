import React from "react";
import classes from "./Contact.module.css";

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className={`${classes.ContactContainer} page-container`}>
      <h2 className={classes.ContactHeader}>
        Contact me and check out my work:
      </h2>
      <div className={classes.ContactLinksContainer}>
        <li>
          <a
            href="https://github.com/patrykraj"
            className={classes.ContactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <AiFillGithub />
            </span>
            patrykraj
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/patryk-krajewski-9997071b4"
            className={classes.ContactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <AiFillLinkedin />
            </span>
            Patryk Krajewski
          </a>
        </li>
        <li>
          <a
            href="mailto:patrykraj@interia.pl"
            className={classes.ContactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <AiOutlineMail />
            </span>
            patrykraj@interia.pl
          </a>
        </li>
      </div>
    </div>
  );
};

export default Contact;
