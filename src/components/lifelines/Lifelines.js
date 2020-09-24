import React, { useContext } from "react";
import { Context } from "../../context/Context";

import "../../styles/Lifelines.css";
import Lifeline from "./Lifeline";
import SelectedLifeline from "./SelectedLifeline";

const Lifelines = ({ setQuestionDifficulty }) => {
  const [state, setState] = useContext(Context);

  const { answers, hint, availableLifelines, lifelinesVisible } = state;

  const handleLifeline = (selectedLifeline) => {
    const { answers } = state;

    if (selectedLifeline === "50/50") {
      let i = 0;
      const removed = [];

      while (i < 2) {
        let num = Math.floor(Math.random() * answers.length);
        if (
          answers[num].text &&
          answers[num].text !== state.correctAnswer &&
          !removed.includes(answers[num].text)
        ) {
          removed.push(answers[num].text);
          i++;
        }
      }

      setState((prevState) => ({
        ...state,
        answers: prevState.answers.map((answer) =>
          removed.includes(answer.text) ? { ...answer, text: "" } : answer
        ),
        availableLifelines: prevState.availableLifelines.map((lifeline) =>
          lifeline.value === selectedLifeline
            ? { ...lifeline, used: true }
            : lifeline
        ),
        hint: 50,
      }));
    } else {
      let lifelineAnswers = [];
      let hint = "";

      answers.map((answer) =>
        answer.text ? lifelineAnswers.push(answer.text) : null
      );

      if (selectedLifeline === "call") {
        for (let i = 0; i < 2; i++) {
          lifelineAnswers.push(state.correctAnswer);
        }

        const num = Math.floor(Math.random() * lifelineAnswers.length);
        const replyAnswer = lifelineAnswers[num];
        const replies = [
          `Umm... I'm not sure, but I think it's ${replyAnswer}.`,
          `I don't know, but my guess is ${replyAnswer}.`,
          `It surely is ${replyAnswer}!`,
          `Sorry, I can't help you.`,
        ];
        hint = replies[Math.floor(Math.random() * replies.length)];
      } else {
        const dif = setQuestionDifficulty();
        if (dif !== "easy") {
          let randomizeOutcome = Math.floor(
            Math.random() * lifelineAnswers.length
          );

          const randomAnswer = lifelineAnswers[randomizeOutcome];

          for (let i = 0; i < 2; i++) {
            lifelineAnswers.push(randomAnswer);
          }
        }

        for (let i = 0; i < 2; i++) {
          lifelineAnswers.push(state.correctAnswer);
        }

        let abcd = [];
        for (let i = 0; i < 100; i++) {
          abcd.push(
            lifelineAnswers[Math.floor(Math.random() * lifelineAnswers.length)]
          );
        }

        const counter = {};
        for (let i = 0; i < abcd.length; i++) {
          let answer = abcd[i];
          counter[answer] = counter[answer] ? counter[answer] + 1 : 1;
        }

        hint = counter;
      }

      setState((prevState) => ({
        ...state,
        availableLifelines: prevState.availableLifelines.map((lifeline) =>
          lifeline.value === selectedLifeline
            ? { ...lifeline, used: true }
            : lifeline
        ),
        hint,
      }));
    }
  };

  const lifelines = availableLifelines.map((lifeline) => (
    <Lifeline
      handleLifeline={handleLifeline}
      key={lifeline.value}
      value={lifeline.value}
      used={lifeline.used}
    />
  ));

  return (
    <div
      className={
        lifelinesVisible
          ? "lifelines--container board lifelines--visible"
          : "lifelines--container board"
      }
    >
      <div className="lifelines">{lifelines}</div>
      {hint ? <SelectedLifeline hint={hint} answers={answers} /> : null}
    </div>
  );
};

export default Lifelines;
