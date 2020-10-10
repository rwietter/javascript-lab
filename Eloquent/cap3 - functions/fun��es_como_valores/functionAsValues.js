let square = (number) => number * number;

let resultSquare = square(7);
console.log(resultSquare);

// Funções como objetos
let functionObjectSquare = {
  square: function (x) {
    return x * x;
  },
}; // object literal

let result = functionObjectSquare.square(16);
console.log(result);
