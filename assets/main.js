const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const timerSpanElement = document.getElementById("timer");

let timerValue = 5;
let questionIndex = 0;

const questions = [
  {
    title: "Who invented JavaScript?",
    choices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: "Brendan Eich",
  },
  {
    title: "What are JavaScript Data Types?",
    choices: [
      "number,",
      "string",
      "boolen",
      "obejct",
      "undefined",
      "all the above",
    ],
    correctAnswer: "all the above",
  },
  {
    title: " What are all the types of Pop up boxes available in JavaScript?",
    choices: ["alert", "confirm", "prompt", "all the above"],
    correctAnswer: "all the above",
  },
  {
    title: "What is a closure in JavaScript?",
    choices: [
      "an inner function that has access to the variables in the outer (enclosing) function’s scope chain",
      "element",
      "mind-set",
    ],
    correctAnswer:
      "an inner function that has access to the variables in the outer (enclosing) function’s scope chain",
  },
  {
    title: "Define event bubbling?",
    choices: [
      "event-bubble",
      "data type",
      "JavaScript allows DOM elements to be nested inside each other",
    ],
    correctAnswer:
      "JavaScript allows DOM elements to be nested inside each other",
  },
];

const renderQuestion = () => {
  const question = questions[questionIndex];

  const div = document.createElement("div");
  div.setAttribute("data-answer", question.correctAnswer);
  div.setAttribute("id", "question");

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  div.appendChild(h2);

  quizContainer.appendChild(div);
};

const startTimer = () => {
  const timerTick = () => {
    timerSpanElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0) {
      clearInterval(timer);

      const questionDiv = document.getElementById("question");
      quizContainer.removeChild(questionDiv);

      const div = document.createElement("div");
      const h2 = document.createElement("h2");
      h2.textContent = "Game Over";

      div.appendChild(h2);

      quizContainer.appendChild(div);
    }
  };

  const timer = setInterval(timerTick, 1000);
};

const startQuiz = () => {
  const startContainer = document.getElementById("start-container");
  quizContainer.removeChild(startContainer);

  startTimer();

  renderQuestion();
};

startButton.addEventListener("click", startQuiz);
