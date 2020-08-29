import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact--container page-container">
      <h2 className="contact-header">Contact me!</h2>
      <form className="contact-form">
        <textarea className="message" placeholder="Your message..."></textarea>
        <input
          className="contact-email"
          type="email"
          placeholder="Your email"
        ></input>
        <button className="submit--message__btn main--btn">Send</button>
      </form>
    </div>
  );
};

export default Contact;
