import './styles.css';
import { refs } from './js/refs';
import BSN from 'bootstrap.native';
const modal = new BSN.Modal('#myModal');
const {
  userInput,
  daysSpan,
  hoursSpan,
  minsSpan,
  secsSpan,
  startBtn,
  pauseBtn,
  resetBtn,
} = refs;

let targetDate = null;

class CountdownTimer {
  constructor() {
    this.intervalId = null;
    this.isActive = false;
  }
  start() {
    if (this.isActive) {
      return;
    }
    if (targetDate === null) {
      modal.show();
      return;
    }
    this.isActive = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      daysSpan.textContent = days;
      hoursSpan.textContent = hours + ':';
      minsSpan.textContent = mins + ':';
      secsSpan.textContent = secs;
    }, 1000);
  }
  pause() {
    pauseBtn.disabled = true;
    this.isActive = false;
    startBtn.disabled = false;
    clearInterval(this.intervalId);
  }
  reset() {
    clearInterval(this.intervalId);
    defaultState();
    this.intervalId = null;
    this.isActive = false;
  }
}

const timer = new CountdownTimer({
  targetDate: new Date(),
});

function defaultState() {
  userInput.value = null;
  targetDate = null;
  pauseBtn.disabled = false;
  startBtn.disabled = false;
  daysSpan.textContent = '00';
  hoursSpan.textContent = '00';
  minsSpan.textContent = '00';
  secsSpan.textContent = '00';
}

function pad(value) {
  return String(value).padStart(2, '0');
}
function getTimeComponents(currentTime) {
  const days = pad(Math.floor(currentTime / (1000 * 60 * 60 * 24)));

  const hours = pad(
    Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((currentTime % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}

function date(e) {
  targetDate = new Date(e.currentTarget.value);
}
function onStartBtn() {
  timer.start();
}
function onPauseBtn() {
  timer.pause();
}
function onResetBtn() {
  timer.reset();
}
userInput.addEventListener('input', date);
startBtn.addEventListener('click', onStartBtn);
pauseBtn.addEventListener('click', onPauseBtn);
resetBtn.addEventListener('click', onResetBtn);
