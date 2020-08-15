// ---------------------------------------
const sum = (a, b) => console.log(a + b);

function exec(sum, a, b) {
  return sum(a, b);
}

const res = exec(sum, 4, 6);
console.log(res);

// ---------------------------------------
const cb = () => console.log('Hello, callback!');
setInterval(() => sum(2, 5), 5000);
console.log('fim');
