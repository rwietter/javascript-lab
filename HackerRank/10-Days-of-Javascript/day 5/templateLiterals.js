"use strict";

function readLine() {
  return inputString[currentLine++];
}

function sides(literals, ...expressions) {
  const [area, perimeter] = expressions;

  const sqrt = Math.sqrt(Math.pow(perimeter, 2) - 16 * area);
  const s1 = (perimeter + sqrt) / 4;
  const s2 = (perimeter - sqrt) / 4;

  return [s1, s2].sort();
}
