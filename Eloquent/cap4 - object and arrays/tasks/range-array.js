const range = (min, max, optional = min < max ? 1 : -1) => {
  let arr = [];
  if (optional > 0) {
    while (min++ <= max) arr.push(min - 1);
  } else while (min-- >= max) arr.push(min + 1);
  return arr;
};

function sum(arr) {
  let total = 0;
  for (let value of arr) total += value;
  return total;
}

range(1, 10); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(5, 2); // [ 5, 4, 3, 2 ]
sum(range(1, 10)); // 55

module.exports = { rangeToArray: range, sumArray: sum };
