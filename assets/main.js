const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const timerSpanElement = document.getElementById("timer");

let timerValue = 5;

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

const startQuiz = () => {
  const startContainer = document.getElementById("start-container");
  quizContainer.removeChild(startContainer);

  startTimer();
};

startButton.addEventListener("click", startQuiz);
