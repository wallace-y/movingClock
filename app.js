/* getting the current date/time */

const timeNow = function () {
  const d = new Date();
  const dH = d.getHours();
  const dM = d.getMinutes();
  console.log(d);
  console.log(dH);
  console.log(dM);
};

timeNow();

/* create location of the hour hand */

const hourHandPosition = function () {
  /* get the current hour */
  const d = new Date();
  const dH = d.getHours();
  /* grab the hour-hand by id */
  let hh = document.getElementById("hour-hand");
  /* if else to determine position */
  if (dH === 0 || dH === 24) {
    hh.style.transform = "rotateZ(0deg)";
  } else if (dH === 1 || dH === 13) {
    hh.style.transform = "rotateZ(30deg)";
  } else if (dH === 2 || dH === 14) {
    hh.style.transform = "rotateZ(60deg)";
  } else if (dH === 3 || dH === 15) {
    hh.style.transform = "rotateZ(90deg)";
  } else if (dH === 4 || dH === 16) {
    hh.style.transform = "rotateZ(120deg)";
  } else if (dH === 5 || dH === 17) {
    hh.style.transform = "rotateZ(150deg)";
  } else if (dH === 6 || dH === 18) {
    hh.style.transform = "rotateZ(180deg)";
  } else if (dH === 7 || dH === 19) {
    hh.style.transform = "rotateZ(210deg)";
  } else if (dH === 8 || dH === 20) {
    hh.style.transform = "rotateZ(240deg)";
  } else if (dH === 9 || dH === 21) {
    hh.style.transform = "rotateZ(270deg)";
  } else if (dH === 10 || dH === 22) {
    hh.style.transform = "rotateZ(300deg)";
  } else if (dH === 11 || dH === 23) {
    hh.style.transform = "rotateZ(300deg)";
  }
};

/* create function for position of the minute hand */
const minHandPosition = function () {
  /* get the current minutes */
  const d = new Date();
  const dM = d.getMinutes();
  /* grab the min-hand by id */
  let mH = document.getElementById("min-hand");
  let minHandDegree = 0 + dM * 6;
  mH.style.transform = "rotateZ(" + minHandDegree + "deg)";
};

/* function to run the hour and minute hand function every second */

const getTime = function () {
  setInterval(hourHandPosition, 1000);
  setInterval(minHandPosition, 1000);
};

getTime();
