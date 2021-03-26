const timerSpanElement = document.getElementById("timer");
const StartQuizButtonElement = document.getElementById("start-btn");
const startButton = document.getElementById("start-btn");

let timerValue = 60;

const question = [
  {
    title: "Who invented JavaScript?",
    choices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: "Brendan Eich",
  },

  {
    title: "What are JavaScript Data Types?",
    choices: ["number,", "string", "boolen", "obejct", "undefined", "all the above"],
    correctAnswer: "all the above",
  },

  {
    title: " What are all the types of Pop up boxes available in JavaScript?",
    choices: ["alert", "confirm", "prompt", "all the above"],
    correctAnswer: "all the above",
  
  },

  {
    title: "What is a "closure" in JavaScript?",
    choices: ["an inner function that has access to the variables in the outer (enclosing) function’s scope chain", "element", "mind-set"],
    correctAnswer: "an inner function that has access to the variables in the outer (enclosing) function’s scope chain",
  },

  {
    title: "Define event bubbling?",
    choices: ["event-bubble", "data type", "JavaScript allows DOM elements to be nested inside each other"],
    correctAnswer: "JavaScript allows DOM elements to be nested inside each other",
  },
];

//Add the timer
const startTimer = () => {
  const timerTick = () => {
    timerSpanElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0) {
      clearInterval(timer);
    }
  };
  const timer = setInterval(timerTick, 1000);
};

StartQuizButtonElement.addEventListener("click", startTimer);
startButton.addEventListener("click", startButton);
