const questions = [
  {
    //1st question
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tech Mark Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    //2nd question
    question: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: "color"
  },
  {
    //3rd question
    question: "Which JavaScript method is used to select an element by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElementsByClass()",
      "selectElement()"
    ],
    answer: "getElementById()"
  },
  {
    //4th question
    question: "What does the DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Design Object Model",
      "Document Order Method"
    ],
    answer: "Document Object Model"
  },
  {
    //5th question
    question: "Which of the following is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "WordPress"],
    answer: "React"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');

function loadQuestion() {
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.disabled = true;
  //button
  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.addEventListener("click", () => selectAnswer(btn, current.answer));
    optionsEl.appendChild(btn);
  });
}
//selection
function selectAnswer(selectedBtn, correctAnswer) {
  const buttons = document.querySelectorAll(".option");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else if (btn === selectedBtn) {
      btn.classList.add("wrong");
    }
  });

  if (selectedBtn.textContent === correctAnswer) {
    score++;
    feedbackEl.textContent = "✅ Correct!";
  } else {
    feedbackEl.textContent = `❌ Wrong! Correct: ${correctAnswer}`;
  }

  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById('quiz-box').classList.add('hidden');
  resultEl.classList.remove('hidden');
  scoreEl.textContent = `${score} / ${questions.length}`;
}

// Start
loadQuestion();
