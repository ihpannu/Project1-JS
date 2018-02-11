const now = new Date();

// This sets seconds of the clocks
function setSeconds() {
  const now = new Date();
  const seconds = now.getSeconds();
  //   console.log(seconds);
  const secondHand = document.querySelector(".second-hand");
  const secondsDeg = seconds / 60 * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
}

// This sets minutes of the clocks
function setMinutes() {
  const minutes = now.getMinutes();
  //   console.log(minutes);
  const minHand = document.querySelector(".min-hand");
  const minDeg = minutes / 60 * 360 + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;
}

// This sets minutes of the clocks
function setHour() {
  const hours = now.getHours();
  //   console.log(hours);
  const hourHand = document.querySelector(".hour-hand");
  const hourDeg = hours / 12 * 360 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setSeconds, 0);
setInterval(setMinutes, 0);
setInterval(setHour, 0);
