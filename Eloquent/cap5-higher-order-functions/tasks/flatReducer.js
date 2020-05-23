let arr = [[1, 2, 3], [4, 5], [6]];

const reducer = (acc, cur) => {
  return acc.concat(cur);
};

let flatArr = arr.reduce(reducer, []);

console.log(flatArr);
