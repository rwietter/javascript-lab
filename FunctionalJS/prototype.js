function Sum(a, b) {
  return a + b;
}

const constructor = Sum.prototype.constructor(1, 2);
console.log('the constructor references the function itself: ', constructor);

/**
Prototype serve para adicionar novos metodos e extender libs
 */

console.log(Sum.prototype);
const s = new Sum();
console.log(s.__proto__.constructor(2, 3));
