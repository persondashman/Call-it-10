document.addEventListener("DOMContentLoaded", () => {
    const startQuizButton = document.getElementById("startQuiz");
    const quizSection = document.getElementById("quiz-section");
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options");
    const nextQuestionButton = document.getElementById("nextQuestion");
    const resultSection = document.getElementById("result-section");
    const scoreDisplay = document.getElementById("score");

    let currentQuestionIndex = 0;
    let quizData = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Rome", "Berlin"],
            correct: "Paris",
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correct: "4",
        },
    ];
    let score = 0;

    // Start the quiz
    startQuizButton.addEventListener("click", () => {
        document.getElementById("quiz-intro").classList.add("hidden");
        quizSection.classList.remove("hidden");
        loadQuestion();
    });

    // Load a question
    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionContainer.querySelector("#question").textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => selectAnswer(option));
            optionsContainer.appendChild(button);
        });

        nextQuestionButton.classList.remove("hidden");
    }

    // Handle answer selection
    function selectAnswer(selectedOption) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedOption === currentQuestion.correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    // Show the results
    function showResults() {
        quizSection.classList.add("hidden");
        resultSection.classList.remove("hidden");
        scoreDisplay.textContent = `You scored ${score} out of ${quizData.length}.`;
    }
});

        if (!topic) {
            alert("Please enter a topic.");
            return;
        }

        // Simulate a successful "fetch" from backend
        alert(`Mock quiz generated for topic: ${topic}`);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    });

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionContainer.querySelector("#question").textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => selectAnswer(option));
            optionsContainer.appendChild(button);
        });
    }

    function selectAnswer(selectedOption) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedOption === currentQuestion.correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizSection.innerHTML = `<h2>Quiz Complete!</h2><p>You scored ${score} out of ${quizData.length}.</p>`;
    }
});
