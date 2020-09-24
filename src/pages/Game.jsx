import React, { useCallback, useContext } from "react";
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
import { useEffect } from "react";

const Game = () => {
  const [state, setState] = useContext(Context);

  const {
    input,
    playerName,
    loading,
    question,
    questionNumber,
    selectedAnswer,
    userAnswer,
    correctAnswer,
    confirmed,
    prize,
    quitGame,
    gameOver,
    gameWon,
  } = state;

  const startGame = () => {
    if (input.length < 3) {
      setState({
        ...state,
        wrongInput: true,
      });
      return;
    }

    setState({
      ...state,
      input: "",
      playerName: input,
      loading: true,
    });

    nextQuestion();
  };

  const handleWinner = useCallback(() => {
    setTimeout(() => {
      setState({
        ...state,
        prize: "1 000 000",
        gameWon: true,
      });
    }, 2000);
  }, [setState, state]);

  const setRanking = useCallback(
    (prize) => {
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
    },
    [playerName]
  );

  const setGuaranteedPrize = useCallback(() => {
    let guaranteedPrize = prize || 0;

    if (questionNumber >= 7 && prize !== "40 000") {
      guaranteedPrize = "40 000";
    } else if (questionNumber >= 2 && prize !== "1000") {
      guaranteedPrize = "1000";
    }

    setState({
      ...state,
      prize: guaranteedPrize,
    });
  }, [prize, questionNumber, setState, state]);

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

  const setQuestionDifficulty = useCallback(() => {
    let difficulty = "easy";
    if (questionNumber >= 2) difficulty = "medium";
    if (questionNumber >= 7) difficulty = "hard";

    return difficulty;
  }, [questionNumber]);

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

  const nextQuestion = useCallback(() => {
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
  }, [setQuestionDifficulty, questionNumber, setGuaranteedPrize, setState]);

  const handleQuitBtn = () => {
    if (confirmed) return;
    setState({
      ...state,
      quitGame: true,
    });
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
        setState({
          ...state,
          gameOver: true,
        });
      }, 2000);
    }
  };

  useEffect(() => {
    if (confirmed) {
      handleCorrectness();
    }
    // eslint-disable-next-line
  }, [confirmed]);

  return (
    <div className="quiz--container">
      {loading ? <Loader /> : null}
      {playerName && question ? null : <Player startGame={startGame} />}
      <div className="game">
        <div className="buttons--container">
          <QuitButton handleQuitBtn={handleQuitBtn} />
          <LifelinesButton />
        </div>
        <div className="game--interface">
          <Lifelines setQuestionDifficulty={setQuestionDifficulty} />
          <ResultBoard questionNumber={questionNumber} />
        </div>
        <Question />
      </div>
      {selectedAnswer && !confirmed ? <ConfirmAnswer /> : null}
      {gameOver || gameWon ? (
        <GameFinish
          shuffleAnswers={shuffleAnswers}
          replaceErrors={replaceErrors}
        />
      ) : null}
      {quitGame ? <QuitGame /> : null}
    </div>
  );
};

export default Game;
