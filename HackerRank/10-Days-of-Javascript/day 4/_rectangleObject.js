/* ---------------- Function ----------------- */
/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */

function rectangle(a, b) {
  if (a >= 1 && b <= 100) {
    const area = {
      length: a,
      width: b,
      perimeter: 2 * (a + b),
      area: a * b,
    };
    return area;
  }
}
const retangleObject = rectangle(4, 5);

/* ------------------ Class ------------------ */
/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */

class Rectangle {
  constructor(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
  }
}
const rec = new Rectangle(4, 5);
console.log(rec.length);
