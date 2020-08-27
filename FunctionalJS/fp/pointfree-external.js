const arr = ['1', '2', '3'];
const parseArray = (fn) => (...args) => fn(args[0]);
const parsed = (array) => array.map(parseArray(parseInt));
console.log(parsed(arr));
