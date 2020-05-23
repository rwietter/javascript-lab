const multiply = (m) => {
  return (n) => {
    return n * m;
  };
};
const num = multiply(2);

console.log(num(2));
console.log(num(3));
console.log(num(4));

// ---------------

const sum = (arr, test) => {
  return arr.reduce((acc, cur) => acc * test(cur));
};

const res = sum([1, 2, 3], (n) => n * 2);
console.log(res); // -> 24
