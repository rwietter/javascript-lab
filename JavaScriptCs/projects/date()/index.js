/* +----------------- Mode One -----------------+ */
const date = new Date();

function getWeek() {
  return date.getDay();
}

function getDayNumber() {
  return date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
}

function getMonthNumber() {
  return date.getMonth();
}

function getDateFullYearNumber() {
  return date.getFullYear();
}

function getHoursNumber() {
  return date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
}

function getMinutesNumber() {
  return date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
}

function getSeconds() {
  return date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`;
}

function getWeekToString(day) {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return week[day];
}

function getMonthToString(month) {
  const arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return arr[month];
}

(function setFormatDate() {
  const getAtribute = document.getElementById("text");
  getAtribute.innerHTML = `${getWeekToString(
    getWeek()
  )}, ${getDayNumber()} of ${getMonthToString(
    getMonthNumber()
  )} of ${getDateFullYearNumber()} ${getHoursNumber()}:${getMinutesNumber()}:${getSeconds()}`;
})();

/* +----------------- Mode two -----------------+ */

const section = document.querySelector(".background"); // get section element
const dateFormat = date.toLocaleDateString(
  "pt-BR",
  (options = { dateStyle: "full", timeStyle: "medium" })
); // get date style formated
const h1 = document.createElement("h1"); // create element h1 for insert section query
h1.innerHTML = dateFormat.fontsize(5); // insert date formated to h1 element
section.appendChild(h1); // section query push date formated to h1 new element

/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects */
