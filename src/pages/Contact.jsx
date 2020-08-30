import React from "react";
import "../styles/Contact.css";

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact--container page-container">
      <h2 className="contact-header">Contact me and check out my work:</h2>
      <div className="contact-links-container">
        <li>
          <a
            href="https://github.com/patrykraj"
            className="contact-link"
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
            className="contact-link"
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
            className="contact-link"
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
