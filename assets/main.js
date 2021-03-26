const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");

const startQuiz = () => {
  const startContainer = document.getElementById("start-container");
  quizContainer.removeChild(startContainer);
};

startButton.addEventListener("click", startQuiz);
