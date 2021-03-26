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

const createChoices =("choices") =>{ 

  const createChoices = (choice) =>{
    const QuestionContainer= document.createElement ("questionContainer");
    const button = document.createElement ("button");
    button.setAttribute("data-answer", choices[0]);

  }
  choices.forEach(createChoices);
};


const createQuestionContainer = (question) =>{
const QuestionContainer = document.createElement ("questionContainer");
QuestionContainer.setAttribute ("data-answer", question.correctAnswer);

const h2 = document.createElement ("h2")
h2.textContent = question.title;

//create choices
const choices = createChoices(question.choices);
}


const startQuiz = () =>{
 //create question container
 createQuestion(Questions[0]);
 //remove the start button container
 //append question container to the DOM
}


StartQuizButtonElement.addEventListener("click", startTimer);
startButton.addEventListener("click", startButton);
startButton.addEventListener("click", startQuiz);
