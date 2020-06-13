//            0           1         2
//          0  1  2    0  1  2    0  1  2
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var [, , six] = arr[1];
console.log(six);

// or

var [, [, , six]] = arr;
console.log(six);
