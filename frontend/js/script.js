document.addEventListener("DOMContentLoaded", () => {
    const generateQuizButton = document.getElementById("generateQuiz");
    const topicInput = document.getElementById("quiz-topic");
    const quizSection = document.getElementById("quiz-section");
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options");
    const nextQuestionButton = document.getElementById("nextQuestion");

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
        // Add more mock questions as needed
    ];
    let score = 0;

    generateQuizButton.addEventListener("click", () => {
        const topic = topicInput.value.trim();
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
