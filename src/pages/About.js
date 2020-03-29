import React from "react";

const Contact = () => {
  return (
    <div className="about--container page-container">
      <article className="about--game">
        <h2>Millionaire quiz</h2>
        <p>
          This game has been created with ReactJS. It is based on a worldwide
          famous TV show.
        </p>
        <p>
          The rules are simple; each question has 4 possible answers and only
          one is correct. If you choose incorrect answer then you lose all the
          money. After questions 2 {"&"} 7 there is a guaranteed prize, e.g. if
          you answer incorrectly for question number 5 (worth $10 000) then your
          prize equals guaranteed $1000. There are 3 lifelines which you can use
          at any time:
        </p>
        <ul>
          <li>50/50 - rejects two incorrect answers;</li>
          <li>Friend call - might give you the right answer;</li>
          <li>Ask audience - audience casts its vote;</li>
        </ul>
        <p>
          You can also resign at any time and take the money worth of the last
          correctly answered questions. Enjoy :)
        </p>
      </article>
    </div>
  );
};

export default Contact;
