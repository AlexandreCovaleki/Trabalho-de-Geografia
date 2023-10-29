const questions = [
    {
        question: "O que faz a OMC?",
        answers: [
            { text: "Tem como o objetivo ajudar a paises membros terem melhores relações sociais", correct: false},
            { text: "Regulamenta o comércio internacional entre os países-membro, com maior liberalismo", correct: true},
            { text: "Impoem taxas de importações em paises, para ganho de lucro", correct: false},
            { text: "Ajuda no tranporte de cargas de importaçao e exportação", correct: false},
        ]
    },
    {
        question: "Qual o contexto de criação da GATT?",
        answers: [
            { text: "Industrialização", correct: false},
            { text: "2º Guerra Mundial", correct: false},
            { text: "Corrida Armamentista", correct: false},
            { text: "Guerra Fria", correct: true},
        ]
    },
    {
        question: "Cite ao menos 3 países-membros da OMC:",
        answers: [
            { text: "Brasil, Chile, Japão", correct: true},
            { text: "Coreia Do Norte, Coreia Do Sul e Indonesia", correct: false},
            { text: "Vaticano, Canada, Rússia", correct: false},
            { text: "Groenlândia, Inglaterra, Italia", correct: false},
        ]
    },
    {
        question: "Onde está localizada a sede da OMC?",
        answers: [
            { text: "Paris", correct: false},
            { text: "Munique", correct: false},
            { text: "Genebra", correct: true},
            { text: "Washington", correct: false},
        ]
    },
    {
        question: "Por que a OMC substituiu a GATT?",
        answers: [
            { text: "Por apresentar um desempenho favoravel sobre o objetivo inicial", correct: false},
            { text: "Pela GATT não ser algo mais preciso, então o modificaram", correct: false},
            { text: "Por acharem não ser mais preciso um Acordo Geral De Tarifas e Comércio", correct: false},
            { text: "Pois a GATT não estava conseguindo cumprir com o seu objetivo inicial", correct: true},
        ]
    },
    {
        question: "Como a OMC promove a liberalização do comércio internacional?",
        answers: [
            { text: "Reduzindo as tarifas alfandegárias e estabelecendo acordo entre os Estados", correct: true},
            { text: "Aumentando Tarifas para a ver um ganho de imposto", correct: false},
            { text: "Retirando as tarifas alfandegárias e estabele acordos favoraveis para so um país", correct: false},
            { text: "Liberando o comércio sem depender de contratos ou taxas", correct: false},
        ]
    },
    {
        question: "Por que a entrada na China na OMC foi interessante para os países que já eram membros e outros futuros membros? ",
        answers: [
            { text: "Permitiu que os paises membros terem uma relação melhor com a China", correct: false},
            { text: "Permitiu uma melhora na economia de paises membros da OMC", correct: false},
            { text: "A entrada da China garantiu maior possibilidade de exportação e acordos comerciais", correct: true},
            { text: "Tinham como objetivo de taxar as exportações e importações da China", correct: false},
        ]
    },
    {
        question: "Segunda a OMC, qual o commodity mais afetado pela guerra russa e ucraniana?",
        answers: [
            { text: "A Carne de Gado", correct: false},
            { text: "Os cereais", correct: true},
            { text: "O petróleo", correct: false},
            { text: "O minério de ferro", correct: false},
        ]
    },
    {
        question: "Qual é a participação do Brasil na OMC?",
        answers: [
            { text: "Ajuda na solução da controvérsias da OMC", correct: true},
            { text: "Tem o objetivo de taxar os paises membros sobre suas exportações", correct: false},
            { text: "Ajuda na criação de contratos injustos entre os paises", correct: false},
            { text: "Ajuda com a recadação de taxas", correct: false},
        ]
    },
    {
        question: "Quantos acordos bilaterais a Rússia teve que assinar para entrar na OMC?",
        answers: [
            { text: "12 acordos bilaterais", correct: false},
            { text: "43 acordos bilaterais", correct: false},
            { text: "8 acordos bilaterais", correct: false},
            { text: "30 acordos bilaterais", correct: true},
        ]
    },
    {
        question: "Qual a característica marcante entre os membros da OMC?",
        answers: [
            { text: "Prezam pelo liberalismo", correct: true},
            { text: "Tem como caracteristica o comando absoluto sobre paises menores", correct: false},
            { text: "Prezam pela dificutação das importações e exportações", correct: false},
            { text: "Tem a caracteristica de desigualdade entre paises ", correct: false},
        ]
    },
    {
        question: "Qual a regularidade das reuniões dos membros da OMC?",
        answers: [
            { text: "Todos os anos", correct: false},
            { text: "A cada 5 anos", correct: false},
            { text: "De 2 em 2 anos", correct: true},
            { text: "Entre 6 a 6 meses", correct: false},
        ]
    },

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