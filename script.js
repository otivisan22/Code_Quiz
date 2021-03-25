const timerSpanElement = document.getElementById("timer");
const StartQuizButtonElement = document.getElementById("start-btn");

let timerValue = 60;

const question = [
  {
    title: "Who invented JavaScript?",
    choices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: "Brendan Eich",
  },

  {
    title: "Who invented JavaScript?",
    choices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: "Brendan Eich",
  },
];

//Add the timer
const startTimer = () => {
  const timerTick = () => {
  timerSpanElement.textContent= TimerValue;
  timerValue -= 1;

  if (timerValue <0) {
    clearInterval (timer);
  }
};

//Form container 
const formContainer = construct formContainer;
