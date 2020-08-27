const composition = (...fns) => (input) =>
  fns.reduceRight((mem, fn) => fn(mem), input);

const double = (x) => x * 2;
const addOne = (x) => x + 1;
const square = (x) => x * x;

const result = composition(addOne, double, square)(2);
console.log(result);
