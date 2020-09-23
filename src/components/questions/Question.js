import React from "react";

import Answer from "./Answer";
import "../../styles/Question.css";

const Question = (props) => {
  const answers = [];
  const answers2 = [];
  for (let i = 0; i < props.answers.length; i++) {
    if (i < 2) {
      answers.push(
        <Answer
          key={props.answers[i].id}
          showConfirmation={props.showConfirmation}
          data={props.answers[i]}
          selectedAnswer={props.selectedAnswer}
          correctAnswer={props.correctAnswer}
          confirmed={props.confirmed}
        />
      );
    } else {
      answers2.push(
        <Answer
          key={props.answers[i].id}
          showConfirmation={props.showConfirmation}
          data={props.answers[i]}
          selectedAnswer={props.selectedAnswer}
          correctAnswer={props.correctAnswer}
          confirmed={props.confirmed}
        />
      );
    }
  }

  return (
    <div className="question--container">
      <div className="question--box">
        <p className="question quest">{props.question}</p>
      </div>
      <div className="answers--container">
        <div className="answer--row">{answers}</div>
        <div className="answer--row">{answers2}</div>
      </div>
    </div>
  );
};

export default Question;
