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
    timerSpanElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0) {
      clearInterval(timer);
    }
  };
  const timer = setInterval(timerTick, 1000);
};

StartQuizButtonElement.addEventListener("click", startTimer);
