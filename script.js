if (!localStorage.getItem("hscore")) {
  localStorage.setItem("hscore", 0);
}

if (!localStorage.getItem("ascore")) {
  localStorage.setItem("ascore", 0);
}

if (!localStorage.getItem("foulsH")) {
  localStorage.setItem("foulsH", 0);
}

if (!localStorage.getItem("foulsA")) {
  localStorage.setItem("foulsA", 0);
}


if (!localStorage.getItem("periodn")) {
  localStorage.setItem("periodn", 1);
}

let periodn = localStorage.getItem("periodn");
let min = 0;
let sec = 05;
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
        localStorage.setItem("foulsH", 0);
        localStorage.setItem("foulsA", 0);
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

let foulsH = localStorage.getItem("foulsH")
let foulsA = localStorage.getItem("foulsA")

function addFoulH() {
  foulsH < 5 ? foulsH++ : foulsH;
  document.querySelector("#foulsHomeN").innerHTML = foulsH;
  localStorage.setItem("foulsH", foulsH);
}

function addFoulA() {
  foulsA < 5 ? foulsA++ : foulsA + 0;
  document.querySelector("#foulsAwayN").innerHTML = foulsA;
  localStorage.setItem("foulsA", foulsA);
}

function resetScore() {
  document.getElementById("pNum").innerHTML = 1;
  document.getElementById("home").innerHTML = 0;
  document.getElementById("away").innerHTML = 0;
  document.getElementById("time").innerHTML = "10:00";
  document.querySelector("#foulsHomeN").innerHTML = 0;
  document.querySelector("#foulsAwayN").innerHTML = 0;
  min = 10;
  sec = 0;
  periodn = 1;
  hscore = 0;
  ascore = 0;
  foulsH = 0;
  foulsA = 0;
  localStorage.setItem("periodn", periodn);
  localStorage.setItem("hscore", hscore);
  localStorage.setItem("ascore", ascore);
  localStorage.setItem("foulsH", foulsH);
  localStorage.setItem("foulsA", foulsA);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("pNum").innerHTML = localStorage.getItem("periodn");
  document.getElementById("playTime").onclick = play;
  document.getElementById("home").innerHTML = localStorage.getItem("hscore");
  document.getElementById("home1").onclick = hscore1;
  document.getElementById("home2").onclick = hscore2;
  document.getElementById("home3").onclick = hscore3;
  document.getElementById("away").innerHTML = localStorage.getItem("ascore");
  document.getElementById("away1").onclick = ascore1;
  document.getElementById("away2").onclick = ascore2;
  document.getElementById("away3").onclick = ascore3;
  document.querySelector("#foulsHomeN").innerHTML = localStorage.getItem("foulsH")
  document.querySelector("#foulsHadd").onclick = addFoulH;
  document.querySelector("#foulsAwayN").innerHTML = localStorage.getItem("foulsA")
  document.querySelector("#foulsAadd").onclick = addFoulA;
  document.getElementById("resetScore").onclick = resetScore;
});
