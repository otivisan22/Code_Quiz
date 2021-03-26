const timerSpanElement = document.getElementById("timer");
const StartQuizButtonElement = document.getElementById("start-btn");
const startButton = document.getElementById("start-btn");

let timerValue = 60;

const createChoices = ("choices") => {
  const createChoices = (choice) => {
    const QuestionContainer = document.createElement("questionContainer");
    const button = document.createElement("button");
    button.setAttribute("data-answer", choices[0]);
  };
  choices.forEach(createChoices);
};

StartQuizButtonElement.addEventListener("click", startTimer);
startButton.addEventListener("click", startButton);
startButton.addEventListener("click", startQuiz);
