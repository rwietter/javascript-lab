function fn() {
  let x = 'function scope';

  if (true) {
    let y = 'not block scope';
  }

  function innerFn() {
    console.log(x, y); // function scope not block scope
  }
  innerFn();
}
fn();

// ===== Escopo var ====
console.log(x); // undefined
var x = 10;

// ==== Escopo let ====
console.log(x); // Uncaught ReferenceError: x is not defined // TDZ
let x = 10;
