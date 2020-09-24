import React, { useContext } from "react";
import { Context } from "../../context/Context";

const GameFinish = ({ shuffleAnswers, replaceErrors }) => {
  const [state, setState] = useContext(Context);

  const { name, gameOver, prize } = state;

  const reset = () => {
    setState({
      ...state,
      confirmed: false,
      gameOver: false,
      gameWon: false,
      question: "",
      questionNumber: 0,
      prize: 0,
      loading: true,
      answers: [
        { id: "A", text: "" },
        { id: "B", text: "" },
        { id: "C", text: "" },
        { id: "D", text: "" },
      ],
      availableLifelines: [
        { value: "50/50", used: false },
        { value: "call", used: false },
        { value: "audience", used: false },
      ],
      selectedAnswer: "",
      userAnswer: "",
      correctAnswer: "",
    });

    fetch(`https://opentdb.com/api.php?amount=1&type=multiple&difficulty=easy`)
      .then((response) => {
        if (response.ok) return response;
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        let answers = shuffleAnswers(
          data.results[0].incorrect_answers,
          data.results[0].correct_answer
        );

        data.results[0].question = replaceErrors(data.results[0].question);
        data.results[0].correct_answer = replaceErrors(
          data.results[0].correct_answer
        );
        answers = replaceErrors(answers);

        setState((state) => ({
          ...state,
          question: data.results[0].question,
          questionNumber: state.questionNumber + 1,
          correctAnswer: data.results[0].correct_answer,
          answers,
          lifelinesVisible: false,
          confirmed: false,
          loading: false,
          selectedAnswer: "",
          userAnswer: "",
          hint: "",
        }));
      });
  };

  const loss = (
    <>
      <h3>Game over!</h3>
      <h4>
        Congratulations {name}, you won ${prize}.
      </h4>
      <p>Would you like to start again?</p>
    </>
  );

  const win = (
    <>
      <h3>Congratulations, {name}!</h3>
      <h2 className="millionaire">You just became a MILLIONAIRE!!!</h2>
      <p>Would you like to start again?</p>
    </>
  );

  return (
    <div className="gameOver--container fullscreen">
      <div className="submit--answer">
        <div className="submit quest">{gameOver ? loss : win}</div>
      </div>
      <div className="answer--row">
        <div className="answer--box">
          <button onClick={() => reset()} className="answer quest">
            Yes
          </button>
        </div>
        <div className="answer--box">
          <a href="/">
            <button className="answer quest">No</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameFinish;
