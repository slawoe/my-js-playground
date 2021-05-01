//SELECTORS
const body = document.querySelector("body");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");
const resetCountdownButton = document.querySelector("#resetCountdownButton");

//GLOBAL VARIABLES
let time = 0;
let countdownTime = 0;
const msSecond = 1000; // 1000ms
const msMinute = msSecond * 60; //60000ms
const msHour = msMinute * 60; //3600000ms

//FUNCTIONS
function buttonsOff() {
  startButton.disabled = true;
  pauseButton.disabled = true;
  stopButton.disabled = true;
  resetButton.disabled = true;
  resetCountdownButton.disabled = true;
}
function timerInputUpdate() {
  time =
    hours.value * msHour + minutes.value * msMinute + seconds.value * msSecond;
  countdownTime = time;
}
function timePrettifier(key) {
  if (key.value < 10) {
    key.value = `0${key.value}`.slice(-2);
  }
}
function prettifyTime() {
  timePrettifier(hours);
  timePrettifier(minutes);
  timePrettifier(seconds);
}
function updateShownTime() {
  hours.value = Math.floor(time / msHour);
  minutes.value = Math.floor((time % msHour) / msMinute);
  seconds.value = ((time % msHour) % msMinute) / msSecond;
  prettifyTime();
}

//EVENT LISTENERS
body.addEventListener("change", () => {
  timerInputUpdate();
  prettifyTime();
  if (time === 0) {
    buttonsOff();
  } else {
    startButton.disabled = false;
    resetButton.disabled = false;
  }
});
startButton.addEventListener("click", () => {
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetCountdownButton.disabled = false;
  let counter = setInterval(() => {
    if (time >= msSecond) {
      time = time - msSecond;
      updateShownTime();
      pauseButton.addEventListener("click", () => {
        clearInterval(counter);
        pauseButton.disabled = true;
        startButton.disabled = false;
      });
    } else {
      startButton.disabled = true;
      pauseButton.disabled = true;
      resetButton.disabled = true;
      resetCountdownButton.disabled = true;
      stopButton.disabled = false;
      new Audio("./assets/audio/alert.mp3").play();
      let alarm = setInterval(() => {
        new Audio("./assets/audio/alert.mp3").play();
      }, 4500);
      stopButton.addEventListener("click", () => {
        location.reload();
      });
      clearInterval(counter);
    }
  }, msSecond);
});
resetButton.addEventListener("click", () => {
  location.reload();
});
resetCountdownButton.addEventListener("click", () => {
  time = countdownTime;
  updateShownTime();
});

buttonsOff();
