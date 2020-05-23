const arrayToList = (arr) => {
  let list = null;
  for (let i = 0; i < arr.length; i++) {
    list = { value: arr[i], rest: list };
  }
  return list;
};

const listToArray = (list) => {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};

const prepend = (value, rest) => {
  let list = {};
  list = { value: value, rest: rest };
  return list;
};

const nth = ({ value, rest }, op) => {
  return !value ? undefined : op === 0 ? value : nth(rest, op - 1);
};
console.log(arrayToList([10, 20])); // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]
console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20
