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

if (!localStorage.getItem("shotClock")) {
  localStorage.setItem("shotClock", 24);
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
        localStorage.setItem("foulsH", 0);
        localStorage.setItem("foulsA", 0);
        document.querySelector("#pNum").innerHTML = periodn;
        localStorage.setItem("periodn", periodn);
        clearInterval(timers);
        timers = -1;
        min = 10;
        sec = 0 + "0";
      } else if (periodn >= 4 && sec == 0 && min == 0) {
        alert("Game Over!");
        location.reload();
      }
      document.querySelector("#time").innerHTML = time;
      if (min >= 10) {
        time.innerHTML = min + ":" + sec;
      } else {
        time.innerHTML = "0" + min + ":" + sec;
      }
      sec--;
    }, 1000);
  } else {
    clearInterval(timers);
    timers = -1;
  }
}

let shotClock = 24;
let timerAttack = -1;
let alerted = "";

function attack() {
  if (timerAttack == -1) {
    timerAttack = setInterval(function () {
      if (shotClock > 0) {
        shotClock--;
        alerted = "no";
      } else if (shotClock <= 0 && alerted != "yes") {
        alert("Shot clock violation!");
        alerted = "yes";
        clearInterval(timerAttack);
        timerAttack = -1;
      }      
      document.querySelector("#attack").innerHTML = shotClock <= 9 ? "0" + shotClock : shotClock;
    }, 1000);
  } else {
    clearInterval(timerAttack);
    timerAttack = -1;
  }
}

function newAttack() {
  shotClock = 24;
  document.querySelector("#attack").innerHTML = shotClock;
  localStorage.setItem("shotClock", 24);
}

function halfAttack() {
  shotClock = 14;
  document.querySelector("#attack").innerHTML = shotClock;
  localStorage.setItem("shotClock", 14);
}

let hscore = localStorage.getItem("hscore");
let ascore = localStorage.getItem("ascore");

function hscore1() {
  hscore++;
  document.querySelector("#home").innerHTML = hscore;
  localStorage.setItem("hscore", hscore);
}

function hscore2() {
  hscore = Number(hscore) + 2;
  document.querySelector("#home").innerHTML = hscore;
  localStorage.setItem("hscore", hscore);
}

function hscore3() {
  hscore = Number(hscore) + 3;
  document.querySelector("#home").innerHTML = hscore;
  localStorage.setItem("hscore", hscore);
}

function ascore1() {
  ascore++;
  document.querySelector("#away").innerHTML = ascore;
  localStorage.setItem("ascore", ascore);
}

function ascore2() {
  ascore = Number(ascore) + 2;
  document.querySelector("#away").innerHTML = ascore;
  localStorage.setItem("ascore", ascore);
}

function ascore3() {
  ascore = Number(ascore) + 3;
  document.querySelector("#away").innerHTML = ascore;
  localStorage.setItem("ascore", ascore);
}

let foulsH = localStorage.getItem("foulsH");
let foulsA = localStorage.getItem("foulsA");

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
  document.querySelector("#time").innerHTML = "10:00";
  document.querySelector("#attack").innerHTML = 24;
  document.querySelector("#pNum").innerHTML = 1;
  document.querySelector("#home").innerHTML = 0;
  document.querySelector("#away").innerHTML = 0;
  document.querySelector("#foulsHomeN").innerHTML = 0;
  document.querySelector("#foulsAwayN").innerHTML = 0;
  min = 10;
  sec = 0;
  shotClock = 24;
  periodn = 1;
  hscore = 0;
  ascore = 0;
  foulsH = 0;
  foulsA = 0;
  localStorage.setItem("shotClock", shotClock);
  localStorage.setItem("periodn", periodn);
  localStorage.setItem("hscore", hscore);
  localStorage.setItem("ascore", ascore);
  localStorage.setItem("foulsH", foulsH);
  localStorage.setItem("foulsA", foulsA);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#pNum").innerHTML = localStorage.getItem("periodn");
  document.querySelector("#playTime").onclick = play;
  document.querySelector("#playAttack").onclick = attack;
  document.querySelector("#newAttack").onclick = newAttack;
  document.querySelector("#halfAttack").onclick = halfAttack; 
  document.querySelector("#home").innerHTML = localStorage.getItem("hscore");
  document.querySelector("#home1").onclick = hscore1;
  document.querySelector("#home2").onclick = hscore2;
  document.querySelector("#home3").onclick = hscore3;
  document.querySelector("#away").innerHTML = localStorage.getItem("ascore");
  document.querySelector("#away1").onclick = ascore1;
  document.querySelector("#away2").onclick = ascore2;
  document.querySelector("#away3").onclick = ascore3;
  document.querySelector("#foulsHomeN").innerHTML =
    localStorage.getItem("foulsH");
  document.querySelector("#foulsHadd").onclick = addFoulH;
  document.querySelector("#foulsAwayN").innerHTML =
    localStorage.getItem("foulsA");
  document.querySelector("#foulsAadd").onclick = addFoulA;
  document.querySelector("#resetScore").onclick = resetScore;
});
