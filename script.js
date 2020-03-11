var questions = document.getElementById("questions");
var showAnswer = document.getElementById("answer")
var start = document.getElementById("start");
var sbutton = document.getElementById("sbutton");
var quiz = document.getElementById("quiz");
var choices = document.getElementById("choices");
var scoreId = document.getElementById("score");
var timer = document.querySelector(".timer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var savebtn = document.getElementById("savebtn");
var providedints = document.getElementById("providedints");

var questions = [
    {
        question: "A clickable link that takes you from one document to another, or to any resource, even within the some document, with text that is highlighted in some fashion is called",
        choiceA: "Locator",
        choiceB: "URL",
        choiceC: "Protocol",
        choiceD: "Hyperlink",
        correct: "Hyperlink",
    },
    {
        question: "How many parts does a HTML character entity has",
        choiceA: "A character entity has two parts",
        choiceB: "A character entity has three parts",
        choiceC: "Character entities only have one part",
        choiceD: "Character entities have as many parts as is necessary",
        correct: "A character entity has three parts",
    },
    {
        question: "Which of the following are used to view documents on the Internet and World Wide Web",
        choiceA: "navigators",
        choiceB: "system software",
        choiceC: "browsers",
        choiceD: "Explorers",
        correct: "browsers",
    },
    {
        question: "Choose the correct HTML tag for the largest heading",
        choiceA: "the h1 tag",
        choiceB: "the h6 tag",
        choiceC: "the h4 tag",
        choiceD: "the largest tag",
        correct: "the h1 tag",
    },
    {
        question: "The information that is the visible part of the document goes into this section which begins",
        choiceA: "the head tag",
        choiceB: "the body tag",
        choiceC: "the HTML tag",
        choiceD: "the section tag",
        correct: "the body tag",
    },
    {
        question: "How can you make a list that lists the items with numbers?",
        choiceA: "the list tag",
        choiceB: "the ul tag",
        choiceC: "the ol tag",
        choiceD: "the dl tag",
        correct: "the ol tag",
    },
    {
        question: "Which of the following means not equal to in Javascript",
        choiceA: "!=",
        choiceB: "<>",
        choiceC: "=!",
        choiceD: "not",
        correct: "!=",
    },
    {
        question: "Where is the correct place to insert a JavaScript",
        choiceA: "it must be inserted in the body and head section",
        choiceB: "the head section",
        choiceC: "The body section",
        choiceD: "it can be inserted in either the body or the head, as it makes no difference",
        correct: "The body section",
    },
    {
        question: "HTML:",
        choiceA: "Hyperlink Markup Language",
        choiceB: "Hyper Type Markup Language",
        choiceC: "Hypertext Markup Language",
        choiceD: "Hold that microphone loosely",
        correct: "Hypertext Markup Language",
    },
    {
        question: "Value:",
        choiceA: "is placed before the attribute.",
        choiceB: "defines the value of a website in dollars.",
        choiceC: "is used only in HTML tags.",
        choiceD: "gives meaning to the attribute.",
        correct: "gives meaning to the attribute.",
    },
]
var count = 0;
var questionLength = questions.length;
var currentQuestion = 0;
var timer;
var startingTime = 50;
var ticker;
var score = 0;
var correct = questions.correct;

sbutton.addEventListener("click", startQuiz);
choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);
choiceD.addEventListener("click", checkAnswer);

function startQuiz() {
    ticker = setInterval(() => {
        startingTime--;
        timer.innerHTML = "Timer: " + startingTime;
        if (startingTime === 0) {
            clearTimeout(ticker)
            endGame()
        }
    }, 1000);

    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}

function renderQuestion() {
    var q = questions[currentQuestion];
    question.innerHTML = "<p>" + q.question + "</p>"
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    showAnswer.innerHTML = "";
}

function checkAnswer(event) {
    var chosenAnswer = event.target.innerHTML;

    if (chosenAnswer === questions[currentQuestion].correct) {
        score++;
        showAnswer.innerHTML = "CORRECT";
        currentQuestion++;
        if (currentQuestion === questions.length) {
            endGame();
        } else {
            setTimeout(function () {
                renderQuestion();
            }, 500)
        }

    } else {
        showAnswer.innerHTML = "WRONG";
        currentQuestion++;
        startingTime = startingTime - 10;
        if (currentQuestion === questions.length) {
            endGame();
        } else {
            setTimeout(function () {
                renderQuestion();
            }, 500)
        }
    }
}

function endGame() {
    quiz.innerHTML = " Your Score: " + score + " of 10";
    scoreId.style.display = "block";
    clearTimeout(ticker)
}

savebtn.addEventListener("click", function (event) {
    event.preventDefault();
    var savelocal = providedints.value
    saveinitials(savelocal)
    storeinitials(savelocal)
});
function storeinitials(e) {
    localStorage.getItem("initals");
    quiz.innerHTML = e + " Score " + score;
    scoreId.style.display = "block";
}

function saveinitials(e) {
    localStorage.setItem("initials", e)
}



