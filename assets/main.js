const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const timerSpanElement = document.getElementById("timer");

let timerValue = 5;

const renderQuestion = () => {
  const div = document.createElement("div");
  div.setAttribute("data-answer", "TODO");
  div.setAttribute("id", "question");

  const h2 = document.createElement("h2");
  h2.textContent = "TODO";

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
