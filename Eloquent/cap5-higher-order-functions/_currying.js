const curried = (sum1) => {
  return (sum2) => {
    return sum1 + sum2;
  };
};
const sumCurried = curried(2);
console.log(sumCurried(2));

// para chamar com todos os argumentos de uma vez, então:
console.log(curried(2)(4)); // 6

// -------------------------------------

const curriedSum = (a, b) => {
  if (b === undefined)
    return (c) => {
      return a + c;
    };
  else return a * b;
};
console.log(curriedSum(2)(4)); // 6
console.log(curriedSum(3, 3)); // 9

// --------------
console.log("\nCurried function:");

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function mean(a, b, c) {
  return a + b + c;
}
const curriedMean = curry(mean);
console.log(curriedMean(1, 2, 3));
console.log(curriedMean(1, 2)(3));
console.log(curriedMean(1)(2)(3));

console.log("--------------------- Discount Curried ---------------------");
const getDiscount = (discount) => (price) => price * discount;
const discount = getDiscount(0.5);
console.log(discount(200));
console.log(discount(300));
console.log(discount(400));
