// Compose + Partial Application
const multiplyBy = (value) => value * 2;
const add = (value) => value + 1;

const compose = (...fns) => (data) => fns.reduce((mem, fn) => fn(mem), data);

const calculate2 = compose(add, multiplyBy);
console.log(calculate2(2)); // 6

// Normal
const calculate1 = (x) => (x + 1) * 2;
console.log(calculate1(2)); // 6
