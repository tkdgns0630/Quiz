var scores = document.querySelector("#scoreboard");

var dog = localStorage.getItem("initials", name1);
var cat = localStorage.getItem("score", timerCount);

var setText = function (text) {
  var par = document.createElement("P");
  par.innerText = dog + cat;
  document.body.appendChild(par);
};
