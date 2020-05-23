function every(array, test) {
  for (let num of array) {
    if (!test(num)) {
      return false;
    }
  }
  return true;
}

function every(arr, test) {
  return !arr.some((cur, idx, arr) => !test(cur));
}

console.log(every([1, 3, 5], (n) => n < 10)); // → true
console.log(every([2, 4, 16], (n) => n < 10)); // → false
console.log(every([], (n) => n < 10)); // → true

// O método some() testa se algum dos elementos no array passam no teste implementado pela função atribuída.
// retorna um boolean

function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
