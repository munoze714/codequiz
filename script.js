var questions = document.getElementById("questions");
var answer = document.getElementById("answer")
var start = document.getElementById("start");
var sbutton = document.getElementById("sbutton");
var quiz = document.getElementById("quiz");
var choices = document.getElementById("choices");
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var correct = document.getElementById("correct");

var questions = [
    {
        question: "A clickable link that takes you from one document to another, or to any resource, even within the some document, with text that is highlighted in some fashion is called",
        choiceA: "Locator",
        choiceB: "URL",
        choiceC: "Protocol",
        choiceD: "Hyperlink",
        correct: "D",
    },
    {
        question: "HTML the TITLE tag is …",
        choiceA: "The upper most text on your pag",
        choiceB: "What shows at the very top of your browser’s window",
        choiceC: "The largest text, usually at the top of your page",
        choiceD: "The most important HTML item",
        correct: "B",
    },
    {
        question: "How many parts does a HTML character entity has",
        choiceA: "A character entity has two parts",
        choiceB: "A character entity has three parts",
        choiceC: "Character entities only have one part",
        choiceD: "Character entities have as many parts as is necessary",
        correct: "B",
    },
    {
        question: "Which of the following are used to view documents on the Internet and World Wide Web",
        choiceA: "navigators",
        choiceB: "system software",
        choiceC: "browsers",
        choiceD: "Explorers",
        correct: "C",
    },
    {
        question: "Choose the correct HTML tag for the largest heading",
        choiceA: "the h1 tag",
        choiceB: "the H6 tag",
        choiceC: "the h4 tag",
        choiceD: "the largest tag",
        correct: "A",
    },
    {
        question: "The information that is the visible part of the document goes into this section which begins",
        choiceA: "the head tag",
        choiceB: "the body tag",
        choiceC: "the HTML tag",
        choiceD: "the section tag",
        correct: "B",
    },
    {
        question: "When specifying the source of an image referenced in your HTML document, the image should",
        choiceA: "either be within the same folder as the HTML page, or the complete path name should be specified.",
        choiceB: "be located on the flashdrive in use",
        choiceC: "be sized apprpriately on the HTML page in order to fit",
        choiceD: "be of a format tht HTML can recognize and manipulate",
        correct: "A",
    },
    {
        question: "How can you make a list that lists the items with numbers?",
        choiceA: "the list tag",
        choiceB: "the ul tag",
        choiceC: "the ol tag",
        choiceD: "the dl tag",
        correct: "C",
    },
    {
        question: "Which of the following means not equalt to in Javascript",
        choiceA: "!= ",
        choiceB: "<>",
        choiceC: "=!",
        choiceD: "not",
        correct: "A",
    },
    {
        question: "The variables Numb1 and numb1, are interchangeable in JavaScript",
        choiceA: "True",
        choiceB: "False",
        correct: "B",
    },
    {
        question: "Where is the correct place to insert a JavaScript",
        choiceA: "The body section",
        choiceB: "the head section",
        choiceC: "it must be inserted in the body and head section",
        choiceD: "it can be inserted in either the body or the head, as it makes no difference",
        correct: "A",
    },
    {
        question: "Which of the following is not a use of JavaScript",
        choiceA: "Browser detection",
        choiceB: "cookies",
        choiceC: "form validation",
        choiceD: "user verification",
        correct: "D",
    },
    {
        question: "Curly Brackets look like this < >",
        choiceA: "True",
        choiceB: "False",
        correct: "B",
    },
    {
        question: "HTML:",
        choiceA: "Hypertext Markup Language",
        choiceB: "Hyper Type Markup Language",
        choiceC: "Hyperlink Markup Language",
        choiceD: "Hold that microphone loosely",
        correct: "A",
    },
    {
        question: "Value:",
        choiceA: "is placed before the attribute.",
        choiceB: "defines the value of a website in dollars.",
        choiceC: "is used only in HTML tags.",
        choiceD: "gives meaning to the attribute.",
        correct: "D",
    },
]
var count = 0;
var questionLength = questions.length - 1;
var questionIndex = 0;
var timer;
score = 0;

function renderQuestion() {
    var q = questions[questionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

sbutton.addEventListener("click", startQuiz);
// choiceA.addEventListener("click", renderAnswer);
// choiceB.addEventListener("click", renderAnswer);
// choiceC.addEventListener("click", renderAnswer);
// choiceD.addEventListener("click", renderAnswer);


function startQuiz() {
    start.style.display = "none";
    renderQuestion()
    quiz.style.display = "block";
    // renderAnswer()
    // counterRender();
    // Timer = setInterval(counterRender, 1000);
}

function renderAnswer() {
    // for (var qIndex = 0; qindex <= questionLength; qIndex++) {
    //     answer.innerHTML += "<div class='prog' id=" = qindex + "></div>";

    // }
}








