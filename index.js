const questions = [ // is settting the questions to a const variable.
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
            { text: "text-style", correct: false },
        ],
    },
    {
        question: "What is the purpose of the addEventListener() method in JavaScript?",
        answers: [
            { text: "It adds a new element to the DOM", correct: false },
            { text: "It modifies the style of an element", correct: false },
            { text: "It attaches an event handler to an element", correct: true },
            { text: "It creates a new function", correct: false },
        ],
    },
    {
        question: "What is the purpose of the push() method in JavaScript?",
        answers: [
            { text: "It adds a new element to the end of an array", correct: true },
            { text: "It removes the first element of an array", correct: false },
            { text: "It sorts the elements of an array", correct: false },
            { text: "It reverses the order of the elements in an array", correct: false },
        ],
    },
    {
        question: "Which attribute is used to specify the URL of an image in an <img> tag?",
        answers: [
            { text: "href", correct: false },
            { text: "link", correct: false },
            { text: "src", correct: true },
            { text: "url", correct: false },
        ],
    },
];

const questionElement = document.getElementById("question"); //get the elements from the documenet it is in.
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("Next-button");

let currentQuestionIndex = 0; // sets the the start tempo.
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() { // this function is settting the pace for the next question to come and score to be given
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    answerButtonsElement.innerHTML = ""; // Clear previous answer buttons

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => {
            if (answer.correct) {
                score++;
            }
            showNextQuestion();
        });
        answerButtonsElement.appendChild(button);
    });
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerText = `You have completed the quiz! Your score is: ${score} out of ${questions.length}`;
        answerButtonsElement.innerHTML = ""; // Clear answer buttons at the end of the quiz
    }
}

// Call the startQuiz function to begin the quiz
startQuiz();
