var startPage = document.querySelector("#startpage");
var startButton = document.querySelector("#start");
var timerEl = document.querySelector(".time-left");
var question1 = document.querySelector(".Quiz1");
var question2 = document.querySelector(".Quiz2");
var question3 = document.querySelector(".Quiz3");
var question4 = document.querySelector(".Quiz4");
var submitPage = document.querySelector(".form");
var wrongButton = document.querySelectorAll(".btn");
var rightButton = document.querySelectorAll(".btn-correct");
var answerButtons1 = document.querySelectorAll(".answers1");
var answerButtons2 = document.querySelectorAll(".answers2");
var answerButtons3 = document.querySelectorAll(".answers3");
var answerButtons4 = document.querySelectorAll(".answers4");
var body = document.querySelector("body");

var wrongAnswerLine = "";
var correctAnswerLine = "";
var timerCount;
var timer;
init();

function init() {
  hideQuestions();
}

// moves on to the question page
startButton.addEventListener("click", function (event) {
  startPage.style.visibility = "hidden";
  console.log(event.target);
  startGame();
});

function startGame() {
  isWin = false;
  timerCount = 100;
  startTimer();
  question1.style.visibility = "visible";
}

// display Right
function right() {
  var correct2 = document.createElement("p");
  correct2.style.marginTop = "30%";
  correct2.style.display = "relative";
  correct2.textContent = "CORRECT!";
  body.appendChild(correct2);
  setTimeout(function () {
    correct2.remove();
  }, 1000);
}

// display Wrong
function wrong() {
  var wrong2 = document.createElement("p");
  wrong2.style.marginTop = "30%";
  wrong2.style.display = "relative";
  wrong2.textContent = "WRONG!";
  body.appendChild(wrong2);
  setTimeout(function () {
    wrong2.remove();
  }, 600);
}

// display Wrong

// click on answer button
answerButtons1.forEach(function (i) {
  i.addEventListener("click", function () {
    question1.style.visibility = "hidden";
    question2.style.visibility = "visible";
  });
});

answerButtons2.forEach(function (i) {
  i.addEventListener("click", function () {
    question2.style.visibility = "hidden";
    question3.style.visibility = "visible";
  });
});

answerButtons3.forEach(function (i) {
  i.addEventListener("click", function () {
    question3.style.visibility = "hidden";
    question4.style.visibility = "visible";
  });
});

answerButtons4.forEach(function (i) {
  i.addEventListener("click", function () {
    question4.style.visibility = "hidden";
    submitPage.style.visibility = "visible";
  });
});

// Grabbing wrong button
var clickWrong = wrongButton.forEach(function (i) {
  i.addEventListener("click", function (event) {
    timerCount = timerCount - 30;
    wrong();
  });
});

// Grabbing right button
var clickRight = rightButton.forEach(function (i) {
  i.addEventListener("click", function (event) {
    right();
  });
});

//sets timer
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
      question1.style.visibility = "hidden";
      question2.style.visibility = "hidden";
      question3.style.visibility = "hidden";
      question4.style.visibility = "hidden";
      submitPage.style.visibility = "visible";
      scoreOutput.textContent = " " + timerCount;
    }
  }, 1000);
}

function hideQuestions() {
  question1.style.visibility = "hidden";
  question2.style.visibility = "hidden";
  question3.style.visibility = "hidden";
  question4.style.visibility = "hidden";
  submitPage.style.visibility = "hidden";
}

var scoreInput = document.querySelector("#score");
var submitEl = document.querySelector("#submit");
var scoreOutput = document.querySelector(".score");
var name1 = document.getElementById("dog").value;

function showResponse(event) {
  event.preventDefault();
  console.log(event);
  scoreOutput.textContent = " " + timerCount;
  localStorage.setItem("initials", name1);
  localStorage.setItem("score", timerCount);
}

submitEl.addEventListener("click", showResponse);
