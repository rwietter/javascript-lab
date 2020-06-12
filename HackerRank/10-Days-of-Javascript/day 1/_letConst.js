"use strict";

(() => {
  const r = readLine(); // execute in HackerRank
  const PI = Math.PI;
  // Print the area of the circle:
  const area = (r) =>
    r > 0 && r <= 100 ? console.log(Math.pow(r, 2) * PI) : false;
  // Print the perimeter of the circle:
  const perimeter = (r) =>
    r > 0 && r <= 100 ? console.log(2 * PI * r) : false;

  area(r);
  perimeter(r);
})();
