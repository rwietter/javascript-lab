let isEven = (number) => {
  if (number === 0 || number === -1) {
    return true + ", Is Even";
  } else if (number % 2 === 1) {
    return false + ", Is Odd";
  } else {
    return isEven(number - 2);
  }
};
console.log(isEven(-1));

// Refactor

let _isEven = (number) =>
  number === 0 || number === -1
    ? "Is Even"
    : number % 2 === 1
    ? "Is Odd"
    : _isEven(number - 2);
console.log(_isEven(-1));
