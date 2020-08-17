const arr = [1, 5, 7, 2, 134];

function sum(array) {
  return array.filter((el) => el > 5);
}

function getSum(sumValues, array) {
  return sumValues(array);
}

const hasSum = getSum(sum, arr);

hasSum.map((el) => {
  console.log(`Map is ${el} * 2 === ${el * 2}`);
});
