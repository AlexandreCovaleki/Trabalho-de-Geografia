const questions = [
    {
        question: "Qual o melhor clima para ir a praia?",
        answers: [
            { text: "Outono", correct: false},
            { text: "Verão", correct: true},
            { text: "Primavera", correct: false},
            { text: "inverno", correct: false},
        ]
    },
    {
        question: "Qual o Pais com maoir polulação?",
        answers: [
            { text: "Brasil", correct: false},
            { text: "Canada", correct: false},
            { text: "China", correct: false},
            { text: "India", correct: true},
        ]
    },
    {
        question: "Qual desses canta Hip-hop?",
        answers: [
            { text: "MacDeMarco", correct: true},
            { text: "Lil Pep", correct: false},
            { text: "Michael Jackson", correct: false},
            { text: "XXXTentacion", correct: false},
        ]
    },
    {
        question: "Qual é o pais mais grande em territorio?",
        answers: [
            { text: "Brasil", correct: false},
            { text: "USA", correct: false},
            { text: "Russia", correct: true},
            { text: "China", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
        });
        nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Voce pontuou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogue Novamente";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();