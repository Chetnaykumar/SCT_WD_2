let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = false;
let interval;

/* ELEMENTS */

const minutesDisplay =
document.getElementById("minutes");

const secondsDisplay =
document.getElementById("seconds");

const millisecondsDisplay =
document.getElementById("milliseconds");

const startBtn =
document.getElementById("startBtn");

const pauseBtn =
document.getElementById("pauseBtn");

const resetBtn =
document.getElementById("resetBtn");

const lapBtn =
document.getElementById("lapBtn");

const laps =
document.getElementById("laps");

const lapCount =
document.getElementById("lapCount");

let lapCounter = 0;

/* UPDATE DISPLAY */

function updateDisplay(){

  minutesDisplay.innerHTML =
  minutes < 10 ? "0" + minutes : minutes;

  secondsDisplay.innerHTML =
  seconds < 10 ? "0" + seconds : seconds;

  millisecondsDisplay.innerHTML =
  milliseconds < 10 ? "0" + milliseconds : milliseconds;
}

/* START */

function startTimer(){

  if(timer){
    return;
  }

  timer = true;

  interval = setInterval(() => {

    milliseconds++;

    if(milliseconds >= 100){

      milliseconds = 0;
      seconds++;

      if(seconds >= 60){

        seconds = 0;
        minutes++;
      }
    }

    updateDisplay();

  },10);
}

/* PAUSE */

function pauseTimer(){

  timer = false;

  clearInterval(interval);
}

/* RESET */

function resetTimer(){

  timer = false;

  clearInterval(interval);

  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  lapCounter = 0;

  laps.innerHTML = "";

  lapCount.innerHTML = "0 Laps";

  updateDisplay();
}

/* LAP */

function addLap(){

  if(
    minutes === 0 &&
    seconds === 0 &&
    milliseconds === 0
  ){
    return;
  }

  lapCounter++;

  const li =
  document.createElement("li");

  li.innerHTML = `

    <span>Lap ${lapCounter}</span>

    <span>
      ${minutes < 10 ? "0"+minutes : minutes}
      :
      ${seconds < 10 ? "0"+seconds : seconds}
      :
      ${milliseconds < 10 ? "0"+milliseconds : milliseconds}
    </span>
  `;

  laps.prepend(li);

  lapCount.innerHTML =
  `${lapCounter} Laps`;
}

/* EVENTS */

startBtn.addEventListener(
  "click",
  startTimer
);

pauseBtn.addEventListener(
  "click",
  pauseTimer
);

resetBtn.addEventListener(
  "click",
  resetTimer
);

lapBtn.addEventListener(
  "click",
  addLap
);

/* INITIAL */

updateDisplay();