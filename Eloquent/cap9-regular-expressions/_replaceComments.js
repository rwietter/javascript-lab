/* --------------- Replace Comments  ----------- */
/* --------------------------------------------- */

function strip(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
let comment = "x += y // sum x = x + y";
console.log(strip(comment));
