import React, { useContext } from "react";
import { Context } from "../context/Context";

import Player from "../components/game/Player";
import ConfirmAnswer from "../components/questions/ConfirmAnswer";
import GameFinish from "../components/game/GameFinish";
import Question from "../components/questions/Question";
import ResultBoard from "../components/resultboard/ResultBoard";
import Lifelines from "../components/lifelines/Lifelines";
import QuitButton from "../components/game/QuitButton";
import QuitGame from "../components/game/QuitGame";
import Loader from "../components/game/Loader";
import LifelinesButton from "../components/lifelines/LifelinesButton";
import "../styles/Game.css";

const Game = () => {
  const state = useContext(Context);

  const {
    input,
    wrongInput,
    playerName,
    loading,
    question,
    questionNumber,
    answers,
    selectedAnswer,
    userAnswer,
    correctAnswer,
    confirmed,
    prize,
    availableLifelines,
    hint,
    lifelinesVisible,
    quitGame,
    gameOver,
    gameWon,
  } = state;

  const setPlayerName = (e) => {
    state.input = e.target.value;
  };

  const startGame = () => {
    if (input.length < 3) {
      state.wrongInput = true;
      return;
    }

    state.input = "";
    state.playerName = input;
    state.loading = true;

    nextQuestion();
  };

  const showConfirmation = (e) => {
    if (selectedAnswer || confirmed) return;
    this.setState({
      selectedAnswer: e.target.value,
    });
  };

  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      this.setState(
        {
          confirmed,
          userAnswer: selectedAnswer,
        },
        () => handleCorrectness()
      );
    } else {
      this.setState({
        confirmed,
        selectedAnswer: "",
      });
    }
  };

  const handleWinner = () => {
    setTimeout(() => {
      this.setState({
        prize: "1 000 000",
        gameWon: true,
      });
    }, 2000);
  };

  const handleCorrectness = () => {
    if (correctAnswer === userAnswer) {
      if (questionNumber === 12) return handleWinner();
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    } else {
      setTimeout(() => {
        setRanking(prize);
        this.setState({
          gameOver: true,
        });
      }, 2000);
    }
  };

  const setRanking = (prize) => {
    if (prize < 1) return;
    let rank = JSON.parse(localStorage.getItem("arr")) || [];
    let arr = [];
    arr = arr.concat(rank);
    let playerResult = {
      player: playerName,
      prize,
    };
    arr.push(playerResult);

    function compare(a, b) {
      if (typeof a.prize === "string" && a.prize.indexOf(" "))
        a.prize = a.prize.replace(" ", "");
      if (typeof b.prize === "string" && b.prize.indexOf(" "))
        b.prize = b.prize.replace(" ", "");
      a.prize = parseInt(a.prize);
      b.prize = parseInt(b.prize);
      const avalue = a.prize;
      const bvalue = b.prize;

      if (avalue < bvalue) return 1;
      else if (avalue > bvalue) return -1;
      else return 0;
    }

    arr = arr.sort(compare);

    if (arr.length > 5) arr.pop();

    localStorage.setItem("arr", JSON.stringify(arr));
  };

  const setGuaranteedPrize = () => {
    let guaranteedPrize = prize || 0;

    if (questionNumber >= 7 && prize !== "40 000") {
      guaranteedPrize = "40 000";
    } else if (questionNumber >= 2 && prize !== "1000") {
      guaranteedPrize = "1000";
    }

    this.setState({
      prize: guaranteedPrize,
    });
  };

  const shuffleAnswers = (incorrectAnswers, correctAnswer) => {
    const orderedAnswers = [...incorrectAnswers].concat(correctAnswer);

    let shuffledAnswers = [];

    while (shuffledAnswers.length < orderedAnswers.length) {
      let num = Math.floor(Math.random() * orderedAnswers.length);
      if (!shuffledAnswers.includes(num)) shuffledAnswers.push(num);
    }

    const answers = [
      { id: "A", text: orderedAnswers[shuffledAnswers[0]] },
      { id: "B", text: orderedAnswers[shuffledAnswers[1]] },
      { id: "C", text: orderedAnswers[shuffledAnswers[2]] },
      { id: "D", text: orderedAnswers[shuffledAnswers[3]] },
    ];

    return answers;
  };

  const setQuestionDifficulty = () => {
    let difficulty = "easy";
    if (questionNumber >= 2) difficulty = "medium";
    if (questionNumber >= 7) difficulty = "hard";

    return difficulty;
  };

  const replaceErrors = (err) => {
    if (typeof err === "object") {
      err = err.map((er) => {
        while (
          er.text.includes("&amp;") ||
          er.text.includes("&quot;") ||
          er.text.includes("&#039;") ||
          er.text.includes("&rsquo;") ||
          er.text.includes("&eacute;") ||
          er.text.includes("&Uuml;") ||
          er.text.includes("&Aacute;")
        ) {
          if (er.text.includes("&amp;"))
            er.text = er.text.replace("&amp;", "&");
          if (er.text.includes("&quot;"))
            er.text = er.text.replace("&quot;", '"');
          if (er.text.includes("&#039;"))
            er.text = er.text.replace("&#039;", "'");
          if (er.text.includes("&rsquo;"))
            er.text = er.text.replace("&rsquo;", "'");
          if (er.text.includes("&eacute;"))
            er.text = er.text.replace("&eacute;", "é");
          if (er.text.includes("&Uuml;"))
            er.text = er.text.replace("&Uuml;", "Ü");
          if (er.text.includes("&Aacute;"))
            er.text = er.text.replace("&Aacute;", "A");
        }
        return er;
      });
      return err;
    }

    while (
      err.includes("&amp;") ||
      err.includes("&quot;") ||
      err.includes("&#039;") ||
      err.includes("&rsquo;") ||
      err.includes("&eacute;") ||
      err.includes("&Uuml;") ||
      err.includes("&Aacute;")
    ) {
      if (err.includes("&amp;")) err = err.replace("&amp;", "&");
      if (err.includes("&quot;")) err = err.replace("&quot;", '"');
      if (err.includes("&#039;")) err = err.replace("&#039;", "'");
      if (err.includes("&rsquo;")) err = err.replace("&rsquo;", "'");
      if (err.includes("&eacute;")) err = err.replace("&eacute;", "é");
      if (err.includes("&Uuml;")) err = err.replace("&Uuml;", "Ü");
      if (err.includes("&Aacute;")) err = err.replace("&Aacute;", "A");
    }

    return err;
  };

  const nextQuestion = () => {
    fetch(
      `https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${setQuestionDifficulty()}`
    )
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
        if (questionNumber === 2 || questionNumber === 7) setGuaranteedPrize();

        data.results[0].question = replaceErrors(data.results[0].question);
        data.results[0].correct_answer = replaceErrors(
          data.results[0].correct_answer
        );
        answers = replaceErrors(answers);

        this.setState((state) => ({
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

  const handleLifeline = (selectedLifeline) => {
    const { answers } = this.state;

    if (selectedLifeline === "50/50") {
      let i = 0;
      const removed = [];

      while (i < 2) {
        let num = Math.floor(Math.random() * answers.length);
        if (
          answers[num].text &&
          answers[num].text !== this.state.correctAnswer &&
          !removed.includes(answers[num].text)
        ) {
          removed.push(answers[num].text);
          i++;
        }
      }

      this.setState((prevState) => ({
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
          lifelineAnswers.push(this.state.correctAnswer);
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
          lifelineAnswers.push(this.state.correctAnswer);
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

      this.setState((prevState) => ({
        availableLifelines: prevState.availableLifelines.map((lifeline) =>
          lifeline.value === selectedLifeline
            ? { ...lifeline, used: true }
            : lifeline
        ),
        hint,
      }));
    }
  };

  const handleLifelinesVisibility = () => {
    this.setState((state) => ({
      lifelinesVisible: !state.lifelinesVisible,
    }));
  };

  const reset = () => {
    this.setState({
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
      confirmed: false,
      userAnswer: "",
      correctAnswer: "",
    });
    nextQuestion();
  };

  const handleQuitBtn = () => {
    if (this.state.confirmed) return;
    this.setState({
      quitGame: true,
    });
  };

  const quit = (gameOver, win = this.state.prize) => {
    this.setState(
      {
        quitGame: false,
        prize: win,
        gameOver,
      },
      () => {
        if (gameOver) setRanking(win);
      }
    );
  };

  const prevent = (e) => {
    e.preventDefault();
  };

  return (
    <div className="quiz--container">
      {loading ? <Loader /> : null}
      {playerName && question ? null : (
        <Player
          prevent={prevent}
          input={input}
          wrongInput={wrongInput}
          setPlayerName={setPlayerName}
          startGame={startGame}
        />
      )}
      <div className="game">
        <div className="buttons--container">
          <QuitButton handleQuitBtn={handleQuitBtn} />
          <LifelinesButton
            handleLifelinesVisibility={handleLifelinesVisibility}
            lifelinesVisible={lifelinesVisible}
          />
        </div>
        <div className="game--interface">
          <Lifelines
            availableLifelines={availableLifelines}
            handleLifeline={handleLifeline}
            hint={hint}
            answers={answers}
            lifelinesVisible={lifelinesVisible}
          />
          <ResultBoard questionNumber={questionNumber} />
        </div>
        <Question
          showConfirmation={showConfirmation}
          question={question}
          answers={answers}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
          confirmed={confirmed}
        />
      </div>
      {selectedAnswer && !confirmed ? (
        <ConfirmAnswer handleConfirmation={handleConfirmation} />
      ) : null}
      {gameOver || gameWon ? (
        <GameFinish
          name={playerName}
          gameOver={gameOver}
          reset={reset}
          prize={prize}
        />
      ) : null}
      {quitGame ? (
        <QuitGame quit={quit} questionNumber={questionNumber} />
      ) : null}
    </div>
  );
};

export default Game;
