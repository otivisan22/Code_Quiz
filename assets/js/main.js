// Declare global variables
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const timerSpanElement = document.getElementById("timer");
const username = document.getElementById("username");

let timerValue = 60;
let questionIndex = 0;

// Declare function for questions
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

const getScoresFromLocalStorage = () => {
  const scores = JSON.parse(localStorage.getItem("highScores"));

  if (scores === null) {
    return [];
  } else {
    return scores;
  }
};

//Declared the variable for highScores form
const onFormSubmit = (event) => {
  event.preventDefault();

  const input = document.getElementById("nameInput");

  const name = input.value;
  const score = timerValue;

  const scoreObject = {
    name: name,
    score: score,
  };

  const scores = getScoresFromLocalStorage();

  scores.push(scoreObject);

  localStorage.setItem("highScores", JSON.stringify(scores));

  window.location.href = "./highscores.html";
};

const renderForm = () => {
  const questionDiv = document.getElementById("question");
  quizContainer.removeChild(questionDiv);

  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");

  form.setAttribute("class", "scores-form");

  input.setAttribute("placeholder", "Please enter your name");
  input.setAttribute("id", "nameInput");
  input.setAttribute("type", "text");

  button.setAttribute("type", "submit");
  button.setAttribute("class", "btn");
  button.textContent = "Submit";

  form.addEventListener("submit", onFormSubmit);

  form.append(input, button);

  quizContainer.append(form);
};

// Declare function for verifyChoice
const verifyChoice = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;
  // Declare the attributes
  if (target.matches("button")) {
    const selectedAnswer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (selectedAnswer === correctAnswer) {
      questionIndex = questionIndex + 1;
      if (questionIndex < questions.length) {
        const questionDiv = document.getElementById("question");
        quizContainer.removeChild(questionDiv);

        renderQuestion();
      } else {
        renderForm();
      }
    } else {
      timerValue = timerValue - 5;
    }
  }
};

const renderQuestion = () => {
  const question = questions[questionIndex];

  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("data-answer", question.correctAnswer);
  questionDiv.setAttribute("id", "question");
  questionDiv.setAttribute("class", "question");

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  questionDiv.appendChild(h2);

  const createChoice = (choice) => {
    const choiceDiv = document.createElement("div");
    choiceDiv.setAttribute("class", "choice");
    const button = document.createElement("button");
    button.setAttribute("class", "block");
    button.setAttribute("data-answer", choice);
    button.textContent = choice;

    choiceDiv.appendChild(button);
    questionDiv.appendChild(choiceDiv);
  };

  question.choices.forEach(createChoice);

  questionDiv.addEventListener("click", verifyChoice);

  quizContainer.appendChild(questionDiv);
};

const startTimer = () => {
  const timerTick = () => {
    timerValue -= 1;
    timerSpanElement.textContent = timerValue;

    if (questionIndex === questions.length) {
      clearInterval(timer);
    }

    if (timerValue <= 0) {
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
  // Declare function for timer
  const timer = setInterval(timerTick, 1000);
};
// Declare function for startQuiz
const startQuiz = () => {
  const startContainer = document.getElementById("start-container");
  quizContainer.removeChild(startContainer);

  startTimer();

  renderQuestion();
};

startButton.addEventListener("click", startQuiz);
