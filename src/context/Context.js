import React, { useState, createContext } from "react";

export const Context = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState({
    input: "",
    wrongInput: false,
    playerName: "",
    loading: false,
    quitGame: false,
    gameOver: false,
    gameWon: false,
    question: "",
    questionNumber: 0,
    prize: 0,
    answers: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    selectedAnswer: "",
    confirmed: false,
    userAnswer: "",
    correctAnswer: "",
    availableLifelines: [
      { value: "50/50", used: false },
      { value: "call", used: false },
      { value: "audience", used: false },
    ],
    hint: "",
    lifelinesVisible: false,
  });

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
