const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [{
    question: 'What breed of dog is the most popular in the U.S. ?',
    choice1: "Dalmatian",
    choice2: "Golden Retriever",
    choice3: "Pug",
    choice4: "Beagle",
    answer: 2
  },
  {
    question: 'What is the technical term for the "brain" of your computer?',
    choice1: "CPU",
    choice2: "RAM",
    choice3: "Motherboard",
    choice4: "Hard drive",
    answer: 4
  },
  {
    question: 'How many points are a touchdown worth?',
    choice1: "5",
    choice2: "8",
    choice3: "6",
    choice4: "7",
    answer: 3
  },
  {
    question: 'Where in Pennsylvania is The Office based',
    choice1: "Philadelphia",
    choice2: "Scranton",
    choice3: "Lancaster",
    choice4: "Pittsburgh",
    answer: 1
  }
];

const CORRECT_BONUS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign("./end.html");
  }
  questionCounter++;
  progressText.innerText = `Lifes ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();