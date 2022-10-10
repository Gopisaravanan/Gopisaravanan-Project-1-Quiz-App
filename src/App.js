import { useEffect, useState, useMemo } from "react";
import "./app.css";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer.js";
import Start from "./components/Start.js";

function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹0");
  const data = [
    {
      id: 1,
      question: "Who created this quiz game?",
      answers: [
        {
          text: "Gopi saravanan",
          correct: true,
        },
        {
          text: "Jeya surya",
          correct: false,
        },
        {
          text: "Sarath",
          correct: false,
        },
        {
          text: "Ramana",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which day is celebrated as indian army day?",
      answers: [
        {
          text: "16 August",
          correct: false,
        },
        {
          text: "20 January",
          correct: false,
        },
        {
          text: "5 October",
          correct: false,
        },
        {
          text: "15 January",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question:
        "Which indian president recieved only 50 percent of his salary?",
      answers: [
        {
          text: "APJ Abdul kalam",
          correct: false,
        },
        {
          text: "K.R Narayanan",
          correct: false,
        },
        {
          text: "Rajendra Prasad",
          correct: true,
        },
        {
          text: "Zahir Hussain",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question:
        "There is a hill in india known as an anti-gravity hill.Where is that located?",
      answers: [
        {
          text: "Rajastan",
          correct: false,
        },
        {
          text: "Gujarat",
          correct: true,
        },
        {
          text: "Meghalaya",
          correct: false,
        },
        {
          text: "Himalaya",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who designed the current national flag of india?",
      answers: [
        {
          text: "Pingali vengayya",
          correct: true,
        },
        {
          text: "Mahatma Ganthi",
          correct: false,
        },
        {
          text: "Rabindrath Tagore",
          correct: false,
        },
        {
          text: "Subramania Iyer",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "The indian name of Yarulng Zangbo river?",
      answers: [
        {
          text: "Narmada",
          correct: false,
        },
        {
          text: "Godaveri",
          correct: false,
        },
        {
          text: " Brahmputra",
          correct: true,
        },
        {
          text: "Ganga",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the name of the world's largest cricket stadium?",
      answers: [
        {
          text: "Motera cricket stadium",
          correct: true,
        },
        {
          text: "Melbourne",
          correct: false,
        },
        {
          text: "Eden Gardens",
          correct: false,
        },
        {
          text: "Sydney Cricket ground",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question: "First sports person nominated for Rajya sabha membership?",
      answers: [
        {
          text: "Navjyot singh sidhu",
          correct: false,
        },
        {
          text: "Milkha Singh",
          correct: false,
        },
        {
          text: "sachin Tendulkar",
          correct: true,
        },
        {
          text: "P.T Usha",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "Which of the following is the world's first ever international university?",
      answers: [
        {
          text: "Bologna university",
          correct: false,
        },
        {
          text: "Harvard university",
          correct: false,
        },
        {
          text: "Oxford university",
          correct: false,
        },
        {
          text: "Nalanda university",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Who is the first recipient of Rajiv Gandhi Khel Ratna award?",
      answers: [
        {
          text: "Geet sethi",
          correct: false,
        },
        {
          text: "Homi motiwala",
          correct: false,
        },
        {
          text: "Viswanathan anand",
          correct: true,
        },
        {
          text: "Pushpendra kumar garg",
          correct: false,
        },
      ],
    },

    {
      id: 11,
      question:
        "Laccadive , minicoy and amindivi islands were renamed in 1973?",
      answers: [
        {
          text: "Andaman",
          correct: false,
        },
        {
          text: "Lakshadweep",
          correct: true,
        },
        {
          text: "Nicobar",
          correct: false,
        },
        {
          text: "Sri lanka",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Kathakali is a dance form associated with the indian state of ?",
      answers: [
        {
          text: "Karnadaka",
          correct: false,
        },
        {
          text: "Tamilnadu",
          correct: false,
        },
        {
          text: "Odisha",
          correct: false,
        },
        {
          text: "Kerala",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Who is popularly call the iron man of India?",
      answers: [
        {
          text: "Bhagat singh",
          correct: false,
        },
        {
          text: "Sardar vallabhbhai patel",
          correct: true,
        },
        {
          text: "Subhas chandra bose",
          correct: false,
        },
        {
          text: "Bhagat singh",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which one is the longest sea beach in india?",
      answers: [
        {
          text: "Marina beach",
          correct: true,
        },
        {
          text: "Calangute",
          correct: false,
        },
        {
          text: "Baga",
          correct: false,
        },
        {
          text: "Gokarna",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What was the summer capital of india during british rule?",
      answers: [
        {
          text: "Mumbai",
          correct: false,
        },
        {
          text: "Bangalore",
          correct: false,
        },
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "Delhi",
          correct: false,
        },
      ],
    },
    // {
    //   id: 19,
    //   question:
    //     "There is a hill in india known as an anti-gravity hill.Where is that located?",
    //   answers: [
    //     {
    //       text: "Rajastan",
    //       correct: false,
    //     },
    //     {
    //       text: "Gujarat",
    //       correct: true,
    //     },
    //     {
    //       text: "Meghalaya",
    //       correct: false,
    //     },
    //     {
    //       text: "Himalaya",
    //       correct: false,
    //     },
    //   ],
    // },
    // {
    //   id: 20,
    //   question: "Which is the largest animal fair in India?",
    //   answers: [
    //     {
    //       text: "Nagpur cattle fair",
    //       correct: false,
    //     },
    //     {
    //       text: "Jhalawar cattle fair",
    //       correct: false,
    //     },
    //     {
    //       text: "Pushkar cattle fair",
    //       correct: false,
    //     },
    //     {
    //       text: "Kolayat Cattle Fair",
    //       correct: false,
    //     },
    //   ],
    // },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹500" },
        { id: 2, amount: "₹1000" },
        { id: 3, amount: "₹2000" },
        { id: 4, amount: "₹5000" },
        { id: 5, amount: "₹10000" },
        { id: 6, amount: "₹25000" },
        { id: 7, amount: "₹50000" },
        { id: 8, amount: "₹75000" },
        { id: 9, amount: "₹100000" },
        { id: 10, amount: "₹500000" },
        { id: 11, amount: "₹1000000" },
        { id: 12, amount: "₹2500000" },
        { id: 13, amount: "₹5000000" },
        { id: 14, amount: "₹7500000" },
        { id: 15, amount: "₹10000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You Won : {earned} </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
