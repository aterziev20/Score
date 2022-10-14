if (!localStorage.getItem("hscore")) {
  localStorage.setItem("hscore", 0);
}

if (!localStorage.getItem("ascore")) {
  localStorage.setItem("ascore", 0);
}

if (!localStorage.getItem("periodn")) {
  localStorage.setItem("periodn", 1);
}

let periodn = localStorage.getItem("periodn");
let min = 9;
let sec = 59;
let timers = -1;


function play() {
  if (timers == -1) {
    timers = setInterval(function () {
      if (sec < 0) {
        min--;
        sec = 59;
      }
      sec = sec <= 9 ? "0" + sec : sec;
      if (periodn < 4 && sec == 0 && min == 0) {
        periodn++;
        document.getElementById("pNum").innerHTML = periodn;
        localStorage.setItem("periodn", periodn);
        location.reload();
      } else if (periodn >= 4 && sec == 0 && min == 0) {
        alert("Game Over!");
        location.reload();
      }
      document.getElementById("time").innerHTML = time;
      if(min >= 10) {
      time.innerHTML = min + ":" + sec;
      }
      else {
        time.innerHTML = "0" + min + ":" + sec;
      }
      sec--;
    }, 1000);
  } else {
    clearInterval(timers);
    timers = -1;
  }
}

let hscore = localStorage.getItem("hscore");
let ascore = localStorage.getItem("ascore");


function hscore1() {
  hscore++;
  document.getElementById("home").innerHTML = hscore;
  localStorage.setItem("hscore", hscore);
}

function hscore2() {
  hscore = Number(hscore) + 2;
  document.getElementById("home").innerHTML = hscore;
  localStorage.setItem("hscore", hscore);
}

function hscore3() {
  hscore = Number(hscore) + 3;
  document.getElementById("home").innerHTML = hscore;
  localStorage.setItem("hscore", hscore);
}

function ascore1() {
  ascore++;
  document.getElementById("away").innerHTML = ascore;
  localStorage.setItem("ascore", ascore);
}

function ascore2() {
  ascore = Number(ascore) + 2;
  document.getElementById("away").innerHTML = ascore;
  localStorage.setItem("ascore", ascore);
}

function ascore3() {
  ascore = Number(ascore) + 3;
  document.getElementById("away").innerHTML = ascore;
  localStorage.setItem("ascore", ascore);
}

function resetScore() {
  document.getElementById("pNum").innerHTML = 1;
  document.getElementById("home").innerHTML = 0;
  document.getElementById("away").innerHTML = 0;
  document.getElementById("time").innerHTML = "10:00";
  min = 10;
  sec = 0;
  periodn = 1;
  hscore = 0;
  ascore = 0;
  localStorage.setItem("periodn", periodn);
  localStorage.setItem("hscore", hscore);
  localStorage.setItem("ascore", ascore);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("pNum").innerHTML = localStorage.getItem("periodn");
  document.getElementById("playIcon").onclick = play;
  document.getElementById("home").innerHTML = localStorage.getItem("hscore");
  document.getElementById("home1").onclick = hscore1;
  document.getElementById("home2").onclick = hscore2;
  document.getElementById("home3").onclick = hscore3;
  document.getElementById("away").innerHTML = localStorage.getItem("ascore");
  document.getElementById("away1").onclick = ascore1;
  document.getElementById("away2").onclick = ascore2;
  document.getElementById("away3").onclick = ascore3;
  document.getElementById("resetScore").ondblclick = resetScore;
});
