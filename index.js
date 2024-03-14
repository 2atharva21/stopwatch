let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStopBtn").textContent = "Start";
    isRunning = false;
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById("startStopBtn").textContent = "Stop";
    isRunning = true;
  }
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime();
}

function displayTime() {
  const display = document.getElementById("display");
  const formattedTime =
    pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  display.textContent = formattedTime;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
  document.getElementById("startStopBtn").textContent = "Start";
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}


