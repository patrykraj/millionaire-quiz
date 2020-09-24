import React, { useContext } from "react";
import { Context } from "../../context/Context";

import Answer from "./Answer";
import "../../styles/Question.css";

const Question = (props) => {
  const [state, setState] = useContext(Context);

  const showConfirmation = (e) => {
    if (selectedAnswer || confirmed) return;
    setState({
      ...state,
      selectedAnswer: e.target.value,
    });
  };

  const { question, answers, selectedAnswer, correctAnswer, confirmed } = state;

  const answers1 = [];
  const answers2 = [];
  for (let i = 0; i < answers.length; i++) {
    if (i < 2) {
      answers1.push(
        <Answer
          key={answers[i].id}
          showConfirmation={showConfirmation}
          data={answers[i]}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
          confirmed={confirmed}
        />
      );
    } else {
      answers2.push(
        <Answer
          key={answers[i].id}
          showConfirmation={showConfirmation}
          data={answers[i]}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
          confirmed={confirmed}
        />
      );
    }
  }

  return (
    <div className="question--container">
      <div className="question--box">
        <p className="question quest">{question}</p>
      </div>
      <div className="answers--container">
        <div className="answer--row">{answers1}</div>
        <div className="answer--row">{answers2}</div>
      </div>
    </div>
  );
};

export default Question;
